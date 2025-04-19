import React from 'react';

const Winner = ({ winner }) => {
  let message = 'Tic Tac Toe';
  let colorClass = 'text-white';
  let animationClass = '';

  switch (winner) {
    case 'X':
      message = '🎉 Player X Wins!';
      colorClass = 'text-green-400';
      animationClass = 'animate-bounce';
      break;
    case 'O':
      message = '🎉 Player O Wins!';
      colorClass = 'text-blue-400';
      animationClass = 'animate-bounce';
      break;
    case 'Draw':
      message = "🤝 It's a Draw!";
      colorClass = 'text-yellow-400';
      animationClass = 'animate-pulse';
      break;
    default:
      // Show "Tic Tac Toe" with no animation
      message = 'Tic Tac Toe';
      colorClass = 'text-white';
      animationClass = '';
  }

  return (
    <div className={`text-center text-4xl font-bold mt-6 transition-all duration-500 ${colorClass} ${animationClass}`}>
      {message}
    </div>
  );
};

export default Winner;
