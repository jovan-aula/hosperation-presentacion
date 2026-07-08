import { motion } from 'framer-motion'

const rows = [
  ['Ejecuta tareas', 'Resuelve necesidades'],
  ['Espera instrucciones', 'Se anticipa'],
  ['Reacciona', 'Analiza y responde'],
  ['Se limita a su área', 'Orienta y canaliza'],
  ['Cumple el mínimo', 'Cuida el resultado'],
]

export default function S10_CumplirVsProfesionalizar() {
  return (
    <div className="slide bg-dots" style={{ padding: '55px 80px', gap: '1.5rem' }}>
      <div className="corner-accent" />

      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', width: '100%' }}
      >
        <h2 className="slide-title">De cumplir tareas a generar confianza</h2>
        <p style={{ fontSize: '1rem', color: 'var(--text-light)', marginTop: '0.3rem' }}>
          Dos formas de asumir el servicio
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        style={{
          width: '100%', maxWidth: '820px',
          background: 'white',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-md)',
          border: '1px solid rgba(69,197,190,0.2)',
        }}
      >
        {/* Header */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
          <div style={{
            background: 'rgba(12,45,78,0.06)',
            padding: '1rem 1.5rem',
            fontWeight: 700, fontSize: '0.85rem',
            color: 'var(--text-light)',
            letterSpacing: '0.08em', textTransform: 'uppercase',
            borderRight: '1px solid rgba(226,232,240,0.8)',
            display: 'flex', alignItems: 'center', gap: '8px',
          }}>
            <span style={{ fontSize: '1.1rem' }}>⚙️</span> CUMPLIR
          </div>
          <div style={{
            background: 'rgba(69,197,190,0.1)',
            padding: '1rem 1.5rem',
            fontWeight: 700, fontSize: '0.85rem',
            color: 'var(--teal-dark)',
            letterSpacing: '0.08em', textTransform: 'uppercase',
            display: 'flex', alignItems: 'center', gap: '8px',
          }}>
            <span style={{ fontSize: '1.1rem' }}>🚀</span> PROFESIONALIZAR
          </div>
        </div>

        {/* Rows */}
        {rows.map(([left, right], i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.3 + i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              borderTop: '1px solid rgba(226,232,240,0.7)',
            }}
          >
            <div style={{
              padding: '0.9rem 1.5rem',
              fontSize: '0.95rem', color: 'var(--text-light)',
              borderRight: '1px solid rgba(226,232,240,0.7)',
              display: 'flex', alignItems: 'center', gap: '8px',
            }}>
              <span style={{ color: '#CBD5E0', fontSize: '0.8rem' }}>●</span>
              {left}
            </div>
            <div style={{
              padding: '0.9rem 1.5rem',
              fontSize: '0.95rem', color: 'var(--navy)',
              fontWeight: 600,
              background: i % 2 === 0 ? 'rgba(69,197,190,0.04)' : 'transparent',
              display: 'flex', alignItems: 'center', gap: '8px',
            }}>
              <span style={{ color: '#45C5BE', fontSize: '0.8rem' }}>●</span>
              {right}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        style={{ fontSize: '0.88rem', color: 'var(--text-light)', fontStyle: 'italic', textAlign: 'center' }}
      >
        La diferencia no está en el cargo — está en la actitud con la que se asume cada tarea.
      </motion.p>
    </div>
  )
}
