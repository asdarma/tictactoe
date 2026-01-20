
const ttt = (function() {


    let board;
    let currentPlayer;
    const winPattern = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ];
    
    function showBoard() {
            console.log(`
${board[0]}  |  ${board[1]}  |  ${board[2]}

${board[3]}  |  ${board[4]}  |  ${board[5]}

${board[6]}  |  ${board[7]}  |  ${board[8]}
            `)
        }
    
    function play(num) {
        if ( num < 0 || num > 8 ||
            board[num] === 'X' ||
            board[num] === 'O'
        ) {
            console.log('Invalid move!')
        }
        move(num)

        const winner = checkWin();
            if (winner) {
                console.log(`The winner is ${currentPlayer}`)
                return;
            }

            if (checkDraw()) {
                console.log(`It's a Draw game!`)
                return;
            }
        showBoard()
        switchPlayer()
    }

    function move(num) {
        board[num] = currentPlayer;
    }

    function checkWin() {
        for (const [a, b, c] of winPattern) {
        if (board[a] === board[b] &&
            board [b] === board[c]) {
            console.log(`${currentPlayer} is the winner`)
        } else {
            null
        }
    }}

    function checkDraw() {
        return board.every(b => b === 'X' || b === 'O')
    }

    function switchPlayer() {
        currentPlayer = currentPlayer === "X" ? "O" : "X"
    }

    function reset() {
        board = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
        currentPlayer = "X";
        showBoard()
    }

    reset()

    return {
        play,
        reset
    }

    
})()


/* PSEUDOCODE

1. play()()
    - reset()
    - showBoard()
2. move(num) 
    - checkWin()
    - checkDraw()
    - switchplayer()
3. once Win or Draw
    - reset()
*/


