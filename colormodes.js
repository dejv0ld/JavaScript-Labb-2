
const colorModes = document.querySelectorAll('[name="mode"]');
//store the color theme in localstorage
const storeMode = function (mode) {
  localStorage.setItem("mode", mode);
}

//Gets the color mode
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