import React from 'react';
import { motion } from 'framer-motion';

const milestones = [
  { date:'August 31, 2025', title:'Proposal Report', desc:'Submission of project proposal report.', marks:'6%' },
  { date:'September 11, 2025', title:'Proposal Presentation', desc:'Initial presentation of the proposed system.', marks:'6%' },
  { date:'January 9, 2026', title:'Progress Presentation I (50%)', desc:'Evaluation of 50% project completion.', marks:'15%' },
  { date:'March 9, 2026', title:'Progress Presentation II (90%)', desc:'Evaluation of 90% completion with system demonstration.', marks:'18%' },
  { date:'April 27, 2026', title:'Website', desc:'Submission and evaluation of project website.', marks:'2%' },
  { date:'April 30, 2026', title:'Final Checklist Submission', desc:'Final checklist and readiness verification.', marks:'2%' },
  { date:'May 5, 2026', title:'Final Presentation & Viva', desc:'Final presentation and individual viva assessment.', marks:'20%' },
  { date:'May 5, 2026', title:'Logbook', desc:'Submission of project logbook documenting progress.', marks:'2%' },
  { date:'May 8, 2026', title:'Research Paper', desc:'Submission of research publication.', marks:'10%' },
  { date:'May 13, 2026', title:'Final Report', desc:'Submission of group (15%) and individual (4%) reports.', marks:'19%' },
];

export default function Timeline() {
  return (
    <div style={{ position:'relative', minHeight:'100vh', fontFamily:"'DM Sans',sans-serif" }}>

      {/* BACKGROUND */}
      <div style={{
        position:'fixed',
        top:0,left:0,width:'100%',height:'100%',
        backgroundImage:"url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6')",
        backgroundSize:'cover',
        backgroundPosition:'center',
        filter:'blur(5px)',
        opacity:0.3,
        zIndex:0
      }}/>

      <div style={{
        position:'fixed',
        top:0,left:0,width:'100%',height:'100%',
        background:'rgba(10,15,13,0.85)',
        zIndex:1
      }}/>

      {/* CONTENT */}
      <div style={{
        position:'relative',
        zIndex:2,
        maxWidth:'1200px', // 🔥 increased container
        margin:'0 auto',
        padding:'3rem 1.5rem'
      }}>

        {/* HEADER */}
        <div style={{ textAlign:'center', marginBottom:'3rem' }}>
          <div style={{ color:'#22c55e', fontSize:'12px' }}>PROJECT JOURNEY</div>
          <h1 style={{ color:'#fff', margin:0 }}>Timeline Overview</h1>
        </div>

        {/* TIMELINE */}
        <div style={{ position:'relative' }}>

          {/* CENTER LINE */}
          <div style={{
            position:'absolute',
            left:'50%',
            top:0,
            bottom:0,
            width:'2px',
            background:'rgba(255,255,255,0.1)',
            transform:'translateX(-50%)'
          }}/>

          {milestones.map((m,i)=>{
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={i}
                initial={{opacity:0,y:40}}
                whileInView={{opacity:1,y:0}}
                transition={{duration:0.5, delay:i*0.08}}
                viewport={{once:true}}
                style={{
                  display:'flex',
                  justifyContent:isLeft ? 'flex-start' : 'flex-end',
                  marginBottom:'36px'
                }}
              >

                {/* BIG CARD */}
                <div style={{
                  width:'48%',              // 🔥 bigger width
                  maxWidth:'600px',        // 🔥 increased limit
                  background:'rgba(17,23,18,0.85)',
                  border:'1px solid rgba(255,255,255,0.08)',
                  borderRadius:'12px',
                  padding:'1.3rem 1.5rem', // 🔥 more space inside
                  backdropFilter:'blur(5px)',
                  position:'relative'
                }}>

                  {/* DOT */}
                  <div style={{
                    position:'absolute',
                    top:'16px',
                    left: isLeft ? '100%' : '-14px',
                    marginLeft: isLeft ? '12px' : '0',
                    width:'12px',
                    height:'12px',
                    background:'#22c55e',
                    borderRadius:'50%',
                    boxShadow:'0 0 8px #22c55e'
                  }}/>

                  {/* DATE */}
                  <div style={{
                    fontSize:'11px',
                    background:'#000',
                    color:'#fff',
                    display:'inline-block',
                    padding:'3px 8px',
                    marginBottom:'8px'
                  }}>
                    {m.date}
                  </div>

                  {/* TITLE */}
                  <div style={{
                    color:'#fff',
                    fontWeight:600,
                    fontSize:'16px'   // 🔥 bigger text
                  }}>
                    {m.title}
                  </div>

                  {/* DESC */}
                  <div style={{
                    color:'#9bbfa6',
                    fontSize:'13px',
                    margin:'8px 0'
                  }}>
                    {m.desc}
                  </div>

                  {/* MARKS */}
                  <div style={{ fontSize:'12px', color:'#ccc' }}>
                    Marks: {m.marks}
                  </div>

                  {/* PROGRESS */}
                  <div style={{
                    height:'6px',
                    background:'rgba(255,255,255,0.08)',
                    borderRadius:'10px',
                    marginTop:'8px'
                  }}>
                    <motion.div
                      initial={{width:0}}
                      whileInView={{width:m.marks}}
                      transition={{duration:0.6}}
                      style={{
                        height:'100%',
                        background:'#22c55e'
                      }}
                    />
                  </div>

                </div>
              </motion.div>
            )
          })}

        </div>
      </div>
    </div>
  );
}