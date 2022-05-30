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

let mass = [5, 6, 9, 10];

function f1(mass) {

}

for (let mass1 of mass) {
    console.log(mass1);
}


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

function f(array) {
    for (const arrayElement of array) {
        console.log(arrayElement);
    }
}

f(['sdfdsf', 10, 'ddfgdfg', 500, true, '=']);


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

// function fr(array) {
//     for (let item of array) {
//         if (item < array[0]) {
//             array[0] = item
//         }
//     }
//     return array[0];
// }
//
// let numbers = [-11, -12, -30, 50];
// console.log(fr(numbers ));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву
// та повертає його. Приклад [1,2,10]->13


function f(a) {
    let x = 0;
    for (const argument of arguments) {
        x = x + argument;
    }
    return x;
}

// let numbers = f([10, 30, 30]);//неправильно тут!!!!
let numbers = f(10, 30, 30, 1, 3);
console.log(f(numbers));


function fu(...qwe) {
    let x = 0;
    for (let qweElement of qwe) {
        x = x + qweElement;
    }
    return x;
}
console.log(fu(10,30,30,1,3));


// function fuw(ass) {
//     let x = ass[0];
//     for (let qweElement of ass) {
//         x = x + qweElement;
//     }
//     return x;
// }
// let numb = [10, 30, 30,1,3];
// console.log(fuw(numb ));

function fuw(ass) {
    let x= 0;
    for (let i = 0; i < ass.length; i++) {
        x = x + ass[0];
    }
    return x;
}
let numb = [10, 30, 30,1,3,6];
console.log(fuw(numb));