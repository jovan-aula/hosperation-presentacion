import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function S01_Portada() {
  return (
    <div style={{
      width: '100vw', height: '100vh',
      display: 'grid', gridTemplateColumns: '1fr 1fr',
      overflow: 'hidden', position: 'relative',
    }}>
      {/* ── Left panel ── */}
      <div style={{
        background: 'linear-gradient(150deg, #081e35 0%, #0C2D4E 60%, #0f3660 100%)',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'space-between', padding: '52px 60px',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Dot pattern */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(69,197,190,0.08) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          pointerEvents: 'none',
        }} />
        {/* Teal glow bottom-right */}
        <div style={{
          position: 'absolute', bottom: '-80px', right: '-80px',
          width: '350px', height: '350px',
          background: 'radial-gradient(circle, rgba(69,197,190,0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        {/* Logos */}
        <motion.div {...fade(0.1)} style={{ zIndex: 1 }}>
          <img
            src="/logo-sin-fondo.png"
            alt="Aula Consultoría + Hosperation"
            style={{
              height: '60px',
              objectFit: 'contain',
              objectPosition: 'left center',
            }}
          />
        </motion.div>

        {/* Main content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem', zIndex: 1 }}>
          <motion.div {...fade(0.3)}>
            <div style={{
              display: 'inline-block',
              background: 'rgba(69,197,190,0.15)',
              border: '1px solid rgba(69,197,190,0.4)',
              borderRadius: '100px',
              padding: '0.35rem 1.2rem',
              fontSize: '0.72rem', fontWeight: 600, color: '#45C5BE',
              letterSpacing: '0.1em', textTransform: 'uppercase',
            }}>
              Taller de Capacitación
            </div>
          </motion.div>

          <motion.h1 {...fade(0.45)} style={{
            fontFamily: 'DM Serif Display, serif',
            fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
            fontWeight: 400, color: 'white',
            lineHeight: 1.05, letterSpacing: '-0.02em', margin: 0,
          }}>
            Profesionalización del
            <br />
            <span style={{ color: '#45C5BE' }}>Servicio Hospitalario</span>
          </motion.h1>

          <motion.div {...fade(0.6)}>
            <div style={{
              width: '70px', height: '3px',
              background: 'linear-gradient(90deg, #45C5BE, transparent)',
              borderRadius: '2px',
            }} />
          </motion.div>

          <motion.p {...fade(0.7)} style={{
            fontSize: 'clamp(0.9rem, 1.5vw, 1.15rem)',
            color: 'rgba(255,255,255,0.65)',
            fontWeight: 300, letterSpacing: '0.02em', margin: 0,
          }}>
            Construyendo una cultura de excelencia en salud
          </motion.p>
        </div>

        {/* Bottom badge */}
        <motion.div {...fade(0.9)} style={{ zIndex: 1 }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(69,197,190,0.2), rgba(43,168,162,0.15))',
            border: '1px solid rgba(69,197,190,0.35)',
            borderRadius: '12px',
            padding: '0.8rem 1.4rem',
            display: 'inline-flex', alignItems: 'center', gap: '12px',
          }}>
            <div style={{
              width: '38px', height: '38px', borderRadius: '50%',
              background: 'linear-gradient(135deg, #45C5BE, #2BA8A2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.8rem', fontWeight: 700, color: 'white', letterSpacing: '-0.02em',
            }}>
              JN
            </div>
            <div>
              <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Facilitado por</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'white' }}>Mtro. Jován Naranjo</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Right panel: Photo ── */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ position: 'relative', overflow: 'hidden' }}
      >
        {/* Hospital photo */}
        <img
          src="/images/5.png"
          alt="Profesional de salud"
          style={{
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center',
            filter: 'brightness(0.85) saturate(0.9)',
          }}
        />
        {/* Gradient overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(90deg, #0C2D4E 0%, transparent 30%, transparent 70%, rgba(12,45,78,0.4) 100%)',
        }} />
        {/* Bottom overlay */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%',
          background: 'linear-gradient(0deg, rgba(12,45,78,0.7) 0%, transparent 100%)',
        }} />

        {/* Caption badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          style={{
            position: 'absolute', bottom: '48px', right: '40px', left: '40px',
            background: 'rgba(255,255,255,0.08)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: '16px',
            padding: '1rem 1.4rem',
          }}
        >
          <p style={{
            fontFamily: 'DM Serif Display, serif',
            fontSize: 'clamp(1rem, 1.6vw, 1.35rem)',
            color: 'white', margin: 0, lineHeight: 1.35,
          }}>
            "La experiencia sanitaria es,<br />
            <span style={{ color: '#45C5BE' }}>ante todo, una experiencia emocional.</span>"
          </p>
          <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', marginTop: '6px', fontStyle: 'italic' }}>
            Rodríguez Fuertes, A. (2018)
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}
