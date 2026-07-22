import { motion } from 'framer-motion'
import { useState } from 'react'

const IconStar = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
)

const IconZap = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
)

const example = [
  {
    etapa: 'Llegada',
    momento: 'El paciente entra al hospital por primera vez.',
    dolor: 'No hay señalización clara. Nadie lo saluda. Da vueltas 5 minutos sin saber a dónde ir.',
  },
  {
    etapa: 'Registro',
    momento: 'Se acerca a la ventanilla para registrarse.',
    dolor: 'El personal no levanta la vista. Le dan un formulario sin explicarle nada.',
  },
  {
    etapa: 'Espera',
    momento: 'Se sienta a esperar su turno.',
    dolor: 'Nadie le dice cuánto tiempo falta. Después de 40 minutos, tampoco.',
  },
]

export default function S21a_MomentosYDolor() {
  const [activeExample, setActiveExample] = useState(0)

  return (
    <div className="slide bg-dots" style={{ padding: '46px 72px', gap: '1.4rem' }}>
      <div className="corner-accent" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center' }}
      >
        <div className="pill" style={{ marginBottom: '0.5rem' }}>Conceptos clave</div>
        <h2 className="slide-title" style={{ margin: 0, fontSize: 'clamp(1.7rem, 3vw, 2.6rem)' }}>
          Momentos de verdad y puntos de dolor
        </h2>
      </motion.div>

      {/* Two definitions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', width: '100%', maxWidth: '900px' }}
      >
        {/* Momento de verdad */}
        <div style={{
          background: '#0C2D4E',
          borderRadius: '16px',
          padding: '1.2rem 1.4rem',
          display: 'flex', flexDirection: 'column', gap: '0.7rem',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '36px', height: '36px', borderRadius: '10px',
              background: 'rgba(69,197,190,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#45C5BE', flexShrink: 0,
            }}>
              <IconStar />
            </div>
            <span style={{ fontFamily: 'DM Serif Display, serif', fontSize: '1.15rem', color: 'white' }}>
              Momento de verdad
            </span>
          </div>
          <p style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.82)', lineHeight: 1.65, margin: 0 }}>
            Cualquier contacto entre el paciente y el hospital — con una persona, un proceso o un espacio — donde se forma una percepción. No importa si dura 10 segundos.
          </p>
          <div style={{
            background: 'rgba(69,197,190,0.12)', borderRadius: '8px',
            padding: '0.55rem 0.8rem',
            fontSize: '0.76rem', color: '#45C5BE', fontStyle: 'italic',
          }}>
            "Cada punto de contacto construye una percepción." — Jan Carlzon
          </div>
        </div>

        {/* Punto de dolor */}
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '1.2rem 1.4rem',
          border: '1.5px solid rgba(229,62,62,0.2)',
          display: 'flex', flexDirection: 'column', gap: '0.7rem',
          boxShadow: 'var(--shadow-sm)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '36px', height: '36px', borderRadius: '10px',
              background: 'rgba(229,62,62,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#E53E3E', flexShrink: 0,
            }}>
              <IconZap />
            </div>
            <span style={{ fontFamily: 'DM Serif Display, serif', fontSize: '1.15rem', color: 'var(--navy)' }}>
              Punto de dolor
            </span>
          </div>
          <p style={{ fontSize: '0.83rem', color: 'var(--text-light)', lineHeight: 1.65, margin: 0 }}>
            Un momento de verdad donde algo falla — una espera sin información, una explicación confusa, una actitud fría. Es donde la confianza se fractura.
          </p>
          <div style={{
            background: 'rgba(229,62,62,0.06)', borderRadius: '8px',
            padding: '0.55rem 0.8rem',
            fontSize: '0.76rem', color: '#C53030', fontStyle: 'italic',
          }}>
            No siempre es un error clínico. Casi nunca lo es.
          </div>
        </div>
      </motion.div>

      {/* Hospital example — interactive */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        style={{ width: '100%', maxWidth: '900px' }}
      >
        <div style={{ fontSize: '0.65rem', fontWeight: 800, color: 'var(--navy)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
          Ejemplo aplicado — primer contacto con el hospital
        </div>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '10px' }}>
          {example.map((e, i) => (
            <button
              key={i}
              onClick={() => setActiveExample(i)}
              style={{
                flex: 1, padding: '0.5rem 0.7rem',
                borderRadius: '10px', border: 'none', cursor: 'pointer',
                background: activeExample === i ? '#0C2D4E' : 'rgba(12,45,78,0.07)',
                color: activeExample === i ? 'white' : 'var(--navy)',
                fontFamily: 'inherit', fontSize: '0.8rem', fontWeight: 700,
                transition: 'all 0.2s',
              }}
            >
              {e.etapa}
            </button>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <div style={{
            background: '#0C2D4E', borderRadius: '12px', padding: '1rem 1.1rem',
          }}>
            <div style={{ fontSize: '0.62rem', fontWeight: 800, color: '#45C5BE', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>
              ⭐ Momento de verdad
            </div>
            <p style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.88)', lineHeight: 1.6, margin: 0 }}>
              {example[activeExample].momento}
            </p>
          </div>
          <div style={{
            background: '#fff5f5', borderRadius: '12px', padding: '1rem 1.1rem',
            border: '1.5px solid rgba(229,62,62,0.2)',
          }}>
            <div style={{ fontSize: '0.62rem', fontWeight: 800, color: '#C53030', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>
              ⚡ Punto de dolor
            </div>
            <p style={{ fontSize: '0.83rem', color: '#2d4a62', lineHeight: 1.6, margin: 0 }}>
              {example[activeExample].dolor}
            </p>
          </div>
        </div>
      </motion.div>

      {/* 2 questions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.65 }}
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', width: '100%', maxWidth: '900px' }}
      >
        {[
          { num: '1', q: '¿Qué momentos de verdad tienen en su hospital?', color: '#0C2D4E', bg: 'rgba(12,45,78,0.05)', border: 'rgba(12,45,78,0.12)' },
          { num: '2', q: '¿Qué puntos de dolor identifican en su área o en la experiencia de sus pacientes?', color: '#C53030', bg: 'rgba(229,62,62,0.05)', border: 'rgba(229,62,62,0.15)' },
        ].map((item, i) => (
          <div key={i} style={{
            background: item.bg, borderRadius: '12px', padding: '0.9rem 1.1rem',
            border: `1.5px solid ${item.border}`,
            display: 'flex', gap: '10px', alignItems: 'flex-start',
          }}>
            <div style={{
              width: '26px', height: '26px', borderRadius: '50%', flexShrink: 0,
              background: item.color, color: 'white',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.75rem', fontWeight: 800,
            }}>{item.num}</div>
            <p style={{ fontSize: '0.85rem', fontWeight: 700, color: item.color, lineHeight: 1.5, margin: 0 }}>
              {item.q}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
