


/* let element = document.querySelector('#search-heading-div')
let element1 = document.querySelector('#search-button-div')
let element2 = document.querySelector('#result')
let element3 = document.querySelector('chart-container')
let toggleBtn = document.querySelector('#toggle-mode')
 */

const colorModes = document.querySelectorAll('[name="mode"]');
//store the color theme in localstorage
const storeMode = function (mode) {
  localStorage.setItem("mode", mode);
}

const getMode = function () {
  const modeActive = localStorage.getItem("mode");
  colorModes.forEach((checkbox) => {
    if (checkbox.id === modeActive) {
      checkbox.checked = true;
    }
  })
}

colorModes.forEach(checkbox => {
  checkbox.addEventListener('click', () => {
    storeMode(checkbox.id)
  })
})

document.onload = getMode();