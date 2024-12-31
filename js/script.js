// IMPORTS
const buttonAll = document.querySelector("#all");
const buttonMap = document.getElementById("map");
const buttonReduce = document.getElementById("reduce");
const buttonFilter = document.getElementById("filter");
const unordenedList = document.querySelector("ul");
const button = document.querySelector("button");

function clearList(listElement) {
    while (listElement.firstChild) {
        listElement.removeChild(listElement.firstChild);
    }
}

function createList({ name, vegan, price, src }) {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = src;
    img.alt = name;
    const p1 = document.createElement("p")
    p1.textContent = name;
    const p2 = document.createElement("p");
    p2.textContent = `R$ ${price.toFixed(2)}`;
    p2.className = "item-price";
    li.appendChild(img);
    li.appendChild(p1);
    li.appendChild(p2);
    return li
}

buttonAll.addEventListener("click", () => {
    clearList(unordenedList);
    menuOptions.forEach(element => {
        const list = createList(element)
        unordenedList.appendChild(list)
    });
});


buttonMap.addEventListener("click", () => {
    clearList(unordenedList);
    menuOptions.map((item,) => ({ ...item, price: item.price * 0.9}))
    .forEach(element => {
        const list = createList(element)
        unordenedList.appendChild(list)
    });
});

buttonReduce.addEventListener("click", () => {
    clearList(unordenedList);
    const sum = menuOptions.reduce((acc, {price}) => acc + price,0);
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = './assets/images/xsalada.jpeg';
    img.alt = "Burger";
    const p1 = document.createElement("p")
    p1.textContent = "Valor Total";
    const p2 = document.createElement("p");
    p2.textContent = `R$ ${sum.toFixed(2)}`;
    p2.className = "item-price";
    li.appendChild(img);
    li.appendChild(p1);
    li.appendChild(p2);
    unordenedList.appendChild(li);
});

buttonFilter.addEventListener("click", () => {
    clearList(unordenedList);
    menuOptions.filter(item => item.vegan && true )
    .forEach(element => {
        const list = createList(element)
        unordenedList.appendChild(list)
    });    
});