import { motion } from 'framer-motion'

// word = lo que dice, color = color de la tinta (siempre diferente)
const words = [
  { word: 'ROJO',     color: '#2563eb' },
  { word: 'AZUL',     color: '#16a34a' },
  { word: 'VERDE',    color: '#e53e3e' },
  { word: 'MORADO',   color: '#f97316' },
  { word: 'NARANJA',  color: '#7c3aed' },
  { word: 'NEGRO',    color: '#2BA8A2' },
  { word: 'AMARILLO', color: '#c53030' },
  { word: 'AZUL',     color: '#ea580c' },
  { word: 'VERDE',    color: '#9333ea' },
  { word: 'ROJO',     color: '#0891b2' },
]

export default function S25_StroopA_Test() {
  return (
    <div className="slide slide--dark" style={{
      background: 'linear-gradient(135deg, #081e35 0%, #0C2D4E 100%)',
      padding: '36px 72px',
      gap: '1.4rem',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(69,197,190,0.06) 1px, transparent 1px)',
        backgroundSize: '28px 28px', pointerEvents: 'none',
      }} />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        style={{ textAlign: 'center' }}
      >
        <div className="pill" style={{ marginBottom: '0.6rem', borderColor: 'rgba(69,197,190,0.4)', color: '#45C5BE' }}>
          Test de Stroop · Psicología cognitiva, 1935
        </div>
        <h2 style={{
          fontFamily: 'DM Serif Display, serif',
          fontSize: 'clamp(1.6rem, 3vw, 2.6rem)',
          fontWeight: 400, color: 'white', lineHeight: 1.2, margin: 0,
        }}>
          Di el <span style={{ color: '#45C5BE' }}>COLOR de la tinta</span> —{' '}
          <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85em' }}>no la palabra que dice</span>
        </h2>
      </motion.div>

      {/* Instruction banner */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
        style={{
          background: 'rgba(229,62,62,0.12)', border: '1px solid rgba(229,62,62,0.3)',
          borderRadius: '12px', padding: '0.65rem 1.4rem', textAlign: 'center',
        }}
      >
        <span style={{ fontSize: '0.88rem', color: '#fc8181', fontWeight: 700 }}>
          ⚡ Lo más rápido que puedas — en voz alta — sin parar
        </span>
      </motion.div>

      {/* Stroop word grid */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '0.6rem 1.2rem',
          width: '100%', maxWidth: '860px',
        }}
      >
        {words.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 + i * 0.07 }}
            style={{ textAlign: 'center' }}
          >
            <span style={{
              fontFamily: 'DM Serif Display, serif',
              fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)',
              fontWeight: 400,
              color: item.color,
              lineHeight: 1.3,
              userSelect: 'none',
            }}>
              {item.word}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
        style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)', textAlign: 'center', margin: 0 }}
      >
        Ejemplo: "ROJO" escrito en azul → la respuesta correcta es <strong style={{ color: 'rgba(255,255,255,0.5)' }}>"azul"</strong>
      </motion.p>
    </div>
  )
}
