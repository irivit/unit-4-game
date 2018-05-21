

// Declare variables

var gema1 = 1;
var gema2 = 0;
var gema3 = 0;
var gema4 = 0;

var win = 0;
var loss = 0;
var score = 0;
var numberObjective = 0;


function generateRandomNumber(){ //generate a random number between 120 and 19
 
  numberObjective = Math.floor(Math.random() * 101) + 19;
  $("#numberToReach").text(numberObjective);  //update target number in html

}

function reset(){   //reset the game whenever the user win or loss
  score = 0;
  $("#score").text(score); //update the score in HTML page
  numberObjective = 0;
}

function getReady(){  //assign a random number between 1 and 12 to each of the crystals

  gema1 = Math.floor(Math.random() * 12) + 1;
  console.log(gema1);

  gema2 = Math.floor(Math.random() * 12) + 1;
  console.log(gema2);

  gema3 = Math.floor(Math.random() * 12) + 1;
  console.log(gema3);

  gema4 = Math.floor(Math.random() * 12) + 1;
  console.log(gema4);
}

//compare the score with the number to target to see if user win or loss

function compareValues(myScore,myNumber){ 
  if (myScore == myNumber){    //if both number are equals, the user win
      win++;                   //increment the variable
      $("#win").text(win);     //update the variable in HTML
      reset();                 //call  reset function
      getReady();              // call get ready function
      generateRandomNumber();  //call  generateRandomNumber function
      alert('You won');
  }else if(myScore > myNumber){ //if myscore is greater than my number, the user loss
      loss++;                  //increment the variable
      $("#loss").text(loss);
      reset();
      getReady();
      generateRandomNumber();
      alert('You lost');
  }
}

$(document).ready(function() {
    
  getReady();                   //call function to asign number to crystals
  generateRandomNumber();       //call function to asign target number

  
  //listeners to hear iif user clicked any crystal 
  $("#gema1container").on("click", "#gema1", function() {
    score += gema1;  //update the score

    $("#score").text(score); //update the score in HTML
    compareValues(score,numberObjective); //call function compareValues
  });
  
  $("#gema2container").on("click", "#gema2", function() {
    score += gema2;

    $("#score").text(score);
    compareValues(score,numberObjective);
  });

  $("#gema3container").on("click", "#gema3", function() {
    score += gema3;

    $("#score").text(score);
    compareValues(score,numberObjective);
  });

  $("#gema4container").on("click", "#gema4", function() {
    score += gema4;
 
    $("#score").text(score);
    compareValues(score,numberObjective);
  });

});




