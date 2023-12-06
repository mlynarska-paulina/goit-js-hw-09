import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
document.querySelector('[data-start]').disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    if (selectedDate.getTime() <= new Date().getTime()) {
      Notiflix.Notify.failure('Please, choose a date in the future.');
      return;
    }
    document.querySelector('[data-start]').disabled = false;
  },
};

flatpickr('#datetime-picker', options);

document.querySelector('[data-start]').addEventListener('click', () => {
  const endDate = new Date(document.querySelector('#datetime-picker').value);
  const IntervalId = setInterval(() => {
    const now = new Date();
    const remainingTime = endDate - now;
    document.querySelector('[data-start]').disabled = true;
    document.querySelector('#datetime-picker').disabled = true;

    if (remainingTime <= 0) {
      clearInterval(IntervalId);
      document.querySelector('[data-start]').disabled = true;
      return;
    }
    const { days, hours, minutes, seconds } = convertMs(remainingTime);
    document.querySelector('[data-days]').textContent = addLeadingZero(days);
    document.querySelector('[data-hours]').textContent = addLeadingZero(hours);
    document.querySelector('[data-minutes]').textContent =
      addLeadingZero(minutes);
    document.querySelector('[data-seconds]').textContent =
      addLeadingZero(seconds);
  }, 1000);
});
