import { useState, useEffect, useRef } from 'react';

export interface CursorGlowOptions {
  glowColor?: string;
  glowSize?: number;
  centerSize?: number;
  blendMode?: 'normal' | 'multiply' | 'screen' | 'overlay' | 'darken' | 'lighten' | 'color-dodge' | 'color-burn' | 'hard-light' | 'soft-light' | 'difference' | 'exclusion';
  enablePulse?: boolean;
  smoothing?: number;
}

export const useCursorGlow = (options: CursorGlowOptions = {}) => {
  const {
    glowColor = 'bg-primary/30',
    glowSize = 10,
    centerSize = 4,
    blendMode = 'difference',
    enablePulse = true,
    smoothing = 0.1
  } = options;

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const sectionElement = sectionRef.current;
    if (sectionElement) {
      sectionElement.addEventListener('mousemove', handleMouseMove);
      sectionElement.addEventListener('mouseenter', handleMouseEnter);
      sectionElement.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (sectionElement) {
        sectionElement.removeEventListener('mousemove', handleMouseMove);
        sectionElement.removeEventListener('mouseenter', handleMouseEnter);
        sectionElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  const CursorGlow = () => (
    <div 
      className={`cursor-glow absolute pointer-events-none z-50 mix-blend-${blendMode} transition-opacity duration-300 ${
        isHovering ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        left: mousePosition.x - glowSize,
        top: mousePosition.y - glowSize,
        transition: `all ${smoothing}s ease-out, opacity 0.3s ease-out`
      }}
    >
      <div 
        className={`${glowColor} rounded-full blur-md ${enablePulse ? 'animate-pulse' : ''}`}
        style={{ width: glowSize * 2, height: glowSize * 2 }}
      />
      <div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary rounded-full"
        style={{ width: centerSize, height: centerSize }}
      />
    </div>
  );

  return {
    sectionRef,
    mousePosition,
    isHovering,
    CursorGlow
  };
};
