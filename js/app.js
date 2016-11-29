$(function() {
    //Array containing possible moves
    let moves = ["rock", "paper", "scissors"];
    // Array containing possible outcomes
    let result = ["wins","losses","ties"];

        // Event listener for when button is clicked
    button.addEventListener("click" , function() {
            
        // Generates a random whole number - 0, 1 or 2 and assigns it to computerChoice
        let computerChoice = moves[Math.floor((Math.random() * 3) + 0)];
        
        console.log(computerChoice);
        console.log('Button was clicked');
                    
        // When an element with the class "play" is clicked  the following function will run
        $('.play').click(function() {
            // Sets the variable clickedID to the id assigned to the button 
            let clickedID = this.id;
            console.log(clickedID);


        });
    });

});

