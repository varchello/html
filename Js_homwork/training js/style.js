// let menu = ['wwer', 'sdfsfd', 'sdfsf', 'dfgdgf', 'dfgdfg']
// document.write(`<div>`);
// for (let i = 0; i < menu.length; i++) {
//     document.write(`<div>${menu}</div>`);
//     document.write(`<div>${menu[i]}</div>`);
//
// }
// document.write(`</div>`);


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

// document.write(`<ul>`);

// for (let j = 0; j < products.length; j++) {
//     let product = products[j];
//     if (product.price > 10) {
//         // document.write(`<div>${products}</div>`);
//         // document.write(`<div>${products[j]}</div>`);
//         // document.write(`<div>${product.title}</div>`);
//         // document.write(`<div>${products.title} </div>`);
//         // document.write(`<div>${product.price} </div>`);
//         // document.write(`<div>${product.image} </div>`); неправильно!!!1
//         // document.write(`<div><img src="${product.image}" alt=""></div>`);
//         document.write(`<li class="target"> ${product.title} ${product.price} <img src="${product.image}" alt=""></li>`);
//     }
// }
// document.write(`</ul>`);
// console.log(products);

document.write(`<ul>`);
for (let product of products) {
            document.write(`<li class="target"> ${product.title} ${product.price} <img src="${product.image}" alt=""></li>`);

}


document.write(`</ul>`);




