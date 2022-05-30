// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]


//     let str = 'dggddgdfgdfg';
// let subString = (str,n) =>{
//
//     return qqq;
// }
// console.log(cutString('наслаждение',6));

// subString(str,n){

// }
//
// let x = 'наслаждение';
//
// console.log(x.split('dfdf'))


// let numbers = 'наслаждение';
// console.log(numbers);
// let x0 = numbers.substring(0,3) => {
//     return (0,3);
// })

// console.log((x0);


// let nums = 'наслаждение';
// let sub = (str,n) =>{ str.substring(0,3);
//
// console.log(sub(nums,'5'));


// let nums = [11,21,3];
// let sortNums = (qqq,direction) =>{
//     if (direction === 'ascending'){
//         qqq.sort((a,b) => a-b);
//     }
//     else if (direction === 'descending'){
//         qqq.sort((a,b) => b-a);
//     }
//     return qqq;
// }
// console.log(sortNums(nums,'ascending'));
// console.log(sortNums(nums,'descending'));

// console.log(sortNums(nums,'descending'));

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із
// зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього
// регістру у верхній.
//
// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//
//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)
//
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до
// знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
// функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте
// над протоколом, з регулярками будете потім бавитись.
//
// - є масивlet coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
//
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
//
// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
//
// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
//
//
// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор
// - вісортувати книжки по кількості сторінок по зростанню
// let str3 = [53, 20, 8, -91];
// let str2 = ['oktWn', 'dfgfg', '23233'];
// let str = 'oktWn tEr 856';
//
// console.log(str.length);
// console.log(str[0]);
//
// console.log(str.concat(' 0000'));
//
// let concat = str.concat(' 0000');
// console.log(concat);
//
// let q = str.toUpperCase()
// console.log(q);
//
// console.log(str.toUpperCase());
//
// console.log(str.startsWith('ok'));
// console.log(str.toLowerCase().startsWith('ok'));
// // console.log(str2.toLowerCase().startsWith('ok'));
// console.log(str.charAt(3));
// // console.log(str2.charAt(0));
// console.log(str.indexOf('n'));
// console.log(str.includes('kt'));
// console.log(str.toLowerCase().replaceAll('t', '###'));
// let phone = '+38(067) 500-50-50'
// let obrez = phone.replaceAll('+38','')
//     .replaceAll('-','')
//     .replaceAll(')','')
//     .replaceAll('(','')
//     .replaceAll(' ','')
// console.log(obrez);
// console.log(str.substring(2, 5));
// console.log(str.concat(' fhhgfg'));
// console.log(str.valueOf());////////////////////////////////////////////////////////
// console.log(str.split('t',str.length));
// console.log(str.split('t',2));
//
// // console.log(Arr.isArray(str2));////////неправильно!!!!
// // console.log(array.isArray(str2));////////неправильно!!!!
// console.log(Array.isArray(str2));
// console.log(Array.isArray(str3));
//
// // console.log(str.push('yyy 25')); /////неправильно!!!!НЕ работает не на массивах
// // console.log(str.pop());/////неправильно!!!!НЕ работает не на массивах
//
//
// console.log(str2.push(['yyy', '25']));
// console.log(str2);
// console.log(str2.pop());
// console.log(str2);


// console.log(str3.push('gjgjhdfsfgg'));
// console.log(str3);
// console.log(str3.push(10, 15));
// console.log(str3);
// console.log(str3.pop());
// console.log(str3);
// console.log(str3.pop());
// console.log(str3);
// console.log(str3.unshift('hkui'));
// console.log(str3);
// console.log(str3.shift());
// console.log(str3);
// console.log(str3.join('...'));
// console.log(str2.join(','));
// console.log(str2);
// // console.log(str.join(','));////неправильно!!!!НЕ работает не на массивах
// console.log(str2.concat(1,2,5));
// console.log(str3.concat(1,2,5));
// console.log(str3.reverse());/////!НЕ работает не на массивах

// let str4 = [53, 20, 8, -91, 2, 3];/

///////ПРИМЕР ФОР ИЧА С ОБІЧНОЙ И СТРЕЛОЧНОЙ ФУНКЦИЕЙ//////// ВСЕ НИЖЕ КОЛБЕК ФУНКЦИИ!!!!
// let str7 = [{gad: 'oiu', cow: 55, zax: true},
//     {gad: 'uuu', cow: 21, zax: false},
//     {gad: 'ooo', cow: 10, zax: true}]
// str7.forEach(function (qwer) {
//     console.log(qwer.cow);
// })
// //
// // console.log('********* разделитель *************')
// //
// str7.forEach(qwer => console.log(qwer.cow))
// // //
// // // console.log('********* разделитель *************')
// // //
// str7.forEach((qwer, index) => {
//     console.log(qwer, index)
// })
// // // console.log('********* разделитель *************')
// // //
// // // ///////ПРИМЕР ПОЛНАЯ ЗАПИСЬ
// // // let reshenie = str7.filter(function (qwer) {
// // //         if (qwer.zax === true) {
// // //             return true
// // //         }
// // //         return false;
// // //     })
// // //
// // // console.log(reshenie);
// // // ///////ПРИМЕР УМЕНЬШЕН ЗАПИСЬ
// // // let reshenie2 = str7.filter(function (qwer) {
// // //   return !qwer.zax;
// // // })
// //
// // // console.log(reshenie2);
// // ///////ПРИМЕР ЕЩЕ МЕНЬШЕ ЗАПИСЬ
// // console.log(str7.filter(value => !value.zax));
// //
// // console.log(str7.find(value => value.cow >= 21));////////ВИВОДИТЬ ТІЛЬКИ ПЕРШИЙ ОБ'ЄКТ!!!!!до масиву краще filter
// // console.log(str5.find(value => value));////////ВИВОДИТЬ ТІЛЬКИ ПЕРШИЙ ОБ'ЄКТ!!!!!до масиву краще filter
//
// let str8 = [{gad: 'oiu', cow: 55, zax: true},
//     {gad: 'uuu', cow: 21, zax: false},
//     {gad: 'ass', cow: 11, zax: false},
//     {gad: 'wer', cow: 25, zax: false},
//     {gad: 'ooo', cow: 10, zax: true}]


// //////ДВА ВАРИАНТА ЗАПИСИ/////////ДОБАВИТИ ОБ'ЄКТ В МАСИВ!!!!
// // str7 змінюється, але це різні два масиви, а об'єкти однакові!!!
// console.log(str8.map((value,index) => {
//     value.novePole = index+1;
//     return value;
//
// }));
//
//
// let str8Nov = str8.map(function (value,index) {
//     value.novePole = index+1;
//     return value;
//
// });
// console.log(str8Nov);
//
// let str7Nov2 = str7.map((value,index) => {
//     let str7copy ={...value};                   //////ЦЕ ОПЕРАТОР СПРЕД!!!!!- зробити незалежний дублікат масиву!
//       str7copy.novObekt = index +1;        ///////    завдяки {...value} str7 не змінив об'єкти внутрі себе
//       return str7copy;
// });
// console.log(str7Nov2);
// console.log(str7);
//
// /////////////////////////////////////////////////////////////////
// console.log(str8.sort((q1, q2) => q1.cow - q2.cow)); /////сортує тільки по цифрах
let str8 = [{gad: 'oiu', cow: 55, zax: ['rty','erwer','dgffgdfg']},
    {gad: 'uuu', cow: 21, zax: ['rty','erwer','dgffgdfg']},
    {gad: 'ass', cow: 11, zax: ['rty','erwer']},
    {gad: 'wer', cow: 25, zax: ['rty','erwer','dgffgdfg']},
    {gad: 'ooo', cow: 10, zax: ['rty','erwer',]}]

console.log(str8.sort((a,b)=> {
    if(a.zax[0] > b.zax[1]){
        return 1;
    }if( b.zax[0] >a.zax[1]){
        return [-1];
    }
    return [0];
}));
// console.log(str8.sort((a,b)=> {
//     if(a.gad >b.gad){
//         return 1;
//     }if( b.gad >a.gad){
//         return -1;
//     }
//     return 0;
// }));
///////////////////////////////////////////////////////////////

// let red = str8.reduce((accum,user) => {
//     if(user.zax){
//         accum.tru.push(user);
//     }else {
//         accum.fal.push(user);
//     }
//     return accum;
// },{tru:[],fal:[]});
// console.log(red);
//
// let red1 = str8.reduce((accum,user) => {
//     if(user.zax){
//         accum[0].push(user);
//     }else {
//         accum[1].push(user);
//     }
//     return accum;
// },[[],[]]);
// console.log(red1);