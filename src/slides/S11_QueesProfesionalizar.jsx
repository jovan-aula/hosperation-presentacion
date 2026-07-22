import { motion } from 'framer-motion'
import { IconLightbulb, IconMessage } from '../components/Icons'

const IconBrain = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-1.06-4.84 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.96-4.62A2.5 2.5 0 0 1 9.5 2z"/>
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 1.06-4.84 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.96-4.62A2.5 2.5 0 0 0 14.5 2z"/>
  </svg>
)

const IconClipboard = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
    <rect x="8" y="2" width="8" height="4" rx="1"/>
  </svg>
)

const pillars = [
  {
    num: '01',
    label: 'Conocimiento',
    Icon: IconBrain,
    desc: 'Saber qué pasa, qué sigue, y poder explicarlo sin que el paciente tenga que adivinar.',
    ejemplo: '"¿Qué me van a hacer?" — y tú puedes responderlo.',
    color: '#45C5BE',
  },
  {
    num: '02',
    label: 'Actitud',
    Icon: IconLightbulb,
    desc: 'Elegir servir bien aunque el turno sea largo y nadie esté mirando.',
    ejemplo: 'No porque te toca. Porque decidiste que importa.',
    color: '#45C5BE',
  },
  {
    num: '03',
    label: 'Comunicación',
    Icon: IconMessage,
    desc: 'No basta con informar — hay que asegurarse de que la persona entendió y se fue tranquila.',
    ejemplo: '"¿Me puede repetir cómo va a tomar el medicamento?"',
    color: '#45C5BE',
  },
  {
    num: '04',
    label: 'Estándares',
    Icon: IconClipboard,
    desc: 'El paciente no sabe que tuviste un mal día. Y no debería notarlo.',
    ejemplo: 'Consistencia no es perfección — es compromiso.',
    color: '#45C5BE',
  },
]

export default function S11_QueesProfesionalizar() {
  return (
    <div className="slide slide--dark" style={{
      background: 'linear-gradient(135deg, #081e35 0%, #0C2D4E 100%)',
      padding: '48px 72px',
      gap: '1.6rem',
    }}>
      <div className="bg-dots--dark" style={{ position: 'absolute', inset: 0 }} />

      {/* Glow */}
      <div style={{
        position: 'absolute',
        width: '700px', height: '300px',
        background: 'radial-gradient(ellipse, rgba(69,197,190,0.1) 0%, transparent 70%)',
        pointerEvents: 'none', top: '10%',
      }} />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center' }}
      >
        <div className="pill" style={{ marginBottom: '0.5rem', borderColor: 'rgba(69,197,190,0.4)', color: '#45C5BE' }}>
          Modelo
        </div>
        <h2 style={{
          fontFamily: 'DM Serif Display, serif',
          fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
          fontWeight: 400, color: 'white',
          lineHeight: 1.15, margin: 0,
        }}>
          ¿Qué es profesionalizar el servicio?
        </h2>
      </motion.div>

      {/* 4 Pillars */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1rem',
        width: '100%',
        maxWidth: '1000px',
      }}>
        {pillars.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 + i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(69,197,190,0.2)',
              borderTop: '3px solid #45C5BE',
              borderRadius: '16px',
              padding: '1.3rem 1.1rem',
              display: 'flex', flexDirection: 'column', gap: '0.7rem',
            }}
          >
            {/* Number + icon */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{
                fontSize: '0.65rem', fontWeight: 800,
                color: 'rgba(69,197,190,0.6)', letterSpacing: '0.12em',
              }}>{p.num}</span>
              <div style={{ color: '#45C5BE', opacity: 0.85 }}>
                <p.Icon />
              </div>
            </div>

            {/* Label */}
            <div style={{
              fontFamily: 'DM Serif Display, serif',
              fontSize: 'clamp(1.1rem, 1.6vw, 1.35rem)',
              color: 'white', lineHeight: 1.2,
            }}>
              {p.label}
            </div>

            {/* Description */}
            <p style={{
              fontSize: '0.82rem',
              color: 'rgba(255,255,255,0.72)',
              lineHeight: 1.6, margin: 0,
              flex: 1,
            }}>
              {p.desc}
            </p>

            {/* Example */}
            <div style={{
              borderTop: '1px solid rgba(69,197,190,0.2)',
              paddingTop: '0.65rem',
              fontSize: '0.74rem',
              color: '#45C5BE',
              fontStyle: 'italic',
              lineHeight: 1.45,
            }}>
              {p.ejemplo}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quote */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        style={{
          maxWidth: '780px',
          textAlign: 'center',
          borderTop: '1px solid rgba(69,197,190,0.2)',
          paddingTop: '1.1rem',
        }}
      >
        <p style={{
          fontSize: 'clamp(0.88rem, 1.4vw, 1.05rem)',
          color: 'rgba(255,255,255,0.75)',
          fontStyle: 'italic',
          lineHeight: 1.65, margin: 0,
        }}>
          "Un paciente asustado no necesita que le recites el protocolo.<br/>
          Necesita que alguien lo mire a los ojos y le diga:{' '}
          <span style={{ color: '#45C5BE', fontStyle: 'normal', fontWeight: 600 }}>
            estamos al pendiente de usted.
          </span>"
        </p>
      </motion.div>
    </div>
  )
}
