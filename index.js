"use strict";

const searchBtn = document.querySelector("#btn1");
const newSearchBtn = document.querySelector("#btn2");
const results = document.getElementById("result");

//Function that takes users category input and then fetch the data
function genreFunc() {
  //Fetching API key
  fetch("https://free-to-play-games-database.p.rapidapi.com/api/games")
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    });
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "6518d65955msh1c56e49639862c9p16c447jsnd4f06e89b32c",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  let selectElement = document.querySelector("#genre");
  let genreText = selectElement.value;

  //outputs all the games thats been fetched onto the html page
  fetch(
    "https://free-to-play-games-database.p.rapidapi.com/api/games?category=" +
    genreText,
    options
  )
    .then((response) => response.json())
    .then((data) => {
      data.forEach((game) => {
        results.innerHTML += `<div class="card" style="width: 18rem;">
      <img src="${game.thumbnail}" class="card-img-top" alt="thumbnail">
      <div class="card-body">
        <h5 class="card-title">${game.title}</h5>
        <p class="card-text">${game.short_description}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><strong>Platform: </strong>${game.platform}</li>
        <li class="list-group-item"><strong>Publisher: </strong>${game.publisher}</li>
        <li class="list-group-item"><strong>Release Date: </strong>${game.release_date}</li>
      </ul>
      <div class="card-body">
        <a href="${game.game_url}" class="card-link">Play for Free</a>
      </div>
    </div>`;
      });
    });
}

//Makes search button dissapear on click
searchBtn.addEventListener("click", () => {
  let selectElement = document.querySelector("#genre");
  selectElement.style.display = "none";
  let tags = document.querySelector("#tags");
  tags.style.display = "none";
  const searchBtn = document.querySelector("#btn1");
  searchBtn.style.display = "none";
});

//Function refresh page
function refresh() {
  location.reload();
}

//data.screenshots.[0]
//<img src = ${data.screenshots[0].image}
