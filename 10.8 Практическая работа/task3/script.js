const prices = [100, 500, 250, 750, 300];

const priceList = document.getElementById('priceList');
const sortAscButton = document.getElementById('sortAscBtn');
const sortDescButton = document.getElementById('sortDescBtn');

function displayPrices(pricesArray) {
  priceList.innerHTML = ''; 
  pricesArray.forEach(price => {
    const li = document.createElement('li');
    li.textContent = `${price} ₽`;
    priceList.appendChild(li);
  });
}

displayPrices(prices);

sortAscButton.addEventListener('click', function() {
  const sortedAsc = [...prices].sort((a, b) => a - b);
  displayPrices(sortedAsc);
});

sortDescButton.addEventListener('click', function() {
  const sortedDesc = [...prices].sort((a, b) => b - a);
  displayPrices(sortedDesc);
});
