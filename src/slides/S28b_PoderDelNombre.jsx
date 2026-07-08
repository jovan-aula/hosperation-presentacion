import { motion } from 'framer-motion'

const principles = [
  {
    name: 'Compromiso',
    icon: '🤝',
    desc: 'Al llamar a alguien por nombre, ambas partes se comprometen con la interacción. El trato se vuelve personal — ya no es "el paciente", es una persona.',
    color: '#0C2D4E',
    border: 'rgba(12,45,78,0.2)',
  },
  {
    name: 'Agrado',
    icon: '💛',
    desc: 'Las personas tienden a confiar más y cooperar mejor con quienes las reconocen como individuos. El nombre activa simpatía automática.',
    color: '#2BA8A2',
    border: 'rgba(69,197,190,0.35)',
  },
  {
    name: 'Consistencia',
    icon: '🔄',
    desc: 'Quien usa el nombre una vez, tiende a mantener ese nivel de atención. Crea un estándar interno que eleva toda la interacción.',
    color: '#45C5BE',
    border: 'rgba(69,197,190,0.3)',
  },
]

export default function S28b_PoderDelNombre() {
  return (
    <div className="slide" style={{
      padding: '44px 60px 44px 48%',
      gap: '1.2rem',
      position: 'relative',
    }}>

      {/* Background image — left */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(/images/6.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'left center',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to right, rgba(238,242,247,0) 0%, rgba(238,242,247,0.55) 34%, rgba(238,242,247,0.97) 52%, #EEF2F7 65%)',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(12,45,78,0.04) 1.5px, transparent 1.5px)',
        backgroundSize: '28px 28px', pointerEvents: 'none',
      }} />

      {/* Title floated over image */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          position: 'absolute', left: '2.5rem', bottom: '2.5rem',
          maxWidth: '290px',
        }}
      >
        <div className="pill" style={{ marginBottom: '0.5rem' }}>Psicología del servicio</div>
        <h2 style={{
          fontFamily: 'DM Serif Display, serif',
          fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
          color: '#0C2D4E', fontWeight: 400, lineHeight: 1.15, margin: '0 0 0.4rem',
          textShadow: '0 1px 12px rgba(238,242,247,0.9)',
        }}>
          El nombre<br />lo cambia todo
        </h2>
        <p style={{
          fontSize: '0.75rem', color: 'var(--text-light)', lineHeight: 1.5,
          textShadow: '0 1px 8px rgba(238,242,247,0.9)',
        }}>
          Cialdini, R. B.<br /><em>Influence</em> (1984)
        </p>
      </motion.div>

      {/* Right — content */}
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>

        {/* Before / After */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          style={{
            background: 'white', borderRadius: '16px', padding: '1.1rem 1.3rem',
            boxShadow: 'var(--shadow-md)', border: '1.5px solid rgba(69,197,190,0.25)',
            display: 'flex', flexDirection: 'column', gap: '0.65rem',
          }}
        >
          <div style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            La diferencia en la práctica
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.7rem' }}>
            <div style={{
              background: 'rgba(229,62,62,0.05)', border: '1.5px solid rgba(229,62,62,0.2)',
              borderRadius: '10px', padding: '0.75rem',
            }}>
              <div style={{ fontSize: '0.62rem', fontWeight: 700, color: '#e53e3e', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '5px' }}>
                Sin nombre
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--navy)', margin: 0, lineHeight: 1.45, fontStyle: 'italic' }}>
                "Buenos días, ¿en qué le puedo ayudar?"
              </p>
            </div>
            <div style={{
              background: 'rgba(69,197,190,0.06)', border: '1.5px solid rgba(69,197,190,0.3)',
              borderRadius: '10px', padding: '0.75rem',
            }}>
              <div style={{ fontSize: '0.62rem', fontWeight: 700, color: 'var(--teal-dark)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '5px' }}>
                Con nombre ✓
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--navy)', margin: 0, lineHeight: 1.45, fontStyle: 'italic' }}>
                "Buenos días, <strong>señora García</strong>. ¿En qué le puedo ayudar?"
              </p>
            </div>
          </div>
        </motion.div>

        {/* 3 Principles */}
        {principles.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.35 + i * 0.12 }}
            style={{
              background: 'white', borderRadius: '13px',
              padding: '0.85rem 1.1rem',
              boxShadow: 'var(--shadow-sm)',
              border: `1.5px solid ${p.border}`,
              display: 'flex', alignItems: 'flex-start', gap: '12px',
            }}
          >
            <div style={{ fontSize: '1.3rem', lineHeight: 1, flexShrink: 0 }}>{p.icon}</div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.85rem', color: p.color, marginBottom: '3px' }}>
                Principio de {p.name}
              </div>
              <p style={{ fontSize: '0.77rem', color: 'var(--text-light)', margin: 0, lineHeight: 1.5 }}>
                {p.desc}
              </p>
            </div>
          </motion.div>
        ))}

        {/* Rule */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85 }}
          style={{
            background: 'linear-gradient(135deg, #0C2D4E, #163557)',
            borderRadius: '12px', padding: '0.85rem 1.2rem',
            display: 'flex', gap: '12px', alignItems: 'center',
          }}
        >
          <div style={{
            fontFamily: 'DM Serif Display, serif',
            fontSize: '1.8rem', color: '#45C5BE', lineHeight: 1, flexShrink: 0,
          }}>3×</div>
          <p style={{ fontSize: '0.83rem', fontWeight: 600, color: 'white', margin: 0, lineHeight: 1.45 }}>
            Usa el nombre al menos <strong style={{ color: '#45C5BE' }}>3 veces</strong> en cada interacción: al saludar, durante la atención y al despedirte.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
