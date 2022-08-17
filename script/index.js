const form = document.forms.pizzasForm;
const formSearch = form.elements.name;
const PizzasContainer = document.querySelector(".card_container");
document.addEventListener("DOMContentLoaded",() => {
form.addEventListener("submit", searchPizza);
createCard(getLocal("pizzas"));
});

const getLocal = (item) => {
    return JSON.parse(localStorage.getItem(item));
};

const updateLocal = (item, elements) => {
    return localStorage.setItem(item, JSON.stringify(elements));
};

const searchPizza = (e) => {
    e.preventDefault();
    const pizzaValue = formSearch.value;
    if (pizzaValue === "") {
        return alert("Ingrese una pizza");
    }

    if (
        !pizzas.some((pizzas) => pizzas.name.includes(pizzaValue.toLowerCase()))
    ) {
        form.reset();
        return alert("No tenemos esa pizza");
    }
    let pizzasFilter = pizzas.filter((pizza) =>
    pizza.name.includes(pizzaValue.toLowerCase())
    );
    updateLocal("pizzas", pizzasFilter);
    createCard(pizzasFilter);
    form.reset();
};

const createCard = (pizzaArr) => {
    return (PizzasContainer.innerHTML = pizzaArr.map((pizza) =>
      cardPizza(pizza)
    ));
}