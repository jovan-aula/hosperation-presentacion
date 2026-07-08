import { motion } from 'framer-motion'

const steps = [
  'Preguntar.',
  'Observar.',
  'Escuchar.',
  'Demostrar interés.',
  'Evitar cuestionar o juzgar.',
  'Utilizar sus respuestas para hacer nuevas preguntas.',
  'Respetar su tiempo y evitar demoras innecesarias.',
  'Conducir la conversación hacia necesidades e intereses comunes.',
]

export default function S15_OchoPasos() {
  return (
    <div className="slide bg-dots" style={{ padding: '55px 80px', gap: '1.5rem' }}>
      <div className="corner-accent" />

      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center' }}
      >
        <h2 className="slide-title">8 Pasos para conocer al cliente</h2>
        <p className="slide-subtitle" style={{ color: 'var(--teal-dark)', fontWeight: 600 }}>
          Técnicas de escucha activa aplicadas al entorno hospitalario
        </p>
      </motion.div>

      <div className="grid-2" style={{ maxWidth: '900px', width: '100%', gap: '0.8rem' }}>
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              display: 'flex', alignItems: 'center', gap: '1rem',
              background: 'white',
              borderRadius: '12px',
              padding: '0.85rem 1.1rem',
              boxShadow: 'var(--shadow-sm)',
              border: '1px solid rgba(69,197,190,0.18)',
            }}
          >
            <div style={{
              width: '32px', height: '32px', borderRadius: '50%', flexShrink: 0,
              background: 'linear-gradient(135deg, #45C5BE, #2BA8A2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'white', fontFamily: 'DM Serif Display, serif', fontWeight: 400, fontSize: '1rem',
            }}>
              {i + 1}
            </div>
            <span style={{ fontSize: '0.9rem', color: 'var(--text)', lineHeight: 1.45, fontWeight: 500 }}>
              {step}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="ref-text"
        style={{ textAlign: 'center' }}
      >
        Basado en técnicas de escucha activa: Rogers, C. (1980). A Way of Being; Gordon, T. (1987). Leader Effectiveness Training.
      </motion.p>
    </div>
  )
}
