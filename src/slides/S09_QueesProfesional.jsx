import { motion } from 'framer-motion'

const bullets = [
  'Sabe lo que hace.',
  'Comprende por qué lo hace.',
  'Actúa con ética y responsabilidad.',
  'Responde con disciplina y criterio.',
  'Aprende y mejora continuamente.',
]

export default function S09_QueesProfesional() {
  return (
    <div className="slide bg-dots" style={{ padding: '60px 80px' }}>
      <div className="corner-accent" />

      <div className="grid-split" style={{ maxWidth: '960px', width: '100%', gridTemplateColumns: '1fr 1.4fr', gap: '3.5rem' }}>
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}
        >
          <div className="pill">Conceptos clave</div>
          <h2 className="slide-title">¿Qué es un profesional?</h2>
          <div className="teal-bar" />
          <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', lineHeight: 1.65 }}>
            Más allá del título o credencial, un profesional es quien asume su trabajo con un estándar que va más allá de cumplir.
          </p>

          <div style={{
            marginTop: '0.5rem',
            background: 'linear-gradient(135deg, #0C2D4E, #163557)',
            borderRadius: '16px',
            padding: '1.4rem',
            color: 'white',
          }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>📖</div>
            <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', fontStyle: 'italic', lineHeight: 1.55, margin: 0 }}>
              Benner, P. (1984). <em>From Novice to Expert: Excellence and Power in Clinical Nursing Practice.</em> Addison-Wesley.
            </p>
          </div>
        </motion.div>

        {/* Right: bullets */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
          {bullets.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.2 + i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                display: 'flex', alignItems: 'center', gap: '1rem',
                background: 'white',
                borderRadius: '12px',
                padding: '1rem 1.3rem',
                boxShadow: 'var(--shadow-sm)',
                border: '1px solid rgba(69,197,190,0.18)',
              }}
            >
              <div style={{
                width: '32px', height: '32px', borderRadius: '50%',
                background: 'linear-gradient(135deg, #45C5BE, #2BA8A2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'white', fontWeight: 700, fontSize: '0.85rem',
                flexShrink: 0,
              }}>
                {i + 1}
              </div>
              <span style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)', color: 'var(--text)', fontWeight: 500 }}>
                {b}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
