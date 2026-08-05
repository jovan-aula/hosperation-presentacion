import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay: d, ease: [0.25, 0.46, 0.45, 0.94] },
})

const casos = [
  {
    label: 'A',
    response: '"Bueno... sí, perdón. La próxima lo hago mejor."',
  },
  {
    label: 'B',
    response: '"¿Qué? Yo siempre termino mis cosas. No es cierto."',
  },
  {
    label: 'C',
    response: '"¿Qué quedó sin cerrar? Dímelo y lo resolvemos."',
  },
]

export default function S02e_CasosDebate() {
  const [revealed, setRevealed] = useState([false, false, false])

  const reveal = (i) => setRevealed(prev => {
    const next = [...prev]
    next[i] = true
    return next
  })

  return (
    <div style={{
      width: '100vw', height: '100vh',
      background: 'linear-gradient(150deg, #081e35 0%, #0C2D4E 100%)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '60px 80px',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(69,197,190,0.06) 1px, transparent 1px)',
        backgroundSize: '32px 32px', pointerEvents: 'none',
      }} />

      {/* Exercise badge */}
      <div style={{
        position: 'absolute', top: '24px', right: '32px',
        background: '#45C5BE', color: '#0C2D4E',
        borderRadius: '100px', padding: '0.3rem 1rem',
        fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase',
      }}>
        Ejercicio 1 · Hoja A
      </div>

      <div style={{ position: 'relative', maxWidth: '900px', width: '100%', display: 'flex', flexDirection: 'column', gap: '2rem' }}>

        {/* Badge + title */}
        <motion.div {...fade(0.1)} style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          <div style={{
            display: 'inline-block', alignSelf: 'flex-start',
            background: 'rgba(69,197,190,0.12)',
            border: '1px solid rgba(69,197,190,0.3)',
            borderRadius: '100px',
            padding: '0.3rem 1.2rem',
            fontSize: '0.72rem', fontWeight: 700,
            color: '#45C5BE', letterSpacing: '0.12em', textTransform: 'uppercase',
          }}>
            Para debatir
          </div>
          <h2 style={{
            fontFamily: 'DM Serif Display, serif',
            fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
            fontWeight: 400, color: 'white',
            lineHeight: 1.2, letterSpacing: '-0.02em', margin: 0,
          }}>
            Tres formas de responder.{' '}
            <span style={{ color: '#45C5BE' }}>¿Cuál elegirías?</span>
          </h2>
        </motion.div>

        {/* Situation */}
        <motion.div {...fade(0.25)} style={{
          background: 'rgba(255,255,255,0.04)',
          borderRadius: '14px',
          padding: '1rem 1.6rem',
          border: '1px solid rgba(255,255,255,0.1)',
          display: 'flex', alignItems: 'flex-start', gap: '1rem',
        }}>
          <div style={{ flexShrink: 0, marginTop: '2px' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#45C5BE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
          </div>
          <p style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1rem)', color: 'rgba(255,255,255,0.85)', margin: 0, lineHeight: 1.65 }}>
            <strong style={{ color: '#45C5BE' }}>Situación:</strong> Durante el cambio de turno, un colega te dice:{' '}
            <em style={{ color: 'white' }}>"La verdad, siempre dejas todo a medias."</em>
          </p>
        </motion.div>

        {/* Cases — all identical style until revealed */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
          {casos.map((c, i) => (
            <motion.div
              key={i}
              {...fade(0.4 + i * 0.1)}
              onClick={() => !revealed[i] && reveal(i)}
              style={{
                borderRadius: '16px',
                padding: '1.4rem 1.3rem',
                border: '1.5px solid rgba(255,255,255,0.12)',
                background: 'rgba(255,255,255,0.04)',
                display: 'flex', flexDirection: 'column', gap: '0.8rem',
                cursor: revealed[i] ? 'default' : 'pointer',
                minHeight: '130px',
                justifyContent: 'center',
                transition: 'border 0.3s, background 0.3s',
              }}
            >
              <div style={{
                fontFamily: 'DM Serif Display, serif',
                fontSize: '1.4rem',
                color: 'rgba(255,255,255,0.35)',
                fontWeight: 400,
              }}>
                {c.label}
              </div>

              <AnimatePresence mode="wait">
                {!revealed[i] ? (
                  <motion.span
                    key="hint"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{
                      fontSize: '0.68rem',
                      color: 'rgba(255,255,255,0.2)',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}
                  >
                    clic
                  </motion.span>
                ) : (
                  <motion.p
                    key="content"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    style={{
                      fontSize: 'clamp(0.85rem, 1.25vw, 0.95rem)',
                      color: 'rgba(255,255,255,0.88)',
                      lineHeight: 1.65,
                      fontStyle: 'italic',
                      margin: 0,
                    }}
                  >
                    {c.response}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
