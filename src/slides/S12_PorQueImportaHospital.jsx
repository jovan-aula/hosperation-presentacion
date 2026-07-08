import { motion } from 'framer-motion'
import { IconHospital, IconUsers, IconHeart } from '../components/Icons'

const IconPerson = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
)

const IconStethoscope = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/>
    <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/>
    <circle cx="20" cy="10" r="2"/>
  </svg>
)

const IconBox = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="21 8 21 21 3 21 3 8"/>
    <rect x="1" y="3" width="22" height="5"/>
    <line x1="10" y1="12" x2="14" y2="12"/>
  </svg>
)

const stakeholders = [
  { label: 'Paciente', Icon: IconHospital, angle: 0 },
  { label: 'Familiar', Icon: IconUsers, angle: 60 },
  { label: 'Visitante', Icon: IconPerson, angle: 120 },
  { label: 'Personal', Icon: IconStethoscope, angle: 180 },
  { label: 'Proveedor', Icon: IconBox, angle: 240 },
  { label: 'Acompañante', Icon: IconHeart, angle: 300 },
]

export default function S12_PorQueImportaHospital() {
  const radius = 150

  return (
    <div className="slide bg-dots" style={{ padding: '55px 80px', gap: '1.5rem' }}>
      <div className="corner-accent" />

      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center' }}
      >
        <h2 className="slide-title">¿Por qué importa en un hospital?</h2>
        <p className="slide-subtitle">Cada persona que entra al hospital trae consigo un mundo</p>
      </motion.div>

      <div style={{ position: 'relative', width: '420px', height: '360px', flexShrink: 0 }}>
        {/* Center */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            position: 'absolute',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '110px', height: '110px', borderRadius: '50%',
            background: 'linear-gradient(135deg, #0C2D4E, #1a4068)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 8px 30px rgba(12,45,78,0.4), 0 0 0 10px rgba(69,197,190,0.12)',
            zIndex: 10, textAlign: 'center', padding: '0.5rem',
          }}
        >
          <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'white', lineHeight: 1.3 }}>
            Atención<br/>Hospitalaria
          </span>
        </motion.div>

        {/* Stakeholder nodes */}
        {stakeholders.map((s, i) => {
          const angleRad = (s.angle - 90) * (Math.PI / 180)
          const x = 50 + (radius / 210) * 100 * Math.cos(angleRad)
          const y = 50 + (radius / 180) * 100 * Math.sin(angleRad)
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.35 + i * 0.08 }}
              style={{
                position: 'absolute',
                left: `${x}%`,
                top: `${y}%`,
                transform: 'translate(-50%, -50%)',
                zIndex: 5,
              }}
            >
              <div style={{
                background: 'white',
                borderRadius: '12px',
                padding: '0.6rem 0.8rem',
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px',
                boxShadow: 'var(--shadow-md)',
                border: '1.5px solid rgba(69,197,190,0.25)',
                minWidth: '70px',
              }}>
                <div style={{ color: 'var(--teal-dark)' }}>
                  <s.Icon size={20} color="var(--teal-dark)" />
                </div>
                <span style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--navy)', textAlign: 'center' }}>{s.label}</span>
              </div>
              {/* Connection line (SVG) */}
              <svg style={{
                position: 'absolute', top: '50%', left: '50%',
                overflow: 'visible', pointerEvents: 'none', zIndex: -1,
              }}>
                <line
                  x1={0} y1={0}
                  x2={`${(50 - x) / 100 * 420}`}
                  y2={`${(50 - y) / 100 * 360}`}
                  stroke="rgba(69,197,190,0.25)" strokeWidth="1.5" strokeDasharray="4,4"
                />
              </svg>
            </motion.div>
          )
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        style={{
          maxWidth: '680px',
          background: 'linear-gradient(135deg, rgba(12,45,78,0.06), rgba(69,197,190,0.08))',
          border: '1px solid rgba(69,197,190,0.2)',
          borderRadius: '14px',
          padding: '1rem 1.6rem',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '0.9rem', color: 'var(--navy)', fontWeight: 600, fontStyle: 'italic', lineHeight: 1.6, margin: 0 }}>
          "Detrás de cada persona hay preocupaciones, expectativas, relaciones, miedos y necesidades particulares. Cada interacción puede aumentar o disminuir su incertidumbre y confianza."
        </p>
      </motion.div>
    </div>
  )
}
