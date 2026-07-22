import { motion } from 'framer-motion'

const ops = ['2 + 2', '4 + 4', '8 + 8', '16 + 16', '32 + 32']

export default function S25_MartilloA_Calculo() {
  return (
    <div className="slide slide--dark" style={{
      background: 'linear-gradient(135deg, #081e35 0%, #0C2D4E 100%)',
      padding: '48px 80px',
      gap: '2.2rem',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(69,197,190,0.07) 1px, transparent 1px)',
        backgroundSize: '28px 28px', pointerEvents: 'none',
      }} />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        style={{ textAlign: 'center' }}
      >
        <div className="pill" style={{ marginBottom: '0.6rem', borderColor: 'rgba(69,197,190,0.4)', color: '#45C5BE' }}>
          Ejercicio mental · Sigue el ritmo
        </div>
        <h2 style={{
          fontFamily: 'DM Serif Display, serif',
          fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
          fontWeight: 400, color: 'white',
          lineHeight: 1.15, margin: 0,
        }}>
          Resuelve cada operación<br />
          <span style={{ color: '#45C5BE' }}>lo más rápido que puedas</span>
        </h2>
      </motion.div>

      {/* Math operations — questions only, NO answers */}
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'center' }}>
        {ops.map((op, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.18, type: 'spring', stiffness: 280, damping: 20 }}
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1.5px solid rgba(69,197,190,0.25)',
              borderRadius: '18px',
              padding: '1.6rem 2rem',
              textAlign: 'center',
              minWidth: '140px',
            }}
          >
            <div style={{
              fontFamily: 'DM Serif Display, serif',
              fontSize: 'clamp(1.8rem, 3.2vw, 2.8rem)',
              color: 'white', lineHeight: 1,
            }}>
              {op}
            </div>
            <div style={{
              marginTop: '10px', fontSize: '1.4rem', color: 'rgba(255,255,255,0.15)',
              letterSpacing: '6px',
            }}>= ?</div>
          </motion.div>
        ))}
      </div>

      {/* Bottom */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
        style={{
          background: 'rgba(69,197,190,0.1)',
          border: '1px solid rgba(69,197,190,0.3)',
          borderRadius: '14px', padding: '1rem 2rem',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.7)', margin: 0 }}>
          Resuélvelas en voz alta siguiendo al facilitador — <strong style={{ color: 'white' }}>sin parar</strong>
        </p>
      </motion.div>
    </div>
  )
}
