
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let mass = [3, 3, 4];
// let fu5 = (mass1) => {
//     let result = 0;
//     for (let mass1Element of mass1) {
//         result = mass1Element + result;
//     }
//     return result / mass1.length
// }
// console.log(fu5(mass));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// (Math використовувати заборонено);


// let fu6 = (...hhh) => {
//     let min = hhh[0];
//     let max = hhh[0];
//     for (const i of hhh) {
//         if (i < min) {
//             min = i;
//         }
//         if (i > max) {
//             max = i;
//         }
//     }
//     console.log(max);
//     return min;
// }
// console.log(fu6(3, -4, 3, 5,));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// let fuo = () => {
//     let mas = [];
//     for (let i = 0; i < 20; i++) {
//         // mas.push(Math.round(Math.random() * 100));
//         mas[i] = Math.round(Math.random() * 100);
//     }
//     return mas;
// }
// console.log(fuo());

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент,
// який характеризує кінцеве значення діапазону.

// let fuo1 = (limit) => {
//     let mas = [];
//     for (let i = 0; i < limit; i++) {
//         // mas.push(Math.round(Math.random() * 100));
//         mas[i] = Math.round(Math.random() * 100);
//     }
//     return mas;
// }
// console.log(fuo1(5));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//
let arr = [1, 3, 5,];
let rev = (array) => {
    let newarr = [];
    for (let i = array.length - 1; i >= 0; i--) {
        newarr.push(array[i]);

    }
    return newarr;
}
console.log(rev(arr));
//
//     Переробити на стрілочні функції з попереднього дз
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// let x = (a,b) => a*b;
// console.log(x(10,5));

// - створити функцію яка обчислює та повертає площу кола з радіусом r


// let x1 = (r,pi) => pi * r * r;
// console.log(x1(5,3.14));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// let x2 = (r,h,pi) => 2 * pi * r * (h + r);
// console.log(x2(5,6,3.14));

// - створити функцію яка приймає масив та виводить кожен його елемент


// let mass = [5, 6, 9, 10];
// let f1 = (mass) => {
// }
// for (let mass1 of mass) {
//     console.log(mass1);
// }


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// let ff = (text) => document.write(`<p3>${text}</p3>`);
// ff('hello');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let parag3 = (text1) => {
//     document.write(`<li>${text1}</li>`);
//     document.write(`<li>${text1}</li>`);
//     document.write(`<li>${text1}</li>`);
// }
// parag3('hello');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let parag4 = (text2) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < 3; i++) {
//         document.write(`<li>${text2}</li>`);
//     }
//     document.write(`</ul>`);
// }
// parag4('hello');

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let f = (array) => {
//     for (const arrayElement of array) {
//         console.log(arrayElement);
//     }
// }
//
// f(['sdfdsf', 10, 'ddfgdfg', 500, true, '=']);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. 
// Для кожного об'єкту окремий блок.

// let f1 = (array1) => {
//     for (let arrayElement of array1) {
//         console.log(arrayElement);
//     }
// }
// f1([{id: 523652, name: 'ertt', age: 500},
//     {id: 524888, name: 'ghfg', age: 600},
//     {id: 411256, name: 'eser', age: 700}]);

// - створити функцію яка повертає найменьше число з масиву

let fr = (array) => {
    for (let item of array) {
        if (item < array[0]) {
            array[0] = item
        }
    }
    return array[0];
}

let numbers = [-11, -12, -30, 50, 3, -90];
console.log(fr(numbers));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад [1,2,10]->13

let fup = (...qwe) => {
    let x = 0;
    for (let qweElement of qwe) {
        x = x + qweElement;
    }
    return x;
}
console.log(fup(10, 30, 30, 1, 3));

// -створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями.


let mass = [{name: 'qwer'},{name: 'uiop'}];
let change = (mass) => {
    let temp = mass[0];
    mass[0] = mass[1];
    mass[1] = temp;
    return mass;
}
console.log(change(mass));


































