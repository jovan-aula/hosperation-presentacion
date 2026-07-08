import { motion } from 'framer-motion'
import { IconAlert } from '../components/Icons'

const IconX = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E53E3E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
)

const IconFire = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2c0 0-3 4-3 7a3 3 0 0 0 6 0c0-1-.5-2-1-3 0 0 1 3-1 5-1.5-1-2-3.5-1-5z"/>
    <path d="M5 19a7 7 0 0 1 14 0"/>
  </svg>
)

const conductas = [
  'Ignorar o no saludar al paciente o familiar.',
  'Hablar entre colegas frente al paciente como si no existiera.',
  'Dar información contradictoria o incompleta.',
  'Prometer algo que no se cumple.',
  'Responder con indiferencia o impaciencia ante preguntas del paciente.',
]

export default function S27_ConductasDestruyen() {
  return (
    <div className="slide bg-dots" style={{ padding: '46px 72px', gap: '1.2rem' }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(229,62,62,0.03) 0%, transparent 50%)',
        pointerEvents: 'none',
      }} />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '100%', maxWidth: '1040px' }}
      >
        <div style={{
          background: 'rgba(229,62,62,0.1)', color: '#C53030',
          borderRadius: '100px', padding: '0.3rem 1rem',
          fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.05em',
          display: 'inline-flex', alignItems: 'center', gap: '6px', flexShrink: 0,
        }}>
          <IconAlert size={14} color="#C53030" />
          Alerta
        </div>
        <h2 className="slide-title" style={{ margin: 0, fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)' }}>
          Conductas que destruyen el servicio
        </h2>
      </motion.div>

      <div className="grid-split" style={{ maxWidth: '1040px', width: '100%', gridTemplateColumns: '1fr 1.8fr', gap: '3rem' }}>
        {/* Left — photo panel */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          style={{
            position: 'relative', borderRadius: '20px', overflow: 'hidden',
            minHeight: '380px',
            boxShadow: '0 20px 60px rgba(229,62,62,0.18)',
          }}
        >
          <img
            src="/images/8.png"
            alt="Personal de salud agotado"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          {/* Red tint overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(180deg, rgba(229,62,62,0.08) 0%, rgba(12,45,78,0.72) 100%)',
          }} />
          {/* Content overlay */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            padding: '1.4rem',
          }}>
            <div style={{
              background: 'rgba(229,62,62,0.18)',
              border: '1px solid rgba(229,62,62,0.3)',
              borderRadius: '10px',
              padding: '0.9rem 1.1rem',
            }}>
              <div style={{ marginBottom: '6px' }}>
                <IconFire />
              </div>
              <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5, margin: 0 }}>
                "Una mala experiencia se comparte con 9-15 personas. Una buena, con 4-6."
              </p>
              <p style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.4)', margin: '4px 0 0', fontStyle: 'italic' }}>
                HCAHPS Data, 2024
              </p>
            </div>
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
                border: '1px solid rgba(229,62,62,0.18)',
                borderLeft: '4px solid #E53E3E',
              }}
            >
              <div style={{
                width: '32px', height: '32px', borderRadius: '8px', flexShrink: 0,
                background: 'rgba(229,62,62,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <IconX />
              </div>
              <p style={{ fontSize: 'clamp(0.88rem, 1.4vw, 1rem)', color: 'var(--text)', margin: 0, lineHeight: 1.5 }}>{c}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
