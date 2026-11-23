import React from 'react';
import {
  Dimensions,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const MANUAL_IMG = require('../../assets/images/manual.png');
const IMG_SOURCE = Image.resolveAssetSource(MANUAL_IMG);
const IMG_ASPECT = IMG_SOURCE?.width && IMG_SOURCE?.height
  ? IMG_SOURCE.width / IMG_SOURCE.height
  : 0.5625;

export default function ManualModal({ visible, topInset, bottomInset, onDismiss }) {
  const imageWidth = SCREEN_WIDTH - 24;
  const imageHeight = imageWidth / IMG_ASPECT;

  return (
    <Modal
      visible={visible}
      transparent
      statusBarTranslucent
      navigationBarTranslucent
      presentationStyle="overFullScreen"
      animationType="fade"
      onRequestClose={onDismiss}
    >
      <View
        style={[
          styles.root,
          {
            paddingTop: topInset + 8,
            paddingBottom: bottomInset + 14,
          },
        ]}
      >
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          <View style={styles.imageFrame}>
            <Image
              source={MANUAL_IMG}
              style={{ width: imageWidth, height: imageHeight }}
              resizeMode="contain"
            />
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={onDismiss}
            style={styles.ctaBtn}
          >
            <Text style={styles.ctaText}>I'M READY · FEED THE BEAST</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#111113',
    paddingHorizontal: 12,
    gap: 12,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    alignItems: 'center',
    paddingBottom: 8,
  },
  imageFrame: {
    borderRadius: 18,
    overflow: 'hidden',
    backgroundColor: '#111113',
  },
  footer: {
    paddingHorizontal: 8,
  },
  ctaBtn: {
    backgroundColor: '#AEEE01',
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#C8FF38',
    borderBottomWidth: 5,
    borderBottomColor: '#76A600',
  },
  ctaText: {
    color: '#111113',
    fontSize: 15,
    fontWeight: '900',
    letterSpacing: 0.6,
  },
});