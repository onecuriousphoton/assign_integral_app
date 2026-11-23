export const DEFAULT_SETTINGS = {
  notificationsEnabled: true,
  morningHour: 6,
  morningMinute: 0,
  nightHour: 22,
  nightMinute: 0,
  windowHours: 5,
  timerMinutes: 10,
  hapticsEnabled: true,
  difficultyFilter: 'ALL', // 'ALL' | 'WARMUP' | 'CLASSIC' | 'HARD'
  devFreshStart: false,
};

export function getLocalDateKey(date = new Date()) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function addDays(dateKey, offset) {
  const [y, m, d] = dateKey.split('-').map(Number);
  const dt = new Date(y, m - 1, d + offset);
  return getLocalDateKey(dt);
}

export function daysBetween(startKey, endKey) {
  const [y1, m1, d1] = startKey.split('-').map(Number);
  const [y2, m2, d2] = endKey.split('-').map(Number);
  const t1 = new Date(y1, m1 - 1, d1).getTime();
  const t2 = new Date(y2, m2 - 1, d2).getTime();
  return Math.round((t2 - t1) / (1000 * 60 * 60 * 24));
}

export function formatTime12h(hour, minute) {
  const suffix = hour >= 12 ? 'PM' : 'AM';
  const h12 = hour % 12 === 0 ? 12 : hour % 12;
  const mStr = String(minute).padStart(2, '0');
  return `${h12}:${mStr} ${suffix}`;
}

export function getWindowState(settings = DEFAULT_SETTINGS, now = new Date()) {
  const nowMin = now.getHours() * 60 + now.getMinutes();
  const morningStart = settings.morningHour * 60 + settings.morningMinute;
  const morningEnd = morningStart + (settings.windowHours || 5) * 60;
  const nightStart = settings.nightHour * 60 + settings.nightMinute;

  const morningEndHour = Math.floor((morningEnd % 1440) / 60);
  const morningEndMin = morningEnd % 60;

  if (nowMin >= morningStart && nowMin < morningEnd) {
    return {
      phase: 'MORNING',
      label: `ACTIVE WINDOW · ENDS ${formatTime12h(morningEndHour, morningEndMin)}`,
      accent: '#7CB305',
    };
  }
  if (nowMin >= morningEnd && nowMin < nightStart) {
    return {
      phase: 'WAITING_NIGHT',
      label: `RETRY ARMED · ${formatTime12h(settings.nightHour, settings.nightMinute)}`,
      accent: '#F59E0B',
    };
  }
  if (nowMin >= nightStart) {
    return {
      phase: 'NIGHT',
      label: `${formatTime12h(settings.nightHour, settings.nightMinute)} FINAL WINDOW`,
      accent: '#111113',
    };
  }
  return {
    phase: 'PRE_DAWN',
    label: `NEXT DROP · ${formatTime12h(settings.morningHour, settings.morningMinute)}`,
    accent: '#71717A',
  };
}

export function evaluatePlayerState(logs, meta) {
  const today = getLocalDateKey();
  const firstActiveDate = meta?.firstActiveDate || today;
  const lastResurrectionDate = meta?.lastResurrectionDate || null;

  const solvedByDay = {};
  for (const entry of logs) {
    if (entry.status === 'solved') {
      if (!solvedByDay[entry.dateKey]) solvedByDay[entry.dateKey] = [];
      solvedByDay[entry.dateKey].push(entry);
    }
  }

  const trackingStart =
    lastResurrectionDate && lastResurrectionDate > firstActiveDate
      ? lastResurrectionDate
      : firstActiveDate;

  let consecutiveMisses = 0;
  let cursor = addDays(today, -1);
  while (cursor >= trackingStart) {
    if (solvedByDay[cursor] && solvedByDay[cursor].length > 0) break;
    consecutiveMisses++;
    if (consecutiveMisses >= 3) break;
    cursor = addDays(cursor, -1);
  }

  let diedEarlier = false;
  let runningMisses = 0;
  const totalDays = daysBetween(trackingStart, today);
  for (let i = 0; i < totalDays; i++) {
    const dk = addDays(trackingStart, i);
    if (solvedByDay[dk] && solvedByDay[dk].length > 0) {
      runningMisses = 0;
    } else {
      runningMisses++;
      if (runningMisses >= 3) {
        diedEarlier = true;
        break;
      }
    }
  }

  const todaySolvedCount = (solvedByDay[today] || []).length;
  const isDead = (consecutiveMisses >= 3 || diedEarlier) && todaySolvedCount < 3;

  let currentStreak = 0;
  let streakCursor = todaySolvedCount > 0 ? today : addDays(today, -1);
  while (solvedByDay[streakCursor] && solvedByDay[streakCursor].length > 0) {
    currentStreak++;
    streakCursor = addDays(streakCursor, -1);
  }

  const sortedSolvedDays = Object.keys(solvedByDay).sort();
  let bestStreak = 0;
  let tempStreak = 0;
  for (let i = 0; i < sortedSolvedDays.length; i++) {
    if (i === 0 || daysBetween(sortedSolvedDays[i - 1], sortedSolvedDays[i]) === 1) {
      tempStreak++;
    } else {
      tempStreak = 1;
    }
    if (tempStreak > bestStreak) bestStreak = tempStreak;
  }

  const livesRemaining = isDead ? 0 : Math.max(0, 3 - consecutiveMisses);

  return {
    today,
    isDead,
    livesRemaining,
    consecutiveMisses,
    todaySolvedCount,
    resurrectionProgress: isDead ? todaySolvedCount : 0,
    currentStreak,
    bestStreak,
    solvedByDay,
  };
}