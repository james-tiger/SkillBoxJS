const currentYear = 2024;

let user1Name = prompt("Введите имя первого пользователя:");
let user1Year = prompt("Введите год рождения первого пользователя:");

let user2Name = prompt("Введите имя второго пользователя:");
let user2Year = prompt("Введите год рождения второго пользователя:");

let user3Name = prompt("Введите имя третьего пользователя:");
let user3Year = prompt("Введите год рождения третьего пользователя:");

let user1Age = currentYear - parseInt(user1Year);
let user2Age = currentYear - parseInt(user2Year);
let user3Age = currentYear - parseInt(user3Year);

console.log(`1 '${user1Name}' ${user1Age}`);
console.log(`2 '${user2Name}' ${user2Age}`);
console.log(`3 '${user3Name}' ${user3Age}`);

let averageAge = (user1Age + user2Age + user3Age) / 3;
console.log(`Средний возраст пользователей: ${Math.round(averageAge)}`);
