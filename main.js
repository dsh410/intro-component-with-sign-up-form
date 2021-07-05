import axios from "./axios/dist/axios";


const nameInput = document.querySelectorAll('input');
let form = document.querySelector('form');



const response = axios.get("./index.html")
const user = response.data;

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
      input.setCustomValidity(`Looks like this is not an ${input.placeholder}`);
    }
  });

}
form.addEventListener('submit', () => {
  consloe.log(user )
})














