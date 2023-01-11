// drumkit . assign events to button and then keys


// for button

var button_set = document.querySelectorAll(".drum");

for(let i = 0 ; i < button_set.length ; i++ ){
    button_set[i].addEventListener("click" , function(){
        var text = this.innerHTML ; 
        makeSound(text);
        addAnimation(text);
    })
}

// for keys

document.addEventListener("keydown",function(event){
    makeSound(event.key);
    addAnimation(event.key);
})

function makeSound(key){

    var audio ; 
    
    switch(key){
        case 'a':
            audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        
        case 's':
            audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        
        case 'd':
            audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case 'w':
            audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        
        case 'j':
            audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case 'k':
            audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

        case 'l':
            audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;


                       
    }
}

// adding animation to buttons

function addAnimation(key){
    
    var active_button = document.querySelector("." + key);
    active_button.classList.add("pressed");
    setTimeout(function(){
        active_button.classList.remove("pressed");
    },100);
}