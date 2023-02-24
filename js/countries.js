"use strict";

const loadCountries = () => {
  const apiURL = "https://restcountries.com/v3.1/all";

  fetch(apiURL)
    .then((response) => response.json())
    .then((countries) => displayCountries(countries));
};

const displayCountries = (countries) => {
  const countriesContainer = document.getElementById("countries-container");
  let i = 1;
  countries.forEach((country) => {
    console.log(country);
    const countryArticle = document.createElement("article");
    countryArticle.classList.add("country");
    countryArticle.setAttribute("id", `country-${i}`);
    countryArticle.innerHTML = `
        <p>Country Name: <span id="country-name">${country.name.common}</span></p>
        <p>Capital: <span id="country-capital">${country.capital}</span></p>
    `;
    countriesContainer.appendChild(countryArticle);
    i++;
  });
};

loadCountries();
