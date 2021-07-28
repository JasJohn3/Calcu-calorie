document.addEventListener('DOMContentLoaded', function() {
  function nutritionCall(searchValue){
    let url = `https://api.edamam.com/api/nutrition-data?app_id=a3ce9026&app_key=79274cafb8b3bebc72850788c416ff40&nutrition-type=logging&ingr=egg
    `
  let params = new URLSearchParams({
    app_id :'a3ce9026',
    app_key :`79274cafb8b3bebc72850788c416ff40`,
    "nutrition-type": `logging`,
    ingr: searchValue

  });
  let recipeAPIURL =`https://api.edamam.com/api/nutrition-data?`
  let requestURL =recipeAPIURL +params
    fetch(requestURL)
    .then(response => response.json())
    .then(data => {
      parseNutrition(data);
    })
    .catch(err => console.log(err));
  }

  function parseNutrition(data){
 console.log(data);
  }
  function searchButton(e){
    e.preventDefault();
    let search = document.getElementById('search-nutrition');
    console.log(search);
    let searchValue = search.value;
    nutritionCall(searchValue);
    search.value = '';
    let nutritionResults = document.getElementById('nutrition-results');
    nutritionResults.innerHTML = '';
  }
  var elems = document.querySelectorAll('.parallax');
  var instances = M.Parallax.init(elems, {});
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
  var el = document.querySelector('.tabs');
  var instance = M.Tabs.init(el, {});
  let searchNutritionButton = document.getElementById('search-nutrition-button');
  searchNutritionButton.addEventListener('click', searchButton);
});
