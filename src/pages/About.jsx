import React from 'react';

const members = [
  {
    name: 'Edirisinghe N.G.I.U',
    id: 'IT22350428',
    role: 'Group Leader',
    email: 'it22350428@my.sliit.lk',
    linkedin: '#',
    faculty: 'Faculty of Computing',
    dept: 'Department of Information Technology',
  },
  {
    name: 'Hewage S.N',
    id: 'IT22271082',
    role: 'Group Member',
    email: 'nipunikahewage71@gmail.com',
    linkedin: 'https://www.linkedin.com/in/samadhi-hewage-112107271',
    faculty: 'Faculty of Computing',
    dept: 'Department of Information Technology',
  },
  {
    name: 'Kuruppu K.M.H.T',
    id: 'IT22105448',
    role: 'Group Member',
    email: 'htkharasara@gmail.com',
    linkedin: 'https://www.linkedin.com/in/harasara-thisarani-79098a2b4',
    faculty: 'Faculty of Computing',
    dept: 'Department of Information Technology',
  },
  {
    name: 'Konara K.M.M.M',
    id: 'IT22569936',
    role: 'Group Member',
    email: 'it22569936@my.sliit.lk',
    linkedin: '#',
    faculty: 'Faculty of Computing',
    dept: 'Department of Information Technology',
  },
];

export default function About() {
  return (
    <div style={{
      background: '#0a0f0d',
      minHeight: '100vh',
      padding: 'clamp(2rem, 5vw, 3rem) clamp(1rem, 4vw, 1.5rem)',
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Fraunces:wght@600;700&display=swap');

        /* Supervisors: 2 cols → 1 col */
        .supervisors-grid {
          max-width: 1100px;
          margin: 0 auto 3rem;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 320px));
          justify-content: center;
          gap: 1.5rem;
        }
        @media (max-width: 700px) {
          .supervisors-grid {
            grid-template-columns: 1fr;
            max-width: 400px;
          }
        }

        /* Members: 4 cols → 2 cols → 1 col */
        .members-grid {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 260px));
          justify-content: center;
          gap: 1.5rem;
        }
        @media (max-width: 1000px) {
          .members-grid { grid-template-columns: repeat(2, minmax(0, 300px)); }
        }
        @media (max-width: 560px) {
          .members-grid { grid-template-columns: 1fr; max-width: 400px; }
        }

        .about-card {
          background: #111712;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 12px;
          overflow: hidden;
          height: 100%;
          transition: border-color 0.2s, transform 0.2s;
        }
        .about-card:hover {
          border-color: rgba(34,197,94,0.27);
          transform: translateY(-3px);
        }

        .about-card-img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
        @media (max-width: 560px) {
          .about-card-img { height: 220px; }
        }

        .about-section-label {
          text-align: center;
          color: #22c55e;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }

        .about-divider {
          max-width: 1100px;
          margin: 0 auto 2rem;
          border: none;
          border-top: 1px solid rgba(255,255,255,0.06);
        }

        .about-badge {
          font-size: 10px;
          background: rgba(34,197,94,0.08);
          border: 1px solid rgba(34,197,94,0.2);
          padding: 3px 8px;
          border-radius: 20px;
          display: inline-block;
          margin: 6px 0;
          color: #4ade80;
          font-weight: 600;
        }

        .about-link {
          color: #22c55e;
          text-decoration: none;
          font-size: 12px;
          transition: color 0.15s;
        }
        .about-link:hover { color: #4ade80; }
      `}</style>

      {/* HEADER */}
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <div style={{ color: '#22c55e', fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
          About Us
        </div>
        <h1 style={{ fontFamily: "'Fraunces', serif", color: '#fff', margin: 0, fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 600 }}>
          Meet Our Team
        </h1>
      </div>

      {/* ── SUPERVISORS ── */}
      <div className="about-section-label">Supervisors</div>
      <div className="supervisors-grid">

        <div className="about-card">
          <img src="/images/sup1.jpg" className="about-card-img" alt="Mr. Nelum Chathuranga" />
          <div style={{ padding: '1rem' }}>
            <div style={nameStyle}>Mr. Nelum Chathuranga</div>
            <div className="about-badge">Supervisor</div>
            <div style={text}>
              Senior Lecturer<br />
              Department of Information Technology<br />
              Faculty of Computing
            </div>
            <div style={linksRow}>
              <a href="https://www.linkedin.com/in/nelum-chathuranga-amarasena-703a66176" target="_blank" rel="noreferrer" className="about-link">LinkedIn</a>
              <a href="mailto:nelum.a@sliit.lk" className="about-link">E-Mail</a>
            </div>
          </div>
        </div>

        <div className="about-card">
          <img src="/images/sup2.jpg" className="about-card-img" alt="Ms. Kaushika Kavindi" />
          <div style={{ padding: '1rem' }}>
            <div style={nameStyle}>Ms. Kaushika Kavindi</div>
            <div className="about-badge">Co-Supervisor</div>
            <div style={text}>
              Assistant Lecturer<br />
              Department of Information Technology<br />
              Faculty of Computing
            </div>
            <div style={linksRow}>
              <a href="https://www.linkedin.com/in/kaushi" target="_blank" rel="noreferrer" className="about-link">LinkedIn</a>
              <a href="mailto:kaushika.k@sliit.lk" className="about-link">E-Mail</a>
            </div>
          </div>
        </div>

      </div>

      <hr className="about-divider" />

      {/* ── MEMBERS ── */}
      <div className="about-section-label">Team Members</div>
      <div className="members-grid">
        {members.map((m, i) => (
          <div key={i} className="about-card">
            <img src={`/images/member${i + 1}.jpg`} className="about-card-img" alt={m.name} />
            <div style={{ padding: '1rem' }}>
              <div style={nameStyle}>{m.name}</div>
              <div style={{ fontSize: 11, color: '#4b6455', marginBottom: 2 }}>{m.id}</div>
              <div className="about-badge">{m.role}</div>
              <div style={text}>
                {m.faculty}<br />
                {m.dept}
              </div>
              <div style={linksRow}>
                <div>
                  {m.linkedin !== '#' && (
                    <a href={m.linkedin} target="_blank" rel="noreferrer" className="about-link">LinkedIn</a>
                  )}
                </div>
                <div>
                  <a href={`mailto:${m.email}`} className="about-link">E-Mail</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

/* ── Styles ── */
const nameStyle = { color: '#fff', fontWeight: 600, fontSize: '0.95rem' };

const text = { fontSize: 12, color: '#86a88e', lineHeight: 1.7 };

const linksRow = {
  marginTop: 12,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};