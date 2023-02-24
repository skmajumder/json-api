"use strict";

const loadUsers = () => {
  const apiURL = "https://randomuser.me/api/?gender=female";
  fetch(apiURL)
    .then((response) => response.json())
    .then((data) => displayUser(data));
};

const displayUser = (user) => {
  console.log(user);

  const genderTag = document.getElementById("user-gender");
  const nameTag = document.getElementById("user-name");
  const countryTag = document.getElementById("user-country");
  const postcodeTag = document.getElementById("user-postcode");
  const imgTag = document.getElementById("user-img");

  genderTag.innerText = user.results[0].gender;
  nameTag.innerText = `${user.results[0].name.first} ${user.results[0].name.last}`;
  countryTag.innerText = user.results[0].location.country;
  postcodeTag.innerText = user.results[0].location.postcode;
  imgTag.src = user.results[0].picture.large;
};

loadUsers();
