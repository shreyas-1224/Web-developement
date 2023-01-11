// drumkit . assign events to button and then keys using jquery

// assigning eventlistener to keys

$(document).on("keydown",function(event){
    makeSound(event.key);
})

// assigning events to buttons

$(".drum").on("click",function(event){
    makeSound($(event.target).attr('class')[0]);
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