import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const IconWeb = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
)

const IconMail = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
)

const IconPin = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)

const IconHands = () => (
  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="rgba(69,197,190,0.7)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
)

export default function S35_Portada_Cierre() {
  return (
    <div className="slide slide--dark" style={{
      background: 'linear-gradient(135deg, #081e35 0%, #0C2D4E 60%, #0f3660 100%)',
      justifyContent: 'space-between',
      padding: '50px 80px',
      overflow: 'hidden',
    }}>
      {/* Background photo — blurred hospital corridor */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(/images/9.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.08,
        filter: 'blur(2px)',
        pointerEvents: 'none',
      }} />

      {/* Dark overlay gradient */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, rgba(8,30,53,0.92) 0%, rgba(12,45,78,0.88) 60%, rgba(15,54,96,0.92) 100%)',
        pointerEvents: 'none',
      }} />

      {/* Dot pattern */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(69,197,190,0.08) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        pointerEvents: 'none',
      }} />

      {/* Bottom right glow */}
      <div style={{
        position: 'absolute', bottom: '-100px', right: '-100px',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(69,197,190,0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Top: logos */}
      <motion.div {...fade(0.1)} style={{
        position: 'relative',
        display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%',
      }}>
        <img src="/logo-sin-fondo.png" alt="Aula Consultoría + Hosperation" style={{ height: '44px', objectFit: 'contain' }} />
      </motion.div>

      {/* Center */}
      <div style={{ position: 'relative', textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1.5rem' }}>
        <motion.div {...fade(0.3)} style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{
            width: '72px', height: '72px', borderRadius: '50%',
            background: 'rgba(69,197,190,0.12)',
            border: '2px solid rgba(69,197,190,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <IconHands />
          </div>
        </motion.div>

        <motion.h1 {...fade(0.45)} style={{
          fontFamily: 'DM Serif Display, serif',
          fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
          fontWeight: 400,
          color: 'white',
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
          margin: 0,
        }}>
          ¡Gracias por su<br />
          <span style={{ color: '#45C5BE' }}>participación!</span>
        </motion.h1>

        <motion.div {...fade(0.6)}>
          <div style={{
            width: '80px', height: '3px',
            background: 'linear-gradient(90deg, transparent, #45C5BE, transparent)',
            margin: '0 auto',
            borderRadius: '2px',
          }} />
        </motion.div>

        <motion.p {...fade(0.7)} style={{
          fontSize: 'clamp(1rem, 1.8vw, 1.3rem)',
          color: 'rgba(255,255,255,0.65)',
          fontWeight: 300,
          letterSpacing: '0.02em',
          margin: 0,
        }}>
          Taller: Profesionalización del Servicio Hospitalario
        </motion.p>

        {/* Contact info */}
        <motion.div {...fade(0.85)} style={{
          display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap',
          marginTop: '0.5rem',
        }}>
          {[
            { Icon: IconWeb, label: 'hosperation.com' },
            { Icon: IconMail, label: 'contacto@hosperation.com' },
            { Icon: IconPin, label: 'Tijuana, B.C. México' },
          ].map((c) => (
            <div key={c.label} style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)',
            }}>
              <c.Icon />
              <span>{c.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom branding */}
      <motion.div {...fade(0.95)} style={{
        position: 'relative',
        alignSelf: 'center',
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '12px',
        padding: '0.8rem 2.5rem',
        display: 'flex', gap: '2rem', alignItems: 'center',
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Facilitador</div>
          <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'white' }}>Mtro. Jován Naranjo</div>
        </div>
        <div style={{ width: '1px', height: '30px', background: 'rgba(255,255,255,0.15)' }} />
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Presentado por</div>
          <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'white' }}>Hosperation + Aula Consultoría</div>
        </div>
      </motion.div>
    </div>
  )
}
