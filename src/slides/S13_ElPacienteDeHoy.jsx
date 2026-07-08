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
    <div className="slide bg-dots" style={{ padding: '55px 80px', gap: '1.5rem' }}>
      <div className="corner-accent" />

      <div className="grid-split" style={{ maxWidth: '1000px', width: '100%', gridTemplateColumns: '1fr 2fr', gap: '3rem' }}>
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}
        >
          <div className="pill">Contexto</div>
          <h2 className="slide-title">El paciente de hoy</h2>
          <div className="teal-bar" />
          <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', lineHeight: 1.65 }}>
            El perfil de quien acude a un hospital ha cambiado radicalmente en la última década.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            style={{
              background: 'linear-gradient(135deg, #0C2D4E, #163557)',
              borderRadius: '16px',
              padding: '1.3rem',
              color: 'white',
            }}
          >
            <div style={{ marginBottom: '8px', color: '#45C5BE' }}>
              <IconStar size={28} color="#45C5BE" />
            </div>
            <p style={{ fontSize: '0.85rem', fontWeight: 700, color: 'white', margin: 0, lineHeight: 1.4 }}>
              "La confianza es uno de los activos más importantes del hospital."
            </p>
          </motion.div>
        </motion.div>

        {/* Right */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
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
        </div>
      </div>
    </div>
  )
}
