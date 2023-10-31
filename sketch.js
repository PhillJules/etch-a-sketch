// function setup() {
let grid = document.getElementById("grid");


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


// function extraLarge() {
//   for (let i = 0; i < 256; i++){
//     let canvasXl = document.createElement('div')
//   canvasXl.className = "canvas-xl" // add class to div
//   canvas.appendChild(canvasXl) // add div to grid
//   }

//   // add event listener to each grid item
//   let canvasXl = document.getElementsByClassName("canvas-xl");
//   for (let cell of canvasXl) {
//     cell.addEventListener("mousedown", function(){
//       cell.style.backgroundColor = "black"; // change background color
//     });
//   }
// }

// function large() {
//   for (let i = 0; i < 1024; i++) {
//     let canvasLg = document.createElement('div')
//     canvasLg.className = "canvas-lg" // add class to div
//     canvas.appendChild(canvasLg) // add div to grid
//   }

//   // add event listener to each grid item
//   let canvasLg = document.getElementsByClassName("canvas-lg");
//   for (let cell of canvasLg) {
//     cell.addEventListener("mouseover", function() {
//       cell.style.backgroundColor = "black"; // change background color
//     });
//   }
// }

// function medium() {
//   for (let i = 0; i < 4096; i++){
//     let canvasMd = document.createElement('div')
//     canvasMd.className = "canvas-md" // add class to div
//     canvas.appendChild(canvasMd) // add div to grid
//   }

//   // add event listener to each grid item
//   let canvasMd = document.getElementsByClassName("canvas-md");
//   for (let cell of canvasMd) {
//     cell.addEventListener("mouseover", function(){
//       cell.style.backgroundColor = "black"; // change background color
//     });
//   }
// }


document.getElementById("md").addEventListener("click", medium);
document.getElementById("lg").addEventListener("click", large);
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
