import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      // Update global CSS variables on the root for spot-light hover cards
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Trigger cursor visible initially if cursor has moved
    setIsVisible(true);

    const handleHoverStart = () => setIsHovered(true);
    const handleHoverEnd = () => setIsHovered(false);

    // Attach to links and buttons
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], .interactive-card');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleHoverStart);
      el.addEventListener('mouseleave', handleHoverEnd);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Small Pointer Dot */}
      <motion.div
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          position: 'fixed',
          transform: 'translate(-50%, -50%)',
          width: isHovered ? 12 : 6,
          height: isHovered ? 12 : 6,
          borderRadius: '50%',
          backgroundColor: '#00D4FF',
          zIndex: 9999,
          pointerEvents: 'none',
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />
      {/* Outer Spotlight Aura */}
      <motion.div
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          position: 'fixed',
          transform: 'translate(-50%, -50%)',
          width: isHovered ? 120 : 60,
          height: isHovered ? 120 : 60,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, rgba(139, 92, 246, 0.05) 50%, rgba(0, 0, 0, 0) 100%)',
          zIndex: 9998,
          pointerEvents: 'none',
        }}
        animate={{
          scale: isHovered ? 1.8 : 1,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 35 }}
      />
    </>
  );
}
