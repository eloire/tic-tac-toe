const players = [
    { mark: "X", color: "#E74C3C" },
    { mark: "O", color: "#000000" }
];
const conditionsToWin  = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let blockStates  = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = players[0];
const board = document.getElementById("board");

board.addEventListener("click", markBlock);

function markBlock(e) {
    const block = e.target;
    const blockIndex = parseInt(block.getAttribute('data-block-index'));

    // Check if block is already marked
    if (blockStates[blockIndex] !== "") {
        return;
    }

    block.innerText = currentPlayer.mark;
    block.style.color = currentPlayer.color;
    blockStates[blockIndex] = currentPlayer.mark;

    changeCurrentPlayer();
    checkForWinner();
}
function changeCurrentPlayer() {
    currentPlayer = currentPlayer.mark === "X" ? players[1] : players[0];
}
function checkForWinner() {
    for (let x in conditionsToWin) {
        let a = blockStates[conditionsToWin[x][0]];
        let b = blockStates[conditionsToWin[x][1]];
        let c = blockStates[conditionsToWin[x][2]];

        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            alert(a + " has won!");
            resetBoard();
            break;
        }
    }
    if (!blockStates.includes("")) {
        alert("Cats game!");
        resetBoard();
    }
}
function resetBoard() {
    blockStates  = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = players[0];
    document.querySelectorAll('.block').forEach(
        (block) => block.innerHTML = ""
    );
}


