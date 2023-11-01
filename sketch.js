let grid = document.getElementById("grid");
let colorPicker = document.getElementById("colorPicker");
let selectedColor;

const sizeSelectors = document.querySelectorAll(".size");

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

// add variable to keep track of whether or not drawing is happening or erasing
let isDrawing = false;
let isErasing = false;

// select the erase button by id
let eraseButton = document.getElementById("erase");

// add event listener to erase button
eraseButton.addEventListener("click", () => {
  isErasing = true;
  isDrawing = false;
  alert("Click on the canvas to start drawing");
  eraseButton.style.backgroundColor = "black";
  eraseButton.style.color = "white";
})

// add event listener to grid when drawing starts
grid.addEventListener("mousedown",(event) =>{
  isDrawing = true;
  event.preventDefault();

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
  if (isDrawing) {
    const cell = event.target;
    if (cell.classList.contains("grid-cell")) {
      cell.style.backgroundColor = selectedColor;
    }
  }
});

// Add a mouse move event listener to erase on the grid when the mouse is moved
grid.addEventListener("mousemove", (event) => {
  if (isErasing) {
    const cell = event.target;
    if (cell.classList.contains("grid-cell")) {
      cell.style.backgroundColor = grid.style.backgroundColor; // Set cell background to match the grid background
    }
  }
});
