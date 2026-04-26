import React, { useEffect } from 'react';

const CSS = `
  .doc-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.8rem;
  }
  .doc-hero-title {
    font-size: 2.8rem;
    color: #fff;
    margin: 0 0 0.5rem;
  }
  @media (max-width: 900px) {
    .doc-grid { grid-template-columns: repeat(2, 1fr); }
    .doc-hero-title { font-size: 2rem; }
  }
  @media (max-width: 560px) {
    .doc-grid { grid-template-columns: 1fr; }
    .doc-hero-title { font-size: 1.6rem; }
  }
`;

const documents = [
  {
    id: 'charter',
    title: 'Project Charter',
    desc: 'July 2025',
    status: 'Available',
    url: 'https://drive.google.com/uc?export=download&id=1CJA1-4GLbKEcYQuY1HC5bUoDdWCl5kfE'
  },
  {
    id: 'proposal-doc',
    title: 'Proposal Report',
    desc: 'August 31, 2025',
    status: 'Available',
    url: 'https://drive.google.com/uc?export=download&id=1viw669RDGgO5xoRsv2inJwoelI5Q02b0'
  },
  {
    id: 'pp1-checklist',
    title: 'Checklist 1',
    desc: 'January 9, 2026',
    status: 'Available',
    files: [
      { url: 'https://drive.google.com/uc?export=download&id=1q7hfMeAOsAT8UGbEhr_NmTD0Y8g1zkaH', label: 'README File' },
      { url: 'https://drive.google.com/uc?export=download&id=1eNHfE0GqYjDJY13idCNA_rb9jsBjnymu', label: 'GitHub Repository' }
    ]
  },
  {
    id: 'pp2-checklist',
    title: 'Checklist 2',
    desc: 'April 30, 2026 (Yet to be submitted)',
    status: 'Pending'
  },
  {
    id: 'research-paper',
    title: 'Research Paper',
    desc: 'May 8, 2026 (Yet to be submitted)',
    status: 'Pending'
  },
  {
    id: 'final-report',
    title: 'Final Report (Group)',
    desc: 'May 13, 2026 (Draft Submitted)',
    status: 'Pending'
  },
  {
    id: 'individual-m1',
    title: 'Final Report (Individual)',
    name: 'Hewage S.N',
    idNum: 'IT22271082',
    desc: 'May 13, 2026 (Draft Submitted)',
    status: 'Pending'
  },
  {
    id: 'individual-m2',
    title: 'Final Report (Individual)',
    name: 'Kuruppu K.M.H.T',
    idNum: 'IT22105448',
    desc: 'May 13, 2026 (Draft Submitted)',
    status: 'Pending'
  },
  {
    id: 'individual-m3',
    title: 'Final Report (Individual)',
    name: 'Edirisinghe N.G.I.U',
    idNum: 'IT22350428',
    desc: 'May 13, 2026 (Draft Submitted)',
    status: 'Pending'
  },
  {
    id: 'individual-m4',
    title: 'Final Report (Individual)',
    name: 'Konara K.M.M.M',
    idNum: 'IT22569936',
    desc: 'May 13, 2026 (Draft Submitted)',
    status: 'Pending'
  }
];

export default function Documents() {

  const handleOpen = (url) => {
    if (!url) return;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    const target = sessionStorage.getItem('scrollTarget');
    if (target) {
      setTimeout(() => {
        const el = document.getElementById(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        sessionStorage.removeItem('scrollTarget');
      }, 100);
    }
  }, []);

  return (
    <div style={page}>
      <style>{CSS}</style>

      <div style={hero}>
        <div style={container}>
          <h1 className="doc-hero-title">Documents</h1>
          <p style={sub}>All project submissions listed clearly.</p>
        </div>
      </div>

      <div style={main}>
        <div className="doc-grid">
          {documents.map((doc, i) => (
            <div key={i} id={doc.id} style={card}>

              <div style={cardBody}>
                <div style={cardTitle}>{doc.title}</div>

                {doc.name && (
                  <div style={nameStyle}>
                    {doc.name} — {doc.idNum}
                  </div>
                )}

                <div style={cardDesc}>{doc.desc}</div>
              </div>

              <div style={cardFooter}>
                <span style={label}>Group</span>

                <div style={actions}>
                  {doc.files ? (
                    doc.files.map((f, idx) => (
                      <div
                        key={idx}
                        onClick={() => handleOpen(f.url)}
                        style={stackBtn}
                      >
                        {f.label}
                      </div>
                    ))
                  ) : doc.status === 'Available' ? (
                    <div
                      onClick={() => handleOpen(doc.url)}
                      style={download}
                    >
                      Download
                    </div>
                  ) : (
                    <div style={disabled}>Not Available</div>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

const page = {
  background: '#0a0f0d',
  minHeight: '100vh',
  fontFamily: 'sans-serif'
};

const hero = {
  padding: '3rem 1.5rem 2rem'
};

const container = {
  maxWidth: '1200px',
  margin: '0 auto'
};

const sub = {
  color: '#86a88e'
};

const main = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '2rem 1.5rem'
};

const card = {
  background: '#111712',
  border: '1px solid rgba(255,255,255,0.07)',
  borderRadius: 10,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
};

const cardBody = {
  padding: '1.5rem',
  minHeight: '130px'
};

const cardTitle = {
  color: '#fff',
  fontWeight: 600
};

const nameStyle = {
  color: '#9bbfa6',
  fontSize: '0.9rem',
  marginTop: '4px'
};

const cardDesc = {
  color: '#9bbfa6',
  marginTop: '6px'
};

const cardFooter = {
  borderTop: '1px solid rgba(255,255,255,0.07)',
  padding: '0.8rem 1.5rem',
  display: 'flex',
  justifyContent: 'space-between'
};

const label = {
  color: '#fff'
};

const actions = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  gap: '6px'
};

const stackBtn = {
  color: '#22c55e',
  cursor: 'pointer'
};

const download = {
  color: '#22c55e',
  cursor: 'pointer'
};

const disabled = {
  color: '#6b7280'
};