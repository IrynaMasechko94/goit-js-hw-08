import { throttle } from 'lodash';

const inputForm = document.querySelector('.feedback-form');

const throttledSave = throttle(form => {
  const email = form.elements.email.value;
  const message = form.elements.message.value;
  const data = {
    email,
    message,
  };
  console.log(data);
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}, 500);

inputForm.addEventListener('input', event => {
  const form = event.target.form;
  throttledSave(form);
});

const savedData = localStorage.getItem('feedback-form-state');

if (savedData) {
  const { email, message } = JSON.parse(savedData);

  if (inputForm) {
    inputForm.elements.email.value = email || '';
    inputForm.elements.message.value = message || '';
  }
}

inputForm.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  form.reset();
  localStorage.removeItem('feedback-form-state');
}
