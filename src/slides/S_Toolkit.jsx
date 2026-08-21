import { motion } from 'framer-motion'

const herramientas = [
  'Postura y presencia',
  'Expresion clara',
  'Empatia y respeto',
  'Tono y pronunciacion',
  'Tecnicas asertivas',
]

export default function S_Toolkit() {
  return (
    <div style={{
      width: '100vw', height: '100vh',
      background: 'linear-gradient(160deg, #081e35 0%, #0C2D4E 100%)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '60px 80px',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(69,197,190,0.05) 1px, transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', maxWidth: '860px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.4rem' }}>

        <motion.div
          initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          style={{ background: 'rgba(69,197,190,0.12)', border: '1px solid rgba(69,197,190,0.3)', borderRadius: '100px', padding: '0.3rem 1.2rem', fontSize: '0.72rem', fontWeight: 700, color: '#45C5BE', letterSpacing: '0.12em', textTransform: 'uppercase' }}
        >
          Ahora si, la practica
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
          style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 400, color: 'white', lineHeight: 1.2, letterSpacing: '-0.02em', margin: 0, textAlign: 'center' }}
        >
          Ya sabemos el <span style={{ color: '#45C5BE' }}>que</span>.
          <br />Ahora viene el <span style={{ color: '#a769fa' }}>como</span>.
        </motion.h2>

        <div style={{ width: '48px', height: '3px', background: '#45C5BE', borderRadius: '2px' }} />

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.6 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', maxWidth: '680px' }}
        >
          {herramientas.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1.5px solid rgba(255,255,255,0.12)',
                borderRadius: '100px',
                padding: '0.5rem 1.4rem',
                fontSize: '0.85rem',
                color: 'rgba(255,255,255,0.75)',
                fontWeight: 500,
                letterSpacing: '0.02em',
              }}
            >
              {h}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.5 }}
          style={{
            background: 'rgba(69,197,190,0.08)',
            border: '1px solid rgba(69,197,190,0.2)',
            borderRadius: '12px',
            padding: '0.75rem 1.6rem',
            display: 'flex', alignItems: 'center', gap: '10px',
          }}
        >
          <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#45C5BE', letterSpacing: '0.1em', textTransform: 'uppercase', flexShrink: 0 }}>Tip</span>
          <span style={{ width: '1px', height: '14px', background: 'rgba(69,197,190,0.3)', flexShrink: 0 }} />
          <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)', margin: 0, lineHeight: 1.5 }}>
            Antes de hablar, preguntate: ¿soy honesto y respetuoso al mismo tiempo?
          </p>
        </motion.div>

      </div>
    </div>
  )
}
