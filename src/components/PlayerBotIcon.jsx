import React from "react";

const PlayerBotIcon = ({ type, isTurn = false }) => {
  return (
    <div className="w-32 h-32 flex items-center justify-center relative m-10 scale-150">
      {/* Turn indicator ring */}
      {isTurn && (
        <div className="absolute inset-0 rounded-full border-4 border-green-400 animate-pulse" />
      )}
      
      {type === "bot" ? (
        // Enhanced Bot SVG
        <svg width="128" height="128" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          {/* Head */}
          <rect x="40" y="40" width="120" height="120" rx="15" fill="#3498db" stroke="#2980b9" strokeWidth="4" />
          
          {/* Antenna */}
          <line x1="100" y1="15" x2="100" y2="40" stroke="#2c3e50" strokeWidth="6" strokeLinecap="round" />
          <circle cx="100" cy="10" r="10" fill="#e74c3c" />
          
          {/* Eyes */}
          <circle cx="70" cy="80" r="15" fill="#ecf0f1" stroke="#2c3e50" strokeWidth="2" />
          <circle cx="70" cy="80" r="8" fill="#2c3e50" />
          <circle cx="67" cy="77" r="3" fill="#fff" />
          
          <circle cx="130" cy="80" r="15" fill="#ecf0f1" stroke="#2c3e50" strokeWidth="2" />
          <circle cx="130" cy="80" r="8" fill="#2c3e50" />
          <circle cx="127" cy="77" r="3" fill="#fff" />
          
          {/* Mouth/Speaker */}
          <rect x="75" y="115" width="50" height="20" rx="5" fill="#2c3e50" />
          
          {/* Loading animation when it's bot turn */}
          {isTurn ? (
            <g>
              <line x1="85" y1="125" x2="115" y2="125" stroke="#ecf0f1" strokeWidth="0" strokeLinecap="round">
                <animate 
                  attributeName="stroke-width" 
                  values="1;4;1" 
                  dur="1.5s" 
                  repeatCount="indefinite" 
                />
              </line>
              <line x1="85" y1="125" x2="115" y2="125" stroke="#3498db" strokeWidth="4" strokeLinecap="round">
                <animate 
                  attributeName="x2" 
                  values="85;115;85" 
                  dur="1.5s" 
                  repeatCount="indefinite" 
                />
              </line>
            </g>
          ) : (
            <line x1="85" y1="125" x2="115" y2="125" stroke="#ecf0f1" strokeWidth="4" strokeLinecap="round" />
          )}
          
          {/* Decorative elements */}
          <circle cx="50" cy="50" r="5" fill="#e74c3c" />
          <circle cx="150" cy="50" r="5" fill="#e74c3c">
            {isTurn && (
              <animate 
                attributeName="fill" 
                values="#e74c3c;#f39c12;#e74c3c" 
                dur="0.8s" 
                repeatCount="indefinite" 
              />
            )}
          </circle>
          <rect x="60" y="140" width="80" height="10" rx="5" fill="#2c3e50" />
        </svg>
      ) : (
        // Enhanced Player SVG (Human Face)
        <svg width="128" height="128" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          {/* Hair */}
          <path d="M55 80 C55 40, 145 40, 145 80" fill="#663931" stroke="#333" strokeWidth="2" />
          
          {/* Face */}
          <circle cx="100" cy="95" r="45" fill="#ffdbac" stroke="#333" strokeWidth="2" />
          
          {/* Eyes */}
          <ellipse cx="80" cy="85" rx="8" ry="10" fill="white" stroke="#333" strokeWidth="1.5" />
          <circle cx="80" cy="85" r="4" fill="#2c3e50" />
          <circle cx="78" cy="83" r="1.5" fill="white" />
          
          <ellipse cx="120" cy="85" rx="8" ry="10" fill="white" stroke="#333" strokeWidth="1.5" />
          <circle cx="120" cy="85" r="4" fill="#2c3e50" />
          <circle cx="118" cy="83" r="1.5" fill="white" />
          
          {/* Eyebrows */}
          <path d="M68 73 Q80 68, 88 75" stroke="#663931" strokeWidth="2.5" fill="none" />
          <path d="M112 75 Q120 68, 132 73" stroke="#663931" strokeWidth="2.5" fill="none" />
          
          {/* Nose */}
          <path d="M100 92 L104 102 L96 102 Z" fill="#f5ceb3" stroke="#dba88c" strokeWidth="1" />
          
          {/* Mouth - Changes to a bigger smile when it's player's turn */}
          {isTurn ? (
            <path d="M85 115 Q100 130, 115 115" stroke="#333" strokeWidth="2" fill="#ff9999" />
          ) : (
            <path d="M85 115 Q100 125, 115 115" stroke="#333" strokeWidth="2" fill="#ff9999" />
          )}
          
          {/* Body/Shirt */}
          <path d="M65 140 L75 130 C75 130, 125 130, 125 130 L135 140 L135 160 L65 160 Z" fill="#2ecc71" stroke="#27ae60" strokeWidth="2" />
          <circle cx="100" cy="140" r="5" fill="#ecf0f1" />
        </svg>
      )}
    </div>
  );
};

export default PlayerBotIcon;