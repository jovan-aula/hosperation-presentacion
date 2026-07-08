import { motion } from 'framer-motion'
import { IconEar, IconMessage, IconCheck, IconMap } from '../components/Icons'

const quadrants = [
  { label: 'Escuchar', Icon: IconEar, desc: 'Prestar atención completa, sin interrumpir', color: '#45C5BE', pos: 'tl' },
  { label: 'Explicar', Icon: IconMessage, desc: 'Transmitir información clara y comprensible', color: '#0C2D4E', pos: 'tr' },
  { label: 'Confirmar', Icon: IconCheck, desc: 'Verificar que el mensaje fue recibido y comprendido', color: '#2BA8A2', pos: 'bl' },
  { label: 'Orientar', Icon: IconMap, desc: 'Guiar hacia la siguiente acción o persona responsable', color: '#163557', pos: 'br' },
]

const IconChat = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
)

export default function S22_ComunicacionProfesional() {
  return (
    <div className="slide bg-dots" style={{ padding: '55px 80px', gap: '1.5rem' }}>
      <div className="corner-accent" />

      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center' }}
      >
        <div className="pill" style={{ marginBottom: '0.5rem' }}>Módulo 4</div>
        <h2 className="slide-title">Comunicación profesional</h2>
      </motion.div>

      <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', width: '100%', maxWidth: '760px', background: 'rgba(69,197,190,0.2)', borderRadius: '20px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
        {/* Center label */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80px', height: '80px', borderRadius: '50%',
          background: 'linear-gradient(135deg, #0C2D4E, #163557)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(12,45,78,0.3)',
          zIndex: 10,
        }}>
          <IconChat />
        </div>

        {quadrants.map((q, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
            style={{
              background: 'white',
              padding: '2rem',
              display: 'flex', flexDirection: 'column', gap: '0.6rem',
              alignItems: i % 2 === 0 ? 'flex-end' : 'flex-start',
              textAlign: i % 2 === 0 ? 'right' : 'left',
            }}
          >
            <div style={{ color: q.color }}>
              <q.Icon size={32} color={q.color} />
            </div>
            <div style={{
              fontFamily: 'DM Serif Display, serif',
              fontSize: '1.4rem',
              color: q.color,
              fontWeight: 400,
            }}>
              {q.label}
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-light)', lineHeight: 1.5, margin: 0 }}>{q.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75 }}
        style={{
          background: 'linear-gradient(135deg, rgba(12,45,78,0.07), rgba(69,197,190,0.1))',
          border: '1px solid rgba(69,197,190,0.2)',
          borderRadius: '12px',
          padding: '0.9rem 2rem',
          maxWidth: '720px',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '0.92rem', color: 'var(--navy)', fontWeight: 700, margin: 0, lineHeight: 1.5 }}>
          "Una comunicación profesional reduce incertidumbre, previene errores y genera confianza."
        </p>
      </motion.div>
    </div>
  )
}
