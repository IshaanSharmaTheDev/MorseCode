(function(){
  'use strict';
  function update() {
    const mode = document.querySelector('input[name=mode]:checked').value;
    const input = document.getElementById('input-text').value;
    if (mode === 'encode') {
      document.getElementById('output-text').value = MorseEngine.encode(input);
    } else {
      document.getElementById('output-text').value = MorseEngine.decode(input);
    }
  }
  function buildReference() {
    const grid = document.getElementById('morse-ref');
    grid.innerHTML = Object.entries(MorseEngine.CODE).filter(([k])=>k!==' ').map(([k,v])=>
      `<div class="ref-cell"><span class="ref-char">${k}</span><span class="ref-code">${v}</span></div>`
    ).join('');
  }
  function init() {
    document.getElementById('input-text').addEventListener('input', update);
    document.querySelectorAll('input[name=mode]').forEach(r => r.addEventListener('change', update));
    document.getElementById('btn-play').addEventListener('click', () => {
      const morse = document.getElementById('output-text').value || MorseEngine.encode(document.getElementById('input-text').value);
      MorseAudio.play(morse, parseInt(document.getElementById('freq-slider').value));
    });
    document.getElementById('btn-copy').addEventListener('click', () => navigator.clipboard.writeText(document.getElementById('output-text').value));
    document.getElementById('btn-clear').addEventListener('click', () => { document.getElementById('input-text').value=''; update(); });
    document.getElementById('freq-slider').addEventListener('input', function(){ document.getElementById('freq-val').textContent = this.value + 'Hz'; });
    buildReference();
  }
  document.addEventListener('DOMContentLoaded', init);
})();
