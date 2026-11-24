# 🦕 Integrosaurus

> **Feed the beast one integral a day. Survive another day.**

A minimalist, daytime-themed React Native (Expo) app that drops **one calculus integral every morning** to keep your integration skills razor-sharp—powered by the honor system and a very hungry dinosaur.

---

## 📜 The Rules

1. **1 Integral a Day** — A fresh problem drops at **6:00 AM** (customizable). Miss the 5-hour window? You get a second-chance alert at **10:00 PM** with the exact same problem.
2. **10-Minute Focus Mode** — Open full-screen mode, grab pen & paper, and beat the clock.
3. **Honor System** — No answer checker. Slide to mark solved and jot down a quick note on the trick you used (*King's Property, Feynman Trick, By Parts,* etc.). Don't lie to a dinosaur.
4. **3 Misses = CHOMP ☠️** — Miss 3 days in a row and your HP hits zero.
5. **Resurrection ⚡** — Solve **3 integrals in a single day** to respawn and restore your streak.

---

## ✨ Highlights

- **Real Math Rendering** — Crisp textbook integrals & derivatives powered by KaTeX.
- **GitHub-Style Streak Grid** — 16-week activity heatmap tracking solved, missed, and revival days.
- **Game-Style HP HUD** — 2.5D hardware-inspired UI with `#AEEE01` accents and Nothing-style dot-matrix typography.
- **Logs** — Filterable history of every solved and unsolved integral with your method notes.
- **Custom Alerts** — Rolling 14-day local notification queue with customizable drop/retry times.

---

## 🛠️ Tech Stack

`Expo` · `React Native` · `Expo Router` · `KaTeX (WebView)` · `expo-notifications` · `react-native-svg` · `lucide-react-native`

---

## 🚀 Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Start Expo dev server
npx expo start -c