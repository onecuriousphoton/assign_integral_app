import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';
import { getIntegralForDate } from '../data/integrals';
import { addDays, DEFAULT_SETTINGS, formatTime12h, getLocalDateKey } from './gameLogic';

const CHANNEL_ID = 'assign-integral-v2';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowBanner: true,
    shouldShowList: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export async function initNotifications() {
  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync(CHANNEL_ID, {
      name: 'Daily Integral Alerts',
      description: 'Daily integral drops and evening second-chance reminders',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 180, 110, 180],
      lightColor: '#AEEE01',
      enableVibrate: true,
      lockscreenVisibility: Notifications.AndroidNotificationVisibility.PUBLIC,
    });
  }

  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }
  return finalStatus === 'granted';
}

function buildMorningContent(q, settings) {
  const endTotalMin = settings.morningHour * 60 + settings.morningMinute + (settings.windowHours || 5) * 60;
  const endStr = formatTime12h(Math.floor((endTotalMin % 1440) / 60), endTotalMin % 60);

  return {
    title: '∫ Today’s Integral Dropped',
    subtitle: `${settings.timerMinutes}-min timer · Window ends ${endStr}`,
    body: `${q.notifText}\nSolve before ${endStr} to keep your streak alive.`,
    sound: true,
    color: '#AEEE01',
    data: { dateKey: q.dateKey, phase: 'MORNING' },
  };
}

function buildNightContent(q, settings) {
  return {
    title: '⚡ Second Chance · Protect Your HP',
    subtitle: `Same integral · ${settings.timerMinutes}-min focus timer`,
    body: `${q.notifText}\nStill unsolved today — tap to solve before midnight.`,
    sound: true,
    color: '#AEEE01',
    data: { dateKey: q.dateKey, phase: 'NIGHT' },
  };
}

export async function syncScheduledNotifications(todayAlreadySolved, settings = DEFAULT_SETTINGS) {
  await Notifications.cancelAllScheduledNotificationsAsync();
  if (!settings.notificationsEnabled) return;

  const granted = await initNotifications();
  if (!granted) return;

  const DATE_TYPE = Notifications.SchedulableTriggerInputTypes?.DATE ?? 'date';
  const now = new Date();
  const todayKey = getLocalDateKey(now);

  for (let offset = 0; offset < 7; offset++) {
    const dateKey = addDays(todayKey, offset);
    const [y, m, d] = dateKey.split('-').map(Number);
    const q = getIntegralForDate(dateKey, 0, settings.difficultyFilter);

    const morningDate = new Date(y, m - 1, d, settings.morningHour, settings.morningMinute, 0);
    if (morningDate > now) {
      await Notifications.scheduleNotificationAsync({
        content: buildMorningContent(q, settings),
        trigger: {
          type: DATE_TYPE,
          date: morningDate,
          channelId: CHANNEL_ID,
        },
      });
    }

    const skipTonight = offset === 0 && todayAlreadySolved;
    const nightDate = new Date(y, m - 1, d, settings.nightHour, settings.nightMinute, 0);
    if (!skipTonight && nightDate > now) {
      await Notifications.scheduleNotificationAsync({
        content: buildNightContent(q, settings),
        trigger: {
          type: DATE_TYPE,
          date: nightDate,
          channelId: CHANNEL_ID,
        },
      });
    }
  }
}

export async function sendTestNotification(integral, settings = DEFAULT_SETTINGS) {
  const granted = await initNotifications();
  if (!granted) return false;

  const INTERVAL_TYPE = Notifications.SchedulableTriggerInputTypes?.TIME_INTERVAL ?? 'timeInterval';

  await Notifications.scheduleNotificationAsync({
    content: buildMorningContent(integral, settings),
    trigger: {
      type: INTERVAL_TYPE,
      seconds: 3,
      repeats: false,
      channelId: CHANNEL_ID,
    },
  });
  return true;
}