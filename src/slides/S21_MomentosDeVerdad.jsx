import { motion } from 'framer-motion'
import { useState } from 'react'

const IconDoor = ({ color = 'currentColor' }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 4H3v18h18V9z"/>
    <path d="M13 4v5h5"/>
    <circle cx="7.5" cy="13" r="0.5" fill={color}/>
  </svg>
)

const IconStethoscope = ({ color = 'currentColor' }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/>
    <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/>
    <circle cx="20" cy="10" r="2"/>
  </svg>
)

const IconFlask = ({ color = 'currentColor' }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 3h6v6l3.5 9A2 2 0 0 1 16.6 21H7.4a2 2 0 0 1-1.9-3L9 9V3z"/>
    <line x1="9" y1="3" x2="15" y2="3"/>
  </svg>
)

const IconBed = ({ color = 'currentColor' }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 4v16"/>
    <path d="M2 8h18a2 2 0 0 1 2 2v10"/>
    <path d="M2 17h20"/>
    <path d="M6 8v9"/>
  </svg>
)

const IconHome = ({ color = 'currentColor' }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
)

const journey = [
  { label: 'Admisión', Icon: IconDoor, note: '¿Me recibirán bien? ¿Cuánto esperaré? ¿Alguien me explicará qué hacer?' },
  { label: 'Consulta', Icon: IconStethoscope, note: '¿Me escuchará? ¿Entenderé lo que me diga? ¿Sentiré que me importa como persona?' },
  { label: 'Estudios', Icon: IconFlask, note: '¿Cuánto tardará? ¿Habrá alguien que me explique el proceso? ¿Será doloroso?' },
  { label: 'Internamiento', Icon: IconBed, note: '¿Estaré cómodo? ¿Me informarán sobre mi evolución? ¿Podrán visitarme?' },
  { label: 'Alta', Icon: IconHome, note: '¿Entendí las instrucciones? ¿A quién llamo si algo pasa? ¿Qué sigue?' },
]

export default function S21_MomentosDeVerdad() {
  const [active, setActive] = useState(null)

  return (
    <div className="slide bg-dots" style={{ padding: '55px 80px', gap: '1.5rem' }}>
      <div className="corner-accent" />

      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center' }}
      >
        <h2 className="slide-title">Momentos de verdad</h2>
        <p className="slide-subtitle">Haz clic en cada punto para descubrir lo que siente el paciente</p>
      </motion.div>

      {/* Journey */}
      <div style={{ position: 'relative', width: '100%', maxWidth: '880px', padding: '2rem 0' }}>
        {/* Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            position: 'absolute',
            top: '50%', left: '5%', right: '5%', height: '3px',
            background: 'linear-gradient(90deg, #45C5BE, #2BA8A2)',
            borderRadius: '2px',
            transformOrigin: 'left',
          }}
        />

        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          position: 'relative',
        }}>
          {journey.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.6rem', cursor: 'pointer' }}
              onClick={() => setActive(active === i ? null : i)}
            >
              <motion.div
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  width: '64px', height: '64px', borderRadius: '50%',
                  background: active === i
                    ? 'linear-gradient(135deg, #45C5BE, #2BA8A2)'
                    : 'white',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: active === i ? '0 8px 24px rgba(69,197,190,0.4)' : 'var(--shadow-md)',
                  border: active === i ? '3px solid #45C5BE' : '2px solid rgba(69,197,190,0.3)',
                  transition: 'all 0.25s ease',
                  zIndex: 5, position: 'relative',
                }}
              >
                <point.Icon color={active === i ? 'white' : '#2BA8A2'} />
              </motion.div>
              <span style={{
                fontSize: '0.78rem', fontWeight: 700,
                color: active === i ? 'var(--teal-dark)' : 'var(--navy)',
                transition: 'color 0.2s',
              }}>
                {point.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Note box */}
      <div style={{ minHeight: '90px', width: '100%', maxWidth: '700px' }}>
        {active !== null && (() => {
          const ActiveIcon = journey[active].Icon
          return (
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              style={{
                background: 'white',
                borderRadius: '16px',
                padding: '1.3rem 1.8rem',
                boxShadow: 'var(--shadow-lg)',
                border: '2px solid rgba(69,197,190,0.35)',
                textAlign: 'center',
              }}
            >
              <div style={{ fontWeight: 700, color: 'var(--teal-dark)', fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                <ActiveIcon color="var(--teal-dark)" />
                <span>{journey[active].label} — ¿Qué siente el paciente?</span>
              </div>
              <p style={{ fontSize: '1rem', color: 'var(--text)', lineHeight: 1.6, margin: 0, fontStyle: 'italic' }}>
                "{journey[active].note}"
              </p>
            </motion.div>
          )
        })()}
        {active === null && (
          <div style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.85rem', fontStyle: 'italic', paddingTop: '1.5rem' }}>
            ← Selecciona un punto del recorrido
          </div>
        )}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="ref-text"
        style={{ textAlign: 'center', margin: 0 }}
      >
        "Cada punto de contacto construye una percepción." — Carlzon, J. (1987). Moments of Truth. Ballinger Publishing.
      </motion.p>
    </div>
  )
}
