import React, { useEffect, useRef } from 'react';
import { Animated, Image, Modal, StyleSheet, Text, View } from 'react-native';
import DotMatrixText from './DotMatrixText';

export default function LaunchScreen({ visible, bottomInset, onFinish }) {
  const opacity = useRef(new Animated.Value(1)).current;
  const onFinishRef = useRef(onFinish);
  onFinishRef.current = onFinish;

  useEffect(() => {
    if (!visible) return;

    opacity.setValue(1);
    const timer = setTimeout(() => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 280,
        useNativeDriver: true,
      }).start(() => {
        onFinishRef.current?.();
      });
    }, 1700);

    return () => clearTimeout(timer);
  }, [visible, opacity]);

  return (
    <Modal
      visible={visible}
      transparent
      statusBarTranslucent
      navigationBarTranslucent
      presentationStyle="overFullScreen"
      animationType="none"
    >
      <Animated.View style={[styles.root, { opacity }]}>
        <View style={styles.centerBlock}>
          <Image
            source={require('../../assets/images/dino.jpg')}
            style={styles.dino}
            resizeMode="contain"
          />

          <View style={styles.titleStack}>
            <DotMatrixText text="INTEGROSAUR" dotSize={2} gap={1.2} color="#111113" />
          </View>
        </View>

        <Text style={[styles.footer, { bottom: bottomInset + 22 }]}>
          by onecuriousphoton
        </Text>
      </Animated.View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#F4F1E5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerBlock: {
    alignItems: 'center',
    gap: 16,
    marginBottom: 24,
  },
  dino: {
    width: 210,
    height: 210,
  },
  titleStack: {
    alignItems: 'center',
    gap: 4,
  },
  footer: {
    position: 'absolute',
    color: '#A8A69E',
    fontSize: 13,
    fontWeight: '500',
    letterSpacing: 0.3,
  },
});