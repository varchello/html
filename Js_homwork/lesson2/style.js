// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3

// Вирішення_ВАРІАНТ_1
// let x = 0;
// if (x !== 0) {
//     console.log('yes')
// }
// if (x === 0) {
//     console.log('no')
// }

// Вирішення_ВАРІАНТ_2
// let x = +prompt("name the password");
// if (x === 0) {
//     console.log('no');
// }
// else if (x !== 0) {
//     console.log('yes');
// }


// - Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = +prompt('hour');
// if (time >= 0 && time <=15)
// {console.log('quarter one');}
// if (time > 15 && time <=30)
// {console.log('quarter two');}
// if (time > 30 && time <=45)
// {console.log('quarter three');}
// if (time > 45 && time <=59)
// {console.log('quarter four');}

// - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця
// потрапляє це число (у першу, другу чи третю).

// let day = prompt('What is decade');
// if (day >= 1 && day <= 10) {
//     console.log('decade one');
// }
// if (day > 10 && day <= 20) {
//     console.log('decade two');
// }
// if (day > 20 && day <= 31) {
//     console.log('decade three');
// }

// - Скласти розклад на тиждень за домопоги switch.
//     Користувач вводить порядковий номер дня тижня і
//     на екрані відображається інфа що заплановано на
//     цей день (можна замість плану на день, назву дня англійською).

// switch (+prompt('plans for week')) {
//     case 1:
//         console.log('monday');
//         break;
//     case 2:
//         console.log('tuesday');
//         break;
//     case 3:
//         console.log('wednesday');
//         break;
//     case 4:
//         console.log('thursday');
//         break;
//     case 5:
//         console.log('friday');
//         break;
//     case 6:
//         console.log('saturday');
//         break;
//     case 7:
//         console.log('sunday');
//         break;
//     default:
// }

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

// let x = +prompt('What is number one?');
// let y = +prompt('What is number two?');
// if (x >= y) {
//     console.log(x);
// } else if (y >= x) {
//     console.log(y);
// }
