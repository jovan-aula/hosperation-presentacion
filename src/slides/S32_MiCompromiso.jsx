import { motion } from 'framer-motion'

const questions = [
  { icon: '💪', text: '¿Qué conducta voy a fortalecer?' },
  { icon: '🔄', text: '¿Qué haré de manera diferente?' },
  { icon: '🌟', text: '¿Cómo impactará a pacientes, familiares o compañeros?' },
]

export default function S32_MiCompromiso() {
  return (
    <div className="slide" style={{
      background: 'linear-gradient(160deg, #EEF2F7 0%, #e0ecf5 100%)',
      padding: '55px 80px',
      gap: '1.8rem',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(69,197,190,0.1) 1.5px, transparent 1.5px)',
        backgroundSize: '28px 28px',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-80px', right: '-80px',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(69,197,190,0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', maxWidth: '700px' }}
      >
        <div className="pill pill--solid" style={{ marginBottom: '0.7rem' }}>Cierre reflexivo</div>
        <h2 className="slide-title">Mi compromiso con el servicio</h2>
        <div style={{ width: '60px', height: '4px', background: 'linear-gradient(90deg, #45C5BE, #2BA8A2)', borderRadius: '2px', margin: '0.8rem auto' }} />
        <p style={{ fontSize: '1rem', color: 'var(--text)', lineHeight: 1.7 }}>
          La profesionalización del servicio se construye en{' '}
          <strong>decisiones pequeñas y acciones consistentes.</strong>
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{
          background: 'white',
          borderRadius: '20px',
          padding: '1.2rem 2rem',
          boxShadow: 'var(--shadow-md)',
          border: '2px solid rgba(69,197,190,0.3)',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '1.05rem', color: 'var(--teal-dark)', fontWeight: 700, margin: 0 }}>
          "A partir de mañana me comprometo a..."
        </p>
      </motion.div>

      <div style={{ display: 'flex', gap: '1.2rem', maxWidth: '840px', width: '100%' }}>
        {questions.map((q, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 + i * 0.12 }}
            style={{
              flex: 1,
              background: 'white',
              borderRadius: '20px',
              padding: '1.8rem 1.4rem',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem',
              boxShadow: 'var(--shadow-md)',
              border: '1.5px solid rgba(69,197,190,0.25)',
              textAlign: 'center',
            }}
          >
            <span style={{ fontSize: '2.2rem' }}>{q.icon}</span>
            <div style={{ width: '40px', height: '3px', background: 'linear-gradient(90deg, #45C5BE, #2BA8A2)', borderRadius: '2px' }} />
            <p style={{ fontSize: '0.9rem', color: 'var(--navy)', fontWeight: 600, lineHeight: 1.5, margin: 0 }}>{q.text}</p>
            {/* Writing lines */}
            <div style={{ width: '100%', marginTop: '0.3rem' }}>
              {[1,2,3].map((l) => (
                <div key={l} style={{ height: '1px', background: 'rgba(69,197,190,0.2)', margin: '8px 0', borderRadius: '0.5px' }} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.85 }}
        style={{
          background: 'linear-gradient(135deg, #0C2D4E, #163557)',
          borderRadius: '14px',
          padding: '1rem 2.5rem',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '0.92rem', color: 'white', fontWeight: 600, margin: 0, letterSpacing: '0.02em' }}>
          "Una cultura de excelencia comienza con una acción concreta."
        </p>
      </motion.div>
    </div>
  )
}
