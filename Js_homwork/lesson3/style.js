// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// document.write('<ul>');
// for (let i = 0; i < 10; i++) {
//     document.write('<div>qwerty</div>');
// }
// document.write('</ul>')

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// document.write('<ul>')
// for (let i = 1; i < 11; i++) {
//     document.write(`<div>item ${i}</div>`);
// }
// document.write('</ul>')

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// document.write(`<ul>`);
// let i = 0;
// while (i < 20) {
//     document.write('<h1>qwerty</h1>');
//     i++;
// }
// document.write(`</ul>`);

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// document.write('<ul>');
// let i = 1;
// while (i <= 20) {
//     document.write(`<h1>qwerty ${i}</h1>`);
//     i++;
// }
// document.write('</ul>');

// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
//     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву

// let menu = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// document.write('<ul>');
// for (let i = 0; i < menu.length; i++) {
//     document.write(`<li>${menu[i]}</li>`);
//
// }
// document.write('</ul>');

// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
//
// /
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
document.write('<ul>')
for (let i = 0; i < products.length; i++) {
    let product = products[i];
    // if (product.prise >= 10)
        document.write(`<li class="target"> ${product.title} ${product.prise} $<img src="${product.image}"></li>`)
}
document.write('</ul>')

// є масив
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olena', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
document.write(`<h3>users with the status true</h3>`);
document.write(`<ul>`);
for (const user of users) {
    if(user.status)
    document.write(`<li> ${user.name}</li>`);
}
document.write(`</ul>`);

document.write(`<h3>users with false status</h3>`);

document.write(`<ul>`);
for (const user of users) {
    if(!user.status)
        document.write(`<li> ${user.name}</li>`);
}
document.write(`</ul>`);

document.write(`<h3>users over 30 years old</h3>`);

document.write(`<ul>`);
for (const user of users) {
    if(user.age >= 30)
        document.write(`<li> ${user.name}</li>`);
}
document.write(`</ul>`);