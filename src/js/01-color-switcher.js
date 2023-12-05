function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let intervalId = null;

document.querySelector('[data-start]').addEventListener('click', () => {
  intervalId = setInterval(() => {
    const randomColor = getRandomHexColor();
    document.body.style.background = randomColor;
  }, 1000);
  document.querySelector('[data-start]').disabled = true;
  document.querySelector('[daya-stop]').disabled = false;
});

document.querySelector('[data-stop]').addEventListener('click', () => {
  clearInterval(intervalId);
  document.querySelector('[data-start]').disabled = false;
  document.querySelector('[data-stop]').disabled = true;
});
