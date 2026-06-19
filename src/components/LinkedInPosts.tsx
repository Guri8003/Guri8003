import { motion } from 'framer-motion';

export default function LinkedInPosts() {
  const posts = [
    {
      id: 'post-1',
      title: 'Flutter Share Integration',
      src: 'https://www.linkedin.com/embed/feed/update/urn:li:share:7473289248503148544',
    },
    {
      id: 'post-2',
      title: 'Flutter Performance Deep Dive',
      src: 'https://www.linkedin.com/embed/feed/update/urn:li:activity:7471524278912434176',
    },
    {
      id: 'post-3',
      title: 'Mobile Architecture Insights',
      src: 'https://www.linkedin.com/embed/feed/update/urn:li:activity:7471192094443974656',
    },
  ];

  return (
    <section id="linkedin" className="section" style={{ borderTop: '1px solid var(--border-color)', background: 'radial-gradient(circle at 90% 10%, rgba(2, 86, 155, 0.02) 0%, rgba(3, 7, 12, 0) 60%)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: 'var(--space-xxl)', maxWidth: '600px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent-color)' }}>
              Activity
            </span>
          </div>
          <h2 style={{ fontSize: 'var(--fs-h2)', fontWeight: 'var(--fw-extrabold)', marginBottom: '1.5rem' }}>
            Latest Insights &amp; Updates
          </h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            Stay updated with my latest thoughts on mobile architecture, Flutter optimization techniques, and integrating AI workflows.
          </p>
        </div>

        {/* LinkedIn Posts Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'var(--space-lg)',
          }}
          className="linkedin-posts-grid"
        >
          {posts.map((post, idx) => (
            <motion.div
              key={post.id}
              className="linkedin-post-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <iframe
                src={post.src}
                title={post.title}
                className="linkedin-iframe"
                allowFullScreen
              />
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        .linkedin-post-card {
          background: var(--surface-color);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          overflow: hidden;
          padding: 0;
          box-shadow: var(--shadow-md);
          display: flex;
          flex-direction: column;
          transition: border-color var(--transition-medium), box-shadow var(--transition-medium);
          min-height: 600px;
        }
        .linkedin-post-card:hover {
          border-color: rgba(0, 212, 255, 0.25);
          box-shadow: var(--shadow-lg), 0 10px 30px rgba(0, 212, 255, 0.05);
        }
        .linkedin-iframe {
          width: 100%;
          height: 600px;
          border: none;
        }
        @media (max-width: 968px) {
          .linkedin-posts-grid {
            grid-template-columns: 1fr !important;
            gap: var(--space-md) !important;
          }
        }
      `}</style>
    </section>
  );
}
