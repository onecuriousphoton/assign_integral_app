export const INTEGRALS = [
  {
    id: 'int-01',
    latex: '\\int_{0}^{\\frac{\\pi}{2}} \\frac{dx}{1 + \\tan^{3}(x)}',
    notifText: '∫₀^(π/2) dx / (1 + tan³(x))',
    difficulty: 'Classic',
    topic: 'Definite Integral',
  },
  {
    id: 'int-02',
    latex: '\\int_{0}^{1} \\frac{\\ln(x)}{1 - x}\\,dx',
    notifText: '∫₀¹ ln(x)/(1 - x) dx',
    difficulty: 'Hard',
    topic: 'Series / Polylog',
  },
  {
    id: 'int-03',
    latex: '\\frac{d}{dx}\\left[\\int_{x}^{x^2} \\frac{\\sin(t)}{t}\\,dt\\right]',
    notifText: 'd/dx [ ∫ₓ^(x²) sin(t)/t dt ]',
    difficulty: 'Warmup',
    topic: 'Leibniz Rule',
  },
  {
    id: 'int-04',
    latex: '\\int_{0}^{\\infty} \\frac{x^{3}}{e^{x} - 1}\\,dx',
    notifText: '∫₀^∞ x³ / (eˣ - 1) dx',
    difficulty: 'Hard',
    topic: 'Bose-Einstein',
  },
  {
    id: 'int-05',
    latex: '\\int_{0}^{\\pi} \\frac{x\\sin(x)}{1 + \\cos^{2}(x)}\\,dx',
    notifText: '∫₀^π x·sin(x) / (1 + cos²(x)) dx',
    difficulty: 'Classic',
    topic: "King's Property",
  },
  {
    id: 'int-06',
    latex: '\\int \\sqrt{\\tan(x)}\\,dx',
    notifText: '∫ √(tan(x)) dx',
    difficulty: 'Hard',
    topic: 'Algebraic Sub',
  },
  {
    id: 'int-07',
    latex: '\\int_{0}^{\\infty} e^{-x^{2}}\\,dx',
    notifText: '∫₀^∞ e^(-x²) dx',
    difficulty: 'Classic',
    topic: 'Gaussian',
  },
  {
    id: 'int-08',
    latex: '\\frac{d}{dx}\\left( x^{x^{x}} \\right)',
    notifText: 'd/dx ( x^(x^x) )',
    difficulty: 'Warmup',
    topic: 'Log Differentiation',
  },
  {
    id: 'int-09',
    latex: '\\int_{0}^{\\frac{\\pi}{2}} \\ln(\\sin x)\\,dx',
    notifText: '∫₀^(π/2) ln(sin x) dx',
    difficulty: 'Classic',
    topic: 'Symmetry',
  },
  {
    id: 'int-10',
    latex: '\\int \\sec^{3}(x)\\,dx',
    notifText: '∫ sec³(x) dx',
    difficulty: 'Warmup',
    topic: 'By Parts',
  },
  {
    id: 'int-11',
    latex: '\\int_{0}^{\\infty} \\frac{\\sin(x)}{x}\\,dx',
    notifText: '∫₀^∞ sin(x)/x dx',
    difficulty: 'Hard',
    topic: 'Feynman Trick',
  },
  {
    id: 'int-12',
    latex: '\\int_{0}^{1} \\frac{\\ln(1+x)}{1+x^{2}}\\,dx',
    notifText: '∫₀¹ ln(1+x)/(1+x²) dx',
    difficulty: 'Classic',
    topic: 'Trig Sub',
  },
  {
    id: 'int-13',
    latex: '\\int_{-1}^{1} \\frac{dx}{(e^{x}+1)(x^{2}+1)}',
    notifText: '∫₋₁¹ dx / ((eˣ + 1)(x² + 1))',
    difficulty: 'Classic',
    topic: 'Even-Odd Split',
  },
  {
    id: 'int-14',
    latex: '\\int_{0}^{1} \\frac{x - 1}{\\ln(x)}\\,dx',
    notifText: '∫₀¹ (x - 1)/ln(x) dx',
    difficulty: 'Hard',
    topic: 'Feynman Trick',
  },
  {
    id: 'int-15',
    latex: '\\int \\frac{x^{2} + 1}{x^{4} + 1}\\,dx',
    notifText: '∫ (x² + 1)/(x⁴ + 1) dx',
    difficulty: 'Classic',
    topic: 'Divide by x²',
  },
  {
    id: 'int-16',
    latex: '\\int_{0}^{\\frac{\\pi}{4}} \\ln(1 + \\tan x)\\,dx',
    notifText: '∫₀^(π/4) ln(1 + tan x) dx',
    difficulty: 'Classic',
    topic: "King's Property",
  },
  {
    id: 'int-17',
    latex: '\\int_{0}^{\\infty} \\frac{\\cos(x)}{1 + x^{2}}\\,dx',
    notifText: '∫₀^∞ cos(x)/(1 + x²) dx',
    difficulty: 'Hard',
    topic: 'Contour / ODE',
  },
  {
    id: 'int-18',
    latex: '\\int e^{x}\\bigl(\\sin x + \\cos x\\bigr)\\,dx',
    notifText: '∫ eˣ(sin x + cos x) dx',
    difficulty: 'Warmup',
    topic: 'Product Rule',
  },
];

export function getIntegralForDate(dateKey, slot = 0, difficultyFilter = 'ALL') {
  const pool =
    difficultyFilter === 'ALL'
      ? INTEGRALS
      : INTEGRALS.filter((item) => item.difficulty.toUpperCase() === difficultyFilter);

  const list = pool.length > 0 ? pool : INTEGRALS;
  let hash = 0;
  const seed = `${dateKey}#${difficultyFilter}`;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  }
  const baseIndex = hash % list.length;
  const index = (baseIndex + slot) % list.length;
  return {
    ...list[index],
    dateKey,
    slot,
  };
}