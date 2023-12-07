function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let interval = null;
const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');

document.querySelector('[data-start]').addEventListener('click', () => {
  interval = setInterval(() => {
    const randomColor = getRandomHexColor();
    document.body.style.backgroundColor = randomColor;
  }, 1000);
  btnStart.disabled = true;
  btnStop.disabled = false;
});

btnStop.addEventListener('click', () => {
  clearInterval(interval);
  btnStart.disabled = false;
  btnStop.disabled = true;
});
