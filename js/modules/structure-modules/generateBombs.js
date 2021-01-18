export async function generateBombs( board ){
    board.totalBombs = getTotalBombs(board.totalValidCells, board.diff);

    

    console.log(board);
}

function getTotalBombs(totalValidCells, difficulty){
    if(difficulty == 'E')//Easy
        return Math.trunc(totalValidCells*0.15);
    if(difficulty == 'N')//Normal
        return Math.trunc(totalValidCells*0.2);
    if(difficulty == 'H')//Hard
        return Math.trunc(totalValidCells*0.4);
    if(difficulty == 'I')//Impossible
        return Math.trunc(totalValidCells*0.4);
}