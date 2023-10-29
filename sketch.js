function setup() {
let grid = document.getElementById("grid");

for (let i = 0; i < 256; i++) {
  let div = document.createElement('div')
  div.className = "grid-item" // add class to div
  div.innerText = i // add text to div
  grid.appendChild(div) // add div to grid
}

}

setup();
