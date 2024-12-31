// IMPORTS
const buttonAll = document.querySelector("#all");
const buttonMap = document.getElementById("map");
const buttonReduce = document.getElementById("reduce");
const buttonFilter = document.getElementById("filter");
const unordenedList = document.querySelector("ul");
const list = document.querySelector("li");
const button = document.querySelector("button")

const menuOptionsa = [

    { name: 'X-Salada', price: 30, vegan: false, src: './assets/images/xsalada.jpeg' },

    { name: 'X-Bacon', price: 34, vegan: false, src: './assets/images/xbacon.png' },

    { name: 'X-Bacon Egg', price: 39, vegan: false, src: './assets/images/bacon-egg.png' },

    { name: 'Monstruoso', price: 50, vegan: false, src: './assets/images/monstruoso.png' },

    { name: 'Big Vegano', price: 55, vegan: true, src: './assets/images/xvegan.png' },

    { name: 'X-Vegan', price: 45, vegan: true, src: './assets/images/monstruoso-vegan.png' },

]

function clearList(list) {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}

function createListItem({ name, price, vegan, src }) {
    const li = document.createElement('li');
    li.className = vegan ? "isVegan" : "notVegan";
    const img = document.createElement('img');
    img.src = src;
    img.alt = name;
    const p1 = document.createElement('p');
    p1.textContent = name;
    const p2 = document.createElement('p');
    p2.textContent = `R$ ${price.toFixed(2)}`;
    p2.className = "item-price";
    li.appendChild(img);
    li.appendChild(p1);
    li.appendChild(p2);
    return li;
}

const discount = menuOptions.map(item => ({
    ...item,
    price: (item.price * 0.9),
}));

buttonAll.addEventListener("click", () => {
    clearList(unordenedList);
    menuOptions.forEach(item => {
        const listItem = createListItem(item);
        unordenedList.appendChild(listItem);
    });
});

buttonMap.addEventListener("click", () => {
    clearList(unordenedList);
    discount.forEach(item => {
        const listItem = createListItem(item);
        unordenedList.appendChild(listItem);
    });
});

buttonReduce.addEventListener("click", () => {
    clearList(unordenedList);

    const totalPrice = menuOptions.reduce((acc, { price }) => acc + price, 0);

    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = './assets/images/xsalada.jpeg';
    img.alt = "burger";
    const p1 = document.createElement('p');
    p1.textContent = "Valor Total";
    const p2 = document.createElement('p');
    p2.textContent = `R$ ${totalPrice.toFixed(2)}`;
    p2.className = "item-price";
    li.appendChild(img);
    li.appendChild(p1);
    li.appendChild(p2);

    unordenedList.appendChild(li);
});