## 🚀 Live Demo: [MorseCode](https://ishaansharmathedev.github.io/MorseCode/)

> Try it in your browser: **[https://ishaansharmathedev.github.io/MorseCode/](https://ishaansharmathedev.github.io/MorseCode/)**

# MorseCode

A Morse code encoder/decoder with audio playback, adjustable tone frequency, and a full reference chart.

## Features
- **Encode** — text to Morse in real-time
- **Decode** — Morse back to text
- **Audio playback** — plays dots and dashes using Web Audio API oscillator
- **Adjustable frequency** — 300–1200 Hz slider
- **Copy output** — one click
- **Reference chart** — full A-Z, 0-9, punctuation grid

## Structure
```
src/morse.js   # Encode/decode maps, encode(), decode()
src/audio.js   # Web Audio API playback with timing
src/app.js     # UI wiring, reference chart builder
```

## License
MIT
