// function setup() {
let grid = document.getElementById("grid");

const sizeSelectors = document.querySelectorAll(".size");

function gridSizeSettings(event) {
  // retrieve value from button clicked
  // and create a grid from that value
  const size = event.target.getAttribute("data-value");
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    let gridCell = document.createElement("div");
    gridCell.className = "grid-cell";
    grid.appendChild(gridCell);
  }
}

// add event listener to each size button
sizeSelectors.forEach((sizeSelector) => {
  sizeSelector.addEventListener("click", gridSizeSettings);
})

// add variable to keep track of whether or not drawing is happening
let isDrawing = false;

// add event listener to grid when drawing starts
grid.addEventListener("mousedown",() =>{
  isDrawing = true;
});
//add event listener to grid when drawing stops
grid.addEventListener("mouseup",() =>{
  isDrawing = false;
});

// add event listener to grid when mouse moves on the grid
grid.addEventListener("mousemove", (event) => {
  if (isDrawing) {
    const cell = event.target;
    if (cell.classList.contains("grid-cell")) {
      cell.style.backgroundColor = "black";
    }
  }
});
