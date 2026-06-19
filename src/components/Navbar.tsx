import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide/Show logic on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsVisible(false); // scrolling down, hide
      } else {
        setIsVisible(true); // scrolling up, show
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: 'Products', href: '#products' },
    { name: 'Apps', href: '#apps' },
    { name: 'Case Studies', href: '#projects' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Skills', href: '#skills' },
  ];

  return (
    <>
      <motion.header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 900,
          padding: '1.25rem 0',
          transition: 'padding var(--transition-fast)',
        }}
        animate={{
          y: isVisible ? 0 : -100,
          backgroundColor: isScrolled ? 'rgba(3, 7, 18, 0.75)' : 'rgba(3, 7, 18, 0)',
          backdropFilter: isScrolled ? 'blur(16px)' : 'blur(0px)',
          borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.06)' : '1px solid rgba(255, 255, 255, 0)',
        }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Brand Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 800, letterSpacing: '-0.02em', fontSize: '1.125rem' }}>
            <span>buildwithgurpreet</span>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-color)', display: 'inline-block' }} />
          </a>

          {/* Desktop Nav Links */}
          <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-only">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: 'var(--text-secondary)',
                  position: 'relative',
                }}
                className="nav-link"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTA */}
          <div className="desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a
              href="#contact"
              className="btn-secondary"
              style={{
                padding: '0.5rem 1.25rem',
                fontSize: '0.875rem',
                borderRadius: 'var(--radius-full)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <span>Connect</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              display: 'none',
            }}
            className="mobile-toggle"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* CSS overrides for desktop/mobile nav display */}
      <style>{`
        @media (min-width: 769px) {
          .mobile-toggle { display: none !important; }
        }
        @media (max-width: 768px) {
          .desktop-only { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
        .nav-link {
          transition: color var(--transition-fast);
        }
        .nav-link:hover {
          color: var(--text-primary) !important;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 100%;
          transform: scaleX(0);
          height: 1px;
          bottom: -4px;
          left: 0;
          background-color: var(--accent-color);
          transform-origin: bottom right;
          transition: transform var(--transition-fast);
        }
        .nav-link:hover::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
      `}</style>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed',
              top: '70px',
              left: 0,
              right: 0,
              backgroundColor: 'rgba(3, 7, 18, 0.96)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid var(--border-color)',
              padding: '2rem',
              zIndex: 899,
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 500,
                  color: 'var(--text-secondary)',
                }}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary"
              style={{ justifyContent: 'center', width: '100%' }}
            >
              <span>Connect</span>
              <ArrowUpRight size={16} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
