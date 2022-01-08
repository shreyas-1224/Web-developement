var roll1 = "images/" + "dice" + (Math.floor(Math.random()*6) + 1 ) + ".png" ; 
var roll2 = "images/" + "dice" + (Math.floor(Math.random()*6) + 1 ) + ".png" ;

document.querySelector(".img1").setAttribute("src" , roll1);
document.querySelector(".img2").setAttribute("src" , roll2);

if(roll1 > roll2){
    document.querySelector("h1").textContent = "player1 wins";
}
else if(roll2 > roll1){
    document.querySelector("h1").textContent = "player2 wins";
}
else{
    
    document.querySelector("h1").textContent = "Shreyas wins";
}