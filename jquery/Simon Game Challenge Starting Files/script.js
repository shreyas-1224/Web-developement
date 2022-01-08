var colors = ["red" , "blue" , "green" , "yellow"];

var game_pattern = [] ;
var user_pattern = [] ;

var has_started =  0 ; 
var level = 0 ; 

/* start the game */

$(document).on("keydown" , function(){
    
    if(!has_started){
        $("#level-title").text("LEVEL " + level);
        next_sequence();
        has_started = 1 ;
    }
});

/* which button was clicked */ 

$(".btn").on("click" , function(event){
    
    var user_clicked_btn = $(this).attr("id");
    user_pattern.push(user_clicked_btn);

    make_sound(user_clicked_btn);
    addAnimation(user_clicked_btn);
     
    check_answer(user_pattern.length - 1);

});


function make_sound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function addAnimation(name){
    $("#" + name).addClass("pressed");
    setTimeout(function(){
        $("#" + name).removeClass("pressed");
    },200);
}



function next_sequence(level){
    user_pattern = [];
    var game_color = colors[Math.floor(Math.random() * 4)];
    game_pattern.push(game_color);
    $("#" + game_color).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    make_sound(game_color);
    level++;
    $("#level-title").text("LEVEL " + level);

}

// check answer

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}



// startover the game 

function start_over(){
    level = 0 ; 
    game_pattern = [];
    user_pattern = [];
    has_started = 0 ;
}




