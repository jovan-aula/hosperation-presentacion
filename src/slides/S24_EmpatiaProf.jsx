import { motion } from 'framer-motion'
import { IconEye, IconEar, IconHandshake, IconMap } from '../components/Icons'

const elements = [
  {
    Icon: IconEye,
    label: 'Reconocer',
    desc: 'Percibir lo que la otra persona vive, sin minimizarlo ni exagerarlo.',
  },
  {
    Icon: IconEar,
    label: 'Escuchar',
    desc: 'Atender con presencia real, sin formular respuestas antes de tiempo.',
  },
  {
    Icon: IconHandshake,
    label: 'Validar',
    desc: 'Hacer saber a la persona que su experiencia es comprensible y legítima.',
  },
  {
    Icon: IconMap,
    label: 'Orientar',
    desc: 'Guiar hacia la siguiente acción manteniendo claridad y criterio profesional.',
  },
]

export default function S24_EmpatiaProf() {
  return (
    <div className="slide bg-dots" style={{ padding: '0', gap: 0 }}>
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1.5fr',
        width: '100%', height: '100%',
      }}>
        {/* Left: Photo */}
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <img
            src="/images/1.png"
            alt="Enfermera tomando la mano del paciente"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(90deg, transparent 50%, rgba(238,242,247,0.9) 100%)',
          }} />
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: '30%',
            background: 'linear-gradient(0deg, rgba(12,45,78,0.5) 0%, transparent 100%)',
          }} />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            style={{
              position: 'absolute', bottom: '28px', left: '20px', right: '20px',
              background: 'rgba(12,45,78,0.75)',
              backdropFilter: 'blur(8px)',
              borderRadius: '12px',
              padding: '0.7rem 1rem',
              border: '1px solid rgba(69,197,190,0.3)',
            }}
          >
            <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.85)', margin: 0, fontStyle: 'italic', lineHeight: 1.4 }}>
              "La empatía no es sentir lo mismo que el paciente;<br />es entenderlo suficiente para responder bien."
            </p>
          </motion.div>
        </div>

        {/* Right: Content */}
        <div style={{
          display: 'flex', flexDirection: 'column',
          justifyContent: 'center', gap: '1.4rem',
          padding: '56px 60px 56px 48px',
          background: 'var(--bg)',
        }}>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="pill" style={{ marginBottom: '0.5rem' }}>Habilidad clave</div>
            <h2 className="slide-title" style={{ fontSize: 'clamp(1.8rem, 3.2vw, 3rem)' }}>
              Empatía profesional
            </h2>
            <div className="teal-bar" style={{ marginTop: '0.8rem' }} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{
              background: 'white',
              borderRadius: '14px',
              padding: '1.1rem 1.4rem',
              boxShadow: 'var(--shadow-sm)',
              borderLeft: '4px solid #45C5BE',
            }}
          >
            <p style={{ fontSize: '0.88rem', color: 'var(--text)', lineHeight: 1.65, margin: 0, fontStyle: 'italic' }}>
              "La empatía profesional implica reconocer lo que la otra persona vive y necesita,{' '}
              <strong style={{ fontStyle: 'normal', color: 'var(--navy)' }}>sin perder claridad, criterio ni capacidad de respuesta.</strong>"
            </p>
          </motion.div>

          {/* 4 elements */}
          <div className="grid-2" style={{ gap: '0.85rem' }}>
            {elements.map((el, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.35 + i * 0.1 }}
                whileHover={{ y: -3, boxShadow: '0 10px 28px rgba(12,45,78,0.13)' }}
                style={{
                  background: 'white',
                  borderRadius: '14px',
                  padding: '1rem 1.1rem',
                  boxShadow: 'var(--shadow-sm)',
                  border: '1.5px solid rgba(69,197,190,0.2)',
                  display: 'flex', flexDirection: 'column', gap: '0.5rem',
                  cursor: 'default',
                }}
              >
                <div style={{
                  width: '36px', height: '36px', borderRadius: '10px',
                  background: 'rgba(69,197,190,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <el.Icon size={18} color="#2BA8A2" />
                </div>
                <div style={{
                  fontFamily: 'DM Serif Display, serif',
                  fontSize: '1.1rem',
                  color: 'var(--teal-dark)',
                }}>
                  {el.label}
                </div>
                <p style={{ fontSize: '0.76rem', color: 'var(--text-light)', lineHeight: 1.5, margin: 0 }}>{el.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
