import { motion } from 'framer-motion'

const parts = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="12" r="7" fill="#45C5BE" opacity="0.9"/>
        <path d="M6 30 C6 23, 30 23, 30 30" stroke="#45C5BE" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        <path d="M18 5 L18 19M12 12 L24 12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    label: 'Hospitalidad',
    color: '#45C5BE',
    desc: 'Acogemos con calidez, respeto y empatía.',
    bg: 'rgba(69,197,190,0.08)',
    border: 'rgba(69,197,190,0.3)',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="6" y="8" width="24" height="20" rx="5" fill="#0C2D4E" opacity="0.9"/>
        <path d="M13 18 L16 21 L23 15" stroke="#45C5BE" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'Servicio',
    color: '#0C2D4E',
    desc: 'Actuamos con compromiso, eficiencia y calidad.',
    bg: 'rgba(12,45,78,0.06)',
    border: 'rgba(12,45,78,0.2)',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M18 4 L22 14 L33 14 L24 21 L27 32 L18 25 L9 32 L12 21 L3 14 L14 14 Z" fill="#45C5BE" opacity="0.9"/>
      </svg>
    ),
    label: 'Experiencia',
    color: '#2BA8A2',
    desc: 'Creamos momentos que generan bienestar y confianza.',
    bg: 'rgba(43,168,162,0.08)',
    border: 'rgba(43,168,162,0.3)',
  },
]

export default function S18_ComoSeIntegra() {
  return (
    <div className="slide bg-dots" style={{ gap: '2rem' }}>
      <div className="corner-accent" />

      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center' }}
      >
        <h2 className="slide-title">¿Cómo se integra?</h2>
        <p className="slide-subtitle">La ecuación del servicio excelente</p>
      </motion.div>

      <div style={{
        display: 'flex', alignItems: 'center', gap: '1rem',
        maxWidth: '900px', width: '100%',
        justifyContent: 'center',
      }}>
        {parts.map((part, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1 }}>
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -5, boxShadow: '0 16px 40px rgba(12,45,78,0.18)' }}
              style={{
                flex: 1,
                background: part.bg,
                border: `2px solid ${part.border}`,
                borderRadius: '20px',
                padding: '1.8rem 1.2rem',
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem',
                textAlign: 'center',
                cursor: 'default',
                transition: 'box-shadow 0.2s',
                boxShadow: 'var(--shadow-sm)',
                background: 'white',
              }}
            >
              <div style={{
                width: '64px', height: '64px', borderRadius: '16px',
                background: part.bg,
                border: `2px solid ${part.border}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {part.icon}
              </div>
              <div style={{
                fontFamily: 'DM Serif Display, serif',
                fontSize: '1.4rem',
                color: part.color,
                fontWeight: 400,
              }}>
                {part.label}
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', lineHeight: 1.5, margin: 0 }}>
                {part.desc}
              </p>
            </motion.div>

            {/* Operator */}
            {i < parts.length - 1 && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.18 }}
                style={{
                  fontFamily: 'DM Serif Display, serif',
                  fontSize: '2rem',
                  color: 'var(--teal)',
                  fontWeight: 400,
                  flexShrink: 0,
                }}
              >
                {i === 0 ? '+' : '='}
              </motion.div>
            )}
          </div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        style={{ fontSize: '0.88rem', color: 'var(--text-light)', fontStyle: 'italic', textAlign: 'center' }}
      >
        La suma de hospitalidad y servicio genera la experiencia memorable.
      </motion.p>
    </div>
  )
}
