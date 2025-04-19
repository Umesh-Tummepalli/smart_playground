import React from 'react';

const WinXSym = () => {
  return (
    <div className="relative w-full h-full">  {/* Make container fill parent */}
      <svg 
        viewBox="0 0 200 200"  // Keep your original coordinate system
        preserveAspectRatio="xMidYMid meet"  // Maintain aspect ratio
        style={{ width: '100%', height: '100%' }}  // Scale to parent
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
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
        </defs>

        {/* Background with subtle pulse */}
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
            filter: 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.7))'
          }}
        />
        
        {/* X symbol with bounce animation */}
        <g style={{ transformOrigin: 'center' }}>
          <path 
            d="M60 60 L140 140" 
            stroke="white" 
            strokeWidth="20" 
            strokeLinecap="round" 
            fill="none"
            style={{
              animation: 'bounceIn 0.8s ease-out forwards, glowPulse 1.5s ease-in-out 0.8s infinite',
              filter: 'url(#glow)'
            }}
          />
          <path 
            d="M140 60 L60 140" 
            stroke="white" 
            strokeWidth="20" 
            strokeLinecap="round" 
            fill="none"
            style={{
              animation: 'bounceIn 0.8s ease-out 0.2s forwards, glowPulse 1.5s ease-in-out 1s infinite',
              filter: 'url(#glow)'
            }}
          />
        </g>
        
        {/* CSS animations */}
        <style>{`
          @keyframes bounceIn {
            0% { 
              opacity: 0;
              transform: scale(0.3);
            }
            50% { 
              opacity: 1;
              transform: scale(1.1);
            }
            70% { 
              transform: scale(0.9);
            }
            100% { 
              transform: scale(1);
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
              opacity: 0.4;
            }
          }
        `}</style>
      </svg>
    </div>
  );
};

export default WinXSym;