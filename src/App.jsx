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
  home:       '#0a0f0d',
  domain:     '#0d1117',
  slides:     '#0f0a1a',
  documents:  '#0a0d14',
  milestones: '#0a0f0d',
  about:      '#0d1410',
  contact:    '#0a0d0f',
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
      background: PAGE_BG[currentPage] || '#0a0f0d',
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

        /* Mobile: large tap targets, no 300ms delay */
        @media (max-width: 768px) {
          button, a { touch-action: manipulation; }
        }
      `}</style>

      <Navbar currentPage={currentPage} setCurrentPage={handleSetPage} />

      <main style={{ flex: 1, paddingTop: '62px' }}>
        <div className={`page-wrapper${animating ? ' fading' : ''}`}>
          {renderPage()}
        </div>
      </main>

      <footer style={{
        background: 'rgba(0,0,0,0.4)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '1.5rem 1rem',
        fontSize: '0.8rem',
        color: '#64748b',
      }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}>
          <div>© 2025 TeaNexus Project</div>
          <div>AI & IoT-Based Tea Production Optimization</div>
          <div>Project ID: <span style={{ color: '#94a3b8' }}>25-26J-193</span></div>
        </div>
      </footer>
    </div>
  );
}