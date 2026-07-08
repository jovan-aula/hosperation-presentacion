import { motion } from 'framer-motion'

export default function S14_FraseERMI() {
  return (
    <div className="slide slide--dark" style={{
      background: 'linear-gradient(160deg, #081e35 0%, #0C2D4E 60%, #0e3a62 100%)',
      textAlign: 'center',
      padding: '80px',
    }}>
      {/* Decorative quote mark */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        style={{
          position: 'absolute',
          top: '10%', left: '5%',
          fontFamily: 'DM Serif Display, serif',
          fontSize: '16rem',
          color: 'rgba(69,197,190,0.06)',
          lineHeight: 1,
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      >
        "
      </motion.div>

      {/* Glow */}
      <div style={{
        position: 'absolute',
        width: '700px', height: '500px',
        background: 'radial-gradient(ellipse, rgba(69,197,190,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', maxWidth: '820px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            width: '50px', height: '3px',
            background: '#45C5BE',
            borderRadius: '2px',
            transformOrigin: 'center',
          }}
        />

        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            fontFamily: 'DM Serif Display, serif',
            fontSize: 'clamp(1.8rem, 4vw, 3.2rem)',
            fontStyle: 'italic',
            fontWeight: 400,
            color: 'white',
            lineHeight: 1.3,
            letterSpacing: '-0.02em',
            margin: 0,
          }}
        >
          "La gente olvidará lo que dijiste,<br />
          olvidará lo que hiciste,{' '}
          <span style={{ color: '#45C5BE' }}>pero nunca olvidará<br />
          cómo la hiciste sentir."</span>
        </motion.blockquote>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          style={{
            width: '50px', height: '3px',
            background: '#45C5BE',
            borderRadius: '2px',
            transformOrigin: 'center',
          }}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}
        >
          <div style={{ fontSize: '1.05rem', fontWeight: 600, color: 'rgba(255,255,255,0.9)' }}>
            Maya Angelou
          </div>
          <div style={{ fontSize: '0.8rem', color: 'rgba(69,197,190,0.75)' }}>
            Escritora, poeta, activista
          </div>
        </motion.div>

        {/* Hospital connection */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          style={{
            background: 'rgba(69,197,190,0.1)',
            border: '1px solid rgba(69,197,190,0.25)',
            borderRadius: '14px',
            padding: '0.9rem 2rem',
            maxWidth: '600px',
          }}
        >
          <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.6, fontStyle: 'italic' }}>
            En un hospital, esa sensación —de ser escuchado, visto, tratado con dignidad—
            es exactamente lo que diferencia la atención clínica de la experiencia memorable.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
