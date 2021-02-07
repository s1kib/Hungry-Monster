const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const mealDetailsContent = document.querySelector('.meal-details-content');
const recipeCloseBtn = document.getElementById('recipe-close-btn');


// Event Listeners
searchBtn.addEventListener('click', function(e){
   e.preventDefault();
   console.log("clicked");
});