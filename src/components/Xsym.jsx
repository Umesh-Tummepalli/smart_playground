import React from 'react';

const Xsym = () => {
  return (
    <svg width="100" height="100" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="blueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00d2ff" />
          <stop offset="100%" stopColor="#0088a3" />
        </linearGradient>
      </defs>

      <rect x="10" y="10" width="180" height="180" rx="40" ry="40" fill="url(#blueGradient)" />
      
      {/* First diagonal line with drawing animation */}
      <path 
        d="M60 60 L140 140" 
        stroke="#ffffff" 
        strokeWidth="20" 
        strokeLinecap="round" 
        fill="none"
        strokeDasharray="113" 
        strokeDashoffset="113"
        style={{
          animation: 'draw 0.6s ease-out forwards'
        }}
      />
      
      {/* Second diagonal line with delayed drawing animation */}
      <path 
        d="M140 60 L60 140" 
        stroke="#ffffff" 
        strokeWidth="20" 
        strokeLinecap="round" 
        fill="none"
        strokeDasharray="113" 
        strokeDashoffset="113"
        style={{
          animation: 'draw 0.6s ease-out 0.3s forwards'
        }}
      />
      
      <style jsx>{`
        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </svg>
  );
};

export default Xsym;