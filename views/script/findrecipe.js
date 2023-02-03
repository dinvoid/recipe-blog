/*
const searchButton = document.querySelector('#search');
searchButton.addEventListener('click', async () => {
  const name = document.querySelector('#search-input').value;
  recipes = await getRecipes(name);
  displayRecipes();
});

// recipe.js
async function getRecipes(name, limit = 10) {
  const response = await fetch(`/recipes?name=${name}&limit=${limit}`);
  return response.json();
}

let recipes = [];
let currentLimit = 10;

async function displayRecipes() {
  recipes = await getRecipes(name, currentLimit);
  // code to display the recipes on the page
  let recipeHTML = '';
  recipes.forEach(recipe => {
    recipeHTML += `
      <div class="recipe">
        <h3>${recipe.recipename}</h3>
        <p>${recipe.description}</p>
      </div>
    `;
  });
  document.querySelector('#recipes-container').innerHTML = recipeHTML;
}

  */

const searchButton = document.querySelector('#search');
searchButton.addEventListener('click', async () => {
  ok();
});
function ok(){
 alert('ok  gotchooooio');
}