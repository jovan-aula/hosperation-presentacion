import { motion } from 'framer-motion'
import { IconHospital, IconMessage, IconTarget } from '../components/Icons'

const stagger = {
  animate: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
}
const item = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

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
    <div className="slide bg-dots" style={{ justifyContent: 'center', gap: '2rem' }}>
      <div className="corner-accent" />

      <motion.div variants={stagger} initial="initial" animate="animate"
        style={{ width: '100%', maxWidth: '860px', display: 'flex', flexDirection: 'column', gap: '1.8rem', alignItems: 'center', textAlign: 'center' }}>

        <motion.div variants={item}>
          <div className="pill" style={{ marginBottom: '0.5rem' }}>Quiénes somos</div>
        </motion.div>

        <motion.h2 variants={item} className="slide-title">
          Una alianza de especialistas
        </motion.h2>

        <motion.div variants={item} style={{ width: '60px', height: '4px', background: 'linear-gradient(90deg, #45C5BE, #2BA8A2)', borderRadius: '2px', margin: '0 auto' }} />

        <motion.p variants={item} style={{
          fontSize: 'clamp(1rem, 1.8vw, 1.3rem)',
          color: 'var(--text)',
          lineHeight: 1.75,
          maxWidth: '700px',
        }}>
          <strong>Hosperation + Aula Consultoría</strong> somos una alianza dedicada a fortalecer la{' '}
          <strong style={{ color: 'var(--teal-dark)' }}>cultura de servicio</strong> en organizaciones de salud.
          Nuestro propósito: hacer que cada interacción sea{' '}
          <strong>clara, humana y profesional.</strong>
        </motion.p>

        {/* Pillars */}
        <motion.div variants={item} style={{
          display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center',
          marginTop: '0.5rem',
        }}>
          {pillars.map((p) => (
            <motion.div
              key={p.label}
              whileHover={{ y: -3, boxShadow: '0 8px 24px rgba(12,45,78,0.15)' }}
              style={{
                background: 'white',
                border: '1.5px solid rgba(69,197,190,0.25)',
                borderRadius: '12px',
                padding: '0.7rem 1.2rem',
                display: 'flex', alignItems: 'center', gap: '8px',
                boxShadow: 'var(--shadow-sm)',
                cursor: 'default',
              }}
            >
              <div style={{ color: 'var(--teal-dark)', flexShrink: 0 }}>
                <p.Icon size={20} color="var(--teal-dark)" />
              </div>
              <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--navy)' }}>{p.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={item} style={{
          background: 'linear-gradient(135deg, rgba(12,45,78,0.05), rgba(69,197,190,0.08))',
          border: '1px solid rgba(69,197,190,0.2)',
          borderRadius: '16px',
          padding: '1.2rem 2rem',
          maxWidth: '680px',
        }}>
          <p style={{ fontSize: '1rem', color: 'var(--navy)', fontWeight: 500, fontStyle: 'italic', lineHeight: 1.6 }}>
            "Nuestra misión es que el personal de salud cuente con herramientas concretas para ofrecer una atención que inspire confianza y genere bienestar."
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}
