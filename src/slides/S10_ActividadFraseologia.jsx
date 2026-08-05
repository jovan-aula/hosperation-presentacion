import { motion } from 'framer-motion'
const fade = (d=0) => ({ initial:{opacity:0,y:16}, animate:{opacity:1,y:0}, transition:{duration:0.6,delay:d} })

export default function S10_ActividadFraseologia() {
  return (
    <div className="slide" style={{ padding:'60px 80px' }}>
      <div className="corner-accent" />
      <div style={{
        position: 'absolute', top: '24px', right: '32px',
        background: '#45C5BE', color: '#0C2D4E',
        borderRadius: '100px', padding: '0.3rem 1rem',
        fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase',
      }}>
        Ejercicio 2 · Hoja B
      </div>
      <div style={{ width:'100%', maxWidth:'920px', display:'flex', flexDirection:'column', gap:'2rem' }}>
        <motion.h2 {...fade(0.1)} className="slide-title" style={{ textAlign:'center' }}>
          Actividad en equipos
        </motion.h2>
        <motion.div {...fade(0.2)} style={{ width:'100px', height:'4px', background:'linear-gradient(90deg,#45C5BE,#2BA8A2)', borderRadius:'2px', alignSelf:'center' }} />

        <div style={{ display:'flex', alignItems:'flex-start', gap:'4rem' }}>
          <div style={{ flex:1 }}>
            <motion.div {...fade(0.3)} style={{ background:'white', borderRadius:'12px', border:'1.5px solid rgba(12,45,78,0.2)', padding:'0.6rem 1.4rem', display:'inline-block', marginBottom:'1.2rem' }}>
              <span style={{ fontSize:'0.95rem', fontWeight:700, color:'#0C2D4E' }}>Fraseología estandarizada</span>
            </motion.div>
            <motion.p {...fade(0.4)} style={{ fontSize:'clamp(0.9rem,1.4vw,1.05rem)', color:'#4A5568', lineHeight:1.75, marginBottom:'1rem' }}>
              En equipos vamos a crear una fraseología propuesta de{' '}
              <strong>bienvenida, despedida y como contestar el teléfono</strong>{' '}para las áreas de:
            </motion.p>
            <motion.div {...fade(0.5)}>
              {['Enfermería','Recepción','Seguridad','Farmacia'].map((area,i) => (
                <div key={i} className="list-item">
                  <span className="list-number">{i+1}.</span>
                  <span>{area}</span>
                </div>
              ))}
            </motion.div>
          </div>
          {/* Timer SVG */}
          <motion.div {...fade(0.6)} style={{ flexShrink:0 }}>
            <svg width="140" height="140" viewBox="0 0 140 140">
              <circle cx="70" cy="75" r="55" fill="none" stroke="#e2e8f0" strokeWidth="3" />
              <path d="M70,20 A55,55 0 0,1 125,75" fill="none" stroke="#93C5D9" strokeWidth="3" strokeLinecap="round" />
              {[0,30,60,90,120,150,180,210,240,270,300,330].map(a => {
                const r = (a * Math.PI)/180
                const x1 = 70 + 50*Math.sin(r), y1 = 75 - 50*Math.cos(r)
                const x2 = 70 + 55*Math.sin(r), y2 = 75 - 55*Math.cos(r)
                return <line key={a} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#0C2D4E" strokeWidth="1.5" opacity="0.3" />
              })}
              <text x="70" y="82" textAnchor="middle" fill="#0C2D4E" fontSize="32" fontWeight="700" fontFamily="DM Sans, sans-serif">10</text>
              <text x="70" y="100" textAnchor="middle" fill="#718096" fontSize="14" fontFamily="DM Sans, sans-serif">min</text>
            </svg>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
