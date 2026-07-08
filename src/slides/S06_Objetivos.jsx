import { motion } from 'framer-motion'

const objectives = [
  {
    num: '01',
    text: 'Reconocer qué distingue un servicio profesional de una atención meramente funcional.',
  },
  {
    num: '02',
    text: 'Identificar conductas que generan confianza, claridad y trato humano.',
  },
  {
    num: '03',
    text: 'Aplicar estándares básicos para responder con mayor consistencia y profesionalismo.',
  },
]

export default function S06_Objetivos() {
  return (
    <div className="slide bg-dots" style={{ padding: '60px 80px' }}>
      <div className="corner-accent" />

      <div className="grid-split" style={{ maxWidth: '960px', width: '100%', gridTemplateColumns: '1fr 2fr', gap: '4rem' }}>
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          <div className="pill">Taller</div>
          <h2 className="slide-title">Objetivos del taller</h2>
          <div className="teal-bar" />
          <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', lineHeight: 1.65 }}>
            Al finalizar esta sesión, el participante será capaz de:
          </p>

          <div style={{
            marginTop: '1rem',
            background: 'linear-gradient(135deg, #0C2D4E, #1a4068)',
            borderRadius: '16px',
            padding: '1.5rem',
            color: 'white',
          }}>
            <div style={{ fontSize: '3rem', fontFamily: 'DM Serif Display, serif', color: '#45C5BE', lineHeight: 1 }}>3</div>
            <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', marginTop: '4px' }}>objetivos de aprendizaje</div>
          </div>
        </motion.div>

        {/* Right: Objectives */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          {objectives.map((obj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                display: 'flex', gap: '1.2rem', alignItems: 'flex-start',
                background: 'white',
                borderRadius: '16px',
                padding: '1.4rem 1.6rem',
                boxShadow: 'var(--shadow-sm)',
                border: '1.5px solid rgba(69,197,190,0.2)',
              }}
            >
              <div style={{
                fontFamily: 'DM Serif Display, serif',
                fontSize: '2rem',
                color: '#45C5BE',
                lineHeight: 1,
                minWidth: '3rem',
                fontWeight: 400,
              }}>
                {obj.num}
              </div>
              <p style={{
                fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)',
                color: 'var(--text)',
                lineHeight: 1.6,
                margin: 0,
                paddingTop: '0.2rem',
              }}>
                {obj.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
