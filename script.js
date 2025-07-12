const square1 = document.getElementById('s1');
const square2 = document.getElementById('s2');
const square3 = document.getElementById('s3');
const square4 = document.getElementById('s4');
const square5 = document.getElementById('s5');  
const square6 = document.getElementById('s6');
const square7 = document.getElementById('s7');
const square8 = document.getElementById('s8');
const square9 = document.getElementById('s9');
const squares = [square1, square2, square3, square4, square5, square6, square7, square8, square9];
const player = document.getElementById('status');
const resetButton = document.getElementById('reset');






const testWinCombo = (square) => {
    const winCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical
        [0, 4, 8], [2, 4, 6]            // diagonal
    ];
    
    for (const combo of winCombos) {
        const [a, b, c] = combo;
        if (squares[a].textContent && squares[a].textContent === squares[b].textContent && squares[a].textContent === squares[c].textContent) {
            player.textContent = `Player ${squares[a].textContent} wins!`;
            squares[a].style.backgroundColor = 'green';
            squares[b].style.backgroundColor = 'green';
            squares[c].style.backgroundColor = 'green';
            // Disable further clicks
            squares.forEach(square => square.removeEventListener('click', () => {}));
        return squares[a].textContent; // Return the winning symbol
        }
    }
    
    return null; // No winner yet
}


const resetBoard = () => {
    squares.forEach(square => {
        square.textContent = '';
        square.style.backgroundColor = '';
    });
    player.textContent = "Player X's turn";
};



const turn = {
    val: "X",
   };

squares.forEach(square => {
  square.addEventListener('click', () => {
    
    if (square.textContent === 'X' || square.textContent === 'O') {
      alert('This square is already taken!');
      return;
    }

    square.textContent = turn.val;
    turn.val = turn.val === 'X' ? 'O' : 'X';
    player.textContent = `Player ${turn.val}'s turn`;
    testWinCombo(squares);
    console.log(squares);
  });
}
);

resetButton.addEventListener('click', resetBoard);
