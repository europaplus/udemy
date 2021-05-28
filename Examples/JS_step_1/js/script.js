'use strict';

const   box = document.getElementById('box'),
        btns = document.getElementsByTagName('button'),
        circles = document.getElementsByClassName('circle'),
        hearts =  document.querySelectorAll('.heart'),
        oneHeart = document.querySelector('.heart'),
        wrapper = document.querySelector('.wrapper');
box.style.backgroundColor = 'blue';
box.style.width = '350px';

btns[1].style.borderRadius = '100%';

// for (let index = 0; index < hearts.length; ++index) {
//     hearts[index].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
// const text = document.createTextNode('Тут был я');

div.classList.add('black');
div.innerHTML = "<h1>Hello World</h1>";
// div.textContent = "<h1>Hello</h1>";
// wrapper.appendChild(div);
document.body.append(div);
// wrapper.prepend(div);
// hearts[0].after(div);
// circles[0].remove();
// hearts[0].replaceWith(circles[0]);
div.insertAdjacentHTML( "beforebegin", '<h2>Hello</h2>');