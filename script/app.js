let pizzas = [];

let Pizza = class {
    constructor(img, id, precio, nombre, ingredientes) {
        this.img = img;
        this.id = id;
        this.price = precio;
        this.name = nombre;
        this.ingredients = ingredientes;
    }
};

let createPush = (img, id, precio, nombre, ingredientes) => {
    let nombreNormalice = nombre.trim().toLowerCase();
    let ingredientesNormalice = ingredientes.map((ingredientes)=>
    ingredientes.trim().toLowerCase()
    );
    return pizzas.push(
        new Pizza(img, id, precio, nombre, ingredientes)
    );
}

createPush(
    "/imgs/4quesos.jpg",
    1,
    1000,
    " Pizza Cuatro Quesos ",
    [" muzarella, parmesano, queso azul, cheddar "]
);

createPush(
    "/imgs/Fugazzeta.jpg",
    2,
    1200,
    " Pizza Fugazzeta Rellena ",
    [" muzarella, cebolla "]
);

createPush(
    "/imgs/Margherita.jpg",
    3,
    1400,
    " Pizza Margherita ",
    [  "muzarella, tomate, albhaca" ]
);

createPush(
    "/imgs/marinara.jpg",
    4,
    1600,
    " Pizza Marinara ",
    [  " salsa, aceito de oliva, albahaca, oregano " ]
);

createPush(
    "/imgs/muzarella.jpg",
    5,
    1800,
    " Pizza Muzarella ",
    [  " muzarella, salsa, oregano " ]
);

createPush(
    "/imgs/peperoni.jpg",
    6,
    2000,
    " Pizza Peperoni ",
    [  " muzarella, salsa, peperoni " ]
);

createPush(
    "/imgs/provolone.jpg",
    7,
    2200,
    " Pizza Provolone ",
    [  " muzarella, salsa, queso provolone, aceitunas negras " ]
);

let capitalize = (word) => {
    let firstLetter = word.charAt(0);
    let restWord = word.slice(1);
    return firstLetter + restWord;
};