import { motion } from 'framer-motion'

export default function S01d_PreguntaAsertividad() {
  return (
    <div style={{
      width: '100vw', height: '100vh',
      background: 'linear-gradient(160deg,#0a2240 0%,#163557 100%)',
      display: 'flex', flexDirection: 'column',
      justifyContent: 'center', alignItems: 'center',
      padding: '64px', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position:'absolute', inset:0, backgroundImage:'radial-gradient(circle, rgba(69,197,190,0.06) 1px, transparent 1px)', backgroundSize:'32px 32px', pointerEvents:'none' }} />

      <motion.div
        initial={{ opacity:0, y:-10 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:0.5, delay:0.1 }}
        style={{
          background:'rgba(69,197,190,0.12)',
          border:'1px solid rgba(69,197,190,0.3)',
          borderRadius:'100px', padding:'6px 18px',
          fontSize:'0.65rem', fontWeight:800,
          color:'#45C5BE', letterSpacing:'0.14em',
          textTransform:'uppercase', marginBottom:'2.5rem',
        }}
      >
        Pregunta 2 de 3
      </motion.div>

      <motion.h1
        initial={{ opacity:0, y:30 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:0.7, delay:0.2, ease:[0.25,0.46,0.45,0.94] }}
        style={{
          fontFamily:'DM Serif Display, serif',
          fontSize:'clamp(3rem,6vw,5rem)',
          fontWeight:400, color:'white',
          textAlign:'center', lineHeight:1.15,
          letterSpacing:'-0.02em', marginBottom:'2rem',
        }}
      >
        ¿Qué es<br />asertividad?
      </motion.h1>

      <motion.div
        initial={{ scaleX:0 }}
        animate={{ scaleX:1 }}
        transition={{ duration:0.6, delay:0.5 }}
        style={{ width:'60px', height:'3px', background:'#45C5BE', borderRadius:'2px', marginBottom:'2rem' }}
      />

      <motion.p
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition={{ duration:0.6, delay:0.7 }}
        style={{ fontSize:'0.85rem', color:'rgba(255,255,255,0.4)', letterSpacing:'0.06em', textTransform:'uppercase', fontWeight:300 }}
      >
        Comparte tu respuesta
      </motion.p>
    </div>
  )
}
