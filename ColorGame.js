var pickedColor;
var colorNum=6;
var colors=[];
//select color display 
var colorDisplay = document.querySelector("#colorDisplay");
//select reset button
var resetBtn = document.querySelector("#newColors");
//select message text
var messageText = document.querySelector("#message");
// select game mode buttons
var gameMode = document.querySelectorAll(".mode");
// select colors
var squares = document.querySelectorAll(".square");
//select h1
var h1= document.querySelector("#h1")


init();

 function init(){
 	SquareSetUp();
 	modeBtns();
 	reset();
 	
 }

 function SquareSetUp(){
 	for (var i = 0; i < squares.length; i++) {
 		squares[i].addEventListener("click", function(){
 			var clickedColor=this.style.backgroundColor;
 			if(clickedColor===pickedColor){
 				h1.style.backgroundColor=pickedColor;
 				changeColors(pickedColor)
 				messageText.textContent="Correct"
 				resetBtn.textContent="Play Again"
 			}else{
 				this.style.backgroundColor="#232323";
 				messageText.textContent="Try Again"
 			}
 		});
 	}
 }
 function changeColors(color){
 	for (var i = 0; i < squares.length; i++) {
 		squares[i].style.backgroundColor=color;
 	}
 }
 function colorArray(num){
	for (var i = num-1; i >=0; i--) {
		colors[i]=colorRandomiser();
	}
}
function colorPicker(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];


}
 function colorRandomiser(){
 	var r = Math.floor(Math.random()* 256);
 	var g = Math.floor(Math.random()* 256);
 	var b = Math.floor(Math.random()* 256);
 	return "rgb("+r+", "+g+", "+b+")"
 }

function reset(){
	colors=[];
	resetBtn.textContent="New Colors"
	colorArray(colorNum)
	pickedColor=colorPicker();
 	colorDisplay.textContent=pickedColor;
 	messageText.textContent="";
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display="block";
			squares[i].style.backgroundColor=colors[i];
		}else{
			squares[i].style.display="none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}

resetBtn.addEventListener("click", reset);
function modeBtns(){
	for (var i = 0; i < gameMode.length; i++) {
		gameMode[i].addEventListener("click", function(){

			gameMode[0].classList.remove("selected");
			gameMode[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent==="Easy" ? colorNum= 3:colorNum=6;
			reset()
		});
	}
}

