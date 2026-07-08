import { motion } from 'framer-motion'
import { IconLightbulb, IconMessage } from '../components/Icons'

const IconBrain = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-1.06-4.84 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.96-4.62A2.5 2.5 0 0 1 9.5 2z"/>
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 1.06-4.84 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.96-4.62A2.5 2.5 0 0 0 14.5 2z"/>
  </svg>
)

const IconClipboard = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
    <rect x="8" y="2" width="8" height="4" rx="1"/>
  </svg>
)

const quadrants = [
  { label: 'Conocimiento', desc: 'Saber qué hacer y cómo orientar', Icon: IconBrain, pos: 'top-left' },
  { label: 'Actitud', desc: 'Disposición para atender y colaborar', Icon: IconLightbulb, pos: 'top-right' },
  { label: 'Comunicación', desc: 'Explicar, escuchar y confirmar comprensión', Icon: IconMessage, pos: 'bottom-left' },
  { label: 'Estándares', desc: 'Actuar de forma consistente, incluso bajo presión', Icon: IconClipboard, pos: 'bottom-right' },
]

export default function S11_QueesProfesionalizar() {
  return (
    <div className="slide bg-dots" style={{ padding: '55px 80px', gap: '1.5rem' }}>
      <div className="corner-accent" />

      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center' }}
      >
        <div className="pill" style={{ marginBottom: '0.5rem' }}>Modelo</div>
        <h2 className="slide-title">¿Qué es profesionalizar el servicio?</h2>
      </motion.div>

      {/* Diagram */}
      <div style={{ position: 'relative', width: '100%', maxWidth: '760px', height: '380px' }}>
        {/* Center circle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            position: 'absolute',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '130px', height: '130px', borderRadius: '50%',
            background: 'linear-gradient(135deg, #0C2D4E, #1a4068)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 8px 30px rgba(12,45,78,0.4), 0 0 0 8px rgba(69,197,190,0.15)',
            zIndex: 10,
            textAlign: 'center',
            padding: '0.8rem',
          }}
        >
          <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'white', lineHeight: 1.3 }}>
            Servicio<br />Profesional
          </span>
        </motion.div>

        {/* Connecting lines */}
        {[
          { x1: '50%', y1: '50%', x2: '22%', y2: '22%' },
          { x1: '50%', y1: '50%', x2: '78%', y2: '22%' },
          { x1: '50%', y1: '50%', x2: '22%', y2: '78%' },
          { x1: '50%', y1: '50%', x2: '78%', y2: '78%' },
        ].map((line, i) => (
          <motion.svg
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 + i * 0.1 }}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
          >
            <line {...line} stroke="rgba(69,197,190,0.35)" strokeWidth="1.5" strokeDasharray="5,4" />
          </motion.svg>
        ))}

        {/* Quadrant cards */}
        {quadrants.map((q, i) => {
          const isRight = q.pos.includes('right')
          const isBottom = q.pos.includes('bottom')
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.35 + i * 0.12 }}
              style={{
                position: 'absolute',
                top: isBottom ? 'auto' : '2%',
                bottom: isBottom ? '2%' : 'auto',
                left: isRight ? 'auto' : '2%',
                right: isRight ? '2%' : 'auto',
                width: '200px',
                background: 'white',
                borderRadius: '14px',
                padding: '1rem 1.1rem',
                boxShadow: 'var(--shadow-md)',
                border: '1.5px solid rgba(69,197,190,0.25)',
              }}
            >
              <div style={{ marginBottom: '4px', color: 'var(--teal-dark)' }}>
                <q.Icon size={28} color="var(--teal-dark)" />
              </div>
              <div style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--navy)', marginBottom: '3px' }}>{q.label}</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-light)', lineHeight: 1.45 }}>{q.desc}</div>
            </motion.div>
          )
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        style={{
          background: 'rgba(12,45,78,0.06)',
          borderRadius: '12px',
          padding: '0.9rem 1.8rem',
          maxWidth: '720px',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '0.92rem', color: 'var(--navy)', fontWeight: 600, fontStyle: 'italic', margin: 0, lineHeight: 1.55 }}>
          "Profesionalizar no es solo ser amable; es ofrecer una atención humana, competente y consistente."
        </p>
      </motion.div>
    </div>
  )
}
