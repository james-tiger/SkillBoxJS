const products = ["Мышка", "Клавиатура", "Наушники"];
const newProducts = ["Монитор", "Принтер", "Флешка"];

products.push(...newProducts);

const productList = document.querySelector('.products');

products.forEach(product => {
  const li = document.createElement('li');
  li.textContent = product;
  productList.appendChild(li);
});

const numbers = [15, 3, 9, 27, 11, 5];

const allElements = document.querySelector('.all-elements');
allElements.textContent = numbers.join(', ');

const minButton = document.querySelector('.min');
minButton.addEventListener('click', () => {
  const minNumber = Math.min(...numbers);
  document.querySelector('.minNumber').textContent = minNumber;
});

const maxButton = document.querySelector('.max');
maxButton.addEventListener('click', () => {
  const maxNumber = Math.max(...numbers);
  document.querySelector('.maxNumber').textContent = maxNumber;
});
