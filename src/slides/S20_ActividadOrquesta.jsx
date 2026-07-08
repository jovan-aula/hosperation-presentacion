import { motion } from 'framer-motion'
import { IconClock, IconTeam, IconLightbulb } from '../components/Icons'

const IconMusic = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#45C5BE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18V5l12-2v13"/>
    <circle cx="6" cy="18" r="3"/>
    <circle cx="18" cy="16" r="3"/>
  </svg>
)

const IconMic = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
    <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8"/>
  </svg>
)

// Pre-filled examples to anchor the metaphor
const examples = [
  {
    area: 'Recepción',
    instrument: 'Violín principal',
    why: 'Es el primer sonido que escucha el paciente. Una nota fría o apresurada desafina toda la experiencia.',
    color: '#0C2D4E',
    bg: 'rgba(12,45,78,0.07)',
  },
  {
    area: 'Enfermería',
    instrument: 'Percusión',
    why: 'Mantiene el ritmo de la atención. Sin su presencia constante, el paciente pierde el pulso de lo que está pasando.',
    color: '#2BA8A2',
    bg: 'rgba(43,168,162,0.08)',
  },
  {
    area: 'Limpieza',
    instrument: 'El silencio entre notas',
    why: 'Invisible cuando funciona; imposible ignorar cuando no. Su ausencia contamina la percepción de todo lo demás.',
    color: '#6B7280',
    bg: 'rgba(107,114,128,0.07)',
  },
]

const steps = [
  {
    num: 1,
    time: '3 min',
    Icon: IconLightbulb,
    title: 'Individual',
    desc: '¿Qué instrumento representa mejor a tu área y por qué? Piénsalo solo primero.',
  },
  {
    num: 2,
    time: '5 min',
    Icon: IconTeam,
    title: 'En equipo',
    desc: 'Comparte con tu mesa. Discutan: ¿qué pasa cuando ese instrumento falla o llega tarde?',
  },
  {
    num: 3,
    time: '2 min',
    Icon: IconMic,
    title: 'Al grupo',
    desc: 'Un representante por área comparte su instrumento y su respuesta. Una sola oración basta.',
  },
]

export default function S20_ActividadOrquesta() {
  return (
    <div className="slide" style={{
      background: 'linear-gradient(160deg, #EEF2F7 0%, #dde8f5 100%)',
      gap: '1rem',
      padding: '40px 64px',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(12,45,78,0.045) 1.5px, transparent 1.5px)',
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
        <div className="activity-badge" style={{ marginBottom: '0.35rem' }}>Actividad grupal · 10 minutos</div>
        <h2 className="slide-title" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', marginBottom: '0.2rem' }}>
          La orquesta hospitalaria
        </h2>
        <p className="slide-subtitle" style={{ fontSize: '0.9rem' }}>
          Si el hospital fuera una orquesta, ¿qué instrumento sería tu área?
        </p>
      </motion.div>

      {/* Two-column layout */}
      <div style={{
        display: 'grid', gridTemplateColumns: '1.2fr 1fr',
        gap: '1.4rem', width: '100%', maxWidth: '1020px',
      }}>

        {/* Left — Examples */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            background: 'white',
            borderRadius: '18px',
            padding: '1.3rem',
            boxShadow: 'var(--shadow-md)',
            border: '1.5px solid rgba(69,197,190,0.2)',
            display: 'flex', flexDirection: 'column', gap: '0.85rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.1rem' }}>
            <IconMusic />
            <span style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--teal-dark)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Ejemplos para orientarte
            </span>
          </div>

          {examples.map((ex, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              style={{
                background: ex.bg,
                borderRadius: '12px',
                padding: '0.8rem 1rem',
                borderLeft: `3px solid ${ex.color}`,
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '3px', gap: '8px', flexWrap: 'wrap' }}>
                <span style={{ fontWeight: 700, fontSize: '0.82rem', color: 'var(--navy)' }}>{ex.area}</span>
                <span style={{
                  fontSize: '0.7rem', fontWeight: 600,
                  background: `${ex.color}18`, color: ex.color,
                  borderRadius: '6px', padding: '1px 8px', flexShrink: 0,
                }}>
                  {ex.instrument}
                </span>
              </div>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-light)', lineHeight: 1.5, margin: 0 }}>
                {ex.why}
              </p>
            </motion.div>
          ))}

          <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontStyle: 'italic', margin: 0, textAlign: 'center' }}>
            No hay respuestas incorrectas. Lo que importa es la reflexión.
          </p>
        </motion.div>

        {/* Right — Steps */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}
        >
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.12 }}
              style={{
                background: 'white',
                borderRadius: '14px',
                padding: '1rem 1.2rem',
                boxShadow: 'var(--shadow-sm)',
                border: '1.5px solid rgba(69,197,190,0.15)',
                display: 'flex', gap: '1rem', alignItems: 'flex-start',
              }}
            >
              <div style={{
                width: '38px', height: '38px', borderRadius: '50%', flexShrink: 0,
                background: 'linear-gradient(135deg, #45C5BE, #2BA8A2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'white', fontWeight: 800, fontSize: '0.9rem',
              }}>
                {s.num}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3px' }}>
                  <span style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--navy)' }}>{s.title}</span>
                  <span style={{
                    display: 'flex', alignItems: 'center', gap: '4px',
                    fontSize: '0.68rem', color: 'var(--teal-dark)', fontWeight: 600,
                    background: 'rgba(69,197,190,0.1)', borderRadius: '6px', padding: '1px 7px',
                  }}>
                    <IconClock size={11} color="#2BA8A2" />
                    {s.time}
                  </span>
                </div>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-light)', lineHeight: 1.5, margin: 0 }}>
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Key question */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            style={{
              background: 'linear-gradient(135deg, #0C2D4E, #163557)',
              borderRadius: '14px',
              padding: '1rem 1.2rem',
              display: 'flex', gap: '10px', alignItems: 'flex-start',
            }}
          >
            <div style={{
              width: '32px', height: '32px', borderRadius: '8px', flexShrink: 0,
              background: 'rgba(69,197,190,0.18)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <IconTeam size={16} color="#45C5BE" />
            </div>
            <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.82)', lineHeight: 1.5, margin: 0 }}>
              Pregunta clave: <strong style={{ color: '#45C5BE' }}>¿Cómo afecta el trabajo de tu área a la experiencia del paciente, aunque nunca lo veas en persona?</strong>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
