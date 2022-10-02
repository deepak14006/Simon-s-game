// var userClickedPattern = [];
// var buttonColours = ["red", "blue", "green", "yellow"];
// var gamePattern = [];
// var level = 0;
// var started = false;
//
//
// $(document).keypress(function() {
//   if (!started) {
//     $("#level-title").text("Level " + level);
//     nextSequence();
//     started = true;
//   }
// });
//
//
// $(".btn").click(function() {
//   //var userChosenColour = this.id;
//   var userChosenColour = $(this).attr("id");
//   userClickedPattern.push(userChosenColour);
//   //console.log(userChosenColour); // this is logging the color of the button which got clicked.
//   //console.log(userClickedPattern); //this is making new array on the click of every new button clicked on the screen
//   playSound(userChosenColour);
//   animatePress(userChosenColour);
//   checkAnswer(userClickedPattern.length-1);
// });
//
//
// function checkAnswer(currentLevel){
// if(userClickedPattern[currentLevel] === gamePattern[currentLevel])
//   //console.log("success");
// if(userClickedPattern.length === gamePattern.length){
//   setTimeout(function(){nextSequence();},1000});
// }
// else{
//   var sound = new Audio("sounds\wrong.mp3");
//   sound.play();
//   $(body).addClass("game-over");
//   setTimeout(function(){
//     $(body).removeClass("game-over");
//   },200);
//   $("#level-title").text("Game Over, Press Any Key to Restart");
//   startOver();
// }
// }
//
// function nextSequence() {
//   userClickedPattern = [];
//   level++;
//   $("#level-title").text("Level " + level);
//
//   var randomNumber = Math.floor(Math.random() * 4);
//   var randomChosenColour = buttonColours[randomNumber];
//   gamePattern.push(randomChosenColour);
//   //userClickedPattern.push(userChosenColour);
//
//   $("#" + randomChosenColour).fadeout(100).fadein(100).fadeout(100).fadein(100);
//   playSound(randomChosenColour);
//
//
// }
//
//
// function playSound(name) {
//   var audio = new Audio("sounds/" + name + ".mp3");
//   audio.play();
// }
//
//
// function animatePress(currentColour) {
//   $("#" + currentColour).addClass("pressed");
//   setTimeout(function() {
//     $("#" + currentColour).removeClass("pressed");
//   }, 100);
// }
//
//
// function startOver(){
// level = 0;
// gamePattern = [];
// started = "false";
// }


/////////////////////////////////////////////////////


var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
});


function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      console.log("success");

      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }

    } else {

      console.log("wrong");

      playSound("wrong");

      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      $("#level-title").text("Game Over, Press Any Key to Restart");

      //2. Call startOver() if the user gets the sequence wrong.
      startOver();
    }

}

function nextSequence() {

  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function playSound(name) {
  var audio = new Audio(name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

//1. Create a new function called startOver().
function startOver() {

  //3. Inside this function, you'll need to reset the values of level, gamePattern and started variables.
  level = 0;
  gamePattern = [];
  started = false;
}
