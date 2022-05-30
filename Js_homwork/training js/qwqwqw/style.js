// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function absquare(a, b) {
//     let result = (a * b);
//     return result;
// }
//
// let squareS = absquare(15, 10);
// console.log(squareS);


// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function rcircle(r) {
//     return (3.14 * r * r);
// }
// let circleS = rcircle(10);
// console.log(circleS);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function rhcylinder(r,h) {
//     return (2 * 3.14 * r * (h + r));
// }
// let cylinderS = rhcylinder( 10,  30);
// console.log(cylinderS);


// - створити функцію яка приймає масив та виводить кожен його елемент


// function an_whole(whole) {
//     for (const item of whole) {
//         console.log(item.name,item.age,item.status);
//     }
// }
// an_whole([{name: 'vasya', age: 31, status: false}]);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function parag(text) {
//     document.write(`<p1>${text}</p1>`);
// }
// parag('hello');


// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий

// function parag3(text1) {
//     document.write(`<ul>`);
//     for (let i = 0; i < 3; i++) {
//         document.write(`<li>${text1}</li>`);
//     }
//     document.write(`</ul>`);
//
// }
//
// parag3('hello');


// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function parag3(text1,a) {
//     document.write(`<ul>`);
//     for (let i = 0; i < a; i++) {
//         document.write(`<li>${text1}</li>`);
//     }
//     document.write(`</ul>`);
//
// }
//
// parag3('hello',3);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список

// function f(array) {
//     for (const arrayElement of array) {
//         console.log(arrayElement);
//     }
// }
//
// f(['sdfdsf', 10, 'ddfgdfg', 500, true, '=']);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ.
// Для кожного об'єкту окремий блок.
//
// function f1(array1) {
//     for (let arrayElement of array1) {
//         console.log(arrayElement);
//     }
// }
// f1([{id: 523652, name: 'ertt', age: 500},
//            {id: 524888, name: 'ghfg', age: 600},
//            {id: 411256, name: 'eser', age: 700}]);


// - створити функцію яка повертає найменьше число з масиву

// function f2(array) {
//     let x = array[0];
//     for (let item of array) {
//         if (item < x) {
//             x = item
//         }
//     }
//     return x;
// }
//
// let numbers = [-11, -12, 35, 50];
// console.log(f2(numbers ));

// function f2(array) {
//     let result = array[0];
//     for (let i of array) {
//         if (i < result) {
//             result = i;
//         }
//     }
//     return result;
//
// }
// // let numbers = [-11, -12, 35, 50];
// console.log(f2([-10, -12, 10, 23]));

// function f2(array) {
//     let result = array[0];
//     for (let i of array) {
//         if (i < result) {
//             result = i;
//         }
//     }
//     return result;
//
// }
// // let numbers = [-11, -12, 35, 50];
// console.log(f2([-10, -12, -500,[-12,-600], 23]));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву
// та повертає його. Приклад [1,2,10]->13


// function f(a) {
//     let x = 0;
//     for (const argument of arguments) {
//         x = x + argument;
//     }
//     return x;
// }
//
// // let numbers = f([10, 30, 30]);//неправильно тут!!!!
// let numbers = f(10, 30, 30, 1, 3);
// console.log(f(numbers));
//
//
// function fu(...qwe) {
//     let x = 0;
//     for (let qweElement of qwe) {
//         x = x + qweElement;
//     }
//     return x;
// }
// console.log(fu(10,30,30,1,3));


// function fuw(ass) {
//     let x = ass[0];
//     for (let qweElement of ass) {
//         x = x + qweElement;
//     }
//     return x;
// }
// let numb = [10, 30, 30,1,3];
// console.log(fuw(numb ));

// function fuw(ass) {
//     let x= 0;
//     for (let i = 0; i < ass.length; i++) {
//         x = x + ass[0];
//     }
//     return x;
// }
// let numb = [10, 30, 30,1,3,6];
// console.log(fuw(numb));

// function qwerty2(qw, a, b) {
//     let uslovie;
//     if (qw === '+' && cheker(a, b)) {
//         uslovie = a + b;
//     } else if (qw === '*') {
//         uslovie = a * b;
//     }
//     return uslovie;
// }
//
// let qwerty2res1 = qwerty2('+', 10, 20);
// let qwerty2res2 = qwerty2('*', 10, 20);
//
// function vives() {
//     document.write(`<ul>`);
//     for (let i = 0; i < 10; i++) {
//         document.write(`<li>${i} - ${qwerty2res1} , ${qwerty2res2}</li>`);
//
//     }
//     document.write(`</ul>`);
// }
//
// vives();
//
// function cheker(a, b) {
//     return typeof a === 'number' && typeof b === 'number';
// }

// function aaa(arr) {
//     for (const item of arr) {
//         console.log(item);
//     }
// }
//
// let wer = ['sdf', 'sfsdfsf', 555, true];
// aaa(wer)
//
// function aaq(arq) {
//     for (const item of arq) {
//         console.log(item);
//     }
// }
//
// aaq(['sdf', 'sfsdfsf', 555, true]);

// function f(a, b, acsh) {
//     switch (acsh) {
//         case '+':
//             return a + b;
//         case '-':
//             return a - b;
//         case '*':
//             return a * b;
//
//         default:
//             return nan;
//     }
//
// }
//
// console.log(f(100,50,'*'));
// let xe= (f(3,50,'*'));
// console.log(xe);
// document.write(`<div>**************</div>`);
// console.log('*********************');
//
// function erer() {
//     console.log(arguments);
// }
//
// erer(10, 20, 30);
//
// console.log('*********************');
//
// function erer1() {
//     let result = 0;
//     for (const argument of arguments) {
//         result = result + argument;
//     }
//     return result;
//
// }
//
// console.log(erer1(10, 20, 30, 1, 2, 3));


//
// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
//     b. заповнити його 50 непарними числами за допомоги циклу.
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
// 2. Вивести за допомогою console.log кожен третій елемен
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
//
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом -
// додати його в інший масив.
//

// let users = [10,12,11,3,5];
//
// for (let user of users) {
//     if ((user % 2) !== 0){
//         console.log(user);
//     }
//
// }

// let users = [10, -3, 11, 3, 5, 6, 9];

// for (let i = 0; i < users.length; i++) {
//     if ((users[i] % 2) === 0) {
//         users[i] = 'okten';
//     }
// }
// console.log(users);

// let arr = [];
// let val = 0;
// for (let i = 0; i < 10; i++) {
//     val = val + 3;
//      arr[i] = val;
//
//
// }
// console.log(arr);
//
// let arrq = [];
//
// for (let i = 0, y = 0; i < 10; i++, y +=2 ) {
//     arrq[i] = y;
// }
// console.log(arrq);

let users = [10,12,11,[3,5],0];

for (let user of users) {
    if (user !== 0){
        console.log(user);
    }

}



//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
//
//
//
//
//         - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
//
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати
// значення одного масиву в інший.
//
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.


function fu(...qwe) {
    let x = 0;
    for (let qweElement of qwe) {
        x = x + qweElement;
    }
    return x;
}
console.log(fu(10,30,30,1,3));

function fut(...qwe) {
    // let x = 0;
    for (let qweElement of qwe) {
        result = qwe[0] + qweElement;
    }
    return result;
}
console.log(fut(10,30,30,1,3));


// function fuw(ass) {
//     for (let qweElement of ass) {
//         ass[0] = qweElement + ass[0];
//     }
//     return ass[0];
//
// }
// let numb = [10, 30, 30,1,3];
// console.log(fuw(numb ));



function fuw1(ass) {
    let x= 0;
    for (let i = 0; i < ass.length; i++) {
        x = x + ass[0];
    }
    return x;
}
let numb1 = fuw1([10, 30, 30,1,3]);
console.log(numb1);


// let x= 100;
//  y=x+200;
// console.log(x,y);

// let user = {id:1};
// let  user2 = user;
// user2.id = 100500;
// console.log(user2);
// console.log(user);
//
// let arr = [];
// let arr2 = {};
// console.log(typeof arr,Array.isArray(arr));
// console.log(typeof arr2,Array.isArray(arr2));

// let arr = [];
// function foobar(array){
//     array[0] = 100500;
// }
// foobar(arr);
// console.log(arr);


// let x5 = 0;
// function qw(num) {
//     num= 100; //тут значення змінної помирає, тому нуль
// }
// qw(x5);
// console.log(x5);

// let calc = (a,b)=>{
//     return a+b;
// }
// console.log(10,20);


let calc2 = (a,b)=> a+b;
console.log(calc2(10,20));


let calc3 = (a,b)=> console.log(a+b);

(calc3(10,20));