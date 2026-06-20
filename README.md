So I have always been really interested in Morse code, and I have always really wanted to decode and import information into Morse code because, to me, it was very cool. Like in movies, we used to do, "Save Me," write in Morse code, and I also knew that earlier people also used Morse code. This was a really really hard project to do, but I still did it. It took a bit of research and a bit of coding, but I was finally able to do it. Find how to set it up, written by AI, below. 
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
