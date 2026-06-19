import { useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductsBuilt from './components/ProductsBuilt';
import AppShowcase from './components/AppShowcase';
import CaseStudies from './components/CaseStudies';
import Timeline from './components/Timeline';
import SkillsClusters from './components/SkillsClusters';
import LinkedInPosts from './components/LinkedInPosts';
import TechStack from './components/TechStack';
import Contact from './components/Contact';

export default function App() {
  // Smooth scroll configuration or scroll position animations
  useEffect(() => {
    // Scroll progress line setup
    const handleScrollProgress = () => {
      const scrollProgress = document.getElementById('scroll-progress-indicator');
      if (scrollProgress) {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.pageYOffset / totalHeight) * 100;
        scrollProgress.style.width = `${progress}%`;
      }
    };

    window.addEventListener('scroll', handleScrollProgress, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollProgress);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar at very top */}
      <div
        id="scroll-progress-indicator"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '2px',
          background: 'linear-gradient(90deg, var(--accent-color), var(--highlight-color))',
          zIndex: 1000,
          width: '0%',
          transition: 'width 0.1s ease-out',
        }}
      />

      {/* Global Aesthetics (Noise overlay + ambient lighting) */}
      <div className="bg-grain-overlay" />
      <div className="bg-ambient-glow" />
      <div className="bg-ambient-glow-2" />

      {/* Custom Spotlight Cursor */}
      <CustomCursor />

      {/* Main Layout */}
      <Navbar />
      
      <main>
        <Hero />
        <ProductsBuilt />
        <AppShowcase />
        <CaseStudies />
        <Timeline />
        <SkillsClusters />
        <LinkedInPosts />
        <TechStack />
        <Contact />
      </main>
    </>
  );
}
