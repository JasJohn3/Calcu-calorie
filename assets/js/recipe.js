document.addEventListener('DOMContentLoaded', function() {
let hits = [    {
  "recipe": {
    "label": "Chicken Vesuvio",
    "image": "https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg",
    "source": "Serious Eats",
    "url": "http://www.seriouseats.com/recipes/2011/12/chicken-vesuvio-recipe.html"
  },
  "_links": {
    "self": {
      "href": "https://api.edamam.com/api/recipes/v2/b79327d05b8e5b838ad6cfd9576b30b6?type=public&app_id=53176885&app_key=%20dcc65d6f68a2bc26b969cc0afbd04c6d",
      "title": "Self"
    }
  }
},
{
  "recipe": {
    "label": "Chicken Paprikash",
    "image": "https://www.edamam.com/web-img/e12/e12b8c5581226d7639168f41d126f2ff.jpg",
    "source": "No Recipes",
    "url": "http://norecipes.com/recipe/chicken-paprikash/"
  },
  "_links": {
    "self": {
      "href": "https://api.edamam.com/api/recipes/v2/8275bb28647abcedef0baaf2dcf34f8b?type=public&app_id=53176885&app_key=%20dcc65d6f68a2bc26b969cc0afbd04c6d",
      "title": "Self"
    }
  }
},
{
  "recipe": {
    "label": "Baked Chicken",
    "image": "https://www.edamam.com/web-img/01c/01cacb70890274fb7b7cebb975a93231.jpg",
    "source": "Martha Stewart",
    "url": "http://www.marthastewart.com/318981/baked-chicken"
  },
  "_links": {
    "self": {
      "href": "https://api.edamam.com/api/recipes/v2/be3ba087e212f13672b553ecfa876333?type=public&app_id=53176885&app_key=%20dcc65d6f68a2bc26b969cc0afbd04c6d",
      "title": "Self"
    }
  }
},
{
  "recipe": {
    "label": "Catalan Chicken",
    "image": "https://www.edamam.com/web-img/4d9/4d9084cbc170789caa9e997108b595de.jpg",
    "source": "Bon Appetit",
    "url": "http://www.bonappetit.com/columns/breadwinner/article/how-to-get-your-kids-to-eat-sauce-let-them-cook-it-themselves"
  },
  "_links": {
    "self": {
      "href": "https://api.edamam.com/api/recipes/v2/2463f2482609d7a471dbbf3b268bd956?type=public&app_id=53176885&app_key=%20dcc65d6f68a2bc26b969cc0afbd04c6d",
      "title": "Self"
    }
  }
},
{
  "recipe": {
    "label": "Persian Chicken",
    "image": "https://www.edamam.com/web-img/8f8/8f810dfe198fa3e520d291f3fcf62bbf.jpg",
    "source": "BBC Good Food",
    "url": "http://www.bbcgoodfood.com/recipes/7343/"
  },
  "_links": {
    "self": {
      "href": "https://api.edamam.com/api/recipes/v2/4caf01683bf99ddc7c08c35774aae54c?type=public&app_id=53176885&app_key=%20dcc65d6f68a2bc26b969cc0afbd04c6d",
      "title": "Self"
    }
  }
},
{
  "recipe": {
    "label": "Chicken Stew",
    "image": "https://www.edamam.com/web-img/74b/74bfb16655500083c4af92bcf45889f7.jpg",
    "source": "Food52",
    "url": "https://food52.com/recipes/83097-chicken-stew"
  },
  "_links": {
    "self": {
      "href": "https://api.edamam.com/api/recipes/v2/a7c379c59775dd0c7c88710f7fecff81?type=public&app_id=53176885&app_key=%20dcc65d6f68a2bc26b969cc0afbd04c6d",
      "title": "Self"
    }
  }
},
{
  "recipe": {
    "label": "Chicken Liver Pâté",
    "image": "https://www.edamam.com/web-img/480/480000e79dbdd4648c4acd65630ff654.jpg",
    "source": "Saveur",
    "url": "http://www.saveur.com/article/Recipes/Classic-Chicken-Pate"
  },
  "_links": {
    "self": {
      "href": "https://api.edamam.com/api/recipes/v2/9ca0499f2ac7f1e4cae63bdf4671c1b3?type=public&app_id=53176885&app_key=%20dcc65d6f68a2bc26b969cc0afbd04c6d",
      "title": "Self"
    }
  }
},
{
  "recipe": {
    "label": "Roast Chicken",
    "image": "https://www.edamam.com/web-img/25f/25feccd2eed4722604be4a9ffa1ac768.jpg",
    "source": "San Francisco Gate",
    "url": "http://www.sfgate.com/food/recipes/detail.html?rid=18229&sorig=qs"
  },
  "_links": {
    "self": {
      "href": "https://api.edamam.com/api/recipes/v2/690c3797b4f56fc1e119c14096d651c5?type=public&app_id=53176885&app_key=%20dcc65d6f68a2bc26b969cc0afbd04c6d",
      "title": "Self"
    }
  }
},
{
  "recipe": {
    "label": "Kreplach (Chicken Dumplings)",
    "image": "https://www.edamam.com/web-img/4dd/4dd1c7a0d8b00e8929bd6babf0968ba2.jpg",
    "source": "Tasting Table",
    "url": "https://www.tastingtable.com/entry_detail/chefs_recipes/10154/Matzo_balls_watch_your_back.htm"
  },
  "_links": {
    "self": {
      "href": "https://api.edamam.com/api/recipes/v2/1817e7fccea9ae39d09c0e2c7fb86cb2?type=public&app_id=53176885&app_key=%20dcc65d6f68a2bc26b969cc0afbd04c6d",
      "title": "Self"
    }
  }
}]
  // hits = JSON.parse(hits);
console.log(hits);

const type = `public`;
const q = `chicken`;
const app_id ='53176885';
const app_key =`dcc65d6f68a2bc26b969cc0afbd04c6d`;
let originalURL =`https://api.edamam.com/api/recipes/v2?type=public&q=Chicken&app_id=53176885&app_key=%20dcc65d6f68a2bc26b969cc0afbd04c6d&imageSize=SMALL&field=label&field=image&field=source&field=url&field=ingredients&field=calories`






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
  console.log(dataArr);
}
function searchButton(e){
  e.preventDefault();
  let search = document.getElementById('search-recipe');
  console.log(search);
  let searchValue = search.value;
  recipeCall(searchValue);
}
// recipeCall();
// Initialize Tabs
var el = document.querySelector('.tabs');
var instance = M.Tabs.init(el, {});
let searchRecipeButton = document.getElementById('search-recipe-button');

searchRecipeButton.addEventListener('click',searchButton);

  var elems = document.querySelectorAll('.autocomplete');
  var instances = M.Autocomplete.init(elems, {});
  var elems = document.querySelectorAll('.parallax');
  var instances = M.Parallax.init(elems, {});
});