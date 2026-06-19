import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AppItem {
  id: string;
  title: string;
  description: string;
  category: 'health' | 'productivity' | 'utilities' | 'reference';
  categoryLabel: string;
  icon: string;
  tags: string[];
  appStoreUrl: string;
}

export default function AppShowcase() {
  const [filter, setFilter] = useState<string>('all');

  const apps: AppItem[] = [
    {
      id: 'calo-ai',
      title: 'Calorie Calculator by Calo AI',
      description: 'AI food tracker with photo/barcode scanning. 14M+ food library with macro tracking and personalized goals.',
      category: 'health',
      categoryLabel: 'Health & Fitness',
      icon: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/f1/c0/f8/f1c0f842-d5df-7a72-0bf0-ceeac35871ac/Placeholder.mill/200x200bb-75.webp',
      tags: ['AI Recognition', 'Health Tracking', 'Flutter'],
      appStoreUrl: 'https://apps.apple.com/us/app/calorie-calculator-by-calo-ai/id6745021774',
    },
    {
      id: 'gamma-app',
      title: 'Gamma App – Presentation Maker',
      description: 'AI presentation maker from simple prompts. Auto-generates slides with visuals, graphics and multi-language translation.',
      category: 'productivity',
      categoryLabel: 'Productivity',
      icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/de/44/38/de4438eb-33ed-867d-72f1-397684d65ea0/AppIcon-0-0-1x_U007ephone-0-1-0-85-220.png/200x200ia-75.webp',
      tags: ['LLMs', 'Auto-Design', 'Flutter'],
      appStoreUrl: 'https://apps.apple.com/us/app/gamma-app-presentation-maker/id6746396819',
    },
    {
      id: 'gamma-slides',
      title: 'Beautiful AI Slides by GammaAI',
      description: 'Prompt-based AI deck creator for professionals. Auto-layouts, charts and brand kits for sales pitches and reports.',
      category: 'productivity',
      categoryLabel: 'Productivity',
      icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/bc/e8/c5/bce8c515-235a-e9f5-9379-226acea4e304/AppIcon-0-0-1x_U007ephone-0-1-0-85-220.png/200x200ia-75.webp',
      tags: ['AI Design', 'Templates', 'Flutter'],
      appStoreUrl: 'https://apps.apple.com/us/app/beautiful-ai-slides-by-gammaai/id6744013170',
    },
    {
      id: 'plant-finder',
      title: 'Plant Finder: Plant AI Care',
      description: 'AI-powered plant identification via photo snaps. Provides instant care tips, species info, and personal plant collection tracking.',
      category: 'utilities',
      categoryLabel: 'Utilities',
      icon: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/aa/e9/39/aae9393b-94a5-112f-84f8-e25032da15dd/Placeholder.mill/200x200bb-75.webp',
      tags: ['AI Vision', 'Plant Care', 'Flutter'],
      appStoreUrl: 'https://apps.apple.com/us/app/plant-finder-plant-ai-care/id6744879727',
    },
    {
      id: 'noteguru-app',
      title: 'AI Note Taker – Noteguru AI',
      description: 'AI-powered audio transcription and real-time meeting summaries. Organize and search notes instantly.',
      category: 'productivity',
      categoryLabel: 'Productivity',
      icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/b9/62/42/b96242b6-1908-b587-f2be-201f24e5e826/AppIconThemed-0-0-1x_U007ephone-0-1-0-85-220.jpeg/200x200ia-75.webp',
      tags: ['Speech-to-Text', 'AI Summary', 'Flutter'],
      appStoreUrl: 'https://apps.apple.com/us/app/ai-note-taker-noteguru-ai/id6740402869',
    },
    {
      id: 'bible-chat',
      title: 'Holy Bible Chat App – Heaven',
      description: 'AI Bible chat for study and prayer. Multiple translations with offline access and instant scripture search.',
      category: 'reference' as any,
      categoryLabel: 'Reference',
      icon: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/09/c7/f3/09c7f368-efa8-2a80-0199-be600c409ce3/Placeholder.mill/200x200bb-75.webp',
      tags: ['AI Chat', 'Offline DB', 'Flutter'],
      appStoreUrl: 'https://apps.apple.com/us/app/holy-bible-chat-app-heaven/id6751233039',
    },
    {
      id: 'vibecode',
      title: 'Vibecode: Websites Lovable AI',
      description: 'AI website builder for instant web creation. Drag-drop interface with smart templates for small businesses and portfolios.',
      category: 'productivity',
      categoryLabel: 'Productivity',
      icon: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/32/4c/72/324c72aa-696f-d65b-3580-ee3122caf9bc/Placeholder.mill/200x200bb-75.webp',
      tags: ['Web Builder', 'AI Templates', 'Flutter'],
      appStoreUrl: 'https://apps.apple.com/us/app/vibecode-websites-lovable-ai/id6749351042',
    },
    {
      id: 'sous-ai',
      title: 'Sous-AI Recipe Keeper',
      description: 'Your AI cooking companion that organizes recipes, understands your pantry, and helps you turn ingredients into meals.',
      category: 'health',
      categoryLabel: 'Food & Recipe',
      icon: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/f9/cd/58/f9cd5871-eda7-55a5-85be-4a6a5ca7e790/Placeholder.mill/200x200bb-75.webp',
      tags: ['AI Cooking', 'Meal Planning', 'Flutter'],
      appStoreUrl: 'https://apps.apple.com/jm/app/sous-ai-recipe-keeper/id6758428731',
    },
  ];

  const filteredApps = filter === 'all' ? apps : apps.filter(app => app.category === filter);

  const filterTabs = [
    { id: 'all', label: 'All Apps' },
    { id: 'productivity', label: 'Productivity' },
    { id: 'health', label: 'Health & Fitness' },
    { id: 'utilities', label: 'Utilities & Reference' },
  ];

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'health': return 'var(--success-color)';
      case 'productivity': return 'var(--accent-color)';
      default: return 'var(--highlight-color)';
    }
  };

  return (
    <section id="apps" className="section" style={{ borderTop: '1px solid var(--border-color)', background: 'radial-gradient(circle at 50% 0%, rgba(2, 86, 155, 0.03) 0%, rgba(3, 7, 12, 0) 70%)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: 'var(--space-xl)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent-color)' }}>
              Production Releases
            </span>
          </div>
          <h2 style={{ fontSize: 'var(--fs-h2)', fontWeight: 'var(--fw-extrabold)', marginBottom: '1.5rem' }}>
            App Store Showcase
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px' }}>
            Real-world native products architected, built, and successfully published to the Apple App Store, impacting thousands of global users.
          </p>

          {/* Filtering Tabs */}
          <div style={{ display: 'flex', gap: '8px', marginTop: '2.5rem', background: 'rgba(255, 255, 255, 0.02)', padding: '4px', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-color)', flexWrap: 'wrap', justifyContent: 'center' }}>
            {filterTabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                style={{
                  padding: '0.5rem 1.25rem',
                  borderRadius: 'var(--radius-full)',
                  border: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  color: filter === tab.id ? '#FFFFFF' : 'var(--text-secondary)',
                  background: filter === tab.id ? 'var(--surface-elevated)' : 'transparent',
                  transition: 'background var(--transition-fast), color var(--transition-fast)',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Apps Grid */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: 'var(--space-lg)',
            marginTop: '2rem',
          }}
          className="apps-showcase-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredApps.map((app) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                key={app.id}
                className="card interactive-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                  justifyContent: 'space-between',
                  padding: 'var(--space-lg)',
                }}
              >
                <div>
                  {/* Card Header (Icon & Badge) */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                    <img
                      src={app.icon}
                      alt={app.title}
                      style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: '16px',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        boxShadow: 'var(--shadow-sm)',
                        objectFit: 'cover',
                      }}
                    />
                    <span
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        color: getCategoryColor(app.category),
                        background: 'rgba(255,255,255,0.02)',
                        border: `1px solid ${getCategoryColor(app.category)}20`,
                        padding: '4px 10px',
                        borderRadius: 'var(--radius-full)',
                      }}
                    >
                      {app.categoryLabel}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.5rem', marginTop: '0.5rem', lineHeight: '1.3' }}>
                    {app.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: '1.5', minHeight: '66px' }}>
                    {app.description}
                  </p>
                </div>

                <div>
                  {/* Tags */}
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                    {app.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: '0.75rem',
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid var(--border-color)',
                          color: 'var(--text-muted)',
                          padding: '2px 8px',
                          borderRadius: '4px',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* App Store CTA */}
                  <a
                    href={app.appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      width: '100%',
                      padding: '0.65rem 1rem',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      borderColor: 'var(--border-color)',
                      transition: 'background var(--transition-fast), border-color var(--transition-fast)',
                    }}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" style={{ position: 'relative', top: '-1px' }}>
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    <span>App Store</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      <style>{`
        .apps-showcase-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr) !important;
          gap: var(--space-lg);
        }
        @media (max-width: 1024px) {
          .apps-showcase-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .apps-showcase-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
