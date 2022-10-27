fetch("https://free-to-play-games-database.p.rapidapi.com/api/game?id=452")
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

let results = document.querySelector("#result");
fetch(
  "https://free-to-play-games-database.p.rapidapi.com/api/game?id=6",
  options
)
  .then((response) => response.json())
  .then((data) => {
    results.innerHTML += `<div class="result">
      <h2>${data.title}</h2>
      <p>${data.short_description}</p>
      <h3>Minimum System Requirements</h3>
      <p class ="min-req-para"><strong>Os: </strong>${data.minimum_system_requirements.os}<br>
      <strong>Graphics: </strong>${data.minimum_system_requirements.graphics}<br>
      <strong>Memory: </strong>${data.minimum_system_requirements.memory}<br>
      <strong>Processor: </strong>${data.minimum_system_requirements.processor}<br>
      <strong>Storage: </strong>${data.minimum_system_requirements.storage}</p>

      </div>`;
  });
