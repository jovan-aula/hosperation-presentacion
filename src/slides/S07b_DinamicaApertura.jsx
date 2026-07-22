import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { IconClock, IconTeam, IconLightbulb } from '../components/Icons'

const IconAlert = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
    <line x1="12" y1="9" x2="12" y2="13"/>
    <line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
)

const IconShield = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
)

const cases = [
  {
    id: 'A',
    title: 'Caso A',
    color: '#0C2D4E',
    accent: '#45C5BE',
    IconComp: IconAlert,
    escenario: 'El turno que no fue tuyo',
    tension: null,
    situacion:
      'Al inicio de tu turno recibes a un paciente frustrado. Ayer le explicaron su procedimiento de una forma; hoy otro médico le dijo algo completamente diferente. No sabe a quién creerle. Revisas el expediente — ambas versiones tienen algo de verdad, pero nadie coordinó el mensaje. El paciente te mira y pregunta: "¿Me pueden decir la verdad de una vez?"',
    emocion: 'Confusión · Desconfianza · Sensación de que nadie está realmente a cargo',
    preguntas: [
      '¿Cómo respondes sin desacreditar a ninguno de tus colegas?',
      '¿De quién es la responsabilidad cuando el mensaje del equipo no es consistente?',
      '¿Qué le dices concretamente para que recupere la confianza en el hospital?',
    ],
    rolEquipo: 'Equipo Azul — personal de salud en turno',
  },
  {
    id: 'B',
    title: 'Caso B',
    color: '#2BA8A2',
    accent: '#081e35',
    IconComp: IconShield,
    escenario: 'La regla y el ser humano',
    tension: 'Protocolo institucional vs. atención humanizada',
    situacion:
      'Una paciente de 78 años, post-operada, llora y dice tener miedo de estar sola. El protocolo es claro: visitas solo de 3 a 5 p.m. Son las 7 a.m. Su hija llama desesperada. Tu jefa acaba de salir de la sala y fue explícita: nadie entra fuera de horario.',
    emocion: 'Miedo · Soledad · Vulnerabilidad — está en un lugar desconocido, con dolor, sin su familia',
    preguntas: [
      '¿Qué está sintiendo esta paciente en este momento? Descríbanlo con detalle.',
      'Si no pueden dejar entrar a la hija, ¿qué palabras concretas le dirían para que se sienta menos sola?',
      '¿Qué diferencia haría que alguien se sentara dos minutos con ella antes de continuar?',
    ],
    rolEquipo: 'Equipo Verde — equipo del hospital',
  },
]

const steps = [
  { icon: IconTeam, label: 'Formen 2 equipos', sub: 'Dividan el grupo en partes iguales' },
  { icon: IconLightbulb, label: 'Lean su dilema', sub: 'No hay respuesta correcta — hay decisiones' },
  { icon: IconClock, label: '8 min de análisis', sub: 'Defiendan su postura con argumentos' },
]

export default function S07b_DinamicaApertura() {
  const [active, setActive] = useState(null)

  return (
    <div className="slide" style={{
      background: 'linear-gradient(160deg, #EEF2F7 0%, #dde9f5 100%)',
      padding: '40px 72px',
      gap: '1rem',
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
        <h2 className="slide-title" style={{ fontSize: 'clamp(1.7rem, 3vw, 2.8rem)', margin: 0 }}>
          Dilemas reales. Decisiones tuyas.
        </h2>
        <p className="slide-subtitle" style={{ fontSize: '0.92rem', marginTop: '0.3rem' }}>
          Dos equipos · Dos dilemas éticos · Sin respuesta fácil
        </p>
      </motion.div>

      {/* Steps row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        style={{ display: 'flex', gap: '1rem', justifyContent: 'center', width: '100%', maxWidth: '720px' }}
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
              padding: '0.85rem 1rem',
              display: 'flex', alignItems: 'center', gap: '10px',
              boxShadow: 'var(--shadow-sm)',
              border: '1.5px solid rgba(69,197,190,0.2)',
              flex: 1,
            }}
          >
            <div style={{
              width: '34px', height: '34px', borderRadius: '10px', flexShrink: 0,
              background: 'rgba(69,197,190,0.12)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <s.icon size={17} color="#2BA8A2" />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.82rem', color: 'var(--navy)', lineHeight: 1.2 }}>{s.label}</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-light)' }}>{s.sub}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Case cards */}
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: '1.2rem', width: '100%', maxWidth: '960px',
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
                ? `linear-gradient(135deg, ${c.color} 0%, ${c.color}e8 100%)`
                : 'white',
              borderRadius: '18px',
              padding: '1.3rem',
              boxShadow: 'var(--shadow-md)',
              border: `2px solid ${c.color}${active === c.id ? 'ff' : '30'}`,
              cursor: 'pointer',
              transition: 'background 0.3s, border 0.3s',
            }}
          >
            {/* Card header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.6rem' }}>
              <div>
                <div style={{
                  display: 'inline-block',
                  background: active === c.id ? 'rgba(255,255,255,0.18)' : `${c.color}15`,
                  color: active === c.id ? 'white' : c.color,
                  borderRadius: '8px', padding: '2px 12px',
                  fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.08em',
                  marginBottom: '4px',
                }}>
                  {c.title}
                </div>
                <div style={{
                  fontFamily: 'DM Serif Display, serif',
                  fontSize: '1.1rem',
                  color: active === c.id ? 'white' : 'var(--navy)',
                  lineHeight: 1.2,
                }}>
                  {c.escenario}
                </div>
              </div>
              <div style={{
                width: '40px', height: '40px', borderRadius: '12px', flexShrink: 0,
                background: active === c.id ? 'rgba(255,255,255,0.18)' : `${c.color}12`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: active === c.id ? c.accent : c.color,
              }}>
                <c.IconComp />
              </div>
            </div>

            {/* Tension badge */}
            {c.tension && (
              <div style={{
                display: 'inline-block',
                background: active === c.id ? 'rgba(255,255,255,0.12)' : 'rgba(69,197,190,0.1)',
                color: active === c.id ? c.accent : '#1a8a84',
                borderRadius: '6px', padding: '2px 10px',
                fontSize: '0.68rem', fontWeight: 700,
                marginBottom: '0.65rem',
                letterSpacing: '0.04em',
              }}>
                ⚡ {c.tension}
              </div>
            )}

            {/* Situation */}
            <p style={{
              fontSize: '0.81rem',
              color: active === c.id ? 'rgba(255,255,255,0.85)' : 'var(--text-light)',
              lineHeight: 1.65, margin: 0, marginBottom: '0.65rem',
            }}>
              {c.situacion}
            </p>

            {/* Patient emotion */}
            <div style={{
              borderRadius: '8px',
              padding: '0.5rem 0.75rem',
              background: active === c.id ? 'rgba(255,255,255,0.1)' : 'rgba(12,45,78,0.05)',
              borderLeft: `3px solid ${active === c.id ? c.accent : c.color}60`,
              marginBottom: '0.5rem',
            }}>
              <span style={{
                fontSize: '0.63rem', fontWeight: 800,
                color: active === c.id ? c.accent : c.color,
                textTransform: 'uppercase', letterSpacing: '0.08em',
                display: 'block', marginBottom: '2px',
              }}>El paciente en este momento siente</span>
              <span style={{
                fontSize: '0.76rem',
                color: active === c.id ? 'rgba(255,255,255,0.8)' : 'var(--text-light)',
                fontStyle: 'italic', lineHeight: 1.4,
              }}>{c.emocion}</span>
            </div>

            {/* Questions revealed on click */}
            <AnimatePresence>
              {active === c.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  style={{
                    borderTop: '1px solid rgba(255,255,255,0.18)',
                    paddingTop: '0.75rem',
                    marginTop: '0.3rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.45rem',
                  }}
                >
                  <div style={{ fontSize: '0.65rem', fontWeight: 800, color: c.accent, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                    Preguntas para el equipo
                  </div>
                  {c.preguntas.map((p, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                      <span style={{
                        fontSize: '0.68rem', fontWeight: 800,
                        color: c.accent,
                        flexShrink: 0, paddingTop: '1px',
                      }}>{idx + 1}.</span>
                      <p style={{
                        fontSize: '0.78rem', fontWeight: 600,
                        color: 'rgba(255,255,255,0.9)',
                        lineHeight: 1.5, margin: 0,
                      }}>{p}</p>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Role + hint */}
            <div style={{
              marginTop: '0.65rem',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}>
              <span style={{
                fontSize: '0.7rem', fontWeight: 600,
                color: active === c.id ? 'rgba(255,255,255,0.65)' : 'var(--teal-dark)',
              }}>
                {c.rolEquipo}
              </span>
              <span style={{
                fontSize: '0.66rem',
                color: active === c.id ? 'rgba(255,255,255,0.45)' : 'var(--text-muted)',
                fontStyle: 'italic',
              }}>
                {active === c.id ? 'Clic para cerrar' : 'Clic para ver las preguntas'}
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
        style={{ fontSize: '0.76rem', color: 'var(--text-muted)', textAlign: 'center', fontStyle: 'italic' }}
      >
        Deben llegar a una postura como equipo y estar listos para defenderla · El disenso interno también vale
      </motion.p>
    </div>
  )
}
