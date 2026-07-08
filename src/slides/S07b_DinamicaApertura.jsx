import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { IconClock, IconTeam, IconLightbulb } from '../components/Icons'

const IconHospitalInline = ({ active }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? '#45C5BE' : '#0C2D4E'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <path d="M9 22V12h6v10"/>
    <path d="M12 9v6M9 12h6" strokeWidth="1.5"/>
  </svg>
)

const IconPeopleInline = ({ active }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? '#2BA8A2' : '#2BA8A2'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
)

const cases = [
  {
    id: 'A',
    title: 'Caso A',
    color: '#0C2D4E',
    accent: '#45C5BE',
    IconComp: IconHospitalInline,
    escenario: 'El turno agotado',
    situacion:
      'Son las 11 p.m. Tu turno termina en 20 minutos. Tienes 3 pacientes pendientes. Un familiar llega al puesto de enfermería visiblemente ansioso y te interrumpe pidiendo información del paciente del cuarto 12, que es el tercero en tu lista.',
    pregunta: '¿Qué haces? ¿Cómo equilibras la urgencia clínica con la necesidad humana del familiar?',
    rolEquipo: 'Equipo Azul — representen al personal de salud',
  },
  {
    id: 'B',
    title: 'Caso B',
    color: '#2BA8A2',
    accent: '#0C2D4E',
    IconComp: IconPeopleInline,
    escenario: 'La familia que no escucha',
    situacion:
      'Un paciente adulto mayor, consciente y orientado, firmó su consentimiento para el procedimiento. Su familia llega y exige que se posponga porque "no todos estuvieron de acuerdo". El médico ya está listo. El paciente dice que sí quiere continuar.',
    pregunta: '¿Cómo manejas el conflicto entre la autonomía del paciente y las presiones familiares? ¿Qué comunicarías y a quién?',
    rolEquipo: 'Equipo Verde — representen al equipo interdisciplinario',
  },
]

const steps = [
  { icon: IconTeam, label: 'Formen 2 equipos', sub: 'Dividan el grupo en partes iguales' },
  { icon: IconLightbulb, label: 'Lean su caso', sub: 'Cada equipo recibe un escenario distinto' },
  { icon: IconClock, label: '8 minutos de análisis', sub: 'Discutan, decidan y preparen su postura' },
]

export default function S07b_DinamicaApertura() {
  const [active, setActive] = useState(null)

  return (
    <div className="slide" style={{
      background: 'linear-gradient(160deg, #EEF2F7 0%, #dde9f5 100%)',
      padding: '44px 72px',
      gap: '1.2rem',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(12,45,78,0.06) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        pointerEvents: 'none',
      }} />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center' }}
      >
        <div className="pill pill--solid" style={{ marginBottom: '0.4rem', background: '#0C2D4E', color: 'white', borderColor: '#0C2D4E' }}>
          Dinámica de apertura
        </div>
        <h2 className="slide-title" style={{ fontSize: 'clamp(1.7rem, 3vw, 2.8rem)' }}>
          ¿Qué harías tú?
        </h2>
        <p className="slide-subtitle" style={{ fontSize: '0.95rem' }}>
          Dos equipos · Dos casos reales · Una decisión difícil
        </p>
      </motion.div>

      {/* Steps row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', width: '100%', maxWidth: '720px' }}
      >
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.1 }}
            style={{
              background: 'white',
              borderRadius: '14px',
              padding: '0.9rem 1.1rem',
              display: 'flex', alignItems: 'center', gap: '10px',
              boxShadow: 'var(--shadow-sm)',
              border: '1.5px solid rgba(69,197,190,0.2)',
              flex: 1,
            }}
          >
            <div style={{
              width: '36px', height: '36px', borderRadius: '10px', flexShrink: 0,
              background: 'rgba(69,197,190,0.12)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <s.icon size={18} color="#2BA8A2" />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--navy)', lineHeight: 1.2 }}>{s.label}</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-light)' }}>{s.sub}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Case cards */}
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: '1.2rem', width: '100%', maxWidth: '920px',
      }}>
        {cases.map((c, i) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 + i * 0.15 }}
            onClick={() => setActive(active === c.id ? null : c.id)}
            whileHover={{ y: -3, boxShadow: `0 16px 40px ${c.color}25` }}
            style={{
              background: active === c.id
                ? `linear-gradient(135deg, ${c.color} 0%, ${c.color}dd 100%)`
                : 'white',
              borderRadius: '18px',
              padding: '1.4rem',
              boxShadow: 'var(--shadow-md)',
              border: `2px solid ${c.color}${active === c.id ? 'ff' : '35'}`,
              cursor: 'pointer',
              transition: 'background 0.3s, border 0.3s',
            }}
          >
            {/* Card header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.8rem' }}>
              <div>
                <div style={{
                  display: 'inline-block',
                  background: active === c.id ? 'rgba(255,255,255,0.2)' : `${c.color}15`,
                  color: active === c.id ? 'white' : c.color,
                  borderRadius: '8px', padding: '2px 12px',
                  fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.08em',
                  marginBottom: '4px',
                }}>
                  {c.title}
                </div>
                <div style={{
                  fontFamily: 'DM Serif Display, serif',
                  fontSize: '1.15rem',
                  color: active === c.id ? 'white' : 'var(--navy)',
                  lineHeight: 1.2,
                }}>
                  {c.escenario}
                </div>
              </div>
              <div style={{
                width: '42px', height: '42px', borderRadius: '12px', flexShrink: 0,
                background: active === c.id ? 'rgba(255,255,255,0.2)' : `${c.color}12`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <c.IconComp active={active === c.id} />
              </div>
            </div>

            {/* Situation */}
            <p style={{
              fontSize: '0.82rem',
              color: active === c.id ? 'rgba(255,255,255,0.85)' : 'var(--text-light)',
              lineHeight: 1.6, margin: 0, marginBottom: '0.8rem',
            }}>
              {c.situacion}
            </p>

            {/* Question */}
            <AnimatePresence>
              {active === c.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  style={{
                    borderTop: '1px solid rgba(255,255,255,0.2)',
                    paddingTop: '0.7rem',
                    marginTop: '0.4rem',
                  }}
                >
                  <p style={{
                    fontSize: '0.82rem', fontWeight: 700,
                    color: active === c.id ? c.accent : c.color,
                    lineHeight: 1.5, margin: 0,
                  }}>
                    {c.pregunta}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Role + hint */}
            <div style={{
              marginTop: '0.7rem',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}>
              <span style={{
                fontSize: '0.72rem', fontWeight: 600,
                color: active === c.id ? 'rgba(255,255,255,0.7)' : 'var(--teal-dark)',
              }}>
                {c.rolEquipo}
              </span>
              <span style={{
                fontSize: '0.68rem',
                color: active === c.id ? 'rgba(255,255,255,0.5)' : 'var(--text-muted)',
                fontStyle: 'italic',
              }}>
                {active === c.id ? 'Clic para cerrar' : 'Clic para ver la pregunta clave'}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textAlign: 'center', fontStyle: 'italic' }}
      >
        Después de 8 minutos, cada equipo presentará su postura al grupo · No hay respuestas incorrectas
      </motion.p>
    </div>
  )
}
