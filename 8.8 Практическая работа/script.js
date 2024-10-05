const cars = {
    bmw: { name: 'BMW', wheels: 4, doors: 4, isStarted: true, hp: 300 },
    audi: { name: 'Audi', wheels: 4, doors: 4, isStarted: false, hp: 250 },
    mercedes: { name: 'Mercedes', wheels: 4, doors: 4, isStarted: true, hp: 350 },
  };
  
  function searchCar() {
    const carName = document.getElementById('carNameInput').value.toLowerCase();
    const result = cars[carName] ? cars[carName] : 'Car not found!';
    document.getElementById('carResult').textContent = typeof result === 'object' ? JSON.stringify(result, null, 2) : result;
  }
  
  function displayCarNames() {
    const carListElement = document.getElementById('carList');
    carListElement.innerHTML = ''; 
  
    for (let car in cars) {
      const li = document.createElement('li');
      li.textContent = cars[car].name;
      carListElement.appendChild(li);
    }
  }
  
  function createAndShowCar() {
    const newCar = createCar({ name: 'Haval', hp: 198 });
    document.getElementById('newCarResult').textContent = JSON.stringify(newCar, null, 2);
  }
  
  function createCar(additionalProperties) {
    const baseCar = {
      wheels: 4,
      doors: 4,
      isStarted: false,
    };
    return { ...baseCar, ...additionalProperties };
  }
  