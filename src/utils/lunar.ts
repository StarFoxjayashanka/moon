/**
 * Lunar cycles and moon phase calculations
 */

export interface MoonPhaseInfo {
  phase: number; // 0 to 1
  label: string;
  illumination: number; // 0 to 100
}

/**
 * Get the current moon phase
 * Based on simple calculation from a known new moon (Jan 6, 2000)
 */
export function getMoonPhase(date: Date = new Date()): MoonPhaseInfo {
  const knownNewMoon = new Date(2000, 0, 6, 18, 14); // Jan 6, 2000
  const lunarCycle = 29.530588853; 
  
  const diff = (date.getTime() - knownNewMoon.getTime()) / (1000 * 60 * 60 * 24);
  const phase = (diff % lunarCycle) / lunarCycle;
  const normalizedPhase = phase < 0 ? phase + 1 : phase;

  let label = '';
  let illumination = 0;

  if (normalizedPhase < 0.0625 || normalizedPhase >= 0.9375) {
    label = 'New Moon';
    illumination = 0;
  } else if (normalizedPhase < 0.1875) {
    label = 'Waxing Crescent';
    illumination = 25;
  } else if (normalizedPhase < 0.3125) {
    label = 'First Quarter';
    illumination = 50;
  } else if (normalizedPhase < 0.4375) {
    label = 'Waxing Gibbous';
    illumination = 75;
  } else if (normalizedPhase < 0.5625) {
    label = 'Full Moon';
    illumination = 100;
  } else if (normalizedPhase < 0.6875) {
    label = 'Waning Gibbous';
    illumination = 75;
  } else if (normalizedPhase < 0.8125) {
    label = 'Last Quarter';
    illumination = 50;
  } else {
    label = 'Waning Crescent';
    illumination = 25;
  }

  // More precise illumination based on phase
  // 0 at new moon (0), 100 at full moon (0.5), 0 at next new moon (1)
  illumination = Math.abs(Math.sin(normalizedPhase * Math.PI)) * 100;

  return {
    phase: normalizedPhase,
    label,
    illumination: Math.round(illumination)
  };
}
