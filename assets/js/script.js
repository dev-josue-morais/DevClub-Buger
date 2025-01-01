// IMPORTS
const buttonAll = document.querySelector("#all");
const buttonMap = document.getElementById("map");
const buttonReduce = document.getElementById("reduce");
const buttonFilter = document.getElementById("filter");
const unordenedList = document.querySelector("ul");

function renderList(items) {
    clearList(unordenedList);
    items.forEach(item => unordenedList.appendChild(createList(item)));
}

function clearList(listElement) {
    while (listElement.firstChild) {
        listElement.removeChild(listElement.firstChild);
    }
}

function createList({ name, price, src }) {
    const li = document.createElement("li");
    li.innerHTML = `
        <img src="${src}" alt="${name}">
        <p>${name}</p>
        <p class="item-price">R$ ${price.toFixed(2)}</p>
    `;
    return li;
}

function showAll() {
    renderList(menuOptions);
}

function applyDiscount() {
    const discountedItems = menuOptions.map(item => ({ ...item, price: item.price * 0.9 }));
    renderList(discountedItems);
}

function showTotalPrice() {
    const total = menuOptions.reduce((acc, { price }) => acc + price, 0);
    const totalItem = createList({
        name: "Valor Total",
        vegan: false,
        price: total,
        src: "./assets/images/xsalada.jpeg",
    });
    clearList(unordenedList);
    unordenedList.appendChild(totalItem);
}

function showVeganItems() {
    const veganItems = menuOptions.filter(item => item.vegan);
    renderList(veganItems);
}

// Event Listeners
buttonAll.addEventListener("click", showAll);
buttonMap.addEventListener("click", applyDiscount);
buttonReduce.addEventListener("click", showTotalPrice);
buttonFilter.addEventListener("click", showVeganItems)