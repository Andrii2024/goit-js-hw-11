import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', onBtnClick);

function onBtnClick(e) {
  e.preventDefault();

  const delayInput = form.elements.delay;
  const stateInput = form.elements.state;

  const delay = parseInt(delayInput.value, 10);
  const state = stateInput.value;

  createPromise(delay, state);
}

function createPromise(delay, state) {
  const newPromise = new Promise((resolve, reject) => {
    if (state === 'fulfilled') {
      setTimeout(() => resolve(delay), delay);
    } else if (state === 'rejected') {
      setTimeout(() => reject(delay), delay);
    }
  });

  newPromise
    .then(delay => {
      const message = `✅ Fulfilled promise in ${delay}ms`;
      showMessage('success', message);
    })
    .catch(delay => {
      const message = `❌ Rejected promise in ${delay}ms`;
      showMessage('error', message);
    });
}

function showMessage(type, message) {
  iziToast.show({
    title: `${type}`,
    message: message,
    position: 'topRight',
    color: type === 'success' ? 'green' : 'red',
  });
}

// ======================
// const form = document.querySelector('.form');
// const btnBar = document.querySelector('.btn-bar');

// btnBar.addEventListener('submit', onBtnClick);

// function onBtnClick(e) {
//   e.preventDefault();
//   const delayInput = form.elements.delay;
//   const stateInput = form.elements.state;
//   const delay = parseInt(delayInput.value, 10);
//   const state = stateInput.value;

//   const promice = createPromise(delay, state);
//   promice
//     .then(delay => {
//       const message = `✅ Fulfilled promise in ${delay}ms`;
//       showMessage('success', message);
//     })
//     .catch(delay => {
//       const message = `❌ Rejected promise in ${delay}ms`;
//       showMessage('error', message);
//     });
// }

// function createPromise(delay, state) {
//   return new Promise((resolve, reject) => {
//     if (state === 'fulfilled') {
//       setTimeout(() => resolve(delay), delay);
//     } else if (state === 'rejected') {
//       setTimeout(() => reject(delay), delay);
//     }
//   });
// }

// function showMessage(type, message) {
//   iziToast.show({
//     title: `${type}`,
//     message: message,
//     position: 'topRight',
//     color: type === 'success' ? 'green' : 'red', // Optional: You can customize the color
//   });
// }
