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
  { name:'Flask',       logo:'/icons/flask.svg' },
  { name:'React Native',logo:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name:'Firebase',    logo:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { name:'TensorFlow',  logo:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
  { name:'Scikit-learn',logo:'/icons/scikit-learn.svg' },
  { name:'ESP32',       logo:'/icons/esp32.svg' },
  { name:'Google Colab',logo:'https://colab.research.google.com/img/colab_favicon_256px.png' },
  { name:'NumPy',       logo:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
  { name:'Pandas',      logo:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
  { name:'OpenCV',      logo:'/icons/opencv.svg' },
  { name:'VS Code',     logo:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
];
 
const objectives = [
  {
    num: '1',
    title: 'Yield Prediction & Traceability',
    text: 'Develop an automated IoT and ML platform that digitally traces every batch from individual farmer leaf delivery through to final powder output. An ESP32 with load cell sensors auto-captures weights at intake and output stations, eliminating manual recording errors. A Gradient Boosting Regressor model — trained on 2,000 real production records from a Badulla tea factory — predicts expected yield percentage at the moment a batch is created, long before processing finishes. The model analyses 12 features including leaf weight, moisture, withering time, fermentation duration, drying temperature, and live weather data (rainfall, humidity, temperature) fetched automatically from WeatherAPI. When a completed batch deviates from its predicted target, a cause-specific recommendation engine analyses actual processing parameters and weather conditions to pinpoint the root cause and guide corrective actions for the next batch.',
  },
  {
    num: '2',
    title: 'Predictive Machine Maintenance',
     text: 'Develop a machine learning-based prediction system for belt failure using operational parameters such as wear percentage, crack severity, load conditions, usage duration, temperature, and humidity. A Random Forest model is trained to analyze these multi-dimensional inputs and identify complex relationships affecting belt degradation. The model performs both classification and regression tasks by predicting belt risk levels (Low, Medium, High, Failed) and estimating Remaining Useful Life (RUL). This enables early detection of potential failures and supports proactive maintenance planning based on data-driven insights rather than reactive decisions.',


  },
  {
    num: '3',
    title: 'Disease Detection & Smart Advisory',
    text: 'Build a CNN-based tea leaf disease detection system that allows any farmer to photograph a leaf with their smartphone and receive an instant diagnosis and treatment plan. The model uses EfficientNet-B0 with transfer learning, trained on a curated dataset of plantation images, and classifies leaves into six categories: Algal Leaf Spot, Brown Blight, Gray Blight, Healthy, Helopeltis, and Red Leaf Spot — achieving 92.8% accuracy. Once a disease is identified, a structured knowledge base built from Sri Lanka Tea Research Institute guidelines generates chemical and organic treatment recommendations. A weather-aware advisory module fetches real-time conditions (wind speed, rainfall, humidity, temperature) from the user\'s GPS location and evaluates whether current weather is suitable for applying the recommended treatment, with natural-language guidance on whether to proceed, delay, or adjust timing.',
  },
  {
    num: '4',
    title: 'Environment-Aware Quality Optimisation',
    text: 'Develop a data-driven humidity and environmental optimisation component that identifies the precise conditions required to achieve the best possible tea quality grades — without any additional IoT hardware or sensors. Using historical production records including humidity levels, temperature variations, seasonal patterns, and past quality grading outcomes, a Random Forest model learns the complex non-linear relationships between environmental conditions and final tea quality. Implemented in Python on Google Colab using Pandas, NumPy, and Scikit-learn, the system performs data collection, cleaning, feature selection, model training, and evaluation in a fully reproducible pipeline. The trained model predicts quality outcomes for given input conditions and inversely identifies optimal humidity and temperature windows per season, giving factory managers and quality officers actionable environmental targets for proactive batch planning.',
  },
];
 
function SystemDiagram() {
  return (
    <div style={{ width: '100%', overflowX: 'auto', paddingBottom: '0.5rem' }}>
      <svg viewBox="0 0 960 600" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', minWidth: 680, display: 'block' }}>
        <defs>
          <marker id="arrowG" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="rgba(74,222,128,0.7)" />
          </marker>
          <linearGradient id="hubG" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#052e16" />
            <stop offset="100%" stopColor="#166534" />
          </linearGradient>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
 
        <rect width="960" height="600" fill="#09090b" rx="14" />
 
        {/* Central Hub */}
        <rect x="340" y="225" width="280" height="148" rx="14" fill="url(#hubG)" stroke="#22c55e" strokeWidth="1.5" filter="url(#softGlow)" />
        <text x="480" y="250" textAnchor="middle" fill="#4ade80" fontSize="11" fontWeight="700" letterSpacing="1.2">TEANEXUS — SHARED PLATFORM</text>
        <line x1="355" y1="258" x2="605" y2="258" stroke="rgba(74,222,128,0.2)" strokeWidth="1" />
        <text x="480" y="276" textAnchor="middle" fill="#d1fae5" fontSize="10">Flask REST API Backend (Python)</text>
        <text x="480" y="293" textAnchor="middle" fill="#d1fae5" fontSize="10">Firebase Firestore — Cloud Database</text>
        <text x="480" y="310" textAnchor="middle" fill="#d1fae5" fontSize="10">React Native Mobile App (Android + iOS)</text>
        <text x="480" y="327" textAnchor="middle" fill="#a3a3a3" fontSize="9.5">WeatherAPI Real-Time Integration</text>
        <text x="480" y="344" textAnchor="middle" fill="#a3a3a3" fontSize="9.5">ML Inference Engine (Pickle Models)</text>
        <text x="480" y="361" textAnchor="middle" fill="#a3a3a3" fontSize="9.5">REST API ↔ IoT ↔ Mobile ↔ Cloud</text>
 
        {/* Component 1 — top-left */}
        <rect x="20" y="20" width="235" height="180" rx="12" fill="#0a1f10" stroke="rgba(74,222,128,0.35)" strokeWidth="1" />
        <rect x="20" y="20" width="235" height="38" rx="12" fill="rgba(34,197,94,0.13)" />
        <rect x="20" y="46" width="235" height="12" fill="rgba(34,197,94,0.13)" />
        <text x="137" y="42" textAnchor="middle" fill="#4ade80" fontSize="10" fontWeight="700">① YIELD PREDICTION &amp; TRACEABILITY</text>
        <text x="36" y="75" fill="#86efac" fontSize="9">• ESP32 + HX711 + Load Cell (intake &amp; output)</text>
        <text x="36" y="91" fill="#86efac" fontSize="9">• Gradient Boosting Regressor (R²=0.886)</text>
        <text x="36" y="107" fill="#86efac" fontSize="9">• 12 features incl. live WeatherAPI data</text>
        <text x="36" y="123" fill="#86efac" fontSize="9">• Farmer ↔ Batch digital traceability</text>
        <text x="36" y="139" fill="#86efac" fontSize="9">• Season-based auto-fill (4 seasons)</text>
        <text x="36" y="155" fill="#86efac" fontSize="9">• Alert Low / Normal / Alert High</text>
        <text x="36" y="171" fill="#86efac" fontSize="9">• Cause-specific recommendation engine</text>
        <text x="36" y="187" fill="#71717a" fontSize="8.5">Accuracy: 91.4% yield classification</text>
 
        {/* Component 2 — top-right */}
        <rect x="705" y="20" width="235" height="180" rx="12" fill="#1c1410" stroke="rgba(251,191,36,0.35)" strokeWidth="1" />
        <rect x="705" y="20" width="235" height="38" rx="12" fill="rgba(234,179,8,0.12)" />
        <rect x="705" y="46" width="235" height="12" fill="rgba(234,179,8,0.12)" />
        <text x="822" y="42" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="700">② SMART BELT MONITORING</text>
       <text x="721" y="75" fill="#fde68a" fontSize="9">
  • Random Forest (classification + RUL)
</text>
<text x="721" y="91" fill="#fde68a" fontSize="9">
  • Inputs: wear, crack, load, hours, temp, humidity
</text>
        <text x="721" y="107" fill="#fde68a" fontSize="9">
  • Predicts risk (Low / Medium / High / Failed)
</text>
        <text x="721" y="123" fill="#fde68a" fontSize="9">• Estimates Remaining Useful Life (RUL)</text>
        <text x="721" y="139" fill="#fde68a" fontSize="9">
  • Learns relationships between parameters
</text>
        <text x="721" y="155" fill="#fde68a" fontSize="9">• Supports data-driven predictive maintenance</text>
        <text x="721" y="171" fill="#fde68a" fontSize="9">• Real-time push alerts → mobile app</text>
        <text x="721" y="187" fill="#71717a" fontSize="8.5">Continuous monitoring, zero manual steps</text>
 
        {/* Component 3 — bottom-left */}
        <rect x="20" y="400" width="235" height="180" rx="12" fill="#0d1520" stroke="rgba(96,165,250,0.35)" strokeWidth="1" />
        <rect x="20" y="400" width="235" height="38" rx="12" fill="rgba(59,130,246,0.12)" />
        <rect x="20" y="426" width="235" height="12" fill="rgba(59,130,246,0.12)" />
        <text x="137" y="422" textAnchor="middle" fill="#60a5fa" fontSize="10" fontWeight="700">③ DISEASE DETECTION &amp; ADVISORY</text>
        <text x="36" y="455" fill="#bfdbfe" fontSize="9">• EfficientNet-B0 CNN + Transfer Learning</text>
        <text x="36" y="471" fill="#bfdbfe" fontSize="9">• 6 disease classes (92.8% accuracy)</text>
        <text x="36" y="487" fill="#bfdbfe" fontSize="9">• SLCRI knowledge base — treatments</text>
        <text x="36" y="503" fill="#bfdbfe" fontSize="9">• Chemical + organic recommendations</text>
        <text x="36" y="519" fill="#bfdbfe" fontSize="9">• Weather-aware spray timing (GPS)</text>
        <text x="36" y="535" fill="#bfdbfe" fontSize="9">• 93.3% match with expert advisories</text>
        <text x="36" y="551" fill="#bfdbfe" fontSize="9">• SUS score 78.4 — EN / SI / TA</text>
        <text x="36" y="567" fill="#71717a" fontSize="8.5">Result delivered in ~3 seconds</text>
 
        {/* Component 4 — bottom-right */}
        <rect x="705" y="400" width="235" height="180" rx="12" fill="#100d1c" stroke="rgba(192,132,252,0.35)" strokeWidth="1" />
        <rect x="705" y="400" width="235" height="38" rx="12" fill="rgba(168,85,247,0.12)" />
        <rect x="705" y="426" width="235" height="12" fill="rgba(168,85,247,0.12)" />
        <text x="822" y="422" textAnchor="middle" fill="#c084fc" fontSize="10" fontWeight="700">④ QUALITY OPTIMISATION</text>
        <text x="721" y="455" fill="#e9d5ff" fontSize="9">• No IoT — historical data driven</text>
        <text x="721" y="471" fill="#e9d5ff" fontSize="9">• Random Forest quality predictor</text>
        <text x="721" y="487" fill="#e9d5ff" fontSize="9">• Inputs: humidity, temp, season, grade</text>
        <text x="721" y="503" fill="#e9d5ff" fontSize="9">• Optimal humidity window per season</text>
        <text x="721" y="519" fill="#e9d5ff" fontSize="9">• Tea grade outcome prediction</text>
        <text x="721" y="535" fill="#e9d5ff" fontSize="9">• Google Colab pipeline (reproducible)</text>
        <text x="721" y="551" fill="#e9d5ff" fontSize="9">• Scikit-learn + Pandas + NumPy</text>
        <text x="721" y="567" fill="#71717a" fontSize="8.5">Cost-effective — no extra hardware needed</text>
 
        {/* Arrows C1 → Hub */}
        <line x1="255" y1="110" x2="338" y2="278" stroke="rgba(74,222,128,0.55)" strokeWidth="1.3" strokeDasharray="5,3" markerEnd="url(#arrowG)" />
        {/* C2 → Hub */}
        <line x1="705" y1="110" x2="622" y2="278" stroke="rgba(74,222,128,0.55)" strokeWidth="1.3" strokeDasharray="5,3" markerEnd="url(#arrowG)" />
        {/* C3 → Hub */}
        <line x1="255" y1="490" x2="338" y2="360" stroke="rgba(74,222,128,0.55)" strokeWidth="1.3" strokeDasharray="5,3" markerEnd="url(#arrowG)" />
        {/* C4 → Hub */}
        <line x1="705" y1="490" x2="622" y2="360" stroke="rgba(74,222,128,0.55)" strokeWidth="1.3" strokeDasharray="5,3" markerEnd="url(#arrowG)" />
 
        {/* IoT badges on arrows */}
        <rect x="264" y="96" width="52" height="16" rx="4" fill="rgba(34,197,94,0.15)" stroke="rgba(34,197,94,0.3)" strokeWidth="0.8" />
        <text x="290" y="108" textAnchor="middle" fill="#4ade80" fontSize="8" fontWeight="600">IoT Data</text>
 
        <rect x="645" y="96" width="52" height="16" rx="4" fill="rgba(251,191,36,0.15)" stroke="rgba(251,191,36,0.3)" strokeWidth="0.8" />
        <text x="671" y="108" textAnchor="middle" fill="#fbbf24" fontSize="8" fontWeight="600">IoT Data</text>
 
        <rect x="262" y="477" width="60" height="16" rx="4" fill="rgba(96,165,250,0.15)" stroke="rgba(96,165,250,0.3)" strokeWidth="0.8" />
        <text x="292" y="489" textAnchor="middle" fill="#60a5fa" fontSize="8" fontWeight="600">Image+GPS</text>
 
        <rect x="638" y="477" width="60" height="16" rx="4" fill="rgba(192,132,252,0.15)" stroke="rgba(192,132,252,0.3)" strokeWidth="0.8" />
        <text x="668" y="489" textAnchor="middle" fill="#c084fc" fontSize="8" fontWeight="600">Hist. CSV</text>
      </svg>
    </div>
  );
}
 
function DataFlowDiagram() {
  const steps = [
    { label: 'IoT / Image\nInput', color: '#10b981', bg: 'rgba(16,185,129,0.08)', border: 'rgba(16,185,129,0.25)' },
    { label: 'REST API\nTransmission', color: '#34d399', bg: 'rgba(52,211,153,0.06)', border: 'rgba(52,211,153,0.2)' },
    { label: 'Flask Backend\nProcessing', color: '#fbbf24', bg: 'rgba(251,191,36,0.06)', border: 'rgba(251,191,36,0.2)' },
    { label: 'ML Model\nInference', color: '#60a5fa', bg: 'rgba(96,165,250,0.06)', border: 'rgba(96,165,250,0.2)' },
    { label: 'Firebase\nStorage', color: '#c084fc', bg: 'rgba(192,132,252,0.06)', border: 'rgba(192,132,252,0.2)' },
    { label: 'Mobile App\nDisplay', color: '#f472b6', bg: 'rgba(244,114,182,0.06)', border: 'rgba(244,114,182,0.2)' },
  ];
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap', marginTop: '1rem' }}>
      {steps.map((s, i) => (
        <React.Fragment key={i}>
          <div style={{ background: s.bg, border: `1px solid ${s.border}`, borderRadius: 10, padding: '0.6rem 0.75rem', textAlign: 'center', flex: '1 1 90px' }}>
            <div style={{ color: s.color, fontSize: 11, fontWeight: 600, lineHeight: 1.4, whiteSpace: 'pre-line' }}>{s.label}</div>
          </div>
          {i < steps.length - 1 && (
            <div style={{ color: 'rgba(74,222,128,0.45)', fontSize: 16, flexShrink: 0 }}>→</div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
 
export default function Domain() {
  return (
    <div style={{ background:'#09090b', minHeight:'100vh', color:'#fafafa', fontFamily:"'Inter',system-ui,sans-serif", paddingBottom:'4rem' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Plus+Jakarta+Sans:wght@500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; }
 
        .dom-section { max-width:1100px; margin:0 auto; padding:0 1.5rem; margin-bottom:4rem; }
        .dom-divider { border:none; border-top:1px solid rgba(255,255,255,0.03); margin:0; }
 
        .dom-sec-num { color:#10b981; font-size:clamp(2rem,5vw,2.8rem); font-weight:700; line-height:1; }
        .dom-sec-title { color:#fafafa; font-size:clamp(1.3rem,3vw,2rem); margin:0; font-family:"'Plus Jakarta Sans',serif"; }
 
        .dom-info-card {
          background:#18181b; border:1px solid rgba(255,255,255,0.05);
          border-radius: 20px; padding:1.6rem; transition:all 0.3s cubic-bezier(0.2,0.8,0.2,1);
        }
        .dom-info-card:hover { border-color:rgba(74, 222, 128, 0.4); box-shadow: 0 0 15px rgba(74, 222, 128, 0.15); transform: translateY(-3px); }
 
        .dom-gap-box {
          background:#18181b; border-left:4px solid #10b981;
          border-radius:0 12px 12px 0; padding:1.6rem 1.6rem 1.6rem 1.4rem;
          transition:all 0.3s cubic-bezier(0.2,0.8,0.2,1);
        }
        .dom-gap-box:hover { box-shadow: 0 0 15px rgba(74, 222, 128, 0.1); transform: translateX(4px); }
 
        .dom-problem-box { background:#18181b; border-left:4px solid #10b981; border-radius:0 12px 12px 0; padding:1.8rem 1.8rem 1.8rem 1.5rem; color:#d1fae5; transition:all 0.3s cubic-bezier(0.2,0.8,0.2,1); }
        .dom-problem-box:hover { box-shadow: 0 0 15px rgba(74, 222, 128, 0.1); transform: translateX(4px); }
        .dom-solution-box { background:#18181b; border-left:4px solid #10b981; border-radius:0 12px 12px 0; padding:1.8rem 1.8rem 1.8rem 1.5rem; color:#d1fae5; transition:all 0.3s cubic-bezier(0.2,0.8,0.2,1); }
        .dom-solution-box:hover { box-shadow: 0 0 15px rgba(74, 222, 128, 0.1); transform: translateX(4px); }
 
        .dom-obj-card {
          background:#18181b; border-left:4px solid #10b981; border-radius:0 12px 12px 0;
          padding:1.4rem 1.4rem 1.4rem 1.2rem; margin-bottom:1rem;
          transition:all 0.3s cubic-bezier(0.2,0.8,0.2,1);
        }
        .dom-obj-card:hover { background:#27272a; box-shadow: 0 0 15px rgba(74, 222, 128, 0.1); transform: translateX(3px); }
 
        @keyframes beltMove {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
 
        .dom-belt-container {
          position: relative;
          width: 100%;
          overflow: hidden;
          background: linear-gradient(90deg, rgba(13, 20, 15, 0.2), rgba(29, 41, 31, 0.5), rgba(13, 20, 15, 0.2));
          border: 1px solid rgba(34, 197, 94, 0.15);
          border-radius: 16px;
          padding: 1.25rem 0;
          box-shadow: inset 0 0 20px rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
        }
 
        .dom-belt-container::after {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(90deg, #09090b 0%, transparent 10%, transparent 90%, #09090b 100%);
        }
 
        .dom-belt-track {
          display: flex;
          flex-wrap: nowrap;
          width: max-content;
          gap: 1.5rem;
          padding: 0 0.75rem;
          animation: beltMove 40s linear infinite;
        }
 
        .dom-belt-track:hover {
          animation-play-state: paused;
        }
 
        .dom-tech-pill {
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 50px;
          padding: 0.5rem 1.25rem 0.5rem 0.75rem;
          transition: all 0.3s ease;
          backdrop-filter: blur(5px);
        }
 
        .dom-tech-pill:hover {
          background: rgba(34, 197, 94, 0.1);
          border-color: rgba(34, 197, 94, 0.3);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(34, 197, 94, 0.1);
        }
 
        .dom-tech-icon {
          width: 28px;
          height: 28px;
          object-fit: contain;
          filter: drop-shadow(0 2px 2px rgba(0,0,0,0.3));
        }
 
        .dom-tech-name {
          color: #d1fae5;
          font-size: 0.95rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          white-space: nowrap;
        }
 
        .dom-lit-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:1rem; }
 
        @media (max-width:768px) {
          .dom-tech-pill { padding: 0.4rem 1rem 0.4rem 0.5rem; }
          .dom-tech-icon { width: 24px; height: 24px; }
          .dom-tech-name { font-size: 0.85rem; }
          .dom-belt-track { gap: 1rem; }
        }
 
        @media (max-width:600px) {
          .dom-prob-grid { display:flex; flex-direction:column; gap:1rem; }
        }
      `}</style>
 
      {/* Hero */}
      <div style={{ padding:'3rem 1.5rem 2rem', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute',inset:0, background:'radial-gradient(ellipse 60% 70% at 60% 40%,rgba(34,197,94,.07),transparent 70%)' }} />
        <div style={{ maxWidth:1100, margin:'0 auto', position:'relative' }}>
          <motion.div initial={{ opacity:0, y:-10 }} animate={{ opacity:1, y:0 }} transition={{ duration:.5 }}
            style={{ display:'inline-flex', alignItems:'center', gap:7, background:'rgba(34,197,94,.08)', border:'1px solid rgba(34,197,94,.2)', borderRadius:20, padding:'5px 14px', marginBottom:16 }}
          >
            <span style={{ fontSize:10, fontWeight:700, color:'#10b981', letterSpacing:'.08em', textTransform:'uppercase' }}>Research Domain</span>
          </motion.div>
          <motion.h1 initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:.1, duration:.6 }}
            style={{ fontFamily:"'Plus Jakarta Sans',serif", fontSize:'clamp(2rem,5vw,3rem)', color:'#fafafa', fontWeight:700, marginBottom:10, lineHeight:1.1 }}
          >
            The Science Behind Our System
          </motion.h1>
          <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:.22 }}
            style={{ color:'#a1a1aa', maxWidth:580, lineHeight:1.75, fontSize:15 }}
          >
            Literature findings, research gap, objectives, methodology, and the technologies powering TeaNexus — four intelligent modules unified into one integrated platform for the Sri Lankan tea industry.
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
              {
                title: 'Agricultural AI & Smart Farming',
                text: 'Existing studies highlight CNN architectures — ResNet, VGG, and EfficientNet — for crop disease detection with high accuracy across multiple plant species. Research from tea-producing nations including Sri Lanka, India, and Kenya demonstrates up to 30% improvement in quality grading through computer vision pipelines. Transfer learning has become the dominant training strategy for small-dataset agricultural applications, dramatically reducing labelled data requirements without sacrificing accuracy. Studies also confirm that integrating real-time environmental context (weather, humidity, season) alongside image classification substantially improves the practical usefulness of disease prediction systems in field conditions.',
              },
              {
                title: 'IoT in Precision Agriculture & Manufacturing',
                text: 'Wireless sensor networks using microcontrollers such as ESP32, Arduino, and Raspberry Pi have been deployed globally for environmental monitoring and industrial process control. Research shows that load-cell-based automated weighing reduces measurement error by over 85% compared to manual methods in factory settings. IoT-enabled real-time monitoring has cut production losses by 20–35% in manufacturing environments through earlier anomaly detection. In the tea industry specifically, sensor-based batch tracking and digital farmer traceability remain largely unexplored, representing a significant opportunity for digitisation that TeaNexus directly addresses.',
              },
              {
                title: 'ML for Predictive Maintenance',
                text: 'Random Forest and gradient boosting models consistently outperform simpler regression models for equipment failure prediction in datasets with high feature interaction complexity. Studies on belt-driven conveyor systems show that combining vibration frequency, temperature, and rotational speed as co-features improves anomaly detection F1-scores by up to 22% over single-sensor approaches. Hybrid decision systems — pairing rule-based thresholds with machine-learned models — have been validated as the most practical architecture for real-time industrial monitoring, balancing the speed of deterministic rules with the pattern-recognition power of learned models.',
              },
              {
                title: 'Humidity & Quality in Tea Processing',
                text: 'Academic research on orthodox tea processing confirms that ambient humidity is one of the strongest predictors of final quality grade across withering, rolling, fermentation, and drying stages. Studies indicate that humidity deviations of ±10% from seasonal optima can degrade cup quality by a full grade category, making precise environmental targeting critical. Ensemble learning methods including Random Forest and XGBoost have demonstrated strong performance in predicting quality from environmental inputs using historical records. A single fixed humidity threshold is insufficient across seasons — adaptive, data-driven seasonal targets are required for consistent high-grade production.',
              },
            ].map((item, i) => (
              <motion.div key={i} className="dom-info-card" {...inView(i*.08)}>
                <div style={{ color:'#10b981', fontWeight:600, marginBottom:8 }}>{item.title}</div>
                <div style={{ color:'#a1a1aa', lineHeight:1.75, fontSize:14 }}>{item.text}</div>
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
            {
              title: 'No Unified Smart Platform for the Full Tea Value Chain',
              text: 'There is no comprehensive, integrated smart solution covering the complete lifecycle of Sri Lankan tea production — from field disease detection and farmer leaf delivery, through factory yield tracking and machine health, to final quality grading — within one connected system. Existing tools are fragmented: disease detection apps exist in isolation, yield tracking remains fully paper-based, machine maintenance is reactive, and quality optimisation relies entirely on individual expertise. No current system links farmer-level inputs to factory-level outcomes with digital traceability, meaning there is no accountability chain from farm to finished product.',
            },
            {
              title: 'Severity Assessment and Predictive Intelligence Are Absent',
              text: 'Most existing disease detection and condition monitoring systems output a binary healthy/unhealthy classification without assessing severity, progression stage, or predicted trajectory. Factory managers have no way to distinguish a belt approaching failure within hours from one with weeks of life remaining. Farmers receive no indication of how advanced a disease is or how urgently intervention is needed. This absence of severity scoring and forward-looking prediction forces expensive conservative over-maintenance and allows gradual problems to escalate undetected until failure or irreversible crop damage occurs.',
            },
            {
              title: 'Lack of Real-Time Environmental Context in Decision-Making',
              text: 'A real-time communication and environmental awareness system linking farmers, factory workers, maintenance teams, and quality officers has been identified as a critical unmet need. Current tools do not integrate live weather conditions into operational decisions — treatment recommendations ignore current wind speed and rainfall, yield predictions ignore the weather at batch creation time, and quality optimisation ignores seasonal humidity optima. TeaNexus directly closes this gap by embedding live WeatherAPI data into all four components, ensuring every recommendation and prediction accounts for the actual environmental conditions at the moment of decision.',
            },
            {
              title: 'No Data-Driven Framework for Quality Optimisation',
              text: 'Tea quality grading in small and medium factories depends almost entirely on the accumulated experience of individual tea makers, with no structured, data-driven framework for identifying which environmental and processing conditions reliably produce higher grades. While the impact of humidity on quality is well-documented in research, no deployed system quantifies this relationship with precision, maps optimal conditions by season, or translates these insights into actionable targets for factory managers. This gap results in preventable quality inconsistency across batches and missed opportunities for systematic, repeatable improvement.',
            },
          ].map((item, i) => (
            <motion.div key={i} className="dom-gap-box" style={{ marginBottom:'1rem' }} {...inView(i*.08)}>
              <div style={{ color:'#34d399', fontWeight:600, marginBottom:6 }}>{item.title}</div>
              <div style={{ color:'#a1a1aa', lineHeight:1.75, fontSize:14 }}>{item.text}</div>
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
              <div style={{ fontWeight:700, marginBottom:8, color:'#34d399' }}>Problem Statement</div>
              <div style={{ lineHeight:1.8, fontSize:14, color:'#a1a1aa' }}>
                <strong style={{ color:'#d1fae5' }}>How can we effectively monitor, predict, and manage the entire tea production lifecycle in real time — from farm to factory to quality grading — within a single intelligent platform?</strong>
                <br /><br />
                Sri Lankan tea factories and smallholder farmers face four deeply interconnected challenges that no existing tool addresses in combination:
                <br /><br />
                <strong style={{ color:'#6ee7b7' }}>① Inaccurate Manual Yield Tracking</strong> — Tea factories in Sri Lanka rely on paper records, mechanical scales, and Excel spreadsheets to track production yield. Managers only discover batch performance after the entire processing cycle is complete — too late for any corrective action. There is no digital traceability between farmer deliveries and batch outcomes, no yield prediction before processing starts, and no guidance when a batch underperforms.
                <br /><br />
                <strong style={{ color:'#6ee7b7' }}>② Unexpected Belt-Driven Machine Failures</strong> — Belt systems run continuously under mechanical stress with zero real-time condition monitoring. Failures surface only when production has already stopped, leading to unplanned downtime, emergency repair costs, and lost output that could have been prevented with early warning.
                <br /><br />
                <strong style={{ color:'#6ee7b7' }}>③ Delayed and Inaccurate Disease Detection</strong> — Farmers diagnose leaf diseases visually or wait days for an extension officer visit. Without early and accurate identification, inappropriate or delayed treatment results in crop loss, unnecessary chemical expenditure, and environmental damage from misapplied pesticides in weather conditions that render them ineffective.
                <br /><br />
                <strong style={{ color:'#6ee7b7' }}>④ No Data-Driven Quality Optimisation</strong> — Humidity and seasonal environmental conditions profoundly affect final tea grade, but no system quantifies this relationship or provides managers with actionable seasonal humidity targets. Quality inconsistency across batches is treated as unavoidable rather than addressed with data.
              </div>
            </motion.div>
 
            <motion.div className="dom-solution-box" {...inView(.12)}>
              <div style={{ fontWeight:700, marginBottom:8, color:'#34d399' }}>Solution — TeaNexus: Four Modules, One Integrated System</div>
              <div style={{ lineHeight:1.8, fontSize:14, color:'#a1a1aa' }}>
                TeaNexus is not four separate tools — it is one integrated AI and IoT platform in which all four components share a common Flask REST API backend, Firebase Firestore cloud database, WeatherAPI integration, and a single React Native mobile application. This unified architecture means data produced by one component informs the others: live weather fetched for a yield batch is the same API call that feeds the disease advisory; the same Firebase instance that stores belt sensor readings also holds farmer traceability records. A factory worker, farmer, or manager interacts with one app and receives intelligence from all four modules simultaneously.
                <br /><br />
                <strong style={{ color:'#6ee7b7' }}>① Yield Prediction &amp; Traceability</strong> — Yield Prediction and Traceability
Automated IoT weighing at both leaf intake and powder output stations, a Gradient Boosting model predicting expected yield before processing completes, full digital traceability linking each individual farmer delivery to its batch outcome, season-based processing parameter auto-fill ensuring accurate ML inputs, and a cause-specific recommendation engine that analyses completed batch data to explain yield deviations and suggest corrective actions in plain language.         
                <br /><br />
               <strong style={{ color:'#6ee7b7' }}>② Smart Belt Monitoring</strong> — A machine learning-based approach using a Random Forest model to predict belt condition based on operational parameters such as wear percentage, crack severity, load, usage duration, temperature, and humidity. The model classifies belt risk levels (Low, Medium, High, Failed) and estimates Remaining Useful Life (RUL), enabling early failure detection and proactive maintenance planning.
                <br /><br />
                <strong style={{ color:'#6ee7b7' }}>③ Disease Detection &amp; Advisory</strong> — A 92.8%-accurate EfficientNet-B0 CNN identifying six disease classes from smartphone images, with SLCRI-backed treatment protocols and a weather-aware spray timing advisory that evaluates real-time GPS-based conditions before confirming recommendations.
                <br /><br />
                <strong style={{ color:'#6ee7b7' }}>④ Quality Optimisation</strong> — A Random Forest model trained on historical humidity, temperature, seasonal, and quality grade records that predicts tea quality outcomes and maps optimal environmental windows per season — requiring no additional hardware.
              </div>
            </motion.div>
          </div>
 
          {/* System Diagram */}
          <motion.div {...inView(0.15)} style={{ marginTop:'2rem' }}>
            <div style={{ color:'#34d399', fontWeight:600, fontSize:14, marginBottom:'1rem', display:'flex', alignItems:'center', gap:8 }}>
              <span style={{ background:'rgba(52,211,153,0.1)', border:'1px solid rgba(52,211,153,0.25)', borderRadius:6, padding:'2px 10px', fontSize:11 }}>SYSTEM DIAGRAM</span>
              TeaNexus — Integrated Architecture: All 4 Components on One Platform
            </div>
            <div className="dom-info-card" style={{ padding:'1.5rem' }}>
              <SystemDiagram />
              <div style={{ marginTop:'1rem', display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(190px,1fr))', gap:'0.65rem' }}>
                {[
                  { color:'#4ade80', label:'① Yield Prediction & Traceability', desc:'ESP32 IoT + Gradient Boosting (R²=0.886)' },
                  { color:'#fbbf24', label:'② Smart Belt Monitoring', desc:'ESP32 IoT + Random Forest + RUL' },
                  { color:'#60a5fa', label:'③ Disease Detection & Advisory', desc:'EfficientNet-B0 CNN + Weather API' },
                  { color:'#c084fc', label:'④ Quality Optimisation', desc:'Historical ML — no IoT required' },
                ].map((item, i) => (
                  <div key={i} style={{ display:'flex', alignItems:'flex-start', gap:8 }}>
                    <div style={{ width:10, height:10, borderRadius:2, background:item.color, flexShrink:0, marginTop:3 }} />
                    <div>
                      <div style={{ color:item.color, fontSize:12, fontWeight:600 }}>{item.label}</div>
                      <div style={{ color:'#71717a', fontSize:11 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
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
              <div style={{ color:'#10b981', fontWeight:700, marginBottom:6, fontSize:13 }}>Objective {obj.num}: {obj.title}</div>
              <div style={{ color:'#a1a1aa', lineHeight:1.75, fontSize:14 }}>{obj.text}</div>
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
            <div style={{ color:'#a1a1aa', lineHeight:1.8, fontSize:14 }}>
              TeaNexus follows a <strong style={{ color:'#d1fae5' }}>modular layered architecture</strong> in which four independently developed intelligence components share a unified infrastructure backbone. Each component manages its own IoT hardware (where applicable), its own ML model, and its own feature engineering pipeline — but all four converge on the same Flask REST API backend, Firebase Firestore cloud database, WeatherAPI integration, and React Native mobile application. This architectural decision means the entire system is accessible through a single app while maintaining modular independence for development, testing, and future extension.
              <br /><br />
              <strong style={{ color:'#d1fae5' }}>Data flows</strong> from physical sensors (ESP32 microcontrollers) or smartphone cameras, through authenticated HTTP POST calls to the Flask backend, where ML models run inference using serialised pickle files loaded at startup. Results are written to Firestore and streamed to the mobile app in real time without manual refresh. For the Quality Optimisation component — which is data-driven rather than IoT-driven — model training runs offline in Google Colab, and only the trained model artifact is deployed to the Flask backend. The development approach follows <strong style={{ color:'#d1fae5' }}>agile iterative sprints</strong>, with each module prototyped and validated independently before full system integration testing across all four components.
            </div>
          </div>
 
          <motion.div {...inView(0.1)}>
            <div style={{ color:'#34d399', fontWeight:600, fontSize:13, marginBottom:'0.4rem' }}>End-to-End Data Flow — All Components</div>
            <DataFlowDiagram />
          </motion.div>
 
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(150px,1fr))', gap:'.75rem', marginTop:'1.5rem' }}>
            {[
              { step:'01', label:'Data Collection', desc:'IoT sensors, smartphone images, historical CSV records from Badulla factory' },
              { step:'02', label:'Model Training', desc:'Gradient Boosting, Random Forest (×2), EfficientNet-B0 CNN' },
              { step:'03', label:'System Integration', desc:'Flask APIs, Firebase Firestore sync, WeatherAPI embedding across all modules' },
              { step:'04', label:'Field Testing', desc:'Factory trials, farmer UAT sessions, SUS usability validation' },
              { step:'05', label:'Deployment', desc:'React Native app, ESP32 hardware units, Flask + Firebase cloud backend' },
            ].map((item, i) => (
              <motion.div key={i} {...inView(i*.06)}
                style={{ background:'#18181b', border:'1px solid rgba(255,255,255,0.05)', borderRadius: 20, padding:'1rem', textAlign:'center' }}
              >
                <div style={{ width:30,height:30,borderRadius:8,background:'rgba(34,197,94,.12)',border:'1px solid rgba(34,197,94,.2)',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto .6rem',color:'#10b981',fontWeight:700,fontSize:12 }}>0{i+1}</div>
                <div style={{ color:'#d1fae5', fontSize:13, fontWeight:500, marginBottom:4 }}>{item.label}</div>
                <div style={{ color:'#71717a', fontSize:11, lineHeight:1.5 }}>{item.desc}</div>
              </motion.div>
            ))}
          </div>
 
          {/* Per-component breakdown */}
          <motion.div {...inView(0.15)} style={{ marginTop:'1.5rem' }}>
            <div style={{ color:'#34d399', fontWeight:600, fontSize:13, marginBottom:'1rem' }}>Per-Component Technical Approach</div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))', gap:'0.75rem' }}>
              {[
                {
                  label:'① Yield System',
                  color:'#4ade80',
                  border:'rgba(74,222,128,0.2)',
                  bg:'rgba(74,222,128,0.04)',
                  points:[
                    'ESP32 + HX711 + Load Cell at intake & output stations',
                    'Gradient Boosting Regressor — R²=0.886, MAE=0.359',
                    '12 input features including live WeatherAPI fetch',
                    'Pickle models: tea_yield_model.pkl + LabelEncoders',
                    'Season auto-detection + processing parameter auto-fill',
                    'Yield classification: Alert Low / Normal / Alert High',
                    'Cause-specific recommendation engine on deviation',
                    '91.4% overall yield classification accuracy',
                  ],
                },
                {
                  label:'② Belt Monitor',
                  color:'#fbbf24',
                  border:'rgba(251,191,36,0.2)',
                  bg:'rgba(251,191,36,0.04)',
                  points:[
  'Random Forest model for belt condition prediction',
  'Inputs: wear %, crack severity, load, usage hours, temperature, humidity',
  'Classifies belt condition into risk levels: Low / Medium / High / Failed',
  'Estimates Remaining Useful Life (RUL) using regression',
  'Captures relationships between multiple operational parameters',
  'Provides predictive insights for proactive maintenance planning',
],
                },
                {
                  label:'③ Disease AI',
                  color:'#60a5fa',
                  border:'rgba(96,165,250,0.2)',
                  bg:'rgba(96,165,250,0.04)',
                  points:[
                    'EfficientNet-B0 CNN + Transfer Learning',
                    '6-class: Algal Spot, Brown/Gray Blight, Helopeltis, Red Spot, Healthy',
                    '92.8% classification accuracy on field images',
                    'SLCRI knowledge base for chemical + organic treatments',
                    'WeatherAPI: wind, rainfall, humidity, temperature check',
                    'Weather-aware spray timing (93.3% expert match)',
                    'System Usability Scale score: 78.4',
                    'Multilingual: English / Sinhala / Tamil',
                  ],
                },
                {
                  label:'④ Quality Optimisation',
                  color:'#c084fc',
                  border:'rgba(192,132,252,0.2)',
                  bg:'rgba(192,132,252,0.04)',
                  points:[
                    'Fully data-driven — no IoT hardware required',
                    'Random Forest trained on historical quality records',
                    'Inputs: humidity, temperature, season, past grade data',
                    'Predicts tea quality grade from environmental conditions',
                    'Maps optimal humidity windows per season (inverse inference)',
                    'Google Colab reproducible pipeline: clean → train → evaluate',
                    'Scikit-learn + Pandas + NumPy implementation',
                    'Cost-effective — scalable to any Sri Lankan factory',
                  ],
                },
              ].map((comp, i) => (
                <div key={i} style={{ background:comp.bg, border:`1px solid ${comp.border}`, borderRadius:12, padding:'1.1rem' }}>
                  <div style={{ color:comp.color, fontWeight:700, fontSize:13, marginBottom:'0.7rem' }}>{comp.label}</div>
                  {comp.points.map((pt, j) => (
                    <div key={j} style={{ display:'flex', gap:6, marginBottom:5, alignItems:'flex-start' }}>
                      <span style={{ color:comp.color, fontSize:9, marginTop:4, flexShrink:0 }}>▸</span>
                      <span style={{ color:'#a1a1aa', fontSize:12, lineHeight:1.6 }}>{pt}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
 
        <hr className="dom-divider" />
 
        {/* ── 06 Technologies ── */}
        <motion.div id="tech" className="dom-section" style={{ paddingTop:'2rem' }} {...inView()}>
          <div style={{ display:'flex', alignItems:'center', gap:'1rem', marginBottom:'1.5rem' }}>
            <div className="dom-sec-num">06</div>
            <h2 className="dom-sec-title">Technologies Used</h2>
          </div>
          <div className="dom-belt-container">
            <div className="dom-belt-track">
              {[...techs, ...techs].map((tech, i) => (
                <div key={i} className="dom-tech-pill">
                  <img src={tech.logo} alt={tech.name} className="dom-tech-icon" onError={e => e.target.style.display='none'} />
                  <div className="dom-tech-name">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
 