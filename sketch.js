
let grid = document.getElementById("grid");
const gridSizeSlider = document.getElementById("grid-size-slider");
let colorPicker = document.getElementById("colorPicker");
let colorButton =document.getElementById("color-button")
let drawingMode = document.getElementById("drawing-mode");
let selectedColor;
let eraseButton = document.getElementById("erase");
const sizeSelectors = document.querySelectorAll(".size");
let clearButton = document.getElementById("clear");
let gridSizeDisplay = document.getElementsByClassName("grid-size-display")[0];
let rainbowMode = document.getElementById("rainbow-mode");

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

// add event listener to erase button
eraseButton.addEventListener("click", () => {
  eraseButton.style.backgroundColor = "black";
  eraseButton.style.color = "white";
  drawingMode.style.backgroundColor = "white";
  drawingMode.style.color = "black";
})

// add event listener to color picker
colorPicker.addEventListener("input", (event) => {
  selectedColor = event.target.value;

});

function randomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++){
   color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

colorButton.addEventListener("click", () => {
  colorPicker.click();
  rainbowMode.style.backgroundColor = "white";
  rainbowMode.style.color = "black";
  colorButton.style.backgroundColor = "#9562FF";
  colorButton.style.color = "white";
});

// add event listener to rainbow mode button
rainbowMode.addEventListener("click", () => {
  rainbowMode.style.backgroundColor = "#9562FF";
  rainbowMode.style.color = "white";
  colorButton.style.backgroundColor = "white";
  colorButton.style.color = "black";
})

gridSizeSlider.addEventListener("input", function(){
  const gridSize = gridSizeSlider.value;
  updateGrid(gridSize);
})


function updateGrid(size) {
  grid.innerHTML = ""; // Clear the existing grid

  // Set grid CSS properties based on the selected size
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  // Create grid cells
  for (let i = 0; i < size * size; i++) {
    const gridCell = document.createElement("div");
    gridCell.className = "grid-cell";
    grid.appendChild(gridCell);
  }

   gridSizeDisplay.innerHTML = `${size} x ${size}`;

}


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

  grid.style.gridTemplateColumns = "repeat(16, 1fr)";
  grid.style.gridTemplateRows = "repeat(16, 1fr)";
  gridSizeDisplay.innerHTML = "16 x 16";

  for (let i = 0; i < 16 * 16; i++) {
    let gridCell = document.createElement("div");
    gridCell.className = "grid-cell";
    grid.appendChild(gridCell);
  }

  drawingMode.style.backgroundColor = "black";
  drawingMode.style.color = "white";
  eraseButton.style.backgroundColor = "white";
  eraseButton.style.color = "black";
  colorButton.style.backgroundColor = "#9562FF";
  colorButton.style.color = "white";
  rainbowMode.style.backgroundColor = "white";
}

// add event listener to grid when mouse moves on the grid
grid.addEventListener("mousemove", (event) => {
  if (isDrawing || isErasing) {
    const cell = event.target;
    if (cell.classList.contains("grid-cell")) {
      if (isDrawing) {
        if (rainbowMode.style.backgroundColor === "rgb(149, 98, 255)") {
          cell.style.backgroundColor = randomColor();
        } else {
          cell.style.backgroundColor = selectedColor;
        }
      }else if (isErasing) {
        cell.style.backgroundColor = grid.style.backgroundColor;
      }

    }
  }
});
