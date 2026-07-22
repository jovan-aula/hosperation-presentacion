import { motion } from 'framer-motion'
import { IconClock, IconTeam } from '../components/Icons'

const IconSearch = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/>
    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
)

const IconStar = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#FBBC04" stroke="#FBBC04" strokeWidth="1">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
  </svg>
)

const IconStarEmpty = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#d1d5db" stroke="#d1d5db" strokeWidth="1">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
  </svg>
)

const steps = [
  {
    num: '01',
    icon: IconSearch,
    label: 'Busca un hospital en Google Maps',
    sub: 'Cualquiera — de tu ciudad, uno conocido, o el tuyo propio',
    color: '#0C2D4E',
  },
  {
    num: '02',
    icon: () => <span style={{ fontSize: '1rem' }}>⭐</span>,
    label: 'Lee 2 reseñas positivas y 2 negativas',
    sub: 'Léanlas en voz alta al equipo',
    color: '#2BA8A2',
  },
  {
    num: '03',
    icon: IconTeam,
    label: 'Encuentren el patrón',
    sub: '¿Qué tienen en común las positivas? ¿Y las negativas?',
    color: '#0C2D4E',
  },
]

const preguntas = [
  '¿Qué palabras se repiten en las reseñas negativas?',
  '¿Qué fue lo que más valoraron en las positivas — la clínica o el trato?',
  '¿Reconocen alguna de esas situaciones en su propio trabajo?',
]

export default function S13c_ActividadResenas() {
  return (
    <div className="slide" style={{
      background: 'linear-gradient(160deg, #EEF2F7 0%, #dde9f5 100%)',
      padding: '44px 72px',
      gap: '1.3rem',
    }}>
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
        <div className="pill pill--solid" style={{ marginBottom: '0.4rem', background: '#0C2D4E', color: 'white', borderColor: '#0C2D4E' }}>
          Actividad grupal · 10 minutos
        </div>
        <h2 className="slide-title" style={{ fontSize: 'clamp(1.7rem, 3vw, 2.6rem)', margin: 0 }}>
          Busca un hospital en Google Maps.
        </h2>
        <p className="slide-subtitle" style={{ fontSize: '0.95rem', marginTop: '0.35rem' }}>
          2 reseñas buenas · 2 reseñas malas · ¿qué tienen en común?
        </p>
      </motion.div>

      {/* Steps */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25 }}
        style={{ display: 'flex', gap: '1rem', width: '100%', maxWidth: '860px' }}
      >
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.12 }}
            style={{
              flex: 1,
              background: 'white',
              borderRadius: '16px',
              padding: '1.2rem 1.1rem',
              boxShadow: 'var(--shadow-md)',
              border: `1.5px solid ${s.color}20`,
              display: 'flex', flexDirection: 'column', gap: '0.7rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '36px', height: '36px', borderRadius: '10px', flexShrink: 0,
                background: `${s.color}12`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: s.color,
              }}>
                <s.icon size={18} color={s.color} />
              </div>
              <span style={{
                fontSize: '0.65rem', fontWeight: 800,
                color: s.color, letterSpacing: '0.12em',
              }}>{s.num}</span>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--navy)', lineHeight: 1.3, marginBottom: '0.25rem' }}>
                {s.label}
              </div>
              <div style={{ fontSize: '0.74rem', color: 'var(--text-light)', lineHeight: 1.5 }}>
                {s.sub}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Questions + visual */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1.2rem',
          width: '100%',
          maxWidth: '860px',
        }}
      >
        {/* Questions */}
        <div style={{
          background: '#0C2D4E',
          borderRadius: '16px',
          padding: '1.3rem 1.4rem',
          display: 'flex', flexDirection: 'column', gap: '0.75rem',
        }}>
          <div style={{ fontSize: '0.65rem', fontWeight: 800, color: '#45C5BE', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            Preguntas guía para el equipo
          </div>
          {preguntas.map((p, i) => (
            <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <span style={{
                fontSize: '0.7rem', fontWeight: 800, color: '#45C5BE', flexShrink: 0, paddingTop: '1px',
              }}>{i + 1}.</span>
              <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.88)', lineHeight: 1.55, margin: 0 }}>
                {p}
              </p>
            </div>
          ))}
        </div>

        {/* Rating visual */}
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '1.3rem 1.4rem',
          display: 'flex', flexDirection: 'column', gap: '0.9rem',
          boxShadow: 'var(--shadow-sm)',
          border: '1.5px solid rgba(69,197,190,0.2)',
        }}>
          <div style={{ fontSize: '0.65rem', fontWeight: 800, color: 'var(--navy)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Lo que buscan
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ display: 'flex', gap: '2px' }}>
                {[1,2,3,4,5].map(i => <IconStar key={i} />)}
              </div>
              <span style={{ fontSize: '0.8rem', color: 'var(--navy)', fontWeight: 600 }}>¿Qué generó esta experiencia?</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ display: 'flex', gap: '2px' }}>
                {[1,2].map(i => <IconStar key={i} />)}
                {[3,4,5].map(i => <IconStarEmpty key={i} />)}
              </div>
              <span style={{ fontSize: '0.8rem', color: 'var(--navy)', fontWeight: 600 }}>¿Qué salió mal exactamente?</span>
            </div>
          </div>
          <div style={{
            background: 'rgba(69,197,190,0.08)',
            borderRadius: '10px',
            padding: '0.7rem 0.9rem',
            borderLeft: '3px solid #45C5BE',
          }}>
            <p style={{ fontSize: '0.78rem', color: 'var(--navy)', lineHeight: 1.55, margin: 0, fontWeight: 600 }}>
              Spoiler: casi nunca es sobre la medicina.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        style={{ fontSize: '0.76rem', color: 'var(--text-muted)', textAlign: 'center', fontStyle: 'italic' }}
      >
        Cada equipo presenta 1 hallazgo al grupo · ¿coinciden los patrones?
      </motion.p>
    </div>
  )
}
