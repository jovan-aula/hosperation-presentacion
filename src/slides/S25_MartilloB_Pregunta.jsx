import { motion } from 'framer-motion'

export default function S25_MartilloB_Pregunta() {
  return (
    <div className="slide slide--dark" style={{
      background: 'linear-gradient(135deg, #050f1a 0%, #081e35 100%)',
      padding: '48px 80px',
      gap: '1.5rem',
      justifyContent: 'center',
    }}>
      {/* Subtle pulse glow */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          width: '600px', height: '400px',
          background: 'radial-gradient(ellipse, rgba(69,197,190,0.2) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', zIndex: 1 }}
      >
        <motion.p
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}
          style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.45)', margin: '0 0 1.2rem 0', letterSpacing: '0.08em' }}
        >
          Ahora, sin pensarlo demasiado...
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.7, type: 'spring', stiffness: 180 }}
          style={{
            fontFamily: 'DM Serif Display, serif',
            fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
            fontWeight: 400, color: 'white',
            lineHeight: 1.1, margin: '0 0 1.4rem 0',
          }}
        >
          Piensa en una<br />
          <span style={{ color: '#45C5BE' }}>herramienta</span>{' '}
          y un{' '}
          <span style={{ color: '#fc8181' }}>color</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem',
            marginTop: '1rem',
          }}
        >
          <div style={{ height: '1px', width: '80px', background: 'rgba(255,255,255,0.15)' }} />
          <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em' }}>
            guárdala en tu mente
          </span>
          <div style={{ height: '1px', width: '80px', background: 'rgba(255,255,255,0.15)' }} />
        </motion.div>
      </motion.div>
    </div>
  )
}
