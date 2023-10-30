// function setup() {
let canvas = document.getElementById("canvas");


//   for (let i = 0; i < 4096; i++) {
//     let canvasBg = document.createElement('div')
//     canvasBg.className = "canvas-bg" // add class to div
//     // div.innerText = i // add text to div
//     canvas.appendChild(canvasBg) // add div to grid
//   }

// // add event listener to each grid item
//   let canvasBg = document.getElementsByClassName("canvas-bg");
//   for (let cell of canvasBg) {
//     cell.addEventListener("mouseover", function(){
//       cell.style.backgroundColor = "black"; // change background color
//     });
//   }


// }



// setup();


function extraLarge() {
  for (let i = 0; i < 256; i++){
    let canvasXl = document.createElement('div')
  canvasXl.className = "canvas-xl" // add class to div
  canvas.appendChild(canvasXl) // add div to grid
  }

  // add event listener to each grid item
  let canvasXl = document.getElementsByClassName("canvas-xl");
  for (let cell of canvasXl) {
    cell.addEventListener("mouseover", function(){
      cell.style.backgroundColor = "black"; // change background color
    });
  }
}

document.getElementById("xl").addEventListener("click", extraLarge);


// for (let i = 0; i < 256; i++) {
//   let canvasBg = document.createElement('div')
//   canvasBg.className = "canvas-bg" // add class to div
//   canvas.appendChild(canvasBg) // add div to grid
// }

// // add event listener to each grid item
// let canvasBg = document.getElementsByClassName("canvas-bg");
//  for (let cell of canvasBg) {
//    cell.addEventListener("mouseover", function(){
//      cell.style.backgroundColor = "black"; // change background color
//    });
//  }
// });
