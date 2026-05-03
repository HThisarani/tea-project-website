import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Domain from './pages/Domain';
import Milestones from './pages/Milestones';
import Documents from './pages/Documents';
import Slides from './pages/Slides';
import About from './pages/About';
import Contact from './pages/Contact';

/* Each page gets its own background colour */
const PAGE_BG = {
  home:       '#09090b',
  domain:     '#0d1117',
  slides:     '#0f0a1a',
  documents:  '#0a0d14',
  milestones: '#09090b',
  about:      '#27272a',
  contact:    '#09090b',
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [animating, setAnimating]     = useState(false);

  /* Single navigation handler — works the same on mobile & desktop */
  const handleSetPage = (pageId) => {
    if (pageId === currentPage) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrentPage(pageId);
      setAnimating(false);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 180);
  };

  /* Scroll to top whenever the page changes */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPage]);

  const props = { setCurrentPage: handleSetPage };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':       return <Home        {...props} />;
      case 'domain':     return <Domain      {...props} />;
      case 'milestones': return <Milestones  {...props} />;
      case 'documents':  return <Documents   {...props} />;
      case 'slides':     return <Slides      {...props} />;
      case 'about':      return <About       {...props} />;
      case 'contact':    return <Contact     {...props} />;
      default:           return <Home        {...props} />;
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      background: PAGE_BG[currentPage] || '#09090b',
      transition: 'background 0.4s ease',
    }}>
      <style>{`
        * { box-sizing: border-box; }

        /* Page transition */
        .page-wrapper {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.18s ease, transform 0.18s ease;
          will-change: opacity, transform;
        }
        .page-wrapper.fading {
          opacity: 0;
          transform: translateY(10px);
          pointer-events: none;
        }

        /* Global Soft Inputs & Buttons Policy */
        input, textarea {
          transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1) !important;
        }
        input:focus, textarea:focus {
          border-color: #34d399 !important;
          box-shadow: 0 0 0 3px rgba(74, 222, 128, 0.1) !important;
          outline: none;
        }
        
        button {
          transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1) !important;
        }
        button:not(.tn-btn):not(.tn-hamburger):not(.tn-m-chevron):not(.tn-m-btn):not(:disabled):hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(34, 197, 94, 0.15);
        }
        
        /* Global Subtle Card Lift (Targets standalone component boxes) */
        .glb-card {
           transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .glb-card:hover { 
           transform: translateY(-4px); 
           border-color: rgba(34, 197, 94, 0.3) !important; 
        }

        /* Mobile: large tap targets, no 300ms delay */
        @media (max-width: 768px) {
          button, a { touch-action: manipulation; }
        }

        /* Footer Layout */
        .footer-grid {
          display: grid;
          grid-template-columns: 2.3fr 1.2fr 1fr;
          gap: 4rem;
          padding-bottom: 3.5rem;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .footer-link-hover {
          color: #a1a1aa;
          font-size: 0.95rem;
          cursor: pointer;
          transition: color 0.15s;
          width: max-content;
        }
        .footer-link-hover:hover {
          color: #fafafa;
        }
        @media (max-width: 800px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
      `}</style>

      <Navbar currentPage={currentPage} setCurrentPage={handleSetPage} />

      <main style={{ flex: 1, paddingTop: '62px' }}>
        <div className={`page-wrapper${animating ? ' fading' : ''}`}>
          {renderPage()}
        </div>
      </main>

      <footer style={{
        background: '#020617',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        padding: '4rem 2rem 2rem',
        color: '#a1a1aa',
        fontFamily: "'Inter', sans-serif"
      }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <div className="footer-grid">
            
            {/* Left Column */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.2rem' }}>
                <span style={{ fontSize: '1.8rem' }}>🍃</span>
                <span style={{ color: '#fafafa', fontSize: '1.4rem', fontWeight: '700', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>TeaNexus</span>
              </div>
              <p style={{ fontSize: '0.92rem', lineHeight: '1.7', marginBottom: '1.8rem', maxWidth: '350px' }}>
                An AI and IoT-based tea production optimization system, built with real-time data analytics, explainable AI, and predictive machine monitoring.
              </p>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.03)', padding: '0.5rem 1rem', borderRadius: '30px', fontSize: '0.75rem', fontWeight: '600', color: '#d1fae5', border: '1px solid rgba(255,255,255,0.1)' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px #10b981' }}></span>
                Final Year Research Project · SLIIT 2025/26
              </div>
            </div>

            {/* Middle Column */}
            <div>
              <h3 style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.1em', color: '#71717a', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Project Info</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <div>
                  <div style={{ fontSize: '0.65rem', color: '#71717a', textTransform: 'uppercase', fontWeight: '700', letterSpacing: '0.05em' }}>Project ID</div>
                  <div style={{ color: '#e2e8f0', fontSize: '0.95rem', fontWeight: '600', marginTop: '0.2rem' }}>25-26J-193</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.65rem', color: '#71717a', textTransform: 'uppercase', fontWeight: '700', letterSpacing: '0.05em' }}>Research Area</div>
                  <div style={{ color: '#e2e8f0', fontSize: '0.95rem', fontWeight: '600', marginTop: '0.2rem' }}>AI & IoT in Precision Agriculture</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.65rem', color: '#71717a', textTransform: 'uppercase', fontWeight: '700', letterSpacing: '0.05em' }}>Institution</div>
                  <div style={{ color: '#e2e8f0', fontSize: '0.95rem', fontWeight: '600', marginTop: '0.2rem' }}>SLIIT Faculty of Computing</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.65rem', color: '#71717a', textTransform: 'uppercase', fontWeight: '700', letterSpacing: '0.05em' }}>Academic Year</div>
                  <div style={{ color: '#e2e8f0', fontSize: '0.95rem', fontWeight: '600', marginTop: '0.2rem' }}>2025 / 2026</div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <h3 style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.1em', color: '#71717a', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Quick Links</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                {['Home', 'Domain', 'Milestones', 'Documents', 'Slides', 'About', 'Contact'].map((link) => (
                  <span 
                    key={link}
                    onClick={() => handleSetPage(link.toLowerCase())} 
                    className="footer-link-hover"
                  >
                    {link === 'Domain' ? 'Project Scope' : link === 'About' ? 'About Us' : link}
                  </span>
                ))}
              </div>
            </div>

          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '2rem', flexWrap: 'wrap', gap: '1rem', position: 'relative' }}>
            <div style={{ fontSize: '0.85rem' }}>
              © 2026 <strong style={{ color: '#fafafa' }}>TeaNexus</strong>. All Rights Reserved.
            </div>
            <div style={{ fontSize: '0.85rem', color: '#71717a' }}>
              AI-Based Tea Production Optimization System
            </div>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              style={{
                background: '#10b981', color: '#fff', border: 'none', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 12px rgba(16, 185, 129, 0.4)'
               }}
            >
              ↑
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}