import { motion } from 'framer-motion'

const IconUser = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
)

const IconBriefcase = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2"/>
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
    <line x1="12" y1="12" x2="12" y2="12.01"/>
    <path d="M2 12h20"/>
  </svg>
)

const IconHeart = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
)

const items = [
  {
    num: '01',
    icon: IconUser,
    label: 'Tu nombre',
    sub: '¿Cómo te llamas?',
    color: '#45C5BE',
  },
  {
    num: '02',
    icon: IconBriefcase,
    label: 'Tu actividad',
    sub: '¿Qué haces en el hospital?',
    color: '#2BA8A2',
  },
  {
    num: '03',
    icon: IconHeart,
    label: 'Tu compromiso',
    sub: '¿Qué esperas llevarte de esta capacitación?',
    color: '#0C2D4E',
  },
]

export default function S04b_ActividadPresentacion() {
  return (
    <div className="slide" style={{
      background: 'linear-gradient(160deg, #EEF2F7 0%, #dde9f5 100%)',
      padding: '48px 72px',
      gap: '1.5rem',
    }}>
      {/* dots */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(12,45,78,0.06) 1px, transparent 1px)',
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
        <div className="pill pill--solid" style={{ marginBottom: '0.5rem', background: '#0C2D4E', color: 'white', borderColor: '#0C2D4E' }}>
          Dinámica de inicio
        </div>
        <h2 className="slide-title" style={{ fontSize: 'clamp(1.8rem, 3.2vw, 3rem)', margin: 0 }}>
          Conociéndonos
        </h2>
        <p className="slide-subtitle" style={{ fontSize: '1rem', marginTop: '0.4rem' }}>
          Preséntate con el grupo compartiendo estas tres cosas
        </p>
      </motion.div>

      {/* Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1.4rem',
        width: '100%',
        maxWidth: '900px',
      }}>
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.15, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              background: 'white',
              borderRadius: '20px',
              padding: '2rem 1.5rem',
              boxShadow: '0 4px 24px rgba(12,45,78,0.10)',
              border: `2px solid ${item.color}30`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              gap: '1rem',
            }}
          >
            {/* Number badge */}
            <div style={{
              width: '48px', height: '48px', borderRadius: '14px',
              background: `${item.color}15`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: item.color,
            }}>
              <item.icon />
            </div>

            <div style={{
              fontSize: '0.65rem', fontWeight: 800,
              color: item.color,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
            }}>
              {item.num}
            </div>

            <div>
              <div style={{
                fontFamily: 'DM Serif Display, serif',
                fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)',
                color: 'var(--navy)',
                lineHeight: 1.2,
                marginBottom: '0.4rem',
              }}>
                {item.label}
              </div>
              <div style={{
                fontSize: '0.85rem',
                color: 'var(--text-light)',
                lineHeight: 1.5,
              }}>
                {item.sub}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer note */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        style={{
          fontSize: '0.8rem',
          color: 'var(--text-muted)',
          textAlign: 'center',
          fontStyle: 'italic',
          maxWidth: '600px',
        }}
      >
        Cada participante toma 1–2 minutos · No hay respuestas incorrectas · Tu experiencia es parte del aprendizaje
      </motion.p>
    </div>
  )
}
