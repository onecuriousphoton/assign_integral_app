import React from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Switch,
} from 'react-native';
import {
  Bell,
  Clock,
  Minus,
  Plus,
  Trash2,
  Vibrate,
  X,
} from 'lucide-react-native';
import DotMatrixText from './DotMatrixText';
import { formatTime12h } from '../utils/gameLogic';

const TIMER_OPTIONS = [5, 10, 15, 20];
const DIFF_OPTIONS = ['ALL', 'WARMUP', 'CLASSIC', 'HARD'];

export default function SettingsModal({
  visible,
  onClose,
  topInset,
  bottomInset,
  settings,
  onUpdateSettings,
  onTestNotification,
  onWipeAll,
}) {
  const adjustTime = (hourKey, minKey, deltaMinutes) => {
    const total = (settings[hourKey] * 60 + settings[minKey] + deltaMinutes + 1440) % 1440;
    onUpdateSettings({
      ...settings,
      [hourKey]: Math.floor(total / 60),
      [minKey]: total % 60,
    });
  };

  return (
    <Modal
      visible={visible}
      transparent
      statusBarTranslucent
      navigationBarTranslucent
      presentationStyle="overFullScreen"
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={[styles.root, { paddingTop: topInset }]}>
        {/* Header aligned identically to Home date & Logs header (topInset + 12) */}
        <View style={styles.header}>
          <DotMatrixText text="SETTINGS" dotSize={2.3} gap={0.95} color="#111113" />
          <TouchableOpacity activeOpacity={0.75} onPress={onClose} style={styles.closeBtn}>
            <X size={18} color="#111113" strokeWidth={2.4} />
          </TouchableOpacity>
        </View>

        <ScrollView
          style={styles.scroll}
          contentContainerStyle={[styles.content, { paddingBottom: bottomInset + 40 }]}
          showsVerticalScrollIndicator={false}
          bounces
        >
          {/* Notifications Card */}
          <Text style={styles.sectionLabel}>NOTIFICATION SCHEDULE</Text>
          <View style={styles.card}>
            <View style={styles.rowBetween}>
              <View style={styles.rowIconText}>
                <Bell size={16} color="#111113" strokeWidth={2.1} />
                <Text style={styles.rowTitle}>Daily Reminders</Text>
              </View>
              <Switch
                value={settings.notificationsEnabled}
                onValueChange={(v) => onUpdateSettings({ ...settings, notificationsEnabled: v })}
                trackColor={{ false: '#E4E4E0', true: '#AEEE01' }}
                thumbColor="#111113"
              />
            </View>

            <View style={styles.divider} />

            <View style={styles.rowBetween}>
              <View>
                <Text style={styles.rowTitle}>First-Bell</Text>
                <Text style={styles.rowSub}>First alert of the day</Text>
              </View>
              <View style={styles.stepper}>
                <TouchableOpacity
                  onPress={() => adjustTime('morningHour', 'morningMinute', -15)}
                  style={styles.stepBtn}
                >
                  <Minus size={14} color="#111113" strokeWidth={2.5} />
                </TouchableOpacity>
                <Text style={styles.timeReadout}>
                  {formatTime12h(settings.morningHour, settings.morningMinute)}
                </Text>
                <TouchableOpacity
                  onPress={() => adjustTime('morningHour', 'morningMinute', 15)}
                  style={styles.stepBtn}
                >
                  <Plus size={14} color="#111113" strokeWidth={2.5} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.divider} />

            <View style={styles.rowBetween}>
              <View>
                <Text style={styles.rowTitle}>Second-Bell</Text>
                <Text style={styles.rowSub}>Alert if missed first</Text>
              </View>
              <View style={styles.stepper}>
                <TouchableOpacity
                  onPress={() => adjustTime('nightHour', 'nightMinute', -15)}
                  style={styles.stepBtn}
                >
                  <Minus size={14} color="#111113" strokeWidth={2.5} />
                </TouchableOpacity>
                <Text style={styles.timeReadout}>
                  {formatTime12h(settings.nightHour, settings.nightMinute)}
                </Text>
                <TouchableOpacity
                  onPress={() => adjustTime('nightHour', 'nightMinute', 15)}
                  style={styles.stepBtn}
                >
                  <Plus size={14} color="#111113" strokeWidth={2.5} />
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity style={styles.testNotifBtn} onPress={onTestNotification}>
              <Bell size={14} color="#111113" strokeWidth={2.3} />
              <Text style={styles.testNotifText}>Send Test Notification (in 3s)</Text>
            </TouchableOpacity>
          </View>

          {/* Session Preferences */}
          <Text style={styles.sectionLabel}>SESSION & PREFERENCES</Text>
          <View style={styles.card}>
            <View style={styles.rowIconText}>
              <Text style={styles.rowTitle}>Solve Timer Duration</Text>
            </View>
            <View style={styles.pillRow}>
              {TIMER_OPTIONS.map((mins) => (
                <TouchableOpacity
                  key={mins}
                  onPress={() => onUpdateSettings({ ...settings, timerMinutes: mins })}
                  style={[styles.choicePill, settings.timerMinutes === mins && styles.choicePillActive]}
                >
                  <Text
                    style={[
                      styles.choiceText,
                      settings.timerMinutes === mins && styles.choiceTextActive,
                    ]}
                  >
                    {mins}m
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.divider} />

            <Text style={styles.rowTitle}>Question Difficulty Pool</Text>
            <View style={styles.pillRow}>
              {DIFF_OPTIONS.map((diff) => (
                <TouchableOpacity
                  key={diff}
                  onPress={() => onUpdateSettings({ ...settings, difficultyFilter: diff })}
                  style={[
                    styles.choicePill,
                    settings.difficultyFilter === diff && styles.choicePillActive,
                  ]}
                >
                  <Text
                    style={[
                      styles.choiceText,
                      settings.difficultyFilter === diff && styles.choiceTextActive,
                    ]}
                  >
                    {diff}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.divider} />

            <View style={styles.rowBetween}>
              <View style={styles.rowIconText}>
                <Vibrate size={16} color="#111113" strokeWidth={2.1} />
                <Text style={styles.rowTitle}>Haptic Feedback</Text>
              </View>
              <Switch
                value={settings.hapticsEnabled}
                onValueChange={(v) => onUpdateSettings({ ...settings, hapticsEnabled: v })}
                trackColor={{ false: '#E4E4E0', true: '#AEEE01' }}
                thumbColor="#111113"
              />
            </View>
          </View>

          {/* Data Management */}
          <Text style={styles.sectionLabel}>RESET</Text>
          <View style={styles.card}>
            <TouchableOpacity style={styles.wipeBtn} onPress={onWipeAll}>
              <Trash2 size={14} color="#E11D48" strokeWidth={2.2} />
              <Text style={styles.wipeText}>Reset All Logs & Streaks</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#F5F5F0',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 14,
  },
  closeBtn: {
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
  scroll: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 20,
    gap: 12,
  },
  sectionLabel: {
    color: '#71717A',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.1,
    marginTop: 6,
    marginLeft: 4,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 16,
    borderWidth: 1.5,
    borderColor: '#DFDFD6',
    borderBottomWidth: 5,
    borderBottomColor: '#CDCDC2',
    gap: 12,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowIconText: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  rowTitle: {
    color: '#111113',
    fontSize: 14,
    fontWeight: '700',
  },
  rowSub: {
    color: '#71717A',
    fontSize: 12,
    marginTop: 2,
  },
  divider: {
    height: 1,
    backgroundColor: '#F2F2ED',
  },
  stepper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#F5F5F0',
    padding: 4,
    borderRadius: 12,
  },
  stepBtn: {
    width: 28,
    height: 28,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E6E6DF',
  },
  timeReadout: {
    color: '#111113',
    fontSize: 12,
    fontWeight: '800',
    minWidth: 66,
    textAlign: 'center',
    fontVariant: ['tabular-nums'],
  },
  testNotifBtn: {
    marginTop: 4,
    backgroundColor: '#AEEE01',
    borderRadius: 14,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderWidth: 1.5,
    borderColor: '#111113',
    borderBottomWidth: 4,
    borderBottomColor: '#111113',
  },
  testNotifText: {
    color: '#111113',
    fontSize: 13,
    fontWeight: '800',
  },
  pillRow: {
    flexDirection: 'row',
    gap: 8,
  },
  choicePill: {
    flex: 1,
    paddingVertical: 9,
    borderRadius: 12,
    backgroundColor: '#F4F4EF',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E7E7E0',
  },
  choicePillActive: {
    backgroundColor: '#111113',
    borderColor: '#111113',
  },
  choiceText: {
    color: '#52525B',
    fontSize: 11,
    fontWeight: '800',
  },
  choiceTextActive: {
    color: '#AEEE01',
  },
  wipeBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 7,
    backgroundColor: '#FFF1F2',
    paddingVertical: 12,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#FECDD3',
  },
  wipeText: {
    color: '#E11D48',
    fontSize: 12,
    fontWeight: '700',
  },
});