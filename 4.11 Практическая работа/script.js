function average(a, b, c) {
    return (a + b + c) / 3;
}

document.getElementById('averageButton').addEventListener('click', function () {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
    const averageResult = average(num1, num2, num3);
    document.getElementById('averageResult').textContent = `Average: ${averageResult}`;
});

function celsiusToFahrenheit(celsius) {
    return celsius * 1.8 + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) / 1.8;
}

document.getElementById('celsiusToFahrenheitButton').addEventListener('click', function () {
    const celsius = parseFloat(document.getElementById('celsiusInput').value);
    const result = celsiusToFahrenheit(celsius);
    document.getElementById('celsiusToFahrenheitResult').textContent = `Fahrenheit: ${result}`;
});

document.getElementById('fahrenheitToCelsiusButton').addEventListener('click', function () {
    const fahrenheit = parseFloat(document.getElementById('fahrenheitInput').value);
    const result = fahrenheitToCelsius(fahrenheit);
    document.getElementById('fahrenheitToCelsiusResult').textContent = `Celsius: ${result}`;
});

let count = 3;

document.getElementById('countButton').addEventListener('click', function () {
    count += 1;
    document.getElementById('countResult').textContent = `Count: ${count}`;
});

function totalSum(price, quantity, discount) {
    const totalPrice = price * quantity;
    const discountAmount = (totalPrice * discount) / 100;
    return totalPrice - discountAmount;
}

document.getElementById('totalPriceButton').addEventListener('click', function () {
    const price = parseFloat(document.getElementById('priceInput').value);
    const quantity = parseFloat(document.getElementById('quantityInput').value);
    const discount = parseFloat(document.getElementById('discountInput').value);
    const totalPrice = totalSum(price, quantity, discount);
    document.getElementById('totalPriceResult').textContent = `Total Price: ${totalPrice}`;
});
