import React, { useState, useEffect } from "react";
import Board from "./components/Board";
import PlayerBotIcon from "./components/PlayerBotIcon";
import WinnerAnnouncement from "./Winner";
import { minimax } from "./app/minimax.js";
import { boardFilled } from "./app/minimax.js";
import ConfettiAnimation from "./components/ConfettiAnimation";

const App = () => {
  const getInitialBoard = () => [
    [".", ".", "."],
    [".", ".", "."],
    [".", ".", "."],
  ];

  const [board, setBoard] = useState(getInitialBoard());
  const [winner, setWinner] = useState("");
  const [player1bot, setPlayer1bot] = useState(false);
  const [player2bot, setPlayer2bot] = useState(false);
  const [turn, setTurn] = useState("X");
  const [loading, setLoading] = useState(false);
  const [winPoints,setwinPoints]=useState([]);
  function checkwin(board) {
    const winningPositions = [
        // Rows
        [[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],
        // Columns
        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 2], [2, 2]],
        // Diagonals
        [[0, 0], [1, 1], [2, 2]],
        [[0, 2], [1, 1], [2, 0]]
    ];
  
    for (let i = 0; i < winningPositions.length; i++) {
        const [p1, p2, p3] = winningPositions[i];
        if (board[p1[0]][p1[1]] === 'X' && board[p2[0]][p2[1]] === 'X' && board[p3[0]][p3[1]] === 'X') {
            return {gameWinner:'X',points:[p1,p2,p3]};
        }
        if (board[p1[0]][p1[1]] === 'O' && board[p2[0]][p2[1]] === 'O' && board[p3[0]][p3[1]] === 'O') {
          return {gameWinner:'O',points:[p1,p2,p3]};
        }
    }
    return {gameWinner:'.',points:[]};
  }
  
  // Memoized reset function
  const resetGame = () => {
    setBoard(getInitialBoard());
    setWinner("");
    setTurn("X");
    setLoading(false);
    setwinPoints([]);
  };

  // Check for winner/draw after board updates
  useEffect(() => {
    if (JSON.stringify(board) === JSON.stringify(getInitialBoard())) return;

    const {gameWinner,points} = checkwin(board);
    if (gameWinner !== ".") {
      setWinner(gameWinner);
      setwinPoints(points);
    } else if (boardFilled(board)) {
      setWinner("Draw");
      setwinPoints([]);
    } else {
      setTurn(prevTurn => (prevTurn === "X" ? "O" : "X"));
    }
  }, [board]);

  // Handle bot moves
  useEffect(() => {
    if (winner || loading) return;

    const isBotTurn = (player1bot && turn === "X") || (player2bot && turn === "O");
    
    if (isBotTurn) {
      const makeBotMove = async () => {
          const boardCopy = board.map(row => [...row]);
          const bestMove = await minimax(boardCopy, turn);
        if(player1bot && player2bot){
          setTimeout(()=>{
            setBoard(bestMove);
          },1000);
        }
        else{
          setBoard(bestMove);
        }
      };
      makeBotMove();
    }
  }, [turn,player1bot,player2bot,winner]);

  return (
    <div className="text-white">
      <WinnerAnnouncement winner={winner} />
      {
        ((winner=='X'&&!player1bot)||(winner=='O'&&!player2bot))&&<ConfettiAnimation/>
      }
      <div className="flex justify-between lg:absolute lg:w-screen pointer-events-none">
        <PlayerBotIcon type={player1bot ? "bot" : "player"} isTurn={turn === "X"} />
        <PlayerBotIcon type={player2bot ? "bot" : "player"} isTurn={turn === "O"} />
      </div>
      <div className="pointer-events-auto">
        <Board
          board={board}
          setBoard={setBoard}
          turn={turn}
          setTurn={setTurn}
          disabled={loading || !!winner}
          setWinner={setWinner}
          winPoints={winPoints}
        />
      </div>
      <div className="sm:mt-10 flex flex-col items-center space-y-4 ">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold block rounded shadow-md transition-all px-4 py-2"
          onClick={resetGame}
        >
          Reset
        </button>
        <div className="flex items-center text-lg font-semibold ">
          <button
            className="bg-[#0092b0] hover:bg-green-700 text-white font-bold rounded shadow-md px-4 py-2 transition-all"
            onClick={() => {
              setPlayer1bot(prev => !prev);
              resetGame();
            }}
          >
            {player1bot ? "Bot" : "Player"}
          </button>
          <span className="text-gray-700">vs</span>
          <button
            className="bg-[#d94600] hover:bg-red-700 text-white font-bold px-4 py-2 rounded shadow-md transition-all"
            onClick={() => {
              setPlayer2bot(prev => !prev);
              resetGame();
            }}
          >
            {player2bot ? "Bot" : "Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;