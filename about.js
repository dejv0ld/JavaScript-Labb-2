"use strict";

//Fetching cities and outputs them on html page
const citiesDiv = document.querySelector("#cities-div");
let getCityBtn = document.querySelector('#show-cities')
function getCities() {
  fetch("https://avancera.app/cities/")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((city) => {
        citiesDiv.innerHTML += `<div class="cities-card" style="width: 18rem">
  <ul class="list-group list-group-flush">
    <li class="list-group-item cities-cards"><strong>ID: </strong><br>${city.id}</li>
    <li class="list-group-item cities-cards"><strong>City: </strong>${city.name}</li>
    <li class="list-group-item cities-cards"><strong>Population: </strong>${city.population}</li>
  </ul>
    </div>`;
      });
    });
}
getCityBtn.addEventListener('click', () => {
  getCityBtn.style.display = 'none'
})

const addCityBtn = document.querySelector("#add-city-button");
//Add city function
function addCity() {

  let selectNameInput = document.querySelector("#city-input");
  let nameInput = selectNameInput.value;
  let selectpopulationInput = document.querySelector("#pop-input");
  let popInput = parseFloat(selectpopulationInput.value);

  fetch(`https://avancera.app/cities/`, {
    body: JSON.stringify({ "name": nameInput, "population": popInput }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  })
    .then(response => response.json())
    .then(result => {
      console.log(result)
      refresh();
    })
}

const deleteBtn = document.querySelector('#del-city-btn')
//Delete function
function deleteCity() {
  let selectIdinput = document.querySelector('#del-input')
  let idInput = selectIdinput.value;
  fetch("https://avancera.app/cities/" + idInput, {
    method: 'DELETE'
  })
    .then(response => response.json())
    .then(result => {
      console.log(result)
      refresh();
    })
}

const updateCityBtn = document.querySelector('#patch-button')

function patchCity() {
  let selectIdinput2 = document.querySelector('#patch-id-input')
  let idInput2 = selectIdinput2.value
  let selectCityInput2 = document.querySelector('#patch-city-input')
  let cityInput2 = selectCityInput2.value
  let selectPopulationInput2 = document.querySelector('#patch-pop-input')
  let populationInput2 = parseFloat(selectPopulationInput2.value)

  fetch("https://avancera.app/cities/" + idInput2, {
    body: JSON.stringify({ "id": idInput2, "name": cityInput2, "population": populationInput2 }),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'PUT',
  })
    .then(response => {
      console.log(response)
      refresh();
    })
}

// Function refresh page
function refresh() {
  location.reload();
}

// "Show cities" button scrolls down to the results section
getCityBtn.addEventListener('click', () => {
  document.getElementById('scroll-div').scrollIntoView({ behavior: 'smooth' });
})

