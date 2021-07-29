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
      parseNutrition(searchValue,data);
    })
    .catch(err => console.log(err));
  }

  function parseNutrition(search,data){

  let chol = data.totalNutrientsKCal.CHOCDF_KCAL;
  let fat = data.totalNutrientsKCal.FAT_KCAL;
  let prot =data.totalNutrientsKCal.PROCNT_KCAL;
  let energy =data.totalNutrientsKCal.ENERC_KCAL;
  console.log(search,chol,fat,prot,energy)
  let nutritionResults = document.getElementById('nutrition-results');
  nutritionResults.innerHTML = createNutritionCard(search,chol,fat,prot,energy);
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
  function createNutritionCard(search,cholesterol,fat,protein,energy){
    let card = `
    <div class="card-panel white blue-text">
        <h4 class="blue darken-4 center-align white-text">${search}</h4>
        <table class="highlight">
          <thead>
            <tr>
                <th>Type</th>
                <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${cholesterol.label}</td>
              <td>${cholesterol.quantity}</td>
            </tr>
            <tr>
              <td>${fat.label}</td>
              <td>${fat.quantity}</td>
            </tr>
            <tr>
              <td>${protein.label}</td>
              <td>${protein.quantity}</td>
            </tr>
            <tr>
              <td>${energy.label}</td>
              <td>${energy.quantity}</td>
            </tr>
          </tbody>
        </table>
      </div>
    `;
    return card;
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
