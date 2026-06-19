import { Cpu, Smartphone, Database, Award, Sparkles, Terminal } from 'lucide-react';

const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface TechLogo {
  name: string;
  icon: React.ReactNode;
}

export default function TechStack() {
  const stack: TechLogo[] = [
    { name: 'Flutter', icon: <Smartphone size={16} /> },
    { name: 'Firebase', icon: <Database size={16} /> },
    { name: 'OpenAI', icon: <Sparkles size={16} /> },
    { name: 'Gemini', icon: <Cpu size={16} /> },
    { name: 'GitHub', icon: <GithubIcon size={16} /> },
    { name: 'RevenueCat', icon: <Award size={16} /> },
    { name: 'Supabase', icon: <Database size={16} /> },
    { name: 'NodeJS', icon: <Terminal size={16} /> },
    { name: 'Android', icon: <Smartphone size={16} /> },
    { name: 'Kotlin', icon: <Terminal size={16} /> },
    { name: 'Dart', icon: <Terminal size={16} /> },
  ];

  // Duplicate the array to create a seamless infinite loop
  const repeatedStack = [...stack, ...stack, ...stack];

  return (
    <section className="section" style={{ borderTop: '1px solid var(--border-color)', padding: '4rem 0', overflow: 'hidden' }}>
      <div className="container" style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
          Integrated Ecosystems
        </span>
      </div>

      {/* Infinite slider track */}
      <div
        style={{
          display: 'flex',
          width: '100%',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Left & Right Blurs for Premium Fading */}
        <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '15%', background: 'linear-gradient(to right, var(--bg-color), rgba(0,0,0,0))', zIndex: 10, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '15%', background: 'linear-gradient(to left, var(--bg-color), rgba(0,0,0,0))', zIndex: 10, pointerEvents: 'none' }} />

        {/* Rolling Row */}
        <div
          className="marquee-track"
          style={{
            display: 'flex',
            gap: '1.5rem',
            animation: 'marquee 30s linear infinite',
          }}
        >
          {repeatedStack.map((tech, idx) => (
            <div
              key={idx}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid var(--border-color)',
                padding: '0.75rem 1.5rem',
                borderRadius: 'var(--radius-md)',
                color: 'var(--text-secondary)',
                fontWeight: 500,
                fontSize: '0.95rem',
                whiteSpace: 'nowrap',
                transition: 'border-color var(--transition-fast), color var(--transition-fast)',
                cursor: 'default',
              }}
              className="marquee-item"
            >
              <span style={{ opacity: 0.7 }}>{tech.icon}</span>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .marquee-track:hover {
          animation-play-state: paused;
        }
        .marquee-item:hover {
          border-color: var(--accent-color) !important;
          color: #FFFFFF !important;
        }
      `}</style>
    </section>
  );
}
