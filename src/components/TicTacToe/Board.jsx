import React from 'react'
import Xsym from './Xsym';
import Ysym from './Ysym';
import WinXSym from './WinXSym';
import WinYSym from './WinYSym';
const Board = (props) => {
    function getSymbol(tile){
        if(tile=="."){
            return " ";
        }
        if(tile=='X'){
            return <Xsym/>
        }
        else{
            return <Ysym/>
        }
      }
      function getWinnerTile(tile){
        if(tile=="."){
            return " ";
        }
        if(tile=='X'){
            return <WinXSym/>
        }
        else{
            return <WinYSym/>
        }
    }
    function handleClick(row,col){
        let currBoard= props.board.map(rowArr => [...rowArr]);
        currBoard[row][col]=props.turn;
        if(currBoard!== props.board && props.board[row][col]==="."){
            props.setBoard(currBoard);
        }
    }
    function mainArrayIncludes(mainArr,subArr){
      for(let i=0;i<mainArr.length;i++){
        if(JSON.stringify(mainArr[i])===JSON.stringify(subArr)){
          return true;        
        }
      }
      return false;
    }
  return (
    <div className="min-h-[400px]  flex-1 flex items-center justify-center">
    <div className="grid grid-cols-3 gap-4 p-6 rounded-xl w-full max-w-md">
      {props.board.map((row, rowIndex) =>
        row.map((tile, col) => (
          <div
          onClick={()=>handleClick(rowIndex,col)}
            key={`${rowIndex}-${col}`}
            className="aspect-square flex items-center justify-center rounded-2xl bg-[#1a2730] shadow-[0_4px_10px_rgba(0,0,0,0.3)] transition-all hover:bg-[#1e2e38]"
          >
            <span className={`text-4xl font-bold ${tile === 1 ? "text-teal-400" : "text-amber-400"}`}>
              { mainArrayIncludes(props.winPoints,[rowIndex,col])?
                getWinnerTile(tile):
                getSymbol(tile)
              }
            </span>
            
          </div>
        )),
      )}
    </div>
  </div>
  )
}

export default Board