import { motion } from 'framer-motion'
import { IconHospital, IconMessage, IconTarget } from '../components/Icons'

const IconClipboard = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
    <rect x="8" y="2" width="8" height="4" rx="1"/>
  </svg>
)

const IconBook = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
  </svg>
)

const pillars = [
  { Icon: IconHospital, label: 'Hospitalidad' },
  { Icon: IconClipboard, label: 'Consultoría' },
  { Icon: IconBook, label: 'Educación Continua' },
  { Icon: IconMessage, label: 'Marketing' },
  { Icon: IconTarget, label: 'Capacitación' },
]

export default function S02_QuienesSomos() {
  return (
    <div className="slide" style={{ padding: '50px 60px 50px 48%', gap: '1.4rem', position: 'relative' }}>

      {/* Background image — right side, fades left */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(/images/2.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'right center',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to left, rgba(238,242,247,0) 0%, rgba(238,242,247,0.6) 36%, rgba(238,242,247,0.97) 52%, #EEF2F7 65%)',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(12,45,78,0.045) 1.5px, transparent 1.5px)',
        backgroundSize: '28px 28px', pointerEvents: 'none',
      }} />

      {/* Right — content */}
      <div style={{
        position: 'relative',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center',
        gap: '1.4rem',
        width: '100%',
      }}>
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="pill" style={{ marginBottom: '0.5rem' }}>Quiénes somos</div>
          <h2 className="slide-title" style={{ fontSize: 'clamp(1.7rem, 3vw, 2.8rem)' }}>
            Una alianza de especialistas
          </h2>
          <div className="teal-bar" style={{ marginTop: '0.7rem' }} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          style={{ fontSize: '0.95rem', color: 'var(--text-light)', lineHeight: 1.7 }}
        >
          <strong style={{ color: 'var(--navy)' }}>Hosperation + Aula Consultoría</strong> somos una alianza dedicada a fortalecer la{' '}
          <strong style={{ color: 'var(--teal-dark)' }}>cultura de servicio</strong> en organizaciones de salud.
        </motion.p>

        {/* Pillars */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{ display: 'flex', gap: '0.7rem', flexWrap: 'wrap' }}
        >
          {pillars.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.08 }}
              whileHover={{ y: -3, boxShadow: '0 8px 24px rgba(12,45,78,0.15)' }}
              style={{
                background: 'white',
                border: '1.5px solid rgba(69,197,190,0.25)',
                borderRadius: '12px',
                padding: '0.6rem 1rem',
                display: 'flex', alignItems: 'center', gap: '7px',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <p.Icon size={18} color="var(--teal-dark)" />
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--navy)' }}>{p.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{
            background: 'linear-gradient(135deg, rgba(12,45,78,0.05), rgba(69,197,190,0.08))',
            border: '1px solid rgba(69,197,190,0.2)',
            borderRadius: '14px',
            padding: '1rem 1.4rem',
          }}
        >
          <p style={{ fontSize: '0.88rem', color: 'var(--navy)', fontWeight: 500, fontStyle: 'italic', lineHeight: 1.6, margin: 0 }}>
            "Nuestra misión: que el personal de salud cuente con herramientas concretas para ofrecer una atención que inspire confianza y genere bienestar."
          </p>
        </motion.div>
      </div>
    </div>
  )
}
