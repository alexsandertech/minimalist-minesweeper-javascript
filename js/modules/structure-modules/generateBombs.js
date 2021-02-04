export async function generateBombs( board ){
    console.log(" >> Generating Bombs");
    board.totalBombs = await getTotalBombs(board.totalValidCells, board.typeBoard);
    board.structure  = await setBombs(board.structure, board.totalBombs, board.column, board.row);
    
    console.log(" << Finished: Bombs generation");
    return board;
}

async function getTotalBombs(totalValidCells, typeBoard){    
    if(typeBoard == 'T')
        return Math.trunc(totalValidCells*0.2);
    if(typeBoard == 'S')
        return Math.trunc(totalValidCells*0.15);
    if(typeBoard == 'H')
        return Math.trunc(totalValidCells*0.2);        
}

async function setBombs(board, totalBombs, column, row){
    let coord = [];
    let countBombs = 0;

    do {
        coord = getRandom(column, row);
        let i = parseInt(coord[0]);
        let j = parseInt(coord[1]);

        if(validateCoord(board[i][j])) {
            board[i][j] = 'B';
            countBombs++;
        }
    } while(countBombs!=totalBombs);

    return board;
}

function getRandom(column, row) {
    let coord = [];
    coord[0] = Math.floor(Math.random() * (row - 0)) + 0;
    coord[1] = Math.floor(Math.random() * (column - 0)) + 0;
    return coord;
}

function validateCoord(n){
    if(n!=null && n!='B')
        return true;
    else
        return false;
}