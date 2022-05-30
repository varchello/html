// document.write(`<div>1<div>`);
// document.write(`<div>2<div>`);
// document.write(`<div>3<div>`);
// document.write(`<div>4<div>`);


/**
 * function qwer() {
 *     document.write(`<div>1<div>`);
 *     document.write(`<div>2<div>`);
 *     document.write(`<div>3<div>`);
 *     document.write(`<div>4<div>`);
 * }
 * qwer();
 *
 * qwer();
 *
 * qwer();
 *
 * let a1 = 10;
 * let b1 = 15;
 *
 * let a2 = 20;
 * let b2 = 18;
 */

// function squareP() {
//     let result = (a + b) * 2;
//     return result;
// }
// // squareP();
// let answer = squareP(a=10,b=20);
// console.log(answer);

// function qwerty() {
//     document.write(`<ul>`);
//     for (let i = 0; i < arguments.length; i++) {
//         let argument = arguments[i];
//         document.write(`<div>zxzxc<div>`);
//     }
//     document.write(`</ul>`);
// }

// function qwerty(a,b,c,d) {
//     document.write(`<ul>`);
//         document.write(`<div>${a} ${b} ${b}<div>`);
//         document.write(`<div>${c}  ${d}<div>`);
//     document.write(`</ul>`);
// }
// qwerty(200,205,300,305)
// qwerty(1,2,3,4.5)
//
// function qwerty2(size) {
//     document.write(`<div>`);
//     for (let i = 0; i < size; i++) {
//         document.write(`<div>errere ${i+1}</div>`);
//         document.write(`<div>hgjjhj </div>`);
//     }
//         document.write(`</div>`);
//     }
//
//     qwerty2(10);
//     qwerty2(20);

// function calc(a,b) {
//     let res = a+b;
//     return res;
//     }
// let qw = calc(10,3);
// console.log(qw);

// function calc2() {
//     for (const argument of arguments) {
//         console.log(argument);
//     }
// }
// calc2(10, 20, 30);
// calc2(1, 2, 3, 4, 5);

// function qwerty1() {
//     let res = 0;
//     for (const argument of arguments){
//         res = res + argument;
//     }
// return res;
// }
// let res1 = qwerty1 (10, 50, 60);
// let res2 = qwerty1 (20, 10, 30);
//
//     console.log(res1,res2);

function qwerty2(qw, a, b) {
    let uslovie;
    if (qw === '+' && cheker(a, b)) {
        uslovie = a + b;
    } else if (qw === '-') {
        uslovie = a - b;
    }
    return uslovie;
}

let qwerty2res1 = qwerty2('+', 10, 20);
let qwerty2res2 = qwerty2('-', 10, 20);

function vives() {
    document.write(`<ul>`);
    for (let i = 0; i < 10; i++) {
        document.write(`<li>${i} | ${qwerty2res1} , ${qwerty2res2}</li>`);
        document.write(`<div>*********</div>`);
    }
    document.write(`</ul>`);
}

vives();

function cheker(a, b) {
    return typeof a === 'number' && typeof b === 'number';
}



// let array = [267,306,108,50,66,-5,-1000];
// let minnum = Math.min.apply(Math, array);
// console.log(minnum);