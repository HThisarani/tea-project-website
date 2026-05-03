import React, { useEffect, useRef } from 'react';

export default function TeaResearchHeroAnimation() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let particles = [];
    let animationFrameId;
    let w, h;

    const resize = () => {
      w = window.innerWidth;
      // Cap height to cover the hero viewport fully
      h = Math.max(window.innerHeight, 900);
      canvas.width = w;
      canvas.height = h;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      // Adjust density based on screen size for performance
      const particleCount = w < 768 ? 50 : 120;
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: Math.random() * 1.5 + 0.8,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      
      const connectionDist = w < 768 ? 130 : 180;

      for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Smooth bounce on boundaries
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        // Draw node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(74, 222, 128, 1)';
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'rgba(74, 222, 128, 0.8)';
        ctx.fill();
        ctx.shadowBlur = 0; // Reset shadow for lines

        // Connect nodes
        for (let j = i + 1; j < particles.length; j++) {
          let p2 = particles[j];
          let dx = p.x - p2.x;
          let dy = p.y - p2.y;
          let dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            // Opacity fades out as distance approaches maximum connection limit
            let alpha = 1 - (dist / connectionDist);
            ctx.strokeStyle = `rgba(16, 185, 129, ${alpha * 0.45})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
      {/* Hardware Accelerated Neural Canvas */}
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%', opacity: 0.85 }} />

      {/* Atmospheric Overlays */}
      <style>{`
        @keyframes scanline {
          0% { transform: translateY(-50vh); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(120vh); opacity: 0; }
        }
        @keyframes shiftGrid {
          0% { transform: translateY(0); }
          100% { transform: translateY(40px); }
        }
        @keyframes pulseGlow {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.1); opacity: 0.9; }
        }
        .hero-scanline {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent, rgba(74, 222, 128, 0.08), transparent);
          height: 35vh;
          width: 100%;
          animation: scanline 7s ease-in-out infinite;
        }
        .hero-data-grid-wrap {
          position: absolute;
          inset: 0;
          mask-image: linear-gradient(to bottom, black 0%, black 50%, transparent 100%);
          -webkit-mask-image: linear-gradient(to bottom, black 0%, black 50%, transparent 100%);
          overflow: hidden;
        }
        .hero-data-grid {
          position: absolute;
          inset: -40px 0 0 0;
          background-image: linear-gradient(rgba(34,197,94,0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(34,197,94,0.05) 1px, transparent 1px);
          background-size: 40px 40px;
          animation: shiftGrid 15s linear infinite;
        }
        .ai-orb-1 {
          position: absolute; width: 65vw; height: 65vw; max-width: 700px; max-height: 700px;
          background: radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, transparent 70%);
          top: -15%; left: -5%; filter: blur(80px); animation: pulseGlow 12s infinite alternate;
        }
        .ai-orb-2 {
          position: absolute; width: 55vw; height: 55vw; max-width: 600px; max-height: 600px;
          background: radial-gradient(circle, rgba(6, 182, 212, 0.09) 0%, transparent 70%);
          bottom: 0%; right: -10%; filter: blur(80px); animation: pulseGlow 14s infinite alternate-reverse;
        }
        
        @media (max-width: 768px) {
          .ai-orb-1, .ai-orb-2 { filter: blur(50px); }
        }
      `}</style>

      {/* Depth Layers */}
      <div className="ai-orb-1" />
      <div className="ai-orb-2" />
      <div className="hero-data-grid-wrap">
        <div className="hero-data-grid" />
      </div>
      <div className="hero-scanline" />
    </div>
  );
}
