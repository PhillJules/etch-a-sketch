
let grid = document.getElementById("grid");
let colorPicker = document.getElementById("colorPicker");
let drawingMode = document.getElementById("drawing-mode");
let selectedColor;
let eraseButton = document.getElementById("erase");
const sizeSelectors = document.querySelectorAll(".size");
let clearButton = document.getElementById("clear");

// add variable to keep track of whether or not drawing is happening or erasing
let isDrawing = false;
let isErasing = false;

// add event listener to clear button
clearButton.addEventListener("click", () => {
  const cells = document.querySelectorAll(".grid-cell");
  cells.forEach((cell) => {
    cell.style.backgroundColor = grid.style.backgroundColor;
  })
})

// add event listener to drawing mode button
drawingMode.addEventListener("click", () => {
  drawingMode.style.backgroundColor = "black";
  drawingMode.style.color = "white";
  eraseButton.style.backgroundColor = "white";
  eraseButton.style.color = "black";
  isErasing = false;

})

// add event listener to color picker
colorPicker.addEventListener("input", (event) => {
  selectedColor = event.target.value;

})

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


// add event listener to erase button
eraseButton.addEventListener("click", () => {
  eraseButton.style.backgroundColor = "black";
  eraseButton.style.color = "white";
  drawingMode.style.backgroundColor = "white";
  drawingMode.style.color = "black";
})

// add event listener to grid when drawing starts
grid.addEventListener("mousedown",(event) =>{
  event.preventDefault();

  if (eraseButton.style.backgroundColor === "black") {
    isErasing = true;
  } else if (drawingMode.style.backgroundColor === "black") {
    isDrawing = true;
  }

});

//add event listener to grid when drawing stops
grid.addEventListener("mouseup",() =>{
  isDrawing = false;
  isErasing = false;
});

// set the default color
window.onload = () => {
  selectedColor = colorPicker.value;
}

// add event listener to grid when mouse moves on the grid
grid.addEventListener("mousemove", (event) => {
  if (isDrawing || isErasing) {
    const cell = event.target;
    if (cell.classList.contains("grid-cell")) {
      if (isDrawing) {
        cell.style.backgroundColor = selectedColor;
      }else if (isErasing) {
        cell.style.backgroundColor = grid.style.backgroundColor;
      }

    }
  }
});
