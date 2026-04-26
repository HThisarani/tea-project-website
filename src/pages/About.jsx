import React from 'react';

const members = [
  {
    name: 'Edirisinghe N.G.I.U',
    id: 'IT22350428',
    role: 'Group Leader',
    email: 'isuruedirisinghe2001@gmail.com',
    linkedin: 'https://www.linkedin.com/in/isuru-udara-7a9236303',
    faculty: 'Faculty of Computing',
    dept: 'Department of Information Technology',
    image: '/images/Edirisinghe N.G.I.U.jpeg',
  },
  {
    name: 'Hewage S.N',
    id: 'IT22271082',
    role: 'Group Member',
    email: 'nipunikahewage71@gmail.com',
    linkedin: 'https://www.linkedin.com/in/samadhi-hewage-112107271',
    faculty: 'Faculty of Computing',
    dept: 'Department of Information Technology',
    image: '/images/Hewage S.N.jpeg',
  },
  {
    name: 'Kuruppu K.M.H.T',
    id: 'IT22105448',
    role: 'Group Member',
    email: 'htkharasara@gmail.com',
    linkedin: 'https://www.linkedin.com/in/harasara-thisarani-79098a2b4',
    faculty: 'Faculty of Computing',
    dept: 'Department of Information Technology',
    image: '/images/Kuruppu K.M.H.T.jpeg',
  },
  {
    name: 'Konara K.M.M.M',
    id: 'IT22569936',
    role: 'Group Member',
    email: 'malithmenusha25@gmail.com',
    linkedin: 'https://www.linkedin.com/in/menushamalith/',
    faculty: 'Faculty of Computing',
    dept: 'Department of Information Technology',
    image: '/images/Konara K.M.M.M.JPG',
  },
];

const supervisors = [
  {
    name: 'Mr. Nelum Chathuranga',
    role: 'Supervisor',
    designation: 'Senior Lecturer',
    email: 'nelum.a@sliit.lk',
    linkedin: 'https://www.linkedin.com/in/nelum-chathuranga-amarasena-703a66176',
    faculty: 'Faculty of Computing',
    dept: 'Department of Information Technology',
    image: '/images/Mr. Nelum Chathuranga.jpeg',
  },
  {
    name: 'Ms. Kaushika Kavindi',
    role: 'Co-Supervisor',
    designation: 'Assistant Lecturer',
    email: 'kaushika.k@sliit.lk',
    linkedin: 'https://www.linkedin.com/in/kaushi',
    faculty: 'Faculty of Computing',
    dept: 'Department of Information Technology',
    image: '/images/Ms. Kaushika Kavindi.jpeg',
  }
];

export default function About() {
  return (
    <div className="about-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Plus+Jakarta+Sans:wght@500;600;700&display=swap');

        .about-container {
          background: #09090b;
          min-height: 100vh;
          padding: clamp(3rem, 6vw, 5rem) clamp(1rem, 4vw, 2rem);
          font-family: 'Inter', sans-serif;
          color: #fafafa;
          position: relative;
        }

        .about-container::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 60% 50% at 50% 0%, rgba(34,197,94,0.07), transparent 70%);
          pointer-events: none;
        }

        .about-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .about-subtitle {
          color: #34d399;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-bottom: 0.75rem;
          display: inline-block;
          background: rgba(74, 222, 128, 0.1);
          padding: 0.4rem 1rem;
          border-radius: 50px;
          border: 1px solid rgba(74, 222, 128, 0.2);
        }

        .about-title {
          color: #fafafa;
          margin: 0;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .section-label {
          text-align: center;
          color: #a1a1aa;
          font-size: 1.1rem;
          font-weight: 500;
          margin-bottom: 2rem;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .section-label::before,
        .section-label::after {
          content: '';
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(134, 168, 142, 0.3), transparent);
          flex: 1;
          max-width: 120px;
        }

        .supervisors-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          max-width: 900px;
          margin: 0 auto 4rem;
          justify-content: center;
        }

        .members-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          max-width: 1100px;
          margin: 0 auto;
        }

        .profile-card {
          background: #18181b;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 16px;
          padding: 1.5rem 1.25rem;
          text-align: center;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
          height: 100%;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          position: relative;
        }

        .profile-card:hover {
          transform: translateY(-6px);
          border-color: rgba(74, 222, 128, 0.3);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(74, 222, 128, 0.08);
          background: #1c1c1f;
        }

        .supervisor-card {
          padding: 2rem;
        }

        .image-wrapper {
          overflow: hidden;
          border-radius: 50%;
          width: 100px;
          height: 100px;
          margin: 0 auto 1.25rem;
          border: 3px solid rgba(74, 222, 128, 0.15);
          padding: 3px;
          transition: border-color 0.3s ease;
          background: #27272a;
        }

        .supervisor-card .image-wrapper {
          width: 120px;
          height: 120px;
        }

        .profile-card:hover .image-wrapper {
          border-color: rgba(74, 222, 128, 0.5);
        }

        .profile-image {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .profile-card:hover .profile-image {
          transform: scale(1.08);
        }

        .profile-name {
          color: #f8fafc;
          font-size: 1.15rem;
          font-weight: 600;
          margin-bottom: 0.2rem;
          letter-spacing: 0.01em;
        }

        .supervisor-card .profile-name {
          font-size: 1.25rem;
        }

        .student-id {
          color: #52525b;
          font-size: 0.75rem;
          font-family: monospace;
          margin-bottom: 0.75rem;
        }

        .profile-badge {
          background: rgba(74, 222, 128, 0.1);
          color: #34d399;
          padding: 0.25rem 0.8rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 500;
          display: inline-block;
          margin-bottom: 1.25rem;
          border: 1px solid rgba(74, 222, 128, 0.2);
        }

        .supervisor-card .profile-badge {
          margin-bottom: 0.75rem;
        }

        .profile-details {
          color: #71717a;
          font-size: 0.85rem;
          line-height: 1.5;
          margin-bottom: 1rem;
          flex-grow: 1;
        }

        .department-text {
          font-weight: 500;
          color: #a1a1aa;
          margin-bottom: 0.25rem;
        }

        .faculty-text {
          font-size: 0.8rem;
          opacity: 0.8;
        }

        .divider {
          width: 100%;
          height: 1px;
          background: rgba(255, 255, 255, 0.06);
          margin-bottom: 1.25rem;
        }

        .profile-links {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.6rem;
          width: 100%;
          margin-top: auto;
        }

        .member-links {
          grid-template-columns: 1fr 1fr;
        }

        .link-btn {
          color: #a1a1aa;
          text-decoration: none;
          font-size: 0.8rem;
          font-weight: 500;
          padding: 0.5rem 0;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .link-btn:hover {
          background: rgba(74, 222, 128, 0.1);
          color: #34d399;
          border-color: rgba(74, 222, 128, 0.3);
          transform: translateY(-1px);
        }

        .link-btn.primary {
          background: rgba(74, 222, 128, 0.07);
          color: #34d399;
          border-color: rgba(74, 222, 128, 0.2);
        }

        .link-btn.primary:hover {
          background: #34d399;
          color: #022c22;
          border-color: #34d399;
        }

        @media (max-width: 1024px) {
          .members-grid {
            grid-template-columns: repeat(2, 1fr);
            max-width: 600px;
          }
        }

        @media (max-width: 640px) {
          .members-grid, .supervisors-grid {
            grid-template-columns: 1fr;
            max-width: 320px;
          }
        }
      `}</style>

      {/* HEADER */}
      <div className="about-header">
        <div className="about-subtitle">Research Project</div>
        <h1 className="about-title">Meet Our Team</h1>
      </div>

      {/* SUPERVISORS */}
      <div className="section-label">Supervisors</div>
      <div className="supervisors-grid">
        {supervisors.map((sup, i) => (
          <div key={i} className="profile-card supervisor-card">
            <div className="image-wrapper">
              <img src={sup.image} className="profile-image" alt={sup.name} />
            </div>
            <div className="profile-name">{sup.name}</div>
            <div className="profile-badge">{sup.role}</div>
            <div className="profile-details">
              <div className="department-text">{sup.designation}</div>
              <div className="department-text">{sup.dept}</div>
              <div className="faculty-text">{sup.faculty}</div>
            </div>
            <div className="divider"></div>
            <div className="profile-links member-links">
              {sup.linkedin !== '#' && (
                <a href={sup.linkedin} target="_blank" rel="noreferrer" className="link-btn primary">LinkedIn</a>
              )}
              <a href={`mailto:${sup.email}`} className="link-btn">Email</a>
            </div>
          </div>
        ))}
      </div>

      {/* MEMBERS */}
      <div className="section-label">Team Members</div>
      <div className="members-grid">
        {members.map((m, i) => (
          <div key={i} className="profile-card">
            <div className="image-wrapper">
              <img src={m.image} className="profile-image" alt={m.name} />
            </div>
            <div className="profile-name">{m.name}</div>
            <div className="student-id">{m.id}</div>
            <div className="profile-badge">{m.role}</div>
            <div className="profile-details">
              <div className="department-text">{m.dept}</div>
              <div className="faculty-text">{m.faculty}</div>
            </div>
            <div className="divider"></div>
            <div className="profile-links member-links">
              {m.linkedin !== '#' && (
                <a href={m.linkedin} target="_blank" rel="noreferrer" className="link-btn primary">LinkedIn</a>
              )}
              <a href={`mailto:${m.email}`} className="link-btn">Email</a>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}