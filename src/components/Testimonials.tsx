import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export default function Testimonials() {
  const reviews: Testimonial[] = [
    {
      quote: "Gurpreet is a master of Flutter architecture. He redesigned our entire mobile codebase, resulting in a 40% performance improvement and clean modular state boundaries.",
      author: "Julien R.",
      role: "VP of Engineering",
      company: "VibeScale",
    },
    {
      quote: "His ability to integrate complex LLM prompting networks and real-time streaming directly into native apps was exactly what we needed to launch NoteGuru. Exceptional engineering skills.",
      author: "Sarah M.",
      role: "Product Director",
      company: "NoteGuru AI",
    },
    {
      quote: "Working with Gurpreet felt like having an entire elite agency inside one developer. He delivers Stripe-level UX fidelity combined with bulletproof cloud architecture.",
      author: "Vikram S.",
      role: "Co-Founder",
      company: "Spendora App",
    },
  ];

  return (
    <section id="testimonials" className="section" style={{ borderTop: '1px solid var(--border-color)', background: 'radial-gradient(circle at 90% 10%, rgba(2, 86, 155, 0.02) 0%, rgba(3, 7, 12, 0) 60%)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: 'var(--space-xxl)', maxWidth: '600px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent-color)' }}>
              Feedback
            </span>
          </div>
          <h2 style={{ fontSize: 'var(--fs-h2)', fontWeight: 'var(--fw-extrabold)', marginBottom: '1.5rem' }}>
            Client Endorsements
          </h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            Read what engineering leads, product directors, and startup founders say about collaborating with Gurpreet on custom mobile apps and AI engines.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'var(--space-lg)',
          }}
          className="testimonials-grid"
        >
          {reviews.map((r, idx) => (
            <motion.div
              key={idx}
              className="card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2.5rem var(--space-lg)',
              }}
            >
              <div>
                <Quote size={36} color="rgba(255,255,255,0.06)" style={{ marginBottom: '1rem' }} />
                <p
                  style={{
                    fontSize: '1.125rem',
                    color: 'var(--text-primary)',
                    lineHeight: '1.6',
                    fontWeight: 400,
                    fontStyle: 'italic',
                    marginBottom: '2rem',
                  }}
                >
                  "{r.quote}"
                </p>
              </div>

              <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '2px' }}>{r.author}</h4>
                <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
                  {r.role} at <span style={{ color: 'var(--accent-color)' }}>{r.company}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 968px) {
          .testimonials-grid {
            grid-template-columns: 1fr !important;
            gap: var(--space-md) !important;
          }
        }
      `}</style>
    </section>
  );
}
