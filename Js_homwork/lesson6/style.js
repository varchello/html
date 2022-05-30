// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';
console.log(str1.length, str2.length, str3.length);


let strs = ['hello world', 'lorem ipsum', 'javascript is cool'];

console.log(strs[0].length,strs[1].length,strs[2].length );

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let x = ' hello world';
console.log(x.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let x1 = '  HELLO WORLD';
console.log(x1.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
let x2 = ' hello world  ';
console.log(x2.trim());
//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
let str = 'Ревуть воли як ясла повні';
console.log(str.split(' '));
//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти
// в масиві на стрінгові.

let numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
console.log(numbers);
let x0 = numbers.map(value => {
    return value + '';
})

console.log(x0);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого
// до меньшого,або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//

let nums = [11,21,3];
let sortNums = (qqq,direction) =>{
    if (direction === 'ascending'){
        qqq.sort((a,b) => a-b);
    }
     else if (direction === 'descending'){
        qqq.sort((a,b) => b-a);
    }
    return qqq;
}
console.log(sortNums(nums,'ascending'));
console.log(sortNums(nums,'descending'));



//
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}];

let sort = (array) => array.sort((w, e) => e.monthDuration - w.monthDuration)
console.log(sort(coursesAndDurationArray));

let sort2 = (array) => array.filter(value => value.monthDuration >= 5);
console.log(sort2(coursesAndDurationArray));


// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

let cards = [{cardSuit: 'clubs', value: '9', color:'black'},
 {cardSuit: 'heart', value: '6', color:'red'},
 {cardSuit: 'diamond', value: '6', color:'red'},
 {cardSuit: 'spade', value: '6', color:'black'},
 {cardSuit: 'spade', value: 'ace', color:'black'},
 {cardSuit: 'clubs', value: 'ace', color:'black'},
 {cardSuit: 'clubs', value: 'queen', color:'black'},
 {cardSuit: 'clubs', value: 'king', color:'black'},
 {cardSuit: 'clubs', value: 'joker', color:'black'},
 {cardSuit: 'diamond', value: 'ace', color:'red'},
 {cardSuit: 'diamond', value: 'king', color:'red'},
 {cardSuit: 'diamond', value: 'joker', color:'red'},
 {cardSuit: 'clubs', value: '07', color:'black'},
 {cardSuit: 'clubs', value: '10', color:'black'}];

console.log(cards.find(value => value.cardSuit === 'spade' && value.value === 'ace'));
console.log(cards.filter(value => value.value === '6'));
console.log(cards.filter(value => value.color === 'red'));
console.log(cards.filter(value => value.cardSuit === 'diamond'));
console.log(cards.filter(value => value.cardSuit === 'clubs' && value.value >= '9'));





// let numbers1 = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
// console.log(numbers1);
// numbers1.forEach(function (item) {
//     console.log(item);
// })

// let numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
// console.log(numbers);
// numbers.forEach(function (item) {
//     console.log(item);
// })
//
//
//
// let x6 = numbers.filter((item,index) => {
//     return item % 2 === 0 && index % 2 !== 0
// });
// console.log(x6);
//
// let x7 = numbers.filter((item,index) => {
//     if (item % 2 === 0 && index % 2 !== 0){
//         return true;
//     }else {
//         return  false;
//     }
// });
// console.log(x7);

// let numbers2 = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
// console.log(numbers2);
// let xx = numbers2.map(value => {
//     return value *2;
// });
//
// console.log(xx);

// let nums1 = [
//     {name: 11, age: 21},
//     {name: 11, age: 2},
//     {name: 11, age: 21}
// ];
// nums1.forEach(value => console.log(value));