var victory = document.getElementById("wins");
var defeat = document.getElementById("losses");
var score = document.getElementById("currentscore");
var goal = document.getElementById("TargetNUM");

var counter = 0;

var wins = 0;
var losses = 0;

var TargetNum = [Math.floor(Math.random() * 120)+ 19];
var numberOptions = [Math.floor(Math.random() * 12)];
console.log(numberOptions);

$( document ).ready(function() {
    $("#targetBox").text(TargetNum);





for (var i=0; i < 4; i++) {
    var imagepowerup = $(".power-up-image")
    var powerValue = Math.floor(Math.random() * 12);
    imagepowerup.attr("data-powervalue", powerValue);
    console.log(powerValue);
    // $("#powerups").append(imagepowerup);
        


}


$(".power-up-image").on("click", function() {

    var powervalue = ($(this).attr("data-powervalue"));
    powervalue = parseInt(powervalue);

    counter += powervalue;

    if (counter = TargetNum) {
        alert("You Win");
        wins= wins +1;
        TargetNum = [Math.floor(Math.random() * 120)+ 19];
        numberOptions = [Math.floor(Math.random() * 12)+ 1];
        

    }
    else if (counter >= TargetNum) {
        alert("Too High, you lose");
        losses = losses +1;
        TargetNum = [Math.floor(Math.random() * 120)+ 19];
        numberOptions = [Math.floor(Math.random() * 12)+ 1];


    }
});
});


