import { motion } from 'framer-motion';
import { Sparkles, Terminal, CheckCircle } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  solution: string;
  techStack: string[];
  impact: string;
  metrics: { label: string; value: string }[];
  accentColor: string;
  mockup: React.ReactNode;
}

export default function CaseStudies() {
  const projects: CaseStudy[] = [
    {
      id: 'deckai',
      title: 'DeckAI',
      subtitle: 'AI Presentation Generator',
      description: 'Generates polished, layout-perfect presentation slides from single conversational prompts.',
      problem: 'Creating premium pitch decks takes hours of manual alignment and design formatting, resulting in slow sales velocity.',
      solution: 'Developed an intelligent layout-mapping agent that parses content structure and generates fully customizable HTML/CSS presentations instantly.',
      techStack: ['Flutter', 'OpenAI API', 'Vertex AI', 'Node.js', 'Dart'],
      impact: 'Drastically reduced slide creation time and optimized layout precision.',
      metrics: [
        { label: 'Generation Speed', value: '< 10s' },
        { label: 'Users Active', value: '45K+' },
        { label: 'Time Saved', value: '85%' },
      ],
      accentColor: '#00D4FF',
      mockup: (
        <div style={{ width: '100%', height: '100%', background: '#0B1220', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', overflow: 'hidden', position: 'relative' }}>
          {/* Deck Editor Top Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.75rem' }}>
            <div style={{ display: 'flex', gap: '6px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FF5F56' }} />
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FFBD2E' }} />
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#27C93F' }} />
            </div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontFamily: 'monospace' }}>deck_v2_final.deck</span>
            <span style={{ fontSize: '0.7rem', background: 'rgba(0, 212, 255, 0.1)', color: '#00D4FF', padding: '2px 8px', borderRadius: '4px' }}>Drafting Mode</span>
          </div>
          {/* Slide Mock */}
          <div style={{ flex: 1, display: 'flex', gap: '1rem' }}>
            {/* Sidebar list */}
            <div style={{ width: '60px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {[1, 2, 3].map((s) => (
                <div key={s} style={{ height: '36px', borderRadius: '4px', border: s === 1 ? '1px solid #00D4FF' : '1px solid rgba(255,255,255,0.04)', background: '#030712', opacity: s === 1 ? 1 : 0.4 }} />
              ))}
            </div>
            {/* Slide Workspace */}
            <div style={{ flex: 1, background: '#030712', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.04)', padding: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#FFFFFF' }}>Revolutionizing AI Layouts</h4>
              <p style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                Automating beautiful slides. Powered by clean layout mapping.
              </p>
              <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
                <div style={{ width: '40px', height: '16px', borderRadius: '4px', background: 'rgba(255,255,255,0.05)' }} />
                <div style={{ width: '60px', height: '16px', borderRadius: '4px', background: 'rgba(0, 212, 255, 0.2)' }} />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'spendora',
      title: 'Spendora',
      subtitle: 'Smart Finance Management',
      description: 'Elegant personal finance app with AI budget predictions and custom transactional telemetry.',
      problem: 'Typical expense trackers require tedious manual logging, causing users to drop off after a few days.',
      solution: 'Designed a Flutter client integrated with Supabase edge functions that extracts raw SMS data and auto-categorizes financial records.',
      techStack: ['Flutter', 'Dart', 'Supabase', 'Node.js', 'PostgreSQL'],
      impact: 'Enabled friction-free budgeting and real-time transaction synchronization.',
      metrics: [
        { label: 'App Store Rating', value: '4.8★' },
        { label: 'Downloads', value: '80K+' },
        { label: 'Categorization Accuracy', value: '96%' },
      ],
      accentColor: '#8B5CF6',
      mockup: (
        <div style={{ width: '100%', height: '100%', background: '#0B1220', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', overflow: 'hidden', position: 'relative' }}>
          {/* Spendora App Shell Mockup */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#FFFFFF' }}>Spendora</span>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>June 2026</span>
          </div>
          {/* Card Component */}
          <div style={{ background: 'linear-gradient(135deg, #8B5CF6 0%, #5B21B6 100%)', borderRadius: '8px', padding: '1rem', color: '#FFFFFF', boxShadow: '0 4px 15px rgba(139, 92, 246, 0.3)' }}>
            <div style={{ fontSize: '0.6rem', opacity: 0.8 }}>TOTAL SAVINGS</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, margin: '4px 0' }}>$12,450.80</div>
            <div style={{ fontSize: '0.6rem', background: 'rgba(255,255,255,0.2)', display: 'inline-block', padding: '2px 6px', borderRadius: '4px' }}>+12.4% this month</div>
          </div>
          {/* Analytics Bars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'var(--text-secondary)' }}>
              <span>Food &amp; Dining</span>
              <span>$450.00 / $600</span>
            </div>
            <div style={{ height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '3px', overflow: 'hidden' }}>
              <div style={{ width: '75%', height: '100%', background: '#8B5CF6', borderRadius: '3px' }} />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'plantai',
      title: 'Plant AI',
      subtitle: 'Plant Diagnosis Platform',
      description: 'Computer-vision powered mobile app that identifies plant diseases and outlines action plans in seconds.',
      problem: 'Farmers and gardeners face delayed responses to crop diseases, leading to yield loss.',
      solution: 'Created an offline-first Edge ML model running on-device via Flutter for zero-latency plant leaf diagnosis.',
      techStack: ['Flutter', 'Dart', 'Vertex AI', 'Supabase', 'TensorFlow Lite'],
      impact: 'Empowered local farmers to manage crops without internet reliance.',
      metrics: [
        { label: 'Detection Speed', value: '250ms' },
        { label: 'Plant Species', value: '150+' },
        { label: 'On-Device Accuracy', value: '94.5%' },
      ],
      accentColor: '#10B981',
      mockup: (
        <div style={{ width: '100%', height: '100%', background: '#0B1220', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', overflow: 'hidden', position: 'relative' }}>
          {/* Scanning Camera View Mock */}
          <div style={{ flex: 1, border: '2px dashed #10B981', borderRadius: '8px', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '0.75rem', background: 'rgba(16, 185, 129, 0.03)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <div style={{ borderTop: '2px solid #10B981', borderLeft: '2px solid #10B981', width: '12px', height: '12px' }} />
              <div style={{ borderTop: '2px solid #10B981', borderRight: '2px solid #10B981', width: '12px', height: '12px' }} />
            </div>
            {/* Center Leaf Indicator */}
            <div style={{ alignSelf: 'center', opacity: 0.8, color: '#10B981', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
              <Sparkles size={24} />
              <span style={{ fontSize: '0.65rem', fontWeight: 600 }}>Analyzing Leaf...</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <div style={{ borderBottom: '2px solid #10B981', borderLeft: '2px solid #10B981', width: '12px', height: '12px' }} />
              <div style={{ borderBottom: '2px solid #10B981', borderRight: '2px solid #10B981', width: '12px', height: '12px' }} />
            </div>
          </div>
          {/* Identification Result */}
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', background: 'rgba(16, 185, 129, 0.1)', padding: '8px 12px', borderRadius: '6px', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
            <CheckCircle size={16} color="#10B981" />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#FFFFFF' }}>Tomato Early Blight</span>
              <span style={{ fontSize: '0.6rem', color: 'var(--text-secondary)' }}>Treatment: Copper Fungicide</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'noteguru',
      title: 'NoteGuru AI',
      subtitle: 'Meeting Intelligence System',
      description: 'Autonomous voice agent that listens to ambient meetings, tracks speakers, and generates perfect summaries.',
      problem: 'Teams lose focus during meetings due to manual note-taking, and action items get forgotten.',
      solution: 'Built a real-time WebSocket audio streaming server connected to a Flutter app with Speaker Diarization.',
      techStack: ['Flutter', 'Gemini Pro API', 'Supabase', 'Node.js', 'WebSockets'],
      impact: 'Seamless transcript generation and task delegation for corporate teams.',
      metrics: [
        { label: 'Speaker Tracking', value: 'Up to 8' },
        { label: 'Accuracy Rate', value: '98%' },
        { label: 'Time Saved', value: '45m/meet' },
      ],
      accentColor: '#F59E0B',
      mockup: (
        <div style={{ width: '100%', height: '100%', background: '#0B1220', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', overflow: 'hidden', position: 'relative' }}>
          {/* Waves and Recording indicator */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.75rem', background: 'rgba(239, 68, 68, 0.1)', color: '#EF4444', padding: '2px 8px', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#EF4444', animation: 'pulse 1.5s infinite' }} /> REC
            </span>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>45:20 min</span>
          </div>
          {/* Speaker bubbles */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', gap: '8px', alignSelf: 'flex-start' }}>
              <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#4F46E5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.55rem', fontWeight: 'bold' }}>JD</div>
              <div style={{ background: '#030712', padding: '6px 10px', borderRadius: '8px', fontSize: '0.65rem', maxWidth: '180px', border: '1px solid rgba(255,255,255,0.03)' }}>
                "We need to deploy the Flutter build by Friday."
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px', alignSelf: 'flex-end', flexDirection: 'row-reverse' }}>
              <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#F59E0B', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.55rem', fontWeight: 'bold' }}>GS</div>
              <div style={{ background: 'rgba(245, 158, 11, 0.08)', padding: '6px 10px', borderRadius: '8px', fontSize: '0.65rem', maxWidth: '180px', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
                "All edge functions are configured on Supabase."
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'websitebuilder',
      title: 'Website Builder AI',
      subtitle: 'Prompt-to-Website Platform',
      description: 'A complete SaaS visual layout platform creating modern production landing pages from plain instructions.',
      problem: 'Hiring developers for landing page testing is expensive, taking weeks from idea to validation.',
      solution: 'Developed an LLM compiler engine that outputs layout configurations directly to dynamic UI components.',
      techStack: ['React', 'Next.js', 'Claude API', 'Tailwind', 'Node.js'],
      impact: 'Rapid deployment of landing page templates with fully customized styling.',
      metrics: [
        { label: 'Conversion', value: '+40%' },
        { label: 'Pages Rendered', value: '12K+' },
        { label: 'Average Build', value: '15s' },
      ],
      accentColor: '#EC4899',
      mockup: (
        <div style={{ width: '100%', height: '100%', background: '#0B1220', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', overflow: 'hidden', position: 'relative' }}>
          {/* Prompt Editor Interface */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#030712', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.05)', padding: '6px 10px' }}>
            <Terminal size={12} color="var(--text-secondary)" />
            <input disabled placeholder="Generate Stripe style hero section..." style={{ background: 'none', border: 'none', fontSize: '0.65rem', color: '#FFFFFF', flex: 1 }} />
          </div>
          {/* Render Preview Frame */}
          <div style={{ flex: 1, border: '1px solid rgba(236, 72, 153, 0.2)', borderRadius: '6px', background: 'rgba(236, 72, 153, 0.02)', padding: '0.75rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ width: '20px', height: '6px', background: '#FFFFFF', opacity: 0.8 }} />
              <div style={{ display: 'flex', gap: '4px' }}>
                <div style={{ width: '10px', height: '4px', background: '#FFFFFF', opacity: 0.4 }} />
                <div style={{ width: '10px', height: '4px', background: '#FFFFFF', opacity: 0.4 }} />
              </div>
            </div>
            <div style={{ height: '30px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '4px', marginTop: '4px', display: 'flex', alignItems: 'center', paddingLeft: '8px' }}>
              <div style={{ width: '40%', height: '4px', background: 'var(--accent-color)' }} />
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="projects" className="section" style={{ borderTop: '1px solid var(--border-color)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: 'var(--space-xxl)', maxWidth: '700px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent-color)' }}>
              Selected Work
            </span>
          </div>
          <h2 style={{ fontSize: 'var(--fs-h2)', fontWeight: 'var(--fw-extrabold)', marginBottom: '1.5rem' }}>
            Featured Case Studies
          </h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            A collection of deep engineering projects solving critical problems. Click a study to discover product scope, architecture solutions, and key telemetry details.
          </p>
        </div>

        {/* Case Studies Container */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xxl)' }}>
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1.2fr 1fr',
                  gap: 'var(--space-xl)',
                  alignItems: 'center',
                }}
                className={`case-study-row ${isEven ? 'even' : 'odd'}`}
              >
                {/* Text Specs Column */}
                <div style={{ order: isEven ? 1 : 2 }} className="case-study-info">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                    <span
                      style={{
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        color: project.accentColor,
                        letterSpacing: '0.1em',
                      }}
                    >
                      {project.subtitle}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: '2.5rem',
                      fontWeight: 800,
                      marginBottom: '1rem',
                      fontFamily: 'var(--font-primary)',
                      letterSpacing: '-0.02em',
                      color: '#FFFFFF',
                    }}
                  >
                    {project.title}
                  </h3>

                  <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.125rem' }}>
                    {project.description}
                  </p>

                  {/* Problem & Solution */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
                    <div>
                      <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>
                        The Problem
                      </span>
                      <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>{project.problem}</p>
                    </div>
                    <div>
                      <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>
                        The Solution
                      </span>
                      <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>{project.solution}</p>
                    </div>
                  </div>

                  {/* Tech Stack Badges */}
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          background: 'rgba(255, 255, 255, 0.03)',
                          border: '1px solid var(--border-color)',
                          color: 'var(--text-secondary)',
                          padding: '4px 12px',
                          borderRadius: 'var(--radius-full)',
                          fontSize: '0.8rem',
                          fontWeight: 500,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Metrics Grid */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, 1fr)',
                      gap: '1.5rem',
                      borderTop: '1px solid var(--border-color)',
                      paddingTop: '2rem',
                    }}
                  >
                    {project.metrics.map((metric, mIdx) => (
                      <div key={mIdx}>
                        <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#FFFFFF' }}>{metric.value}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '2px' }}>
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* UI Mockup Column */}
                <div
                  style={{
                    order: isEven ? 2 : 1,
                    background: 'var(--surface-color)',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-xl)',
                    padding: '2rem',
                    aspectRatio: '4/3',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: 'var(--shadow-md)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  className="case-study-visual"
                >
                  {/* Subtle Accent Glow Behind Mockup */}
                  <div
                    style={{
                      position: 'absolute',
                      width: '60%',
                      height: '60%',
                      borderRadius: '50%',
                      background: `radial-gradient(circle, ${project.accentColor}15 0%, rgba(0,0,0,0) 70%)`,
                      filter: 'blur(30px)',
                      pointerEvents: 'none',
                    }}
                  />
                  <div style={{ width: '100%', height: '100%', position: 'relative', zIndex: 2 }}>
                    {project.mockup}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @media (max-width: 968px) {
          .case-study-row {
            grid-template-columns: 1fr !important;
            gap: var(--space-lg) !important;
          }
          .case-study-info {
            order: 2 !important;
          }
          .case-study-visual {
            order: 1 !important;
            aspect-ratio: 16/10 !important;
          }
        }
      `}</style>
    </section>
  );
}
