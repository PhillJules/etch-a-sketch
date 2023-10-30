function setup() {
let canvas = document.getElementById("canvas");

  for (let i = 0; i < 4096; i++) {
    let canvasBg = document.createElement('div')
    canvasBg.className = "canvas-bg" // add class to div
    // div.innerText = i // add text to div
    canvas.appendChild(canvasBg) // add div to grid
  }

// add event listener to each grid item
  let canvasBg = document.getElementsByClassName("canvas-bg");
  for (let cell of canvasBg) {
    cell.addEventListener("mouseover", function(){
      cell.style.backgroundColor = "black"; // change background color
    });
  }


}



setup();
