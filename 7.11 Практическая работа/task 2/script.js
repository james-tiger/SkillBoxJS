let heights = [150, 160, 170, 180, 155];
const heightList = document.getElementById("heightList");
const addHeightButton = document.getElementById("addHeight");
const filterHeightButton = document.getElementById("filterHeight");

function renderHeights(filteredHeights = heights) {
  heightList.innerHTML = "";
  filteredHeights.forEach(height => {
    const li = document.createElement("li");
    li.textContent = `${height} см`;
    heightList.appendChild(li);
  });
}

addHeightButton.addEventListener("click", () => {
  const newHeight = prompt("Введите рост ученика:");
  if (newHeight) {
    heights.push(Number(newHeight));
    renderHeights();
  } else {
    alert("Рост не введён!");
  }
});

filterHeightButton.addEventListener("click", () => {
  const minHeight = prompt("Введите минимальный рост для фильтрации:");
  if (minHeight) {
    const filteredHeights = heights.filter(height => height >= Number(minHeight));
    renderHeights(filteredHeights);
  } else {
    renderHeights();
  }
});

renderHeights();
