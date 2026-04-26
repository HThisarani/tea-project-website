import React, { useEffect, useState } from 'react';

export default function CursorSparkles() {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia && window.matchMedia("(pointer: coarse)").matches) return;

    let particles = [];
    const maxParticles = 20;
    let isThrottled = false;

    const createParticle = (x, y) => {
      const id = Date.now() + Math.random();
      // Add slight random offset to make it look like a floating trail
      const offsetX = x + (Math.random() - 0.5) * 12;
      const offsetY = y + (Math.random() - 0.5) * 12;
      
      const newParticle = { id, x: offsetX, y: offsetY };
      particles.push(newParticle);
      
      if (particles.length > maxParticles) {
        particles.shift();
      }

      setDots([...particles]);

      setTimeout(() => {
        particles = particles.filter(p => p.id !== id);
        setDots([...particles]);
      }, 600);
    };

    const handleMouseMove = (e) => {
      if (isThrottled) return;
      isThrottled = true;
      
      requestAnimationFrame(() => {
        createParticle(e.clientX, e.clientY);
        isThrottled = false;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes sparkleFadeOut {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(0) translateY(-10px); opacity: 0; }
        }
        .tea-sparkle {
          position: fixed;
          width: 5px;
          height: 5px;
          background: #34d399;
          box-shadow: 0 0 8px #34d399, 0 0 15px #10b981;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          animation: sparkleFadeOut 0.6s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
        }
      `}</style>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: 9999 }}>
        {dots.map(dot => (
          <div
            key={dot.id}
            className="tea-sparkle"
            style={{ left: dot.x, top: dot.y }}
          />
        ))}
      </div>
    </>
  );
}
