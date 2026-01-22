"use client";

import { useEffect, useRef } from 'react';

interface ParticleEffectProps {
  type?: 'snow' | 'rain';
  count?: number;
  cursorEffect?: boolean;
}

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

const ParticleEffect = ({ 
  type = 'snow', 
  count = 40,
  cursorEffect = true 
}: ParticleEffectProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    if (cursorEffect) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    const particles: Particle[] = [];
    for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: type === 'snow' ? 2 + Math.random() * 4 : 1 + Math.random() * 2,
          speedY: type === 'snow' ? 0.3 + Math.random() * 0.3 : 2 + Math.random() * 4,
          speedX: type === 'snow' ? (Math.random() - 0.5) * 0.5 : 0,
          opacity: 0.3 + Math.random() * 0.7,
        });
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
    
        let newX = p.x + p.speedX;
        let newY = p.y + p.speedY;

        if (cursorEffect) {
          const dx = p.x - mouseRef.current.x;
          const dy = p.y - mouseRef.current.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const repelRadius = 50;

          if (distance < repelRadius && distance > 0) {
            const force = (repelRadius - distance) / repelRadius;
            newX += (dx / distance) * force * 3;
            newY += (dy / distance) * force * 3;
          }
        }

        if (newY > canvas.height) {
          newY = -10;
          newX = Math.random() * canvas.width;
        }
        if (newX > canvas.width) {
          newX = 0;
        } else if (newX < 0) {
          newX = canvas.width;
        }

        p.x = newX;
        p.y = newY;

        ctx.beginPath();
        if (type === 'snow') {
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
            ctx.shadowBlur = 5;
            ctx.shadowColor = "rgba(255, 255, 255, 0.5)";
        } else {
            
            ctx.rect(p.x, p.y, p.size, p.size * 4);
            ctx.fillStyle = `rgba(150, 200, 255, ${p.opacity})`;
            ctx.shadowBlur = 0;
        }
        ctx.fill();
        
        ctx.shadowBlur = 0;
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, [type, count, cursorEffect]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: -1,
      }}
    />
  );
};

export default ParticleEffect;
