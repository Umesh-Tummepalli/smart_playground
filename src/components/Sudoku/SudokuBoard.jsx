function SudokuBoard({ board, onCellClick, selectedCell, invalid, winner }) {
  function includes2D(mainArr, subArr) {
    // Make sure mainArr is properly structured - should be an array of arrays
    if (!Array.isArray(mainArr) || mainArr.length === 0) {
      return false;
    }
    
    // Check if each subarray in mainArr matches the target subArr
    return mainArr.some(arr => 
      Array.isArray(arr) && 
      arr.length === 2 && 
      arr[0] === subArr[0] && 
      arr[1] === subArr[1]
    );
  }
  
  return (
    <div className={`w-full max-w-md mx-auto bg-[#111a20] p-1.5 sm:p-2 md:p-3 rounded-lg shadow-lg border-4 ${winner ? 'border-green-400' : 'border-[#263a47]'}`}>
      <div className="grid grid-cols-9 grid-rows-9 gap-0.5 sm:gap-1">
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => {
            // Determine if this cell is in the same block as the invalid cell
            const isInInvalidBlock =
              invalid.inValidBlock &&
              Math.floor(rowIndex / 3) === Math.floor(invalid.inValidBlock[0] / 3) &&
              Math.floor(colIndex / 3) === Math.floor(invalid.inValidBlock[1] / 3);
            
            // Determine if this is the selected cell
            const isSelected = selectedCell[0] === rowIndex && selectedCell[1] === colIndex;
            const isSameVal = cell!=='' && cell === board[selectedCell[0]][selectedCell[1]];
            // Determine if this is the invalid cell - Fixed the problem here
            const isInvalidCell = invalid.inValidCell && 
              includes2D(invalid.inValidCell, [rowIndex, colIndex]);
            
            // Determine if this cell is in an invalid row or column
            const isInInvalidRowOrCol = invalid.inValidRow === rowIndex || invalid.inValidCol === colIndex;
            const isSlectedRowOrCol=selectedCell[0]===rowIndex || selectedCell[1]===colIndex;
            
            return (
              <button
                key={`${rowIndex}-${colIndex}`}
                className={`
                  flex items-center justify-center
                  aspect-square rounded-sm
                  text-white text-base sm:text-lg md:text-xl lg:text-2xl font-medium
                  transition-all duration-150
                  cursor-pointer hover:opacity-55 hover:scale-105
                  ${rowIndex % 3 === 2 && rowIndex !== 8 ? "border-b-2 border-b-[#d1d1d1]" : ""}
                  ${colIndex % 3 === 2 && colIndex !== 8 ? "border-r-2 border-r-[#d1d1d1]" : ""}
                  ${isSelected ? "ring-2 ring-cyan-400 ring-opacity-80 shadow-inner shadow-cyan-900 " : ""}
                  ${isSameVal&&"ring-2 ring-[#facc15]"}
                  ${isSlectedRowOrCol&&"shadow-[0_0_20px_rgba(250,204,21,0.5)]  <!-- yellow-400 -->"}
                  ${
                    isInvalidCell
                      ? "bg-[#DC143C] animate-pulse"
                      : isInInvalidRowOrCol || isInInvalidBlock
                        ? "bg-[#DC143C]"
                        : "bg-[#1e2e38]"
                  }
                `}
                onClick={() => onCellClick(rowIndex, colIndex)}
              >
                {cell ? (
                  <span className={`${isInvalidCell ? "text-yellow-200" : ""}`}>{cell}</span>
                ) : (
                  <span className="opacity-0">0</span>
                )}
              </button>
            );
          }),
        )}
      </div>
    </div>
  );
}

export default SudokuBoard;