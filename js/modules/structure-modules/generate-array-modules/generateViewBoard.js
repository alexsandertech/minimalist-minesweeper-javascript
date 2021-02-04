export async function generateViewBoard(board){    
    console.log(" >> Generating view board");
    var structureView = [];
    
    board.forEach(
        function(value, index){
            var aux = [];
            value.forEach(
                function(v, i){
                    (v==0) ? aux[i] = '*' : aux[i] =  v;
                }
            );
            structureView[index] = aux;
        }
    );

    console.log(" << Finished view board generation");
    return structureView;
}