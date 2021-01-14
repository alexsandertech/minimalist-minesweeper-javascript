export function index2RowAndColumn(index, limColumn){
    let generatedIndex = {};
    
    limColumn++;
    generatedIndex.row = Math.trunc(index/limColumn) ;
    generatedIndex.column = index - (limColumn*generatedIndex.row);

    return generatedIndex;
}

export  function rowAndColumn2Index(indexRow, indexColumn, limColum){
    let index = indexColumn + ( (limColum+1) * indexRow);
    return index;
}