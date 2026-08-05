import { motion } from 'framer-motion'
const fade = (d=0) => ({ initial:{opacity:0,y:16}, animate:{opacity:1,y:0}, transition:{duration:0.55,delay:d} })

const cajas = [
  {
    num: '1',
    title: 'Lo que observo',
    question: '¿Qué está pasando exactamente, sin interpretar?',
    color: '#0C2D4E',
    bg: '#f0f6fb',
    border: 'rgba(12,45,78,0.2)',
  },
  {
    num: '2',
    title: 'Lo que entiendo',
    question: '¿Qué emoción o necesidad hay detrás de lo que dice?',
    color: '#2BA8A2',
    bg: '#f0fbfa',
    border: 'rgba(43,168,162,0.3)',
  },
  {
    num: '3',
    title: 'Lo que puedo hacer',
    question: '¿Qué sí está en mis manos resolver, orientar o canalizar?',
    color: '#d97706',
    bg: '#fff8f0',
    border: 'rgba(217,119,6,0.25)',
  },
  {
    num: '4',
    title: 'Lo que comunico',
    question: '¿Cómo lo digo con claridad, calma y respeto?',
    color: '#7c3aed',
    bg: '#f5f0ff',
    border: 'rgba(124,58,237,0.25)',
  },
]

export default function S29_ActividadCaja() {
  return (
    <div className="slide" style={{ padding:'44px 72px' }}>
      <div className="corner-accent" />
      <div style={{
        position: 'absolute', top: '24px', right: '32px',
        background: '#45C5BE', color: '#0C2D4E',
        borderRadius: '100px', padding: '0.3rem 1rem',
        fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase',
      }}>
        Ejercicio 4 · Hoja D
      </div>

      <div style={{ width:'100%', maxWidth:'940px', display:'flex', flexDirection:'column', gap:'1.4rem' }}>

        {/* Header */}
        <motion.div {...fade(0.05)} style={{ display:'flex', flexDirection:'column', gap:'0.3rem' }}>
          <div className="pill" style={{ alignSelf:'flex-start' }}>La Caja Asertiva</div>
          <h2 className="slide-title">Construye tu respuesta</h2>
          <div className="teal-bar" />
        </motion.div>

        {/* Prompt */}
        <motion.div {...fade(0.15)} style={{
          background: '#0C2D4E',
          borderRadius: '14px',
          padding: '1rem 1.6rem',
          display: 'flex', gap: '1.2rem', alignItems: 'center',
        }}>
          <div style={{ flexShrink:0, width:'6px', height:'48px', borderRadius:'3px', background:'#45C5BE' }} />
          <div>
            <div style={{ fontSize:'0.6rem', fontWeight:800, color:'#45C5BE', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:'4px' }}>Tu situación</div>
            <p style={{ fontSize:'0.9rem', color:'rgba(255,255,255,0.85)', lineHeight:1.6, margin:0 }}>
              Elige un momento difícil que hayas vivido en tu área — un familiar enojado, un colega que no escucha, una instrucción complicada de cumplir.
            </p>
          </div>
        </motion.div>

        {/* 2×2 grid */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0.9rem' }}>
          {cajas.map((c, i) => (
            <motion.div key={i} {...fade(0.3 + i * 0.1)} style={{
              background: c.bg,
              border: `1.5px solid ${c.border}`,
              borderRadius: '16px',
              padding: '1rem 1.3rem',
              display: 'flex', flexDirection: 'column', gap: '0.5rem',
            }}>
              <div style={{ display:'flex', alignItems:'center', gap:'0.7rem' }}>
                <div style={{
                  width:'28px', height:'28px', borderRadius:'50%',
                  background: c.color,
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontSize:'0.72rem', fontWeight:800, color:'white', flexShrink:0,
                }}>
                  {c.num}
                </div>
                <span style={{ fontSize:'0.92rem', fontWeight:700, color: c.color }}>{c.title}</span>
              </div>
              <p style={{ fontSize:'0.8rem', color:'#4A5568', lineHeight:1.6, margin:0, paddingLeft:'2.1rem', fontStyle:'italic' }}>
                {c.question}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
