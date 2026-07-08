import { motion } from 'framer-motion'
import { IconStar, IconMessage } from '../components/Icons'

const IconSearch = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/>
    <path d="m21 21-4.35-4.35"/>
  </svg>
)

const IconQuestion = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
    <line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
)

const IconScales = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="3" x2="12" y2="21"/>
    <path d="M3 6l9-3 9 3"/>
    <path d="M6 6l-3 6c0 1.657 1.343 3 3 3s3-1.343 3-3L6 6z"/>
    <path d="M18 6l-3 6c0 1.657 1.343 3 3 3s3-1.343 3-3L18 6z"/>
  </svg>
)

const behaviors = [
  { icon: IconSearch, action: 'Investiga', stat: '76% busca información en internet antes de su consulta', source: 'Pew Research' },
  { icon: IconQuestion, action: 'Pregunta', stat: 'Cada vez más informado y con expectativas más altas', source: '' },
  { icon: IconScales, action: 'Compara', stat: 'Evalúa opciones antes de elegir a quién confiar su salud', source: '' },
  { icon: IconStar, action: 'Evalúa', stat: 'Califica la experiencia al mismo nivel que el resultado clínico', source: '' },
  { icon: IconMessage, action: 'Comparte su experiencia', stat: '80% lo hace en línea', source: 'Press Ganey, 2024' },
]

export default function S13_ElPacienteDeHoy() {
  return (
    <div className="slide bg-dots" style={{ padding: '50px 60px 50px 48%', gap: '0.65rem', position: 'relative' }}>

      {/* Background image — left half, fades right */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(/images/13.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'left center',
        opacity: 1,
      }} />
      {/* Gradient: image visible left → bg color right */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to right, rgba(238,242,247,0) 0%, rgba(238,242,247,0.6) 36%, rgba(238,242,247,0.97) 52%, #EEF2F7 65%)',
      }} />

      {/* Header floated over image area */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          position: 'absolute', left: '2.5rem', bottom: '2.5rem',
          maxWidth: '280px',
        }}
      >
        <div className="pill" style={{ marginBottom: '0.5rem' }}>Contexto</div>
        <h2 style={{
          fontFamily: 'DM Serif Display, serif',
          fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
          color: '#0C2D4E', fontWeight: 400, lineHeight: 1.15, margin: '0 0 0.5rem',
          textShadow: '0 1px 12px rgba(238,242,247,0.9)',
        }}>
          El paciente<br />de hoy
        </h2>
        <p style={{
          fontSize: '0.82rem', color: 'var(--text-light)', lineHeight: 1.5,
          textShadow: '0 1px 8px rgba(238,242,247,0.9)',
        }}>
          Ha cambiado radicalmente<br />en la última década.
        </p>
      </motion.div>

      {/* Right — behaviors (positioned via padding-left) */}
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '0.62rem', width: '100%' }}>
        {behaviors.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              display: 'flex', alignItems: 'flex-start', gap: '1rem',
              background: 'white',
              borderRadius: '12px',
              padding: '0.85rem 1.2rem',
              boxShadow: 'var(--shadow-sm)',
              border: '1px solid rgba(69,197,190,0.18)',
            }}
          >
            <div style={{
              width: '36px', height: '36px', borderRadius: '10px', flexShrink: 0,
              background: 'rgba(69,197,190,0.12)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#2BA8A2',
            }}>
              <b.icon />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--navy)' }}>{b.action}</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-light)', marginTop: '2px' }}>
                {b.stat}{b.source && <span style={{ color: 'var(--teal-dark)', fontStyle: 'italic' }}> — {b.source}</span>}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Quote card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
          style={{
            background: 'linear-gradient(135deg, #0C2D4E, #163557)',
            borderRadius: '12px', padding: '0.85rem 1.2rem',
            display: 'flex', gap: '10px', alignItems: 'center',
          }}
        >
          <IconStar size={18} color="#45C5BE" />
          <p style={{ fontSize: '0.8rem', fontWeight: 600, color: 'white', margin: 0, lineHeight: 1.45 }}>
            "La confianza es uno de los activos más importantes del hospital."
          </p>
        </motion.div>
      </div>
    </div>
  )
}
