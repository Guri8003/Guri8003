import { motion } from 'framer-motion';
import { Briefcase, Code } from 'lucide-react';

interface TimelineItem {
  period: string;
  role: string;
  company: string;
  location: string;
  bullets: string[];
  icon: React.ReactNode;
  tags: string[];
}

export default function Timeline() {
  const milestones: TimelineItem[] = [
    {
      period: 'Aug 2024 - Present',
      role: 'Senior Flutter Developer',
      company: 'Harav Technologies LLP',
      location: 'Sahibzada Ajit Singh Nagar, Punjab',
      bullets: [
        'Spearheading the development of a suite of AI-driven mobile applications, integrating advanced Large Language Models (LLMs) and generative APIs.',
        'Architecting complex features for dynamic content creation, including automatic presentation generation (PPT Maker) and website layouts.',
        'Optimizing app performance for real-time AI interactions in ChatBots and Voice Note processing.',
      ],
      icon: <Code size={20} color="var(--accent-color)" />,
      tags: ['Flutter', 'Dart', 'LLMs', 'Generative AI', 'Mobile Architecture'],
    },
    {
      period: 'Jun 2022 - Jun 2024',
      role: 'Android & Flutter Developer',
      company: 'Spiderweb-Tech Pvt. Ltd.',
      location: 'Remote',
      bullets: [
        'Developed and maintained mobile applications using Flutter and Android native technologies.',
        'Integrated third-party libraries and APIs to enhance application functionality.',
        'Collaborated with cross-functional teams to deliver scalable and robust solutions.',
      ],
      icon: <Briefcase size={20} color="var(--highlight-color)" />,
      tags: ['Flutter', 'Android Native', 'API Integration', 'Kotlin', 'Java'],
    },
    {
      period: 'Dec 2018 - Feb 2021',
      role: 'Android Application Developer',
      company: 'bCoder Castle Pvt. Ltd.',
      location: 'Sahibzada Ajit Singh Nagar, Punjab',
      bullets: [
        'Worked on the full lifecycle of Android application development including design, testing, and deployment.',
        'Implemented Firebase features including Crashlytics, Realtime Database, and Push Notifications.',
        'Managed social authentication integrations (Facebook, Google).',
      ],
      icon: <Code size={20} color="var(--success-color)" />,
      tags: ['Android SDK', 'Java', 'Firebase', 'Push Notifications', 'Social Auth'],
    },
  ];

  return (
    <section id="timeline" className="section" style={{ borderTop: '1px solid var(--border-color)', background: 'radial-gradient(circle at 10% 90%, rgba(139, 92, 246, 0.02) 0%, rgba(3, 7, 12, 0) 60%)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: 'var(--space-xxl)', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent-color)' }}>
              Milestones
            </span>
          </div>
          <h2 style={{ fontSize: 'var(--fs-h2)', fontWeight: 'var(--fw-extrabold)', marginBottom: '1.5rem' }}>
            Work Experience
          </h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            A chronological look at how I evolved from a native developer to an enterprise architect merging mobile design with next-generation artificial intelligence.
          </p>
        </div>

        {/* Timeline Line & Cards */}
        <div className="timeline-container">
          {/* Vertical Track Line */}
          <div className="timeline-track" />

          {milestones.map((item) => {
            return (
              <div
                key={item.period}
                className="timeline-item-container"
              >
                {/* Central Circle Badge */}
                <div className="timeline-badge">
                  {item.icon}
                </div>

                {/* Content Box */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="timeline-content-wrapper"
                >
                  <div className="timeline-card">
                    <div className="timeline-year-badge">{item.period}</div>

                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.25rem', color: '#FFFFFF' }}>{item.role}</h3>
                    
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.0rem' }}>
                      <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--accent-color)' }}>{item.company}</span>
                      <span style={{ fontSize: '0.825rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <span>📍 {item.location}</span>
                      </span>
                    </div>

                    <ul className="timeline-bullets">
                      {item.bullets.map((bullet, bIdx) => (
                        <li key={bIdx}>{bullet}</li>
                      ))}
                    </ul>

                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="timeline-tag"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
      <style>{`
        .timeline-container {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem 0;
        }

        .timeline-track {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 18px;
          width: 2px;
          background: linear-gradient(to bottom, var(--border-color) 0%, var(--accent-color) 30%, var(--highlight-color) 70%, var(--border-color) 100%);
          box-shadow: 0 0 8px rgba(0, 212, 255, 0.1);
        }

        .timeline-item-container {
          position: relative;
          width: 100%;
          margin-bottom: var(--space-xl);
        }

        .timeline-badge {
          position: absolute;
          left: 18px;
          top: 24px;
          transform: translate(-50%, -50%);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--bg-color);
          border: 2px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 5;
          transition: all var(--transition-medium);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6);
        }

        .timeline-item-container:hover .timeline-badge {
          border-color: var(--accent-color);
          box-shadow: 0 0 20px rgba(0, 212, 255, 0.4);
          background: var(--surface-elevated);
          transform: translate(-50%, -50%) scale(1.15);
        }

        .timeline-content-wrapper {
          width: 100%;
        }

        .timeline-card {
          background: var(--surface-color);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          padding: var(--space-lg);
          margin-left: 54px;
          transition: all var(--transition-medium);
          position: relative;
          overflow: hidden;
          box-shadow: var(--shadow-md);
        }

        .timeline-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: inherit;
          background: radial-gradient(400px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(255, 255, 255, 0.04), transparent 40%);
          z-index: 2;
          pointer-events: none;
          opacity: 0;
          transition: opacity var(--transition-medium);
        }

        .timeline-card:hover::before {
          opacity: 1;
        }

        .timeline-card:hover {
          border-color: rgba(0, 212, 255, 0.25);
          transform: translateX(8px);
          box-shadow: var(--shadow-lg), 0 10px 30px rgba(0, 212, 255, 0.05);
        }

        .timeline-year-badge {
          display: inline-block;
          padding: 4px 12px;
          border-radius: var(--radius-full);
          font-size: 0.875rem;
          font-weight: 700;
          background: rgba(0, 212, 255, 0.08);
          color: var(--accent-color);
          border: 1px solid rgba(0, 212, 255, 0.2);
          margin-bottom: 1rem;
          transition: all var(--transition-fast);
        }

        .timeline-item-container:hover .timeline-year-badge {
          background: linear-gradient(135deg, var(--accent-color), var(--highlight-color));
          color: var(--bg-color);
          border-color: transparent;
          box-shadow: 0 4px 15px rgba(0, 212, 255, 0.3);
        }

        .timeline-bullets {
          list-style-type: none;
          padding: 0;
          margin: 0 0 1.25rem 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .timeline-bullets li {
          position: relative;
          padding-left: 1.25rem;
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .timeline-bullets li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--accent-color);
          font-weight: bold;
          font-size: 1.1rem;
          line-height: 1;
          top: 2px;
        }

        .timeline-tag {
          font-size: 0.75rem;
          background: rgba(255, 255, 255, 0.02);
          color: var(--text-secondary);
          border: 1px solid var(--border-color);
          padding: 4px 10px;
          border-radius: var(--radius-sm);
          transition: all var(--transition-fast);
        }

        .timeline-card:hover .timeline-tag {
          border-color: rgba(0, 212, 255, 0.15);
          background: rgba(0, 212, 255, 0.02);
          color: var(--text-primary);
        }

        @media (max-width: 768px) {
          .timeline-card {
            padding: var(--space-md);
            margin-left: 45px;
          }
          .timeline-content-wrapper {
            width: 100% !important;
          }
          .timeline-track {
            left: 12px !important;
          }
          .timeline-badge {
            left: 12px !important;
            width: 32px !important;
            height: 32px !important;
          }
          .timeline-card:hover {
            transform: translateX(4px);
          }
        }
      `}</style>
    </section>
  );
}
