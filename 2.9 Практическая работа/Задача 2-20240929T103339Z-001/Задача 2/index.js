let product1 = prompt("Введите название первого товара:");
let price1 = parseFloat(prompt("Введите цену первого товара:"));
let count1 = parseInt(prompt("Введите количество первого товара:"));
console.log(product1, price1 * count1);

let product2 = prompt("Введите название второго товара:");
let price2 = parseFloat(prompt("Введите цену второго товара:"));
let count2 = parseInt(prompt("Введите количество второго товара:"));
console.log(product2, price2 * count2);

let product3 = prompt("Введите название третьего товара:");
let price3 = parseFloat(prompt("Введите цену третьего товара:"));
let count3 = parseInt(prompt("Введите количество третьего товара:"));
console.log(product3, price3 * count3);

let totalPurchase = (price1 * count1) + (price2 * count2) + (price3 * count3);
console.log("Сумма всей покупки:", totalPurchase);
