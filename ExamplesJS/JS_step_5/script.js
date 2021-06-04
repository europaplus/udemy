// let start = new Date();
//
// let id = setTimeout(() =>{
//     let end = new Date();
//     alert(`Прошло времени со старта в миллисекундах: ${end - start}`);
// },2000);

// const   btn = document.querySelector('.btn');
//
// btn.addEventListener('click', myAnimation);
//
// function myAnimation() {
//     const elem = document.querySelector('.box');
//     let pos = 0;
//
//     const id = setInterval(frame, 100);
//     function frame() {
//         if (pos === 300) {
//             clearInterval(id);
//         } else {
//             ++pos;
//             elem.style.top = pos + 'px';
//             elem.style.left = pos + 'px';
//         }
//     }
// }

const   btn = document.querySelector('.btn'),
        elem = document.querySelector('.box');
let     pos = 0;
// btn.addEventListener('click', myAnimation);

function myAnimation() {
    ++pos;
    elem.style.top = pos + 'px';
    elem.style.left = pos + 'px';

    if (pos < 300) {
        requestAnimationFrame(myAnimation);
    }
}
btn.addEventListener('click', () => {
    requestAnimationFrame(myAnimation);
})
// let     timerId,
//         it = 0;

// btn.addEventListener('click', () => {
//     // const timeId = setTimeout(logger, 2000);
//     timerId = setInterval(logger, 500);
// });
//
// function logger () {
//     if (it === 3) {
//         clearInterval(timerId);
//     }
//     console.log('text');
//     ++it;
// }
//
// let id = setTimeout(function log() {
//     console.log('Hello');
//     id = setTimeout(log, 500);
// }, 500);