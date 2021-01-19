export async function generateNumbers(board, typeBoard){
    if(typeBoard == 'T')
        board = await generateNumTriangle(board);
    if(typeBoard == 'S')
        board = await generateNumSquare(board);
    if(typeBoard == 'H')
        board = await generateNumHexagon(board);
    return board;
}

async function generateNumTriangle(board){
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length; j++){
            if(board[i][j]=='B'){
                let lim_i = board.length;
                let lim_j = board[i].length;

                if(allowIncrement(i, j-1, lim_i, lim_j, board))
                    board[i][j-1]++;
                if(allowIncrement(i, j+1, lim_i, lim_j, board))
                    board[i][j+1]++;

                if((j+i)%2==1){
                    if(allowIncrement(i+1, j, lim_i, lim_j, board))
                        board[i+1][j]++;
                } else {
                    if(allowIncrement(i-1, j, lim_i, lim_j, board))
                        board[i-1][j]++;
                }
            }
        }
    }
    return board;
}

async function generateNumSquare(board){
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length; j++){
            if(board[i][j]=='B'){
                let lim_i = board.length;
                let lim_j = board[i].length;

                if(allowIncrement(i-1, j-1, lim_i, lim_j, board))
                    board[i-1][j-1]++;
                if(allowIncrement(i-1, j, lim_i, lim_j, board))
                    board[i-1][j]++;
                if(allowIncrement(i-1, j+1, lim_i, lim_j, board))
                    board[i-1][j+1]++;
                
                if(allowIncrement(i, j-1, lim_i, lim_j, board))
                    board[i][j-1]++;
                if(allowIncrement(i, j+1, lim_i, lim_j, board))
                    board[i][j+1]++;
                
                if(allowIncrement(i+1, j-1, lim_i, lim_j, board))
                    board[i+1][j-1]++;
                if(allowIncrement(i+1, j, lim_i, lim_j, board))
                    board[i+1][j]++;
                if(allowIncrement(i+1, j+1, lim_i, lim_j, board))
                    board[i+1][j+1]++;
            }
        }
    }
    return board;
}

async function generateNumHexagon(board){
    let middle = Math.trunc(board.length/2);
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length; j++){
            if(board[i][j]=='B'){
                let lim_i = board.length;
                let lim_j = board[i].length;
                
                if(i <= middle) {/*Top left case before middle */
                    if(allowIncrement(i-1, j-1, lim_i, lim_j, board))
                        board[i-1][j-1]++;
                } else {           /*Top right case before middle */
                    if(allowIncrement(i-1, j+1, lim_i, lim_j, board))
                        board[i-1][j+1]++;
                }

                /*Top*/
                if(allowIncrement(i-1, j, lim_i, lim_j, board))
                    board[i-1][j]++;
                /*Left and Rigth*/
                if(allowIncrement(i, j-1, lim_i, lim_j, board))
                    board[i][j-1]++;
                if(allowIncrement(i, j+1, lim_i, lim_j, board))
                    board[i][j+1]++;
                /*Bottom*/
                if(allowIncrement(i+1, j, lim_i, lim_j, board))
                    board[i+1][j]++;
                
                if(i >= middle){/*Bottom left case after or in middle */
                    if(allowIncrement(i+1, j-1, lim_i, lim_j, board))
                        board[i+1][j-1]++;
                } else {/*Bottom right case before middle */
                    if(allowIncrement(i+1, j+1, lim_i, lim_j, board))
                        board[i+1][j+1]++;
                }
            }
        }
    }
    return board;
}

function allowIncrement(i, j, limI, limJ, board){
    if(i == -1 || j == -1 || i >= limI || j >= limJ)
        return false;
    else if(board[i][j] == null || board[i][j] == 'B')
        return false;
    else
        return true;      
}