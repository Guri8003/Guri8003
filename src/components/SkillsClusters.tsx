import { motion } from 'framer-motion';
import { Smartphone, Bot, LayoutTemplate, Server } from 'lucide-react';

interface SkillGroup {
  category: string;
  icon: React.ReactNode;
  accent: string;
  skills: { name: string; level: string }[];
}

export default function SkillsClusters() {
  const clusters: SkillGroup[] = [
    {
      category: 'Mobile Engineering',
      icon: <Smartphone size={20} color="#00D4FF" />,
      accent: '#00D4FF',
      skills: [
        { name: 'Flutter', level: 'Expert' },
        { name: 'Dart', level: 'Expert' },
        { name: 'Android SDK', level: 'Senior' },
        { name: 'Kotlin', level: 'Senior' },
        { name: 'iOS/Swift', level: 'Competent' },
      ],
    },
    {
      category: 'AI Product Engineering',
      icon: <Bot size={20} color="#8B5CF6" />,
      accent: '#8B5CF6',
      skills: [
        { name: 'OpenAI API', level: 'Expert' },
        { name: 'Gemini Pro', level: 'Expert' },
        { name: 'Claude API', level: 'Senior' },
        { name: 'Vertex AI', level: 'Senior' },
        { name: 'LangChain / CrewAI', level: 'Intermediate' },
      ],
    },
    {
      category: 'System Architecture',
      icon: <LayoutTemplate size={20} color="#10B981" />,
      accent: '#10B981',
      skills: [
        { name: 'Clean Architecture', level: 'Expert' },
        { name: 'BLoC Pattern', level: 'Expert' },
        { name: 'Riverpod State', level: 'Expert' },
        { name: 'MVVM', level: 'Senior' },
        { name: 'RxDart', level: 'Senior' },
      ],
    },
    {
      category: 'Backend & Cloud Services',
      icon: <Server size={20} color="#FF9F43" />,
      accent: '#FF9F43',
      skills: [
        { name: 'Firebase suite', level: 'Expert' },
        { name: 'Supabase ecosystem', level: 'Expert' },
        { name: 'Node.js Backend', level: 'Senior' },
        { name: 'Express / REST APIs', level: 'Senior' },
        { name: 'PostgreSQL DB', level: 'Competent' },
      ],
    },
  ];

  return (
    <section id="skills" className="section" style={{ borderTop: '1px solid var(--border-color)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: 'var(--space-xl)', maxWidth: '600px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--highlight-color)' }}>
              Stack Blueprint
            </span>
          </div>
          <h2 style={{ fontSize: 'var(--fs-h2)', fontWeight: 'var(--fw-extrabold)', marginBottom: '1.5rem' }}>
            Skills Visualization
          </h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            My technical competencies structured as domain clusters. Hover over each tag to reveal skill levels and interactive details.
          </p>
        </div>

        {/* Skill Clusters Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 'var(--space-lg)',
          }}
          className="skills-grid"
        >
          {clusters.map((cluster, cIdx) => (
            <motion.div
              key={cluster.category}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: cIdx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                padding: '2rem',
              }}
            >
              {/* Category Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {cluster.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FFFFFF' }}>{cluster.category}</h3>
              </div>

              {/* Tag Cloud Cluster */}
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignContent: 'flex-start' }}>
                {cluster.skills.map((skill, sIdx) => {
                  // Generate custom gentle floating delays
                  const floatDelay = (sIdx % 3) * 0.5;

                  return (
                    <motion.div
                      key={skill.name}
                      style={{
                        background: 'rgba(11, 18, 32, 0.5)',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                        padding: '8px 16px',
                        borderRadius: 'var(--radius-md)',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        color: '#FFFFFF',
                        cursor: 'default',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                      animate={{
                        y: [0, -4, 0],
                      }}
                      transition={{
                        duration: 3,
                        delay: floatDelay,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      whileHover={{
                        scale: 1.08,
                        borderColor: cluster.accent,
                        backgroundColor: 'rgba(255, 255, 255, 0.02)',
                        boxShadow: `0 4px 20px ${cluster.accent}15`,
                      }}
                    >
                      <span>{skill.name}</span>
                      <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', background: 'rgba(255,255,255,0.04)', padding: '2px 6px', borderRadius: '4px' }}>
                        {skill.level}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
            gap: var(--space-md) !important;
          }
        }
      `}</style>
    </section>
  );
}
