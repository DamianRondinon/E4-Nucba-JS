const cardPizza = (pizza) => {
  const { name, price, img, ingredients } = pizza;
  return `<div class="card">
    <div class="card_header">
    <img class="card_img" src="${img}" srcset="">
    </div>
    <div class="card_content">
        <h2 class="card_title">${capitalize(name)}</h2>
        <span class="card_price">$${price}</span>
        <h3 class="card_title_ingredients">Ingredientes:</h3>
        <p class="card_text">${ingredients.join(",")}</p>
    </div>
</div>`;
};
