import { motion } from 'framer-motion'

export default function S25_StroopB_Revela() {
  return (
    <div className="slide" style={{
      background: 'white',
      padding: '48px 80px',
      gap: '1.6rem',
      justifyContent: 'center',
    }}>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        style={{ textAlign: 'center' }}
      >
        <h2 style={{
          fontFamily: 'DM Serif Display, serif',
          fontSize: 'clamp(2rem, 4vw, 3.2rem)',
          fontWeight: 400, color: 'var(--navy)',
          lineHeight: 1.15, margin: '0 0 0.4rem 0',
        }}>
          Tu cerebro leyó la palabra<br />
          <span style={{ color: '#dc2626' }}>antes de ver el color.</span>
        </h2>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', margin: 0 }}>
          No fue falta de atención — es cómo funciona el cerebro humano.
        </p>
      </motion.div>

      {/* 2 columns */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.4rem', width: '100%', maxWidth: '900px' }}>

        {/* Left — why */}
        <motion.div
          initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          style={{
            background: '#0C2D4E', borderRadius: '18px',
            padding: '1.4rem 1.6rem', display: 'flex', flexDirection: 'column', gap: '1rem',
          }}
        >
          <div style={{ fontSize: '0.62rem', fontWeight: 800, color: '#45C5BE', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
            ¿Por qué pasa?
          </div>
          {[
            { icon: '⚡', text: 'Leer es automático — el cerebro lo hace sin que se lo pidas.' },
            { icon: '🧠', text: 'Identificar el color requiere esfuerzo consciente — y llega tarde.' },
            { icon: '💥', text: 'Los dos chocan. Eso se llama interferencia cognitiva.' },
          ].map((item, i) => (
            <motion.div key={i}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.15 }}
              style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}
            >
              <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>{item.icon}</span>
              <p style={{ fontSize: '0.84rem', color: 'rgba(255,255,255,0.82)', lineHeight: 1.55, margin: 0 }}>{item.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Right — hospital connection */}
        <motion.div
          initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          <div style={{
            background: 'rgba(220,38,38,0.05)', borderRadius: '14px',
            padding: '1.1rem 1.3rem',
            border: '1.5px solid rgba(220,38,38,0.15)',
          }}>
            <div style={{ fontSize: '0.62rem', fontWeight: 800, color: '#dc2626', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '8px' }}>
              En el hospital es lo mismo
            </div>
            <p style={{ fontSize: '0.86rem', color: 'var(--navy)', lineHeight: 1.65, margin: 0 }}>
              Después de miles de consultas, el cerebro procesa automáticamente:{' '}
              <strong>"diabético, cama 4"</strong> — antes de ver a la persona que está frente a ti.
            </p>
            <p style={{ fontSize: '0.86rem', color: 'var(--text-light)', lineHeight: 1.65, margin: '8px 0 0 0' }}>
              No es mala intención. Es piloto automático.
            </p>
          </div>

          {/* Takeaway */}
          <motion.div
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            style={{
              background: '#0C2D4E', borderRadius: '14px',
              padding: '1.1rem 1.3rem',
            }}
          >
            <p style={{ fontSize: '0.92rem', fontWeight: 700, color: 'white', lineHeight: 1.6, margin: 0 }}>
              Profesionalizar es{' '}
              <span style={{ color: '#45C5BE' }}>entrenar al cerebro para ver a la persona, no solo la etiqueta.</span>
            </p>
          </motion.div>

          {/* Bridge */}
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}
            style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontStyle: 'italic', margin: 0, borderLeft: '3px solid #45C5BE', paddingLeft: '0.8rem' }}
          >
            Ahora veamos otro experimento que demuestra lo mismo de otra forma...
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}
