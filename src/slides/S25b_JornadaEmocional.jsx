import { motion } from 'framer-motion'

const journeySteps = [
  {
    code: 'V1',
    label: 'Antes de ingresar',
    sublabel: 'Antesala / Pre-consulta',
    alegria: 1.67,
    desprecio: 0.24,
    implicacion: 18.25,
    color: '#0C2D4E',
    note: 'Incertidumbre y ansiedad dominan; la alegría es mínima.',
  },
  {
    code: 'V2',
    label: 'Durante la atención',
    sublabel: 'Consulta / Exploración',
    alegria: 3.34,
    desprecio: 1.96,
    implicacion: 25.80,
    color: '#45C5BE',
    note: 'El desprecio se DISPARA: 8× vs V1. La interacción define la experiencia.',
  },
  {
    code: 'V3',
    label: 'Al salir',
    sublabel: 'Post-consulta / Hospitalización',
    alegria: 5.28,
    desprecio: 2.27,
    implicacion: 24.54,
    color: '#2BA8A2',
    note: 'La alegría crece, pero el desprecio permanece elevado. El daño no se borra fácil.',
  },
]

const correlations = [
  { label: 'Desprecio ↔ Satisfacción Global', r: '-0.353', p: 'p<0.05 (AP)', color: '#e53e3e' },
  { label: 'Desprecio ↔ Satisfacción Global', r: '-0.351', p: 'p<0.05 (AE)', color: '#e53e3e' },
  { label: 'Disgusto ↔ Satisfacción Personas', r: '-0.386', p: 'p<0.05 (AE)', color: '#dd6b20' },
  { label: 'Desprecio ↔ Satisfacción Organización', r: '-0.365', p: 'p<0.05 (AE)', color: '#e53e3e' },
]

function Bar({ value, max, color }) {
  return (
    <div style={{ flex: 1, background: 'rgba(12,45,78,0.08)', borderRadius: '4px', height: '8px', overflow: 'hidden' }}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${(value / max) * 100}%` }}
        transition={{ duration: 1.2, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ height: '100%', background: color, borderRadius: '4px' }}
      />
    </div>
  )
}

export default function S25b_JornadaEmocional() {
  return (
    <div className="slide" style={{
      background: 'linear-gradient(160deg, #EEF2F7 0%, #dff4f3 100%)',
      padding: '44px 72px',
      gap: '1.2rem',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(69,197,190,0.1) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        pointerEvents: 'none',
      }} />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center' }}
      >
        <div className="pill pill--solid" style={{ marginBottom: '0.4rem' }}>Neurociencia aplicada · Rodríguez Fuertes, 2018</div>
        <h2 className="slide-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.8rem)' }}>
          El viaje emocional del paciente
        </h2>
        <p className="slide-subtitle" style={{ fontSize: '0.95rem' }}>
          Primer estudio en España que mide emociones con neuroimagen durante la experiencia sanitaria
        </p>
      </motion.div>

      {/* Journey grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1rem', width: '100%', maxWidth: '920px',
        }}
      >
        {journeySteps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
            style={{
              background: 'white',
              borderRadius: '16px',
              padding: '1.2rem',
              boxShadow: 'var(--shadow-md)',
              border: `2px solid ${step.color}30`,
              display: 'flex', flexDirection: 'column', gap: '0.7rem',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <div style={{
                  background: step.color, color: 'white',
                  borderRadius: '8px', padding: '2px 10px',
                  fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.06em',
                  display: 'inline-block', marginBottom: '4px',
                }}>
                  {step.code}
                </div>
                <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--navy)', lineHeight: 1.2 }}>{step.label}</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-light)' }}>{step.sublabel}</div>
              </div>
            </div>

            {/* Metrics */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#38a169', width: '70px', flexShrink: 0 }}>Alegría</span>
                <Bar value={step.alegria} max={6} color="#38a169" />
                <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#38a169', width: '30px', textAlign: 'right' }}>{step.alegria}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#e53e3e', width: '70px', flexShrink: 0 }}>Desprecio</span>
                <Bar value={step.desprecio} max={6} color="#e53e3e" />
                <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#e53e3e', width: '30px', textAlign: 'right' }}>{step.desprecio}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#45C5BE', width: '70px', flexShrink: 0 }}>Implicación</span>
                <Bar value={step.implicacion} max={30} color="#45C5BE" />
                <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#45C5BE', width: '30px', textAlign: 'right' }}>{step.implicacion}</span>
              </div>
            </div>

            <p style={{
              fontSize: '0.72rem', color: step.code === 'V2' ? '#e53e3e' : 'var(--text-light)',
              fontStyle: 'italic', lineHeight: 1.4, margin: 0,
              fontWeight: step.code === 'V2' ? 700 : 400,
            }}>
              {step.note}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Correlations */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.85 }}
        style={{
          maxWidth: '920px', width: '100%',
          background: 'white', borderRadius: '14px',
          padding: '1rem 1.4rem',
          boxShadow: 'var(--shadow-sm)',
          border: '1px solid rgba(229,62,62,0.2)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '0.6rem' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#e53e3e' }} />
          <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--navy)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Correlaciones significativas (Tabla 79-81)
          </span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem' }}>
          {correlations.map((c, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{
                fontSize: '0.82rem', fontWeight: 800, color: c.color,
                background: `${c.color}15`, borderRadius: '6px', padding: '2px 8px', flexShrink: 0,
              }}>
                r = {c.r}
              </span>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-light)' }}>
                {c.label} <span style={{ color: 'var(--text-muted)' }}>({c.p})</span>
              </span>
            </div>
          ))}
        </div>
        <p style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginTop: '0.5rem', fontStyle: 'italic' }}>
          Rodríguez Fuertes, A. (2018). <em>Emociones e Interacciones Sociales en Experiencia Sanitaria</em>. Universidad Autónoma de Madrid.
        </p>
      </motion.div>
    </div>
  )
}
