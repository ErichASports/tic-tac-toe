$(function()  {

	
	
	winningCombinations =  [['#r1c1, #r1c2, #r1c3'], ['#r2c1, #r2c2, #r2c3'], ['#r3c1, #r3c2, #r3c3'],    
                        	['#r1c1, #r2c1, #r3c1'], ['#r1c2, #r2c2, #r3c2'], ['#r1c3, #r2c3, #r3c3'],
                        	['#r1c1, #r2c2, #r3c3'], ['#r3c1, #r2c2, #r1c3']] 
                        	

    gameBoard = {
        
        r1c1 : " ", r1c2 : " ", r1c3 : " ",
        r2c1 : " ", r2c2 : " ", r2c3 : " ", 
    	r3c1 : " ", r3c2 : " ", r3c3 : " ",
        }           
 	
 	var playerState = true;                       
 	var turn = 0; 

	$('.button').click(function(){
		
		//alert( $(this).attr('id') )
		if ($(this).html() !== " ") {

			return;
		}

		else if (playerState == true) {
                ($(this).click(true));
                playerState = false;
                alert("Player Two's Turn!")
                }
            else {
                ($(this).click(true));
                playerState == true;
                alert("Player One's Turn!")    
            }
 


        function FirstplayerTurn() {
        	$(this).html("X")
        	turn++;


        }


	//var eitherPlayer = (playerOne || playerTwo) 	
		function winCondition() {
			
		}
		function gameOutcome() {
		if (playerOne == winningCombinations){
				alert("Player Two Won!");
		} else if  (playerOne == winningCombinations){
				alert("Player One Won!");
		} else {
			alert("Cat's Game ... womp womp")
		}

};








// var playerOne == false
// var playerTwo == false 

//while (playerOne, playerTwo == false) {

	//run function findWinner;
//}
//winner == true
// 	function winConditions()
// var topRow = r1c1, r1c2, r1c3
// var midRow = r2c1, r2c2, r2c3
// var bottomRow = r3c1, r3c2, r3c3
// var leftCollum = r1c1, r2c1, r3c1
// var midCollum = r1c2, r2c2, r3c2
// var rightCollum = r1c3, r2c3, r3c3
// //
	//var eitherPlayer = (playerOne || playerTwo) 
//     function findWinner() {
// 	if (eitherPlayer = winConditions) {
// 		winner
		//alert('Boomshakalaka!')
// 	} 
// } 


//}


