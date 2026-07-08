import { motion } from 'framer-motion'

const letters = [
  { letter: 'H', word: 'Humanidad' },
  { letter: 'O', word: 'Orientación' },
  { letter: 'S', word: 'Seguridad' },
  { letter: 'P', word: 'Personalización' },
  { letter: 'I', word: 'Información clara' },
  { letter: 'T', word: 'Trato digno' },
  { letter: 'A', word: 'Acompañamiento' },
  { letter: 'L', word: 'Limpieza y orden' },
]

export default function S16_HospitalAcronimo() {
  return (
    <div className="slide bg-dots" style={{ padding: '55px 80px' }}>
      <div className="corner-accent" />

      <div className="grid-split" style={{ maxWidth: '960px', width: '100%', gridTemplateColumns: '1fr 1.8fr', gap: '3rem' }}>
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}
        >
          <div className="pill">Módulo 3</div>
          <h2 className="slide-title">Hospitalidad<br />en el hospital</h2>
          <div className="teal-bar" />
          <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', lineHeight: 1.65 }}>
            El acrónimo HOSPITAL resume los pilares de una hospitalidad institucional genuina.
          </p>

          <div style={{
            background: 'linear-gradient(135deg, #0C2D4E, #163557)',
            borderRadius: '14px',
            padding: '1.3rem',
          }}>
            <div style={{
              fontFamily: 'DM Serif Display, serif',
              fontSize: '2.5rem',
              color: '#45C5BE',
              letterSpacing: '0.15em',
              lineHeight: 1,
            }}>
              HOSPITAL
            </div>
            <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)', marginTop: '6px' }}>
              8 pilares de la hospitalidad inteligente
            </div>
          </div>
        </motion.div>

        {/* Right: Acronym list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
          {letters.map((l, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.2 + i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                display: 'flex', alignItems: 'center', gap: '1rem',
                padding: '0.6rem 1rem',
                background: 'white',
                borderRadius: '10px',
                boxShadow: 'var(--shadow-sm)',
                border: '1px solid rgba(69,197,190,0.15)',
              }}
            >
              <div style={{
                fontFamily: 'DM Serif Display, serif',
                fontSize: '1.6rem',
                color: '#45C5BE',
                minWidth: '1.8rem',
                lineHeight: 1,
                fontWeight: 400,
              }}>
                {l.letter}
              </div>
              <div style={{ width: '2px', height: '28px', background: 'rgba(69,197,190,0.3)', borderRadius: '1px' }} />
              <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--navy)' }}>{l.word}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
