import { motion } from 'framer-motion'

export default function S25_StroopInstruccion() {
  return (
    <div className="slide" style={{
      background: 'white',
      justifyContent: 'center', alignItems: 'center', gap: '2rem',
    }}>


      <motion.div
        initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        style={{ textAlign: 'center' }}
      >
        <div className="pill pill--solid" style={{ marginBottom: '1rem' }}>
          Test de Stroop · Ejercicio grupal
        </div>
        <h2 style={{
          fontFamily: 'DM Serif Display, serif',
          fontSize: 'clamp(2rem, 4vw, 3.5rem)',
          fontWeight: 400, color: 'var(--navy)',
          lineHeight: 1.2, margin: '0 0 0.5rem 0',
        }}>
          Di el <span style={{ color: '#16a34a' }}>COLOR de la tinta</span>
        </h2>
        <h3 style={{
          fontFamily: 'DM Serif Display, serif',
          fontSize: 'clamp(1.2rem, 2.5vw, 2rem)',
          fontWeight: 400, color: 'var(--text-muted)',
          lineHeight: 1.2, margin: 0,
        }}>
          — no la palabra que dice —
        </h3>
      </motion.div>

      {/* Example */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
          background: 'rgba(12,45,78,0.04)', borderRadius: '20px',
          padding: '1.4rem 2.4rem',
          border: '1px solid rgba(12,45,78,0.1)',
        }}
      >
        <span style={{ fontSize: '0.65rem', fontWeight: 800, color: 'rgba(0,0,0,0.3)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
          Por ejemplo
        </span>
        <span style={{
          fontFamily: 'DM Serif Display, serif',
          fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
          color: '#2563eb', // blue ink
          lineHeight: 1,
          userSelect: 'none',
        }}>
          ROJO
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '0.75rem', color: 'rgba(229,62,62,0.6)', textDecoration: 'line-through' }}>rojo ✕</span>
          <span style={{ fontSize: '0.75rem', color: '#45C5BE', fontWeight: 700 }}>azul ✓</span>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
        style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textAlign: 'center', margin: 0 }}
      >
        En voz alta · al unísono · lo más rápido que puedan
      </motion.p>
    </div>
  )
}
