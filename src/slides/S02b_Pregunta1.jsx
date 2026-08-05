import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const cards = [
  {
    quote: '"¡Siempre entregas así! Esto está mal y ya."',
    label: 'Grosero',
    color: '#e87c6a',
    bg: 'rgba(232,124,106,0.08)',
    borderRevealed: 'rgba(232,124,106,0.45)',
  },
  {
    quote: '"Esto tiene errores. Hay que corregirlo."',
    label: 'Directo',
    color: '#94a3b8',
    bg: 'rgba(148,163,184,0.07)',
    borderRevealed: 'rgba(148,163,184,0.4)',
  },
  {
    quote: '"Vi algunos errores en el reporte. ¿Me cuentas qué pasó? Lo resolvemos juntos."',
    label: 'Asertivo',
    color: '#45C5BE',
    bg: 'rgba(69,197,190,0.08)',
    borderRevealed: 'rgba(69,197,190,0.45)',
  },
]

export default function S02b_Pregunta1() {
  const [revealed, setRevealed] = useState([false, false, false])
  const allRevealed = revealed.every(Boolean)

  const reveal = (i) => {
    setRevealed(prev => {
      const next = [...prev]
      next[i] = true
      return next
    })
  }

  return (
    <div style={{
      width: '100vw', height: '100vh',
      background: 'linear-gradient(150deg, #081e35 0%, #0C2D4E 100%)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '72px 80px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Dot pattern */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(69,197,190,0.06) 1px, transparent 1px)',
        backgroundSize: '32px 32px', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(69,197,190,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', maxWidth: '900px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>

        {/* Badge */}
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
          Para debatir
        </motion.div>

        {/* Question */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', textAlign: 'center' }}
        >
          <h2 style={{
            fontFamily: 'DM Serif Display, serif',
            fontSize: 'clamp(1.8rem, 3.8vw, 3rem)',
            fontWeight: 400, color: 'white',
            lineHeight: 1.2, letterSpacing: '-0.02em', margin: 0,
          }}>
            ¿Cuál es la diferencia entre ser{' '}
            <span style={{ color: '#94a3b8' }}>directo</span>,{' '}
            <span style={{ color: '#e87c6a' }}>grosero</span>{' '}
            y{' '}
            <span style={{ color: '#45C5BE' }}>asertivo</span>?
          </h2>
          <p style={{
            fontSize: 'clamp(0.88rem, 1.3vw, 1rem)',
            color: 'rgba(255,255,255,0.4)',
            fontStyle: 'italic', margin: 0,
          }}>
            "Así soy yo — soy muy directo."
          </p>
        </motion.div>

        {/* Three cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', width: '100%' }}
        >
          {cards.map((card, i) => (
            <div
              key={i}
              onClick={() => !revealed[i] && reveal(i)}
              style={{
                borderRadius: '16px',
                border: `1.5px solid ${revealed[i] ? card.borderRevealed : 'rgba(255,255,255,0.1)'}`,
                background: revealed[i] ? card.bg : 'rgba(255,255,255,0.03)',
                padding: '1.4rem 1.2rem',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                cursor: revealed[i] ? 'default' : 'pointer',
                transition: 'border 0.4s, background 0.4s',
                minHeight: '140px', gap: '0.8rem',
                position: 'relative',
              }}
            >
              <AnimatePresence mode="wait">
                {!revealed[i] ? (
                  <motion.div
                    key="locked"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.85 }}
                    transition={{ duration: 0.2 }}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                    <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                      clic para revelar
                    </span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="revealed"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', alignItems: 'center', textAlign: 'center' }}
                  >
                    <p style={{
                      fontStyle: 'italic',
                      color: 'rgba(255,255,255,0.9)',
                      fontSize: 'clamp(0.82rem, 1.2vw, 0.95rem)',
                      lineHeight: 1.65, margin: 0,
                    }}>
                      {card.quote}
                    </p>

                    {/* Label only shows when ALL are revealed */}
                    <AnimatePresence>
                      {allRevealed && (
                        <motion.span
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.35, delay: i * 0.1 }}
                          style={{
                            fontSize: '0.72rem', fontWeight: 700,
                            color: card.color,
                            letterSpacing: '0.1em', textTransform: 'uppercase',
                            background: `${card.color}18`,
                            border: `1px solid ${card.color}40`,
                            borderRadius: '100px',
                            padding: '0.2rem 0.9rem',
                          }}
                        >
                          {card.label}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>

        {/* Bottom note — only after all revealed */}
        <AnimatePresence>
          {allRevealed && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{
                fontSize: '0.82rem',
                color: 'rgba(255,255,255,0.4)',
                margin: 0, textAlign: 'center', lineHeight: 1.6,
                fontStyle: 'italic',
              }}
            >
              Ser directo no es ser grosero — la asertividad es la diferencia.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
