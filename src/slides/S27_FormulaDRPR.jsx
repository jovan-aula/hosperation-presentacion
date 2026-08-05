import { motion } from 'framer-motion'

const steps = [
  { letter: 'D', word: 'Detente', desc: 'No respondas en automático. Haz una pausa antes de hablar.' },
  { letter: 'R', word: 'Respira', desc: 'Una respiración reduce la tensión y te regresa al centro.' },
  { letter: 'P', word: 'Presta atención', desc: '¿Qué necesita realmente esta persona detrás de lo que dice?' },
  { letter: 'R', word: 'Responde', desc: 'Desde la reflexión, no desde la emoción del momento.' },
]

const fade = (d=0) => ({ initial:{opacity:0, y:16}, animate:{opacity:1, y:0}, transition:{duration:0.55, delay:d} })

export default function S27_FormulaDRPR() {
  return (
    <div className="slide" style={{ padding:'48px 72px' }}>
      <div className="corner-accent" />
      <div style={{ width:'100%', maxWidth:'900px', display:'flex', flexDirection:'column', gap:'1.8rem' }}>

        {/* Header */}
        <motion.div {...fade(0.05)} style={{ display:'flex', flexDirection:'column', gap:'0.4rem' }}>
          <div className="pill" style={{ alignSelf:'flex-start' }}>Antes de responder</div>
          <h2 className="slide-title">
            Fórmula{' '}
            <span className="teal-accent">DRPR</span>
          </h2>
          <div className="teal-bar" />
          <p style={{ fontSize:'0.88rem', color:'#718096', lineHeight:1.6 }}>
            Cuatro pasos para responder con intención, no con reacción.
          </p>
        </motion.div>

        {/* 2×2 grid */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem' }}>
          {steps.map((s, i) => (
            <motion.div
              key={i}
              {...fade(0.2 + i * 0.12)}
              style={{
                background: 'white',
                borderRadius: '18px',
                border: '1.5px solid rgba(69,197,190,0.3)',
                padding: '1.2rem 1.4rem',
                display: 'flex',
                gap: '1rem',
                alignItems: 'flex-start',
                boxShadow: '0 2px 10px rgba(12,45,78,0.06)',
              }}
            >
              <div style={{
                flexShrink: 0,
                width: '44px', height: '44px',
                borderRadius: '50%',
                background: 'rgba(69,197,190,0.1)',
                border: '2px solid rgba(69,197,190,0.4)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{
                  fontFamily: 'DM Serif Display, serif',
                  fontSize: '1.35rem',
                  color: '#45C5BE',
                  fontWeight: 400,
                  lineHeight: 1,
                }}>
                  {s.letter}
                </span>
              </div>
              <div>
                <div style={{ fontSize:'1rem', fontWeight:700, color:'#0C2D4E', marginBottom:'0.3rem' }}>{s.word}</div>
                <p style={{ fontSize:'0.82rem', color:'#718096', lineHeight:1.6, margin:0 }}>{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
