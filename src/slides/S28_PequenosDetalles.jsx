import { motion } from 'framer-motion'

const detalles = [
  { num: '01', text: 'Mirar a los ojos al hablar con el paciente o familiar.' },
  { num: '02', text: 'Tocar suavemente la puerta antes de entrar a la habitación.' },
  { num: '03', text: 'Informar el tiempo de espera aunque no se pueda reducir.' },
  { num: '04', text: 'Despedirse por nombre al terminar la atención.' },
  { num: '05', text: 'Mantener el espacio de trabajo limpio y ordenado en todo momento.' },
]

function MedicalIcon() {
  return (
    <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="80" cy="80" r="75" fill="rgba(69,197,190,0.08)" stroke="rgba(69,197,190,0.25)" strokeWidth="1.5"/>
      {/* Heart with cross */}
      <path d="M80 110 C60 95, 40 80, 40 62 C40 50, 50 42, 60 42 C68 42, 74 46, 80 52 C86 46, 92 42, 100 42 C110 42, 120 50, 120 62 C120 80, 100 95, 80 110Z" fill="rgba(69,197,190,0.2)" stroke="#45C5BE" strokeWidth="2"/>
      <path d="M80 55 L80 75 M72 64 L88 64" stroke="#45C5BE" strokeWidth="3" strokeLinecap="round"/>
      {/* Stars */}
      <circle cx="40" cy="30" r="4" fill="rgba(69,197,190,0.4)"/>
      <circle cx="125" cy="130" r="3" fill="rgba(69,197,190,0.3)"/>
      <circle cx="130" cy="40" r="2.5" fill="rgba(69,197,190,0.5)"/>
      <circle cx="30" cy="125" r="2" fill="rgba(69,197,190,0.3)"/>
    </svg>
  )
}

export default function S28_PequenosDetalles() {
  return (
    <div className="slide bg-dots" style={{ padding: '55px 80px' }}>
      <div className="corner-accent" />

      <div className="grid-split" style={{ maxWidth: '1000px', width: '100%', gridTemplateColumns: '1fr 1.8fr', gap: '3.5rem' }}>
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', alignItems: 'flex-start' }}
        >
          <div className="pill">Excelencia</div>
          <h2 className="slide-title">Los pequeños detalles</h2>
          <div className="teal-bar" />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            style={{
              background: 'white',
              borderRadius: '50%',
              padding: '12px',
              boxShadow: 'var(--shadow-xl)',
              border: '2px solid rgba(69,197,190,0.2)',
              margin: '0.5rem 0',
            }}
          >
            <MedicalIcon />
          </motion.div>

          <div style={{
            background: 'linear-gradient(135deg, #0C2D4E, #163557)',
            borderRadius: '14px',
            padding: '1.1rem',
            color: 'white',
          }}>
            <p style={{ fontSize: '0.8rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.7)', lineHeight: 1.55, margin: 0 }}>
              "Los momentos de verdad no se miden en protocolos; se miden en percepciones." — Carlzon, J. (1987)
            </p>
          </div>
        </motion.div>

        {/* Right: list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
          {detalles.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                display: 'flex', alignItems: 'center', gap: '1.2rem',
                background: 'white',
                borderRadius: '14px',
                padding: '1rem 1.4rem',
                boxShadow: 'var(--shadow-sm)',
                border: '1px solid rgba(69,197,190,0.18)',
              }}
            >
              <div style={{
                fontFamily: 'DM Serif Display, serif',
                fontSize: '1.6rem',
                color: 'rgba(69,197,190,0.4)',
                minWidth: '2.5rem',
                lineHeight: 1,
              }}>
                {d.num}
              </div>
              <div style={{ width: '2px', height: '32px', background: 'rgba(69,197,190,0.2)', borderRadius: '1px', flexShrink: 0 }} />
              <p style={{ fontSize: 'clamp(0.88rem, 1.4vw, 1rem)', color: 'var(--text)', margin: 0, lineHeight: 1.5 }}>{d.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
