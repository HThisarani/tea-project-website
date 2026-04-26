import React from 'react';
import { motion } from 'framer-motion';

const HERO_IMG = '/images/image.png';
const BANNER_IMG = 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=1400&q=80';

const systems = [
  {
    icon: '⚖️', id: 'IT22271082', student: 'Hewage S.N',
    title: 'Yield Prediction System',
    text: 'ESP32 + HX711 load cells predict tea yield before processing — R² = 0.886. Rainfall contributes 53% of predictive power.',
    tags: ['Gradient Boosting', 'ESP32', 'WeatherAPI'],
    color: '#166534',
  },
  {
    icon: '⚙️', id: 'IT22105448', student: 'Kuruppu K.M.H.T',
    title: 'Smart Belt Monitoring',
    text: 'Temperature, vibration & RPM sensors predict belt condition and Remaining Useful Life before failure occurs.',
    tags: ['Random Forest', 'RUL Prediction', 'Hall-effect RPM'],
    color: '#1e40af',
  },
  {
    icon: '🍃', id: 'IT22350428', student: 'Edirisinghe N.G.I.U',
    title: 'Disease Detection & Advisory',
    text: 'EfficientNet-B0 CNN classifies 6 diseases from a photo in under 3 seconds. 92.8% accuracy with weather-aware advice.',
    tags: ['EfficientNet-B0', 'Transfer Learning', 'Multilingual'],
    color: '#065f46',
  },
  {
    icon: '💧', id: 'IT22569936', student: 'Konara K.M.M.M',
    title: 'Humidity Optimisation',
    text: 'Fully data-driven quality prediction from humidity, temperature & seasonal patterns. No hardware needed.',
    tags: ['Random Forest', 'Historical Data', 'Google Colab'],
    color: '#1d4ed8',
  },
];

const stats = [
  { value: '4',      label: 'Sub-Systems' },
  { value: '92.8%',  label: 'Detection Accuracy' },
  { value: '0.886',  label: 'Yield Prediction R²' },
  { value: '2.8s',   label: 'Pipeline Latency' },
];

export default function Home({ setCurrentPage }) {
  return (
    <div style={{ background: '#0a0f0d', minHeight: '100vh', fontFamily: "'DM Sans', sans-serif", color: '#ddd' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Fraunces:ital,wght@0,300;0,600;0,700;1,300;1,600&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── Cards ── */
        .sys-card {
          background: #111712;
          border: 1px solid rgba(255,255,255,.07);
          border-radius: 14px;
          padding: 1.8rem;
          display: flex;
          flex-direction: column;
          transition: all 0.28s cubic-bezier(0.34,1.56,0.64,1);
          cursor: default;
          position: relative;
          overflow: hidden;
        }
        .sys-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          opacity: 0;
          transition: opacity 0.25s;
        }
        .sys-card:hover {
          border-color: rgba(34,197,94,0.27);
          box-shadow: 0 16px 48px rgba(34,197,94,0.08);
          transform: translateY(-5px);
        }
        .sys-card:hover::before { opacity: 1; background: linear-gradient(90deg, #22c55e, #059669); }

        /* ── Tags ── */
        .tag-pill {
          background: rgba(34,197,94,0.08);
          color: #4ade80;
          border: 1px solid rgba(34,197,94,0.2);
          font-size: 0.68rem;
          font-weight: 600;
          padding: 0.2rem 0.7rem;
          border-radius: 20px;
        }

        /* ── Pipeline ── */
        .pipe-step {
          background: #111712;
          border: 1px solid rgba(255,255,255,.07);
          border-radius: 12px;
          padding: 0.9rem 1.1rem;
          text-align: center;
          min-width: 110px;
          flex: 1 1 110px;
          transition: all 0.2s;
        }
        .pipe-step:hover { border-color: rgba(34,197,94,0.3); background: #141f16; }

        /* ── Buttons ── */
        .primary-btn {
          background: #22c55e;
          color: #0a0f0d;
          border: none;
          padding: 0.85rem 2rem;
          border-radius: 10px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
          position: relative;
          z-index: 10;
          pointer-events: auto;
          -webkit-tap-highlight-color: rgba(34,197,94,0.2);
          touch-action: manipulation;
        }
        .primary-btn:hover { background: #4ade80; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(34,197,94,0.3); }

        .outline-btn {
          background: rgba(255,255,255,0.06);
          color: #cde8d2;
          border: 1px solid rgba(255,255,255,0.15);
          padding: 0.85rem 2rem;
          border-radius: 10px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          backdrop-filter: blur(4px);
          position: relative;
          z-index: 10;
          pointer-events: auto;
          -webkit-tap-highlight-color: rgba(255,255,255,0.1);
          touch-action: manipulation;
        }
        .outline-btn:hover { border-color: rgba(34,197,94,0.4); background: rgba(34,197,94,0.08); color: #4ade80; }

        /* ── Metric cards ── */
        .metric-float {
          background: rgba(17,23,18,0.92);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px;
          padding: 1rem 1.3rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 4px 20px rgba(0,0,0,0.4);
        }

        /* ── Typography helpers ── */
        .section-label {
          font-size: 0.68rem;
          font-weight: 700;
          color: #22c55e;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }
        .section-h2 {
          font-family: 'Fraunces', serif;
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          color: #fff;
          margin: 0 0 0.6rem;
          letter-spacing: -0.02em;
          font-weight: 600;
        }
        .section-sub {
          font-size: 0.92rem;
          color: #86a88e;
          line-height: 1.75;
          max-width: 500px;
        }

        /* ── Divider ── */
        .dom-divider { border: none; border-top: 1px solid rgba(255,255,255,.06); margin: 0; }

        /* ── RESPONSIVE ── */
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr; gap: 2rem; }
          .hero-metrics-col { display: none !important; }
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
        @media (max-width: 640px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .stats-grid > *:nth-child(2) { border-right: none !important; }
          .stats-grid > *:nth-child(4) { border-right: none !important; }
          .stats-grid > *:nth-child(3),
          .stats-grid > *:nth-child(4) { border-top: 1px solid rgba(255,255,255,.06) !important; }
        }

        .systems-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(248px, 1fr));
          gap: 1.2rem;
        }
        @media (max-width: 560px) {
          .systems-grid { grid-template-columns: 1fr; }
        }

        .pipeline-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          align-items: center;
          justify-content: center;
        }
        @media (max-width: 480px) {
          .pipe-arrow { display: none; }
          .pipe-step { flex: 1 1 40%; }
        }

        .cta-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
          flex-wrap: wrap;
        }
        @media (max-width: 560px) {
          .cta-inner { flex-direction: column; align-items: flex-start; }
          .cta-inner button { width: 100%; }
        }

        @media (max-width: 480px) {
          .hero-badge { font-size: 0.6rem !important; padding: 0.25rem 0.7rem !important; }
          .hero-h1 { font-size: clamp(2rem, 9vw, 3rem) !important; }
          .hero-btns { flex-direction: column; }
          .hero-btns button { width: 100%; }
        }

        @media (max-width: 640px) {
          .section-pad { padding-left: 1.2rem !important; padding-right: 1.2rem !important; }
        }
      `}</style>

      {/* ══════════════ HERO ══════════════ */}
      <section style={{ position: 'relative', minHeight: '95vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>

        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url('${HERO_IMG}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 60%',
          pointerEvents: 'none',
        }} />

        {/* Radial glow matching Domain page */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 60% 70% at 60% 40%, rgba(34,197,94,.05), transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(100deg, rgba(10,15,13,0.94) 0%, rgba(10,15,13,0.80) 45%, rgba(10,15,13,0.45) 75%, rgba(10,15,13,0.15) 100%)',
          pointerEvents: 'none',
        }} />

        <div
          className="hero-grid section-pad"
          style={{
            position: 'relative',
            maxWidth: 1140, margin: '0 auto',
            padding: '5rem 2rem 4rem',
            width: '100%',
          }}
        >
          {/* LEFT */}
          <div>
            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 7,
                background: 'rgba(34,197,94,0.08)',
                border: '1px solid rgba(34,197,94,0.2)',
                color: '#86efac',
                fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em',
                padding: '0.3rem 1rem', borderRadius: 20, marginBottom: '1.8rem',
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', display: 'inline-block', boxShadow: '0 0 6px #22c55e' }} />
              TEANEXUS · PROJECT 25-26J-193
            </motion.div>

            <motion.h1
              className="hero-h1"
              initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }}
              style={{
                fontFamily: "'Fraunces', serif",
                fontSize: 'clamp(2.6rem, 5.5vw, 4rem)',
                color: '#fff',
                lineHeight: 1.1,
                margin: '0 0 1.4rem',
                fontWeight: 600,
              }}
            >
              Smarter Tea<br />
              Production for<br />
              <em style={{ color: '#4ade80', fontStyle: 'italic' }}>Sri Lanka</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}
              style={{ color: '#86a88e', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2.2rem', maxWidth: 440 }}
            >
              Connecting tea farming, factory processing, and equipment monitoring with AI-powered automation and real-time IoT data.
            </motion.p>

            <motion.div
              className="hero-btns"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.38 }}
              style={{ display: 'flex', gap: 12, flexWrap: 'wrap', position: 'relative', zIndex: 1 }}
            >
              <button className="primary-btn" onClick={() => setCurrentPage('domain')}>Explore Research →</button>
              <button className="outline-btn" onClick={() => setCurrentPage('about')}>Meet the Team</button>
            </motion.div>
          </div>

          {/* RIGHT — floating metrics (hidden on mobile) */}
          <motion.div
            className="hero-metrics-col"
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.7 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 10 }}
          >
            {[
              { label: 'Leaf Quality Score', value: '94.2%',  sub: 'AI classification accuracy',  accent: '#22c55e' },
              { label: 'Soil Moisture',       value: '68%',    sub: 'Real-time IoT reading',        accent: '#2563eb' },
              { label: 'Belt Condition',      value: 'Normal', sub: 'No fault detected — live',     accent: '#7c3aed' },
              { label: 'Disease Detected',    value: '0',      sub: 'Last 7-day scan result',       accent: '#d97706' },
            ].map((c, i) => (
              <motion.div
                key={c.label}
                className="metric-float"
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.09 }}
                style={{ borderLeft: `3px solid ${c.accent}`, marginLeft: i % 2 === 1 ? '2rem' : 0 }}
              >
                <div>
                  <div style={{ fontSize: '0.67rem', color: '#86a88e', marginBottom: 2 }}>{c.label}</div>
                  <div style={{ fontFamily: "'Fraunces',serif", fontSize: '1.7rem', fontWeight: 600, color: '#fff', lineHeight: 1 }}>{c.value}</div>
                  <div style={{ fontSize: '0.65rem', color: '#4b6455', marginTop: 2 }}>{c.sub}</div>
                </div>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: c.accent, opacity: 0.12 }} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 120, background: 'linear-gradient(to top, #0a0f0d, transparent)', pointerEvents: 'none' }} />
      </section>

      {/* ══════════════ STATS BAR ══════════════ */}
      <div style={{ background: '#0d1410', borderBottom: '1px solid rgba(255,255,255,.06)', borderTop: '1px solid rgba(255,255,255,.06)' }}>
        <div className="stats-grid" style={{ maxWidth: 1140, margin: '0 auto', padding: '0 2rem' }}>
          {stats.map((st, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
              style={{ textAlign: 'center', padding: '1.6rem 1rem', borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,.06)' : 'none' }}>
              <div style={{ fontFamily: "'Fraunces',serif", fontSize: '2.4rem', fontWeight: 600, color: '#22c55e', lineHeight: 1 }}>{st.value}</div>
              <div style={{ fontSize: '0.73rem', color: '#4b6455', marginTop: 4, fontWeight: 500 }}>{st.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ══════════════ CORE SYSTEMS ══════════════ */}
      <section className="section-pad" style={{ padding: 'clamp(4rem,8vw,6rem) 2rem', maxWidth: 1140, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '2.8rem' }}>
          <div className="section-label">01 — Core Systems</div>
          <h2 className="section-h2">Four Integrated Modules</h2>
          <p className="section-sub">Each component targets a specific challenge in Sri Lanka's tea production pipeline — working together as a unified platform.</p>
        </motion.div>

        <div className="systems-grid">
          {systems.map((sys, i) => (
            <motion.div key={i} className="sys-card"
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.01 }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '0.9rem' }}>{sys.icon}</div>
              <div style={{ fontSize: '0.67rem', fontWeight: 700, color: '#22c55e', marginBottom: '0.25rem', letterSpacing: '0.04em' }}>{sys.id} · {sys.student}</div>
              <h3 style={{ fontFamily: "'Fraunces',serif", fontSize: '1.1rem', fontWeight: 600, color: '#fff', margin: '0 0 0.6rem', lineHeight: 1.3 }}>{sys.title}</h3>
              <p style={{ fontSize: '0.84rem', color: '#86a88e', lineHeight: 1.75, marginBottom: '1.2rem', flex: 1 }}>{sys.text}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {sys.tags.map(tag => <span key={tag} className="tag-pill">{tag}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <hr className="dom-divider" />

      {/* ══════════════ PIPELINE ══════════════ */}
      <section className="section-pad" style={{ background: '#0d1410', borderTop: '1px solid rgba(255,255,255,.06)', borderBottom: '1px solid rgba(255,255,255,.06)', padding: 'clamp(3rem,6vw,5rem) 2rem' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '2rem' }}>
            <div className="section-label">02 — Architecture</div>
            <h2 className="section-h2">System Pipeline</h2>
            <p className="section-sub">All four modules share a consistent five-layer architecture. Each pipeline completes in <strong style={{ color: '#22c55e' }}>~2.8 seconds</strong>.</p>
          </motion.div>
          <motion.div
            className="pipeline-wrap"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            {[
              { label: '📟 IoT Layer',      sub: 'ESP32, sensors, load cells' },
              { label: '📶 Communication',  sub: 'REST API, HTTP, Wi-Fi' },
              { label: '🐍 Flask Backend',  sub: 'ML inference & weather' },
              { label: '🔥 Firebase',       sub: 'NoSQL, real-time sync' },
              { label: '📱 Mobile App',     sub: 'React Native, Android/iOS' },
            ].map((layer, i, arr) => (
              <React.Fragment key={layer.label}>
                <div className="pipe-step">
                  <div style={{ fontWeight: 600, fontSize: '0.82rem', color: '#cde8d2' }}>{layer.label}</div>
                  <div style={{ fontSize: '0.67rem', color: '#4b6455', marginTop: 3 }}>{layer.sub}</div>
                </div>
                {i < arr.length - 1 && (
                  <div className="pipe-arrow" style={{ color: '#22c55e', fontSize: '1.2rem', fontWeight: 300 }}>→</div>
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════ CTA BANNER ══════════════ */}
      <section className="section-pad" style={{ padding: 'clamp(3rem,8vw,5rem) 2rem', maxWidth: 1140, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ borderRadius: 18, overflow: 'hidden', position: 'relative', padding: 'clamp(2rem,5vw,4rem) clamp(1.5rem,4vw,3rem)' }}
        >
          <div style={{ position: 'absolute', inset: 0, backgroundImage: `url('${BANNER_IMG}')`, backgroundSize: 'cover', backgroundPosition: 'center 30%', filter: 'brightness(0.2) saturate(0.8)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(110deg, rgba(10,15,13,0.98) 0%, rgba(10,15,13,0.92) 55%, rgba(10,15,13,0.75) 100%)', pointerEvents: 'none' }} />
          {/* Subtle green glow */}
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 50% 80% at 20% 50%, rgba(34,197,94,0.07), transparent 70%)', pointerEvents: 'none' }} />

          <div className="cta-inner" style={{ position: 'relative' }}>
            <div>
              <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#22c55e', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Ready to explore?</div>
              <div style={{ fontFamily: "'Fraunces',serif", color: '#fff', fontSize: 'clamp(1.4rem,3vw,2.2rem)', fontWeight: 600, marginBottom: '0.5rem', lineHeight: 1.2 }}>Dive into the Full Research</div>
              <div style={{ color: '#86a88e', fontSize: '0.9rem' }}>Detailed methodology, system architecture, and full technology stack.</div>
            </div>
            <button
              onClick={() => setCurrentPage('domain')}
              className="primary-btn"
              style={{ flexShrink: 0 }}
            >
              Go to Domain →
            </button>
          </div>
        </motion.div>
      </section>

    </div>
  );
}