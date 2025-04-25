import React from 'react';

const SudokuHeader = ({ winner }) => {
  let message = 'Sudoku';
  let colorClass = 'text-white';
  let animationClass = '';
  
  if (winner) {
    message = '🎉 You Solved It!';
    colorClass = 'text-green-400';
    animationClass = 'animate-bounce';
  } else {
    // Default state - just show "Sudoku" with no animation
    message = 'Sudoku';
    colorClass = 'text-white';
    animationClass = '';
  }
  
  return (
    <div className={`text-center text-4xl font-bold mt-6 transition-all duration-500 ${colorClass} ${animationClass}`}>
      {message}
    </div>
  );
};

export default SudokuHeader;