function atmTransaction(cardInATM, availableAmount, transactionAmount) {
    if (cardInATM && transactionAmount <= availableAmount) {
        console.log("Operation in progress");
    } else {
        console.log("Operation rejected");
    }
}

const cardInATM = true;
const availableAmount = 500; 

const inputAmount1 = 1000; 
atmTransaction(cardInATM, availableAmount, inputAmount1); 

const inputAmount2 = 400; 
atmTransaction(cardInATM, availableAmount, inputAmount2); 

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

    const totalTax = vehiclePower * taxRate;

    console.log(`Tax amount: ${totalTax}`);
}

const inputPower1 = 110; 
calculateTax(inputPower1); 

const inputPower2 = 540; 
calculateTax(inputPower2); 
