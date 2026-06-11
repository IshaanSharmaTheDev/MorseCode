# MorseCode

A text-to-morse and morse-to-text encoder/decoder with audio playback. Type something, hear it in morse. Or input morse dots and dashes, get the text back.

Built this as a fun project after learning that Morse code is still actually used in some contexts. Also wanted to understand how audio generation works in the browser using the Web Audio API — no audio files needed, it generates the beeps mathematically.

## Features

- Text → Morse encoding with visual dot/dash display
- Morse → Text decoding (type or paste dots, dashes, spaces)
- Audio playback of the encoded morse at configurable WPM speed
- Frequency and volume controls
- Letter-by-letter playback highlight — shows which letter is being played
- Copy morse output to clipboard
- Supports full ASCII + common punctuation

## How to run

```
git clone https://github.com/AadhhyaSharma/MorseCode
cd MorseCode
# open index.html
```

## Morse input format

When decoding morse → text:
- `.` for dot, `-` for dash
- Single space between letters
- Double space (or `/`) between words

Example: `.... . .-.. .-.. ---` → `HELLO`

## The audio generation

The beeps are generated using the Web Audio API's `OscillatorNode`. A dot is one unit of tone, a dash is three units. The standard unit length at 20 WPM works out to about 60ms per dot. No audio files — all generated in real time.

---

Probably my most fun single-weekend project. Learned a lot about Web Audio API building this.
