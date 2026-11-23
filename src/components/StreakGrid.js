import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { CalendarDays } from 'lucide-react-native';
import { addDays, getLocalDateKey } from '../utils/gameLogic';
import DotMatrixText from './DotMatrixText';

const WEEKS = 16;
const DAY_LABELS = ['', 'M', '', 'W', '', 'F', ''];

function StreakGrid({ logs }) {
  const [selectedDay, setSelectedDay] = useState(null);

  const { columns, statusMap } = useMemo(() => {
    const map = {};
    for (const item of logs) {
      if (!map[item.dateKey]) map[item.dateKey] = { solved: 0, unsolved: 0 };
      if (item.status === 'solved') map[item.dateKey].solved += 1;
      else map[item.dateKey].unsolved += 1;
    }

    const today = new Date();
    const todayDow = today.getDay();
    const todayKey = getLocalDateKey(today);
    const totalDaysBack = (WEEKS - 1) * 7 + todayDow;
    const startKey = addDays(todayKey, -totalDaysBack);

    const cols = [];
    for (let w = 0; w < WEEKS; w++) {
      const col = [];
      for (let d = 0; d < 7; d++) {
        const dk = addDays(startKey, w * 7 + d);
        col.push({ dateKey: dk, isFuture: dk > todayKey });
      }
      cols.push(col);
    }
    return { columns: cols, statusMap: map };
  }, [logs]);

  const getCellColor = (dateKey, isFuture) => {
    if (isFuture) return 'transparent';
    const info = statusMap[dateKey];
    if (!info) return '#ECECE6';
    if (info.solved >= 3) return '#111113';
    if (info.solved >= 1) return '#AEEE01';
    if (info.unsolved >= 1) return '#FFCAD4';
    return '#ECECE6';
  };

  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <View style={styles.titleWrap}>
          <CalendarDays size={15} color="#111113" strokeWidth={2.2} />
          <DotMatrixText text="STREAKS" dotSize={1.8} gap={0.85} color="#111113" />
        </View>

        <View style={styles.inspectPill}>
          <Text style={styles.inspectText}>
            {selectedDay
              ? `${selectedDay} · ${statusMap[selectedDay]?.solved || 0} solved`
              : '16 weeks'}
          </Text>
        </View>
      </View>

      <View style={styles.gridRow}>
        <View style={styles.dayLabelsCol}>
          {DAY_LABELS.map((lbl, idx) => (
            <Text key={idx} style={styles.dayLabel}>
              {lbl}
            </Text>
          ))}
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.gridWrap}>
          {columns.map((col, wIdx) => (
            <View key={wIdx} style={styles.col}>
              {col.map((cell) => (
                <TouchableOpacity
                  key={cell.dateKey}
                  disabled={cell.isFuture}
                  activeOpacity={0.65}
                  onPress={() => setSelectedDay(cell.dateKey)}
                  style={[
                    styles.cell,
                    { backgroundColor: getCellColor(cell.dateKey, cell.isFuture) },
                    selectedDay === cell.dateKey && styles.cellSelected,
                  ]}
                />
              ))}
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.legendRow}>
        <LegendDot color="#ECECE6" label="Idle" />
        <LegendDot color="#FFCAD4" label="Missed" />
        <LegendDot color="#AEEE01" label="Solved" />
        <LegendDot color="#111113" label="Revived" />
      </View>
    </View>
  );
}

function LegendDot({ color, label }) {
  return (
    <View style={styles.legendItem}>
      <View style={[styles.dot, { backgroundColor: color }]} />
      <Text style={styles.legendText}>{label}</Text>
    </View>
  );
}

export default React.memo(StreakGrid);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 18,
    borderWidth: 1.5,
    borderColor: '#DFDFD6',
    borderBottomWidth: 5,
    borderBottomColor: '#CDCDC2',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  titleWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  inspectPill: {
    backgroundColor: '#F4F4EE',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
  },
  inspectText: {
    color: '#52525B',
    fontSize: 11,
    fontWeight: '700',
  },
  gridRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dayLabelsCol: {
    gap: 5,
    marginRight: 8,
  },
  dayLabel: {
    height: 14,
    lineHeight: 14,
    fontSize: 10,
    fontWeight: '700',
    color: '#9CA3AF',
    textAlign: 'center',
    width: 12,
  },
  gridWrap: {
    flexDirection: 'row',
    gap: 5,
    paddingVertical: 2,
  },
  col: {
    gap: 5,
  },
  cell: {
    width: 14,
    height: 14,
    borderRadius: 4,
  },
  cellSelected: {
    borderWidth: 1.5,
    borderColor: '#111113',
  },
  legendRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 14,
    marginTop: 14,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#F2F2EC',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  dot: {
    width: 9,
    height: 9,
    borderRadius: 3,
  },
  legendText: {
    color: '#71717A',
    fontSize: 11,
    fontWeight: '600',
  },
});