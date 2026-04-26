import React, { useState, useEffect } from 'react';

const LINKS = [
  { id: 'home', label: 'Home' },
  {
    id: 'domain', label: 'Project Scope', dropdown: [
      { label: 'Literature Survey',   section: 'literature' },
      { label: 'Research Gap',        section: 'gap' },
      { label: 'Problem & Solution',  section: 'problem' },
      { label: 'Research Objectives', section: 'objectives' },
      { label: 'Methodology',         section: 'methodology' },
      { label: 'Technologies',        section: 'tech' },
    ],
  },
  {
    id: 'slides', label: 'Slides', dropdown: [
      { label: 'Proposal Presentation',   anchor: 'proposal-slide' },
      { label: 'Progress Presentation 1', anchor: 'pp1-slide' },
      { label: 'Progress Presentation 2', anchor: 'pp2-slide' },
      { label: 'Final Presentation',      anchor: 'final-slide' },
    ],
  },
  {
    id: 'documents', label: 'Documents', dropdown: [
      { label: 'Project Charter',              anchor: 'charter' },
      { label: 'Proposal Report',              anchor: 'proposal-doc' },
      { label: 'Checklist 1',                  anchor: 'pp1-checklist' },
      { label: 'Checklist 2',                  anchor: 'pp2-checklist' },
      { label: 'Research Paper',               anchor: 'research-paper' },
      { label: 'Final Report (Group)',          anchor: 'final-report' },
      { label: 'Individual Report - Hewage',    anchor: 'individual-m1' },
      { label: 'Individual Report - Kuruppu',   anchor: 'individual-m2' },
      { label: 'Individual Report - Edirisinghe', anchor: 'individual-m3' },
      { label: 'Individual Report - Konara',    anchor: 'individual-m4' },
    ],
  },
  { id: 'milestones', label: 'Milestones' },
  { id: 'about',      label: 'About' },
  { id: 'contact',    label: 'Contact' },
];

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.pageYOffset - 70;
  window.scrollTo({ top, behavior: 'smooth' });
  document.querySelectorAll('.tn-active-section').forEach(e =>
    e.classList.remove('tn-active-section')
  );
  setTimeout(() => { el.classList.add('tn-active-section'); }, 300);
}

const CSS = `
  * { box-sizing: border-box; }

  .tn-nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 9999;
    background: rgba(10,15,13,0.95);
    backdrop-filter: blur(14px);
    border-bottom: 1px solid rgba(255,255,255,0.1);
    font-family: 'DM Sans', system-ui, sans-serif;
  }
  .tn-nav.scrolled {
    box-shadow: 0 4px 25px rgba(0,0,0,0.6);
  }

  /* ── Top bar ── */
  .tn-inner {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 1.5rem;
    height: 62px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  /* ── Brand ── */
  .tn-brand {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    flex-shrink: 0;
  }
  .tn-brand-name { color: #fff; font-weight: 600; font-size: 15.5px; }
  .tn-brand-id   { color: #4ade80; font-size: 10px; }

  /* ── Desktop links ── */
  .tn-links {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .tn-btn {
    background: none;
    border: none;
    color: #86a88e;
    font-size: 13.8px;
    padding: 10px 18px;
    border-radius: 9px;
    cursor: pointer;
    white-space: nowrap;
    font-family: inherit;
    transition: color 0.2s, background 0.2s;
  }
  .tn-btn:hover  { color: #fff; background: rgba(255,255,255,0.07); }
  .tn-btn.active { color: #4ade80; background: rgba(74,222,128,0.12); }

  /* ── Desktop dropdown ── */
  .tn-item { position: relative; }

  .tn-dropdown {
    position: absolute;
    top: 100%; left: 0;
    margin-top: 8px;
    background: #111e15;
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 12px;
    padding: 8px 0;
    min-width: 220px;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: opacity 0.25s ease, transform 0.25s ease, visibility 0.25s;
    z-index: 100;
  }
  .tn-item:hover .tn-dropdown {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .tn-drop-item {
    padding: 11px 20px;
    color: #86a88e;
    cursor: pointer;
    font-size: 13.5px;
    transition: background 0.15s, color 0.15s;
  }
  .tn-drop-item:hover {
    background: rgba(74,222,128,0.15);
    color: #4ade80;
  }

  /* ── Hamburger button ── */
  .tn-hamburger {
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    width: 40px;
    height: 40px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    border-radius: 8px;
    transition: background 0.2s;
    flex-shrink: 0;
  }
  .tn-hamburger:hover { background: rgba(255,255,255,0.07); }

  .tn-bar {
    width: 22px;
    height: 2px;
    background: #86a88e;
    border-radius: 2px;
    transition: transform 0.3s ease, opacity 0.3s ease, width 0.3s ease;
    transform-origin: center;
  }
  .tn-hamburger.open .tn-bar:nth-child(1) { transform: translateY(7px) rotate(45deg); background: #4ade80; }
  .tn-hamburger.open .tn-bar:nth-child(2) { opacity: 0; transform: scaleX(0); }
  .tn-hamburger.open .tn-bar:nth-child(3) { transform: translateY(-7px) rotate(-45deg); background: #4ade80; }

  /* ── Mobile drawer ── */
  .tn-mobile-menu {
    display: none;
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.4s cubic-bezier(0.4,0,0.2,1);
    border-top: 1px solid rgba(255,255,255,0.07);
  }
  .tn-mobile-menu.open {
    max-height: 85vh;
    overflow-y: auto;
  }

  .tn-mobile-inner {
    padding: 8px 1rem 16px;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  /* Mobile top-level row */
  .tn-m-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .tn-m-btn {
    flex: 1;
    background: none;
    border: none;
    color: #86a88e;
    font-size: 14px;
    padding: 11px 12px;
    border-radius: 9px;
    cursor: pointer;
    text-align: left;
    font-family: inherit;
    transition: color 0.2s, background 0.2s;
  }
  .tn-m-btn:hover  { color: #fff; background: rgba(255,255,255,0.06); }
  .tn-m-btn.active { color: #4ade80; }

  .tn-m-chevron {
    background: none;
    border: none;
    cursor: pointer;
    color: #86a88e;
    padding: 8px 10px;
    border-radius: 8px;
    font-size: 12px;
    transition: transform 0.25s ease, color 0.2s;
    line-height: 1;
  }
  .tn-m-chevron:hover { color: #4ade80; }
  .tn-m-chevron.open  { transform: rotate(180deg); color: #4ade80; }

  /* Mobile sub-items */
  .tn-m-sub {
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.3s ease;
    padding-left: 16px;
  }
  .tn-m-sub.open { max-height: 500px; }

  .tn-m-sub-item {
    padding: 9px 12px;
    color: #5e7d66;
    cursor: pointer;
    font-size: 13px;
    border-radius: 7px;
    transition: color 0.15s, background 0.15s;
    border-left: 1px solid rgba(74,222,128,0.15);
    margin: 1px 0;
  }
  .tn-m-sub-item:hover { color: #4ade80; background: rgba(74,222,128,0.08); }

  /* ── Active section highlight ── */
  .tn-active-section {
    border: 1px solid rgba(74,222,128,0.6) !important;
    background: rgba(74,222,128,0.08) !important;
  }

  /* ── Responsive breakpoint ── */
  @media (max-width: 768px) {
    .tn-links     { display: none; }
    .tn-hamburger { display: flex; }
    .tn-mobile-menu { display: block; }
  }
`;

export default function Navbar({ currentPage, setCurrentPage }) {
  const [scrolled,    setScrolled]    = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);
  const [openSubs,    setOpenSubs]    = useState({});   // { linkId: bool }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page resize back to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const navigate = (pageId) => {
    setCurrentPage(pageId);
    setMenuOpen(false);
    setOpenSubs({});
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToSection = (section) => {
    setMenuOpen(false);
    if (currentPage === 'domain') {
      setTimeout(() => scrollToSection(section), 100);
    } else {
      sessionStorage.setItem('scrollTarget', section);
      setCurrentPage('domain');
    }
  };

  const goToAnchor = (pageId, anchor) => {
    setMenuOpen(false);
    if (currentPage === pageId) {
      setTimeout(() => scrollToSection(anchor), 100);
    } else {
      sessionStorage.setItem('scrollTarget', anchor);
      setCurrentPage(pageId);
    }
  };

  const toggleSub = (id) =>
    setOpenSubs(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <>
      <style>{CSS}</style>

      <nav className={`tn-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="tn-inner">

          {/* Brand */}
          <div className="tn-brand" onClick={() => navigate('home')}>
            <span style={{ fontSize: 22 }}>🍃</span>
            <div>
              <div className="tn-brand-name">TeaNexus</div>
              <div className="tn-brand-id">25-26J-193</div>
            </div>
          </div>

          {/* ── Desktop links ── */}
          <div className="tn-links">
            {LINKS.map((link) => (
              <div key={link.id} className="tn-item">
                <button
                  className={`tn-btn ${currentPage === link.id ? 'active' : ''}`}
                  onClick={() => navigate(link.id)}
                >
                  {link.label}
                </button>

                {link.dropdown && (
                  <div className="tn-dropdown">
                    {link.dropdown.map((item, i) => (
                      <div
                        key={i}
                        className="tn-drop-item"
                        onClick={() =>
                          item.section
                            ? goToSection(item.section)
                            : goToAnchor(link.id, item.anchor)
                        }
                      >
                        {item.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* ── Hamburger ── */}
          <button
            className={`tn-hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span className="tn-bar" />
            <span className="tn-bar" />
            <span className="tn-bar" />
          </button>
        </div>

        {/* ── Mobile drawer ── */}
        <div className={`tn-mobile-menu ${menuOpen ? 'open' : ''}`}>
          <div className="tn-mobile-inner">
            {LINKS.map((link) => (
              <div key={link.id}>
                <div className="tn-m-row">
                  <button
                    className={`tn-m-btn ${currentPage === link.id ? 'active' : ''}`}
                    onClick={() => {
                      if (!link.dropdown) navigate(link.id);
                    }}
                  >
                    {link.label}
                  </button>

                  {link.dropdown && (
                    <button
                      className={`tn-m-chevron ${openSubs[link.id] ? 'open' : ''}`}
                      onClick={() => toggleSub(link.id)}
                      aria-label={`Toggle ${link.label}`}
                    >
                      ▼
                    </button>
                  )}
                </div>

                {link.dropdown && (
                  <div className={`tn-m-sub ${openSubs[link.id] ? 'open' : ''}`}>
                    {link.dropdown.map((item, i) => (
                      <div
                        key={i}
                        className="tn-m-sub-item"
                        onClick={() =>
                          item.section
                            ? goToSection(item.section)
                            : goToAnchor(link.id, item.anchor)
                        }
                      >
                        {item.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}