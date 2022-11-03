"use strict";

//Fetching cities and outputs them on html page
//https://avancera.app/cities/

const citiesDiv = document.querySelector("#cities-div");
let getCityBtn = document.querySelector('#show-cities')
function getCities() {
  fetch("https://avancera.app/cities/")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((city) => {
        citiesDiv.innerHTML += `<div class="card" style="width: 18rem">
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><strong>ID: </strong><br>${city.id}</li>
    <li class="list-group-item"><strong>City: </strong>${city.name}</li>
    <li class="list-group-item"><strong>Population: </strong>${city.population}</li>
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
/* let id = prompt('Id')
let name1 = prompt('City')
let population1 = parseFloat(prompt('population number')) */
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
/*   if (isNaN(populationInput2)) {
    populationInput2 = null;
  }
 
  if (cityInput2.length > 0 && populationInput2.length < 1) {
    fetch(`https://avancera.app/cities/${idInput2}`, {
      body: JSON.stringify({ "name": cityInput2 }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'PATCH'
    })
      .then(response => {
        console.log(response)
      })
  } else if (populationInput2 !== null && cityInput2 === null) {
    fetch(`https://avancera.app/cities/${idInput2}`, {
      body: JSON.stringify({ "population": populationInput2 }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'PATCH'
    })
      .then(response => {
        console.log(response)
      })
  } else if (cityInput2 !== null && populationInput2 !== null) {
    fetch(`https://avancera.app/cities/${idInput2}`, {
      body: JSON.stringify({ "name": cityInput2, "population": populationInput2 }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'PATCH'
    })
      .then(response => {
        console.log(response)
      })
  }
 
} */


//Function refresh page
function refresh() {
  location.reload();

}
