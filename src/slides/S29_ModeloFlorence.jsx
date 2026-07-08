import { motion } from 'framer-motion'

const levels = [
  { label: 'Profesionalismo', color: '#0C2D4E', width: '100%' },
  { label: 'Preparación', color: '#163557', width: '88%' },
  { label: 'Presencia', color: '#1a4068', width: '76%' },
  { label: 'Proactividad', color: '#2BA8A2', width: '64%' },
  { label: 'Paciencia', color: '#38B2AB', width: '52%' },
  { label: 'Precisión', color: '#45C5BE', width: '40%' },
  { label: 'Pasión por servir', color: '#6DD5D0', width: '28%' },
]

export default function S29_ModeloFlorence() {
  return (
    <div className="slide bg-dots" style={{ padding: '55px 80px' }}>
      <div className="corner-accent" />

      <div className="grid-split" style={{ maxWidth: '1000px', width: '100%', gridTemplateColumns: '1.2fr 1fr', gap: '4rem', alignItems: 'center' }}>
        {/* Left: pyramid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '100%' }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            style={{ textAlign: 'center', marginBottom: '0.5rem', fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}
          >
            Modelo de excelencia
          </motion.div>
          {[...levels].reverse().map((level, i) => (
            <motion.div
              key={level.label}
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                height: '38px',
                background: level.color,
                borderRadius: '6px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto',
                width: levels[levels.length - 1 - i].width,
                transformOrigin: 'center',
                position: 'relative',
              }}
            >
              <span style={{
                fontSize: '0.78rem',
                fontWeight: 700,
                color: 'white',
                letterSpacing: '0.04em',
              }}>
                {level.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Right: description */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1.3rem' }}
        >
          <div className="pill">Marco metodológico</div>
          <h2 className="slide-title">Modelo Florence</h2>
          <div className="teal-bar" />

          <p style={{ fontSize: '0.95rem', color: 'var(--text)', lineHeight: 1.7 }}>
            El Modelo Florence propone que la excelencia en el servicio hospitalario se construye progresivamente, desde la{' '}
            <strong style={{ color: 'var(--teal-dark)' }}>pasión</strong> como fundamento hasta el{' '}
            <strong style={{ color: 'var(--navy)' }}>profesionalismo</strong> como expresión máxima.
          </p>

          <div style={{
            background: 'linear-gradient(135deg, #0C2D4E, #163557)',
            borderRadius: '14px',
            padding: '1.2rem',
            color: 'white',
          }}>
            <div style={{ fontSize: '1.3rem', marginBottom: '6px' }}>🌹</div>
            <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.55, margin: 0, fontStyle: 'italic' }}>
              Inspirado en Florence Nightingale, quien demostró que la excelencia en el cuidado combina ciencia, humanidad y estándares rigurosos.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {['Las 7 P\'s', 'Hospitalidad', 'Excelencia'].map((tag) => (
              <span key={tag} className="pill" style={{ fontSize: '0.78rem' }}>{tag}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
