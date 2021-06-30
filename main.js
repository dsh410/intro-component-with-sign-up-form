let inputs = document.querySelectorAll('input');
let btns = document.querySelector('.button');
let form = document.querySelector('form');

function onSubmit(e) {
    for (let input of inputs) {
        e.preventDefault();
        if (input.innerText === '') {
           
            input.placeholder = `${input.placeholder} Cannot Be Empty`
          
        }
      
    }
}

   form.addEventListener('submit', onSubmit,{  once: true })


    
