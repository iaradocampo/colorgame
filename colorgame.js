const squares = document.querySelectorAll(".square");
const winner = document.getElementById("colorDisplay");
const message = document.getElementById("message");
const resetButton = document.getElementById("reset");
const difficultyButtons = document.querySelectorAll(".difficulty");
let colors;
let pickedColor;
let numberOfSquares = 6;
let isResetListenerSet = false;

function randomColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function generateRandomColors(num){
    const arrayColors = [];
    for (let i = 0; i < num; i++) {
        arrayColors.push(randomColor());
    }
    return arrayColors;
}

function changeColors(color){
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

function reset(){
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    message.textContent = "";
    winner.style.color = "white";
    resetButton.textContent = "New colors";
    for (let i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else{
            squares[i].style.display = "none";
        }
    }
    if(!isResetListenerSet){
        resetButton.addEventListener("click", reset);
        isResetListenerSet = true;
    }

}

function difficultyButtonEvent(){
    difficultyButtons.forEach(button =>{
        button.addEventListener("click", function(){
            difficultyButtons.forEach(btn => btn.classList.remove("selected"));
            this.classList.add("selected");
            numberOfSquares = this.textContent === "EASY" ? 3: 6;
            reset()
        })
    });
}

function squaresButtonEvent(){
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function(){
            const clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor){
                message.textContent = "Correct!";
                winner.style.color = clickedColor;
                changeColors(clickedColor);
                resetButton.textContent = "Play again?";
                resetButton.style.display = "inline-block";
            } else{
                message.textContent = "Try again!";
                this.style.backgroundColor = "rgb(35, 35, 35)"
            }
        });
    }
}

function init(){
    difficultyButtonEvent();
    squaresButtonEvent();
    reset();
}

init();