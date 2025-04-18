import React from 'react';

const ConfettiAnimation = () => {
  // Generate random particles
  const particles = Array.from({ length: 150 }).map((_, i) => {
    const size = Math.random() * 10 + 5;
    const shapeType = Math.floor(Math.random() * 3); // 0: circle, 1: square, 2: line
    const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    const delay = Math.random() * 5;
    const duration = Math.random() * 3 + 3;
    const left = Math.random() * 100;
    const rotation = Math.random() * 360;
    const startPosition = - (Math.random() * 100 + 100); // Start above the viewport
    
    return {
      id: i,
      size,
      shapeType,
      color,
      delay,
      duration,
      left,
      rotation,
      startPosition
    };
  });

  return (
    <div style={styles.container}>
      {particles.map(particle => (
        <div
          key={particle.id}
          style={{
            ...styles.particle,
            ...(particle.shapeType === 0 ? styles.circle : {}),
            ...(particle.shapeType === 1 ? styles.square : {}),
            ...(particle.shapeType === 2 ? styles.line : {}),
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            left: `${particle.left}%`,
            top: `${particle.startPosition}px`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            transform: `rotate(${particle.rotation}deg)`
          }}
        />
      ))}
      
      {/* Embedded CSS */}
      <style jsx>{`
        @keyframes confetti-fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

const styles = {
  container: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    pointerEvents: 'none',
    zIndex: 9999
  },
  particle: {
    position: 'absolute',
    animationName: 'confetti-fall',
    animationTimingFunction: 'linear',
    animationIterationCount: '1',
    willChange: 'transform, opacity'
  },
  circle: {
    borderRadius: '50%'
  },
  square: {
    borderRadius: '2px'
  },
  line: {
    width: '3px !important',
    height: '15px !important'
  }
};

export default ConfettiAnimation;