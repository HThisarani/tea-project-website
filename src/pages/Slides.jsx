import React, { useEffect } from 'react';

const CSS = `
  .slides-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  .slides-hero-title {
    font-size: 2.8rem;
    color: #fafafa;
    margin-bottom: 10px;
  }
  .slides-btn-row {
    display: flex;
    gap: 10px;
    align-items: center;
    flex-wrap: wrap;
  }
  .slides-btn {
    cursor: pointer;
    font-weight: 600;
    font-size: 0.88rem;
    padding: 6px 16px;
    border-radius: 7px;
    border: none;
    font-family: inherit;
    transition: opacity 0.15s;
  }
  .slides-btn:hover { opacity: 0.75; }
  .slides-btn-view {
    background: rgba(74,222,128,0.12);
    color: #34d399;
  }
  .slides-btn-download {
    background: #10b981;
    color: #09090b;
  }
  @media (max-width: 700px) {
    .slides-grid { grid-template-columns: 1fr; }
    .slides-hero-title { font-size: 2rem; }
  }
  @media (max-width: 420px) {
    .slides-hero-title { font-size: 1.6rem; }
  }
`;

const slides = [
  {
    id: 'proposal-slide',
    title: 'Proposal Presentation',
    date: 'September 11, 2025',
    status: 'Available',
    viewUrl:     'https://docs.google.com/presentation/d/1GoLhMGsjmy-HunyU0qbUKdqCGXBLIcD9/present',
    downloadUrl: 'https://docs.google.com/presentation/d/1GoLhMGsjmy-HunyU0qbUKdqCGXBLIcD9/export/pptx',
  },
  {
    id: 'pp1-slide',
    title: 'Progress Presentation 1',
    date: 'January 9, 2026',
    status: 'Available',
    viewUrl:     'https://docs.google.com/presentation/d/1huJvMKMp4YcpB5nDH97wsFvPDyYggLs8/present',
    downloadUrl: 'https://docs.google.com/presentation/d/1huJvMKMp4YcpB5nDH97wsFvPDyYggLs8/export/pptx',
  },
  {
    id: 'pp2-slide',
    title: 'Progress Presentation 2',
    date: 'March 9, 2026',
    status: 'Available',
    viewUrl:     'https://docs.google.com/presentation/d/1YZgCBR63V5UzN6ABrv-28IqPdoXUbT04/present',
    downloadUrl: 'https://docs.google.com/presentation/d/1YZgCBR63V5UzN6ABrv-28IqPdoXUbT04/export/pptx',
  },
  {
    id: 'final-slide',
    title: 'Final Presentation',
    date: 'May 2026',
    status: 'Available',
    viewUrl:     'https://docs.google.com/presentation/d/11pv3h3RduBk5ZCKWLUH6dbitTOijJfWu/present',
    downloadUrl: 'https://docs.google.com/presentation/d/11pv3h3RduBk5ZCKWLUH6dbitTOijJfWu/export/pptx',
  },
];

export default function Slides() {

  const openUrl = (url) => {
    if (!url) return;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    const target = sessionStorage.getItem('scrollTarget');
    if (target) {
      setTimeout(() => {
        const el = document.getElementById(target);
        if (el) {
          const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({ top: y, behavior: 'smooth' });
          document.querySelectorAll('.tn-active-section').forEach(e =>
            e.classList.remove('tn-active-section')
          );
          el.classList.add('tn-active-section');
        }
        sessionStorage.removeItem('scrollTarget');
      }, 400);
    }
  }, []);

  return (
    <div style={page}>
      <style>{CSS}</style>

      <div style={hero}>
        <div style={heroInner}>
          <div style={container}>
            <h1 className="slides-hero-title">Presentations</h1>
            <p style={sub}>
              Please find all presentations related to this project below.
            </p>
          </div>
        </div>
      </div>

      <div style={mainContent}>
        <div className="slides-grid">
          {slides.map((slide, i) => (
            <div key={i} id={slide.id} style={card} className="glb-card">

              <div>
                <div style={cardTitle}>{slide.title}</div>
                <div style={cardDesc}>
                  {slide.status === 'Pending'
                    ? slide.date
                    : `Submitted on ${slide.date}`}
                </div>
              </div>

              <div style={bottom}>
                <span style={groupText}>Group</span>

                {slide.status === 'Available' ? (
                  <div className="slides-btn-row">
                    <button
                      className="slides-btn slides-btn-view"
                      onClick={() => openUrl(slide.viewUrl)}
                    >
                      View
                    </button>
                    <button
                      className="slides-btn slides-btn-download"
                      onClick={() => openUrl(slide.downloadUrl)}
                    >
                      Download
                    </button>
                  </div>
                ) : (
                  <span style={disabled}>Not Available</span>
                )}
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

const page = {
  background: '#09090b',
  minHeight: '100vh',
  fontFamily: 'sans-serif',
  position: 'relative',
};

const hero = {
  position: 'relative',
  overflow: 'hidden',
};

const heroInner = {
  position: 'relative',
  padding: '3rem 1.5rem 2rem',
  background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(34,197,94,0.07), transparent 70%)',
};

const container = {
  maxWidth: '1200px',
  margin: '0 auto'
};

const sub = {
  color: '#a1a1aa',
  fontSize: '1.1rem'
};

const mainContent = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '2rem 1.5rem'
};

const card = {
  background: '#18181b',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: 16,
  padding: '1.8rem',
  minHeight: '200px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
};

const cardTitle = {
  color: '#fafafa',
  fontSize: '1.5rem',
  fontWeight: 600
};

const cardDesc = {
  color: '#a1a1aa',
  fontSize: '1.05rem',
  marginTop: '10px'
};

const groupText = {
  color: '#fafafa',
  fontWeight: 500
};

const bottom = {
  marginTop: '2rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '10px'
};

const disabled = {
  color: '#9ca3af'
};