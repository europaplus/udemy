"use strict";

// console.log('Запрос данных...');
//
// const req = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log('Подготовка данных...');
//
//         const product = {
//             name: 'TV',
//             price: 200,
//         };
//         resolve(product);
//     }, 2000);
// });
//
// req.then((product) => {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             product.status = 'order';
//             resolve(product);
//         }, 2000)
//     });
// }).then(data => {
//     data.modify = true;
//     return data;
// }).then(data => {
//     console.log(data);
// }).catch(() => {
//     console.error('Произошла ошибка');
// }).finally(() => {
//     console.log('Операция завершена');
// })

const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
}

// test(1000).then(() => console.log('1000ms'));
// test(1000).then(() => console.log('2000ms'));

Promise.all([test(1000), test(2000)]).then(() => {
    console.log('all');
});

Promise.race([test(1000), test(2000)]).then(() => {
    console.log('all');
});