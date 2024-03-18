const keys = document.querySelectorAll('.key');
const volumeSlider = document.querySelector('.volume-slider input');

const sounds = {
  a: new Audio('sounds/C.mp3'),
  w: new Audio('sounds/C#.mp3'),
  s: new Audio('sounds/D.mp3'),
  e: new Audio('sounds/D#.mp3'),
  d: new Audio('sounds/E.mp3'),
  f: new Audio('sounds/F.mp3'),
  t: new Audio('sounds/F#.mp3'),
  g: new Audio('sounds/G.mp3'),
  y: new Audio('sounds/G#.mp3'),
  h: new Audio('sounds/A.mp3'),
  u: new Audio('sounds/A#.mp3'),
  j: new Audio('sounds/B.mp3'),
  k: new Audio('sounds/C2.mp3'),
  o: new Audio('sounds/C2#.mp3'),
  l: new Audio('sounds/D2.mp3'),
  p: new Audio('sounds/D2#.mp3'),
  ';': new Audio('sounds/E2.mp3'),
  furElise: new Audio('sounds/fur-elise.mp3'),
  nocturne: new Audio('sounds/nocturne-op9-2.mp3'),
  clairDeLune: new Audio('sounds/clair-de-lune.mp3'),
  someoneLikeYou: new Audio('sounds/someone-like-you.mp3'),
  allOfMe: new Audio('sounds/all-of-me.mp3'),
  perfect: new Audio('sounds/perfect.mp3'),
};

keys.forEach(key => {
  key.addEventListener('click', () => {
    const dataKey = key.getAttribute('data-key');
    if (dataKey) {
      playSound(dataKey);
    }
  });
});

document.addEventListener('keydown', e => {
  if (e.repeat) return;
  const key = e.key.toLowerCase();
  playSound(key);
});

function playSound(key) {
  const sound = sounds[key];
  if (sound) {
    sound.currentTime = 0;
    sound.volume = volumeSlider.value;
    sound.play();
    highlightKey(key);
  }
}

function highlightKey(key) {
  const keyElement = document.querySelector(`.key[data-key="${key}"]`);
  keyElement.classList.add('active');
  setTimeout(() => {
    keyElement.classList.remove('active');
  }, 300);
}

volumeSlider.addEventListener('input', () => {
  const volume = volumeSlider.value;
  Object.values(sounds).forEach(sound => {
    sound.volume = volume;
  });
});