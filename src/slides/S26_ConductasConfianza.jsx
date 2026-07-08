import { motion } from 'framer-motion'
import { IconMessage, IconCheck, IconHandshake } from '../components/Icons'

const IconWave = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18.36 6.64a9 9 0 1 1-12.73 0"/>
    <path d="M12 2v4"/>
  </svg>
)

const IconClipboard = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
    <rect x="8" y="2" width="8" height="4" rx="1"/>
  </svg>
)

const conductas = [
  { text: 'Saluda y preséntate al inicio de cada contacto.', Icon: IconWave },
  { text: 'Llama a las personas por su nombre.', Icon: IconMessage },
  { text: 'Explica qué vas a hacer antes de hacerlo.', Icon: IconClipboard },
  { text: 'Confirma que la información fue comprendida.', Icon: IconCheck },
  { text: 'Cumple lo que dices o avisa si no puedes.', Icon: IconHandshake },
]

export default function S26_ConductasConfianza() {
  return (
    <div className="slide bg-dots" style={{ padding: '55px 80px', gap: '1.5rem' }}>
      <div className="corner-accent" />

      <div className="grid-split" style={{ maxWidth: '1000px', width: '100%', gridTemplateColumns: '1fr 1.8fr', gap: '3.5rem' }}>
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}
        >
          <div className="pill">Módulo 5</div>
          <h2 className="slide-title">Conductas que generan confianza</h2>
          <div className="teal-bar" />
          <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', lineHeight: 1.65 }}>
            La confianza no se declara: se construye en acciones pequeñas, repetidas y consistentes.
          </p>

          <div style={{
            background: 'linear-gradient(135deg, #45C5BE, #2BA8A2)',
            borderRadius: '14px',
            padding: '1.3rem',
            color: 'white',
          }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.8, marginBottom: '4px' }}>Clave</div>
            <p style={{ fontSize: '0.9rem', fontWeight: 600, lineHeight: 1.5, margin: 0 }}>
              Cada interacción es una oportunidad para construir o perder confianza.
            </p>
          </div>
        </motion.div>

        {/* Right: list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
          {conductas.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                display: 'flex', alignItems: 'center', gap: '1rem',
                background: 'white',
                borderRadius: '14px',
                padding: '1rem 1.3rem',
                boxShadow: 'var(--shadow-sm)',
                border: '1px solid rgba(69,197,190,0.2)',
                borderLeft: '4px solid #45C5BE',
              }}
            >
              <div style={{
                width: '36px', height: '36px', borderRadius: '10px', flexShrink: 0,
                background: 'rgba(69,197,190,0.12)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#2BA8A2',
              }}>
                <c.Icon size={20} color="#2BA8A2" />
              </div>
              <p style={{ fontSize: 'clamp(0.88rem, 1.4vw, 1rem)', color: 'var(--text)', margin: 0, lineHeight: 1.5 }}>{c.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
