const nameInput = document.querySelectorAll('input');
const form = document.querySelector('form');

 let formData = new FormData(form)

const request = new XMLHttpRequest();



for (let input of nameInput) {
  input.addEventListener('input', () => {
    input.setCustomValidity('');
    input.checkValidity();
    submitForm(input);
  });
}

function submitForm(input) {
  const request = new XMLHttpRequest();
  request.open("POST", 'https://determined-keller-7fd769.netlify.app/');
  request.send(new FormData(form));
}




for (let input of nameInput) {
  input.addEventListener('invalid', () => {
    if (input.value === '') {
      input.style.border = '2px solid red'
      input.setCustomValidity(`${input.placeholder} cannot be empty`);
    } else {
      input.setCustomValidity(`Looks like this is not an ${input.placeholder}`);
    }
  });

}














