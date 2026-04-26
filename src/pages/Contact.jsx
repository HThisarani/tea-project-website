import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
// eslint-disable-next-line no-unused-vars
const [focused, setFocused] = useState(null);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => { e.preventDefault(); setSubmitted(true); };

  const contactInfo = [
    { icon: '✉️', label: 'Email', value: 'teaproject@university.ac.lk', href: 'mailto:teaproject@university.ac.lk' },
    { icon: '📞', label: 'Phone', value: '+94 11 000 0000', href: 'tel:+94110000000' },
    { icon: '🏫', label: 'Faculty', value: 'Faculty of Computing, SLIIT', href: null },
    { icon: '📍', label: 'Location', value: 'Malabe, Sri Lanka', href: null },
  ];

  return (
    <div style={{ background: '#0a0d0f', minHeight: '100vh', fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Fraunces:ital,wght@0,300;0,600;0,700;1,300;1,600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 3rem;
          align-items: start;
        }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr; gap: 2rem; }
        }

        .field-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .field-label {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #4ade80;
        }

        .field-input {
          background: rgba(255,255,255,0.04);
          border: 1.5px solid rgba(255,255,255,0.08);
          border-radius: 10px;
          padding: 0.85rem 1rem;
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.92rem;
          width: 100%;
          outline: none;
          transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
          -webkit-appearance: none;
        }
        .field-input::placeholder { color: #3d5248; }
        .field-input:focus {
          border-color: #16a34a;
          background: rgba(22,163,74,0.06);
          box-shadow: 0 0 0 3px rgba(22,163,74,0.1);
        }

        .field-textarea {
          resize: vertical;
          min-height: 130px;
        }

        .submit-btn {
          background: #16a34a;
          color: #fff;
          border: none;
          padding: 1rem 2rem;
          border-radius: 10px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          cursor: pointer;
          width: 100%;
          transition: all 0.2s;
          letter-spacing: 0.02em;
          touch-action: manipulation;
          position: relative;
          overflow: hidden;
        }
        .submit-btn:hover {
          background: #15803d;
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(22,163,74,0.35);
        }
        .submit-btn:active { transform: translateY(0); }

        .info-card {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1rem 1.2rem;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 12px;
          transition: border-color 0.2s, background 0.2s;
          text-decoration: none;
        }
        .info-card:hover {
          border-color: rgba(22,163,74,0.3);
          background: rgba(22,163,74,0.05);
        }

        .section-label {
          font-size: 0.68rem;
          font-weight: 700;
          color: #16a34a;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }

        @media (max-width: 480px) {
          .hero-title { font-size: 2.2rem !important; }
        }
      `}</style>

      {/* ── HERO ── */}
      <div style={{
        position: 'relative',
        padding: 'clamp(3rem,8vw,5rem) 2rem clamp(2rem,5vw,3rem)',
        textAlign: 'center',
        overflow: 'hidden',
      }}>
        {/* background glow */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(22,163,74,0.12) 0%, transparent 70%)',
        }} />

        <motion.div
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 7,
            background: 'rgba(134,239,172,0.1)',
            border: '1px solid rgba(134,239,172,0.25)',
            color: '#86efac',
            fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em',
            padding: '0.28rem 1rem', borderRadius: 20, marginBottom: '1.4rem',
          }}
        >
          <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#4ade80', display: 'inline-block', boxShadow: '0 0 5px #4ade80' }} />
          GET IN TOUCH
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}
          style={{
            fontFamily: "'Fraunces', serif",
            fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
            color: '#fff',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            fontWeight: 600,
            marginBottom: '0.8rem',
          }}
        >
          Contact the<br />
          <em style={{ color: '#4ade80', fontStyle: 'italic' }}>TeaNexus Team</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          style={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: 1.75 }}
        >
          Questions, collaborations, or feedback — we'd love to hear from you.
        </motion.p>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 clamp(1.2rem,4vw,2rem) clamp(3rem,6vw,5rem)' }}>
        <div className="contact-grid">

          {/* LEFT — info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25, duration: 0.6 }}
          >
            <div className="section-label">01 — Info</div>
            <h2 style={{
              fontFamily: "'Fraunces', serif",
              fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)',
              color: '#fff',
              fontWeight: 600,
              marginBottom: '0.9rem',
              letterSpacing: '-0.01em',
            }}>
              Reach out to us
            </h2>
            <p style={{ color: '#6b7280', fontSize: '0.9rem', lineHeight: 1.8, marginBottom: '1.8rem' }}>
              We're a final-year research group at SLIIT. Whether you're a tea industry professional, researcher, or just curious — drop us a message.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.2rem' }}>
              {contactInfo.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href || undefined}
                  className="info-card"
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.07 }}
                  style={{ cursor: item.href ? 'pointer' : 'default' }}
                >
                  <div style={{
                    width: 38, height: 38, borderRadius: 9,
                    background: 'rgba(22,163,74,0.12)',
                    border: '1px solid rgba(22,163,74,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1rem', flexShrink: 0,
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.67rem', fontWeight: 700, color: '#4ade80', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 2 }}>{item.label}</div>
                    <div style={{ fontSize: '0.88rem', color: '#d1d5db' }}>{item.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* decorative divider */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.4rem' }}>
              <div style={{ fontSize: '0.75rem', color: '#374151', lineHeight: 1.7 }}>
                Project 25-26J-193 · SLIIT Faculty of Computing<br />
                Smarter Tea Production for Sri Lanka 🍃
              </div>
            </div>
          </motion.div>

          {/* RIGHT — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.6 }}
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1.5px solid rgba(255,255,255,0.07)',
              borderRadius: 18,
              padding: 'clamp(1.5rem,4vw,2.2rem)',
            }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}
                style={{ textAlign: 'center', padding: '3rem 1rem' }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                <h3 style={{
                  fontFamily: "'Fraunces', serif",
                  color: '#fff', fontSize: '1.5rem', marginBottom: '0.6rem', fontWeight: 600,
                }}>Message Sent!</h3>
                <p style={{ color: '#6b7280', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  Thanks for reaching out. We'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                  style={{ marginTop: '1.5rem', background: 'transparent', border: '1.5px solid rgba(22,163,74,0.4)', color: '#4ade80', padding: '0.6rem 1.4rem', borderRadius: 8, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", fontSize: '0.85rem', touchAction: 'manipulation' }}
                >
                  Send another →
                </button>
              </motion.div>
            ) : (
              <>
                <div className="section-label" style={{ marginBottom: '1.2rem' }}>02 — Message</div>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="field-group">
                      <label className="field-label">Full Name</label>
                      <input
                        className="field-input"
                        placeholder="Ayasha Perera"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        onFocus={() => setFocused('name')}
                        onBlur={() => setFocused('')}
                        required
                      />
                    </div>
                    <div className="field-group">
                      <label className="field-label">Email</label>
                      <input
                        className="field-input"
                        placeholder="you@example.com"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        onFocus={() => setFocused('email')}
                        onBlur={() => setFocused('')}
                        required
                      />
                    </div>
                  </div>

                  <div className="field-group">
                    <label className="field-label">Subject</label>
                    <input
                      className="field-input"
                      placeholder="Research collaboration, feedback…"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      onFocus={() => setFocused('subject')}
                      onBlur={() => setFocused('')}
                      required
                    />
                  </div>

                  <div className="field-group">
                    <label className="field-label">Message</label>
                    <textarea
                      className="field-input field-textarea"
                      placeholder="Tell us what's on your mind…"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused('')}
                      required
                    />
                  </div>

                  <button type="submit" className="submit-btn">
                    Send Message →
                  </button>

                  <p style={{ fontSize: '0.72rem', color: '#374151', textAlign: 'center', lineHeight: 1.6 }}>
                    We typically respond within 1–2 business days.
                  </p>
                </form>
              </>
            )}
          </motion.div>

        </div>
      </div>
    </div>
  );
}