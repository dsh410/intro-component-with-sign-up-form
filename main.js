const nameInput = document.querySelectorAll('input');


for (let input of nameInput) {
  input.addEventListener('input', () => {
    input.setCustomValidity('');
    input.checkValidity();
  });
}





for (let input of nameInput) {
  input.addEventListener('invalid', () => {
    if(input.value === '') {
      input.setCustomValidity(`Enter your ${input.placeholder}!`);
    } else {
      input.setCustomValidity('Usernames can only contain upper and lowercase letters. Try again!');
    }
  });

}
