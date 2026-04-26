import React from 'react';
import { motion } from 'framer-motion';

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

const techs = [
  { name:'Python',      logo:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name:'Flask',       logo:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
  { name:'React Native',logo:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name:'Firebase',    logo:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { name:'TensorFlow',  logo:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
  { name:'Scikit-learn',logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/256px-Scikit_learn_logo_small.svg.png' },
  { name:'ESP32',       logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/ESP32_DevKitC_V4.jpg/220px-ESP32_DevKitC_V4.jpg' },
  { name:'Google Colab',logo:'https://colab.research.google.com/img/colab_favicon_256px.png' },
  { name:'NumPy',       logo:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
  { name:'Pandas',      logo:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
  { name:'OpenCV',      logo:'https://opencv.org/wp-content/uploads/2022/02/opencv-logo.png' },
  { name:'VS Code',     logo:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
];

const objectives = [
  { num:'1', title:'Yield Prediction & Traceability',   text:'Develop an IoT and ML system to automatically track leaf input vs powder output, predict expected yield in real-time, and provide intelligent recommendations for factory managers.' },
  { num:'2', title:'Predictive Machine Maintenance',    text:'Implement a Smart Belt Monitoring system using IoT sensors and ML to continuously monitor belt conditions, detect anomalies early, predict failures, and reduce unplanned downtime.' },
  { num:'3', title:'Disease Detection & Advisory',      text:'Build a tea leaf disease detection system with weather integration using CNN to identify diseases accurately and provide context-aware treatment recommendations to farmers.' },
  { num:'4', title:'Quality Optimisation',              text:'Develop an environment-aware humidity optimisation component to analyse the impact of humidity and seasonal factors on tea quality and identify optimal conditions for better grading.' },
];

export default function Domain() {
  return (
    <div style={{ background:'#0a0f0d', minHeight:'100vh', color:'#ddd', fontFamily:"'DM Sans',system-ui,sans-serif", paddingBottom:'4rem' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Fraunces:wght@600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; }

        .dom-section { max-width:1100px; margin:0 auto; padding:0 1.5rem; margin-bottom:4rem; }
        .dom-divider { border:none; border-top:1px solid rgba(255,255,255,.06); margin:0; }

        .dom-sec-num { color:#22c55e; font-size:clamp(2rem,5vw,2.8rem); font-weight:700; line-height:1; }
        .dom-sec-title { color:#fff; font-size:clamp(1.3rem,3vw,2rem); margin:0; font-family:"'Fraunces',serif"; }

        .dom-info-card {
          background:#111712; border:1px solid rgba(255,255,255,.07);
          border-radius:14px; padding:1.6rem; transition:border-color .2s;
        }
        .dom-info-card:hover { border-color:#22c55e44; }

        .dom-gap-box {
          background:#111712; border-left:4px solid #22c55e;
          border-radius:0 12px 12px 0; padding:1.6rem 1.6rem 1.6rem 1.4rem;
        }
        .dom-problem-box { background:#2b1212; border-left:5px solid #ef4444; border-radius:0 14px 14px 0; padding:1.8rem 1.8rem 1.8rem 1.5rem; color:#fecaca; }
        .dom-solution-box { background:#0d2015; border-left:5px solid #22c55e; border-radius:0 14px 14px 0; padding:1.8rem 1.8rem 1.8rem 1.5rem; color:#bbf7d0; }

        .dom-obj-card {
          background:#111712; border-left:4px solid #22c55e; border-radius:0 12px 12px 0;
          padding:1.4rem 1.4rem 1.4rem 1.2rem; margin-bottom:1rem;
          transition:background .2s;
        }
        .dom-obj-card:hover { background:#141f16; }

        .dom-tech-card {
          background:#111712; border-radius:12px; padding:1.2rem .8rem;
          text-align:center; border:1px solid rgba(255,255,255,.05);
          transition:all .2s;
        }
        .dom-tech-card:hover { border-color:#22c55e44; transform:translateY(-2px); }

        /* Grids */
        .dom-lit-grid  { display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:1rem; }
        .dom-tech-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(100px,1fr)); gap:1rem; }

        @media (max-width:600px) {
          .dom-prob-grid { display:flex; flex-direction:column; gap:1rem; }
          .dom-tech-grid { grid-template-columns:repeat(3,1fr); }
        }
      `}</style>

      {/* Hero */}
      <div style={{ padding:'3rem 1.5rem 2rem', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute',inset:0, background:'radial-gradient(ellipse 60% 70% at 60% 40%,rgba(34,197,94,.07),transparent 70%)' }} />
        <div style={{ maxWidth:1100, margin:'0 auto', position:'relative' }}>
          <motion.div initial={{ opacity:0, y:-10 }} animate={{ opacity:1, y:0 }} transition={{ duration:.5 }}
            style={{ display:'inline-flex', alignItems:'center', gap:7, background:'rgba(34,197,94,.08)', border:'1px solid rgba(34,197,94,.2)', borderRadius:20, padding:'5px 14px', marginBottom:16 }}
          >
            <span style={{ fontSize:10, fontWeight:700, color:'#22c55e', letterSpacing:'.08em', textTransform:'uppercase' }}>Research Domain</span>
          </motion.div>
          <motion.h1 initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:.1, duration:.6 }}
            style={{ fontFamily:"'Fraunces',serif", fontSize:'clamp(2rem,5vw,3rem)', color:'#fff', fontWeight:700, marginBottom:10, lineHeight:1.1 }}
          >
            The Science Behind Our System
          </motion.h1>
          <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:.22 }}
            style={{ color:'#86a88e', maxWidth:560, lineHeight:1.75, fontSize:15 }}
          >
            Literature findings, research gap, objectives, methodology, and the technologies powering our solution.
          </motion.p>
        </div>
      </div>

      {/* ── 01 Literature ── */}
      <div id="literature" style={{ padding:'2rem 0 0' }}>
        <motion.div className="dom-section" {...inView()}>
          <div style={{ display:'flex', alignItems:'center', gap:'1rem', marginBottom:'1.5rem' }}>
            <div className="dom-sec-num">01</div>
            <h2 className="dom-sec-title">Literature Survey</h2>
          </div>
          <div className="dom-lit-grid">
            {[
              { title:'Agricultural AI & Smart Farming', text:'Existing studies highlight CNN use for crop disease detection. Research from tea-producing nations shows up to 30% improvement in quality grading through computer vision models.' },
              { title:'IoT in Precision Agriculture', text:'Wireless sensor networks and IoT platforms such as Arduino and Raspberry Pi have been deployed globally to collect environmental data at agricultural scale.' },
              { title:'ML for Predictive Maintenance', text:'Random Forest and gradient boosting models have demonstrated high accuracy in predicting equipment failure and remaining useful life in industrial settings.' },
            ].map((item, i) => (
              <motion.div key={i} className="dom-info-card" {...inView(i*.08)}>
                <div style={{ color:'#22c55e', fontWeight:600, marginBottom:8 }}>{item.title}</div>
                <div style={{ color:'#86a88e', lineHeight:1.75, fontSize:14 }}>{item.text}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <hr className="dom-divider" />

        {/* ── 02 Gap ── */}
        <motion.div id="gap" className="dom-section" style={{ paddingTop:'2rem' }} {...inView()}>
          <div style={{ display:'flex', alignItems:'center', gap:'1rem', marginBottom:'1.5rem' }}>
            <div className="dom-sec-num">02</div>
            <h2 className="dom-sec-title">Research Gap</h2>
          </div>
          {[
            { title:'No Unified Smart Platform', text:'There is no comprehensive smart solution for accurate identification and classification of issues in Sri Lankan tea production — including diseases, processing inefficiencies, and machine faults — in one platform.' },
            { title:'Severity Assessment Missing', text:'Most existing systems do not assess the severity or progression level of diseases and machine degradation, limiting timely decision-making by factory managers and farmers.' },
            { title:'Real-Time Communication Gap', text:'A real-time communication system to speed up information sharing between farmers, factory managers, extension officers, and researchers has been identified as a critical unmet need.' },
          ].map((item, i) => (
            <motion.div key={i} className="dom-gap-box" style={{ marginBottom:'1rem' }} {...inView(i*.08)}>
              <div style={{ color:'#4ade80', fontWeight:600, marginBottom:6 }}>{item.title}</div>
              <div style={{ color:'#86a88e', lineHeight:1.75, fontSize:14 }}>{item.text}</div>
            </motion.div>
          ))}
        </motion.div>

        <hr className="dom-divider" />

        {/* ── 03 Problem & Solution ── */}
        <motion.div id="problem" className="dom-section" style={{ paddingTop:'2rem' }} {...inView()}>
          <div style={{ display:'flex', alignItems:'center', gap:'1rem', marginBottom:'1.5rem' }}>
            <div className="dom-sec-num">03</div>
            <h2 className="dom-sec-title">Research Problem &amp; Solution</h2>
          </div>
          <div className="dom-prob-grid" style={{ display:'flex', flexDirection:'column', gap:'1rem' }}>
            <motion.div className="dom-problem-box" {...inView(.06)}>
              <div style={{ fontWeight:700, marginBottom:8, color:'#fca5a5' }}>🔴 Problem Statement</div>
              <div style={{ lineHeight:1.8, fontSize:14 }}>How to effectively monitor, predict, and manage the entire tea production process in real time? Sri Lankan tea factories and farmers face major challenges including inaccurate manual yield tracking, unexpected belt-driven machine failures, delayed disease detection, and lack of data-driven quality optimisation, resulting in significant production losses and inconsistent tea quality.</div>
            </motion.div>
            <motion.div className="dom-solution-box" {...inView(.12)}>
              <div style={{ fontWeight:700, marginBottom:8, color:'#86efac' }}>🟢 Solution — TeaNexus</div>
              <div style={{ lineHeight:1.8, fontSize:14 }}>TeaNexus is a comprehensive AI and IoT-based platform solving these problems through four integrated intelligent modules:<br /><br />• Tea Leaf-to-Powder Yield Comparison System<br />• Smart Belt Monitoring and Alert System<br />• Tea Leaf Disease Detection and Smart Advisory System<br />• Environment-Aware Humidity Optimization for Quality Prediction</div>
            </motion.div>
          </div>
        </motion.div>

        <hr className="dom-divider" />

        {/* ── 04 Objectives ── */}
        <motion.div id="objectives" className="dom-section" style={{ paddingTop:'2rem' }} {...inView()}>
          <div style={{ display:'flex', alignItems:'center', gap:'1rem', marginBottom:'1.5rem' }}>
            <div className="dom-sec-num">04</div>
            <h2 className="dom-sec-title">Research Objectives</h2>
          </div>
          {objectives.map((obj, i) => (
            <motion.div key={i} className="dom-obj-card" {...inView(i*.07)}>
              <div style={{ color:'#22c55e', fontWeight:700, marginBottom:6, fontSize:13 }}>Objective {obj.num}: {obj.title}</div>
              <div style={{ color:'#86a88e', lineHeight:1.75, fontSize:14 }}>{obj.text}</div>
            </motion.div>
          ))}
        </motion.div>

        <hr className="dom-divider" />

        {/* ── 05 Methodology ── */}
        <motion.div id="methodology" className="dom-section" style={{ paddingTop:'2rem' }} {...inView()}>
          <div style={{ display:'flex', alignItems:'center', gap:'1rem', marginBottom:'1.5rem' }}>
            <div className="dom-sec-num">05</div>
            <h2 className="dom-sec-title">Methodology</h2>
          </div>
          <div className="dom-info-card" style={{ marginBottom:'1rem' }}>
            <div style={{ color:'#86a88e', lineHeight:1.8, fontSize:14 }}>
              TeaNexus follows a <strong style={{ color:'#cde8d2' }}>modular layered architecture</strong> consisting of IoT data acquisition, communication layer, Flask backend with machine learning models, Firebase Firestore for real-time data storage, and a React Native mobile application for end users.<br /><br />
              Data flows from physical sensors through REST APIs, is processed by ML models, stored in the cloud, and delivered as actionable insights to farmers and factory workers. The project follows an agile development approach with iterative sprints.
            </div>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(150px,1fr))', gap:'.75rem' }}>
            {['Data Collection','Model Training','System Integration','Field Testing','Deployment'].map((step, i) => (
              <motion.div key={i} {...inView(i*.06)}
                style={{ background:'#111712', border:'1px solid rgba(255,255,255,.07)', borderRadius:10, padding:'1rem', textAlign:'center' }}
              >
                <div style={{ width:30,height:30,borderRadius:8,background:'rgba(34,197,94,.12)',border:'1px solid rgba(34,197,94,.2)',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto .6rem',color:'#22c55e',fontWeight:700,fontSize:12 }}>0{i+1}</div>
                <div style={{ color:'#cde8d2', fontSize:13, fontWeight:500 }}>{step}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <hr className="dom-divider" />

        {/* ── 06 Technologies ── */}
        <motion.div id="tech" className="dom-section" style={{ paddingTop:'2rem' }} {...inView()}>
          <div style={{ display:'flex', alignItems:'center', gap:'1rem', marginBottom:'1.5rem' }}>
            <div className="dom-sec-num">06</div>
            <h2 className="dom-sec-title">Technologies Used</h2>
          </div>
          <div className="dom-tech-grid">
            {techs.map((tech, i) => (
              <motion.div key={i} className="dom-tech-card" {...inView(i*.04)}>
                <img src={tech.logo} alt={tech.name} style={{ width:44,height:44,marginBottom:10,objectFit:'contain' }} onError={e => e.target.style.display='none'} />
                <div style={{ color:'#cde8d2', fontSize:12, fontWeight:500 }}>{tech.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}