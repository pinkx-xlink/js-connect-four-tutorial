const playerRed = 'r';
const playerYellow = 'y';
const currentPlayer = false;
const board;
const rows = 6;
const columns = 7;

window.onload = function() {
    getGame();
}
function getGame() {
    board = [];

    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            row.push(``);

            let tile = document.createElement('div');
            tile.id = r.toString + "-" + c.toString;
        }
    }
}