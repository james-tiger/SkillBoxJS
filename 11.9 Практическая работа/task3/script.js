const cardTextInput = document.getElementById('cardText');
const cardColorSelect = document.getElementById('cardColor');
const cardContent = document.getElementById('cardContent');
const card = document.getElementById('card');

cardTextInput.addEventListener('input', function() {
  cardContent.textContent = cardTextInput.value;
});

cardColorSelect.addEventListener('change', function() {
  const selectedColor = cardColorSelect.value;
  card.style.backgroundColor = selectedColor;  
  card.style.borderColor = selectedColor;     
});

cardTextInput.addEventListener('focus', function() {
  cardTextInput.style.borderColor = 'orange';
  cardTextInput.style.backgroundColor = '#fffbe6';
});

cardTextInput.addEventListener('blur', function() {
  cardTextInput.style.borderColor = '';
  cardTextInput.style.backgroundColor = '';
});
