console.log("Test your luck!");

var counter = 300;
var intervalId;

//on "play" button click begin game by calling the start function in the game variable
$("#start").on("click", function () {
    game.start();
})

var game = {
  correct: 0,
  wrong: 0,
  counter: 10,  

  decrement: function () {
      game.counter --;
      $("#counter").html("You have " + game.counter + " seconds left!");
      if(game.counter <= 0){
          console.log("time is up!");
          game.over();
      }
  },

  start: function () {
    console.log("the game began");
    timer = setInterval(game.decrement,1000);
  },
  
  over: function () {
      console.log("game over!");
  }
}


