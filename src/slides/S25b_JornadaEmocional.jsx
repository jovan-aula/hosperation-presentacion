import { motion } from 'framer-motion'

// Simple face icons
const FaceHappy = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
    <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="3"/>
    <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="3"/>
  </svg>
)

const FaceNeutral = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="8" y1="15" x2="16" y2="15"/>
    <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="3"/>
    <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="3"/>
  </svg>
)

const FaceSad = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M16 16s-1.5-2-4-2-4 2-4 2"/>
    <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="3"/>
    <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="3"/>
  </svg>
)

const ArrowRight = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(12,45,78,0.2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
)

const steps = [
  {
    phase: 'Antes de entrar',
    sub: 'Sala de espera',
    face: FaceNeutral,
    faceColor: '#718096',
    mood: 'Ansioso, incertidumbre',
    alegria: 1.67,
    desprecio: 0.24,
    alegraWidth: '28%',
    desprecioWidth: '4%',
    highlight: false,
    bg: 'white',
    border: 'rgba(12,45,78,0.12)',
  },
  {
    phase: 'Durante la consulta',
    sub: 'Con el médico / enfermería',
    face: FaceSad,
    faceColor: '#e53e3e',
    mood: 'El momento crítico',
    alegria: 3.34,
    desprecio: 1.96,
    alegraWidth: '56%',
    desprecioWidth: '79%',
    highlight: true,
    bg: 'rgba(229,62,62,0.04)',
    border: '#e53e3e',
  },
  {
    phase: 'Al salir',
    sub: 'Post-consulta',
    face: FaceHappy,
    faceColor: '#38a169',
    mood: 'Más tranquilo, pero...',
    alegria: 5.28,
    desprecio: 2.27,
    alegraWidth: '88%',
    desprecioWidth: '91%',
    highlight: false,
    bg: 'white',
    border: 'rgba(69,197,190,0.3)',
  },
]

export default function S25b_JornadaEmocional() {
  return (
    <div className="slide" style={{
      background: 'linear-gradient(160deg, #EEF2F7 0%, #dff4f3 100%)',
      padding: '36px 64px',
      gap: '1.1rem',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(69,197,190,0.1) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        pointerEvents: 'none',
      }} />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center' }}
      >
        <div className="pill pill--solid" style={{ marginBottom: '0.4rem' }}>Rodríguez Fuertes, 2018 · Neuroimagen</div>
        <h2 className="slide-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.6rem)', margin: 0 }}>
          ¿Cómo se siente el paciente en cada momento?
        </h2>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginTop: '0.3rem' }}>
          Estudio con neuroimagen que midió emociones reales durante la atención médica
        </p>
      </motion.div>

      {/* Timeline */}
      <div style={{
        display: 'flex', alignItems: 'stretch',
        gap: '0.6rem', width: '100%', maxWidth: '960px',
      }}>
        {steps.map((s, i) => (
          <>
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 + i * 0.15 }}
              style={{
                flex: 1,
                background: s.bg,
                border: `2px solid ${s.border}`,
                borderRadius: '18px',
                padding: '1.3rem 1.2rem',
                display: 'flex', flexDirection: 'column', gap: '0.85rem',
                boxShadow: s.highlight ? '0 6px 28px rgba(229,62,62,0.18)' : 'var(--shadow-md)',
                position: 'relative',
              }}
            >
              {/* Phase label */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px' }}>
                <div>
                  <div style={{
                    fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.07em',
                    textTransform: 'uppercase',
                    color: s.highlight ? '#e53e3e' : 'var(--text-light)',
                    marginBottom: '3px',
                  }}>
                    {s.sub}
                  </div>
                  <div style={{
                    fontWeight: 700, fontSize: '1rem',
                    color: s.highlight ? '#c53030' : 'var(--navy)',
                    lineHeight: 1.2,
                  }}>
                    {s.phase}
                  </div>
                </div>
                <div style={{ color: s.faceColor, flexShrink: 0 }}>
                  <s.face size={34} />
                </div>
              </div>

              {/* Mood */}
              <div style={{
                fontSize: '0.78rem', color: s.highlight ? '#c53030' : 'var(--text-light)',
                fontStyle: 'italic', fontWeight: s.highlight ? 700 : 400,
              }}>
                {s.mood}
              </div>

              {/* Emotion bars */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {/* Alegría */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#38a169' }}>😊 Alegría</span>
                    <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#38a169' }}>{s.alegria}</span>
                  </div>
                  <div style={{ height: '10px', background: 'rgba(12,45,78,0.07)', borderRadius: '6px', overflow: 'hidden' }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: s.alegraWidth }}
                      transition={{ duration: 1.2, delay: 0.5 + i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                      style={{ height: '100%', background: 'linear-gradient(90deg, #68d391, #38a169)', borderRadius: '6px' }}
                    />
                  </div>
                </div>
                {/* Desprecio */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#e53e3e' }}>😤 Desprecio</span>
                    <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#e53e3e' }}>{s.desprecio}</span>
                  </div>
                  <div style={{ height: '10px', background: 'rgba(12,45,78,0.07)', borderRadius: '6px', overflow: 'hidden' }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: s.desprecioWidth }}
                      transition={{ duration: 1.2, delay: 0.6 + i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                      style={{ height: '100%', background: s.highlight ? 'linear-gradient(90deg, #fc8181, #e53e3e)' : 'linear-gradient(90deg, #fc8181, #c53030)', borderRadius: '6px' }}
                    />
                  </div>
                </div>
              </div>

              {/* 8× badge on V2 */}
              {s.highlight && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.1, type: 'spring', stiffness: 220 }}
                  style={{
                    position: 'absolute', top: '-18px', right: '16px',
                    background: 'linear-gradient(135deg, #c53030, #e53e3e)',
                    borderRadius: '50px',
                    padding: '4px 14px',
                    boxShadow: '0 4px 16px rgba(229,62,62,0.45)',
                    display: 'flex', alignItems: 'baseline', gap: '4px',
                  }}
                >
                  <span style={{
                    fontFamily: 'DM Serif Display, serif',
                    fontSize: '1.4rem', color: 'white', lineHeight: 1,
                  }}>8×</span>
                  <span style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.85)', fontWeight: 700 }}>
                    más desprecio
                  </span>
                </motion.div>
              )}
            </motion.div>

            {/* Arrow between cards */}
            {i < steps.length - 1 && (
              <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                <ArrowRight />
              </div>
            )}
          </>
        ))}
      </div>

      {/* Bottom insight */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        style={{
          maxWidth: '960px', width: '100%',
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '0.8rem',
        }}
      >
        {/* Key insight */}
        <div style={{
          background: 'linear-gradient(135deg, #0C2D4E, #163557)',
          borderRadius: '14px',
          padding: '1rem 1.4rem',
          display: 'flex', gap: '12px', alignItems: 'center',
        }}>
          <div style={{
            fontSize: '2rem', lineHeight: 1, flexShrink: 0,
          }}>💡</div>
          <div>
            <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'white', lineHeight: 1.3, marginBottom: '3px' }}>
              El trato durante la consulta es el momento que más importa.
            </div>
            <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.45)', fontStyle: 'italic' }}>
              No el edificio, no el equipo — la persona que atiende.
            </div>
          </div>
        </div>

        {/* Takeaway */}
        <div style={{
          background: 'white',
          borderRadius: '14px',
          padding: '1rem 1.4rem',
          border: '2px solid rgba(229,62,62,0.2)',
          display: 'flex', gap: '12px', alignItems: 'center',
          boxShadow: 'var(--shadow-sm)',
        }}>
          <div style={{ fontSize: '2rem', lineHeight: 1, flexShrink: 0 }}>⚠️</div>
          <div>
            <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#c53030', lineHeight: 1.3, marginBottom: '3px' }}>
              El desprecio en la consulta destruye satisfacción.
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-light)', fontStyle: 'italic' }}>
              Incluso si el diagnóstico fue correcto.
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
