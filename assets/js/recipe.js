const type = `public`;
const q = `chicken`;
const app_id ='53176885';
const app_key =`dcc65d6f68a2bc26b969cc0afbd04c6d`;
const diet=[`balanced`,`high-fiber`,`high-protein`,`low-carb`,`low-fat`,`low-sodium`];
const health = [`alcohol-free`, `immuno-supportive`, `keto-friendly`,`peanut-free`, `pescatarian`, `pork-free`, `vegetarian`,`vegan`,`wheat-free`];
const cuisineType = [`American`, `Asian`, `Italian`, `Indian`,`Nordic`];
const mealType =[`Breakfast`,`Dinner`, `Lunch`, `Snack`, `Teatime`];
const dishType =[`Desserts`,`Drinks`,`Main course`,`Salad`,`Sandwiches`,`Soup`]
let recipeAPIURL = `https://api.edamam.com/api/recipes/v2?type=public&q=Chicken&app_id=53176885&app_key=%20dcc65d6f68a2bc26b969cc0afbd04c6d&diet=high-protein&cuisineType=Asian&mealType=Dinner&dishType=Main%20course&calories=500&time=15&imageSize=REGULAR&field=label&field=image&field=source&field=ingredients&field=calories`

function recipeCall (){
  fetch(recipeAPIURL)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));
}

