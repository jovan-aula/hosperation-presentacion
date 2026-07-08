import { motion } from 'framer-motion'
import { IconHandshake, IconTarget } from '../components/Icons'

const IconPhoneOff = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="1" y1="1" x2="23" y2="23"/>
    <path d="M16.5 16.5L19 19a2 2 0 0 1-2.73.73l-2.06-1.44a2 2 0 0 0-1.94-.25 10.7 10.7 0 0 1-4.55 1.07 2 2 0 0 1-2-2v-1.5a2 2 0 0 1 1.23-1.85l.63-.26a2 2 0 0 0 1.14-2.31l-.46-1.87"/>
    <path d="M10.29 3.86L1.82 18"/>
  </svg>
)

const IconRaiseHand = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/>
    <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"/>
    <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"/>
    <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>
  </svg>
)

const IconStar = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
)

const IconLeaf = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
  </svg>
)

const rules = [
  { Icon: IconPhoneOff, text: 'Celulares en silencio' },
  { Icon: IconRaiseHand, text: 'Participación activa' },
  { Icon: IconHandshake, text: 'Respeto mutuo' },
  { Icon: IconTarget, text: 'Venimos a aprender' },
  { Icon: IconStar, text: 'Esta sesión es tuya' },
]

export default function S07_ReglasDelJuego() {
  return (
    <div className="slide bg-dots" style={{ gap: '1.8rem' }}>
      <div className="corner-accent" />

      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center' }}
      >
        <h2 className="slide-title">Reglas del juego</h2>
        <p style={{ fontSize: '1.05rem', color: 'var(--teal-dark)', fontWeight: 600, marginTop: '0.4rem' }}>
          Para aprovechar mejor este espacio de aprendizaje
        </p>
      </motion.div>

      <motion.div
        style={{
          display: 'flex',
          gap: '1.2rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
          maxWidth: '900px',
          width: '100%',
        }}
      >
        {rules.map((rule, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.2 + i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ y: -5, boxShadow: '0 12px 30px rgba(12,45,78,0.15)' }}
            style={{
              background: 'white',
              borderRadius: '20px',
              padding: '1.8rem 1.5rem',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', gap: '0.7rem',
              boxShadow: 'var(--shadow-sm)',
              border: '1.5px solid rgba(69,197,190,0.2)',
              width: '160px',
              cursor: 'default',
              transition: 'box-shadow 0.2s',
            }}
          >
            <div style={{ color: 'var(--teal-dark)' }}>
              <rule.Icon size={32} color="var(--teal-dark)" />
            </div>
            <span style={{
              fontSize: '0.92rem', fontWeight: 600,
              color: 'var(--navy)', textAlign: 'center',
              lineHeight: 1.3,
            }}>
              {rule.text}
            </span>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        style={{
          background: 'linear-gradient(135deg, rgba(12,45,78,0.06), rgba(69,197,190,0.08))',
          border: '1px solid rgba(69,197,190,0.2)',
          borderRadius: '12px',
          padding: '0.9rem 2rem',
        }}
      >
        <p style={{ fontSize: '0.9rem', color: 'var(--navy)', fontWeight: 500, fontStyle: 'italic', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <IconLeaf />
          El aprendizaje ocurre cuando nos comprometemos con el proceso, no solo con el resultado.
        </p>
      </motion.div>
    </div>
  )
}
