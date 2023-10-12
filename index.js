var randomNumber = Math.floor(Math.random() * 6) + 1;
var image = "images/dice" +randomNumber+".png";
document.querySelectorAll("img")[0].setAttribute("src",image);

var randomN = Math.floor(Math.random() * 6) + 1;
var image1 = "images/dice"+randomN+".png";
document.querySelectorAll("img")[1].setAttribute("src",image1);

if(randomNumber > randomN){
    document.querySelector("h1").innerHTML= "🚩Player 1 wins!";
}
else if(randomNumber == randomN){
    document.querySelector("h1").innerHTML = "Draw";
}else{
    document.querySelector("h1").innerHTML= "🚩Player 2 Wins";
}
