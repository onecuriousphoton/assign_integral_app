import React, { useRef, useState } from 'react';
import { View, StyleSheet, Animated, PanResponder } from 'react-native';
import * as Haptics from 'expo-haptics';
import { ChevronsRight } from 'lucide-react-native';

const THUMB_SIZE = 56;
const PADDING = 5;

export default function SwipeToSolve({
  onComplete,
  disabled = false,
  hapticsEnabled = true,
  label = 'Slide to mark solved',
}) {
  const [trackWidth, setTrackWidth] = useState(0);
  const translateX = useRef(new Animated.Value(0)).current;
  const maxSlide = Math.max(1, trackWidth - THUMB_SIZE - PADDING * 2);

  // Refs keep latest values without ever recreating PanResponder mid-drag
  const maxSlideRef = useRef(1);
  const disabledRef = useRef(disabled);
  const hapticsRef = useRef(hapticsEnabled);
  const onCompleteRef = useRef(onComplete);
  const currentXRef = useRef(0);
  const completedRef = useRef(false);

  maxSlideRef.current = maxSlide;
  disabledRef.current = disabled;
  hapticsRef.current = hapticsEnabled;
  onCompleteRef.current = onComplete;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => !disabledRef.current,
      onStartShouldSetPanResponderCapture: () => !disabledRef.current,
      onMoveShouldSetPanResponder: (_, g) => !disabledRef.current && Math.abs(g.dx) > 2,
      onMoveShouldSetPanResponderCapture: (_, g) => !disabledRef.current && Math.abs(g.dx) > 2,
      onPanResponderTerminationRequest: () => false,
      onShouldBlockNativeResponder: () => true,
      onPanResponderGrant: () => {
        completedRef.current = false;
        currentXRef.current = 0;
        translateX.stopAnimation();
        if (hapticsRef.current) {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }
      },
      onPanResponderMove: (_, g) => {
        if (completedRef.current) return;
        const limit = maxSlideRef.current;
        if (limit <= 1) return;
        const clamped = Math.max(0, Math.min(g.dx, limit));
        currentXRef.current = clamped;
        translateX.setValue(clamped);
      },
      onPanResponderRelease: () => {
        if (completedRef.current) return;
        const limit = maxSlideRef.current;
        if (limit > 1 && currentXRef.current >= limit * 0.72) {
          completedRef.current = true;
          if (hapticsRef.current) {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
          }
          Animated.spring(translateX, {
            toValue: limit,
            useNativeDriver: true,
            speed: 22,
            bounciness: 3,
          }).start(() => {
            onCompleteRef.current?.();
            setTimeout(() => {
              translateX.setValue(0);
              currentXRef.current = 0;
              completedRef.current = false;
            }, 300);
          });
        } else {
          Animated.spring(translateX, {
            toValue: 0,
            useNativeDriver: true,
            speed: 24,
            bounciness: 5,
          }).start(() => {
            currentXRef.current = 0;
          });
        }
      },
      onPanResponderTerminate: () => {
        if (completedRef.current) return;
        Animated.spring(translateX, {
          toValue: 0,
          useNativeDriver: true,
          speed: 24,
          bounciness: 4,
        }).start(() => {
          currentXRef.current = 0;
        });
      },
    })
  ).current;

  const textOpacity = translateX.interpolate({
    inputRange: [0, maxSlide * 0.45],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const fillTranslateX = translateX.interpolate({
    inputRange: [0, maxSlide],
    outputRange: [-maxSlide, 0],
    extrapolate: 'clamp',
  });

  return (
    <View
      style={[styles.trackOuter, disabled && styles.trackDisabled]}
      onLayout={(e) => setTrackWidth(e.nativeEvent.layout.width)}
    >
      {trackWidth > 0 && (
        <Animated.View
          pointerEvents="none"
          style={[
            styles.fillLayer,
            {
              width: trackWidth,
              transform: [{ translateX: fillTranslateX }],
            },
          ]}
        />
      )}

      <Animated.Text pointerEvents="none" style={[styles.label, { opacity: textOpacity }]}>
        {label}
      </Animated.Text>

      <Animated.View
        {...panResponder.panHandlers}
        style={[styles.thumb, { transform: [{ translateX }] }]}
      >
        <ChevronsRight size={24} color="#111113" strokeWidth={2.7} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  trackOuter: {
    height: THUMB_SIZE + PADDING * 2 + 4,
    borderRadius: 999,
    backgroundColor: '#16161A',
    borderWidth: 1.5,
    borderColor: '#111113',
    borderBottomWidth: 5,
    borderBottomColor: '#000000',
    justifyContent: 'center',
    overflow: 'hidden',
    paddingHorizontal: PADDING,
  },
  trackDisabled: {
    opacity: 0.45,
  },
  fillLayer: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    borderRadius: 999,
    backgroundColor: 'rgba(174, 238, 1, 0.28)',
  },
  label: {
    position: 'absolute',
    alignSelf: 'center',
    color: '#F4F4F5',
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 0.5,
    paddingLeft: 30,
  },
  thumb: {
    width: THUMB_SIZE,
    height: THUMB_SIZE,
    borderRadius: THUMB_SIZE / 2,
    backgroundColor: '#AEEE01',
    borderWidth: 1.5,
    borderColor: '#C8FF38',
    borderBottomWidth: 4,
    borderBottomColor: '#76A600',
    alignItems: 'center',
    justifyContent: 'center',
  },
});