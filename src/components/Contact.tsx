import { useState } from 'react';
import { Mail, Check } from 'lucide-react';

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

/*
const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);
*/

const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const emailAddress = 'guri.70pro@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const socials = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/gurpreet-singh0525', icon: <LinkedinIcon size={18} /> },
    // { name: 'GitHub', url: 'https://github.com/Guri8003', icon: <GithubIcon size={18} /> },
    { name: 'Instagram', url: 'https://instagram.com/buildwithgurpreet', icon: <InstagramIcon size={18} /> },
    // { name: 'WhatsApp', url: 'https://wa.me/1234567890', icon: <Send size={18} /> },
  ];

  return (
    <section id="contact" className="section" style={{ borderTop: '1px solid var(--border-color)', background: 'linear-gradient(to bottom, rgba(3,7,12,0) 0%, rgba(2, 86, 155, 0.03) 100%)', paddingBottom: '8rem' }}>
      <div className="container">
        <div
          className="card"
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: 'var(--space-xl)',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2rem',
          }}
        >
          {/* Accent Header */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent-color)' }}>
              Let's Collaborate
            </span>
          </div>

          {/* Heading */}
          <h2
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              lineHeight: '1.1',
              color: '#FFFFFF',
              maxWidth: '700px',
            }}
          >
            Let's Build Something <span className="text-gradient-purple">Exceptional</span>
          </h2>

          <p style={{ color: 'var(--text-secondary)', maxWidth: '540px', fontSize: '1.125rem' }}>
            Available for architectural consulting, AI system integrations, and select high-fidelity mobile engineering products.
          </p>

          {/* Luxury Email Card Link */}
          <div
            onClick={copyEmail}
            style={{
              background: '#030712',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-full)',
              padding: '0.75rem 1.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              cursor: 'pointer',
              transition: 'border-color var(--transition-fast), transform var(--transition-fast)',
              marginTop: '1rem',
            }}
            className="email-copy-bar"
          >
            <Mail size={16} color="var(--accent-color)" />
            <span style={{ fontSize: '1rem', fontWeight: 600, color: '#FFFFFF', fontFamily: 'monospace' }}>{emailAddress}</span>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.03)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background var(--transition-fast)',
              }}
            >
              {copied ? <Check size={14} color="var(--success-color)" /> : <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>COPY</span>}
            </div>
          </div>

          {/* Social Icons row */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '2rem' }}>
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid var(--border-color)',
                  padding: '0.6rem 1.25rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: 'var(--text-secondary)',
                  transition: 'border-color var(--transition-fast), color var(--transition-fast), transform var(--transition-fast)',
                }}
                className="social-btn"
              >
                {social.icon}
                <span>{social.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Mini Footer branding */}
        <div style={{ marginTop: '6rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }} className="footer-credits">
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} Gurpreet Singh. All rights reserved.
          </span>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Handcrafted with <span style={{ color: 'var(--accent-color)' }}>React</span> &amp; <span style={{ color: 'var(--highlight-color)' }}>Framer Motion</span>.
          </span>
        </div>
      </div>
      <style>{`
        .email-copy-bar:hover {
          border-color: var(--accent-color) !important;
          transform: translateY(-2px);
        }
        .social-btn:hover {
          border-color: var(--accent-color) !important;
          color: #FFFFFF !important;
          transform: translateY(-2px);
        }
        @media (max-width: 640px) {
          .footer-credits {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
