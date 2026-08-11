/**
 * Sacred Liturgical Chime & Bell Synthesizer using Web Audio API
 * Generates pure harmonic church bell / organ tone
 */
let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

/**
 * Plays a reverent, pure bell harmonic chime (e.g. Cathedral Sanctus bell)
 */
export function playSanctusBell(frequency = 587.33, isMuted = false): void {
  if (isMuted) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.2, now);
    masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.5);
    masterGain.connect(ctx.destination);

    // Fundamental + subtle celestial harmonics (strike note + hum note)
    const harmonics = [1, 2.02, 3.01, 4.2];
    const amplitudes = [0.6, 0.3, 0.15, 0.05];

    harmonics.forEach((harmonic, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = idx === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(frequency * harmonic, now);

      gain.gain.setValueAtTime(amplitudes[idx], now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + (2.5 / (idx + 1)));

      osc.connect(gain);
      gain.connect(masterGain);

      osc.start(now);
      osc.stop(now + 2.6);
    });
  } catch (err) {
    // Gracefully ignore audio autoplay policies
    console.debug('Audio playback note:', err);
  }
}
