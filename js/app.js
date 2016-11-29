$(function() {
    //Array containing possible moves
    let moves = ["rock", "paper", "scissors"];
    // Array containing possible outcomes
    let result = ["wins","losses","ties"];

    function compResult () {
            return moves[Math.floor((Math.random() * 3) + 0)];     
    }

    $('.play').click(function() {
            // Sets the variable clickedID to the id assigned to the button 
            let clickedID = this.id;
            console.log(clickedID);
    });

    function compareResults (clickedID, compResult) {
            if (clickedID === "rock" && compResult=== "paper") {
                printResult(true, false, false);
            } else if (clickedID === "paper" && compResult === "rock"){
                printResult (true, false, fals);
            } else if (clickedID === "scissors" && compResult === "paper"){
                printResult (true, false, false);
            } else if (compResult === "rock" && clickedID === "scissors"){
                printResult (false, true, false);
            } else if (compResult === "paper" && clickedID === "rock"){
                printResult (false, true, false);  
            } else if (compResult === "scissors" && clickedID === "paper"){
                printResult (false, true, false);
            } else { 
                printResult (false, false, true);
            }
    }

    function printResult(playerWins, computerWins, draw){
        if (playerWins){
            let playerScore = parseInt($('#playerScore').html());
            playerScore++;
            $('#playerScore').html(playerScore);
            $('#result').html("Player wins");
        }
    }
});

