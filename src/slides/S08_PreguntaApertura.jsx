import { motion } from 'framer-motion'
import { IconClock } from '../components/Icons'

const IconThought = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(69,197,190,0.9)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    <path d="M8 10h.01M12 10h.01M16 10h.01" strokeWidth="2.5"/>
  </svg>
)

export default function S08_PreguntaApertura() {
  return (
    <div className="slide slide--dark" style={{
      background: 'linear-gradient(135deg, #081e35 0%, #0C2D4E 100%)',
      textAlign: 'center',
    }}>
      <div className="bg-dots--dark" style={{ position: 'absolute', inset: 0 }} />

      {/* Animated teal line */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          position: 'absolute',
          top: '50%', left: '10%',
          width: '80%', height: '2px',
          background: 'linear-gradient(90deg, transparent, rgba(69,197,190,0.5), transparent)',
          transformOrigin: 'left',
        }}
      />

      {/* Center glow */}
      <div style={{
        position: 'absolute',
        width: '700px', height: '500px',
        background: 'radial-gradient(ellipse, rgba(69,197,190,0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', maxWidth: '820px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.5rem' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div style={{
            width: '60px', height: '60px', borderRadius: '50%',
            background: 'rgba(69,197,190,0.2)',
            border: '2px solid rgba(69,197,190,0.5)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <IconThought />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            fontFamily: 'DM Serif Display, serif',
            fontSize: 'clamp(2.2rem, 5vw, 4rem)',
            fontWeight: 400,
            color: 'white',
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            margin: 0,
          }}
        >
          "¿Qué experiencia de servicio <span style={{ color: '#45C5BE' }}>recuerdas</span>...
          <br />y por qué?"
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{
            width: '60px', height: '3px',
            background: '#45C5BE',
            borderRadius: '2px',
            transformOrigin: 'center',
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          style={{
            background: 'rgba(69,197,190,0.1)',
            border: '1px solid rgba(69,197,190,0.3)',
            borderRadius: '12px',
            padding: '0.9rem 2rem',
            display: 'flex', alignItems: 'center', gap: '10px',
          }}
        >
          <IconClock size={22} color="rgba(69,197,190,0.9)" />
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.8)', margin: 0, fontWeight: 500 }}>
            Comparte con el grupo — 3 a 4 minutos
          </p>
        </motion.div>
      </div>
    </div>
  )
}
