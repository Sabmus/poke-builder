export const StatCalculator = (
  base,
  iv,
  ev,
  level,
  natMultiplier,
  isHp = false
) => {
  // validators
  if (isNaN(level)) level = 1;
  if (isNaN(iv)) iv = 0;
  if (isNaN(ev)) ev = 0;
  if (level > 100) level = 100;
  if (iv > 31) iv = 31;
  if (ev > 252) ev = 252;

  const commonFormula = ((2 * base + iv + Math.trunc(ev / 4)) * level) / 100;

  if (isHp) {
    return Math.trunc(commonFormula + level + 10);
  } else {
    return Math.trunc((commonFormula + 5) * natMultiplier);
  }
};
