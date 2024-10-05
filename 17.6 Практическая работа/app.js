const getItemsFromStorage = () => {
    return JSON.parse(localStorage.getItem('warehouseItems')) || [];
};

const addItemToStorage = (item) => {
    const items = getItemsFromStorage();
    items.push(item);
    localStorage.setItem('warehouseItems', JSON.stringify(items));
};

const removeItemFromStorage = (itemName) => {
    let items = getItemsFromStorage();
    items = items.filter(item => item.name !== itemName);
    localStorage.setItem('warehouseItems', JSON.stringify(items));
};

const renderTable = () => {
    const items = getItemsFromStorage();
    const tableBody = document.getElementById('warehouse-table-body');
    tableBody.innerHTML = '';

    items.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.shelf}</td>
            <td>${item.weight}</td>
            <td>${item.storageTime}</td>
            <td><button class="delete-btn" data-name="${item.name}">Удалить</button></td>
        `;
        tableBody.appendChild(row);
    });

    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', () => {
            const itemName = button.getAttribute('data-name');
            removeItemFromStorage(itemName);
            renderTable();
        });
    });
};

const sortTable = (column) => {
    const items = getItemsFromStorage();
    items.sort((a, b) => a[column] > b[column] ? 1 : -1);
    localStorage.setItem('warehouseItems', JSON.stringify(items));
    renderTable();
};

const validateForm = () => {
    const name = document.getElementById('name').value;
    const shelf = document.getElementById('shelf').value;
    const weight = document.getElementById('weight').value;
    const storageTime = document.getElementById('storageTime').value;

    if (!name || !shelf || !weight || !storageTime) {
        alert('Все поля должны быть заполнены');
        return false;
    }
    return true;
};

const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    const newItem = {
        name: document.getElementById('name').value,
        shelf: document.getElementById('shelf').value,
        weight: document.getElementById('weight').value,
        storageTime: document.getElementById('storageTime').value,
    };

    addItemToStorage(newItem);
    showWarehousePage();
};

const showPreloader = () => {
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'block';
};

const hidePreloader = () => {
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
};

const showWarehousePage = () => {
    hidePreloader();
    document.getElementById('add-item-page').style.display = 'none';
    document.getElementById('warehouse-page').style.display = 'block';
    renderTable();
};

const showAddItemPage = () => {
    hidePreloader();
    document.getElementById('warehouse-page').style.display = 'none';
    document.getElementById('add-item-page').style.display = 'block';
};

document.addEventListener('DOMContentLoaded', () => {
    hidePreloader();

    if (document.getElementById('warehouse-page')) {
        renderTable();
        document.querySelectorAll('th[data-sort]').forEach(th => {
            th.addEventListener('click', () => {
                const column = th.getAttribute('data-sort');
                sortTable(column);
            });
        });

        document.getElementById('add-item-btn').addEventListener('click', () => {
            showPreloader();
            setTimeout(showAddItemPage, 1000);
        });
    }

    const form = document.getElementById('add-item-form');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
});
