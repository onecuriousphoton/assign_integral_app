import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Alert,
  AppState,
  StatusBar as RNStatusBar,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Haptics from 'expo-haptics';
import * as Notifications from 'expo-notifications';
import {
  Check,
  Clock,
  Home,
  Maximize2,
  PenLine,
  RotateCcw,
  SlidersHorizontal,
} from 'lucide-react-native';

import { getIntegralForDate } from '../data/integrals';
import {
  DEFAULT_SETTINGS,
  evaluatePlayerState,
  formatTime12h,
  getLocalDateKey,
  getWindowState,
} from '../utils/gameLogic';
import { sendTestNotification, syncScheduledNotifications } from '../utils/notifications';
import DotMatrixText from '../components/DotMatrixText';
import MathView from '../components/MathView';
import LifeHud from '../components/LifeHud';
import StreakGrid from '../components/StreakGrid';
import SettingsModal from '../components/SettingsModal';
import FocusSolveModal from '../components/FocusSolveModal';
import WoodLogIcon from '../components/WoodLogIcon';
import LaunchScreen from '../components/LaunchScreen';
import ManualModal from '../components/ManualModal';

const STORAGE_LOGS_KEY = '@assign_integral_logs_v2';
const STORAGE_META_KEY = '@assign_integral_meta_v2';
const STORAGE_SETTINGS_KEY = '@assign_integral_settings_v2';
const STORAGE_MANUAL_SEEN_KEY = '@assign_integral_manual_seen_v1';

const QUICK_TAGS = [
  'Substitution',
  'By Parts',
  "King's Property",
  'Feynman Trick',
  'Trig Sub',
  'Leibniz Rule',
];
const WEEKDAYS = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

export default function App() {
  return (
    <SafeAreaProvider>
      <MainApp />
    </SafeAreaProvider>
  );
}

function formatDuration(sec) {
  const m = String(Math.floor(sec / 60)).padStart(2, '0');
  const s = String(sec % 60).padStart(2, '0');
  return `${m}:${s}`;
}

const LogItemCard = React.memo(function LogItemCard({ item }) {
  return (
    <View style={styles.logCard}>
      <View style={styles.logCardHeader}>
        <View style={styles.logDateRow}>
          <Clock size={12} color="#71717A" strokeWidth={2.1} />
          <Text style={styles.logDate}>{item.dateKey}</Text>
        </View>
        <View
          style={[
            styles.statusBadge,
            item.status === 'solved' ? styles.badgeSolved : styles.badgeUnsolved,
          ]}
        >
          <Text
            style={[
              styles.statusBadgeText,
              item.status === 'solved' ? styles.textSolved : styles.textUnsolved,
            ]}
          >
            {item.status === 'solved'
              ? `SOLVED · ${formatDuration(item.timeTakenSec || 0)}`
              : 'UNSOLVED'}
          </Text>
        </View>
      </View>

      <View style={styles.logMathBox}>
        <MathView
          latex={item.latex || item.expr || ''}
          fallback={item.notifText || item.expr || ''}
          fontSize={18}
          minHeight={54}
        />
      </View>

      <View style={styles.noteBox}>
        <PenLine size={13} color="#71717A" strokeWidth={2.1} style={{ marginTop: 2 }} />
        <Text style={styles.logNote}>{item.note}</Text>
      </View>
    </View>
  );
});

function MainApp() {
  const insets = useSafeAreaInsets();
  const topInset = Math.max(
    insets.top,
    Platform.OS === 'android' ? RNStatusBar.currentHeight || 28 : 12
  );
  const bottomInset = Math.max(insets.bottom, 16);

  const [activeTab, setActiveTab] = useState('HOME');
  const [logFilter, setLogFilter] = useState('ALL');
  const [settingsOpen, setSettingsOpen] = useState(false);

  const [showLaunch, setShowLaunch] = useState(true);
  const [needsManual, setNeedsManual] = useState(false);
  const [manualVisible, setManualVisible] = useState(false);

  const [logs, setLogs] = useState([]);
  const [meta, setMeta] = useState({
    firstActiveDate: getLocalDateKey(),
    lastResurrectionDate: null,
  });
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);
  const [ready, setReady] = useState(false);
  const [clockTick, setClockTick] = useState(() => Date.now());

  const [focusOpen, setFocusOpen] = useState(false);

  const [noteModalVisible, setNoteModalVisible] = useState(false);
  const [pendingStatus, setPendingStatus] = useState('solved');
  const [pendingDuration, setPendingDuration] = useState(0);
  const [noteText, setNoteText] = useState('');

  // Load persisted state on boot
  useEffect(() => {
    (async () => {
      try {
        const [rawLogs, rawMeta, rawSettings, manualSeen] = await Promise.all([
          AsyncStorage.getItem(STORAGE_LOGS_KEY),
          AsyncStorage.getItem(STORAGE_META_KEY),
          AsyncStorage.getItem(STORAGE_SETTINGS_KEY),
          AsyncStorage.getItem(STORAGE_MANUAL_SEEN_KEY),
        ]);

        const loadedSettings = rawSettings
          ? { ...DEFAULT_SETTINGS, ...JSON.parse(rawSettings) }
          : DEFAULT_SETTINGS;

        const loadedLogs = rawLogs ? JSON.parse(rawLogs) : [];
        const loadedMeta = rawMeta
          ? JSON.parse(rawMeta)
          : { firstActiveDate: getLocalDateKey(), lastResurrectionDate: null };

        setSettings(loadedSettings);
        setLogs(loadedLogs);
        setMeta(loadedMeta);

        if (!manualSeen) {
          setNeedsManual(true);
        }
      } finally {
        setReady(true);
      }
    })();
  }, []);

  const handleLaunchFinish = useCallback(() => {
    setShowLaunch(false);
    if (needsManual) {
      setManualVisible(true);
    }
  }, [needsManual]);

  const handleDismissManual = useCallback(async () => {
    setManualVisible(false);
    setNeedsManual(false);
    await AsyncStorage.setItem(STORAGE_MANUAL_SEEN_KEY, 'true');
  }, []);

  // Refresh date/window on foreground resume and notification tap
  useEffect(() => {
    const appStateSub = AppState.addEventListener('change', (state) => {
      if (state === 'active') setClockTick(Date.now());
    });
    const notifSub = Notifications.addNotificationResponseReceivedListener(() => {
      setClockTick(Date.now());
      setActiveTab('HOME');
    });
    return () => {
      appStateSub.remove();
      notifSub.remove();
    };
  }, []);

  const player = useMemo(() => evaluatePlayerState(logs, meta), [logs, meta, clockTick]);
  const windowInfo = useMemo(
    () => getWindowState(settings),
    [settings, activeTab, logs.length, clockTick]
  );

  const dateDisplay = useMemo(() => {
    const now = new Date();
    return {
      dayNum: String(now.getDate()).padStart(2, '0'),
      weekday: WEEKDAYS[now.getDay()],
      monthYear: `${MONTHS[now.getMonth()]} ${now.getFullYear()}`,
    };
  }, [player.today]);

  useEffect(() => {
    if (!ready) return;
    syncScheduledNotifications(player.todaySolvedCount > 0, settings).catch(() => {});
  }, [ready, player.todaySolvedCount, player.today, settings]);

  const currentSlot = player.isDead ? Math.min(player.todaySolvedCount, 2) : 0;
  const currentIntegral = useMemo(
    () => getIntegralForDate(player.today, currentSlot, settings.difficultyFilter),
    [player.today, currentSlot, settings.difficultyFilter]
  );

  const isTodayCompleted = !player.isDead && player.todaySolvedCount >= 1;
  const sessionTotalSeconds = settings.timerMinutes * 60;

  const openFullScreenSolve = () => {
    if (settings.hapticsEnabled) Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setFocusOpen(true);
  };

  const handleFocusSolved = useCallback((elapsedSec) => {
    setFocusOpen(false);
    setPendingStatus('solved');
    setPendingDuration(elapsedSec);
    setNoteText('');
    setNoteModalVisible(true);
  }, []);

  const handleFocusUnsolved = useCallback((elapsedSec) => {
    setFocusOpen(false);
    setPendingStatus('unsolved');
    setPendingDuration(elapsedSec);
    setNoteText('');
    setNoteModalVisible(true);
  }, []);

  const saveEntry = async () => {
    const newEntry = {
      id: `${Date.now()}`,
      dateKey: player.today,
      latex: currentIntegral.latex,
      notifText: currentIntegral.notifText,
      difficulty: currentIntegral.difficulty,
      topic: currentIntegral.topic,
      status: pendingStatus,
      note:
        noteText.trim() ||
        (pendingStatus === 'solved' ? 'Solved cleanly.' : 'Timed out / skipped.'),
      timeTakenSec: pendingDuration,
      createdAt: new Date().toISOString(),
    };

    const updatedLogs = [newEntry, ...logs];
    setLogs(updatedLogs);
    await AsyncStorage.setItem(STORAGE_LOGS_KEY, JSON.stringify(updatedLogs));

    if (player.isDead && pendingStatus === 'solved' && player.todaySolvedCount + 1 >= 3) {
      const updatedMeta = { ...meta, lastResurrectionDate: player.today };
      setMeta(updatedMeta);
      await AsyncStorage.setItem(STORAGE_META_KEY, JSON.stringify(updatedMeta));
      if (settings.hapticsEnabled) {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      }
      Alert.alert('RESPAWNED!', '3 integrals crushed in 1 day. Full HP restored.');
    }

    setNoteModalVisible(false);
  };

  const updateSettings = async (nextSettings) => {
    setSettings(nextSettings);
    await AsyncStorage.setItem(STORAGE_SETTINGS_KEY, JSON.stringify(nextSettings));
  };

  const handleWipeAll = () => {
    Alert.alert(
      'Reset all logs & streaks?',
      'This permanently clears your history and restarts your streak from today.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Reset Everything',
          style: 'destructive',
          onPress: async () => {
            const cleanMeta = { firstActiveDate: player.today, lastResurrectionDate: null };
            setLogs([]);
            setMeta(cleanMeta);
            await Promise.all([
              AsyncStorage.setItem(STORAGE_LOGS_KEY, JSON.stringify([])),
              AsyncStorage.setItem(STORAGE_META_KEY, JSON.stringify(cleanMeta)),
            ]);
            setSettingsOpen(false);
            setActiveTab('HOME');
          },
        },
      ]
    );
  };

const handleTestNotification = async () => {
    const res = await sendTestNotification(currentIntegral, settings);
    Alert.alert(
      res.ok ? 'Test Notification Queued' : 'Notification Error',
      res.ok
        ? 'Alert arrives in 3 seconds.'
        : res.error
    );
  };

  const appendTag = (tag) => {
    setNoteText((prev) => (prev ? `${prev} · ${tag}` : tag));
  };

  const filteredLogs = useMemo(() => {
    if (logFilter === 'SOLVED') return logs.filter((l) => l.status === 'solved');
    if (logFilter === 'UNSOLVED') return logs.filter((l) => l.status === 'unsolved');
    return logs;
  }, [logs, logFilter]);

  const openSettings = () => {
    if (settings.hapticsEnabled) Haptics.selectionAsync();
    setSettingsOpen(true);
  };

  return (
    <View style={[styles.safe, { paddingTop: topInset }]}>
      <StatusBar style="dark" translucent backgroundColor="transparent" />

      {activeTab === 'HOME' ? (
        <ScrollView
          contentContainerStyle={[styles.scrollContent, { paddingBottom: bottomInset + 100 }]}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.dateHeaderRow}>
            <View style={styles.dateLockup}>
              <Text style={styles.dayNumber}>{dateDisplay.dayNum}</Text>
              <View>
                <Text style={styles.weekdayText}>{dateDisplay.weekday}</Text>
                <Text style={styles.monthYearText}>{dateDisplay.monthYear}</Text>
              </View>
            </View>

            <TouchableOpacity
              activeOpacity={0.75}
              onPress={openSettings}
              style={styles.settingsBtn}
            >
              <SlidersHorizontal size={18} color="#111113" strokeWidth={2.3} />
            </TouchableOpacity>
          </View>

          <LifeHud player={player} />

          <View style={[styles.heroCard, player.isDead && styles.heroCardDead]}>
            <View style={styles.cardTopRow}>
              <View style={styles.phaseBadge}>
                <View
                  style={[
                    styles.phaseDot,
                    { backgroundColor: player.isDead ? '#FF2D55' : windowInfo.accent },
                  ]}
                />
                <Text style={styles.phaseText}>
                  {player.isDead
                    ? `RESPAWN QUEST · ${player.resurrectionProgress + 1} OF 3`
                    : windowInfo.label}
                </Text>
              </View>

              <View style={styles.topicPill}>
                <Text style={styles.topicText}>{currentIntegral.difficulty}</Text>
              </View>
            </View>

            {isTodayCompleted ? (
              <View style={styles.completedBox}>
                <View style={styles.doneCircle}>
                  <Check size={26} color="#111113" strokeWidth={3} />
                </View>
                <DotMatrixText text="CLEARED" dotSize={2.3} gap={0.95} color="#111113" />
                <MathView
                  latex={currentIntegral.latex}
                  fallback={currentIntegral.notifText}
                  fontSize={20}
                  minHeight={62}
                />
                <Text style={styles.completedSub}>
                  Tonight's reminder cancelled. Next drop at{' '}
                  {formatTime12h(settings.morningHour, settings.morningMinute)}.
                </Text>
              </View>
            ) : (
              <>
                <View style={styles.mathStage}>
                  <MathView
                    latex={currentIntegral.latex}
                    fallback={currentIntegral.notifText}
                    fontSize={24}
                    minHeight={92}
                  />
                </View>

                <TouchableOpacity
                  activeOpacity={0.85}
                  onPress={openFullScreenSolve}
                  style={[styles.startBtn, player.isDead && styles.startBtnDead]}
                >
                  {player.isDead ? (
                    <RotateCcw size={18} color="#FFFFFF" strokeWidth={2.5} />
                  ) : (
                    <Maximize2 size={17} color="#111113" strokeWidth={2.5} />
                  )}
                  <Text style={[styles.startBtnText, player.isDead && { color: '#FFFFFF' }]}>
                    {player.isDead
                      ? `Open Respawn Trial (${player.resurrectionProgress + 1}/3)`
                      : `Start ${settings.timerMinutes}-Min Solve`}
                  </Text>
                </TouchableOpacity>
              </>
            )}
          </View>

          <StreakGrid logs={logs} />
        </ScrollView>
      ) : (
        <View style={styles.logContainer}>
          <View style={styles.logsHeader}>
            <View style={styles.logsTitleGroup}>
              <WoodLogIcon size={20} color="#111113" strokeWidth={2.2} />
              <DotMatrixText text="LOGS" dotSize={2.3} gap={0.9} color="#111113" />
            </View>
            <TouchableOpacity
              activeOpacity={0.75}
              onPress={openSettings}
              style={styles.settingsBtn}
            >
              <SlidersHorizontal size={18} color="#111113" strokeWidth={2.3} />
            </TouchableOpacity>
          </View>

          <View style={styles.filterBar}>
            {['ALL', 'SOLVED', 'UNSOLVED'].map((f) => (
              <TouchableOpacity
                key={f}
                onPress={() => setLogFilter(f)}
                style={[styles.filterPill, logFilter === f && styles.filterPillActive]}
              >
                <Text style={[styles.filterText, logFilter === f && styles.filterTextActive]}>
                  {f}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <FlatList
            data={filteredLogs}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <LogItemCard item={item} />}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[styles.logList, { paddingBottom: bottomInset + 100 }]}
            initialNumToRender={5}
            maxToRenderPerBatch={4}
            windowSize={5}
            ListEmptyComponent={
              <View style={styles.emptyLogBox}>
                <WoodLogIcon size={36} color="#C8C8BE" strokeWidth={1.9} />
                <Text style={styles.emptyLogTitle}>No logs yet</Text>
                <Text style={styles.emptyLogSub}>
                  Solved and timed-out integrals with your method notes will show up here.
                </Text>
              </View>
            }
          />
        </View>
      )}

      {/* Floating 2.5D Bottom Dock */}
      <View style={[styles.tabBarWrap, { bottom: bottomInset + 8 }]}>
        <View style={styles.tabBar}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.tabItem, activeTab === 'HOME' && styles.tabItemActive]}
            onPress={() => setActiveTab('HOME')}
          >
            <Home
              size={18}
              color={activeTab === 'HOME' ? '#111113' : '#A1A1AA'}
              strokeWidth={2.3}
            />
            <Text style={[styles.tabLabel, activeTab === 'HOME' && styles.tabLabelActive]}>
              Home
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.tabItem, activeTab === 'LOGS' && styles.tabItemActive]}
            onPress={() => setActiveTab('LOGS')}
          >
            <WoodLogIcon
              size={18}
              color={activeTab === 'LOGS' ? '#111113' : '#A1A1AA'}
              strokeWidth={2.2}
            />
            <Text style={[styles.tabLabel, activeTab === 'LOGS' && styles.tabLabelActive]}>
              Logs ({logs.length})
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Full-Screen Focus Solve Modal */}
      <FocusSolveModal
        visible={focusOpen}
        integral={currentIntegral}
        totalSeconds={sessionTotalSeconds}
        hapticsEnabled={settings.hapticsEnabled}
        topInset={topInset}
        bottomInset={bottomInset}
        onSolved={handleFocusSolved}
        onUnsolved={handleFocusUnsolved}
      />

      {/* Post-Solve / Timeout Note Sheet */}
      <Modal
        visible={noteModalVisible}
        animationType="slide"
        transparent
        statusBarTranslucent
        navigationBarTranslucent
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.modalOverlay}
        >
          <View style={[styles.noteSheet, { paddingBottom: bottomInset + 18 }]}>
            <View style={styles.sheetHandle} />
            <DotMatrixText
              text={pendingStatus === 'solved' ? 'LOG METHOD' : 'UNSOLVED'}
              dotSize={2.2}
              gap={0.9}
              color={pendingStatus === 'solved' ? '#111113' : '#FF2D55'}
            />

            <View style={styles.sheetMathPreview}>
              <MathView
                latex={currentIntegral.latex}
                fallback={currentIntegral.notifText}
                fontSize={18}
                minHeight={52}
              />
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chipRow}>
              {QUICK_TAGS.map((tag) => (
                <TouchableOpacity key={tag} onPress={() => appendTag(tag)} style={styles.chip}>
                  <Text style={styles.chipText}>+ {tag}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>

            <TextInput
              style={styles.noteInput}
              placeholder={
                pendingStatus === 'solved'
                  ? 'Short note on the trick or substitution used...'
                  : 'Where did you get stuck? (optional)'
              }
              placeholderTextColor="#9CA3AF"
              multiline
              autoFocus
              value={noteText}
              onChangeText={setNoteText}
            />

            <TouchableOpacity style={styles.saveNoteBtn} onPress={saveEntry}>
              <Text style={styles.saveNoteText}>Save to Logs</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </Modal>

      {/* Full-Screen Settings Modal */}
      <SettingsModal
        visible={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        topInset={topInset}
        bottomInset={bottomInset}
        settings={settings}
        onUpdateSettings={updateSettings}
        onTestNotification={handleTestNotification}
        onWipeAll={handleWipeAll}
      />

      {/* First-Time User Manual */}
      <ManualModal
        visible={manualVisible}
        topInset={topInset}
        bottomInset={bottomInset}
        onDismiss={handleDismissManual}
      />

      {/* 1.7s Launch Screen */}
      <LaunchScreen
        visible={showLaunch}
        bottomInset={bottomInset}
        onFinish={handleLaunchFinish}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#F5F5F0',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 12,
    gap: 16,
  },
  dateHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 2,
  },
  dateLockup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  dayNumber: {
    fontSize: 44,
    fontWeight: '900',
    color: '#111113',
    letterSpacing: -1.8,
    lineHeight: 46,
    fontVariant: ['tabular-nums'],
  },
  weekdayText: {
    fontSize: 11,
    fontWeight: '900',
    color: '#111113',
    backgroundColor: '#AEEE01',
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 5,
    alignSelf: 'flex-start',
    overflow: 'hidden',
    letterSpacing: 0.9,
  },
  monthYearText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#71717A',
    marginTop: 4,
    letterSpacing: 0.6,
  },
  settingsBtn: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#DFDFD6',
    borderBottomWidth: 4,
    borderBottomColor: '#CDCDC2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 26,
    padding: 18,
    borderWidth: 1.5,
    borderColor: '#DFDFD6',
    borderBottomWidth: 6,
    borderBottomColor: '#CDCDC2',
    gap: 14,
  },
  heroCardDead: {
    borderColor: '#FF2D55',
    borderBottomColor: '#C21438',
  },
  cardTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
  },
  phaseBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    flexShrink: 1,
  },
  phaseDot: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
  },
  phaseText: {
    color: '#52525B',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.6,
  },
  topicPill: {
    backgroundColor: '#F4F4EE',
    paddingHorizontal: 9,
    paddingVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E5DC',
  },
  topicText: {
    color: '#111113',
    fontSize: 10,
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 0.6,
  },
  mathStage: {
    backgroundColor: '#F9F9F5',
    borderRadius: 18,
    paddingVertical: 14,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#E8E8DF',
    justifyContent: 'center',
  },
  startBtn: {
    backgroundColor: '#AEEE01',
    borderRadius: 16,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 9,
    borderWidth: 1.5,
    borderColor: '#111113',
    borderBottomWidth: 5,
    borderBottomColor: '#111113',
  },
  startBtnDead: {
    backgroundColor: '#0072FF',
    borderColor: '#0047A3',
    borderBottomColor: '#00367A',
  },
  startBtnText: {
    color: '#111113',
    fontSize: 15,
    fontWeight: '900',
    letterSpacing: 0.2,
  },
  completedBox: {
    alignItems: 'center',
    paddingVertical: 12,
    gap: 10,
  },
  doneCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#AEEE01',
    borderWidth: 1.5,
    borderColor: '#111113',
    borderBottomWidth: 4,
    borderBottomColor: '#111113',
    alignItems: 'center',
    justifyContent: 'center',
  },
  completedSub: {
    color: '#71717A',
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 18,
  },
  logContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 12,
  },
  logsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  logsTitleGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
  },
  filterBar: {
    flexDirection: 'row',
    backgroundColor: '#E7E7DF',
    borderRadius: 14,
    padding: 4,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#DCDCD2',
  },
  filterPill: {
    flex: 1,
    paddingVertical: 9,
    borderRadius: 10,
    alignItems: 'center',
  },
  filterPillActive: {
    backgroundColor: '#141418',
  },
  filterText: {
    color: '#71717A',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.6,
  },
  filterTextActive: {
    color: '#AEEE01',
  },
  logList: {
    gap: 14,
  },
  emptyLogBox: {
    alignItems: 'center',
    marginTop: 72,
    gap: 10,
  },
  emptyLogTitle: {
    color: '#111113',
    fontSize: 16,
    fontWeight: '800',
  },
  emptyLogSub: {
    color: '#71717A',
    fontSize: 13,
    textAlign: 'center',
    maxWidth: 250,
    lineHeight: 19,
  },
  logCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 16,
    borderWidth: 1.5,
    borderColor: '#DFDFD6',
    borderBottomWidth: 5,
    borderBottomColor: '#CDCDC2',
    gap: 10,
  },
  logCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logDateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  logDate: {
    color: '#71717A',
    fontSize: 12,
    fontWeight: '700',
  },
  statusBadge: {
    paddingHorizontal: 9,
    paddingVertical: 4,
    borderRadius: 8,
  },
  badgeSolved: {
    backgroundColor: '#AEEE01',
  },
  badgeUnsolved: {
    backgroundColor: '#FFE4E6',
  },
  statusBadgeText: {
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 0.4,
  },
  textSolved: {
    color: '#111113',
  },
  textUnsolved: {
    color: '#E11D48',
  },
  logMathBox: {
    backgroundColor: '#F9F9F5',
    borderRadius: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: '#ECECE4',
  },
  noteBox: {
    flexDirection: 'row',
    gap: 8,
    backgroundColor: '#F4F4EE',
    padding: 11,
    borderRadius: 12,
  },
  logNote: {
    color: '#27272A',
    fontSize: 13,
    flex: 1,
    lineHeight: 19,
  },
  tabBarWrap: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#141418',
    borderRadius: 999,
    padding: 6,
    gap: 6,
    borderWidth: 1.5,
    borderColor: '#2B2B34',
    borderBottomWidth: 5,
    borderBottomColor: '#000000',
  },
  tabItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    paddingVertical: 11,
    paddingHorizontal: 22,
    borderRadius: 999,
  },
  tabItemActive: {
    backgroundColor: '#AEEE01',
  },
  tabLabel: {
    color: '#A1A1AA',
    fontSize: 13,
    fontWeight: '800',
  },
  tabLabelActive: {
    color: '#111113',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(17, 17, 19, 0.45)',
  },
  noteSheet: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    padding: 22,
    gap: 12,
  },
  sheetHandle: {
    width: 38,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#E0E0D8',
    alignSelf: 'center',
    marginBottom: 2,
  },
  sheetMathPreview: {
    backgroundColor: '#F9F9F5',
    borderRadius: 14,
    paddingVertical: 4,
  },
  chipRow: {
    marginVertical: 2,
  },
  chip: {
    backgroundColor: '#F4F4EE',
    borderWidth: 1,
    borderColor: '#DFDFD6',
    borderBottomWidth: 3,
    borderBottomColor: '#CDCDC2',
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 999,
    marginRight: 8,
  },
  chipText: {
    color: '#111113',
    fontSize: 12,
    fontWeight: '700',
  },
  noteInput: {
    backgroundColor: '#F8F8F4',
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: '#DFDFD6',
    color: '#111113',
    padding: 14,
    minHeight: 92,
    textAlignVertical: 'top',
    fontSize: 14,
  },
  saveNoteBtn: {
    backgroundColor: '#AEEE01',
    borderRadius: 16,
    paddingVertical: 15,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#111113',
    borderBottomWidth: 5,
    borderBottomColor: '#111113',
  },
  saveNoteText: {
    color: '#111113',
    fontSize: 15,
    fontWeight: '900',
  },
});