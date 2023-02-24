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
                <button onclick="loadMealDetails2(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetailsModal">
                    See Details
                </button>
                <a href="${meal.strYoutube}" class="btn btn-primary" target="_blank">YouTube</a>
            </div>
            <!-- Button trigger modal -->
            
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

const loadMealDetails = (idMeal) => {
  const mealSearchUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;

  fetch(mealSearchUrl)
    .then((response) => response.json())
    .then((meal) => displayMealDetails(meal.meals[0]))
    .catch((error) => console.log(error));
};

// async and await
const loadMealDetails2 = async (idMeal) => {
  const mealSearchUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  try {
    const response = await fetch(mealSearchUrl);
    const meal = await response.json();
    displayMealDetails(meal.meals[0]);
  } catch (error) {
    console.log(error);
  }
};

const displayMealDetails = (mealInfo) => {
  const mealName = document.getElementById("mealDetailsModalLabel");
  const mealInstructions = document.getElementById("meal-instructions");

  mealName.innerText = mealInfo.strMeal;
  mealInstructions.innerText = mealInfo.strInstructions;
};

loadMealData("fish");
