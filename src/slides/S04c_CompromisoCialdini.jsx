import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const IconKey = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="7.5" cy="15.5" r="5.5"/>
    <path d="M21 2l-9.6 9.6"/>
    <path d="M15.5 7.5l3 3L22 7l-3-3"/>
  </svg>
)

const IconBrain = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-1.07-4.73A3 3 0 0 1 4.5 9.5a3 3 0 0 1 2-2.83V6.5A2.5 2.5 0 0 1 9.5 2Z"/>
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 1.07-4.73A3 3 0 0 0 19.5 9.5a3 3 0 0 0-2-2.83V6.5A2.5 2.5 0 0 0 14.5 2Z"/>
  </svg>
)

const IconHospital = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <path d="M9 22V12h6v10"/>
    <path d="M12 9v6M9 12h6" strokeWidth="1.5"/>
  </svg>
)

const tabs = [
  { id: 'por-que', label: '¿Por qué importa?', icon: IconKey },
  { id: 'cialdini', label: 'Principio Cialdini', icon: IconBrain },
  { id: 'ejemplo', label: 'En nuestros pacientes', icon: IconHospital },
]

const content = {
  'por-que': {
    accent: '#45C5BE',
    body: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
        <p style={{ fontSize: '1.05rem', color: 'var(--navy)', lineHeight: 1.7, margin: 0 }}>
          Cuando una persona <strong>verbaliza un compromiso</strong> frente a otros,
          activa un mecanismo psicológico que la impulsa a ser consistente con lo que dijo.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.9rem' }}>
          {[
            { stat: '3×', desc: 'más probable que cumpla una meta si la declara en voz alta (Gollwitzer, 1999)' },
            { stat: '65%', desc: 'mayor tasa de cumplimiento en tratamientos cuando el paciente firma un compromiso escrito (WHO, 2003)' },
          ].map((s, i) => (
            <div key={i} style={{
              background: 'rgba(69,197,190,0.08)',
              borderRadius: '14px', padding: '1.1rem',
              border: '1.5px solid rgba(69,197,190,0.2)',
            }}>
              <div style={{
                fontFamily: 'DM Serif Display, serif',
                fontSize: '2.2rem', color: '#45C5BE', lineHeight: 1,
                marginBottom: '0.4rem',
              }}>{s.stat}</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-light)', lineHeight: 1.5 }}>{s.desc}</div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', fontStyle: 'italic', margin: 0 }}>
          El compromiso declarado no es una formalidad — es una herramienta de cambio.
        </p>
      </div>
    ),
  },
  'cialdini': {
    accent: '#0C2D4E',
    body: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{
          background: '#0C2D4E',
          borderRadius: '16px', padding: '1.2rem 1.4rem',
          display: 'flex', gap: '1rem', alignItems: 'flex-start',
        }}>
          <div style={{
            width: '42px', height: '42px', borderRadius: '12px', flexShrink: 0,
            background: 'rgba(69,197,190,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ fontSize: '1.4rem' }}>📖</span>
          </div>
          <div>
            <div style={{ fontWeight: 700, color: '#45C5BE', fontSize: '0.8rem', letterSpacing: '0.1em', marginBottom: '0.3rem' }}>
              PRINCIPIO DE COMPROMISO Y COHERENCIA
            </div>
            <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: '0.92rem', lineHeight: 1.65, margin: 0 }}>
              "Las personas tienen un impulso profundo de ser y parecer consistentes
              con lo que ya han dicho o hecho. Una vez que tomamos una posición,
              encontramos razones para justificarla y la mantenemos."
            </p>
            <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.45)', marginTop: '0.5rem' }}>
              — Robert B. Cialdini · <em>Influence: The Psychology of Persuasion</em> (1984)
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
          {[
            { paso: '1', texto: 'La persona hace una declaración pública o escrita.' },
            { paso: '2', texto: 'Su imagen propia queda ligada a esa declaración.' },
            { paso: '3', texto: 'Para ser coherente con su imagen, actúa conforme a lo que dijo.' },
          ].map((p) => (
            <div key={p.paso} style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
              <div style={{
                width: '28px', height: '28px', borderRadius: '50%', flexShrink: 0,
                background: 'rgba(69,197,190,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.78rem', fontWeight: 800, color: '#45C5BE',
              }}>{p.paso}</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', lineHeight: 1.55, margin: 0, paddingTop: '4px' }}>
                {p.texto}
              </p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  'ejemplo': {
    accent: '#2BA8A2',
    body: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{
          background: 'rgba(69,197,190,0.07)',
          borderRadius: '14px', padding: '1rem 1.2rem',
          border: '1.5px solid rgba(69,197,190,0.2)',
        }}>
          <div style={{ fontWeight: 700, fontSize: '0.78rem', color: '#2BA8A2', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>
            ESCENARIO
          </div>
          <p style={{ fontSize: '0.9rem', color: 'var(--navy)', lineHeight: 1.6, margin: 0 }}>
            Un paciente con diabetes sale de consulta con indicaciones de dieta y medicamento.
            La adherencia promedio a este tipo de tratamiento es del <strong>50%</strong>.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
          <div style={{ fontWeight: 700, fontSize: '0.8rem', color: 'var(--navy)', letterSpacing: '0.05em' }}>
            ¿QUÉ CAMBIA CON EL PRINCIPIO DE CIALDINI?
          </div>
          {[
            {
              tipo: 'Sin compromiso',
              color: '#e57373',
              bg: '#fff5f5',
              border: '#e5737330',
              texto: '"Aquí están sus indicaciones. Hasta la próxima cita."',
            },
            {
              tipo: 'Con compromiso',
              color: '#2BA8A2',
              bg: 'rgba(69,197,190,0.06)',
              border: 'rgba(69,197,190,0.25)',
              texto: '"Señor Martínez, ¿me puede decir en sus palabras qué va a hacer diferente esta semana para cuidar su azúcar?" — el paciente lo verbaliza. "Muy bien. Eso que acaba de decir es su compromiso con usted mismo."',
            },
          ].map((c, i) => (
            <div key={i} style={{
              borderRadius: '12px', padding: '0.9rem 1rem',
              background: c.bg, border: `1.5px solid ${c.border}`,
            }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 800, color: c.color, marginBottom: '0.3rem', letterSpacing: '0.08em' }}>
                {c.tipo}
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--navy)', lineHeight: 1.6, margin: 0, fontStyle: 'italic' }}>
                "{c.texto}"
              </p>
            </div>
          ))}
        </div>

        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontStyle: 'italic', margin: 0, textAlign: 'center' }}>
          La diferencia no está en el conocimiento clínico — está en una sola pregunta bien hecha.
        </p>
      </div>
    ),
  },
}

export default function S04c_CompromisoCialdini() {
  const [active, setActive] = useState('por-que')

  return (
    <div className="slide" style={{
      background: 'linear-gradient(160deg, #EEF2F7 0%, #dde9f5 100%)',
      padding: '40px 72px',
      gap: '1.2rem',
    }}>
      {/* dots */}
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
          Psicología del compromiso
        </div>
        <h2 className="slide-title" style={{ fontSize: 'clamp(1.7rem, 3vw, 2.8rem)', margin: 0 }}>
          ¿Por qué declarar un compromiso<br />
          <span style={{ color: '#45C5BE' }}>cambia el resultado?</span>
        </h2>
      </motion.div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        style={{ display: 'flex', gap: '0.6rem', background: 'rgba(12,45,78,0.07)', borderRadius: '14px', padding: '6px' }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            style={{
              flex: 1,
              padding: '0.65rem 1rem',
              borderRadius: '10px',
              border: 'none',
              cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px',
              fontFamily: 'inherit',
              fontWeight: active === tab.id ? 700 : 500,
              fontSize: '0.83rem',
              background: active === tab.id ? 'white' : 'transparent',
              color: active === tab.id ? 'var(--navy)' : 'var(--text-light)',
              boxShadow: active === tab.id ? '0 2px 10px rgba(12,45,78,0.1)' : 'none',
              transition: 'all 0.2s',
            }}
          >
            <tab.icon />
            {tab.label}
          </button>
        ))}
      </motion.div>

      {/* Content */}
      <div style={{ width: '100%', maxWidth: '820px' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            {content[active].body}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
