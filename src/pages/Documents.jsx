import React, { useEffect } from 'react';

const CSS = `
  .doc-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.8rem;
  }
  .doc-hero-title {
    font-size: 2.8rem;
    color: #fafafa;
    margin: 0 0 0.5rem;
  }
  .doc-btn-row {
    display: flex;
    gap: 10px;
    align-items: center;
    flex-wrap: wrap;
  }
  .doc-btn {
    cursor: pointer;
    font-weight: 600;
    font-size: 0.88rem;
    padding: 6px 16px;
    border-radius: 7px;
    border: none;
    font-family: inherit;
    transition: opacity 0.15s;
  }
  .doc-btn:hover { opacity: 0.75; }
  .doc-btn-view {
    background: rgba(74,222,128,0.12);
    color: #34d399;
  }
  .doc-btn-download {
    background: #10b981;
    color: #09090b;
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

const DocIcon = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ marginBottom: '0.75rem', opacity: 0.7 }}
  >
    <path
      d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
      stroke="#10b981"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 2V8H20"
      stroke="#10b981"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 13H8"
      stroke="#10b981"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 17H8"
      stroke="#10b981"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 9H9H8"
      stroke="#10b981"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const documents = [
  {
    id: 'charter',
    title: 'Project Charter',
    desc: 'July 2025',
    status: 'Available',
    url: 'https://drive.google.com/uc?export=download&id=1CJA1-4GLbKEcYQuY1HC5bUoDdWCl5kfE',
    viewUrl: 'https://drive.google.com/file/d/1CJA1-4GLbKEcYQuY1HC5bUoDdWCl5kfE/view'
  },
  {
    id: 'proposal-doc',
    title: 'Proposal Report',
    desc: 'August 31, 2025',
    status: 'Available',
    url: 'https://drive.google.com/uc?export=download&id=1viw669RDGgO5xoRsv2inJwoelI5Q02b0',
    viewUrl: 'https://drive.google.com/file/d/1viw669RDGgO5xoRsv2inJwoelI5Q02b0/view'
  },
  {
    id: 'pp1-checklist',
    title: 'Checklist 1',
    desc: 'January 9, 2026',
    status: 'Available',
    files: [
      {
        url: 'https://drive.google.com/uc?export=download&id=1q7hfMeAOsAT8UGbEhr_NmTD0Y8g1zkaH',
        viewUrl: 'https://drive.google.com/file/d/1q7hfMeAOsAT8UGbEhr_NmTD0Y8g1zkaH/view',
        label: 'README File'
      },
      {
        url: 'https://drive.google.com/uc?export=download&id=1eNHfE0GqYjDJY13idCNA_rb9jsBjnymu',
        viewUrl: 'https://drive.google.com/file/d/1eNHfE0GqYjDJY13idCNA_rb9jsBjnymu/view',
        label: 'GitHub Repository'
      }
    ]
  },
 {
    id: 'pp2-checklist',
    title: 'Checklist 2',
    desc: 'April 30, 2026',
    status: 'Available',
    files: [
      {
        url: 'https://docs.google.com/spreadsheets/d/1TSc6PSw_IdkxDuB103rB1CstT5CuB6Yk/export?format=xlsx',
        viewUrl: 'https://docs.google.com/spreadsheets/d/1TSc6PSw_IdkxDuB103rB1CstT5CuB6Yk/edit?usp=sharing',
        label: 'Checklist Sheet'
      }
    ]
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
    desc: 'April 26, 2026 (Draft Submitted)',
    status: 'Available',
    url: 'https://drive.google.com/uc?export=download&id=1y4xUvSVhpXeA6v5zTi0iAVnj9--Uvwe-',
    viewUrl: 'https://drive.google.com/file/d/1y4xUvSVhpXeA6v5zTi0iAVnj9--Uvwe-/view'
  },
  {
    id: 'individual-m1',
    title: 'Final Report (Individual)',
    name: 'Hewage S.N',
    idNum: 'IT22271082',
    desc: 'April 26, 2026 (Draft Submitted)',
    status: 'Available',
    url: 'https://drive.google.com/uc?export=download&id=119r4Los6czSRIMBa9AorP-6X7z11UcRX',
    viewUrl: 'https://drive.google.com/file/d/119r4Los6czSRIMBa9AorP-6X7z11UcRX/view'
  },
  {
    id: 'individual-m2',
    title: 'Final Report (Individual)',
    name: 'Kuruppu K.M.H.T',
    idNum: 'IT22105448',
    desc: 'April 26, 2026 (Draft Submitted)',
    status: 'Available',
    url: 'https://drive.google.com/uc?export=download&id=1I8gm-7I3m1UhKSv_qZRshLwRHmeNxxYg',
    viewUrl: 'https://drive.google.com/file/d/1I8gm-7I3m1UhKSv_qZRshLwRHmeNxxYg/view'
  },
  {
    id: 'individual-m3',
    title: 'Final Report (Individual)',
    name: 'Edirisinghe N.G.I.U',
    idNum: 'IT22350428',
    desc: 'April 26, 2026 (Draft Submitted)',
    status: 'Available',
    url: 'https://drive.google.com/uc?export=download&id=1f4tb610ofeOOEiDFgaawAr13WU7NEOzD',
    viewUrl: 'https://drive.google.com/file/d/1f4tb610ofeOOEiDFgaawAr13WU7NEOzD/view'
  },
  {
    id: 'individual-m4',
    title: 'Final Report (Individual)',
    name: 'Konara K.M.M.M',
    idNum: 'IT22569936',
    desc: 'April 26, 2026 (Draft Submitted)',
    status: 'Available',
    url: 'https://docs.google.com/document/d/1UiyBrdMpW6yRzKhO3W7agcHULn0iID0B/export?format=pdf',
    viewUrl: 'https://docs.google.com/document/d/1UiyBrdMpW6yRzKhO3W7agcHULn0iID0B/view'
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
            <div key={i} id={doc.id} style={card} className="glb-card">

              <div style={cardBody}>
                <DocIcon />
                <div style={cardTitle}>{doc.title}</div>

                {doc.name && (
                  <div style={nameStyle}>
                    {doc.name} — {doc.idNum}
                  </div>
                )}

                <div style={cardDesc}>{doc.desc}</div>
              </div>

              <div style={cardFooter}>
                <span style={label}>{doc.name ? 'Individual' : 'Group'}</span>

                <div style={actions}>
                  {doc.files ? (
                    doc.files.map((f, idx) => (
                      <div key={idx} style={fileRow}>
                        <span style={fileLabel}>{f.label}</span>
                        <button
                          className="doc-btn doc-btn-view"
                          onClick={() => handleOpen(f.viewUrl)}
                        >
                          View
                        </button>
                        <button
                          className="doc-btn doc-btn-download"
                          onClick={() => handleOpen(f.url)}
                        >
                          Download
                        </button>
                      </div>
                    ))
                  ) : doc.status === 'Available' ? (
                    <div className="doc-btn-row">
                      <button
                        className="doc-btn doc-btn-view"
                        onClick={() => handleOpen(doc.viewUrl)}
                      >
                        View
                      </button>
                      <button
                        className="doc-btn doc-btn-download"
                        onClick={() => handleOpen(doc.url)}
                      >
                        Download
                      </button>
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
  background: '#09090b',
  minHeight: '100vh',
  fontFamily: 'sans-serif',
  position: 'relative'
};

const hero = {
  padding: '3rem 1.5rem 2rem',
  background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(34,197,94,0.07), transparent 70%)',
};

const container = {
  maxWidth: '1200px',
  margin: '0 auto'
};

const sub = {
  color: '#a1a1aa'
};

const main = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '2rem 1.5rem'
};

const card = {
  background: '#18181b',
  border: '1px solid rgba(255,255,255,0.05)',
  borderRadius: 20,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
};

const cardBody = {
  padding: '1.5rem',
  minHeight: '130px'
};

const cardTitle = {
  color: '#fafafa',
  fontWeight: 600
};

const nameStyle = {
  color: '#a1a1aa',
  fontSize: '0.9rem',
  marginTop: '4px'
};

const cardDesc = {
  color: '#a1a1aa',
  marginTop: '6px'
};

const cardFooter = {
  borderTop: '1px solid rgba(255,255,255,0.05)',
  padding: '0.8rem 1.5rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '12px'
};

const label = {
  color: '#fafafa',
  flexShrink: 0
};

const actions = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  gap: '8px'
};

const fileRow = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
};

const fileLabel = {
  color: '#a1a1aa',
  fontSize: '0.85rem',
  whiteSpace: 'nowrap'
};

const disabled = {
  color: '#6b7280'
};