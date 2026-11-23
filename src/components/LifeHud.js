import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Polygon, Path } from 'react-native-svg';
import { Skull, Flame } from 'lucide-react-native';
import DotMatrixText from './DotMatrixText';

function EnergyCoreIcon({ color = '#AEEE01', size = 20 }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Polygon
        points="12,2 21,7 21,17 12,22 3,17 3,7"
        stroke={color}
        strokeWidth="2"
        fill="rgba(174, 238, 1, 0.12)"
      />
      <Path
        d="M13 6.5L8.5 13H12L11 17.5L15.5 11H12L13 6.5Z"
        fill={color}
      />
    </Svg>
  );
}

function LifeHud({ player }) {
  const { isDead, livesRemaining, resurrectionProgress, currentStreak } = player;

  const statusMeta = isDead
    ? { label: 'K.O. · SOLVE 3 TODAY TO RESPAWN', color: '#FF2D55' }
    : livesRemaining === 3
    ? { label: 'FULL CHARGE · 3 MISSES TO K.O.', color: '#AEEE01' }
    : livesRemaining === 2
    ? { label: '1 DAY MISSED · STAY SHARP', color: '#FFB800' }
    : { label: 'LOW BATTERY · SOLVE TODAY OR K.O.', color: '#FF2D55' };

  return (
    <View style={[styles.hudCard, isDead && styles.hudCardDead]}>
      <View style={styles.topRow}>
        <View style={styles.leftTag}>
          {isDead ? (
            <Skull size={18} color="#FF2D55" strokeWidth={2.3} />
          ) : (
            <EnergyCoreIcon color={statusMeta.color} size={21} />
          )}
          <DotMatrixText
            text={isDead ? `REVIVE ${resurrectionProgress}/3` : `HP ${livesRemaining}/3`}
            dotSize={2.0}
            gap={0.9}
            color="#FFFFFF"
            ghostColor="rgba(255,255,255,0.12)"
          />
        </View>

        <View style={styles.streakBadge}>
          <Flame size={12} color="#111113" fill="#111113" />
          <Text style={styles.streakText}>{currentStreak}D STREAK</Text>
        </View>
      </View>

      {/* 2.5D Recessed Energy Cells */}
      <View style={styles.cellsRow}>
        {[0, 1, 2].map((idx) => {
          const filled = isDead ? idx < resurrectionProgress : idx < livesRemaining;
          const cellColor = isDead ? '#0072FF' : statusMeta.color;
          const cellLip = isDead ? '#004BB5' : livesRemaining === 3 ? '#78A800' : livesRemaining === 2 ? '#B88200' : '#B81636';
          return (
            <View
              key={idx}
              style={[
                styles.cellTrack,
                filled && {
                  backgroundColor: cellColor,
                  borderColor: cellColor,
                  borderBottomColor: cellLip,
                  borderBottomWidth: 3.5,
                },
              ]}
            >
              <View style={[styles.cellGloss, filled && { opacity: 0.35 }]} />
            </View>
          );
        })}
      </View>

      <View style={styles.bottomRow}>
        <View style={[styles.liveDot, { backgroundColor: statusMeta.color }]} />
        <Text style={styles.statusText}>{statusMeta.label}</Text>
      </View>
    </View>
  );
}

export default React.memo(LifeHud);

const styles = StyleSheet.create({
  hudCard: {
    backgroundColor: '#141418',
    borderRadius: 22,
    padding: 16,
    gap: 12,
    borderWidth: 1.5,
    borderColor: '#272730',
    borderBottomWidth: 6,
    borderBottomColor: '#000000',
  },
  hudCardDead: {
    borderColor: '#FF2D55',
    borderBottomColor: '#9E0B29',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftTag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  streakBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#AEEE01',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,

  },
  streakText: {
    color: '#111113',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  cellsRow: {
    flexDirection: 'row',
    gap: 8,
  },
  cellTrack: {
    flex: 1,
    height: 16,
    borderRadius: 6,
    backgroundColor: '#23232A',
    borderWidth: 1,
    borderColor: '#30303A',
    borderBottomWidth: 2,
    borderBottomColor: '#0E0E12',
    overflow: 'hidden',
  },
  cellGloss: {
    height: 4,
    backgroundColor: '#FFFFFF',
    opacity: 0.05,
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  liveDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  statusText: {
    color: '#A1A1AA',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.6,
  },
});