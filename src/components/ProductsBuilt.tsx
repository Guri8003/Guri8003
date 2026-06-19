import { motion } from 'framer-motion';
import { Cpu, Smartphone, Bot, Layout, Sliders, Presentation, Mic, CheckSquare } from 'lucide-react';

export default function ProductsBuilt() {
  const products = [
    {
      title: 'AI Products',
      desc: 'Autonomous multi-modal models & semantic search systems.',
      icon: <Cpu size={24} color="#00D4FF" />,
      tag: 'LLMs • RAG',
      widget: (
        <div style={{ background: '#030712', borderRadius: '8px', padding: '12px', fontSize: '0.75rem', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748B' }}>
            <span>Prompt tokens: 1,420k</span>
            <span style={{ color: 'var(--success-color)' }}>99.8% Success</span>
          </div>
          <div style={{ height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
            <div style={{ width: '80%', height: '100%', background: 'linear-gradient(90deg, var(--primary-color), var(--accent-color))' }} />
          </div>
          <div style={{ color: 'var(--text-secondary)', fontFamily: 'monospace' }}>&gt; Initializing agent node...</div>
        </div>
      ),
    },
    {
      title: 'Mobile Apps',
      desc: 'High-performance cross-platform Flutter/Native engineering.',
      icon: <Smartphone size={24} color="#8B5CF6" />,
      tag: 'iOS & Android',
      widget: (
        <div style={{ background: '#030712', borderRadius: '8px', padding: '12px', fontSize: '0.75rem', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '3px', background: 'var(--primary-color)' }} />
            <span style={{ color: '#FFFFFF', fontWeight: 600 }}>App Store Sync</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)', fontSize: '0.7rem' }}>
            <span>Build #2,410</span>
            <span style={{ color: 'var(--accent-color)' }}>60 FPS Native</span>
          </div>
        </div>
      ),
    },
    {
      title: 'AI Agents',
      desc: 'Context-aware background agents orchestrating complex workflows.',
      icon: <Bot size={24} color="#10B981" />,
      tag: 'CrewAI • LangChain',
      widget: (
        <div style={{ background: '#030712', borderRadius: '8px', padding: '12px', fontSize: '0.75rem', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
            <span style={{ background: 'rgba(139, 92, 246, 0.15)', color: '#8B5CF6', padding: '2px 6px', borderRadius: '4px', fontSize: '0.65rem' }}>Planning</span>
            <span style={{ background: 'rgba(0, 212, 255, 0.15)', color: '#00D4FF', padding: '2px 6px', borderRadius: '4px', fontSize: '0.65rem' }}>Executing</span>
            <span style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#10B981', padding: '2px 6px', borderRadius: '4px', fontSize: '0.65rem' }}>Done</span>
          </div>
          <div style={{ color: '#64748B', fontSize: '0.7rem' }}>Agent output verified in 430ms</div>
        </div>
      ),
    },
    {
      title: 'SaaS Platforms',
      desc: 'Robust architectures supporting telemetry, billing, and scale.',
      icon: <Layout size={24} color="#FF9F43" />,
      tag: 'Supabase • Cloud',
      widget: (
        <div style={{ background: '#030712', borderRadius: '8px', padding: '12px', fontSize: '0.75rem', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: '#64748B' }}>Monthly Revenue</span>
            <span style={{ color: '#FFFFFF', fontWeight: 600 }}>$14,240</span>
          </div>
          <div style={{ display: 'flex', gap: '2px', height: '24px', alignItems: 'flex-end', marginTop: '4px' }}>
            {[30, 45, 35, 60, 50, 75, 90].map((h, i) => (
              <div key={i} style={{ flex: 1, height: `${h}%`, background: 'var(--accent-color)', borderRadius: '1px', opacity: 0.8 }} />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: 'Website Builders',
      desc: 'AI generation pipelines turning prompts into responsive sites.',
      icon: <Sliders size={24} color="#EC4899" />,
      tag: 'AI Code Gen',
      widget: (
        <div style={{ background: '#030712', borderRadius: '8px', padding: '12px', fontSize: '0.75rem', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <span style={{ color: '#FFFFFF', fontSize: '0.7rem', fontFamily: 'monospace' }}>&lt;section className="hero"&gt;</span>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.7rem', paddingLeft: '12px', fontFamily: 'monospace' }}>&lt;h1&gt;Stripe Level Spacing&lt;/h1&gt;</span>
          <span style={{ color: '#FFFFFF', fontSize: '0.7rem', fontFamily: 'monospace' }}>&lt;/section&gt;</span>
        </div>
      ),
    },
    {
      title: 'Presentation Generators',
      desc: 'Intelligent engines translating copy to customized slides.',
      icon: <Presentation size={24} color="#10B981" />,
      tag: 'DeckAI • PPTX',
      widget: (
        <div style={{ background: '#030712', borderRadius: '8px', padding: '12px', fontSize: '0.75rem', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', gap: '8px' }}>
          <div style={{ flex: 1, border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px', background: '#0B1220', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '0.55rem', color: '#64748B' }}>Slide 1</span>
          </div>
          <div style={{ flex: 1, border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px', background: '#0B1220', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '0.55rem', color: '#64748B' }}>Slide 2</span>
          </div>
        </div>
      ),
    },
    {
      title: 'Voice AI',
      desc: 'Real-time conversational agents and clean text-to-speech.',
      icon: <Mic size={24} color="#00D4FF" />,
      tag: 'TTS • Whisper',
      widget: (
        <div style={{ background: '#030712', borderRadius: '8px', padding: '12px', fontSize: '0.75rem', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ display: 'flex', gap: '2px', alignItems: 'center', height: '16px' }}>
            {[6, 12, 18, 10, 14, 8, 16, 4, 12, 10, 14, 6].map((h, i) => (
              <div key={i} style={{ width: '2px', height: `${h}px`, background: 'var(--accent-color)', borderRadius: '1px' }} />
            ))}
          </div>
          <span style={{ color: 'var(--text-secondary)', fontSize: '0.65rem' }}>0:02 / 0:15</span>
        </div>
      ),
    },
    {
      title: 'Productivity Tools',
      desc: 'Sleek custom extensions, widgets, and utility frameworks.',
      icon: <CheckSquare size={24} color="#8B5CF6" />,
      tag: 'Custom Plugins',
      widget: (
        <div style={{ background: '#030712', borderRadius: '8px', padding: '12px', fontSize: '0.75rem', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.9 }}>
            <input type="checkbox" checked readOnly style={{ accentColor: 'var(--accent-color)' }} />
            <span style={{ textDecoration: 'line-through', color: 'var(--text-muted)' }}>Build AI parser</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input type="checkbox" checked readOnly style={{ accentColor: 'var(--accent-color)' }} />
            <span style={{ color: '#FFFFFF' }}>Deploy Flutter app</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="products" className="section" style={{ borderTop: '1px solid var(--border-color)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: 'var(--space-xl)', maxWidth: '600px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--highlight-color)' }}>
              Expertise In Action
            </span>
          </div>
          <h2 style={{ fontSize: 'var(--fs-h2)', fontWeight: 'var(--fw-extrabold)', marginBottom: '1.5rem' }}>
            Products I've Built
          </h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            I don't just write code. I architect and deliver complete digital products that blend elegant user interfaces with state-of-the-art AI infrastructure.
          </p>
        </div>

        {/* Products Grid */}
        <div
          className="products-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 'var(--space-md)',
          }}
        >
          {products.map((p, idx) => (
            <motion.div
              key={idx}
              className="card interactive-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '340px',
                padding: 'var(--space-md)',
              }}
            >
              {/* Header Info */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid var(--border-color)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {p.icon}
                  </div>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {p.tag}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: '#FFFFFF' }}>{p.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>{p.desc}</p>
              </div>

              {/* Dynamic Sub-widget UI Mock */}
              <div style={{ marginTop: '1.5rem', alignSelf: 'stretch' }}>{p.widget}</div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        .products-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr) !important;
          gap: var(--space-md);
        }
        @media (max-width: 1200px) {
          .products-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .products-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
