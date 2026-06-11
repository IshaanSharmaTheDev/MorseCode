const MorseEngine = (() => {
  const CODE = {A:'.-',B:'-...',C:'-.-.',D:'-..',E:'.',F:'..-.',G:'--.',H:'....',I:'..',J:'.---',K:'-.-',L:'.-..',M:'--',N:'-.',O:'---',P:'.--.',Q:'--.-',R:'.-.',S:'...',T:'-',U:'..-',V:'...-',W:'.--',X:'-..-',Y:'-.--',Z:'--..',0:'-----',1:'.----',2:'..---',3:'...--',4:'....-',5:'.....',6:'-....',7:'--...',8:'---..',9:'----.','.':'.-.-.-',',':'--..--','?':'..--..','/':'-..-.','-':'-....-',"'":'----.','"':'.-..-.','+':'.-.-.',':':'---...',';':'-.-.-.',')':'-.--.-','(':'-.--.','=':'-...-','@':'.--.-.','&':'.-...',' ': ' '};
  const DECODE = Object.fromEntries(Object.entries(CODE).map(([k,v])=>[v,k]));

  function encode(text) {
    return text.toUpperCase().split('').map(c => CODE[c] || '?').join(' ').replace(/ {3}/g,'  /  ');
  }

  function decode(morse) {
    return morse.split(' / ').map(word =>
      word.trim().split(' ').map(code => DECODE[code.trim()] || '?').join('')
    ).join(' ');
  }

  function getWPM(text, ms) {
    const words = text.trim().split(/\s+/).length;
    return Math.round(words / (ms / 60000));
  }

  return { encode, decode, CODE, DECODE };
})();
