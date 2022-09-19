import { handleResult } from './handlers.js';
import { colorsByLength, isDark } from './colors.js';

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const displayColors = (colors) => {
  return colors
    .map(
      (color) =>
        `<span id="${color}" class="color${
          isDark(color) ? ' dark' : ''
        }" style="background: ${color}">${color}</span>`
    )
    .join('');
};

const onLoad = () => {
  if (!('SpeechRecognition' in window)) {
    document.querySelector('h1').textContent =
      'Your browser does not support Speech Recognition functionality';
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.onresult = handleResult;
  recognition.start();

  document.querySelector('.colors').innerHTML = displayColors(colorsByLength);
};

onLoad();
