import { motion } from 'framer-motion'

const phases = [
  {
    num: '1',
    phase: 'Antes de entrar',
    sub: 'Sala de espera',
    emoji: '😐',
    feeling: 'Ansioso, pero en espera. Todavía tiene control de sus emociones.',
    color: '#718096',
    bg: 'white',
    border: 'rgba(113,128,150,0.25)',
    highlight: false,
  },
  {
    num: '2',
    phase: 'Durante la consulta',
    sub: 'Con el médico o enfermería',
    emoji: '😟',
    feeling: 'Momento más vulnerable. Tiene miedo. Necesita sentirse tomado en cuenta.',
    color: '#e53e3e',
    bg: 'rgba(229,62,62,0.03)',
    border: '#e53e3e',
    highlight: true,
  },
  {
    num: '3',
    phase: 'Al salir / Alta',
    sub: 'Post-consulta',
    emoji: '😌',
    feeling: 'Mucho más tranquilo. La última impresión define cómo recuerda toda la visita.',
    color: '#38a169',
    bg: 'white',
    border: 'rgba(56,161,105,0.25)',
    highlight: false,
  },
]

export default function S25b_JornadaEmocional() {
  return (
    <div className="slide" style={{
      background: 'linear-gradient(160deg, #EEF2F7 0%, #dff4f3 100%)',
      padding: '44px 72px',
      gap: '1.4rem',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(69,197,190,0.08) 1px, transparent 1px)',
        backgroundSize: '28px 28px', pointerEvents: 'none',
      }} />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        style={{ textAlign: 'center' }}
      >
        <div className="pill pill--solid" style={{ marginBottom: '0.5rem' }}>
          Rodríguez Fuertes, 2018 · Neuroimagen y codificación facial en 60 pacientes
        </div>
        <h2 className="slide-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.5rem)', margin: '0 0 0.4rem 0' }}>
          ¿Cómo se siente el paciente en cada momento?
        </h2>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-light)', margin: 0 }}>
          Un estudio midió sus emociones con tecnología de neuroimagen — en tiempo real — durante tres momentos de la atención.
        </p>
      </motion.div>

      {/* 3 phases */}
      <div style={{ display: 'flex', gap: '1.2rem', width: '100%', maxWidth: '980px', alignItems: 'stretch' }}>
        {phases.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
            style={{
              flex: 1,
              background: p.bg,
              border: `2px solid ${p.border}`,
              borderRadius: '20px',
              padding: '1.6rem 1.4rem',
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              textAlign: 'center', gap: '0.9rem',
              position: 'relative',
              boxShadow: p.highlight ? '0 8px 32px rgba(229,62,62,0.18)' : 'var(--shadow-sm)',
            }}
          >
            {/* Step number */}
            <div style={{
              position: 'absolute', top: '-14px',
              width: '28px', height: '28px', borderRadius: '50%',
              background: p.highlight ? '#e53e3e' : p.color,
              color: 'white', fontSize: '0.8rem', fontWeight: 800,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: p.highlight ? '0 4px 12px rgba(229,62,62,0.4)' : 'none',
            }}>{p.num}</div>

            {/* Critical badge */}
            {p.highlight && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1, type: 'spring', stiffness: 220 }}
                style={{
                  position: 'absolute', top: '-14px', right: '16px',
                  background: 'linear-gradient(135deg, #c53030, #e53e3e)',
                  borderRadius: '50px', padding: '3px 12px',
                  boxShadow: '0 4px 14px rgba(229,62,62,0.45)',
                  display: 'flex', alignItems: 'baseline', gap: '4px',
                }}
              >
                <span style={{ fontFamily: 'DM Serif Display, serif', fontSize: '1.2rem', color: 'white', lineHeight: 1 }}>8×</span>
                <span style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.9)', fontWeight: 700 }}>más ignorado</span>
              </motion.div>
            )}

            {/* Phase label */}
            <div>
              <div style={{ fontSize: '0.62rem', fontWeight: 800, color: p.color, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>
                {p.sub}
              </div>
              <div style={{ fontFamily: 'DM Serif Display, serif', fontSize: '1.3rem', color: p.highlight ? '#c53030' : 'var(--navy)', lineHeight: 1.2 }}>
                {p.phase}
              </div>
            </div>

            {/* Emoji */}
            <div style={{ fontSize: '3.5rem', lineHeight: 1 }}>{p.emoji}</div>

            {/* Feeling */}
            <p style={{
              fontSize: '0.85rem', color: p.highlight ? '#742a2a' : 'var(--text-light)',
              lineHeight: 1.6, margin: 0, flex: 1,
              background: p.highlight ? 'rgba(229,62,62,0.06)' : 'rgba(12,45,78,0.04)',
              borderRadius: '10px', padding: '0.7rem 0.8rem',
            }}>
              {p.feeling}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Bottom callout */}
      <motion.div
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        style={{
          width: '100%', maxWidth: '980px',
          background: '#0C2D4E', borderRadius: '16px',
          padding: '1rem 1.8rem',
          display: 'flex', alignItems: 'center', gap: '1.2rem',
        }}
      >
        <div style={{ fontSize: '1.8rem', flexShrink: 0 }}>🔬</div>
        <div>
          <p style={{ fontSize: '0.92rem', fontWeight: 700, color: 'white', margin: '0 0 3px 0', lineHeight: 1.4 }}>
            El momento de <em>más</em> contacto humano es donde el paciente se siente <em>más</em> ignorado.
          </p>
          <p style={{ fontSize: '0.78rem', color: 'rgba(69,197,190,0.85)', margin: 0 }}>
            ¿Qué genera esa sensación? ¿Y qué la elimina? → siguiente diapositiva
          </p>
        </div>
      </motion.div>
    </div>
  )
}
