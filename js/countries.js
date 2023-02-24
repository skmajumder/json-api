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
    const countryArticle = document.createElement("article");
    countryArticle.classList.add("country");
    countryArticle.setAttribute("id", `country-${i}`);
    countryArticle.innerHTML = `
        <p>Country Name: <span id="country-name">${
          country.name.common
        }</span></p>
        <p>Country Official Name: <span id="country-official-name">${
          country.name.official
        }</span></p>
        <p>Capital: <span id="country-capital">${
          country.capital ? country.capital[0] : "No Capital"
        }</span></p>
        <button onclick="loadCountriesDetails('${
          country.cca2
        }')">Show Details</button>
    `;
    countriesContainer.appendChild(countryArticle);
    i++;
  });
};

const loadCountriesDetails = (code) => {
  const apiCallURL = `https://restcountries.com/v3.1/alpha/${code}`;
  fetch(apiCallURL)
    .then((res) => res.json())
    .then((data) => console.log(data));
};

loadCountries();
