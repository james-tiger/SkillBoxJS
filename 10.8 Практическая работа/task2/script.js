const addItemButton = document.getElementById('addItemBtn');
const removeItemButton = document.getElementById('removeItemBtn');
const itemList = document.getElementById('itemList');

addItemButton.addEventListener('click', function() {
  const li = document.createElement('li');
  li.textContent = 'Новый элемент списка';
  itemList.appendChild(li);
});

removeItemButton.addEventListener('click', function() {
  const lastItem = itemList.lastElementChild;
  if (lastItem) {
    itemList.removeChild(lastItem);
  }
});
