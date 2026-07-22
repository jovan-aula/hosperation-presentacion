import { motion } from 'framer-motion'

export default function S25_MartilloC_Revela() {
  return (
    <div className="slide" style={{
      background: 'linear-gradient(160deg, #EEF2F7 0%, #dff4f3 100%)',
      padding: '40px 72px',
      gap: '1.2rem',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(69,197,190,0.08) 1px, transparent 1px)',
        backgroundSize: '28px 28px', pointerEvents: 'none',
      }} />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        style={{ textAlign: 'center' }}
      >
        <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0 0 0.6rem 0' }}>
          La mayoría pensó en...
        </p>
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, type: 'spring', stiffness: 200, damping: 14 }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '0.4rem' }}
        >
          <span style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}>🔨</span>
          <span style={{
            fontFamily: 'DM Serif Display, serif',
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            color: '#e53e3e', lineHeight: 1,
          }}>Martillo Rojo</span>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
          style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}
        >
          Cerca del 70–80% de las personas llega a la misma respuesta.
        </motion.p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem', width: '100%', maxWidth: '980px' }}>

        {/* Left — why it happens */}
        <motion.div
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}
        >
          <div style={{
            background: '#0C2D4E', borderRadius: '16px', padding: '1.2rem 1.4rem',
          }}>
            <div style={{ fontSize: '0.62rem', fontWeight: 800, color: '#45C5BE', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>
              ¿Por qué pasa esto?
            </div>
            <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.88)', lineHeight: 1.65, margin: 0 }}>
              Cuando el cerebro está ocupado resolviendo cálculos rápidos, activa el{' '}
              <strong style={{ color: '#45C5BE' }}>pensamiento automático</strong> —
              el que responde con lo primero y más común que tiene guardado.
            </p>
            <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.88)', lineHeight: 1.65, margin: '8px 0 0 0' }}>
              Martillo: la herramienta más "disponible" en la memoria. Rojo: el color más llamativo.
              No elegiste — tu cerebro eligió por ti.
            </p>
          </div>

          {/* Kahneman reference */}
          <div style={{
            background: 'white', borderRadius: '14px', padding: '1rem 1.2rem',
            border: '1.5px solid rgba(69,197,190,0.2)', boxShadow: 'var(--shadow-sm)',
          }}>
            <div style={{ fontSize: '0.62rem', fontWeight: 800, color: '#2BA8A2', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px' }}>
              Sistema 1 vs Sistema 2 — Kahneman
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <div style={{ flex: 1, background: 'rgba(229,62,62,0.06)', borderRadius: '10px', padding: '0.65rem 0.8rem' }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#c53030', marginBottom: '4px' }}>⚡ Sistema 1</div>
                <p style={{ fontSize: '0.75rem', color: 'var(--navy)', lineHeight: 1.5, margin: 0 }}>
                  Rápido, automático, intuitivo. Actúa sin que nos demos cuenta.
                </p>
              </div>
              <div style={{ flex: 1, background: 'rgba(69,197,190,0.06)', borderRadius: '10px', padding: '0.65rem 0.8rem' }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#2BA8A2', marginBottom: '4px' }}>🧠 Sistema 2</div>
                <p style={{ fontSize: '0.75rem', color: 'var(--navy)', lineHeight: 1.5, margin: 0 }}>
                  Lento, reflexivo, consciente. Requiere esfuerzo y atención.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right — connection to healthcare */}
        <motion.div
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}
        >
          <div style={{
            background: 'white', borderRadius: '16px', padding: '1.2rem 1.4rem',
            border: '1.5px solid rgba(12,45,78,0.1)', boxShadow: 'var(--shadow-sm)',
          }}>
            <div style={{ fontSize: '0.62rem', fontWeight: 800, color: 'var(--navy)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '10px' }}>
              ¿Qué tiene que ver con el hospital?
            </div>
            {[
              { icon: '🏃', text: 'Cuando llevamos turnos largos o estamos sobrecargados, el cerebro cambia al piloto automático.' },
              { icon: '👤', text: 'En piloto automático, el paciente deja de ser una persona y se convierte en "el de la cama 4" o "el de la fractura".' },
              { icon: '😤', text: 'Esa despersonalización es exactamente lo que el estudio midió como "desprecio percibido" — 8 veces más durante la consulta.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + i * 0.15 }}
                style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: i < 2 ? '10px' : 0 }}
              >
                <span style={{ fontSize: '1.2rem', flexShrink: 0 }}>{item.icon}</span>
                <p style={{ fontSize: '0.82rem', color: 'var(--navy)', lineHeight: 1.55, margin: 0 }}>{item.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Key takeaway */}
          <motion.div
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            style={{
              background: 'linear-gradient(135deg, #0C2D4E, #1a4068)',
              borderRadius: '14px', padding: '1.1rem 1.3rem',
            }}
          >
            <p style={{ fontSize: '0.95rem', fontWeight: 700, color: 'white', lineHeight: 1.6, margin: 0 }}>
              Profesionalizar el servicio significa{' '}
              <span style={{ color: '#45C5BE' }}>salir del piloto automático</span>{' '}
              y elegir conscientemente cómo tratar a cada persona.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
