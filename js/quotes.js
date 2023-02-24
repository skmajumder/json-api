"use strict";

const loadQuotes = () => {
  const apiURl = "https://api.kanye.rest";
  fetch(apiURl)
    .then((response) => response.json())
    .then((data) => displayQuotes(data));
};

const displayQuotes = (data) => {
  const quotes = document.getElementById("quotes");
  quotes.innerHTML = data.quote;
  console.log(data);
};

loadQuotes();

document.getElementById("btn-quotes").addEventListener("click", loadQuotes);
