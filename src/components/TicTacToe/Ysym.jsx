import React from 'react';

const Ysym = () => {
  return (
    <div className="w-full h-full"> {/* Container that fills parent */}
      <svg 
        viewBox="0 0 200 200" 
        preserveAspectRatio="xMidYMid meet" 
        style={{ width: '100%', height: '100%' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ff7b00" />
            <stop offset="100%" stopColor="#cc3300" />
          </linearGradient>
        </defs>

        <rect x="10" y="10" width="180" height="180" rx="40" ry="40" fill="url(#orangeGradient)" />
        
        {/* Circle with drawing animation */}
        <circle 
          cx="100" 
          cy="100" 
          r="40" 
          stroke="#ffffff" 
          strokeWidth="20" 
          fill="none"
          strokeDasharray="251" 
          strokeDashoffset="251"
          style={{
            animation: 'draw 0.8s ease-out forwards'
          }}
        />
        
        <style>{`
          @keyframes draw {
            to {
              stroke-dashoffset: 0;
            }
          }
        `}</style>
      </svg>
    </div>
  );
};

export default Ysym;