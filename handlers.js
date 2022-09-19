import { isValidColor } from './colors.js';

export const handleResult = ({ results }) => {
  const words = results[results.length - 1][0].transcript;
  let color = words.toLowerCase();
  color = color.replace(/\s/g, '');
  if (!isValidColor(color)) return;
  const colorSpan = document.getElementById(color);
  colorSpan.classList.add('got');
  console.log(color);
};
