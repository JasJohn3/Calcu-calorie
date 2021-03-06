document.addEventListener('DOMContentLoaded', function() {


function recipeCall(searchValue){
  let field = `&field=label&field=image&field=source&field=url&field=calories`;
let params = new URLSearchParams({
  type : `public`,
  q : searchValue,
  app_id :'53176885',
  app_key :`dcc65d6f68a2bc26b969cc0afbd04c6d`,
  imageSize: `SMALL`,
});
let recipeAPIURL =`https://api.edamam.com/api/recipes/v2?`
let requestURL =recipeAPIURL +params +field;
  fetch(requestURL)
  .then(response => response.json())
  .then(data => {
    parseRecipesData(data.hits);
  })
  .catch(err => console.log(err));
}
function parseRecipesData(dataArr){
  parseRecipes(dataArr);
}
function searchButton(e){
  e.preventDefault();
  let search = document.getElementById('search-recipe');
  console.log(search);
  let searchValue = search.value;
  recipeCall(searchValue);
  search.value = '';
  let recipeResults = document.getElementById('recipe-results');
  recipeResults.innerHTML = '';
}
function parseRecipes(array){
  let recipeResults = document.getElementById('recipe-results');
  array.forEach((item, index) =>{
    let col = document.createElement('div');
    col.classList.add('col');
    col.classList.add('s12');
    col.classList.add('m6');
    col.setAttribute('id', `recipe-col-${index}`);
    let image =item.recipe.image;
    let label = item.recipe.label;
    let source = item.recipe.source;
    let url = item.recipe.url;

    col.innerHTML = recipeCardCreator(image, label, source,url);
    recipeResults.append(col);
    setTimeout(()=>{
      recipeResults.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    },500);
  })
}
function recipeCardCreator(image, label, source,url){
 let card =
 `
 <div class="card green lighten hoverable">
    <div class="card-image">
      <img src=${image} alt="">
      <span class="card-title black">${label}</span>
    </div>
    <div class="card-content">
      <p>Source: ${source}</p>
    </div>
    <div class="card-action">
      <a target="_blank" href=${url} class="btn waves-effect waves-light green darken-4">
        website
      </a>
    </div>
</div>
 `;
 return card;
}
var el = document.querySelector('.tabs');
var instance = M.Tabs.init(el, {});
let searchRecipeButton = document.getElementById('search-recipe-button');

searchRecipeButton.addEventListener('click',searchButton);


  var elems = document.querySelectorAll('.parallax');
  var instances = M.Parallax.init(elems, {});
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});