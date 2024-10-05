let products = ["Яблоко", "Апельсин", "Банан"];
const productList = document.getElementById("productList");
const addProductButton = document.getElementById("addProduct");

function renderProducts() {
  productList.innerHTML = "";
  products.forEach(product => {
    const li = document.createElement("li");
    li.textContent = product;
    productList.appendChild(li);
  });
}

addProductButton.addEventListener("click", () => {
  const newProduct = prompt("Введите название товара:");
  if (newProduct) {
    products.push(newProduct);
    products.sort(); 
    renderProducts();
  } else {
    alert("Название товара не введено!");
  }
});

renderProducts();
