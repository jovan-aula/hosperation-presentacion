import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const cards = [
  {
    quote: '"¡Siempre entregas así! Esto está mal y ya."',
    label: 'Grosero',
    color: '#e87c6a',
  },
  {
    quote: '"Esto tiene errores. Hay que corregirlo."',
    label: 'Directo',
    color: '#94a3b8',
  },
  {
    quote: '"Vi algunos errores en el reporte. ¿Me cuentas qué pasó? Lo resolvemos juntos."',
    label: 'Asertivo',
    color: '#45C5BE',
  },
]

export default function S02b_Pregunta1() {
  const [revealed, setRevealed] = useState(false)

  return (
    <div style={{
      width: '100vw', height: '100vh',
      background: 'linear-gradient(150deg, #081e35 0%, #0C2D4E 100%)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '60px 80px',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(69,197,190,0.06) 1px, transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', maxWidth: '960px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          style={{ background: 'rgba(69,197,190,0.12)', border: '1px solid rgba(69,197,190,0.3)', borderRadius: '100px', padding: '0.3rem 1.2rem', fontSize: '0.72rem', fontWeight: 700, color: '#45C5BE', letterSpacing: '0.12em', textTransform: 'uppercase' }}
        >
          Para debatir
        </motion.div>

        {/* Pregunta */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
          style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 400, color: 'white', lineHeight: 1.2, letterSpacing: '-0.02em', margin: 0, textAlign: 'center' }}
        >
          ¿Cómo calificarías cada una de estas frases?
        </motion.h2>

        {/* Tarjetas — siempre visibles */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.6 }}
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', width: '100%' }}
        >
          {cards.map((card, i) => (
            <div key={i} style={{
              borderRadius: '16px',
              border: '1.5px solid rgba(255,255,255,0.1)',
              background: 'rgba(255,255,255,0.04)',
              padding: '1.6rem 1.4rem',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              gap: '1rem', minHeight: '150px', textAlign: 'center',
            }}>
              <p style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.88)', fontSize: 'clamp(0.82rem, 1.2vw, 0.95rem)', lineHeight: 1.7, margin: 0 }}>
                {card.quote}
              </p>

              {/* Label — solo aparece al revelar */}
              <AnimatePresence>
                {revealed && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8, y: 6 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: i * 0.12 }}
                    style={{
                      fontSize: '0.72rem', fontWeight: 700,
                      color: card.color,
                      letterSpacing: '0.1em', textTransform: 'uppercase',
                      background: `${card.color}18`,
                      border: `1px solid ${card.color}40`,
                      borderRadius: '100px',
                      padding: '0.25rem 1rem',
                    }}
                  >
                    {card.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>

        {/* Botón revelar / conclusión */}
        <AnimatePresence mode="wait">
          {!revealed ? (
            <motion.button
              key="btn"
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
              transition={{ delay: 0.7, duration: 0.4 }}
              onClick={() => setRevealed(true)}
              style={{
                background: '#45C5BE', color: '#0C2D4E',
                border: 'none', borderRadius: '100px',
                padding: '0.7rem 2rem',
                fontSize: '0.8rem', fontWeight: 800,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                cursor: 'pointer',
              }}
            >
              Revelar respuestas
            </motion.button>
          ) : (
            <motion.p
              key="conclusion"
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', margin: 0, textAlign: 'center', fontStyle: 'italic' }}
            >
              Ser directo no es ser grosero — la asertividad es la diferencia.
            </motion.p>
          )}
        </AnimatePresence>

      </div>
    </div>
  )
}
