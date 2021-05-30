
// console.log(btns[0].classList.add('red'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue'));

// if (btns[0].classList.contains('red')) {
//     console.log('red');
// }

const btns = document.querySelectorAll('button');
const wrapper = document.querySelector('.btn-block');

// wrapper.addEventListener('click', (event) => {
//     if (event.target && event.target.tagName === 'BUTTON') {
//         console.log('hello');
//     }
// });

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);