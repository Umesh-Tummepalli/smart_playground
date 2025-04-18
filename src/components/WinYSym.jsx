import React from 'react';

const WinOSym = () => {
  return (
    <div className="relative w-full h-full"> {/* Make container fill parent */}
      <svg 
        viewBox="0 0 200 200"  // Keep original coordinate system
        preserveAspectRatio="xMidYMid meet"  // Maintain aspect ratio
        style={{ width: '100%', height: '100%' }}  // Scale to parent
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gold gradient matching WinXSym */}
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="50%" stopColor="#FFA500" />
            <stop offset="100%" stopColor="#FF8C00" />
          </linearGradient>
          
          {/* Glow effect */}
          <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          
          {/* Radial gradient for inner glow */}
          <radialGradient id="innerGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Gold background with pulse effect */}
        <rect 
          x="10" 
          y="10" 
          width="180" 
          height="180" 
          rx="40" 
          ry="40" 
          fill="url(#goldGradient)"
          style={{ 
            animation: 'pulse 2s ease-in-out infinite',
            filter: 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.7))',
            transformOrigin: 'center'
          }}
        />
        
        {/* Inner glow circle */}
        <circle 
          cx="100" 
          cy="100" 
          r="45" 
          fill="url(#innerGlow)"
          opacity="0"
          style={{
            animation: 'fadeIn 0.5s ease-out 0.8s forwards'
          }}
        />
        
        {/* Main O circle with bounce animation */}
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
            animation: 'drawCircle 0.8s ease-out forwards, glowPulse 1.5s ease-in-out 0.8s infinite',
            filter: 'url(#glow)',
            transformOrigin: 'center'
          }}
        />
        
        {/* CSS animations */}
        <style>{`
          @keyframes drawCircle {
            to {
              stroke-dashoffset: 0;
            }
          }
          @keyframes glowPulse {
            0%, 100% { 
              stroke-width: 20;
              stroke-opacity: 1;
              filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.7));
            }
            50% { 
              stroke-width: 24;
              stroke-opacity: 0.9;
              filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.9));
            }
          }
          @keyframes pulse {
            0%, 100% { 
              transform: scale(1);
              opacity: 1;
            }
            50% { 
              transform: scale(1.02);
              opacity: 0.9;
            }
          }
          @keyframes fadeIn {
            to {
              opacity: 1;
            }
          }
        `}</style>
      </svg>
    </div>
  );
};

export default WinOSym;