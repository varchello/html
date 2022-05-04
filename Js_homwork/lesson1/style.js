// - Створити змінні. Присвоїти кожному з них значення:
// 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

// let a1 = 'hello';
// let a2 = 'owu';
// let a3 = 'com';
// let a4 = 'ua';
// let a5 = 10;
// let a6 = -999;
// let a7 = 123;
// let a8 = 1;
// let a9 = 3.14;
// let a10 = 2.7;
// let a11 = 16;
// let a12 = true;
// let a13 = false;
// console.log(a1);
// console.log(a2);
// console.log(a3);
// console.log(a4);
// console.log(a5);
// console.log(a6);
// console.log(a7);
// alert(a8);
// document.write(a9);
// console.log(a10);
// console.log(a11);
// console.log(a12);
// console.log(a13);

// - Створити об'єкт book з наступними полями :
// назва, (тип string)
// кількість сторінок (числовий тип),
// жанр (string)

// const book_a = {
//     name: 'Pet sematary',
//     pages: 373,
//     genre: 'horror'
// };
// console.log(book_a);

// - Створити об'єкт book з наступними полями :
// назва, (тип string)
// кількість сторінок (числовий тип),
// жанр (string)
// автори (тип - масив, кожен елемент масиву - це стрінга)

// const book_b = {
//     name: 'Pet sematary',
//     pages: 373,
//     genre: 'horror',
//     autors: ['Stefen King', 'Peter Straub']
// };
// console.log(book_b);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
// З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

// let fname = 'Varvara';
// let mname = 'Vasilivna';
// let lname = 'Bebeshko';
// let person = fname + ' ' + mname + ' ' + lname;
// console.log(person);

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям,
// По-Батькові та роками. та вивести в консоль

// let fname = prompt('enter you first name');
// let mname = prompt('enter you middle name');
// let birth = prompt('year of birth');
// let person = `${fname} ${mname} ${birth}`;
// console.log(person);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// let a = 100; let b = '100'; let c = true;

// let a = 100;
// let b = '100';
// let c = true;
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);

// - Створити масив об'єктів з назвою books з наступними полями
// - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт

// const books = [
//     {name1: 'Misery', pages: '320', genre: 'horror', autors: ['King', 'Bro']},
//     {name2: 'Thinner', pages: '253', genre: 'horror', autors: ['King', 'Peter', 'Bro']},
//     {name3: 'Insomnia', pages: '388', genre: 'horror novel', autors: ['King', 'Peter']}]
// console.log(books[0]);
// console.log(books[1]);
// console.log(books[2]);