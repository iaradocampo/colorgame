const colors = ["rgb(218, 51, 255)", "rgb(51, 122, 255)", "rgb(255, 184, 51)", "rgb(119, 255, 51)", "rgb(255, 51, 119)", "rgb(255, 107, 51)"];
const square = document.querySelectorAll(".square");
const winner = document.getElementById("colorDisplay");
let pickedColor = colors[3];
let clickedColor;

for (let i = 0; i < colors.length; i++) {
    square[i].style.backgroundColor = colors[i];
    clickedColor = square[i].onclick;
}

if(clickedColor == pickedColor){
    
}

winner.style.color = pickedColor;