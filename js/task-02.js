const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulElements = document.querySelector(`ul`);
const Elements = [];
for (let i = 0; i < ingredients.length; i += 1) {
  const ing = ingredients[i];

  const liElements = document.createElement(`li`);
  liElements.textContent = ing;
  liElements.classList.add(`item`);

  Elements.push(liElements);

}

ulElements.append(...Elements);