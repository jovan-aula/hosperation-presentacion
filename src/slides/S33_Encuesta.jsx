import { motion } from 'framer-motion'

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay: d, ease: [0.25, 0.46, 0.45, 0.94] },
})

const QR_URL = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&color=0C2D4E&bgcolor=EEF2F7&data=${encodeURIComponent('https://hosperation-presentacion.vercel.app/encuesta.html')}`

export default function S33_Encuesta() {
  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', overflow: 'hidden' }}>

      {/* Panel izquierdo — oscuro */}
      <div style={{
        width: '52%', height: '100%',
        background: 'linear-gradient(160deg,#081e35 0%,#0C2D4E 100%)',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center', padding: '64px 56px',
        position: 'relative',
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(69,197,190,0.05) 1px, transparent 1px)', backgroundSize: '28px 28px', pointerEvents: 'none' }} />

        <motion.div {...fade(0.1)} style={{
          display: 'inline-flex', alignSelf: 'flex-start',
          background: 'rgba(69,197,190,0.15)',
          border: '1px solid rgba(69,197,190,0.35)',
          borderRadius: '100px',
          padding: '0.3rem 1rem',
          fontSize: '0.65rem', fontWeight: 800,
          color: '#45C5BE', letterSpacing: '0.1em', textTransform: 'uppercase',
          marginBottom: '1.6rem',
        }}>
          Antes de terminar
        </motion.div>

        <motion.h1 {...fade(0.2)} style={{
          fontFamily: 'DM Serif Display, serif',
          fontSize: 'clamp(2.2rem,3.8vw,3rem)',
          fontWeight: 400, color: 'white',
          lineHeight: 1.2, letterSpacing: '-0.02em',
          marginBottom: '1rem',
        }}>
          Tu opinión<br />nos importa.
        </motion.h1>

        <motion.div {...fade(0.3)} style={{ width: '48px', height: '3px', background: '#45C5BE', borderRadius: '2px', marginBottom: '1.4rem' }} />

        <motion.p {...fade(0.4)} style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: '2rem', maxWidth: '380px' }}>
          Escanea el código con tu celular y completa la evaluación. Son solo 2 minutos y es completamente anónima.
        </motion.p>

        {/* Pasos */}
        <motion.div {...fade(0.55)} style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
          {[
            'Abre la cámara de tu celular',
            'Apunta al código QR',
            'Completa la evaluación',
          ].map((t, i) => (
            <div key={i} style={{ display: 'flex', gap: '0.9rem', alignItems: 'center' }}>
              <div style={{
                width: '24px', height: '24px', borderRadius: '50%',
                background: 'rgba(69,197,190,0.15)',
                border: '1px solid rgba(69,197,190,0.35)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.65rem', fontWeight: 800, color: '#45C5BE', flexShrink: 0,
              }}>{i + 1}</div>
              <p style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.7)', margin: 0 }}>{t}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Panel derecho — claro */}
      <div style={{
        width: '48%', height: '100%',
        background: 'var(--bg, #EEF2F7)',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center', alignItems: 'center',
        padding: '64px 48px', gap: '1.5rem',
      }}>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            background: 'white',
            borderRadius: '24px',
            padding: '28px',
            boxShadow: '0 8px 48px rgba(12,45,78,0.12)',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', gap: '16px',
          }}
        >
          <img
            src={QR_URL}
            alt="QR Encuesta"
            style={{ width: 220, height: 220, borderRadius: '8px' }}
          />
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0C2D4E', letterSpacing: '0.05em', textTransform: 'uppercase', margin: 0 }}>
              Evaluación · Módulo 2
            </p>
            <p style={{ fontSize: '0.7rem', color: 'rgba(12,45,78,0.4)', margin: '3px 0 0', fontWeight: 300 }}>
              Anónima · 2 minutos
            </p>
          </div>
        </motion.div>

        <motion.p {...fade(0.6)} style={{
          fontSize: '0.75rem', color: 'rgba(12,45,78,0.4)',
          textAlign: 'center', fontWeight: 300,
          maxWidth: '240px', lineHeight: 1.5,
        }}>
          hosperation-presentacion.vercel.app/encuesta.html
        </motion.p>
      </div>

    </div>
  )
}
