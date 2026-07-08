import { motion } from 'framer-motion'

const standards = [
  { num: '1', text: 'Saludar' },
  { num: '2', text: 'Presentarse' },
  { num: '3', text: 'Escuchar' },
  { num: '4', text: 'Informar' },
  { num: '5', text: 'Confirmar comprensión' },
  { num: '6', text: 'Trato digno' },
  { num: '7', text: 'Cumplir tiempos' },
  { num: '8', text: 'Trabajo en equipo' },
  { num: '9', text: 'Resolver' },
  { num: '10', text: 'Agradecer' },
]

export default function S30_EstandaresFlorence() {
  const col1 = standards.slice(0, 5)
  const col2 = standards.slice(5)

  return (
    <div className="slide bg-dots" style={{ padding: '55px 80px', gap: '1.5rem' }}>
      <div className="corner-accent" />

      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center' }}
      >
        <div className="pill" style={{ marginBottom: '0.5rem' }}>Modelo Florence</div>
        <h2 className="slide-title">10 Estándares Florence</h2>
        <p className="slide-subtitle" style={{ color: 'var(--teal-dark)', fontWeight: 600 }}>
          Conductas concretas que convierten la intención en acción
        </p>
      </motion.div>

      <div className="grid-2" style={{ maxWidth: '840px', width: '100%', gap: '1.2rem', alignItems: 'start' }}>
        {[col1, col2].map((col, ci) => (
          <div key={ci} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {col.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.15 + (ci * 5 + i) * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{
                  display: 'flex', alignItems: 'center', gap: '1rem',
                  background: 'white',
                  borderRadius: '12px',
                  padding: '0.85rem 1.2rem',
                  boxShadow: 'var(--shadow-sm)',
                  border: '1px solid rgba(69,197,190,0.18)',
                }}
              >
                <div style={{
                  fontFamily: 'DM Serif Display, serif',
                  fontSize: '1.4rem',
                  color: '#45C5BE',
                  minWidth: '2rem',
                  lineHeight: 1,
                  fontWeight: 400,
                }}>
                  {s.num}
                </div>
                <div style={{ width: '1.5px', height: '24px', background: 'rgba(69,197,190,0.3)', borderRadius: '1px', flexShrink: 0 }} />
                <span style={{ fontSize: 'clamp(0.88rem, 1.4vw, 1rem)', fontWeight: 600, color: 'var(--navy)' }}>
                  {s.text}
                </span>
              </motion.div>
            ))}
          </div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        style={{
          maxWidth: '720px',
          background: 'linear-gradient(135deg, rgba(12,45,78,0.07), rgba(69,197,190,0.1))',
          border: '1px solid rgba(69,197,190,0.2)',
          borderRadius: '12px',
          padding: '0.9rem 1.8rem',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '0.9rem', color: 'var(--navy)', fontWeight: 600, fontStyle: 'italic', margin: 0, lineHeight: 1.5 }}>
          "Los estándares convierten la intención de servir en conductas claras, consistentes y compartidas."
        </p>
      </motion.div>
    </div>
  )
}
