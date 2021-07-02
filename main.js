const nameInput = document.querySelectorAll('input');


for (let input of nameInput) {
  input.addEventListener('input', () => {
    input.setCustomValidity('');
    input.checkValidity();
  });
}





for (let input of nameInput) {
  input.addEventListener('invalid', () => {
    if (input.value === '') {
      input.style.border = '2px solid red'
      input.setCustomValidity(`${input.placeholder} cannot be empty`);
    } else {
      input.setCustomValidity('Usernames can only contain upper and lowercase letters. Try again!');
    }
  });

}
