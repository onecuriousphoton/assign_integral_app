import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';
import { getIntegralForDate } from '../data/integrals';
import { addDays, DEFAULT_SETTINGS, formatTime12h, getLocalDateKey } from './gameLogic';

const CHANNEL_ID = 'assign-integral-v2';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
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
  const endTotalMin =
    settings.morningHour * 60 + settings.morningMinute + (settings.windowHours || 5) * 60;
  const endStr = formatTime12h(Math.floor((endTotalMin % 1440) / 60), endTotalMin % 60);

  return {
    title: '∫ Today’s Integral Dropped',
    subtitle: `${settings.timerMinutes}-min timer · Window ends ${endStr}`,
    body: `${q.notifText}\nSolve before ${endStr} to keep your streak alive.`,
    sound: true,
    color: '#AEEE01',
    priority: Notifications.AndroidNotificationPriority.MAX,
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
    priority: Notifications.AndroidNotificationPriority.MAX,
    data: { dateKey: q.dateKey, phase: 'NIGHT' },
  };
}

export async function syncScheduledNotifications(
  todayAlreadySolved,
  settings = DEFAULT_SETTINGS,
  solvedIds = new Set()
) {
  await Notifications.cancelAllScheduledNotificationsAsync();
  if (!settings.notificationsEnabled) return;

  const granted = await initNotifications();
  if (!granted) return;

  const DATE_TYPE = Notifications.SchedulableTriggerInputTypes?.DATE ?? 'date';
  const now = new Date();
  const todayKey = getLocalDateKey(now);

  // Track solved + already-scheduled IDs so no two days get the same integral
  const usedIds = new Set(solvedIds);

  for (let offset = 0; offset < 14; offset++) {
    const dateKey = addDays(todayKey, offset);
    const [y, m, d] = dateKey.split('-').map(Number);
    const q = getIntegralForDate(dateKey, 0, settings.difficultyFilter, usedIds);
    usedIds.add(q.id);

    const morningDate = new Date(y, m - 1, d, settings.morningHour, settings.morningMinute, 0);
    if (morningDate.getTime() > now.getTime() + 5000) {
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
    if (!skipTonight && nightDate.getTime() > now.getTime() + 5000) {
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
  try {
    const granted = await initNotifications();
    if (!granted) return { ok: false, error: 'Notification permission not granted.' };

    const DATE_TYPE = Notifications.SchedulableTriggerInputTypes?.DATE ?? 'date';

    await Notifications.scheduleNotificationAsync({
      content: buildMorningContent(integral, settings),
      trigger: {
        type: DATE_TYPE,
        date: new Date(Date.now() + 3000),
        channelId: CHANNEL_ID,
      },
    });
    return { ok: true };
  } catch (err) {
    return { ok: false, error: err?.message || 'Failed to schedule notification.' };
  }
}