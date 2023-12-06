import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';

document.querySelector('.form').addEventListener('submit', function (event) {
  event.preventDefault();
  const delayInput = parseInt(document.querySelector('[name="delay"]').value);
  const stepInput = parseInt(document.querySelector('[name="step"]').value);
  const amountInput = parseInt(document.querySelector('[name="amount"]').value);

  function createPromise(position, delay) {
    return new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;
      setTimeout(() => {
        if (shouldResolve) {
          resolve({ position, delay });
        } else {
          reject({ position, delay });
        }
      }, delay);
    });
  }

  for (let i = 0; i < amountInput; i++) {
    const currentDelay = delayInput + i * stepInput;
    createPromise(i + 1, currentDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
});
