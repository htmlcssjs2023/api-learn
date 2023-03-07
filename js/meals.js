
const loadMeals = (search) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    // ${search} is the dynamic field
     fetch(url) // fetch url 
    .then(res => res.json()) // convert object into json formate  and received promise.
    .then(data => displayMeals(data.meals)) // call promise and return
}
// This is arrow function with one parameter 'meals'
const displayMeals = meals =>{ 
    const mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerHTML = ''; // remove previous search field.

    // forEach() take one function as parameter.
    meals.forEach(meal => {
        console.log(meal);
        const mealCol = document.createElement('div');
        mealCol.classList.add('col');
        mealCol.innerHTML = `
                <div onclick="loadMealDetails(${meal.idMeal})" class="card">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                     </div>
                </div>
        `;
        mealsContainer.appendChild(mealCol);
    });

}

// Below function take of  input field value and pass value of field throuh the loadMeals()
const searchFood = () =>{
    const searchField = document.getElementById('search-field'); // take of input field
    const searchText = searchField.value; // set input field value into searchText variable
   loadMeals(searchText); // pass input field value throuh the loadMeals()
   searchField.value = ''; // clear search Input Filed previous value
}

/**
 * 1. When you click on the each card then return details of card info.
 * Each meal have unique id.
 */
const loadMealDetails = (idMeal) =>{
    // console.log('get id meal', idMeal);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetails(data.meals[0]))

}
const displayMealDetails = meal =>{
    const detailContainer = document.getElementById('detail-container');
    detailContainer.innerHTML = ``;
    const mealDiv = document.createElement('div');
    mealDiv.classList.add('card');
    mealDiv.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    `;
    detailContainer.appendChild(mealDiv);
	
}
// loadMeals('');