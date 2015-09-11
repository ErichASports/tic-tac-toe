$(function () {


    //var winningCombinations = [['#r1c1, #r1c2, #r1c3'], ['#r2c1, #r2c2, #r2c3'], ['#r3c1, #r3c2, #r3c3'],
    //    ['#r1c1, #r2c1, #r3c1'], ['#r1c2, #r2c2, #r3c2'], ['#r1c3, #r2c3, #r3c3'],
    //    ['#r1c1, #r2c2, #r3c3'], ['#r3c1, #r2c2, #r1c3']]

    var gameBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0]

    var playerState = true;
    var turn = 0;
    $("#playerTurn").append("<h2>X moves first!</h2>");
    $('.button').click(function () {

        if (playerState === true) {
            // It's X's turn to go.
            $("#playerTurn").empty();
            $("#playerTurn").append("<h2>Player O's turn!</h2>");
            if ($(this).attr('class') === "button checked x" || $(this).attr('class') === "button checked o") {
                console.log("This square is not EMPTY")
                return;
            }
            else {
                // this code executes on a valid X placement
                console.log("This square is EMPTY")
                $(this).addClass("checked x")
                var tile = parseInt($(this).attr('id'));
                console.log("before X's move")
                console.log(gameBoard)
                gameBoard[tile] = 1;
                console.log("after X's move")
                console.log(gameBoard)
                playerState = false;
            }


        }
        else {
            $("#playerTurn").empty();
            $("#playerTurn").append("<h2>Player X's turn!</h2>");
            if ($(this).attr('class') === "button checked x" || $(this).attr('class') === "button checked o") {
                console.log("This square is not EMPTY")
                return;
            }
            else {
                // this code executes on a valid O placement
                console.log("This square is EMPTY")
                $(this).addClass("checked o")
                var tile = parseInt($(this).attr('id'));
                console.log("before O's move")
                console.log(gameBoard)
                gameBoard[tile] = 2;
                console.log("after O's move")
                console.log(gameBoard)
                playerState = true;
            }


        }
        // Check for a win condition.
        turn = turn + 1;
        if (turn === 9) {
            $("#result").append("<h2>" + "Cat's game ... womp womp" + "</h2>");
        } else {
            var outcome = winCondition();
            $("#result").empty();
            $("#result").append("<h2>" + outcome + "</h2>");

        }

        //function FirstplayerTurn() {
        //    $(this).html("X")
        //    turn++;


        //var eitherPlayer = (playerOne || playerTwo)
        function winCondition() {
            var X_wins = false
            var O_wins = false
            var win_conditions = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8],
                [0, 3, 6], [1, 4, 7], [2, 5, 8],
                [6, 4, 2], [0, 4, 8]]
            for (var i = 0; i < 8; i++) {
                var win = [];
                win = win_conditions[i];
                console.log(win);
                //X wins
                console.log(win[0]);
                console.log(win[1]);
                console.log(win[2]);
                if (gameBoard[win[0]] === 1 && gameBoard[win[1]] === 1 && gameBoard[win[2]] === 1) {

                    X_wins = true;
                    return ('Player X has won!');
                }
                // O wins
                if (gameBoard[win[0]] === 2 && gameBoard[win[1]] === 2 && gameBoard[win[2]] === 2) {
                    O_wins = true;
                    return ('Player O has won!');
                }

                //console.log(win);

                //
            }

            // we searched all the win conditions and found no winner
            return ("Play on!");
        }
    })
})
//    function gameOutcome() {
//        if (playerOne == winningCombinations) {
//            alert("Player Two Won!");
//        } else if (playerOne == winningCombinations) {
//            alert("Player One Won!");
//        } else {
//            alert("Cat's Game ... womp womp")
//        }
//
//    }
//}
//)


/**

 0,1,2
 3,4,5
 6,7,8


 var win_conditions = [
 [0,1,2], [3,4,5], [6,7,8],
 [0,3,6], [1,4,7], [2,5,8],
 [6,4,2], [0,4,8]

 if either x or y have integers in any of the above positions within the array they win.
 if (('x').tile = win_conditions) || ('y').tile = win_conditions) {


 checkForWinner(gameboard, winconditions)

 for var i = 0; i < winconditions.length; i++ {
    var win = winconditions[i]
    for var j =0 j < 3.....{
        if(gameboard[j] !=
    }

 }

 ]

 ]


 **/
