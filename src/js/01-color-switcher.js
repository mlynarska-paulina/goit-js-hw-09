function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let interval = null;

document.querySelector('[data-start]').addEventListener('click', () => {
  interval = setInterval(() => {
    const randomColor = getRandomHexColor();
    document.body.style.backgroundColor = randomColor;
  }, 1000);
  document.querySelector('[data-start]').disabled = true;
  document.querySelector('[data-stop]').disabled = false;
});

document.querySelector('[data-stop]').addEventListener('click', () => {
  clearInterval(interval);
  document.querySelector('[data-start]').disabled = false;
  document.querySelector('[data-stop]').disabled = true;
});
