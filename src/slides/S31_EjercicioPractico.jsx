import { motion } from 'framer-motion'

const questions = [
  '¿Qué siente probablemente esta persona en este momento?',
  '¿Cuál sería una respuesta inmediata que muestre presencia y empatía?',
  '¿Qué información concreta puedes ofrecer aunque no tengas la solución?',
  '¿Cómo cierras la interacción de manera que la persona se sienta atendida?',
]

export default function S31_EjercicioPractico() {
  return (
    <div className="slide" style={{
      background: 'linear-gradient(160deg, #fff8f8 0%, #fff5f0 100%)',
      padding: '50px 80px',
      gap: '1.3rem',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(229,62,62,0.06) 1.5px, transparent 1.5px)',
        backgroundSize: '28px 28px',
        pointerEvents: 'none',
      }} />

      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.6rem', textAlign: 'center' }}
      >
        <div className="exercise-badge">Ejercicio práctico</div>
        <h2 className="slide-title">Caso de manejo</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '1.2rem' }}>⏱️</span>
          <span style={{ fontSize: '0.9rem', color: 'var(--text-light)', fontWeight: 500 }}>10 minutos en grupos</span>
        </div>
      </motion.div>

      {/* Case box */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          background: 'white',
          borderRadius: '20px',
          padding: '1.5rem 2rem',
          boxShadow: '0 4px 20px rgba(229,62,62,0.12)',
          border: '2px solid rgba(229,62,62,0.25)',
          borderLeft: '6px solid #E53E3E',
          maxWidth: '800px',
          width: '100%',
        }}
      >
        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
          <span style={{ fontSize: '1.8rem', flexShrink: 0 }}>🗣️</span>
          <div>
            <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#C53030', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '6px' }}>
              Paciente / familiar dice:
            </div>
            <blockquote style={{
              fontFamily: 'DM Serif Display, serif',
              fontSize: 'clamp(1rem, 2vw, 1.4rem)',
              fontStyle: 'italic',
              color: 'var(--text)',
              lineHeight: 1.4,
              margin: 0,
            }}>
              "Llevo más de una hora esperando y nadie me explica nada. Esto es una falta de respeto."
            </blockquote>
          </div>
        </div>
      </motion.div>

      {/* Questions */}
      <div className="grid-2" style={{ maxWidth: '820px', width: '100%', gap: '0.8rem' }}>
        {questions.map((q, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 + i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              display: 'flex', gap: '0.9rem', alignItems: 'flex-start',
              background: 'white',
              borderRadius: '12px',
              padding: '0.9rem 1.2rem',
              boxShadow: 'var(--shadow-sm)',
              border: '1px solid rgba(229,62,62,0.15)',
            }}
          >
            <div style={{
              width: '26px', height: '26px', borderRadius: '50%', flexShrink: 0,
              background: '#E53E3E',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'white', fontWeight: 700, fontSize: '0.78rem',
            }}>
              {i + 1}
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text)', margin: 0, lineHeight: 1.5 }}>{q}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.85 }}
        style={{
          background: 'rgba(12,45,78,0.05)',
          border: '1px solid rgba(12,45,78,0.12)',
          borderRadius: '12px',
          padding: '0.8rem 1.8rem',
          maxWidth: '760px',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '0.85rem', color: 'var(--navy)', fontWeight: 600, margin: 0, lineHeight: 1.5 }}>
          "Responder bien no siempre significa resolver de inmediato; también implica <em>informar, contener, orientar y dar seguimiento.</em>"
        </p>
      </motion.div>
    </div>
  )
}
