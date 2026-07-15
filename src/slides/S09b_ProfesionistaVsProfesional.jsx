import { motion } from 'framer-motion'

const comparisons = [
  {
    profesionista: 'Tiene un título o credencial',
    profesional: 'Asume un estándar de excelencia',
  },
  {
    profesionista: 'Aprendió en la escuela',
    profesional: 'Aprende todos los días',
  },
  {
    profesionista: 'Su identidad es el cargo',
    profesional: 'Su identidad es cómo actúa',
  },
  {
    profesionista: 'Espera que lo reconozcan',
    profesional: 'Se gana el reconocimiento',
  },
  {
    profesionista: 'Cumple porque toca',
    profesional: 'Actúa porque le importa',
  },
]

export default function S09b_ProfesionistaVsProfesional() {
  return (
    <div className="slide bg-dots" style={{ padding: '50px 80px', gap: '1.4rem' }}>
      <div className="corner-accent" />

      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', width: '100%' }}
      >
        <div className="pill" style={{ marginBottom: '0.6rem' }}>Conceptos clave</div>
        <h2 className="slide-title">Profesionista vs Profesional</h2>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-light)', marginTop: '0.3rem' }}>
          No son lo mismo — y la diferencia importa en cada turno
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        style={{
          width: '100%', maxWidth: '860px',
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
            background: 'rgba(12,45,78,0.07)',
            padding: '1rem 1.5rem',
            fontWeight: 700, fontSize: '0.85rem',
            color: 'var(--text-light)',
            letterSpacing: '0.08em', textTransform: 'uppercase',
            borderRight: '1px solid rgba(226,232,240,0.8)',
            display: 'flex', alignItems: 'center', gap: '8px',
          }}>
            <span style={{ fontSize: '1.1rem' }}>🎓</span> Profesionista
          </div>
          <div style={{
            background: 'rgba(69,197,190,0.1)',
            padding: '1rem 1.5rem',
            fontWeight: 700, fontSize: '0.85rem',
            color: 'var(--teal-dark)',
            letterSpacing: '0.08em', textTransform: 'uppercase',
            display: 'flex', alignItems: 'center', gap: '8px',
          }}>
            <span style={{ fontSize: '1.1rem' }}>⭐</span> Profesional
          </div>
        </div>

        {comparisons.map(({ profesionista, profesional }, i) => (
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
              padding: '0.85rem 1.5rem',
              fontSize: '0.92rem', color: 'var(--text-light)',
              borderRight: '1px solid rgba(226,232,240,0.7)',
              display: 'flex', alignItems: 'center', gap: '8px',
            }}>
              <span style={{ color: '#CBD5E0', fontSize: '0.8rem', flexShrink: 0 }}>●</span>
              {profesionista}
            </div>
            <div style={{
              padding: '0.85rem 1.5rem',
              fontSize: '0.92rem', color: 'var(--navy)',
              fontWeight: 600,
              background: i % 2 === 0 ? 'rgba(69,197,190,0.04)' : 'transparent',
              display: 'flex', alignItems: 'center', gap: '8px',
            }}>
              <span style={{ color: '#45C5BE', fontSize: '0.8rem', flexShrink: 0 }}>●</span>
              {profesional}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        style={{
          background: 'linear-gradient(135deg, #0C2D4E, #163557)',
          borderRadius: '14px',
          padding: '1rem 1.8rem',
          maxWidth: '860px',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>💡</span>
        <p style={{ margin: 0, fontSize: '0.88rem', color: 'rgba(255,255,255,0.85)', fontStyle: 'italic', lineHeight: 1.6 }}>
          Puedes tener título sin ser profesional — y puedes ser un profesional sin tener título.
          En el servicio hospitalario, lo que el paciente recibe es tu actitud, no tu diploma.
        </p>
      </motion.div>
    </div>
  )
}
