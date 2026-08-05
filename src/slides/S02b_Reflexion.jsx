import { motion } from 'framer-motion'

const preguntas = [
  '¿Cuándo fue la última vez que te callaste algo que debías decir?',
  '¿Hay diferencia entre ser directo y ser grosero?',
  '¿Se puede ser honesto sin herir a nadie?',
  '¿Qué es más difícil: expresar lo que piensas o escuchar lo que no quieres oír?',
]

export default function S02b_Reflexion() {
  return (
    <div className="slide" style={{ padding: '60px 80px' }}>
      <div className="corner-accent" />

      <div style={{ maxWidth: '900px', width: '100%', display: 'flex', flexDirection: 'column', gap: '2.4rem' }}>

        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}
        >
          <div className="pill" style={{ alignSelf: 'flex-start' }}>Para reflexionar</div>
          <h2 className="slide-title">Antes de comenzar…</h2>
          <div className="teal-bar" />
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
          {preguntas.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.3 + i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                display: 'flex', gap: '1.2rem', alignItems: 'flex-start',
                background: 'white',
                borderRadius: '14px',
                padding: '1.1rem 1.5rem',
                boxShadow: '0 2px 10px rgba(12,45,78,0.07)',
                border: '1.5px solid rgba(69,197,190,0.2)',
              }}
            >
              <div style={{
                width: '32px', height: '32px', borderRadius: '50%',
                background: 'linear-gradient(135deg, #45C5BE, #2BA8A2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0, color: 'white', fontWeight: 700, fontSize: '0.8rem',
              }}>
                {i + 1}
              </div>
              <p style={{
                fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
                color: '#2D3748', lineHeight: 1.6, margin: 0,
                paddingTop: '0.2rem',
              }}>
                {p}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
