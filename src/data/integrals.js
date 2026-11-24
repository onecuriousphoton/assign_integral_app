export const INTEGRALS = [
  // 1. Basic Substitution (u-Substitution)
  { id: 'int-001', latex: '\\int_{0}^{1} x\\sqrt{1-x^2}\\,dx', notifText: '∫₀¹ x√(1 - x²) dx', difficulty: 'Classic', topic: 'u-Substitution' },
  { id: 'int-002', latex: '\\int \\frac{\\ln(x)}{x}\\,dx', notifText: '∫ ln(x)/x dx', difficulty: 'Classic', topic: 'u-Substitution' },
  { id: 'int-003', latex: '\\int_{0}^{\\frac{\\pi}{2}} \\sin^3(x)\\cos(x)\\,dx', notifText: '∫₀^(π/2) sin³(x)cos(x) dx', difficulty: 'Classic', topic: 'u-Substitution' },
  { id: 'int-004', latex: '\\int \\frac{dx}{x\\ln(x)\\ln(\\ln(x))}', notifText: '∫ dx / (x·ln(x)·ln(ln(x)))', difficulty: 'Hard', topic: 'u-Substitution' },
  { id: 'int-005', latex: '\\int_{0}^{1} \\frac{x^3}{(1+x^2)^3}\\,dx', notifText: '∫₀¹ x³ / (1 + x²)³ dx', difficulty: 'Hard', topic: 'u-Substitution' },
  { id: 'int-006', latex: '\\int \\frac{e^{2x}}{\\sqrt{e^x + 1}}\\,dx', notifText: '∫ e^(2x) / √(eˣ + 1) dx', difficulty: 'Hard', topic: 'u-Substitution' },
  { id: 'int-007', latex: '\\int_{0}^{1} \\frac{\\arctan(x)}{1+x^2} \\cdot \\frac{dx}{1+\\arctan^2(x)}', notifText: '∫₀¹ arctan(x) / ((1+x²)(1+arctan²(x))) dx', difficulty: 'Hard', topic: 'u-Substitution' },

  // 2. Completing the Square Integrals
  { id: 'int-008', latex: '\\int \\frac{dx}{x^2 + 4x + 8}', notifText: '∫ dx / (x² + 4x + 8)', difficulty: 'Classic', topic: 'Completing the Square' },
  { id: 'int-009', latex: '\\int \\frac{dx}{\\sqrt{2x - x^2}}', notifText: '∫ dx / √(2x - x²)', difficulty: 'Classic', topic: 'Completing the Square' },
  { id: 'int-010', latex: '\\int_{0}^{1} \\frac{dx}{x^2 + 2x + 2}', notifText: '∫₀¹ dx / (x² + 2x + 2)', difficulty: 'Classic', topic: 'Completing the Square' },
  { id: 'int-011', latex: '\\int \\frac{2x + 5}{\\sqrt{x^2 + 6x + 13}}\\,dx', notifText: '∫ (2x + 5) / √(x² + 6x + 13) dx', difficulty: 'Hard', topic: 'Completing the Square' },
  { id: 'int-012', latex: '\\int_{-1}^{1} \\frac{x + 2}{x^2 + 2x + 5}\\,dx', notifText: '∫₋₁¹ (x + 2) / (x² + 2x + 5) dx', difficulty: 'Hard', topic: 'Completing the Square' },
  { id: 'int-013', latex: '\\int \\frac{dx}{(x^2 + 2x + 5)^2}', notifText: '∫ dx / (x² + 2x + 5)²', difficulty: 'Hard', topic: 'Completing the Square' },
  { id: 'int-014', latex: '\\int_{0}^{2} x\\sqrt{4x - x^2}\\,dx', notifText: '∫₀² x√(4x - x²) dx', difficulty: 'Hard', topic: 'Completing the Square' },

  // 3. Partial Fraction Decomposition
  { id: 'int-015', latex: '\\int \\frac{dx}{x^2 - 9}', notifText: '∫ dx / (x² - 9)', difficulty: 'Classic', topic: 'Partial Fractions' },
  { id: 'int-016', latex: '\\int_{2}^{3} \\frac{2x + 1}{x^2 - x}\\,dx', notifText: '∫₂³ (2x + 1) / (x² - x) dx', difficulty: 'Classic', topic: 'Partial Fractions' },
  { id: 'int-017', latex: '\\int \\frac{x}{(x+1)(x+2)}\\,dx', notifText: '∫ x / ((x+1)(x+2)) dx', difficulty: 'Classic', topic: 'Partial Fractions' },
  { id: 'int-018', latex: '\\int_{0}^{\\infty} \\frac{dx}{(x^2+1)(x^2+4)}', notifText: '∫₀^∞ dx / ((x²+1)(x²+4))', difficulty: 'Hard', topic: 'Partial Fractions' },
  { id: 'int-019', latex: '\\int \\frac{dx}{x^4 + 1}', notifText: '∫ dx / (x⁴ + 1)', difficulty: 'Hard', topic: 'Partial Fractions' },
  { id: 'int-020', latex: '\\int_{0}^{1} \\frac{x^2 + 1}{x^4 + x^2 + 1}\\,dx', notifText: '∫₀¹ (x² + 1) / (x⁴ + x² + 1) dx', difficulty: 'Hard', topic: 'Partial Fractions' },
  { id: 'int-021', latex: '\\int \\frac{dx}{x(x^5 + 1)}', notifText: '∫ dx / (x(x⁵ + 1))', difficulty: 'Hard', topic: 'Partial Fractions' },

  // 4. Trigonometric Substitution
  { id: 'int-022', latex: '\\int_{0}^{a} \\sqrt{a^2 - x^2}\\,dx', notifText: '∫₀ᵃ √(a² - x²) dx', difficulty: 'Classic', topic: 'Trig Substitution' },
  { id: 'int-023', latex: '\\int \\frac{dx}{(a^2 + x^2)^{3/2}}', notifText: '∫ dx / (a² + x²)^(3/2)', difficulty: 'Classic', topic: 'Trig Substitution' },
  { id: 'int-024', latex: '\\int_{a}^{2a} \\frac{dx}{x\\sqrt{x^2 - a^2}}', notifText: '∫ₐ^(2a) dx / (x√(x² - a²))', difficulty: 'Classic', topic: 'Trig Substitution' },
  { id: 'int-025', latex: '\\int_{0}^{1} \\frac{x^4}{(1 + x^2)^3}\\,dx', notifText: '∫₀¹ x⁴ / (1 + x²)³ dx', difficulty: 'Hard', topic: 'Trig Substitution' },
  { id: 'int-026', latex: '\\int \\frac{dx}{(x^2 - a^2)^{5/2}}', notifText: '∫ dx / (x² - a²)^(5/2)', difficulty: 'Hard', topic: 'Trig Substitution' },
  { id: 'int-027', latex: '\\int_{0}^{1} \\frac{x^2\\,dx}{(1 - x^2)^{3/2} + (1 - x^2)^{1/2}}', notifText: '∫₀¹ x² / ((1-x²)^(3/2) + √(1-x²)) dx', difficulty: 'Hard', topic: 'Trig Substitution' },
  { id: 'int-028', latex: '\\int_{0}^{\\infty} \\frac{dx}{(1 + x^2)^4}', notifText: '∫₀^∞ dx / (1 + x²)⁴', difficulty: 'Hard', topic: 'Trig Substitution' },

  // 5. Hyperbolic Substitution
  { id: 'int-029', latex: '\\int \\frac{dx}{\\sqrt{x^2 + a^2}}', notifText: '∫ dx / √(x² + a²)', difficulty: 'Classic', topic: 'Hyperbolic Sub' },
  { id: 'int-030', latex: '\\int_{0}^{1} \\sqrt{1 + x^2}\\,dx', notifText: '∫₀¹ √(1 + x²) dx', difficulty: 'Classic', topic: 'Hyperbolic Sub' },
  { id: 'int-031', latex: '\\int \\frac{dx}{\\sqrt{x^2 - 1}}', notifText: '∫ dx / √(x² - 1)', difficulty: 'Classic', topic: 'Hyperbolic Sub' },
  { id: 'int-032', latex: '\\int_{0}^{a} x^2\\sqrt{x^2 + a^2}\\,dx', notifText: '∫₀ᵃ x²√(x² + a²) dx', difficulty: 'Hard', topic: 'Hyperbolic Sub' },
  { id: 'int-033', latex: '\\int_{0}^{\\infty} \\frac{dx}{\\cosh(x)}', notifText: '∫₀^∞ dx / cosh(x)', difficulty: 'Hard', topic: 'Hyperbolic Sub' },
  { id: 'int-034', latex: '\\int_{0}^{\\infty} \\frac{dx}{\\cosh^3(x)}', notifText: '∫₀^∞ dx / cosh³(x)', difficulty: 'Hard', topic: 'Hyperbolic Sub' },
  { id: 'int-035', latex: '\\int_{1}^{2} \\frac{\\sqrt{x^2 - 1}}{x^3}\\,dx', notifText: '∫₁² √(x² - 1) / x³ dx', difficulty: 'Hard', topic: 'Hyperbolic Sub' },

  // 6. Integration by Parts (IBP)
  { id: 'int-036', latex: '\\int x e^{-x}\\,dx', notifText: '∫ x e^(-x) dx', difficulty: 'Classic', topic: 'Integration by Parts' },
  { id: 'int-037', latex: '\\int_{1}^{e} \\ln(x)\\,dx', notifText: '∫₁ᵉ ln(x) dx', difficulty: 'Classic', topic: 'Integration by Parts' },
  { id: 'int-038', latex: '\\int e^{ax}\\cos(bx)\\,dx', notifText: '∫ e^(ax) cos(bx) dx', difficulty: 'Classic', topic: 'Integration by Parts' },
  { id: 'int-039', latex: '\\int \\sec^3(x)\\,dx', notifText: '∫ sec³(x) dx', difficulty: 'Hard', topic: 'Integration by Parts' },
  { id: 'int-040', latex: '\\int_{0}^{1} \\arcsin^2(x)\\,dx', notifText: '∫₀¹ arcsin²(x) dx', difficulty: 'Hard', topic: 'Integration by Parts' },
  { id: 'int-041', latex: '\\int \\cos(\\ln x)\\,dx', notifText: '∫ cos(ln x) dx', difficulty: 'Hard', topic: 'Integration by Parts' },
  { id: 'int-042', latex: '\\int_{0}^{\\infty} e^{-x}\\sin^2(x)\\,dx', notifText: '∫₀^∞ e^(-x) sin²(x) dx', difficulty: 'Hard', topic: 'Integration by Parts' },

  // 7. Tabular Integration
  { id: 'int-043', latex: '\\int x^3 e^{2x}\\,dx', notifText: '∫ x³ e^(2x) dx', difficulty: 'Classic', topic: 'Tabular Integration' },
  { id: 'int-044', latex: '\\int x^4 \\sin(x)\\,dx', notifText: '∫ x⁴ sin(x) dx', difficulty: 'Classic', topic: 'Tabular Integration' },
  { id: 'int-045', latex: '\\int_{0}^{\\pi} x^2 \\cos(2x)\\,dx', notifText: '∫₀^π x² cos(2x) dx', difficulty: 'Classic', topic: 'Tabular Integration' },
  { id: 'int-046', latex: '\\int x^5 e^{-x^2}\\,dx', notifText: '∫ x⁵ e^(-x²) dx', difficulty: 'Hard', topic: 'Tabular Integration' },
  { id: 'int-047', latex: '\\int_{0}^{\\pi} x^4 \\sin(x)\\,dx', notifText: '∫₀^π x⁴ sin(x) dx', difficulty: 'Hard', topic: 'Tabular Integration' },
  { id: 'int-048', latex: '\\int x^3 \\cosh(3x)\\,dx', notifText: '∫ x³ cosh(3x) dx', difficulty: 'Hard', topic: 'Tabular Integration' },
  { id: 'int-049', latex: '\\int_{0}^{1} x^3 (1-x)^4\\,dx', notifText: '∫₀¹ x³ (1 - x)⁴ dx', difficulty: 'Hard', topic: 'Tabular Integration' },

  // 8. Trigonometric Reduction Formulas
  { id: 'int-050', latex: '\\int_{0}^{\\frac{\\pi}{2}} \\sin^4(x)\\,dx', notifText: '∫₀^(π/2) sin⁴(x) dx', difficulty: 'Classic', topic: 'Trig Reduction' },
  { id: 'int-051', latex: '\\int_{0}^{\\frac{\\pi}{2}} \\cos^5(x)\\,dx', notifText: '∫₀^(π/2) cos⁵(x) dx', difficulty: 'Classic', topic: 'Trig Reduction' },
  { id: 'int-052', latex: '\\int \\tan^4(x)\\,dx', notifText: '∫ tan⁴(x) dx', difficulty: 'Classic', topic: 'Trig Reduction' },
  { id: 'int-053', latex: '\\int_{0}^{\\frac{\\pi}{2}} \\sin^6(x)\\cos^4(x)\\,dx', notifText: '∫₀^(π/2) sin⁶(x)cos⁴(x) dx', difficulty: 'Hard', topic: 'Trig Reduction' },
  { id: 'int-054', latex: '\\int \\sec^5(x)\\,dx', notifText: '∫ sec⁵(x) dx', difficulty: 'Hard', topic: 'Trig Reduction' },
  { id: 'int-055', latex: '\\int_{0}^{\\frac{\\pi}{4}} \\tan^6(x)\\,dx', notifText: '∫₀^(π/4) tan⁶(x) dx', difficulty: 'Hard', topic: 'Trig Reduction' },
  { id: 'int-056', latex: '\\int_{0}^{\\pi} \\sin^{2n}(x)\\,dx', notifText: '∫₀^π sin^(2n)(x) dx', difficulty: 'Hard', topic: 'Trig Reduction' },

  // 9. Exponential-Polynomial Reduction Formulas
  { id: 'int-057', latex: '\\int_{0}^{\\infty} x^3 e^{-x}\\,dx', notifText: '∫₀^∞ x³ e^(-x) dx', difficulty: 'Classic', topic: 'Exp-Poly Reduction' },
  { id: 'int-058', latex: '\\int_{0}^{1} x^2 e^{x}\\,dx', notifText: '∫₀¹ x² eˣ dx', difficulty: 'Classic', topic: 'Exp-Poly Reduction' },
  { id: 'int-059', latex: '\\int_{0}^{\\infty} x^4 e^{-2x}\\,dx', notifText: '∫₀^∞ x⁴ e^(-2x) dx', difficulty: 'Classic', topic: 'Exp-Poly Reduction' },
  { id: 'int-060', latex: '\\int_{1}^{e} (\\ln x)^4\\,dx', notifText: '∫₁ᵉ (ln x)⁴ dx', difficulty: 'Hard', topic: 'Exp-Poly Reduction' },
  { id: 'int-061', latex: '\\int_{0}^{\\infty} x^n e^{-ax}\\,dx', notifText: '∫₀^∞ xⁿ e^(-ax) dx', difficulty: 'Hard', topic: 'Exp-Poly Reduction' },
  { id: 'int-062', latex: '\\int_{0}^{1} x^3 (\\ln x)^3\\,dx', notifText: '∫₀¹ x³ (ln x)³ dx', difficulty: 'Hard', topic: 'Exp-Poly Reduction' },
  { id: 'int-063', latex: '\\int_{0}^{\\infty} x^5 e^{-x}\\cos(x)\\,dx', notifText: '∫₀^∞ x⁵ e^(-x) cos(x) dx', difficulty: 'Hard', topic: 'Exp-Poly Reduction' },

  // 10. Parity & Symmetry Integrals (Even/Odd Functions)
  { id: 'int-064', latex: '\\int_{-a}^{a} x^3\\cos(x^2)\\,dx', notifText: '∫₋ₐᵃ x³ cos(x²) dx', difficulty: 'Classic', topic: 'Parity & Symmetry' },
  { id: 'int-065', latex: '\\int_{-\\pi}^{\\pi} \\frac{x\\sin(x)}{1+x^4}\\,dx', notifText: '∫₋π^π x sin(x) / (1 + x⁴) dx', difficulty: 'Classic', topic: 'Parity & Symmetry' },
  { id: 'int-066', latex: '\\int_{-1}^{1} (x^5 - 3x^3 + 2x^2)\\,dx', notifText: '∫₋₁¹ (x⁵ - 3x³ + 2x²) dx', difficulty: 'Classic', topic: 'Parity & Symmetry' },
  { id: 'int-067', latex: '\\int_{-1}^{1} \\frac{dx}{(1+e^x)(1+x^2)}', notifText: '∫₋₁¹ dx / ((1 + eˣ)(1 + x²))', difficulty: 'Hard', topic: 'Parity & Symmetry' },
  { id: 'int-068', latex: '\\int_{-\\frac{\\pi}{2}}^{\\frac{\\pi}{2}} \\frac{\\cos^2(x)}{1+2^x}\\,dx', notifText: '∫₋π/2^(π/2) cos²(x) / (1 + 2ˣ) dx', difficulty: 'Hard', topic: 'Parity & Symmetry' },
  { id: 'int-069', latex: '\\int_{-\\infty}^{\\infty} \\frac{x^2\\,dx}{(1+e^x)(1+x^2)^2}', notifText: '∫₋∞^∞ x² / ((1 + eˣ)(1 + x²)²) dx', difficulty: 'Hard', topic: 'Parity & Symmetry' },
  { id: 'int-070', latex: '\\int_{-1}^{1} \\ln\\left(\\frac{1+x}{1-x}\\right)\\frac{x}{1+x^2}\\,dx', notifText: '∫₋₁¹ ln((1+x)/(1-x)) · x/(1+x²) dx', difficulty: 'Hard', topic: 'Parity & Symmetry' },

  // 11. King's Property & Reflection Identities
  { id: 'int-071', latex: '\\int_{0}^{\\frac{\\pi}{2}} \\frac{\\sqrt{\\sin x}}{\\sqrt{\\sin x} + \\sqrt{\\cos x}}\\,dx', notifText: '∫₀^(π/2) √sin(x) / (√sin(x) + √cos(x)) dx', difficulty: 'Classic', topic: "King's Property" },
  { id: 'int-072', latex: '\\int_{0}^{\\frac{\\pi}{2}} \\frac{dx}{1 + \\tan^3(x)}', notifText: '∫₀^(π/2) dx / (1 + tan³(x))', difficulty: 'Classic', topic: "King's Property" },
  { id: 'int-073', latex: '\\int_{0}^{\\pi} \\frac{x\\sin(x)}{1 + \\cos^2(x)}\\,dx', notifText: '∫₀^π x sin(x) / (1 + cos²(x)) dx', difficulty: 'Classic', topic: "King's Property" },
  { id: 'int-074', latex: '\\int_{0}^{\\frac{\\pi}{4}} \\ln(1 + \\tan x)\\,dx', notifText: '∫₀^(π/4) ln(1 + tan x) dx', difficulty: 'Hard', topic: "King's Property" },
  { id: 'int-075', latex: '\\int_{0}^{\\frac{\\pi}{2}} \\ln(\\sin x)\\,dx', notifText: '∫₀^(π/2) ln(sin x) dx', difficulty: 'Hard', topic: "King's Property" },
  { id: 'int-076', latex: '\\int_{0}^{\\infty} \\frac{\\ln(x)}{1 + x^2}\\,dx', notifText: '∫₀^∞ ln(x) / (1 + x²) dx', difficulty: 'Hard', topic: "King's Property" },
  { id: 'int-077', latex: '\\int_{0}^{1} \\frac{\\ln(1+x)}{1+x^2}\\,dx', notifText: '∫₀¹ ln(1 + x) / (1 + x²) dx', difficulty: 'Hard', topic: "King's Property" },

  // 12. Differentiation Under the Integral Sign (Feynman's Trick)
  { id: 'int-078', latex: '\\int_{0}^{\\infty} x^2 e^{-ax}\\,dx', notifText: '∫₀^∞ x² e^(-ax) dx', difficulty: 'Classic', topic: "Feynman's Trick" },
  { id: 'int-079', latex: '\\int_{0}^{1} \\frac{x^a - 1}{\\ln x}\\,dx', notifText: '∫₀¹ (xᵃ - 1) / ln(x) dx', difficulty: 'Classic', topic: "Feynman's Trick" },
  { id: 'int-080', latex: '\\int_{0}^{\\infty} \\frac{e^{-ax} - e^{-bx}}{x}\\,dx', notifText: '∫₀^∞ (e^(-ax) - e^(-bx)) / x dx', difficulty: 'Classic', topic: "Feynman's Trick" },
  { id: 'int-081', latex: '\\int_{0}^{\\infty} \\frac{\\sin(x)}{x}\\,dx', notifText: '∫₀^∞ sin(x) / x dx', difficulty: 'Hard', topic: "Feynman's Trick" },
  { id: 'int-082', latex: '\\int_{0}^{\\infty} e^{-x^2}\\cos(bx)\\,dx', notifText: '∫₀^∞ e^(-x²) cos(bx) dx', difficulty: 'Hard', topic: "Feynman's Trick" },
  { id: 'int-083', latex: '\\int_{0}^{\\pi} \\ln(1 + a\\cos x)\\,dx', notifText: '∫₀^π ln(1 + a cos x) dx', difficulty: 'Hard', topic: "Feynman's Trick" },
  { id: 'int-084', latex: '\\int_{0}^{\\infty} \\frac{\\arctan(ax) - \\arctan(bx)}{x}\\,dx', notifText: '∫₀^∞ (arctan(ax) - arctan(bx)) / x dx', difficulty: 'Hard', topic: "Feynman's Trick" },

  // 13. 2D Polar Coordinate Integrals
  { id: 'int-085', latex: '\\iint_{x^2+y^2\\le R^2} (x^2 + y^2)\\,dx\\,dy', notifText: '∬_(r≤R) (x² + y²) dx dy', difficulty: 'Classic', topic: '2D Polar Integrals' },
  { id: 'int-086', latex: '\\iint_{\\mathbb{R}^2} e^{-(x^2+y^2)}\\,dx\\,dy', notifText: '∬_R² e^(-(x²+y²)) dx dy', difficulty: 'Classic', topic: '2D Polar Integrals' },
  { id: 'int-087', latex: '\\iint_{r\\le a} \\frac{dx\\,dy}{\\sqrt{a^2 - x^2 - y^2}}', notifText: '∬_(r≤a) dx dy / √(a² - x² - y²)', difficulty: 'Classic', topic: '2D Polar Integrals' },
  { id: 'int-088', latex: '\\iint_{x^2+y^2\\le 2ax} \\sqrt{x^2+y^2}\\,dx\\,dy', notifText: '∬_(x²+y²≤2ax) √(x² + y²) dx dy', difficulty: 'Hard', topic: '2D Polar Integrals' },
  { id: 'int-089', latex: '\\iint_{r\\le 1+\\cos\\theta} r\\,dA', notifText: '∬_(cardioid r≤1+cosθ) r dA', difficulty: 'Hard', topic: '2D Polar Integrals' },
  { id: 'int-090', latex: '\\iint_{\\mathbb{R}^2} \\frac{dx\\,dy}{(1 + x^2 + y^2)^2}', notifText: '∬_R² dx dy / (1 + x² + y²)²', difficulty: 'Hard', topic: '2D Polar Integrals' },
  { id: 'int-091', latex: '\\iint_{x^2+y^2\\le R^2} \\frac{x^2 y^2}{(x^2+y^2)^2}\\,dx\\,dy', notifText: '∬_(r≤R) x²y² / (x²+y²)² dx dy', difficulty: 'Hard', topic: '2D Polar Integrals' },

  // 14. 3D Cylindrical Coordinate Integrals
  { id: 'int-092', latex: '\\iiint_{r\\le R,\\, 0\\le z\\le H} r^2\\,dV', notifText: '∭_(cylinder) r² dV (Moment of Inertia)', difficulty: 'Classic', topic: '3D Cylindrical' },
  { id: 'int-093', latex: '\\iiint_{x^2+y^2\\le R^2,\\, 0\\le z\\le h} z\\,dV', notifText: '∭_(cylinder) z dV', difficulty: 'Classic', topic: '3D Cylindrical' },
  { id: 'int-094', latex: '\\int_{0}^{2\\pi}\\int_{0}^{R}\\int_{0}^{H} e^{-z}\\rho\\,dz\\,d\\rho\\,d\\phi', notifText: '∫₀^(2π)∫₀ᴿ∫₀ᴴ e^(-z) ρ dz dρ dφ', difficulty: 'Classic', topic: '3D Cylindrical' },
  { id: 'int-095', latex: '\\iiint_{z\\ge \\rho^2,\\, z\\le 4} (x^2+y^2)\\,dV', notifText: '∭_(ρ²≤z≤4) (x² + y²) dV', difficulty: 'Hard', topic: '3D Cylindrical' },
  { id: 'int-096', latex: '\\iiint_{\\rho^2+z^2\\le R^2,\\, \\rho\\le a} dV', notifText: '∭_(sphere minus cylindrical bore) dV', difficulty: 'Hard', topic: '3D Cylindrical' },
  { id: 'int-097', latex: '\\iiint_{0\\le z\\le H,\\, \\rho\\le R} \\frac{dV}{(\\rho^2 + z^2 + a^2)^{3/2}}', notifText: '∭_(cyl) dV / (ρ² + z² + a²)^(3/2)', difficulty: 'Hard', topic: '3D Cylindrical' },
  { id: 'int-098', latex: '\\iiint_{\\rho\\le 2a\\cos\\phi,\\, 0\\le z\\le \\rho} z\\,dV', notifText: '∭_(ρ≤2a cosφ, 0≤z≤ρ) z dV', difficulty: 'Hard', topic: '3D Cylindrical' },

  // 15. 3D Spherical Coordinate Integrals
  { id: 'int-099', latex: '\\iiint_{r\\le R} r^2\\sin^2\\theta\\,dV', notifText: '∭_(sphere) r² sin²θ dV', difficulty: 'Classic', topic: '3D Spherical' },
  { id: 'int-100', latex: '\\iiint_{\\mathbb{R}^3} e^{-r/a}\\,dV', notifText: '∭_R³ e^(-r/a) dV (Hydrogen 1s)', difficulty: 'Classic', topic: '3D Spherical' },
  { id: 'int-101', latex: '\\iiint_{r\\le R} \\frac{dV}{r}', notifText: '∭_(r≤R) dV / r (Gravitational Potential)', difficulty: 'Classic', topic: '3D Spherical' },
  { id: 'int-102', latex: '\\iiint_{\\mathbb{R}^3} \\frac{e^{-\\mu r}}{r}\\,dV', notifText: '∭_R³ e^(-μr) / r dV (Yukawa)', difficulty: 'Hard', topic: '3D Spherical' },
  { id: 'int-103', latex: '\\iiint_{r\\le R} \\frac{dV}{|\\mathbf{r} - \\mathbf{r}_0|}', notifText: '∭_(r≤R) dV / |r - r₀| (r₀ > R)', difficulty: 'Hard', topic: '3D Spherical' },
  { id: 'int-104', latex: '\\iiint_{\\mathbb{R}^3} r^2 e^{-2r/a} \\cos^2\\theta\\,dV', notifText: '∭_R³ r² e^(-2r/a) cos²θ dV', difficulty: 'Hard', topic: '3D Spherical' },
  { id: 'int-105', latex: '\\iiint_{r\\le R,\\, \\theta\\le \\alpha} z\\,dV', notifText: '∭_(spherical cone r≤R, θ≤α) z dV', difficulty: 'Hard', topic: '3D Spherical' },

  // 16. Line Integrals (Scalar & Vector)
  { id: 'int-106', latex: '\\int_{C} (x^2\\,dx + y^2\\,dy),\\; C:\\text{ line }(0,0)\\to(1,1)', notifText: '∫_C (x² dx + y² dy) from (0,0) to (1,1)', difficulty: 'Classic', topic: 'Line Integrals' },
  { id: 'int-107', latex: '\\oint_{x^2+y^2=R^2} (-y\\,dx + x\\,dy)', notifText: '∮_(r=R) (-y dx + x dy)', difficulty: 'Classic', topic: 'Line Integrals' },
  { id: 'int-108', latex: '\\int_{C} (x+y)\\,ds,\\; C:\\,x=\\cos t,\\,y=\\sin t,\\,t\\in[0,\\pi]', notifText: '∫_C (x + y) ds on upper semicircle', difficulty: 'Classic', topic: 'Line Integrals' },
  { id: 'int-109', latex: '\\oint_{C} \\frac{-y\\,dx + x\\,dy}{x^2+y^2},\\; C:\\text{ ellipse }\\frac{x^2}{a^2}+\\frac{y^2}{b^2}=1', notifText: '∮_ellipse (-y dx + x dy) / (x² + y²)', difficulty: 'Hard', topic: 'Line Integrals' },
  { id: 'int-110', latex: '\\int_{C} \\mathbf{F}\\cdot d\\mathbf{r},\\; \\mathbf{F}=(y^2, 2xy+e^{3z}, 3ye^{3z})', notifText: '∫_C F·dr for conservative F from (0,0,0) to (1,2,1)', difficulty: 'Hard', topic: 'Line Integrals' },
  { id: 'int-111', latex: '\\int_{C} z\\,ds,\\; C:\\,(\\cos t, \\sin t, t),\\,t\\in[0,2\\pi]', notifText: '∫_helix z ds for t ∈ [0, 2π]', difficulty: 'Hard', topic: 'Line Integrals' },
  { id: 'int-112', latex: '\\oint_{C} (y^3\\,dx - x^3\\,dy),\\; C:\\,x^2+y^2=R^2', notifText: '∮_(r=R) (y³ dx - x³ dy)', difficulty: 'Hard', topic: 'Line Integrals' },

  // 17. Surface & Flux Integrals
  { id: 'int-113', latex: '\\oiint_{r=R} \\frac{\\hat{\\mathbf{r}}}{r^2}\\cdot d\\mathbf{S}', notifText: '∯_(r=R) (r̂ / r²) · dS (Gauss Law)', difficulty: 'Classic', topic: 'Surface & Flux' },
  { id: 'int-114', latex: '\\iint_{z=1-x^2-y^2,\\,z\\ge 0} (x, y, z)\\cdot d\\mathbf{S}', notifText: '∬_(paraboloid) (x, y, z) · dS', difficulty: 'Classic', topic: 'Surface & Flux' },
  { id: 'int-115', latex: '\\iint_{x^2+y^2+z^2=R^2} z^2\\,dS', notifText: '∬_(sphere) z² dS', difficulty: 'Classic', topic: 'Surface & Flux' },
  { id: 'int-116', latex: '\\iint_{S} (\\nabla\\times\\mathbf{A})\\cdot d\\mathbf{S},\\; \\mathbf{A}=(-y, x, z^2),\\; S:\\text{ upper hemisphere}', notifText: '∬_(hemisphere) (∇×A)·dS for A=(-y,x,z²)', difficulty: 'Hard', topic: 'Surface & Flux' },
  { id: 'int-117', latex: '\\iint_{z=\\sqrt{x^2+y^2},\\,z\\le h} \\mathbf{r}\\cdot d\\mathbf{S}', notifText: '∬_(cone z≤h) r · dS', difficulty: 'Hard', topic: 'Surface & Flux' },
  { id: 'int-118', latex: '\\iint_{x^2+y^2+z^2=R^2} \\frac{dS}{|\\mathbf{r} - a\\hat{\\mathbf{z}}|}', notifText: '∬_(sphere) dS / |r - aẑ| (a > R)', difficulty: 'Hard', topic: 'Surface & Flux' },
  { id: 'int-119', latex: '\\iint_{S} (x^3, y^3, z^3)\\cdot d\\mathbf{S},\\; S:\\text{ closed sphere }r=R', notifText: '∯_(r=R) (x³, y³, z³) · dS', difficulty: 'Hard', topic: 'Surface & Flux' },

  // 18. Volume Integrals (Divergence & Stokes' Theorem)
  { id: 'int-120', latex: '\\iiint_{V} (\\nabla\\cdot\\mathbf{r})\\,dV,\\; V:\\text{ sphere }r\\le R', notifText: '∭_(r≤R) (∇·r) dV', difficulty: 'Classic', topic: 'Volume Integrals' },
  { id: 'int-121', latex: '\\oiint_{\\partial V} (x^2, y^2, z^2)\\cdot d\\mathbf{S},\\; V=[0,1]^3', notifText: '∯_(unit cube) (x², y², z²) · dS', difficulty: 'Classic', topic: 'Volume Integrals' },
  { id: 'int-122', latex: '\\iiint_{r\\le R} \\nabla^2(r^2)\\,dV', notifText: '∭_(r≤R) ∇²(r²) dV', difficulty: 'Classic', topic: 'Volume Integrals' },
  { id: 'int-123', latex: '\\iiint_{r\\le R} \\nabla\\cdot\\left(\\frac{\\mathbf{r}}{r^3}\\right)\\,dV', notifText: '∭_(r≤R) ∇·(r / r³) dV', difficulty: 'Hard', topic: 'Volume Integrals' },
  { id: 'int-124', latex: '\\oiint_{\\partial V} (y z, x z, x y)\\cdot d\\mathbf{S},\\; V:\\text{ cylinder }\\rho\\le R, |z|\\le h', notifText: '∯_(cyl) (yz, xz, xy) · dS', difficulty: 'Hard', topic: 'Volume Integrals' },
  { id: 'int-125', latex: '\\oint_{C} (y\\,dx + z\\,dy + x\\,dz),\\; C:\\,x+y+z=1\\cap x^2+y^2+z^2=1', notifText: '∮_C (y dx + z dy + x dz) via Stokes', difficulty: 'Hard', topic: 'Volume Integrals' },
  { id: 'int-126', latex: '\\iiint_{r\\le R} \\mathbf{r}\\cdot(\\nabla\\times\\mathbf{F})\\,dV,\\; \\mathbf{F}=(y^2, z^2, x^2)', notifText: '∭_(r≤R) r·(∇×F) dV', difficulty: 'Hard', topic: 'Volume Integrals' },

  // 19. Standard & Higher-Order Gaussian Integrals
  { id: 'int-127', latex: '\\int_{-\\infty}^{\\infty} e^{-\\alpha x^2}\\,dx', notifText: '∫₋∞^∞ e^(-αx²) dx', difficulty: 'Classic', topic: 'Gaussian Integrals' },
  { id: 'int-128', latex: '\\int_{-\\infty}^{\\infty} x^2 e^{-\\alpha x^2}\\,dx', notifText: '∫₋∞^∞ x² e^(-αx²) dx', difficulty: 'Classic', topic: 'Gaussian Integrals' },
  { id: 'int-129', latex: '\\int_{-\\infty}^{\\infty} e^{-\\alpha x^2 + \\beta x}\\,dx', notifText: '∫₋∞^∞ e^(-αx² + βx) dx', difficulty: 'Classic', topic: 'Gaussian Integrals' },
  { id: 'int-130', latex: '\\int_{-\\infty}^{\\infty} x^6 e^{-\\alpha x^2}\\,dx', notifText: '∫₋∞^∞ x⁶ e^(-αx²) dx', difficulty: 'Hard', topic: 'Gaussian Integrals' },
  { id: 'int-131', latex: '\\int_{0}^{\\infty} e^{-(x^2 + a^2/x^2)}\\,dx', notifText: '∫₀^∞ e^(-(x² + a²/x²)) dx', difficulty: 'Hard', topic: 'Gaussian Integrals' },
  { id: 'int-132', latex: '\\int_{-\\infty}^{\\infty} e^{-ax^2}\\cos(bx^2)\\,dx', notifText: '∫₋∞^∞ e^(-ax²) cos(bx²) dx', difficulty: 'Hard', topic: 'Gaussian Integrals' },
  { id: 'int-133', latex: '\\iint_{\\mathbb{R}^2} e^{-(ax^2 + 2bxy + cy^2)}\\,dx\\,dy', notifText: '∬_R² e^(-(ax² + 2bxy + cy²)) dx dy', difficulty: 'Hard', topic: 'Gaussian Integrals' },

  // 20. Euler's Gamma Function Integrals
  { id: 'int-134', latex: '\\int_{0}^{\\infty} x^{1/2} e^{-x}\\,dx', notifText: '∫₀^∞ x^(1/2) e^(-x) dx', difficulty: 'Classic', topic: 'Gamma Function' },
  { id: 'int-135', latex: '\\int_{0}^{\\infty} x^3 e^{-x^2}\\,dx', notifText: '∫₀^∞ x³ e^(-x²) dx', difficulty: 'Classic', topic: 'Gamma Function' },
  { id: 'int-136', latex: '\\int_{0}^{1} (-\\ln x)^3\\,dx', notifText: '∫₀¹ (-ln x)³ dx', difficulty: 'Classic', topic: 'Gamma Function' },
  { id: 'int-137', latex: '\\int_{0}^{\\infty} e^{-x^4}\\,dx\\;\\text{ in terms of }\\Gamma', notifText: '∫₀^∞ e^(-x⁴) dx in terms of Γ', difficulty: 'Hard', topic: 'Gamma Function' },
  { id: 'int-138', latex: '\\int_{0}^{\\infty} x^{-1/2} e^{-\\alpha x}\\,dx', notifText: '∫₀^∞ x^(-1/2) e^(-αx) dx', difficulty: 'Hard', topic: 'Gamma Function' },
  { id: 'int-139', latex: '\\int_{0}^{\\infty} \\frac{x^{s-1}}{e^x}\\ln(x)\\,dx\\;\\text{ at }s=1', notifText: '∫₀^∞ e^(-x) ln(x) dx (= -γ)', difficulty: 'Hard', topic: 'Gamma Function' },
  { id: 'int-140', latex: '\\int_{0}^{1} \\frac{dx}{\\sqrt{-\\ln x}}', notifText: '∫₀¹ dx / √(-ln x)', difficulty: 'Hard', topic: 'Gamma Function' },

  // 21. Euler's Beta Function Integrals
  { id: 'int-141', latex: '\\int_{0}^{1} x^2 (1-x)^3\\,dx', notifText: '∫₀¹ x² (1 - x)³ dx', difficulty: 'Classic', topic: 'Beta Function' },
  { id: 'int-142', latex: '\\int_{0}^{\\frac{\\pi}{2}} \\sin^3(x)\\cos^5(x)\\,dx', notifText: '∫₀^(π/2) sin³(x) cos⁵(x) dx', difficulty: 'Classic', topic: 'Beta Function' },
  { id: 'int-143', latex: '\\int_{0}^{\\infty} \\frac{x^2}{(1+x)^5}\\,dx', notifText: '∫₀^∞ x² / (1 + x)⁵ dx', difficulty: 'Classic', topic: 'Beta Function' },
  { id: 'int-144', latex: '\\int_{0}^{\\infty} \\frac{x^{p-1}}{1+x}\\,dx\\;(0<p<1)', notifText: '∫₀^∞ x^(p-1) / (1 + x) dx', difficulty: 'Hard', topic: 'Beta Function' },
  { id: 'int-145', latex: '\\int_{0}^{1} \\frac{dx}{\\sqrt{1-x^4}}\\text{ in terms of }\\Gamma', notifText: '∫₀¹ dx / √(1 - x⁴) in terms of Γ', difficulty: 'Hard', topic: 'Beta Function' },
  { id: 'int-146', latex: '\\int_{0}^{\\infty} \\frac{dx}{1 + x^6}', notifText: '∫₀^∞ dx / (1 + x⁶)', difficulty: 'Hard', topic: 'Beta Function' },
  { id: 'int-147', latex: '\\int_{0}^{1} \\frac{x^{1/3}}{(1-x)^{2/3}}\\,dx', notifText: '∫₀¹ x^(1/3) / (1 - x)^(2/3) dx', difficulty: 'Hard', topic: 'Beta Function' },

  // 22. Fourier Series Orthogonality Integrals
  { id: 'int-148', latex: '\\int_{-\\pi}^{\\pi} \\sin(mx)\\sin(nx)\\,dx', notifText: '∫₋π^π sin(mx) sin(nx) dx', difficulty: 'Classic', topic: 'Fourier Series' },
  { id: 'int-149', latex: '\\int_{-L}^{L} e^{i(m-n)\\pi x/L}\\,dx', notifText: '∫₋L^L e^(i(m-n)πx/L) dx', difficulty: 'Classic', topic: 'Fourier Series' },
  { id: 'int-150', latex: '\\int_{0}^{\\pi} x\\sin(nx)\\,dx', notifText: '∫₀^π x sin(nx) dx', difficulty: 'Classic', topic: 'Fourier Series' },
  { id: 'int-151', latex: '\\int_{-\\pi}^{\\pi} x^2\\cos(nx)\\,dx', notifText: '∫₋π^π x² cos(nx) dx', difficulty: 'Hard', topic: 'Fourier Series' },
  { id: 'int-152', latex: '\\int_{-\\pi}^{\\pi} e^{ax}\\cos(nx)\\,dx', notifText: '∫₋π^π e^(ax) cos(nx) dx', difficulty: 'Hard', topic: 'Fourier Series' },
  { id: 'int-153', latex: '\\int_{0}^{\\pi} |\\sin x|\\cos(2nx)\\,dx', notifText: '∫₀^π |sin x| cos(2nx) dx', difficulty: 'Hard', topic: 'Fourier Series' },
  { id: 'int-154', latex: '\\int_{-\\pi}^{\\pi} \\frac{\\cos(nx)}{1 - 2r\\cos x + r^2}\\,dx\\;(|r|<1)', notifText: '∫₋π^π cos(nx) / (1 - 2r cos x + r²) dx', difficulty: 'Hard', topic: 'Fourier Series' },

  // 23. Elementary 1D Fourier Transforms
  { id: 'int-155', latex: '\\int_{-\\infty}^{\\infty} e^{-a|x|} e^{-ikx}\\,dx', notifText: '∫₋∞^∞ e^(-a|x|) e^(-ikx) dx', difficulty: 'Classic', topic: '1D Fourier Transforms' },
  { id: 'int-156', latex: '\\int_{-a}^{a} e^{-ikx}\\,dx', notifText: '∫₋ₐᵃ e^(-ikx) dx (Top-Hat / Sinc)', difficulty: 'Classic', topic: '1D Fourier Transforms' },
  { id: 'int-157', latex: '\\int_{-\\infty}^{\\infty} e^{-\\alpha x^2} e^{-ikx}\\,dx', notifText: '∫₋∞^∞ e^(-αx²) e^(-ikx) dx', difficulty: 'Classic', topic: '1D Fourier Transforms' },
  { id: 'int-158', latex: '\\int_{-\\infty}^{\\infty} x e^{-a|x|} e^{-ikx}\\,dx', notifText: '∫₋∞^∞ x e^(-a|x|) e^(-ikx) dx', difficulty: 'Hard', topic: '1D Fourier Transforms' },
  { id: 'int-159', latex: '\\int_{-\\infty}^{\\infty} \\frac{\\sin(ax)}{x} e^{-ikx}\\,dx', notifText: '∫₋∞^∞ (sin(ax)/x) e^(-ikx) dx', difficulty: 'Hard', topic: '1D Fourier Transforms' },
  { id: 'int-160', latex: '\\int_{-\\infty}^{\\infty} \\text{sech}(ax) e^{-ikx}\\,dx', notifText: '∫₋∞^∞ sech(ax) e^(-ikx) dx', difficulty: 'Hard', topic: '1D Fourier Transforms' },
  { id: 'int-161', latex: '\\int_{-\\infty}^{\\infty} \\frac{e^{ikx}}{(x^2 + a^2)^2}\\,dx', notifText: '∫₋∞^∞ e^(ikx) / (x² + a²)² dx', difficulty: 'Hard', topic: '1D Fourier Transforms' },

  // 1. Cauchy's Integral Formula
  { id: 'int-162', latex: '\\oint_{|z|=2} \\frac{e^{z}}{z - 1}\\,dz', notifText: '∮_(|z|=2) e^z / (z - 1) dz', difficulty: 'Classic', topic: "Cauchy's Formula" },
  { id: 'int-163', latex: '\\oint_{|z|=3} \\frac{\\cos(z)}{z - \\pi/2}\\,dz', notifText: '∮_(|z|=3) cos(z) / (z - π/2) dz', difficulty: 'Classic', topic: "Cauchy's Formula" },
  { id: 'int-164', latex: '\\oint_{|z|=2} \\frac{z^2 + 1}{(z - 1)^2}\\,dz', notifText: '∮_(|z|=2) (z² + 1) / (z - 1)² dz', difficulty: 'Classic', topic: "Cauchy's Formula" },
  { id: 'int-165', latex: '\\oint_{|z|=2} \\frac{\\sin(z)}{z^4}\\,dz', notifText: '∮_(|z|=2) sin(z) / z⁴ dz', difficulty: 'Hard', topic: "Cauchy's Formula" },
  { id: 'int-166', latex: '\\oint_{|z|=3} \\frac{e^{az}}{(z - 1)^3}\\,dz', notifText: '∮_(|z|=3) e^(az) / (z - 1)³ dz', difficulty: 'Hard', topic: "Cauchy's Formula" },
  { id: 'int-167', latex: '\\oint_{|z|=2} \\frac{z^n}{(z - a)^{n+1}}\\,dz\\;(|a|<2)', notifText: '∮_(|z|=2) zⁿ / (z - a)^(n+1) dz', difficulty: 'Hard', topic: "Cauchy's Formula" },
  { id: 'int-168', latex: '\\oint_{|z|=1} \\frac{\\cosh(z)}{z^3(z - 2)}\\,dz', notifText: '∮_(|z|=1) cosh(z) / (z³(z - 2)) dz', difficulty: 'Hard', topic: "Cauchy's Formula" },

  // 2. Residue Theorem (Semicircular & Rectangular Contours)
  { id: 'int-169', latex: '\\int_{-\\infty}^{\\infty} \\frac{dx}{x^2 + a^2}\\;(a>0)', notifText: '∫₋∞^∞ dx / (x² + a²)', difficulty: 'Classic', topic: 'Residue Theorem' },
  { id: 'int-170', latex: '\\int_{-\\infty}^{\\infty} \\frac{dx}{(x^2 + 1)(x^2 + 4)}', notifText: '∫₋∞^∞ dx / ((x² + 1)(x² + 4))', difficulty: 'Classic', topic: 'Residue Theorem' },
  { id: 'int-171', latex: '\\int_{0}^{2\\pi} \\frac{d\\theta}{2 + \\cos\\theta}', notifText: '∫₀^(2π) dθ / (2 + cos θ)', difficulty: 'Classic', topic: 'Residue Theorem' },
  { id: 'int-172', latex: '\\int_{-\\infty}^{\\infty} \\frac{dx}{x^4 + a^4}\\;(a>0)', notifText: '∫₋∞^∞ dx / (x⁴ + a⁴)', difficulty: 'Hard', topic: 'Residue Theorem' },
  { id: 'int-173', latex: '\\int_{-\\infty}^{\\infty} \\frac{e^{ax}}{1 + e^x}\\,dx\\;(0<a<1)', notifText: '∫₋∞^∞ e^(ax) / (1 + eˣ) dx', difficulty: 'Hard', topic: 'Residue Theorem' },
  { id: 'int-174', latex: '\\int_{-\\infty}^{\\infty} \\frac{dx}{(x^2 + a^2)^3}\\;(a>0)', notifText: '∫₋∞^∞ dx / (x² + a²)³', difficulty: 'Hard', topic: 'Residue Theorem' },
  { id: 'int-175', latex: '\\int_{-\\infty}^{\\infty} \\frac{x^2\\,dx}{\\cosh(\\pi x)}', notifText: '∫₋∞^∞ x² / cosh(πx) dx', difficulty: 'Hard', topic: 'Residue Theorem' },

  // 3. Jordan's Lemma & Fourier-Type Contour Integrals
  { id: 'int-176', latex: '\\int_{-\\infty}^{\\infty} \\frac{\\cos(kx)}{x^2 + a^2}\\,dx\\;(a,k>0)', notifText: '∫₋∞^∞ cos(kx) / (x² + a²) dx', difficulty: 'Classic', topic: "Jordan's Lemma" },
  { id: 'int-177', latex: '\\int_{-\\infty}^{\\infty} \\frac{x\\sin(kx)}{x^2 + a^2}\\,dx\\;(a,k>0)', notifText: '∫₋∞^∞ x sin(kx) / (x² + a²) dx', difficulty: 'Classic', topic: "Jordan's Lemma" },
  { id: 'int-178', latex: '\\int_{-\\infty}^{\\infty} \\frac{e^{ikx}}{x - ia}\\,dx\\;(a,k>0)', notifText: '∫₋∞^∞ e^(ikx) / (x - ia) dx', difficulty: 'Classic', topic: "Jordan's Lemma" },
  { id: 'int-179', latex: '\\int_{-\\infty}^{\\infty} \\frac{\\cos(kx)}{(x^2 + a^2)^2}\\,dx\\;(a,k>0)', notifText: '∫₋∞^∞ cos(kx) / (x² + a²)² dx', difficulty: 'Hard', topic: "Jordan's Lemma" },
  { id: 'int-180', latex: '\\int_{-\\infty}^{\\infty} \\frac{\\cos(kx)}{x^4 + a^4}\\,dx\\;(a,k>0)', notifText: '∫₋∞^∞ cos(kx) / (x⁴ + a⁴) dx', difficulty: 'Hard', topic: "Jordan's Lemma" },
  { id: 'int-181', latex: '\\int_{-\\infty}^{\\infty} \\frac{x\\sin(kx)}{(x^2 + a^2)(x^2 + b^2)}\\,dx', notifText: '∫₋∞^∞ x sin(kx) / ((x²+a²)(x²+b²)) dx', difficulty: 'Hard', topic: "Jordan's Lemma" },
  { id: 'int-182', latex: '\\int_{-\\infty}^{\\infty} \\frac{e^{ikx}}{\\cosh(x)}\\,dx', notifText: '∫₋∞^∞ e^(ikx) / cosh(x) dx', difficulty: 'Hard', topic: "Jordan's Lemma" },

  // 4. Indented Contours & Cauchy Principal Value
  { id: 'int-183', latex: '\\int_{-\\infty}^{\\infty} \\frac{\\sin(x)}{x}\\,dx', notifText: '∫₋∞^∞ sin(x) / x dx', difficulty: 'Classic', topic: 'Indented Contours' },
  { id: 'int-184', latex: '\\mathcal{P}\\int_{-\\infty}^{\\infty} \\frac{dx}{x(x^2 + 1)}', notifText: 'P ∫₋∞^∞ dx / (x(x² + 1))', difficulty: 'Classic', topic: 'Indented Contours' },
  { id: 'int-185', latex: '\\mathcal{P}\\int_{-\\infty}^{\\infty} \\frac{e^{ikx}}{x}\\,dx\\;(k>0)', notifText: 'P ∫₋∞^∞ e^(ikx) / x dx', difficulty: 'Classic', topic: 'Indented Contours' },
  { id: 'int-186', latex: '\\int_{0}^{\\infty} \\frac{\\sin^2(x)}{x^2}\\,dx', notifText: '∫₀^∞ sin²(x) / x² dx', difficulty: 'Hard', topic: 'Indented Contours' },
  { id: 'int-187', latex: '\\int_{0}^{\\infty} \\frac{\\sin^3(x)}{x^3}\\,dx', notifText: '∫₀^∞ sin³(x) / x³ dx', difficulty: 'Hard', topic: 'Indented Contours' },
  { id: 'int-188', latex: '\\mathcal{P}\\int_{-\\infty}^{\\infty} \\frac{\\cos(x)}{a^2 - x^2}\\,dx\\;(a>0)', notifText: 'P ∫₋∞^∞ cos(x) / (a² - x²) dx', difficulty: 'Hard', topic: 'Indented Contours' },
  { id: 'int-189', latex: '\\mathcal{P}\\int_{0}^{\\infty} \\frac{x^{a-1}}{1 - x}\\,dx\\;(0<a<1)', notifText: 'P ∫₀^∞ x^(a-1) / (1 - x) dx', difficulty: 'Hard', topic: 'Indented Contours' },

  // 5. Branch Cuts & Keyhole / Dog-Bone Contours
  { id: 'int-190', latex: '\\int_{0}^{\\infty} \\frac{x^{a-1}}{1 + x}\\,dx\\;(0<a<1)', notifText: '∫₀^∞ x^(a-1) / (1 + x) dx', difficulty: 'Classic', topic: 'Branch Cuts' },
  { id: 'int-191', latex: '\\int_{0}^{\\infty} \\frac{\\sqrt{x}}{1 + x^2}\\,dx', notifText: '∫₀^∞ √x / (1 + x²) dx', difficulty: 'Classic', topic: 'Branch Cuts' },
  { id: 'int-192', latex: '\\int_{0}^{\\infty} \\frac{\\ln(x)}{1 + x^2}\\,dx', notifText: '∫₀^∞ ln(x) / (1 + x²) dx', difficulty: 'Classic', topic: 'Branch Cuts' },
  { id: 'int-193', latex: '\\int_{0}^{\\infty} \\frac{\\ln(x)}{(x + a)^2}\\,dx\\;(a>0)', notifText: '∫₀^∞ ln(x) / (x + a)² dx', difficulty: 'Hard', topic: 'Branch Cuts' },
  { id: 'int-194', latex: '\\int_{0}^{\\infty} \\frac{\\ln^2(x)}{1 + x^2}\\,dx', notifText: '∫₀^∞ ln²(x) / (1 + x²) dx', difficulty: 'Hard', topic: 'Branch Cuts' },
  { id: 'int-195', latex: '\\int_{-1}^{1} \\frac{dx}{(1 + x^2)\\sqrt{1 - x^2}}', notifText: '∫₋₁¹ dx / ((1 + x²)√(1 - x²))', difficulty: 'Hard', topic: 'Branch Cuts' },
  { id: 'int-196', latex: '\\int_{0}^{\\infty} \\frac{x^{a-1}}{(1 + x)^2}\\,dx\\;(0<a<2)', notifText: '∫₀^∞ x^(a-1) / (1 + x)² dx', difficulty: 'Hard', topic: 'Branch Cuts' },

  // 6. Bose-Einstein Integrals (Polylogarithms)
  { id: 'int-197', latex: '\\int_{0}^{\\infty} \\frac{x}{e^x - 1}\\,dx', notifText: '∫₀^∞ x / (eˣ - 1) dx', difficulty: 'Classic', topic: 'Bose-Einstein' },
  { id: 'int-198', latex: '\\int_{0}^{\\infty} \\frac{x^3}{e^x - 1}\\,dx', notifText: '∫₀^∞ x³ / (eˣ - 1) dx', difficulty: 'Classic', topic: 'Bose-Einstein' },
  { id: 'int-199', latex: '\\int_{0}^{\\infty} \\frac{x^2}{e^x - 1}\\,dx\\;\\text{ in terms of }\\zeta(3)', notifText: '∫₀^∞ x² / (eˣ - 1) dx in terms of ζ(3)', difficulty: 'Classic', topic: 'Bose-Einstein' },
  { id: 'int-200', latex: '\\frac{1}{\\Gamma(s)}\\int_{0}^{\\infty} \\frac{x^{s-1}}{z^{-1}e^x - 1}\\,dx', notifText: 'g_s(z) = (1/Γ(s)) ∫₀^∞ x^(s-1) / (z⁻¹eˣ - 1) dx', difficulty: 'Hard', topic: 'Bose-Einstein' },
  { id: 'int-201', latex: '\\int_{0}^{\\infty} \\frac{x^4 e^x}{(e^x - 1)^2}\\,dx', notifText: '∫₀^∞ x⁴ eˣ / (eˣ - 1)² dx', difficulty: 'Hard', topic: 'Bose-Einstein' },
  { id: 'int-202', latex: '\\int_{0}^{\\infty} \\frac{x^{1/2}}{e^x - 1}\\,dx\\;\\text{ in terms of }\\zeta(3/2)', notifText: '∫₀^∞ √x / (eˣ - 1) dx (BEC)', difficulty: 'Hard', topic: 'Bose-Einstein' },
  { id: 'int-203', latex: '\\int_{0}^{\\infty} \\frac{x^5}{e^x - 1}\\,dx', notifText: '∫₀^∞ x⁵ / (eˣ - 1) dx', difficulty: 'Hard', topic: 'Bose-Einstein' },

  // 7. Fermi-Dirac Integrals
  { id: 'int-204', latex: '\\int_{0}^{\\infty} \\frac{x}{e^x + 1}\\,dx', notifText: '∫₀^∞ x / (eˣ + 1) dx', difficulty: 'Classic', topic: 'Fermi-Dirac' },
  { id: 'int-205', latex: '\\int_{0}^{\\infty} \\frac{x^3}{e^x + 1}\\,dx', notifText: '∫₀^∞ x³ / (eˣ + 1) dx', difficulty: 'Classic', topic: 'Fermi-Dirac' },
  { id: 'int-206', latex: '\\int_{0}^{\\infty} \\frac{dx}{e^x + 1}', notifText: '∫₀^∞ dx / (eˣ + 1)', difficulty: 'Classic', topic: 'Fermi-Dirac' },
  { id: 'int-207', latex: '\\int_{0}^{\\infty} \\frac{x^2}{e^x + 1}\\,dx\\;\\text{ in terms of }\\zeta(3)', notifText: '∫₀^∞ x² / (eˣ + 1) dx in terms of ζ(3)', difficulty: 'Hard', topic: 'Fermi-Dirac' },
  { id: 'int-208', latex: '\\int_{-\\infty}^{\\infty} \\frac{e^x}{(e^x + 1)^2}\\,dx', notifText: '∫₋∞^∞ eˣ / (eˣ + 1)² dx', difficulty: 'Hard', topic: 'Fermi-Dirac' },
  { id: 'int-209', latex: '\\int_{-\\infty}^{\\infty} \\frac{x^2 e^x}{(e^x + 1)^2}\\,dx', notifText: '∫₋∞^∞ x² eˣ / (eˣ + 1)² dx', difficulty: 'Hard', topic: 'Fermi-Dirac' },
  { id: 'int-210', latex: '\\frac{1}{\\Gamma(s)}\\int_{0}^{\\infty} \\frac{x^{s-1}}{z^{-1}e^x + 1}\\,dx', notifText: 'f_s(z) = (1/Γ(s)) ∫₀^∞ x^(s-1) / (z⁻¹eˣ + 1) dx', difficulty: 'Hard', topic: 'Fermi-Dirac' },

  // 8. Sommerfeld Expansion Integrals
  { id: 'int-211', latex: '\\int_{-\\infty}^{\\infty} \\frac{x^4 e^x}{(e^x + 1)^2}\\,dx', notifText: '∫₋∞^∞ x⁴ eˣ / (eˣ + 1)² dx', difficulty: 'Classic', topic: 'Sommerfeld Expansion' },
  { id: 'int-212', latex: '\\int_{0}^{\\infty} \\frac{\\epsilon\\,d\\epsilon}{e^{\\beta(\\epsilon - \\mu)} + 1}\\;(\\beta\\mu\\gg 1)', notifText: '∫₀^∞ ε / (e^(β(ε-μ)) + 1) dε (to O(T²))', difficulty: 'Classic', topic: 'Sommerfeld Expansion' },
  { id: 'int-213', latex: '\\int_{0}^{\\infty} \\frac{d\\epsilon}{e^{\\beta(\\epsilon - \\mu)} + 1}', notifText: '∫₀^∞ dε / (e^(β(ε-μ)) + 1)', difficulty: 'Classic', topic: 'Sommerfeld Expansion' },
  { id: 'int-214', latex: '\\int_{0}^{\\infty} \\frac{\\epsilon^{1/2}\\,d\\epsilon}{e^{\\beta(\\epsilon - \\mu)} + 1}\\;(\\text{to }O(T^2))', notifText: '∫₀^∞ √ε / (e^(β(ε-μ)) + 1) dε (to O(T²))', difficulty: 'Hard', topic: 'Sommerfeld Expansion' },
  { id: 'int-215', latex: '\\int_{0}^{\\infty} \\frac{\\epsilon^{3/2}\\,d\\epsilon}{e^{\\beta(\\epsilon - \\mu)} + 1}\\;(\\text{to }O(T^2))', notifText: '∫₀^∞ ε^(3/2) / (e^(β(ε-μ)) + 1) dε (to O(T²))', difficulty: 'Hard', topic: 'Sommerfeld Expansion' },
  { id: 'int-216', latex: '\\int_{0}^{\\infty} \\frac{\\epsilon^2\\,d\\epsilon}{e^{\\beta(\\epsilon - \\mu)} + 1}\\;(\\text{to }O(T^4))', notifText: '∫₀^∞ ε² / (e^(β(ε-μ)) + 1) dε (to O(T⁴))', difficulty: 'Hard', topic: 'Sommerfeld Expansion' },
  { id: 'int-217', latex: '\\int_{-\\infty}^{\\infty} \\frac{x^{2n} e^x}{(e^x + 1)^2}\\,dx', notifText: '∫₋∞^∞ x^(2n) eˣ / (eˣ + 1)² dx', difficulty: 'Hard', topic: 'Sommerfeld Expansion' },

  // 9. Debye Specific Heat Integrals
  { id: 'int-218', latex: '\\int_{0}^{\\infty} \\frac{x^4 e^x}{(e^x - 1)^2}\\,dx\\;(\\text{Low-}T\\text{ 3D Debye})', notifText: '∫₀^∞ x⁴ eˣ / (eˣ - 1)² dx (3D Debye)', difficulty: 'Classic', topic: 'Debye Integrals' },
  { id: 'int-219', latex: '\\int_{0}^{x_D} \\frac{x^4 e^x}{(e^x - 1)^2}\\,dx\\;(\\text{High-}T,\\,x_D\\ll 1)', notifText: '∫₀^(x_D) x⁴ eˣ / (eˣ - 1)² dx (High-T limit)', difficulty: 'Classic', topic: 'Debye Integrals' },
  { id: 'int-220', latex: '\\int_{0}^{\\infty} \\frac{x^2 e^x}{(e^x - 1)^2}\\,dx\\;(\\text{1D Phonons})', notifText: '∫₀^∞ x² eˣ / (eˣ - 1)² dx (1D Phonons)', difficulty: 'Classic', topic: 'Debye Integrals' },
  { id: 'int-221', latex: '\\int_{0}^{\\infty} \\frac{x^3 e^x}{(e^x - 1)^2}\\,dx\\;(\\text{2D Graphene Phonons})', notifText: '∫₀^∞ x³ eˣ / (eˣ - 1)² dx (2D Phonons)', difficulty: 'Hard', topic: 'Debye Integrals' },
  { id: 'int-222', latex: '\\int_{0}^{x_D} x^2 \\ln(1 - e^{-x})\\,dx\\;\\text{ as }x_D\\to\\infty', notifText: '∫₀^∞ x² ln(1 - e^(-x)) dx (Debye Free Energy)', difficulty: 'Hard', topic: 'Debye Integrals' },
  { id: 'int-223', latex: '\\int_{0}^{x_D} \\frac{x^3}{e^x - 1}\\,dx\\;\\text{ expand for }x_D\\ll 1\\text{ to }O(x_D^5)', notifText: '∫₀^(x_D) x³ / (eˣ - 1) dx (High-T expansion)', difficulty: 'Hard', topic: 'Debye Integrals' },
  { id: 'int-224', latex: '\\int_{0}^{\\infty} \\frac{x^{5/2} e^x}{(e^x - 1)^2}\\,dx\\;(\\text{Magnon }T^{3/2})', notifText: '∫₀^∞ x^(5/2) eˣ / (eˣ - 1)² dx (Magnons)', difficulty: 'Hard', topic: 'Debye Integrals' },

  // 10. Legendre & Associated Legendre Polynomial Integrals
  { id: 'int-225', latex: '\\int_{-1}^{1} P_l(x) P_{l\'}(x)\\,dx', notifText: '∫₋₁¹ P_l(x) P_l\'(x) dx', difficulty: 'Classic', topic: 'Legendre Polynomials' },
  { id: 'int-226', latex: '\\int_{-1}^{1} x P_2(x)\\,dx', notifText: '∫₋₁¹ x P₂(x) dx', difficulty: 'Classic', topic: 'Legendre Polynomials' },
  { id: 'int-227', latex: '\\int_{-1}^{1} x^2 P_2(x)\\,dx', notifText: '∫₋₁¹ x² P₂(x) dx', difficulty: 'Classic', topic: 'Legendre Polynomials' },
  { id: 'int-228', latex: '\\int_{-1}^{1} x P_l(x) P_{l+1}(x)\\,dx', notifText: '∫₋₁¹ x P_l(x) P_(l+1)(x) dx', difficulty: 'Hard', topic: 'Legendre Polynomials' },
  { id: 'int-229', latex: '\\int_{0}^{1} P_{2n+1}(x)\\,dx', notifText: '∫₀¹ P_(2n+1)(x) dx', difficulty: 'Hard', topic: 'Legendre Polynomials' },
  { id: 'int-230', latex: '\\int_{-1}^{1} P_l^m(x) P_{l\'}^m(x)\\,dx', notifText: '∫₋₁¹ P_l^m(x) P_l\'^m(x) dx', difficulty: 'Hard', topic: 'Legendre Polynomials' },
  { id: 'int-231', latex: '\\int_{-1}^{1} \\frac{P_l(x)}{\\sqrt{1 - 2xt + t^2}}\\,dx\\;(|t|<1)', notifText: '∫₋₁¹ P_l(x) / √(1 - 2xt + t²) dx', difficulty: 'Hard', topic: 'Legendre Polynomials' },

  // 11. Spherical Harmonics Orthogonality Integrals
  { id: 'int-232', latex: '\\oint Y_l^{m*}(\\theta,\\phi) Y_{l\'}^{m\'}(\\theta,\\phi)\\,d\\Omega', notifText: '∮ Y_l^m*(θ,φ) Y_l\'^m\'(θ,φ) dΩ', difficulty: 'Classic', topic: 'Spherical Harmonics' },
  { id: 'int-233', latex: '\\oint \\cos\\theta\\, |Y_1^0(\\theta,\\phi)|^2\\,d\\Omega', notifText: '∮ cosθ |Y₁⁰(θ,φ)|² dΩ', difficulty: 'Classic', topic: 'Spherical Harmonics' },
  { id: 'int-234', latex: '\\oint \\cos^2\\theta\\, |Y_1^0(\\theta,\\phi)|^2\\,d\\Omega', notifText: '∮ cos²θ |Y₁⁰(θ,φ)|² dΩ', difficulty: 'Classic', topic: 'Spherical Harmonics' },
  { id: 'int-235', latex: '\\oint Y_1^{0*}(\\theta,\\phi) \\cos\\theta\\, Y_2^0(\\theta,\\phi)\\,d\\Omega', notifText: '∮ Y₁⁰* cosθ Y₂⁰ dΩ (Dipole Selection)', difficulty: 'Hard', topic: 'Spherical Harmonics' },
  { id: 'int-236', latex: '\\oint \\sin^2\\theta\\, |Y_1^1(\\theta,\\phi)|^2\\,d\\Omega', notifText: '∮ sin²θ |Y₁¹(θ,φ)|² dΩ', difficulty: 'Hard', topic: 'Spherical Harmonics' },
  { id: 'int-237', latex: '\\oint Y_2^{0*}(\\theta,\\phi) Y_1^1(\\theta,\\phi) Y_1^{-1}(\\theta,\\phi)\\,d\\Omega', notifText: '∮ Y₂⁰* Y₁¹ Y₁⁻¹ dΩ (Gaunt Integral)', difficulty: 'Hard', topic: 'Spherical Harmonics' },
  { id: 'int-238', latex: '\\oint e^{i\\mathbf{k}\\cdot\\mathbf{r}} Y_l^{m*}(\\hat{\\mathbf{r}})\\,d\\Omega', notifText: '∮ e^(ik·r) Y_l^m*(r̂) dΩ (Plane Wave)', difficulty: 'Hard', topic: 'Spherical Harmonics' },

  // 12. Bessel, Neumann & Hankel Function Integrals
  { id: 'int-239', latex: '\\int_{0}^{x} t J_0(t)\\,dt', notifText: '∫₀ˣ t J₀(t) dt', difficulty: 'Classic', topic: 'Bessel Functions' },
  { id: 'int-240', latex: '\\int_{0}^{\\infty} J_1(x)\\,dx', notifText: '∫₀^∞ J₁(x) dx', difficulty: 'Classic', topic: 'Bessel Functions' },
  { id: 'int-241', latex: '\\frac{1}{\\pi}\\int_{0}^{\\pi} \\cos(x\\sin\\theta)\\,d\\theta', notifText: '(1/π) ∫₀^π cos(x sinθ) dθ (= J₀(x))', difficulty: 'Classic', topic: 'Bessel Functions' },
  { id: 'int-242', latex: '\\int_{0}^{\\infty} e^{-ax} J_0(bx)\\,dx\\;(a>0)', notifText: '∫₀^∞ e^(-ax) J₀(bx) dx', difficulty: 'Hard', topic: 'Bessel Functions' },
  { id: 'int-243', latex: '\\int_{0}^{\\infty} e^{-a x^2} J_0(bx) x\\,dx\\;(a>0)', notifText: '∫₀^∞ x e^(-ax²) J₀(bx) dx', difficulty: 'Hard', topic: 'Bessel Functions' },
  { id: 'int-244', latex: '\\int_{0}^{1} x J_n(\\alpha x) J_n(\\beta x)\\,dx\\;(\\alpha,\\beta\\text{ roots})', notifText: '∫₀¹ x J_n(αx) J_n(βx) dx', difficulty: 'Hard', topic: 'Bessel Functions' },
  { id: 'int-245', latex: '\\int_{0}^{\\infty} J_0(ax) \\sin(bx)\\,dx\\;(b>a>0)', notifText: '∫₀^∞ J₀(ax) sin(bx) dx', difficulty: 'Hard', topic: 'Bessel Functions' },

  // 13. Fourier-Bessel & Weber-Schafheitlin Integrals
  { id: 'int-246', latex: '\\int_{0}^{\\infty} k J_0(kr) J_0(kr\')\\,dk', notifText: '∫₀^∞ k J₀(kr) J₀(kr\') dk (Closure)', difficulty: 'Classic', topic: 'Fourier-Bessel' },
  { id: 'int-247', latex: '\\int_{0}^{R} r J_0(kr)\\,dr', notifText: '∫₀ᴿ r J₀(kr) dr (Airy Disk)', difficulty: 'Classic', topic: 'Fourier-Bessel' },
  { id: 'int-248', latex: '\\int_{0}^{\\infty} J_0(x)\\,dx', notifText: '∫₀^∞ J₀(x) dx', difficulty: 'Classic', topic: 'Fourier-Bessel' },
  { id: 'int-249', latex: '\\int_{0}^{\\infty} \\frac{J_1(ax)}{x}\\,dx\\;(a>0)', notifText: '∫₀^∞ J₁(ax) / x dx', difficulty: 'Hard', topic: 'Fourier-Bessel' },
  { id: 'int-250', latex: '\\int_{0}^{\\infty} \\frac{J_0(ax) - J_0(bx)}{x}\\,dx', notifText: '∫₀^∞ (J₀(ax) - J₀(bx)) / x dx', difficulty: 'Hard', topic: 'Fourier-Bessel' },
  { id: 'int-251', latex: '\\int_{0}^{\\infty} \\frac{J_\\mu(ax) J_\\nu(bx)}{x}\\,dx\\;(\\text{Weber-Schafheitlin})', notifText: '∫₀^∞ J_μ(ax) J_ν(bx) / x dx', difficulty: 'Hard', topic: 'Fourier-Bessel' },
  { id: 'int-252', latex: '\\int_{0}^{\\infty} \\frac{k J_0(kr)}{k^2 + m^2}\\,dk\\;(m,r>0)', notifText: '∫₀^∞ k J₀(kr) / (k² + m²) dk (= K₀(mr))', difficulty: 'Hard', topic: 'Fourier-Bessel' },

  // 14. Hermite Polynomial Integrals
  { id: 'int-253', latex: '\\int_{-\\infty}^{\\infty} H_m(x) H_n(x) e^{-x^2}\\,dx', notifText: '∫₋∞^∞ H_m(x) H_n(x) e^(-x²) dx', difficulty: 'Classic', topic: 'Hermite Polynomials' },
  { id: 'int-254', latex: '\\int_{-\\infty}^{\\infty} x H_1(x) H_2(x) e^{-x^2}\\,dx', notifText: '∫₋∞^∞ x H₁(x) H₂(x) e^(-x²) dx', difficulty: 'Classic', topic: 'Hermite Polynomials' },
  { id: 'int-255', latex: '\\int_{-\\infty}^{\\infty} H_2(x) e^{-x^2}\\,dx', notifText: '∫₋∞^∞ H₂(x) e^(-x²) dx', difficulty: 'Classic', topic: 'Hermite Polynomials' },
  { id: 'int-256', latex: '\\int_{-\\infty}^{\\infty} x^2 H_n(x)^2 e^{-x^2}\\,dx', notifText: '∫₋∞^∞ x² H_n(x)² e^(-x²) dx (QHO ⟨x²⟩)', difficulty: 'Hard', topic: 'Hermite Polynomials' },
  { id: 'int-257', latex: '\\int_{-\\infty}^{\\infty} x^4 H_n(x)^2 e^{-x^2}\\,dx', notifText: '∫₋∞^∞ x⁴ H_n(x)² e^(-x²) dx (Anharmonic)', difficulty: 'Hard', topic: 'Hermite Polynomials' },
  { id: 'int-258', latex: '\\int_{-\\infty}^{\\infty} H_n(x) e^{-(x-a)^2}\\,dx', notifText: '∫₋∞^∞ H_n(x) e^(-(x-a)²) dx', difficulty: 'Hard', topic: 'Hermite Polynomials' },
  { id: 'int-259', latex: '\\int_{-\\infty}^{\\infty} H_m(x) H_n(x) e^{-x^2 + ikx}\\,dx', notifText: '∫₋∞^∞ H_m(x) H_n(x) e^(-x² + ikx) dx', difficulty: 'Hard', topic: 'Hermite Polynomials' },

  // 15. Laguerre & Associated Laguerre Polynomial Integrals
  { id: 'int-260', latex: '\\int_{0}^{\\infty} e^{-x} L_m(x) L_n(x)\\,dx', notifText: '∫₀^∞ e^(-x) L_m(x) L_n(x) dx', difficulty: 'Classic', topic: 'Laguerre Polynomials' },
  { id: 'int-261', latex: '\\int_{0}^{\\infty} x e^{-x} L_1(x)\\,dx', notifText: '∫₀^∞ x e^(-x) L₁(x) dx', difficulty: 'Classic', topic: 'Laguerre Polynomials' },
  { id: 'int-262', latex: '\\int_{0}^{\\infty} x^k e^{-x} L_n^k(x) L_m^k(x)\\,dx', notifText: '∫₀^∞ xᵏ e^(-x) L_n^k(x) L_m^k(x) dx', difficulty: 'Classic', topic: 'Laguerre Polynomials' },
  { id: 'int-263', latex: '\\int_{0}^{\\infty} x^{k+1} e^{-x} [L_n^k(x)]^2\\,dx', notifText: '∫₀^∞ x^(k+1) e^(-x) [L_n^k(x)]² dx (Hydrogen ⟨r⟩)', difficulty: 'Hard', topic: 'Laguerre Polynomials' },
  { id: 'int-264', latex: '\\int_{0}^{\\infty} x^{k-1} e^{-x} [L_n^k(x)]^2\\,dx\\;(k\\ge 1)', notifText: '∫₀^∞ x^(k-1) e^(-x) [L_n^k(x)]² dx (Hydrogen ⟨1/r⟩)', difficulty: 'Hard', topic: 'Laguerre Polynomials' },
  { id: 'int-265', latex: '\\int_{0}^{\\infty} e^{-sx} L_n(x)\\,dx\\;(s>0)', notifText: '∫₀^∞ e^(-sx) L_n(x) dx (Laplace of L_n)', difficulty: 'Hard', topic: 'Laguerre Polynomials' },
  { id: 'int-266', latex: '\\int_{0}^{\\infty} x^2 e^{-x} L_2^1(x) L_1^1(x)\\,dx', notifText: '∫₀^∞ x² e^(-x) L₂¹(x) L₁¹(x) dx', difficulty: 'Hard', topic: 'Laguerre Polynomials' },

  // 16. Error Function (erf & erfc) Integrals
  { id: 'int-267', latex: '\\int_{0}^{x} e^{-t^2}\\,dt\\;\\text{ in terms of }\\text{erf}(x)', notifText: '∫₀ˣ e^(-t²) dt in terms of erf(x)', difficulty: 'Classic', topic: 'Error Function' },
  { id: 'int-268', latex: '\\int \\text{erf}(x)\\,dx', notifText: '∫ erf(x) dx', difficulty: 'Classic', topic: 'Error Function' },
  { id: 'int-269', latex: '\\int_{0}^{\\infty} \\text{erfc}(x)\\,dx', notifText: '∫₀^∞ erfc(x) dx', difficulty: 'Classic', topic: 'Error Function' },
  { id: 'int-270', latex: '\\int_{0}^{\\infty} x\\,\\text{erfc}(x)\\,dx', notifText: '∫₀^∞ x erfc(x) dx', difficulty: 'Hard', topic: 'Error Function' },
  { id: 'int-271', latex: '\\int_{0}^{\\infty} e^{-a^2 x^2} \\text{erf}(bx)\\,dx', notifText: '∫₀^∞ e^(-a²x²) erf(bx) dx', difficulty: 'Hard', topic: 'Error Function' },
  { id: 'int-272', latex: '\\int_{0}^{\\infty} \\text{erfc}^2(x)\\,dx', notifText: '∫₀^∞ erfc²(x) dx', difficulty: 'Hard', topic: 'Error Function' },
  { id: 'int-273', latex: '\\int_{-\\infty}^{\\infty} e^{-x^2} \\text{erf}(ax + b)\\,dx', notifText: '∫₋∞^∞ e^(-x²) erf(ax + b) dx', difficulty: 'Hard', topic: 'Error Function' },

  // 17. Fresnel Integrals (S(x) & C(x))
  { id: 'int-274', latex: '\\int_{0}^{\\infty} \\cos(x^2)\\,dx', notifText: '∫₀^∞ cos(x²) dx', difficulty: 'Classic', topic: 'Fresnel Integrals' },
  { id: 'int-275', latex: '\\int_{0}^{\\infty} \\sin(x^2)\\,dx', notifText: '∫₀^∞ sin(x²) dx', difficulty: 'Classic', topic: 'Fresnel Integrals' },
  { id: 'int-276', latex: '\\int_{-\\infty}^{\\infty} e^{i a x^2}\\,dx\\;(a>0)', notifText: '∫₋∞^∞ e^(iax²) dx (Free Propagator)', difficulty: 'Classic', topic: 'Fresnel Integrals' },
  { id: 'int-277', latex: '\\int_{0}^{\\infty} \\frac{\\sin(x)}{\\sqrt{x}}\\,dx', notifText: '∫₀^∞ sin(x) / √x dx', difficulty: 'Hard', topic: 'Fresnel Integrals' },
  { id: 'int-278', latex: '\\int_{-\\infty}^{\\infty} e^{i(a x^2 + b x)}\\,dx\\;(a>0)', notifText: '∫₋∞^∞ e^(i(ax² + bx)) dx (Fresnel Diffraction)', difficulty: 'Hard', topic: 'Fresnel Integrals' },
  { id: 'int-279', latex: '\\int_{0}^{\\infty} \\cos(x^3)\\,dx\\;\\text{ in terms of }\\Gamma', notifText: '∫₀^∞ cos(x³) dx in terms of Γ', difficulty: 'Hard', topic: 'Fresnel Integrals' },
  { id: 'int-280', latex: '\\int_{0}^{\\infty} x^2 e^{i a x^2}\\,dx\\;(\\text{with }i\\epsilon\\text{ regulator})', notifText: '∫₀^∞ x² e^(iax²) dx (Regulated)', difficulty: 'Hard', topic: 'Fresnel Integrals' },

  // 18. Sine & Cosine Integrals (Si(x) & Ci(x))
  { id: 'int-281', latex: '\\int_{0}^{\\infty} \\frac{\\sin(ax)}{x}\\,dx\\;(a>0)', notifText: '∫₀^∞ sin(ax) / x dx', difficulty: 'Classic', topic: 'Sine & Cosine Integrals' },
  { id: 'int-282', latex: '\\int_{0}^{\\infty} e^{-sx} \\text{Si}(x)\\,dx\\;(s>0)', notifText: '∫₀^∞ e^(-sx) Si(x) dx (Laplace of Si)', difficulty: 'Classic', topic: 'Sine & Cosine Integrals' },
  { id: 'int-283', latex: '\\int_{0}^{\\infty} \\frac{\\cos(ax) - \\cos(bx)}{x}\\,dx', notifText: '∫₀^∞ (cos(ax) - cos(bx)) / x dx', difficulty: 'Classic', topic: 'Sine & Cosine Integrals' },
  { id: 'int-284', latex: '\\int_{0}^{\\infty} e^{-sx} \\text{Ci}(x)\\,dx\\;(s>0)', notifText: '∫₀^∞ e^(-sx) Ci(x) dx (Laplace of Ci)', difficulty: 'Hard', topic: 'Sine & Cosine Integrals' },
  { id: 'int-285', latex: '\\int_{0}^{\\infty} \\frac{\\sin(x)\\cos(x)}{x}\\,dx', notifText: '∫₀^∞ sin(x) cos(x) / x dx', difficulty: 'Hard', topic: 'Sine & Cosine Integrals' },
  { id: 'int-286', latex: '\\int_{0}^{\\infty} \\left(\\frac{\\pi}{2} - \\text{Si}(x)\\right)\\cos(x)\\,dx', notifText: '∫₀^∞ (π/2 - Si(x)) cos(x) dx', difficulty: 'Hard', topic: 'Sine & Cosine Integrals' },
  { id: 'int-287', latex: '\\int_{0}^{\\infty} \\frac{\\text{Si}(x)}{x}\\,e^{-x}\\,dx', notifText: '∫₀^∞ Si(x) e^(-x) / x dx', difficulty: 'Hard', topic: 'Sine & Cosine Integrals' },

  // 19. Dirac Delta Sifting Integrals (1D & 3D)
  { id: 'int-288', latex: '\\int_{-\\infty}^{\\infty} (x^3 + 2x)\\,\\delta(x - 3)\\,dx', notifText: '∫₋∞^∞ (x³ + 2x) δ(x - 3) dx', difficulty: 'Classic', topic: 'Dirac Delta' },
  { id: 'int-289', latex: '\\int_{-\\infty}^{\\infty} \\cos(x)\\,\\delta(2x - \\pi)\\,dx', notifText: '∫₋∞^∞ cos(x) δ(2x - π) dx', difficulty: 'Classic', topic: 'Dirac Delta' },
  { id: 'int-290', latex: '\\int_{-\\infty}^{\\infty} e^{-x^2} \\delta(x^2 - 4)\\,dx', notifText: '∫₋∞^∞ e^(-x²) δ(x² - 4) dx', difficulty: 'Classic', topic: 'Dirac Delta' },
  { id: 'int-291', latex: '\\int_{-\\infty}^{\\infty} x^2 e^{-x} \\delta\'(x - 1)\\,dx', notifText: '∫₋∞^∞ x² e^(-x) δ\'(x - 1) dx', difficulty: 'Hard', topic: 'Dirac Delta' },
  { id: 'int-292', latex: '\\int_{-\\infty}^{\\infty} \\frac{\\delta(\\sin x)}{1 + x^2}\\,dx', notifText: '∫₋∞^∞ δ(sin x) / (1 + x²) dx', difficulty: 'Hard', topic: 'Dirac Delta' },
  { id: 'int-293', latex: '\\iiint_{\\mathbb{R}^3} \\frac{e^{-r}}{r}\\,\\nabla^2\\!\\left(\\frac{1}{r}\\right) d^3r', notifText: '∭_R³ (e^(-r)/r) ∇²(1/r) d³r', difficulty: 'Hard', topic: 'Dirac Delta' },
  { id: 'int-294', latex: '\\iiint_{\\mathbb{R}^3} \\delta(r - R)\\,\\frac{\\cos^2\\theta}{r^2}\\,d^3r', notifText: '∭_R³ δ(r - R) cos²θ / r² d³r', difficulty: 'Hard', topic: 'Dirac Delta' },

  // 20. Green's Function Momentum-Space Integrals (iε Prescription)
  { id: 'int-295', latex: '\\int_{-\\infty}^{\\infty} \\frac{dk}{2\\pi}\\,\\frac{e^{ikx}}{k^2 + m^2}', notifText: '∫₋∞^∞ (dk/2π) e^(ikx) / (k² + m²)', difficulty: 'Classic', topic: "Green's Functions" },
  { id: 'int-296', latex: '\\int_{-\\infty}^{\\infty} \\frac{d\\omega}{2\\pi}\\,\\frac{e^{-i\\omega t}}{\\omega - \\omega_0 + i\\epsilon}', notifText: '∫₋∞^∞ (dω/2π) e^(-iωt) / (ω - ω₀ + iε)', difficulty: 'Classic', topic: "Green's Functions" },
  { id: 'int-297', latex: '\\int \\frac{d^3k}{(2\\pi)^3}\\,\\frac{e^{i\\mathbf{k}\\cdot\\mathbf{r}}}{k^2 + m^2}', notifText: '∫ d³k/(2π)³ e^(ik·r) / (k² + m²) (Yukawa)', difficulty: 'Classic', topic: "Green's Functions" },
  { id: 'int-298', latex: '\\int_{-\\infty}^{\\infty} \\frac{d\\omega}{2\\pi}\\,\\frac{e^{-i\\omega t}}{(\\omega + i\\epsilon)^2 - \\omega_0^2}', notifText: '∫₋∞^∞ (dω/2π) e^(-iωt) / ((ω+iε)² - ω₀²)', difficulty: 'Hard', topic: "Green's Functions" },
  { id: 'int-299', latex: '\\int \\frac{d^3k}{(2\\pi)^3}\\,\\frac{e^{i\\mathbf{k}\\cdot\\mathbf{r}}}{k^2 - k_0^2 - i\\epsilon}', notifText: '∫ d³k/(2π)³ e^(ik·r) / (k² - k₀² - iε) (Helmholtz)', difficulty: 'Hard', topic: "Green's Functions" },
  { id: 'int-300', latex: '\\int \\frac{d^3k}{(2\\pi)^3}\\,\\frac{e^{i\\mathbf{k}\\cdot\\mathbf{r}}}{k^2}\\;(\\text{Coulomb})', notifText: '∫ d³k/(2π)³ e^(ik·r) / k² (Coulomb)', difficulty: 'Hard', topic: "Green's Functions" },
  { id: 'int-301', latex: '\\int_{-\\infty}^{\\infty} \\frac{dk_0}{2\\pi}\\,\\frac{i\\,e^{-ik_0 t}}{k_0^2 - \\omega_k^2 + i\\epsilon}', notifText: '∫ (dk₀/2π) i e^(-ik₀t) / (k₀² - ω_k² + iε) (Feynman)', difficulty: 'Hard', topic: "Green's Functions" },

  // 21. Laplace Transform & Bromwich Inversion Integrals
  { id: 'int-302', latex: '\\int_{0}^{\\infty} e^{-st} t^n\\,dt\\;(s>0)', notifText: '∫₀^∞ e^(-st) tⁿ dt', difficulty: 'Classic', topic: 'Laplace & Bromwich' },
  { id: 'int-303', latex: '\\int_{0}^{\\infty} e^{-st} \\sin(\\omega t)\\,dt\\;(s>0)', notifText: '∫₀^∞ e^(-st) sin(ωt) dt', difficulty: 'Classic', topic: 'Laplace & Bromwich' },
  { id: 'int-304', latex: '\\frac{1}{2\\pi i}\\int_{c-i\\infty}^{c+i\\infty} \\frac{e^{st}}{s - a}\\,ds\\;(c>a)', notifText: '(1/2πi) ∫_(c-i∞)^(c+i∞) e^(st) / (s - a) ds', difficulty: 'Classic', topic: 'Laplace & Bromwich' },
  { id: 'int-305', latex: '\\frac{1}{2\\pi i}\\int_{c-i\\infty}^{c+i\\infty} \\frac{e^{st}}{s^2 + \\omega^2}\\,ds\\;(c>0)', notifText: '(1/2πi) ∫ e^(st) / (s² + ω²) ds', difficulty: 'Hard', topic: 'Laplace & Bromwich' },
  { id: 'int-306', latex: '\\frac{1}{2\\pi i}\\int_{c-i\\infty}^{c+i\\infty} \\frac{e^{st}}{\\sqrt{s}}\\,ds\\;(c>0)', notifText: '(1/2πi) ∫ e^(st) / √s ds (Branch Cut)', difficulty: 'Hard', topic: 'Laplace & Bromwich' },
  { id: 'int-307', latex: '\\frac{1}{2\\pi i}\\int_{c-i\\infty}^{c+i\\infty} \\frac{e^{st}}{s(s+a)^2}\\,ds\\;(c>0)', notifText: '(1/2πi) ∫ e^(st) / (s(s+a)²) ds', difficulty: 'Hard', topic: 'Laplace & Bromwich' },
  { id: 'int-308', latex: '\\frac{1}{2\\pi i}\\int_{c-i\\infty}^{c+i\\infty} e^{st}\\frac{e^{-a\\sqrt{s}}}{s}\\,ds\\;(a,c>0)', notifText: '(1/2πi) ∫ e^(st - a√s) / s ds (Heat Diffusion)', difficulty: 'Hard', topic: 'Laplace & Bromwich' },

  // 22. Mellin Transform Integrals
  { id: 'int-309', latex: '\\int_{0}^{\\infty} x^{s-1} e^{-ax}\\,dx\\;(a,s>0)', notifText: '∫₀^∞ x^(s-1) e^(-ax) dx', difficulty: 'Classic', topic: 'Mellin Transform' },
  { id: 'int-310', latex: '\\int_{0}^{\\infty} x^{s-1} e^{-x^2}\\,dx\\;(s>0)', notifText: '∫₀^∞ x^(s-1) e^(-x²) dx', difficulty: 'Classic', topic: 'Mellin Transform' },
  { id: 'int-311', latex: '\\int_{0}^{\\infty} \\frac{x^{s-1}}{1 + x}\\,dx\\;(0<\\text{Re}(s)<1)', notifText: '∫₀^∞ x^(s-1) / (1 + x) dx', difficulty: 'Classic', topic: 'Mellin Transform' },
  { id: 'int-312', latex: '\\int_{0}^{\\infty} \\frac{x^{s-1}}{1 + x^2}\\,dx\\;(0<\\text{Re}(s)<2)', notifText: '∫₀^∞ x^(s-1) / (1 + x²) dx', difficulty: 'Hard', topic: 'Mellin Transform' },
  { id: 'int-313', latex: '\\int_{0}^{\\infty} x^{s-1} \\cos(x)\\,dx\\;(0<\\text{Re}(s)<1)', notifText: '∫₀^∞ x^(s-1) cos(x) dx', difficulty: 'Hard', topic: 'Mellin Transform' },
  { id: 'int-314', latex: '\\int_{0}^{\\infty} \\frac{x^{s-1}}{e^x - 1}\\,dx\\;(\\text{Re}(s)>1)', notifText: '∫₀^∞ x^(s-1) / (eˣ - 1) dx (= Γ(s)ζ(s))', difficulty: 'Hard', topic: 'Mellin Transform' },
  { id: 'int-315', latex: '\\int_{0}^{\\infty} x^{s-1} \\ln(1 + x)\\,dx\\;(-1<\\text{Re}(s)<0)', notifText: '∫₀^∞ x^(s-1) ln(1 + x) dx', difficulty: 'Hard', topic: 'Mellin Transform' }, 

  // 1. Feynman Parameterization Integrals
  { id: 'int-316', latex: '\\int_{0}^{1} \\frac{dx}{[x A + (1-x) B]^2}', notifText: '∫₀¹ dx / [xA + (1-x)B]²', difficulty: 'Classic', topic: 'Feynman Parameters' },
  { id: 'int-317', latex: '\\int_{0}^{1} \\frac{x\\,dx}{[x A + (1-x) B]^2}', notifText: '∫₀¹ x dx / [xA + (1-x)B]²', difficulty: 'Classic', topic: 'Feynman Parameters' },
  { id: 'int-318', latex: '\\int_{0}^{1} \\frac{2(1-x)\\,dx}{[x A + (1-x) B]^3}', notifText: '∫₀¹ 2(1-x) dx / [xA + (1-x)B]³', difficulty: 'Classic', topic: 'Feynman Parameters' },
  { id: 'int-319', latex: '\\int_{0}^{1}dx\\int_{0}^{1-x}dy\\,\\frac{2}{[xA + yB + (1-x-y)C]^3}', notifText: '∬_(x+y≤1) 2 dx dy / [xA + yB + (1-x-y)C]³', difficulty: 'Hard', topic: 'Feynman Parameters' },
  { id: 'int-320', latex: '\\int_{0}^{1} \\frac{dx}{m^2 - x(1-x)q^2}\\;(0 < q^2 < 4m^2)', notifText: '∫₀¹ dx / (m² - x(1-x)q²)', difficulty: 'Hard', topic: 'Feynman Parameters' },
  { id: 'int-321', latex: '\\int_{0}^{1} \\ln\\!\\left(1 - x(1-x)\\frac{q^2}{m^2}\\right) dx\\;(q^2 < 0)', notifText: '∫₀¹ ln(1 - x(1-x)q²/m²) dx (Vacuum Pol.)', difficulty: 'Hard', topic: 'Feynman Parameters' },
  { id: 'int-322', latex: '\\int_{0}^{1}dx\\int_{0}^{1-x}dy\\,\\frac{1-x-y}{m^2(1-x-y)^2 - xy q^2}', notifText: '∬_(simplex) (1-x-y) / (m²(1-x-y)² - xy q²) dx dy', difficulty: 'Hard', topic: 'Feynman Parameters' },

  // 2. Schwinger Proper-Time Parameterization
  { id: 'int-323', latex: '\\int_{0}^{\\infty} ds\\, e^{-s A}\\;(A>0)', notifText: '∫₀^∞ e^(-sA) ds (= 1/A)', difficulty: 'Classic', topic: 'Schwinger Proper-Time' },
  { id: 'int-324', latex: '\\int_{0}^{\\infty} ds\\, s^{n-1} e^{-s A}\\;(A,n>0)', notifText: '∫₀^∞ s^(n-1) e^(-sA) ds', difficulty: 'Classic', topic: 'Schwinger Proper-Time' },
  { id: 'int-325', latex: '\\int_{0}^{\\infty} \\frac{ds}{s}\\,(e^{-s A} - e^{-s B})\\;(A,B>0)', notifText: '∫₀^∞ (e^(-sA) - e^(-sB)) / s ds', difficulty: 'Classic', topic: 'Schwinger Proper-Time' },
  { id: 'int-326', latex: '\\int_{0}^{\\infty} \\frac{ds}{s^2}\\,e^{-s m^2}\\!\\left(s e B\\coth(s e B) - 1\\right)\\;(B\\ll m^2/e)', notifText: '∫₀^∞ e^(-sm²) (seB coth(seB) - 1) / s² ds (Euler-Heisenberg)', difficulty: 'Hard', topic: 'Schwinger Proper-Time' },
  { id: 'int-327', latex: '\\int_{0}^{\\infty} \\frac{ds}{s^{d/2}}\\,e^{-s m^2 - x^2/(4s)}', notifText: '∫₀^∞ s^(-d/2) e^(-sm² - x²/4s) ds (Heat Kernel)', difficulty: 'Hard', topic: 'Schwinger Proper-Time' },
  { id: 'int-328', latex: '\\int_{0}^{\\infty} ds_1\\int_{0}^{\\infty} ds_2\\,\\frac{e^{-(s_1+s_2)m^2}}{(s_1+s_2)^2}\\,e^{-\\frac{s_1 s_2}{s_1+s_2}p^2}', notifText: '∬₀^∞ e^(-(s₁+s₂)m² - s₁s₂p²/(s₁+s₂)) / (s₁+s₂)² ds₁ ds₂', difficulty: 'Hard', topic: 'Schwinger Proper-Time' },
  { id: 'int-329', latex: '\\text{Im}\\int_{0}^{\\infty} \\frac{ds}{s^3}\\,e^{-s m^2}\\!\\left(s e E\\cot(s e E) - 1\\right)', notifText: 'Im ∫₀^∞ e^(-sm²) (seE cot(seE) - 1) / s³ ds (Schwinger Pair)', difficulty: 'Hard', topic: 'Schwinger Proper-Time' },

  // 3. Wick Rotation & d-Dimensional Euclidean Integrals
  { id: 'int-330', latex: '\\int \\frac{d^4 k_E}{(2\\pi)^4}\\,\\frac{1}{(k_E^2 + \\Delta)^3}', notifText: '∫ d⁴k_E/(2π)⁴ 1 / (k_E² + Δ)³', difficulty: 'Classic', topic: 'Wick Rotation' },
  { id: 'int-331', latex: '\\int \\frac{d^d k_E}{(2\\pi)^d}\\,e^{-a k_E^2}\\;(a>0)', notifText: '∫ dᵈk_E/(2π)ᵈ e^(-a k_E²)', difficulty: 'Classic', topic: 'Wick Rotation' },
  { id: 'int-332', latex: '\\oint d\\Omega_d\\;(\\text{Area of unit }S^{d-1})', notifText: '∮ dΩ_d (Surface area of unit (d-1)-sphere)', difficulty: 'Classic', topic: 'Wick Rotation' },
  { id: 'int-333', latex: '\\int \\frac{d^d k_E}{(2\\pi)^d}\\,\\frac{1}{(k_E^2 + \\Delta)^n}', notifText: '∫ dᵈk_E/(2π)ᵈ 1 / (k_E² + Δ)ⁿ', difficulty: 'Hard', topic: 'Wick Rotation' },
  { id: 'int-334', latex: '\\int \\frac{d^d k_E}{(2\\pi)^d}\\,\\frac{k_E^2}{(k_E^2 + \\Delta)^n}', notifText: '∫ dᵈk_E/(2π)ᵈ k_E² / (k_E² + Δ)ⁿ', difficulty: 'Hard', topic: 'Wick Rotation' },
  { id: 'int-335', latex: '\\int \\frac{d^d k}{(2\\pi)^d}\\,\\frac{i}{(k^2 - \\Delta + i\\epsilon)^3}\\;(\\text{Minkowski})', notifText: '∫ dᵈk/(2π)ᵈ i / (k² - Δ + iε)³', difficulty: 'Hard', topic: 'Wick Rotation' },
  { id: 'int-336', latex: '\\int \\frac{d^d k_E}{(2\\pi)^d}\\,\\frac{(k_E^2)^2}{(k_E^2 + \\Delta)^n}', notifText: '∫ dᵈk_E/(2π)ᵈ (k_E²)² / (k_E² + Δ)ⁿ', difficulty: 'Hard', topic: 'Wick Rotation' },

  // 4. Dimensional Regularization (d = 4 - ε)
  { id: 'int-337', latex: '\\mu^{\\epsilon}\\int \\frac{d^{4-\\epsilon}k_E}{(2\\pi)^{4-\\epsilon}}\\,\\frac{1}{(k_E^2 + \\Delta)^2}\\;\\text{ expand in }\\epsilon', notifText: 'μ^ε ∫ d^(4-ε)k_E/(2π)^(4-ε) 1/(k_E² + Δ)² (expand in ε)', difficulty: 'Classic', topic: 'Dim Reg (d = 4 - ε)' },
  { id: 'int-338', latex: '\\mu^{\\epsilon}\\int \\frac{d^{4-\\epsilon}k_E}{(2\\pi)^{4-\\epsilon}}\\,\\frac{1}{k_E^2 + m^2}\\;\\text{ expand in }\\epsilon', notifText: 'μ^ε ∫ d^(4-ε)k_E/(2π)^(4-ε) 1/(k_E² + m²) (Tadpole)', difficulty: 'Classic', topic: 'Dim Reg (d = 4 - ε)' },
  { id: 'int-339', latex: '\\int \\frac{d^d k_E}{(2\\pi)^d}\\,\\frac{1}{(k_E^2)^\\alpha}\\;(\\text{Scaleless Integral})', notifText: '∫ dᵈk_E/(2π)ᵈ 1 / (k_E²)^α (= 0 in Dim Reg)', difficulty: 'Classic', topic: 'Dim Reg (d = 4 - ε)' },
  { id: 'int-340', latex: '\\mu^{\\epsilon}\\int \\frac{d^{4-\\epsilon}k_E}{(2\\pi)^{4-\\epsilon}}\\,\\frac{1}{(k_E^2 + m^2)((k_E+p)^2 + m^2)}', notifText: '1-loop scalar bubble integral in d = 4 - ε', difficulty: 'Hard', topic: 'Dim Reg (d = 4 - ε)' },
  { id: 'int-341', latex: '\\mu^{\\epsilon}\\int \\frac{d^{4-\\epsilon}k_E}{(2\\pi)^{4-\\epsilon}}\\,\\frac{k_E^2}{(k_E^2 + \\Delta)^3}\\;\\text{ to }O(\\epsilon^0)', notifText: 'μ^ε ∫ d^(4-ε)k_E k_E² / (k_E² + Δ)³ to O(ε⁰)', difficulty: 'Hard', topic: 'Dim Reg (d = 4 - ε)' },
  { id: 'int-342', latex: '\\int \\frac{d^{4-\\epsilon}k_E}{(2\\pi)^{4-\\epsilon}}\\,\\frac{1}{k_E^2 (k_E + p)^2}\\;(\\text{Massless Bubble})', notifText: '∫ d^(4-ε)k_E / (k_E² (k_E + p)²) (Massless Bubble)', difficulty: 'Hard', topic: 'Dim Reg (d = 4 - ε)' },
  { id: 'int-343', latex: '\\int \\frac{d^{d}k_E}{(2\\pi)^{d}}\\,\\frac{k_\\mu k_\\nu}{(k_E^2 + \\Delta)^3}\\;\\text{ at }d=4-\\epsilon', notifText: '∫ d^(4-ε)k_E k_μ k_ν / (k_E² + Δ)³', difficulty: 'Hard', topic: 'Dim Reg (d = 4 - ε)' },

  // 5. Passarino-Veltman Tensor Reduction
  { id: 'int-344', latex: '\\int \\frac{d^d k}{(2\\pi)^d}\\,\\frac{k^\\mu}{(k^2 - m^2)((k+p)^2 - m^2)}', notifText: 'B^μ(p; m, m) = ∫ dᵈk k^μ / ((k²-m²)((k+p)²-m²))', difficulty: 'Classic', topic: 'Passarino-Veltman' },
  { id: 'int-345', latex: '\\int \\frac{d^d k}{(2\\pi)^d}\\,\\frac{k^\\mu k^\\nu}{(k^2 - \\Delta)^3}', notifText: '∫ dᵈk k^μ k^ν / (k² - Δ)³', difficulty: 'Classic', topic: 'Passarino-Veltman' },
  { id: 'int-346', latex: '\\int \\frac{d^d k}{(2\\pi)^d}\\,\\frac{k\\cdot p}{(k^2 - m_1^2)((k+p)^2 - m_2^2)}', notifText: '∫ dᵈk (k·p) / ((k²-m₁²)((k+p)²-m₂²))', difficulty: 'Classic', topic: 'Passarino-Veltman' },
  { id: 'int-347', latex: '\\int \\frac{d^d k}{(2\\pi)^d}\\,\\frac{k^\\mu k^\\nu}{(k^2 - m^2)((k+p)^2 - m^2)}\\;(\\text{Reduce to }A_0,B_0)', notifText: 'B^(μν)(p; m, m) reduction to scalar A₀, B₀', difficulty: 'Hard', topic: 'Passarino-Veltman' },
  { id: 'int-348', latex: '\\int \\frac{d^d k}{(2\\pi)^d}\\,\\frac{k^\\mu k^\\nu k^\\rho k^\\sigma}{(k^2 - \\Delta)^4}', notifText: '∫ dᵈk k^μ k^ν k^ρ k^σ / (k² - Δ)⁴', difficulty: 'Hard', topic: 'Passarino-Veltman' },
  { id: 'int-349', latex: '\\int \\frac{d^d k}{(2\\pi)^d}\\,\\frac{k^\\mu}{k^2 (k+p_1)^2 (k+p_2)^2}\\;(\\text{Reduce }C^\\mu)', notifText: 'Triangle vector reduction C^μ in terms of B₀, C₀', difficulty: 'Hard', topic: 'Passarino-Veltman' },
  { id: 'int-350', latex: '\\int \\frac{d^d k}{(2\\pi)^d}\\,\\frac{(k\\cdot p)^2}{(k^2 - m^2)((k+p)^2 - m^2)}', notifText: '∫ dᵈk (k·p)² / ((k²-m²)((k+p)²-m²))', difficulty: 'Hard', topic: 'Passarino-Veltman' },

  // 6. Mellin-Barnes Contour Representations
  { id: 'int-351', latex: '\\frac{1}{2\\pi i}\\int_{-i\\infty}^{i\\infty} \\Gamma(-z)\\Gamma(z+1)\\,x^z\\,dz\\;(|x|<1)', notifText: '(1/2πi) ∫ Γ(-z)Γ(z+1) x^z dz (= 1/(1+x))', difficulty: 'Classic', topic: 'Mellin-Barnes' },
  { id: 'int-352', latex: '\\frac{1}{2\\pi i}\\int_{c-i\\infty}^{c+i\\infty} \\Gamma(z)\\,x^{-z}\\,dz\\;(c>0)', notifText: '(1/2πi) ∫ Γ(z) x^(-z) dz (= e^(-x), Cahen-Mellin)', difficulty: 'Classic', topic: 'Mellin-Barnes' },
  { id: 'int-353', latex: '\\frac{1}{2\\pi i}\\int_{-i\\infty}^{i\\infty} \\frac{\\Gamma(-z)\\Gamma(\\lambda + z)}{\\Gamma(\\lambda)}\\,x^z\\,dz', notifText: '(1/2πi) ∫ Γ(-z)Γ(λ+z)/Γ(λ) x^z dz (= (1+x)^(-λ))', difficulty: 'Classic', topic: 'Mellin-Barnes' },
  { id: 'int-354', latex: '\\frac{1}{2\\pi i}\\int_{-i\\infty}^{i\\infty} \\Gamma(a+z)\\Gamma(b+z)\\Gamma(c-z)\\Gamma(d-z)\\,dz', notifText: "Barnes' First Lemma: (1/2πi) ∫ Γ(a+z)Γ(b+z)Γ(c-z)Γ(d-z) dz", difficulty: 'Hard', topic: 'Mellin-Barnes' },
  { id: 'int-355', latex: '\\frac{1}{2\\pi i}\\int_{c-i\\infty}^{c+i\\infty} \\frac{\\Gamma(z)^2}{\\Gamma(z+1)}\\,x^{-z}\\,dz\\;(0<c<1)', notifText: '(1/2πi) ∫ Γ(z)² / Γ(z+1) x^(-z) dz', difficulty: 'Hard', topic: 'Mellin-Barnes' },
  { id: 'int-356', latex: '\\frac{1}{2\\pi i}\\int_{-i\\infty}^{i\\infty} \\Gamma(-z)\\Gamma(a+z)\\Gamma(b+z)\\Gamma(c-z)\\,x^z\\,dz', notifText: 'Mellin-Barnes representation of ₂F₁(a,b;c;-x)', difficulty: 'Hard', topic: 'Mellin-Barnes' },
  { id: 'int-357', latex: '\\frac{1}{2\\pi i}\\int_{c-i\\infty}^{c+i\\infty} \\Gamma(s)\\zeta(s)\\,x^{-s}\\,ds\\;(c>1)', notifText: '(1/2πi) ∫ Γ(s)ζ(s) x^(-s) ds (= 1/(eˣ - 1))', difficulty: 'Hard', topic: 'Mellin-Barnes' },

  // 7. Laplace's Method (Real Asymptotic Integrals)
  { id: 'int-358', latex: '\\int_{0}^{\\infty} e^{-\\lambda x}\\,x^\\lambda\\,dx\\;(\\lambda\\to\\infty,\\text{ Stirling})', notifText: '∫₀^∞ e^(-λx) x^λ dx as λ → ∞ (Stirling)', difficulty: 'Classic', topic: "Laplace's Method" },
  { id: 'int-359', latex: '\\int_{-1}^{1} e^{-\\lambda x^2}\\cos(x)\\,dx\\;(\\lambda\\to\\infty)', notifText: '∫₋₁¹ e^(-λx²) cos(x) dx as λ → ∞', difficulty: 'Classic', topic: "Laplace's Method" },
  { id: 'int-360', latex: '\\int_{0}^{\\pi} e^{\\lambda\\sin x}\\,dx\\;(\\lambda\\to\\infty)', notifText: '∫₀^π e^(λ sin x) dx as λ → ∞', difficulty: 'Classic', topic: "Laplace's Method" },
  { id: 'int-361', latex: '\\int_{0}^{\\infty} e^{-\\lambda(x + 1/x)}\\,dx\\;(\\lambda\\to\\infty)', notifText: '∫₀^∞ e^(-λ(x + 1/x)) dx as λ → ∞', difficulty: 'Hard', topic: "Laplace's Method" },
  { id: 'int-362', latex: '\\int_{0}^{1} e^{-\\lambda x^4}\\,dx\\;(\\lambda\\to\\infty)', notifText: '∫₀¹ e^(-λx⁴) dx as λ → ∞', difficulty: 'Hard', topic: "Laplace's Method" },
  { id: 'int-363', latex: '\\int_{0}^{\\infty} e^{-\\lambda(\\cosh x - 1)}\\,dx\\;(\\text{to }O(\\lambda^{-3/2}))', notifText: '∫₀^∞ e^(-λ(cosh x - 1)) dx to O(λ^(-3/2))', difficulty: 'Hard', topic: "Laplace's Method" },
  { id: 'int-364', latex: '\\int_{0}^{\\infty} \\frac{e^{-\\lambda x}}{1 + x^2}\\,dx\\;(\\text{Watson\'s Lemma as }\\lambda\\to\\infty)', notifText: '∫₀^∞ e^(-λx) / (1 + x²) dx (Watson Lemma)', difficulty: 'Hard', topic: "Laplace's Method" },

  // 8. Method of Steepest Descent (Saddle-Point Approximation)
  { id: 'int-365', latex: '\\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} e^{i(t^3/3 + x t)}\\,dt\\;(x\\to +\\infty,\\text{ Airy})', notifText: 'Ai(x) = (1/2π) ∫ e^(i(t³/3 + xt)) dt as x → +∞', difficulty: 'Classic', topic: 'Steepest Descent' },
  { id: 'int-366', latex: '\\frac{1}{2\\pi i}\\oint \\frac{e^{z}}{z^{n+1}}\\,dz\\;(n\\to\\infty)', notifText: '(1/2πi) ∮ e^z / z^(n+1) dz as n → ∞', difficulty: 'Classic', topic: 'Steepest Descent' },
  { id: 'int-367', latex: '\\int_{-\\infty}^{\\infty} e^{-\\lambda(z^2 - 2iz)}\\,dz\\;(\\lambda\\to\\infty)', notifText: '∫₋∞^∞ e^(-λ(z² - 2iz)) dz as λ → ∞', difficulty: 'Classic', topic: 'Steepest Descent' },
  { id: 'int-368', latex: '\\frac{1}{\\pi}\\int_{0}^{\\pi} e^{ix\\cos\\theta}\\,d\\theta\\;(x\\to\\infty,\\,J_0(x))', notifText: 'J₀(x) = (1/π) ∫₀^π e^(ix cosθ) dθ as x → ∞', difficulty: 'Hard', topic: 'Steepest Descent' },
  { id: 'int-369', latex: '\\int_{0}^{\\infty} e^{-x^2 - i\\lambda x}\\,dx\\;(\\lambda\\to\\infty)', notifText: '∫₀^∞ e^(-x² - iλx) dx as λ → ∞', difficulty: 'Hard', topic: 'Steepest Descent' },
  { id: 'int-370', latex: '\\int_{0}^{\\infty} e^{i\\lambda(t^3/3 - t)}\\,dt\\;(\\lambda\\to\\infty)', notifText: '∫₀^∞ e^(iλ(t³/3 - t)) dt as λ → ∞', difficulty: 'Hard', topic: 'Steepest Descent' },
  { id: 'int-371', latex: '\\int_{C} e^{\\lambda(\\sinh z - z)}\\,dz\\;(\\text{Debye }H_\\nu^{(1)})', notifText: '∫_C e^(λ(sinh z - z)) dz (Coalescing Saddle)', difficulty: 'Hard', topic: 'Steepest Descent' },

  // 9. Method of Stationary Phase
  { id: 'int-372', latex: '\\int_{-1}^{1} e^{i\\lambda x^2}\\,dx\\;(\\lambda\\to\\infty)', notifText: '∫₋₁¹ e^(iλx²) dx as λ → ∞', difficulty: 'Classic', topic: 'Stationary Phase' },
  { id: 'int-373', latex: '\\int_{0}^{\\pi} e^{i\\lambda\\cos x}\\,dx\\;(\\lambda\\to\\infty)', notifText: '∫₀^π e^(iλ cos x) dx as λ → ∞', difficulty: 'Classic', topic: 'Stationary Phase' },
  { id: 'int-374', latex: '\\int_{0}^{2} x\\,e^{i\\lambda(x - 1)^2}\\,dx\\;(\\lambda\\to\\infty)', notifText: '∫₀² x e^(iλ(x - 1)²) dx as λ → ∞', difficulty: 'Classic', topic: 'Stationary Phase' },
  { id: 'int-375', latex: '\\int_{0}^{\\infty} \\cos\\!\\left(\\lambda(x^3 - 3x)\\right) dx\\;(\\lambda\\to\\infty)', notifText: '∫₀^∞ cos(λ(x³ - 3x)) dx as λ → ∞', difficulty: 'Hard', topic: 'Stationary Phase' },
  { id: 'int-376', latex: '\\int_{0}^{1} e^{i\\lambda x^3}\\,dx\\;(\\lambda\\to\\infty)', notifText: '∫₀¹ e^(iλx³) dx as λ → ∞', difficulty: 'Hard', topic: 'Stationary Phase' },
  { id: 'int-377', latex: '\\int_{-\\infty}^{\\infty} \\frac{e^{i\\lambda(x^2/2 - \\sin x)}}{1 + x^2}\\,dx\\;(\\lambda\\to\\infty)', notifText: '∫₋∞^∞ e^(iλ(x²/2 - sin x)) / (1 + x²) dx', difficulty: 'Hard', topic: 'Stationary Phase' },
  { id: 'int-378', latex: '\\iint_{\\mathbb{R}^2} e^{i\\lambda(x^2 - y^2)} e^{-(x^2+y^2)}\\,dx\\,dy\\;(\\lambda\\to\\infty)', notifText: '2D Stationary Phase (Hyperbolic Saddle) as λ → ∞', difficulty: 'Hard', topic: 'Stationary Phase' },

  // 10. Gaussian Functional (Path) Integrals
  { id: 'int-379', latex: '\\int \\prod_{i=1}^{N} dx_i\\, e^{-\\frac{1}{2}\\mathbf{x}^T A \\mathbf{x}}', notifText: '∫ dᴺx exp(-½ xᵀAx) (Finite-D Gaussian)', difficulty: 'Classic', topic: 'Path Integrals' },
  { id: 'int-380', latex: '\\int \\prod_{i=1}^{N} dx_i\\, e^{-\\frac{1}{2}\\mathbf{x}^T A \\mathbf{x} + \\mathbf{J}^T\\mathbf{x}}', notifText: '∫ dᴺx exp(-½ xᵀAx + Jᵀx) (Generating Func.)', difficulty: 'Classic', topic: 'Path Integrals' },
  { id: 'int-381', latex: '\\int \\mathcal{D}x(t)\\, e^{\\frac{i}{\\hbar}\\int_{0}^{T} \\frac{1}{2}m\\dot{x}^2\\,dt}\\;(\\text{Free Particle})', notifText: '∫ Dx(t) exp((i/ħ) ∫₀ᵀ ½ m ẋ² dt)', difficulty: 'Classic', topic: 'Path Integrals' },
  { id: 'int-382', latex: '\\int \\mathcal{D}x(t)\\, e^{-\\frac{1}{\\hbar}\\int_{0}^{\\beta\\hbar} (\\frac{1}{2}m\\dot{x}^2 + \\frac{1}{2}m\\omega^2 x^2)\\,d\\tau}', notifText: 'Euclidean QHO Partition Function Z(β)', difficulty: 'Hard', topic: 'Path Integrals' },
  { id: 'int-383', latex: '\\int \\mathcal{D}\\phi\\, e^{-\\int d^4x\\,\\left[\\frac{1}{2}(\\partial\\phi)^2 + \\frac{1}{2}m^2\\phi^2 - J\\phi\\right]}', notifText: 'Free Scalar Field Generating Functional Z[J]', difficulty: 'Hard', topic: 'Path Integrals' },
  { id: 'int-384', latex: '\\frac{\\int d^N x\\, x_a x_b x_c x_d\\, e^{-\\frac{1}{2}x^T A x}}{\\int d^N x\\, e^{-\\frac{1}{2}x^T A x}}\\;(Wick\'s\\text{ Thm})', notifText: '4-point Gaussian correlator ⟨x_a x_b x_c x_d⟩', difficulty: 'Hard', topic: 'Path Integrals' },
  { id: 'int-385', latex: '\\int \\mathcal{D}x(t)\\, e^{\\frac{i}{\\hbar}\\int_{0}^{T} (\\frac{1}{2}m\\dot{x}^2 - \\frac{1}{2}m\\omega^2 x^2)\\,dt}\\;(\\text{Mehler Kernel})', notifText: 'QHO Propagator K(x_b, T; x_a, 0)', difficulty: 'Hard', topic: 'Path Integrals' },

  // 11. Grassmann (Berezin) Fermionic Integrals
  { id: 'int-386', latex: '\\int d\\theta\\,(a + b\\theta)', notifText: '∫ dθ (a + bθ)', difficulty: 'Classic', topic: 'Grassmann Integrals' },
  { id: 'int-387', latex: '\\int d\\bar{\\theta}\\,d\\theta\\, e^{-\\lambda\\bar{\\theta}\\theta}', notifText: '∫ dθ̄ dθ exp(-λ θ̄θ)', difficulty: 'Classic', topic: 'Grassmann Integrals' },
  { id: 'int-388', latex: '\\int d\\theta_1\\,d\\theta_2\\,(\\theta_2\\theta_1)', notifText: '∫ dθ₁ dθ₂ (θ₂ θ₁)', difficulty: 'Classic', topic: 'Grassmann Integrals' },
  { id: 'int-389', latex: '\\int \\prod_{i=1}^{N} d\\bar{\\theta}_i\\,d\\theta_i\\, e^{-\\bar{\\theta}^T M \\theta}', notifText: '∫ Π dθ̄ᵢ dθᵢ exp(-θ̄ᵀ M θ) (= det M)', difficulty: 'Hard', topic: 'Grassmann Integrals' },
  { id: 'int-390', latex: '\\int d\\bar{\\theta}\\,d\\theta\\, e^{-\\bar{\\theta} M \\theta + \\bar{\\eta}\\theta + \\bar{\\theta}\\eta}', notifText: 'Fermionic Gaussian integral with sources η̄, η', difficulty: 'Hard', topic: 'Grassmann Integrals' },
  { id: 'int-391', latex: '\\int \\prod_{i=1}^{2n} d\\theta_i\\, e^{\\frac{1}{2}\\theta^T A \\theta}\\;(A^T = -A)', notifText: 'Real Grassmann integral (= Pfaffian Pf(A))', difficulty: 'Hard', topic: 'Grassmann Integrals' },
  { id: 'int-392', latex: '\\frac{\\int d\\bar{\\theta}\\,d\\theta\\,\\theta_a\\bar{\\theta}_b\\,e^{-\\bar{\\theta}M\\theta}}{\\int d\\bar{\\theta}\\,d\\theta\\,e^{-\\bar{\\theta}M\\theta}}', notifText: 'Fermionic 2-point function ⟨θ_a θ̄_b⟩', difficulty: 'Hard', topic: 'Grassmann Integrals' },

  // 12. Matsubara Frequency Summation Contour Integrals
  { id: 'int-393', latex: '\\frac{1}{\\beta}\\sum_{n=-\\infty}^{\\infty} \\frac{e^{i\\omega_n 0^+}}{i\\omega_n - \\xi}\\;(\\text{Fermionic }\\omega_n)', notifText: '(1/β) Σ e^(iω_n 0⁺) / (iω_n - ξ) (Fermion)', difficulty: 'Classic', topic: 'Matsubara Sums' },
  { id: 'int-394', latex: '\\frac{1}{\\beta}\\sum_{n=-\\infty}^{\\infty} \\frac{e^{i\\Omega_n 0^+}}{i\\Omega_n - \\omega}\\;(\\text{Bosonic }\\Omega_n)', notifText: '(1/β) Σ e^(iΩ_n 0⁺) / (iΩ_n - ω) (Boson)', difficulty: 'Classic', topic: 'Matsubara Sums' },
  { id: 'int-395', latex: '\\frac{1}{\\beta}\\sum_{n=-\\infty}^{\\infty} \\frac{1}{\\omega_n^2 + \\omega^2}\\;(\\text{Bosonic})', notifText: '(1/β) Σ 1 / (ω_n² + ω²) (Bosonic)', difficulty: 'Classic', topic: 'Matsubara Sums' },
  { id: 'int-396', latex: '\\frac{1}{\\beta}\\sum_{n=-\\infty}^{\\infty} \\frac{1}{(i\\omega_n - \\xi_1)(i\\omega_n - \\xi_2)}\\;(\\text{Fermionic})', notifText: '(1/β) Σ 1 / ((iω_n - ξ₁)(iω_n - ξ₂))', difficulty: 'Hard', topic: 'Matsubara Sums' },
  { id: 'int-397', latex: '\\frac{1}{\\beta}\\sum_{n=-\\infty}^{\\infty} \\frac{1}{(i\\omega_n - \\xi_k)(i\\omega_n + i\\Omega_m - \\xi_{k+q})}', notifText: 'Lindhard Polarizability Matsubara Sum', difficulty: 'Hard', topic: 'Matsubara Sums' },
  { id: 'int-398', latex: '\\frac{1}{\\beta}\\sum_{n=-\\infty}^{\\infty} \\frac{1}{\\omega_n^2 + E_k^2}\\;(\\text{Fermionic BCS Gap})', notifText: '(1/β) Σ 1 / (ω_n² + E_k²) (Fermionic)', difficulty: 'Hard', topic: 'Matsubara Sums' },
  { id: 'int-399', latex: '\\frac{1}{\\beta}\\sum_{n=-\\infty}^{\\infty} \\frac{1}{(i\\omega_n - \\xi)^2}\\;(\\text{Fermionic})', notifText: '(1/β) Σ 1 / (iω_n - ξ)² (Double Pole)', difficulty: 'Hard', topic: 'Matsubara Sums' },

  // 13. Brillouin Zone Lattice Integrals
  { id: 'int-400', latex: '\\int_{-\\pi/a}^{\\pi/a} \\frac{dk}{2\\pi/a}\\,\\cos(ka)', notifText: '1D Brillouin Zone average of cos(ka)', difficulty: 'Classic', topic: 'Brillouin Zone' },
  { id: 'int-401', latex: '\\int_{-\\pi}^{\\pi} \\frac{dk}{2\\pi}\\,\\frac{1}{z - 2t\\cos k}\\;(|z|>2|t|)', notifText: '1D Tight-Binding Green Function G₀(z)', difficulty: 'Classic', topic: 'Brillouin Zone' },
  { id: 'int-402', latex: '\\int_{-\\pi}^{\\pi} \\frac{dk}{2\\pi}\\,\\delta(E + 2t\\cos k)', notifText: '1D Tight-Binding Density of States ρ(E)', difficulty: 'Classic', topic: 'Brillouin Zone' },
  { id: 'int-403', latex: '\\iint_{[-\\pi,\\pi]^2} \\frac{dk_x\\,dk_y}{(2\\pi)^2}\\,\\frac{1}{z - 2t(\\cos k_x + \\cos k_y)}', notifText: '2D Square Lattice Green Function (Elliptic K)', difficulty: 'Hard', topic: 'Brillouin Zone' },
  { id: 'int-404', latex: '\\iint_{[-\\pi,\\pi]^2} \\frac{dk_x\\,dk_y}{(2\\pi)^2}\\,\\ln(4 - 2\\cos k_x - 2\\cos k_y)', notifText: '2D Spanning Tree / Lattice Free Energy Integral', difficulty: 'Hard', topic: 'Brillouin Zone' },
  { id: 'int-405', latex: '\\iiint_{[-\\pi,\\pi]^3} \\frac{d^3k}{(2\\pi)^3}\\,\\frac{1}{3 - \\cos k_x - \\cos k_y - \\cos k_z}', notifText: '3D Simple Cubic Watson Integral', difficulty: 'Hard', topic: 'Brillouin Zone' },
  { id: 'int-406', latex: '\\iint_{[-\\pi,\\pi]^2} \\frac{dk_x\\,dk_y}{(2\\pi)^2}\\,\\delta(E - 2t\\cos k_x - 2t\\cos k_y)', notifText: '2D Square Lattice DOS (Van Hove Singularity)', difficulty: 'Hard', topic: 'Brillouin Zone' },

  // 14. Complete & Incomplete Elliptic Integrals (K, E, Π)
  { id: 'int-407', latex: '\\int_{0}^{\\frac{\\pi}{2}} \\frac{d\\phi}{\\sqrt{1 - k^2\\sin^2\\phi}}\\;(k\\ll 1\\text{ to }O(k^4))', notifText: 'K(k) = ∫₀^(π/2) dφ / √(1 - k²sin²φ) (Series to k⁴)', difficulty: 'Classic', topic: 'Elliptic Integrals' },
  { id: 'int-408', latex: '\\int_{0}^{\\frac{\\pi}{2}} \\sqrt{1 - k^2\\sin^2\\phi}\\,d\\phi\\;(k\\ll 1\\text{ to }O(k^4))', notifText: 'E(k) = ∫₀^(π/2) √(1 - k²sin²φ) dφ (Ellipse Arc)', difficulty: 'Classic', topic: 'Elliptic Integrals' },
  { id: 'int-409', latex: '\\int_{0}^{1} \\frac{dt}{\\sqrt{(1 - t^2)(1 - k^2 t^2)}}', notifText: '∫₀¹ dt / √((1 - t²)(1 - k²t²)) (= K(k))', difficulty: 'Classic', topic: 'Elliptic Integrals' },
  { id: 'int-410', latex: '\\int_{0}^{\\theta_0} \\frac{d\\theta}{\\sqrt{\\cos\\theta - \\cos\\theta_0}}\\;(\\text{Exact Pendulum Period})', notifText: '∫₀^(θ₀) dθ / √(cosθ - cosθ₀) (Pendulum)', difficulty: 'Hard', topic: 'Elliptic Integrals' },
  { id: 'int-411', latex: '\\int_{0}^{\\frac{\\pi}{2}} \\frac{d\\phi}{(1 - n\\sin^2\\phi)\\sqrt{1 - k^2\\sin^2\\phi}}', notifText: 'Π(n, k) Complete Elliptic Integral of 3rd Kind', difficulty: 'Hard', topic: 'Elliptic Integrals' },
  { id: 'int-412', latex: '\\int_{0}^{\\pi} \\frac{\\cos\\phi\\,d\\phi}{\\sqrt{a^2 + r^2 - 2ar\\cos\\phi}}\\;(\\text{Current Loop }A_\\phi)', notifText: 'Vector potential A_φ of circular current loop', difficulty: 'Hard', topic: 'Elliptic Integrals' },
  { id: 'int-413', latex: '\\int_{0}^{\\frac{\\pi}{2}} \\frac{d\\phi}{\\sqrt{1 - \\frac{1}{2}\\sin^2\\phi}}\\;\\text{ in terms of }\\Gamma(1/4)', notifText: 'K(1/√2) in terms of Γ(1/4) (Lemniscate)', difficulty: 'Hard', topic: 'Elliptic Integrals' },

  // 15. Cosmological Redshift-Distance Integrals (ΛCDM)
  { id: 'int-414', latex: '\\int_{0}^{z} \\frac{dz\'}{(1 + z\')^{3/2}}\\;(\\text{Flat Matter-Dominated})', notifText: '∫₀^z dz\' / (1 + z\')^(3/2) (Einstein-de Sitter)', difficulty: 'Classic', topic: 'Cosmology (ΛCDM)' },
  { id: 'int-415', latex: '\\int_{0}^{z} \\frac{dz\'}{(1 + z\')^2}\\;(\\text{Flat Radiation-Dominated})', notifText: '∫₀^z dz\' / (1 + z\')² (Radiation Era)', difficulty: 'Classic', topic: 'Cosmology (ΛCDM)' },
  { id: 'int-416', latex: '\\int_{0}^{\\infty} \\frac{dz}{(1 + z)\\sqrt{\\Omega_m(1+z)^3 + \\Omega_\\Lambda}}\\;(\\text{Age of Universe})', notifText: 't₀H₀ = ∫₀^∞ dz / ((1+z)√(Ω_m(1+z)³ + Ω_Λ))', difficulty: 'Classic', topic: 'Cosmology (ΛCDM)' },
  { id: 'int-417', latex: '\\int_{0}^{z} \\frac{dz\'}{\\sqrt{\\Omega_m(1+z\')^3 + \\Omega_\\Lambda}}\\;(\\text{Low-}z\\text{ to }O(z^2))', notifText: 'Comoving distance χ(z) in flat ΛCDM to O(z²)', difficulty: 'Hard', topic: 'Cosmology (ΛCDM)' },
  { id: 'int-418', latex: '\\int_{0}^{a} \\frac{da\'}{a\'\\sqrt{\\Omega_r a\'^{-4} + \\Omega_m a\'^{-3}}}\\;(\\text{Rad+Matter Age})', notifText: 'Exact t(a) in flat Radiation + Matter universe', difficulty: 'Hard', topic: 'Cosmology (ΛCDM)' },
  { id: 'int-419', latex: '\\int_{0}^{1} \\frac{da}{\\sqrt{\\Omega_m a^{-1} + (1-\\Omega_m)a^2}}\\;(a\\text{-form of }\\chi)', notifText: 'Particle horizon integral in flat ΛCDM', difficulty: 'Hard', topic: 'Cosmology (ΛCDM)' },
  { id: 'int-420', latex: '\\int_{0}^{z} \\frac{dz\'}{\\sqrt{\\Omega_m(1+z\')^3 + \\Omega_k(1+z\')^2}}\\;(Open\\text{ Universe})', notifText: 'Comoving distance in open matter-only universe', difficulty: 'Hard', topic: 'Cosmology (ΛCDM)' },

  // 16. Geodesic Elliptic/Hyperelliptic Integrals (General Relativity)
  { id: 'int-421', latex: '\\int_{r_0}^{\\infty} \\frac{dr}{r^2\\sqrt{b^{-2} - r^{-2}}}\\;(\\text{Flat-Space Light Ray})', notifText: '∫_(r₀)^∞ dr / (r² √(b⁻² - r⁻²)) (Straight Line)', difficulty: 'Classic', topic: 'GR Geodesics' },
  { id: 'int-422', latex: '\\int_{r_s}^{R} \\frac{dr}{\\sqrt{1 - r_s/r}}\\;(\\text{Proper Radial Distance})', notifText: '∫_(r_s)^R dr / √(1 - r_s/r) (Schwarzschild)', difficulty: 'Classic', topic: 'GR Geodesics' },
  { id: 'int-423', latex: '\\int_{r_0}^{0} \\frac{-dr}{\\sqrt{r_s/r - r_s/r_0}}\\;(\\text{Radial Free-Fall Time})', notifText: 'Proper time to fall from rest r₀ → 0 in Schwarzschild', difficulty: 'Classic', topic: 'GR Geodesics' },
  { id: 'int-424', latex: '2\\int_{0}^{u_0} \\frac{du}{\\sqrt{b^{-2} - u^2(1 - r_s u)}} - \\pi\\;(\\text{Weak Deflection})', notifText: 'Schwarzschild light deflection Δφ ≈ 4GM/(c²b)', difficulty: 'Hard', topic: 'GR Geodesics' },
  { id: 'int-425', latex: '\\int_{u_-}^{u_+} \\frac{du}{\\sqrt{E^2 - (1 - r_s u)(1 + L^2 u^2)}}\\;(\\text{Perihelion Shift})', notifText: 'Schwarzschild perihelion precession Δφ', difficulty: 'Hard', topic: 'GR Geodesics' },
  { id: 'int-426', latex: '\\int_{r_1}^{r_2} \\frac{dr}{\\sqrt{r^4 - b^2 r^2 + r_s b^2 r}}\\;(r_s\\text{ Photon Sphere})', notifText: 'Strong-field photon orbit integral near r = 3GM', difficulty: 'Hard', topic: 'GR Geodesics' },
  { id: 'int-427', latex: '\\int \\frac{r^2\\,dr}{\\sqrt{(r^2+a^2)^2 E^2 - \\Delta(r)(r^2 + K)}}\\;(\\text{Kerr Geodesic})', notifText: 'Equatorial Kerr radial geodesic integral', difficulty: 'Hard', topic: 'GR Geodesics' },

  // 17. Hilbert Transforms & Singular Integral Equations
  { id: 'int-428', latex: '\\frac{1}{\\pi}\\mathcal{P}\\int_{-\\infty}^{\\infty} \\frac{\\cos(t)}{x - t}\\,dt', notifText: 'Hilbert transform of cos(t)', difficulty: 'Classic', topic: 'Hilbert Transforms' },
  { id: 'int-429', latex: '\\frac{1}{\\pi}\\mathcal{P}\\int_{-\\infty}^{\\infty} \\frac{\\sin(t)}{x - t}\\,dt', notifText: 'Hilbert transform of sin(t)', difficulty: 'Classic', topic: 'Hilbert Transforms' },
  { id: 'int-430', latex: '\\frac{1}{\\pi}\\mathcal{P}\\int_{-\\infty}^{\\infty} \\frac{1}{(1 + t^2)(x - t)}\\,dt', notifText: 'Hilbert transform of Lorentzian 1/(1 + t²)', difficulty: 'Classic', topic: 'Hilbert Transforms' },
  { id: 'int-431', latex: '\\frac{2}{\\pi}\\mathcal{P}\\int_{0}^{\\infty} \\frac{\\omega\'\\chi\'\'(\\omega\')}{\\omega\'^2 - \\omega^2}\\,d\\omega\'\\;(\\text{Kramers-Kronig})', notifText: 'Kramers-Kronig dispersion relation for χ\'(ω)', difficulty: 'Hard', topic: 'Hilbert Transforms' },
  { id: 'int-432', latex: '\\frac{1}{\\pi}\\mathcal{P}\\int_{-1}^{1} \\frac{\\sqrt{1 - t^2}}{t - x}\\,dt\\;(|x|<1)', notifText: 'Wigner Semicircle / Airfoil singular integral', difficulty: 'Hard', topic: 'Hilbert Transforms' },
  { id: 'int-433', latex: '\\frac{1}{\\pi}\\mathcal{P}\\int_{-1}^{1} \\frac{dt}{(t - x)\\sqrt{1 - t^2}}\\;(|x|<1)', notifText: 'Chebyshev singular integral (= 0 for |x|<1)', difficulty: 'Hard', topic: 'Hilbert Transforms' },
  { id: 'int-434', latex: '\\frac{1}{\\pi}\\mathcal{P}\\int_{-\\infty}^{\\infty} \\frac{e^{-t^2}}{t - x}\\,dt\\;(\\text{Dawson / Faddeeva})', notifText: 'Hilbert transform of Gaussian e^(-t²)', difficulty: 'Hard', topic: 'Hilbert Transforms' },

  // 18. Wiener-Hopf Factorization Integrals
  { id: 'int-435', latex: '\\frac{1}{2\\pi i}\\int_{-\\infty+ic}^{\\infty+ic} \\frac{\\ln(t^2 + a^2)}{t - z}\\,dt\\;(\\text{Im }z > c)', notifText: 'Cauchy-type Wiener-Hopf split of ln(t² + a²)', difficulty: 'Classic', topic: 'Wiener-Hopf' },
  { id: 'int-436', latex: '\\int_{0}^{\\infty} e^{-|x-y|} f(y)\\,dy = e^{-2x}\\;(x>0)', notifText: 'Solve Wiener-Hopf eq: ∫₀^∞ e^(-|x-y|) f(y) dy = e^(-2x)', difficulty: 'Classic', topic: 'Wiener-Hopf' },
  { id: 'int-437', latex: '\\exp\\!\\left(\\frac{1}{2\\pi i}\\int_{-\\infty}^{\\infty} \\frac{\\ln K(t)}{t - z}\\,dt\\right),\\; K(t)=\\frac{t^2+1}{t^2+4}', notifText: 'Wiener-Hopf factorization K₊(z) of (t²+1)/(t²+4)', difficulty: 'Classic', topic: 'Wiener-Hopf' },
  { id: 'int-438', latex: '\\int_{0}^{\\infty} \\frac{1}{2}E_1(|x-y|) f(y)\\,dy = f(x)\\;(\\text{Milne Problem})', notifText: 'Milne radiative transfer Wiener-Hopf equation', difficulty: 'Hard', topic: 'Wiener-Hopf' },
  { id: 'int-439', latex: '\\frac{1}{2\\pi i}\\int_{-\\infty}^{\\infty} \\frac{\\ln\\sqrt{t^2 - k^2}}{t - z}\\,dt\\;(\\text{Sommerfeld Half-Plane})', notifText: 'Wiener-Hopf split of √(t² - k²) (Diffraction)', difficulty: 'Hard', topic: 'Wiener-Hopf' },
  { id: 'int-440', latex: '\\int_{0}^{\\infty} K_0(|x-y|) f(y)\\,dy = e^{-ax}\\;(x>0)', notifText: 'Wiener-Hopf integral equation with Bessel K₀ kernel', difficulty: 'Hard', topic: 'Wiener-Hopf' },
  { id: 'int-441', latex: '\\exp\\!\\left(\\frac{1}{2\\pi i}\\int_{-\\infty}^{\\infty} \\frac{\\ln(1 + e^{-|t|})}{t - z}\\,dt\\right)\\;(\\text{Im }z > 0)', notifText: 'Wiener-Hopf factor K₊(z) of 1 + e^(-|t|)', difficulty: 'Hard', topic: 'Wiener-Hopf' },


];

export function getIntegralForDate(
  dateKey,
  slot = 0,
  difficultyFilter = 'ALL',
  excludedIds = new Set()
) {
  const excluded = excludedIds instanceof Set ? excludedIds : new Set(excludedIds);

  // 1. Filter by difficulty
  const byDifficulty =
    difficultyFilter === 'ALL'
      ? INTEGRALS
      : INTEGRALS.filter((item) => item.difficulty.toUpperCase() === difficultyFilter);

  const difficultyPool = byDifficulty.length > 0 ? byDifficulty : INTEGRALS;

  // 2. Remove all previously solved (or already queued) questions
  const unsolvedPool = difficultyPool.filter((item) => !excluded.has(item.id));

  // Fallback only if the user has solved 100% of the entire pool
  const list = unsolvedPool.length > 0 ? unsolvedPool : difficultyPool;

  let hash = 0;
  const seed = `${dateKey}#${difficultyFilter}`;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  }

  const index = (hash + slot) % list.length;
  return {
    ...list[index],
    dateKey,
    slot,
  };
}