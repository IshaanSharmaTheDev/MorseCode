const MorseAudio = (() => {
  let ctx = null;
  const DOT_MS = 80;
  function getCtx() { if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)(); return ctx; }
  function tone(freq, startTime, duration) {
    const c = getCtx();
    const osc = c.createOscillator();
    const gain = c.createGain();
    osc.connect(gain); gain.connect(c.destination);
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0, startTime);
    gain.gain.linearRampToValueAtTime(0.5, startTime + 0.005);
    gain.gain.setValueAtTime(0.5, startTime + duration - 0.005);
    gain.gain.linearRampToValueAtTime(0, startTime + duration);
    osc.start(startTime); osc.stop(startTime + duration);
  }
  function play(morse, freq = 700) {
    const c = getCtx();
    let t = c.currentTime + 0.1;
    const dot = DOT_MS / 1000;
    const dash = dot * 3;
    const charGap = dot * 3;
    const wordGap = dot * 7;
    morse.split('').forEach(ch => {
      if (ch === '.') { tone(freq, t, dot); t += dot + dot; }
      else if (ch === '-') { tone(freq, t, dash); t += dash + dot; }
      else if (ch === ' ') { t += charGap; }
      else if (ch === '/') { t += wordGap; }
    });
  }
  return { play };
})();
