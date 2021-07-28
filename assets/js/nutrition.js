document.addEventListener('DOMContentLoaded', function() {
  function nutritionCall(searchValue){
    let url = `https://api.edamam.com/api/nutrition-data?app_id=a3ce9026&app_key=79274cafb8b3bebc72850788c416ff40&nutrition-type=logging&ingr=egg
    `
    let field = `&field=label&field=image&field=source&field=url&field=calories`;
  let params = new URLSearchParams({
    app_id :'a3ce9026',
    app_key :`79274cafb8b3bebc72850788c416ff40`,
    "nutrition-type": `logging`,
    ingr: `chicken`

  });
  let recipeAPIURL =`https://api.edamam.com/api/recipes/v2?`
  let requestURL =recipeAPIURL +params +field;
    fetch(requestURL)
    .then(response => response.json())
    .then(data => {
      parseRecipesData(data);
    })
    .catch(err => console.log(err));
  }

  function parseNutrition(data){
 console.log(data);
  }
  var elems = document.querySelectorAll('.parallax');
  var instances = M.Parallax.init(elems, {});
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
  var el = document.querySelector('.tabs');
  var instance = M.Tabs.init(el, {});
  let searchRecipeButton = document.getElementById('search-nutrition-button');
});
