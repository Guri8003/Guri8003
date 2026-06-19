import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

/*
import { Mail, Send } from 'lucide-react';

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
*/

interface SocialNode {
  name: string;
  icon: React.ReactNode;
  url: string;
  x: number;
  y: number;
  hoverColor: string;
}

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  // Position nodes on concentric tracks (Inner Radius: 300px, Outer Radius: 380px)
  const socialNodes: SocialNode[] = [];

  return (
    <section className="section spotlight-wrapper" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '8rem', overflow: 'hidden' }}>
      {/* Background Soft Spotlight */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(2, 86, 155, 0.12) 0%, rgba(0, 0, 0, 0) 70%)',
          filter: 'blur(60px)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="grid-2">
          {/* Left Hero Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}
          >
            {/* Greeting */}
            <motion.div variants={itemVariants} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent-color)' }}>
                Hello! I'm
              </span>
              <span style={{ width: '40px', height: '1px', backgroundColor: 'var(--accent-color)' }}></span>
            </motion.div>

            {/* Headline with handwritten-style wavy line */}
            <motion.h1
              variants={itemVariants}
              style={{
                fontSize: 'var(--fs-hero)',
                fontWeight: 'var(--fw-extrabold)',
                lineHeight: 'var(--lh-hero)',
                letterSpacing: 'var(--ls-hero)',
              }}
            >
              <span style={{ position: 'relative', display: 'inline-block' }}>
                Gurpreet Singh
                {/* Wavy Underline */}
                <svg
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                  style={{
                    position: 'absolute',
                    bottom: '-8px',
                    left: 0,
                    width: '100%',
                    height: '8px',
                    fill: 'none',
                    stroke: 'var(--accent-color)',
                    strokeWidth: 2,
                  }}
                >
                  <path d="M0,5 Q10,0 20,5 T40,5 T60,5 T80,5 T100,5" />
                </svg>
              </span>
              <br />
              <span className="text-gradient-purple" style={{ display: 'inline-block', marginTop: '1.5rem' }}>Flutter Architect</span>
              <br />
              <span style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 500, color: 'var(--text-secondary)' }}>&amp; AI Product Engineer</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              style={{
                fontSize: 'var(--fs-h3)',
                color: 'var(--text-secondary)',
                fontWeight: 'var(--fw-medium)',
                maxWidth: '600px',
                marginTop: '0.5rem',
                lineHeight: '1.4',
              }}
            >
              Specializing in building AI-powered mobile products used by thousands worldwide.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', marginTop: '1.5rem' }}
            >
              <a href="#projects" className="btn-primary">
                <span>View Projects</span>
                <ArrowDownRight size={18} />
              </a>
              <a
                href="/resume.pdf"
                download="Gurpreet_Singh_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <span>Get Resume</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </a>
            </motion.div>

            {/* Pulsing Watch Video / Play button */}
            <motion.div
              variants={itemVariants}
              style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', marginTop: '1rem' }}
              onClick={() => {
                const target = document.getElementById('apps');
                if (target) target.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  background: 'rgba(255,255,255,0.02)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                }}
                className="play-btn-circle"
              >
                {/* Secondary pulsing ring */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    border: '1px solid var(--accent-color)',
                    opacity: 0.5,
                  }}
                  className="pulse-ring-element"
                />
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" style={{ color: 'var(--accent-color)', marginLeft: '3px' }}>
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Watch Demo Apps</span>
            </motion.div>

            {/* Metrics */}
            <motion.div
              variants={itemVariants}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '2rem 1.5rem',
                borderTop: '1px solid var(--border-color)',
                paddingTop: '2.5rem',
                marginTop: '2rem',
                maxWidth: '500px',
              }}
            >
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FFFFFF', fontFamily: 'var(--font-primary)', letterSpacing: '-0.02em', lineHeight: '1.1' }}>
                  7+ Years
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '4px' }}>
                  Experience
                </div>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FFFFFF', fontFamily: 'var(--font-primary)', letterSpacing: '-0.02em', lineHeight: '1.1' }}>
                  30+ Apps
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '4px' }}>
                  Published Apps
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Hero Image / Cutout Avatar with Concentric Orbits & Nodes */}
          <div className="hero-image-container">
            {/* Inner Concentric Circle Orbit (Radius 300px) */}
            <div className="orbit-circle orbit-inner" />

            {/* Outer Concentric Circle Orbit (Radius 380px) */}
            <div className="orbit-circle orbit-outer" />

            {/* Behind Avatar Ambient Glow */}
            <div className="hero-avatar-glow" />

            {/* Portrait Cutout Frame */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="hero-avatar-frame"
            >
              <img
                src="/avatar.png"
                alt="Gurpreet Singh"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
              />
            </motion.div>

            {/* Positioning Social Badges on Orbits */}
            {socialNodes.map((node, idx) => (
              <a
                key={idx}
                href={node.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  position: 'absolute',
                  transform: `translate(${node.x}px, ${node.y}px)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  backgroundColor: '#0B1220',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
                  cursor: 'pointer',
                  zIndex: 10,
                  color: 'var(--text-secondary)',
                  transition: 'border-color var(--transition-fast), color var(--transition-fast), transform var(--transition-fast), box-shadow var(--transition-fast)',
                }}
                className="orbit-social-badge"
                title={node.name}
              >
                {node.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .hero-image-container {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 700px;
          width: 100%;
          overflow: visible;
        }

        .orbit-circle {
          position: absolute;
          border-radius: 50%;
          z-index: 1;
          pointer-events: none;
        }

        .orbit-inner {
          width: 600px;
          height: 600px;
          border: 1px dashed rgba(255, 255, 255, 0.05);
        }

        .orbit-outer {
          width: 760px;
          height: 760px;
          border: 1px dashed rgba(255, 255, 255, 0.03);
        }

        .hero-avatar-glow {
          position: absolute;
          width: 420px;
          height: 420px;
          background: radial-gradient(circle, rgba(0, 212, 255, 0.12) 0%, rgba(139, 92, 246, 0.03) 50%, rgba(0, 0, 0, 0) 100%);
          filter: blur(50px);
          z-index: 1;
          pointer-events: none;
        }

        .hero-avatar-frame {
          position: relative;
          width: 650px;
          height: 650px;
          z-index: 2;
        }

        .orbit-social-badge:hover {
          color: #FFFFFF !important;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) scale(1.15) !important;
          border-color: var(--accent-color) !important;
          box-shadow: 0 0 20px rgba(0, 212, 255, 0.2) !important;
        }

        .pulse-ring-element {
          animation: pulse-ring 2.5s cubic-bezier(0.25, 0, 0, 1) infinite;
        }

        @keyframes pulse-ring {
          0% {
            transform: scale(0.95);
            opacity: 0.5;
          }
          60% {
            transform: scale(1.4);
            opacity: 0;
          }
          100% {
            transform: scale(0.95);
            opacity: 0;
          }
        }

        @media (max-width: 968px) {
          .orbit-social-badge {
            display: none !important;
          }

          .hero-image-container {
            min-height: 450px;
            margin-top: 2rem;
          }

          .hero-avatar-frame {
            width: min(100%, 450px);
            height: auto;
            aspect-ratio: 1 / 1;
          }

          .orbit-inner {
            width: min(100%, 400px);
            height: min(100%, 400px);
            aspect-ratio: 1 / 1;
          }

          .orbit-outer {
            width: min(100%, 500px);
            height: min(100%, 500px);
            aspect-ratio: 1 / 1;
          }

          .hero-avatar-glow {
            width: min(100%, 320px);
            height: min(100%, 320px);
            aspect-ratio: 1 / 1;
          }
        }

        @media (max-width: 480px) {
          .hero-image-container {
            min-height: 320px;
          }

          .hero-avatar-frame {
            width: min(100%, 320px);
          }

          .orbit-inner {
            width: min(100%, 280px);
          }

          .orbit-outer {
            width: min(100%, 340px);
          }

          .hero-avatar-glow {
            width: min(100%, 220px);
            height: min(100%, 220px);
          }
        }
      `}</style>
    </section>
  );
}
