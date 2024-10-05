document.getElementById('deliveryForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const productName = document.getElementById('productName').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const distance = parseFloat(document.getElementById('distance').value);
  
    if (isNaN(weight) || isNaN(distance) || weight <= 0 || distance <= 0) {
      alert("Пожалуйста, введите корректные данные.");
      return;
    }

    const deliveryCost = (weight * distance) / 10;
  
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${productName}</td>
      <td>${weight}</td>
      <td>${distance}</td>
      <td>${deliveryCost.toFixed(2)}</td>
    `;
    document.getElementById('productList').appendChild(row);
  
    document.getElementById('deliveryForm').reset();
  });
  