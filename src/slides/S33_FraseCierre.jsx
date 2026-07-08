import { motion } from 'framer-motion'

export default function S33_FraseCierre() {
  return (
    <div className="slide slide--dark" style={{
      background: 'linear-gradient(160deg, #060f1f 0%, #0C2D4E 70%, #0e3a62 100%)',
      textAlign: 'center',
    }}>
      <div className="bg-dots--dark" style={{ position: 'absolute', inset: 0 }} />

      {/* Large quote mark */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.1 }}
        style={{
          position: 'absolute',
          top: '5%', left: '5%',
          fontFamily: 'DM Serif Display, serif',
          fontSize: '16rem',
          color: 'rgba(69,197,190,0.05)',
          lineHeight: 1,
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      >
        "
      </motion.div>

      {/* Bottom right accent */}
      <div style={{
        position: 'absolute',
        bottom: '-80px', right: '-80px',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(69,197,190,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.5rem' }}>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            width: '60px', height: '3px',
            background: '#45C5BE',
            borderRadius: '2px',
            transformOrigin: 'center',
          }}
        />

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            fontFamily: 'DM Serif Display, serif',
            fontSize: 'clamp(2.2rem, 5vw, 4rem)',
            fontStyle: 'italic',
            fontWeight: 400,
            color: 'white',
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            margin: 0,
          }}
        >
          "La excelencia en el servicio<br />
          <span style={{ color: '#45C5BE' }}>transforma experiencias.</span>"
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          style={{
            width: '60px', height: '3px',
            background: '#45C5BE',
            borderRadius: '2px',
            transformOrigin: 'center',
          }}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          style={{ display: 'flex', alignItems: 'center', gap: '14px' }}
        >
          <div style={{
            width: '44px', height: '44px', borderRadius: '50%',
            background: 'linear-gradient(135deg, #45C5BE, #2BA8A2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '0.78rem', fontWeight: 700, color: 'white',
            boxShadow: '0 4px 15px rgba(69,197,190,0.3)',
          }}>
            ERM
          </div>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: '1rem', fontWeight: 600, color: 'white' }}>— Edrick Reyes M.</div>
            <div style={{ fontSize: '0.75rem', color: 'rgba(69,197,190,0.8)' }}>Fundador · Hosperation</div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
