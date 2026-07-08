import { motion } from 'framer-motion'
import { IconTarget } from '../components/Icons'

export default function S04_PropositoGeneral() {
  return (
    <div className="slide slide--dark" style={{
      background: 'linear-gradient(135deg, #081e35 0%, #0C2D4E 100%)',
      textAlign: 'center',
    }}>
      <div className="bg-dots--dark" style={{ position: 'absolute', inset: 0 }} />

      {/* Center glow */}
      <div style={{
        position: 'absolute',
        width: '600px', height: '400px',
        background: 'radial-gradient(ellipse, rgba(69,197,190,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div style={{
            width: '56px', height: '56px', borderRadius: '50%',
            background: 'linear-gradient(135deg, #45C5BE, #2BA8A2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto',
            boxShadow: '0 0 30px rgba(69,197,190,0.4)',
          }}>
            <IconTarget size={28} color="white" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <div style={{
            fontSize: '0.75rem',
            fontWeight: 700,
            color: 'rgba(69,197,190,0.8)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}>
            Propósito General
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            fontFamily: 'DM Serif Display, serif',
            fontSize: 'clamp(2rem, 4.5vw, 3.8rem)',
            fontWeight: 400,
            color: 'white',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            margin: 0,
          }}
        >
          Profesionalizar el servicio es<br />
          <span style={{ color: '#45C5BE' }}>responsabilidad de todos.</span>
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          style={{
            width: '80px', height: '3px',
            background: 'linear-gradient(90deg, #45C5BE, transparent)',
            borderRadius: '2px',
            margin: '0 auto',
            transformOrigin: 'left',
          }}
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{
            fontSize: 'clamp(1rem, 1.8vw, 1.3rem)',
            color: 'rgba(255,255,255,0.65)',
            lineHeight: 1.7,
            maxWidth: '640px',
            margin: 0,
          }}
        >
          Cada interacción influye en la seguridad, confianza y experiencia de pacientes, familiares y compañeros.
        </motion.p>
      </div>
    </div>
  )
}
