"use strict";

const loadMealData = (searchText) => {
  const apiURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

  fetch(apiURL)
    .then((res) => res.json())
    .then((meal) => displayMealData(meal.meals));
};

const displayMealData = (meals) => {
  const mealsContainer = document.getElementById("meals-container");
  mealsContainer.innerHTML = "";
  meals.forEach((meal) => {
    const mealDiv = document.createElement("div");
    mealDiv.classList.add("col");
    mealDiv.innerHTML = `
        <div class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
            </div>
            <div class="card-body">
                <a href="${meal.strYoutube}" class="card-link" target="_blank">YouTube</a>
            </div>
        </div>
    `;
    mealsContainer.appendChild(mealDiv);
  });
};

const searchMeals = () => {
  const searchText = document.getElementById("search-field").value;
  if (searchText.length <= 2) {
    alert("At last 3 char need for search");
    return;
  } else {
    loadMealData(searchText);
  }
};
