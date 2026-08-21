import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const opciones = [
  { letra: 'Sí', color: '#45C5BE' },
  { letra: 'No', color: '#6B8FA8' },
  { letra: 'Depende', color: '#a78bfa' },
]

export default function S02c_Pregunta2() {
  const [revealed, setRevealed] = useState(false)

  return (
    <div style={{
      width: '100vw', height: '100vh',
      background: 'linear-gradient(150deg, #081e35 0%, #0C2D4E 100%)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '80px',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(69,197,190,0.06) 1px, transparent 1px)',
        backgroundSize: '32px 32px', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(69,197,190,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', maxWidth: '860px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.4rem' }}>

        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            background: 'rgba(69,197,190,0.12)',
            border: '1px solid rgba(69,197,190,0.3)',
            borderRadius: '100px',
            padding: '0.3rem 1.2rem',
            fontSize: '0.72rem', fontWeight: 700,
            color: '#45C5BE', letterSpacing: '0.12em', textTransform: 'uppercase',
          }}
        >
          Para reflexionar
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            fontFamily: 'DM Serif Display, serif',
            fontSize: 'clamp(2.2rem, 5vw, 4rem)',
            fontWeight: 400, color: 'white',
            lineHeight: 1.2, letterSpacing: '-0.02em', margin: 0,
          }}
        >
          ¿Se puede ser{' '}
          <span style={{ color: '#45C5BE' }}>honesto</span>
          {' '}sin{' '}
          <span style={{ color: '#e87c6a' }}>herir</span>
          {' '}a nadie?
        </motion.h2>

        {/* 3 options — just the words */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', width: '100%' }}
        >
          {opciones.map((op, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.12, duration: 0.5 }}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: `1.5px solid ${op.color}40`,
                borderRadius: '14px',
                padding: '1.4rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <div style={{
                fontFamily: 'DM Serif Display, serif',
                fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                color: op.color, fontWeight: 400,
              }}>
                {op.letra}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tension line + example — revealed on click */}
        <AnimatePresence>
          {revealed ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', width: '100%' }}
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                  background: 'rgba(69,197,190,0.1)',
                  border: '1px solid rgba(69,197,190,0.3)',
                  borderRadius: '12px',
                  padding: '0.9rem 1.8rem',
                  maxWidth: '620px',
                  textAlign: 'center',
                }}
              >
                <p style={{ color: 'white', fontSize: 'clamp(0.85rem,1.3vw,1rem)', margin: 0, lineHeight: 1.65, fontStyle: 'italic' }}>
                  "La tensión entre honestidad y tacto es exactamente donde vive la asertividad."
                </p>
              </motion.div>

              {/* Hospital example */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '14px',
                  padding: '1rem 1.6rem',
                  maxWidth: '760px',
                  width: '100%',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1rem',
                }}
              >
                <div style={{ borderRight: '1px solid rgba(255,255,255,0.08)', paddingRight: '1rem' }}>
                  <div style={{ fontSize: '0.62rem', fontWeight: 700, color: '#e87c6a', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Sin asertividad</div>
                  <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, margin: 0, fontStyle: 'italic' }}>
                    "Nada, me lo guardo… pero le puse mala cara todo el día."
                  </p>
                </div>
                <div>
                  <div style={{ fontSize: '0.62rem', fontWeight: 700, color: '#45C5BE', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Con asertividad</div>
                  <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, margin: 0, fontStyle: 'italic' }}>
                    "Oye, te lo digo en privado porque me importa: hueles un poco fuerte hoy. Puede incomodar a los pacientes. No quiero que eso te afecte."
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.button
              key="btn"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 1.2 }}
              onClick={() => setRevealed(true)}
              style={{
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '100px',
                padding: '0.4rem 1.4rem',
                color: 'rgba(255,255,255,0.25)',
                fontSize: '0.7rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
              }}
            >
              clic para cerrar
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
