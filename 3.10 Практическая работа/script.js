function atmTransaction(cardInATM, availableAmount, transactionAmount) {
    if (cardInATM && transactionAmount <= availableAmount) {
        return "Operation in progress";
    } else {
        return "Operation rejected";
    }
}

document.getElementById("atmButton").addEventListener('click', () => {
    const cardInATM = document.getElementById("cardInATM").value === "true";
    const availableAmount = Number(document.getElementById("availableAmount").value);
    const transactionAmount = Number(document.getElementById("transactionAmount").value);

    if (!Number.isNaN(availableAmount) && !Number.isNaN(transactionAmount)) {
        const result = atmTransaction(cardInATM, availableAmount, transactionAmount);
        document.getElementById("atmResult").textContent = result;
    } else {
        document.getElementById("atmResult").textContent = "Please enter valid numbers!";
    }
});

function calculateTax(vehiclePower) {
    let taxRate;

    if (vehiclePower <= 100) {
        taxRate = 12;
    } else if (vehiclePower <= 125) {
        taxRate = 25;
    } else if (vehiclePower <= 150) {
        taxRate = 35;
    } else if (vehiclePower <= 175) {
        taxRate = 45;
    } else if (vehiclePower <= 200) {
        taxRate = 50;
    } else if (vehiclePower <= 225) {
        taxRate = 65;
    } else if (vehiclePower <= 250) {
        taxRate = 75;
    } else {
        taxRate = 150;
    }

    return vehiclePower * taxRate;
}

document.getElementById("taxButton").addEventListener('click', () => {
    const vehiclePowerInput = document.getElementById("vehiclePower");
    const inputPower = Number(vehiclePowerInput.value);

    if (!Number.isNaN(inputPower)) {
        const totalTax = calculateTax(inputPower);
        document.getElementById("taxResult").textContent = `Tax amount: ${totalTax} RUB`;
    } else {
        document.getElementById("taxResult").textContent = "Please enter a valid number!";
    }
});
