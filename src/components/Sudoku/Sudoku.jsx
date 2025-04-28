import React, { useState, useEffect,useMemo } from "react";
import SudokuBoard from "./SudokuBoard";
import NumberSelector from "./NumberSelector";
import { fullValidSudoku, isFilled, isValidSudoku } from "../../app/ValidSudoku";
import ConfettiAnimation from "../TicTacToe/ConfettiAnimation";
import SudokuHeader from "./SudokuHeader";
import {useParams,useNavigate,useSearchParams} from "react-router"
import { sudoku_data } from "../../app/SusokuDataSet";
import ViewSolution from "./ViewSolution";
export const emptyBoard=[
    ["","","","","","","","",""],
    ["","","","","","","","",""],
    ["","","","","","","","",""],
    ["","","","","","","","",""],
    ["","","","","","","","",""],
    ["","","","","","","","",""],
    ["","","","","","","","",""],
    ["","","","","","","","",""],
    ["","","","","","","","",""],
  ]
const Sudoku = () => {
  useEffect(()=>{
      document.title='Sudoku -Smart Playground';
    })
  //states
  const [winner, setwinner] = useState(false)
  const [selectedCell, setselectedCell] = useState([0, 0]);
  //url parameters
  const {difficulty}=useParams();
  const [searchParams] = useSearchParams(); 
  const level=parseInt(searchParams.get('level'));
  const initialState=useMemo(()=>{
    return sudoku_data[difficulty][parseInt(level)-1];
  },[difficulty,level]);
  //navigate
  let navigate=useNavigate();
  const [board, setboard] = useState(emptyBoard);
  function upDateBoard(row, col, data) {
    if(initialState[row][col]){
      return;
    }
    let currBoard = [...board];
    currBoard[row][col] = data;
    setboard(currBoard);
  }
  function handleBoardClick(row, col) {
    if(initialState[row][col]){
      return;
    }
    if (selectedCell.toString() == [row, col].toString()) {
      upDateBoard(row, col, "");
    } else {
      setselectedCell([row, col]);
    }
  }
  function handleSelectorClick(num) {
    let row = selectedCell[0];
    let col = selectedCell[1];
    upDateBoard(row, col, num.toString());
  }
  function handleReset(){
    let temp=JSON.parse(JSON.stringify(initialState));
    setboard(temp);
    setInvalid(invalidInitial);
    setwinner(false);
  }
  let invalidInitial={
    isValid: true,
    inValidRow: -1,
    inValidCol: -1,
    inValidBlock: [],
    inValidCell: [[]],
  };
  const [invalid, setInvalid] = useState(invalidInitial);
  useEffect(() => {
    let row = selectedCell[0];
    let col = selectedCell[1];
    console.log(row,col)
    let currStats=isValidSudoku(board, row, col, board[row][col]);
    setInvalid(currStats);
    if(isFilled([...board]) && currStats.isValid){
      let filledStats=fullValidSudoku(board);
      if(filledStats.isValid){
        setInvalid(invalidInitial);
        setwinner(true);
      }
      else{
        setwinner(false);
        setInvalid(filledStats);
      }
    }
  }, [board]);
  useEffect(()=>{
    let row = selectedCell[0];
    let col = selectedCell[1];
    let currStats=isValidSudoku(board,row,col,board[row][col]);
    if(!currStats.isValid){ 
      setInvalid(currStats);
      setwinner(false);
    }
  },[selectedCell]);

  useEffect(()=>{
    let temp=JSON.parse(JSON.stringify(initialState));
    setboard(temp);
  },[initialState])
  return (
    <div className={`text-white text-center flex flex-col justify-center items-center`}>
      {winner && <ConfettiAnimation/>}
      <SudokuHeader winner={winner}/>
      <div className="capitalize text-[#00d3f1]">{difficulty} : Level {level}</div>
      <SudokuBoard
        board={board}
        onCellClick={handleBoardClick}
        selectedCell={selectedCell}
        invalid={invalid}
        winner={winner}
      />
      <NumberSelector handleSelectorClick={handleSelectorClick} />
      <div
      className="space-x-4"
      >
      <button
      className="p-3 bg-[#00d3f1] rounded "
      onClick={()=>{
        let prevLevel=level-1;
        if(prevLevel<=0){
          prevLevel=sudoku_data[difficulty].length;
        }
        navigate(`/sudoku/${difficulty}?level=${prevLevel}`);
      }}
      ><i className="ri-arrow-left-s-line"></i></button>
      <button
      className="text-center bg-[#00d3f2] rounded p-3 mt-5 text-black hover:opacity-75 transition-all duration-150 active:opacity-35"
      onClick={handleReset}
      >Reset</button>
      <button
      className="p-3 bg-[#00d3f1] rounded "
      onClick={()=>{
        let nextLevel=level+1;
        if(nextLevel>sudoku_data[difficulty].length){
          nextLevel=1;
        }
        navigate(`/sudoku/${difficulty}?level=${nextLevel}`);
      }}
      ><i className="ri-arrow-right-s-line"></i></button>

      </div>
      {/* <ViewSolution board={initialState || emptyBoard}/> */}
    </div>
  );
};

export default Sudoku;
