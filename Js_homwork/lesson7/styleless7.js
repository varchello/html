// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// let usery3 = {
//     id: 10,
//     name: 'qwer',
//     surname: 'eshko',
//     email: 'asdf@com',
//     phone: +380502332050,
//     getfullName1: function () {
//         return usery3.id + ' ' + this.surname
//     }
// }
// console.log(usery3.getfullName1());
//
// function user(id,name,surname , email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// let mass =[];
// let user1 = new user(11,'asya','uieshko','788r@com',+380503887171);
// let user2 = new user(856,'aswea','eskhgko','wer@com',+380503887171);
// let user3 = new user(1,'adfgfga','eshko','wgg66r@com',+380503887171);
// let user4 = new user(9,'asya','serhko','wer@com',+380503887171);
// let user5 = new user(55,'asya','serhko','wer@com',+380503887171);
// let user6 = new user(8,'asya','serhko','wer@com',+380503887171);
// mass = [user1,user2,user3,user4,user5,user6];
// console.log(mass);
// //
// // // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// // //
// // // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// //
// let users = mass.filter(value => value.id % 2 === 0);
// console.log(users);
// let users2 = mass.sort((a,b)=> a.id - b.id);
// console.log(users2);
//
// class qw{
//     username ='asa';
//     age = 566;
// }
//
// let user = new qw();
// console.log(user);
//
//
//
// class qwe{
//     constructor(name,age) {
//         this.name = name;
//         this.age = age;
//     }
//     greeting(){
//         return 'hello my name is ' + this.name
//     }
// }
//
// let user2 = new qwe('kokos',555);
// console.log(user2);
// console.log(user2.greeting());
//
// console.log('--------------------------');
// class User{
//     constructor(name, age) {  ///// кнопки alt + Insert!!!
//         this.name = name;
//         this.age = age;
//     }
//
//     greeting(){
//         return 'hello my name is ' + this.name
//     }
// }
//
// let user = new User('kokos',555);
// console.log(user);
// console.log(user.greeting());
//
// console.log('--------------------------');
//
// class SuperUser  extends  User{
//     constructor(name, age,status) {
//         super(name, age,status);
//         this.status = status;
//     }
// }
// let superUser = new SuperUser('tosa',522,true)
// console.log(superUser);
// console.log(superUser.greeting());
//
// console.log('--------------------------');
//
// class SuperUser2  extends  User{
// email;
// car;
//
//     constructor(name, age, email, car) {
//         super(name, age);
//         this.email = email;
//         this.car = car;
//     }
// }
// let superUser2 = new SuperUser2('tyty',62,'dgdfgdf@com','Logan')
// console.log(superUser2);
// console.log(superUser2.greeting());
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі
// списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order
// по зростанню. (sort)

// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order
//     }
// }


// let mass = [];
// let client1 = new Client(133, 'fgh', 'fghhhhh', 'dfg@com', +3805032812, ['qw', 'rty', 'dfdgg', 'rty', 'dfdgg'])
// let client2 = new Client(84, 'fklh', 'fghhhhh', 'dfg@com', +3805032812, ['qw', 'rty', 'dfdgg'])
// let client3 = new Client(19, 'fweh', 'fghhhhh', 'dfg@com', +3805032812, ['qw', 'rty', 'dfdgg', 'dfdgg'])
// let client4 = new Client(2, 'fgh', 'fghhhhh', 'dfg@com', +3805032812, ['qw', 'rty', 'dfdgg'])
// let client5 = new Client(14, 'ffhh', 'fghhhhh', 'dfg@com', +3805032812, ['qw', 'rty', 'dfdgg'])
// let client6 = new Client(596, 'fgh', 'fghhhhh', 'dfg@com', +3805032812, ['qw', 'rty', 'dfdgg', 'dfdgg'])
// let client7 = new Client(14, 'fvv', 'fghhhhh', 'dfg@com', +3805032812, ['qw', 'rty'])
// let client8 = new Client(52, 'fgh', 'fghhhhh', 'dfg@com', +3805032812, ['qw', 'rty', 'dfdgg'])
// let client9 = new Client(1, 'fccch', 'fghhhhh', 'dfg@com', +3805032812, ['qw', 'rty'])
// let client10 = new Client(14, 'fgh', 'fghhhhh', 'dfg@com', +3805032812, ['qw', 'rty', 'dfdgg', 'rty'])
// mass = [client1, client2, client3, client4, client5, client6, client7, client8, client9, client10];
// console.log(mass);
//
//
// let users2 = mass.sort((a, b) => a.order.length - b.order.length);
// console.log(users2);


// let user = {
//     id: 10,
//     name: 'qwer',
//     surname: 'eshko',
//     email: 'asdf@com',
//     phone:  +380502332050 ,
//     getfullName: function () {
//         return this.id + ' '+ this.surname
//     },
//     wife: {
//         name: 'anna',
//         id: 10,
//     }
// }
// console.log(user.getfullName());
// console.log(user);


// function users() {
//     this.username = 'vasa';
//     this.age = 25;
// }
// let users1 = new users();
// console.log(users1);

// function user(name,age,skill) {
//     this.username = name;
//     this.age = age;
//     this.qwer = function (msg) {
//         return `${msg} my name is ${this.username}`
//     };
//     this.skill = skill;
// }
// let user1 = new user('asya',31,['java','js']);
// console.log(user1);
// let user2 = new user('petya',33,[1,6,8]);
// console.log(user2);
// console.log(user1.qwer('hi'));
// console.log(user2.qwer('це я'));
// console.log(user1.skill[1]);

// let q = [];

//

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник,
// рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

//////ЦЕ ВСЕ ЗА ДОПОМОГОЮ КЛАСУ!!!!!!!
// class Car {
//     constructor(model, year, producer, maxSpeed, engineCapacity) {
//         this.model = model;
//         this.year = year;
//         this.producer = producer;
//         this.maxSpeed = maxSpeed;
//         this.engineCapacity = engineCapacity;
//
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//         for (let CarKey in this) {
//             console.log(CarKey, this[CarKey]);}
//     }
//
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     increaseMaxSpeed(newSpeed) {
//         return this.maxSpeed + newSpeed;
//     }
//
//     // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     drive() {
//         return `їдемо зі швидкістю ${newCar.maxSpeed} на годину`;
//     }
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
//
//     changeYear (newValue){
//            return this.year = newValue;
//     }
//
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//     addDriver (driver){
//          return this.driver = driver;
//     }
//
//
// }
//
// let newCar = new Car('kengo', 1988, 'reno', 200, 1.8);
// // console.log(newCar);
//
// console.log('---------------------------------');
// console.log(newCar.increaseMaxSpeed(150));
// console.log(newCar.drive());
// console.log(newCar.changeYear(1975));
// console.log(newCar.addDriver('petya'));
// console.log(newCar);

//////ЦЕ ВСЕ ЗА ДОПОМОГОЮ ФУНКІЇ!!!!!!!
// function Car (model, year, producer, maxSpeed, engineCapacity) {
//         this.model = model;
//         this.year = year;
//         this.producer = producer;
//         this.maxSpeed = maxSpeed;
//         this.engineCapacity = engineCapacity;
//
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//         for (let CarKey in this) {
//             console.log(CarKey, this[CarKey]);}
//
//
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     this.increaseMaxSpeed = function (newSpeed) {
//         return this.maxSpeed + newSpeed;
//     }
//
//     // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     this.drive = function () {
//         return `їдемо зі швидкістю ${newCar.maxSpeed} на годину`;
//     }
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
//
//     this.changeYear = function (newValue){
//         return this.year = newValue;
//     }
//
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//     this.addDriver = function (driver){
//         return this.driver = driver;
//     }
//
//
// }
//
// let newCar = new Car('kengo', 1988, 'reno', 200, 1.8);
// // console.log(newCar);
//
// console.log('---------------------------------');
// console.log(newCar.increaseMaxSpeed(150));
// console.log(newCar.drive());
// console.log(newCar.changeYear(1975));
// console.log(newCar.addDriver('petya'));
// console.log(newCar);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    name;
    age;
    footsize;

    constructor(name, age, footsize) {
        this.name = name;
        this.age = age;
        this.footsize = footsize;
    }
}

let massCinderella = [];
let cind1 = new Cinderella('kengo', 1988, 1.2);
let cind2 = new Cinderella('almera', 2001, 2.0);
let cind3 = new Cinderella('benc', 2021, 2.2);
let cind4 = new Cinderella('logan', 1992, 1.6);
massCinderella = [cind1, cind2, cind3, cind4];
// console.log(massCinderella);
class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}
let prince = new Prince('qwer', 3000, 1.2);
// console.log(prince);

let para = (massCinderella, prince) => {
    for (const cindElement of massCinderella) {
        if (cindElement.footsize === prince.shoe){
            return cindElement.name;
        }
    }
}

console.log(para(massCinderella,prince));

let x = massCinderella.find(value => value.footsize === prince.shoe);
console.log(x.name);
