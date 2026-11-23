import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Alert,
  AppState,
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import * as Haptics from 'expo-haptics';
import { X } from 'lucide-react-native';
import DotMatrixText from './DotMatrixText';
import MathView from './MathView';
import SwipeToSolve from './SwipeToSolve';

export default function FocusSolveModal({
  visible,
  integral,
  totalSeconds,
  hapticsEnabled,
  topInset,
  bottomInset,
  onSolved,
  onUnsolved,
}) {
  const [secondsLeft, setSecondsLeft] = useState(totalSeconds);
  const timerRef = useRef(null);
  const endTimeRef = useRef(0);
  const finishedRef = useRef(false);

  const onUnsolvedRef = useRef(onUnsolved);
  const hapticsRef = useRef(hapticsEnabled);

  onUnsolvedRef.current = onUnsolved;
  hapticsRef.current = hapticsEnabled;

  const getElapsedSeconds = useCallback(() => {
    const remaining = Math.max(0, Math.ceil((endTimeRef.current - Date.now()) / 1000));
    return Math.max(1, totalSeconds - remaining);
  }, [totalSeconds]);

  useEffect(() => {
    if (!visible) {
      if (timerRef.current) clearInterval(timerRef.current);
      finishedRef.current = false;
      return;
    }

    finishedRef.current = false;
    endTimeRef.current = Date.now() + totalSeconds * 1000;
    setSecondsLeft(totalSeconds);

    const syncClock = () => {
      if (finishedRef.current) return;
      const remaining = Math.max(0, Math.ceil((endTimeRef.current - Date.now()) / 1000));
      setSecondsLeft(remaining);
      if (remaining <= 0) {
        finishedRef.current = true;
        if (timerRef.current) clearInterval(timerRef.current);
        if (hapticsRef.current) {
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
        }
        onUnsolvedRef.current?.(totalSeconds);
      }
    };

    timerRef.current = setInterval(syncClock, 500);
    const appStateSub = AppState.addEventListener('change', (state) => {
      if (state === 'active') syncClock();
    });

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      appStateSub.remove();
    };
  }, [visible, totalSeconds]);

  const handleBackRequest = useCallback(() => {
    Alert.alert('Give up this attempt?', 'Leaving now logs this integral as unsolved.', [
      { text: 'Keep Solving', style: 'cancel' },
      {
        text: 'Give Up',
        style: 'destructive',
        onPress: () => {
          if (finishedRef.current) return;
          finishedRef.current = true;
          onUnsolvedRef.current?.(getElapsedSeconds());
        },
      },
    ]);
  }, [getElapsedSeconds]);

  const handleSwipeComplete = useCallback(() => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    onSolved(getElapsedSeconds());
  }, [onSolved, getElapsedSeconds]);

  const formatTimer = (sec) => {
    const m = String(Math.floor(sec / 60)).padStart(2, '0');
    const s = String(sec % 60).padStart(2, '0');
    return `${m}:${s}`;
  };

  const progressRatio = Math.max(0, Math.min(1, secondsLeft / Math.max(1, totalSeconds)));
  const isUrgent = secondsLeft < 60;

  return (
    <Modal
      visible={visible}
      transparent
      statusBarTranslucent
      navigationBarTranslucent
      presentationStyle="overFullScreen"
      animationType="fade"
      onRequestClose={handleBackRequest}
    >
      <View
        style={[
          styles.root,
          {
            paddingTop: topInset,
            paddingBottom: bottomInset + 16,
          },
        ]}
      >
        <View style={styles.topBar}>
          <View style={styles.liveChip}>
            <View style={[styles.liveDot, isUrgent && { backgroundColor: '#FF2D55' }]} />
            <DotMatrixText text="FOCUS" dotSize={1.8} gap={0.85} color="#111113" />
          </View>

          <TouchableOpacity
            activeOpacity={0.75}
            onPress={() => {
              if (finishedRef.current) return;
              finishedRef.current = true;
              if (hapticsEnabled) Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
              onUnsolved(getElapsedSeconds());
            }}
            style={styles.giveUpBtn}
          >
            <X size={16} color="#111113" strokeWidth={2.5} />
            <Text style={styles.giveUpText}>Give Up</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.timerDeck}>
          <Text style={styles.timerCaption}>
            {isUrgent ? 'FINAL MINUTE · FINISH UP' : 'TIME REMAINING'}
          </Text>
          <DotMatrixText
            text={formatTimer(secondsLeft)}
            dotSize={4.8}
            gap={2.0}
            color={isUrgent ? '#FF2D55' : '#AEEE01'}
            ghostColor="rgba(255,255,255,0.08)"
          />
          <View style={styles.progressTrack}>
            <View
              style={[
                styles.progressFill,
                {
                  width: `${progressRatio * 100}%`,
                  backgroundColor: isUrgent ? '#FF2D55' : '#AEEE01',
                },
              ]}
            />
          </View>
        </View>

        <View style={styles.mathCard}>
          <View style={styles.mathCardHeader}>
            <View style={styles.metaPill}>
              <Text style={styles.metaPillText}>{integral.topic}</Text>
            </View>
            <View style={[styles.metaPill, styles.diffPill]}>
              <Text style={styles.metaPillText}>{integral.difficulty}</Text>
            </View>
          </View>

          <View style={styles.mathCenter}>
            <MathView
              latex={integral.latex}
              fallback={integral.notifText}
              fontSize={30}
              minHeight={130}
            />
          </View>

          <Text style={styles.paperHint}>Work it out on paper · Swipe below once solved</Text>
        </View>

        <View style={styles.footer}>
          <SwipeToSolve
            onComplete={handleSwipeComplete}
            hapticsEnabled={hapticsEnabled}
            label="Slide right when solved"
          />
        </View>
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
    paddingHorizontal: 20,
    gap: 16,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 12,
  },
  liveChip: {
    height: 42,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#DFDFD6',
    borderBottomWidth: 4,
    borderBottomColor: '#CDCDC2',
    paddingHorizontal: 14,
    borderRadius: 14,
  },
  liveDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#AEEE01',
    borderWidth: 1,
    borderColor: '#111113',
  },
  giveUpBtn: {
    height: 42,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#DFDFD6',
    borderBottomWidth: 4,
    borderBottomColor: '#CDCDC2',
    paddingHorizontal: 14,
    borderRadius: 14,
  },
  giveUpText: {
    color: '#111113',
    fontSize: 12,
    fontWeight: '800',
  },
  timerDeck: {
    backgroundColor: '#141418',
    borderRadius: 24,
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
    gap: 14,
    borderWidth: 1.5,
    borderColor: '#272730',
    borderBottomWidth: 6,
    borderBottomColor: '#000000',
  },
  timerCaption: {
    color: '#8E8E98',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.4,
  },
  progressTrack: {
    width: '100%',
    height: 8,
    borderRadius: 4,
    backgroundColor: '#26262E',
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
  },
  mathCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    padding: 20,
    borderWidth: 1.5,
    borderColor: '#DFDFD6',
    borderBottomWidth: 6,
    borderBottomColor: '#CDCDC2',
    justifyContent: 'space-between',
  },
  mathCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  metaPill: {
    backgroundColor: '#F4F4EE',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E5DD',
  },
  diffPill: {
    backgroundColor: '#EFFEBD',
    borderColor: '#C9EB68',
  },
  metaPillText: {
    color: '#111113',
    fontSize: 10,
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 0.7,
  },
  mathCenter: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
  },
  paperHint: {
    color: '#8E8E93',
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
  },
  footer: {
    paddingTop: 2,
  },
});