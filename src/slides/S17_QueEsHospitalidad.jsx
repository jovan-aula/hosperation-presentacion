import { motion } from 'framer-motion'

function HospitalityIcon() {
  return (
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="95" fill="rgba(69,197,190,0.1)" stroke="rgba(69,197,190,0.3)" strokeWidth="1.5"/>
      {/* Doctor figure */}
      <circle cx="80" cy="65" r="18" fill="#45C5BE" opacity="0.9"/>
      <rect x="62" y="90" width="36" height="45" rx="10" fill="#0C2D4E"/>
      {/* Cross on coat */}
      <rect x="76" y="98" width="8" height="20" rx="2" fill="#45C5BE"/>
      <rect x="70" y="104" width="20" height="8" rx="2" fill="#45C5BE"/>
      {/* Patient figure */}
      <circle cx="130" cy="75" r="15" fill="#2BA8A2" opacity="0.8"/>
      <rect x="115" y="97" width="30" height="38" rx="8" fill="#163557"/>
      {/* Hand gesture */}
      <path d="M100 110 Q110 100 120 108" stroke="#45C5BE" strokeWidth="3" strokeLinecap="round" fill="none"/>
      {/* Heart */}
      <path d="M96 45 C96 42, 92 38, 88 40 C84 42, 84 46, 88 50 L96 57 L104 50 C108 46, 108 42, 104 40 C100 38, 96 42, 96 45Z" fill="#45C5BE" opacity="0.7"/>
    </svg>
  )
}

export default function S17_QueEsHospitalidad() {
  return (
    <div className="slide bg-dots" style={{ padding: '60px 80px' }}>
      <div className="corner-accent" />

      <div className="grid-split" style={{ maxWidth: '960px', width: '100%', gridTemplateColumns: '1.4fr 1fr', gap: '3.5rem' }}>
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}
        >
          <div className="pill">Definición</div>
          <h2 className="slide-title">¿Qué entendemos<br />por hospitalidad?</h2>
          <div className="teal-bar" />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              background: 'white',
              borderRadius: '16px',
              padding: '1.5rem',
              boxShadow: 'var(--shadow-md)',
              border: '1.5px solid rgba(69,197,190,0.25)',
              borderLeft: '4px solid #45C5BE',
            }}
          >
            <p style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.3rem)',
              color: 'var(--text)',
              lineHeight: 1.7,
              margin: 0,
              fontStyle: 'italic',
            }}>
              "Es recibir a una persona en tu entorno y hacer que se sienta{' '}
              <strong style={{ color: 'var(--navy)', fontStyle: 'normal' }}>bienvenida, segura y cuidada.</strong>"
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            {['Bienvenida', 'Seguridad', 'Cuidado'].map((word) => (
              <div key={word} className="pill pill--solid" style={{ fontSize: '0.9rem' }}>{word}</div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.5 }}
            className="ref-text"
            style={{ margin: 0 }}
          >
            Lashley, C. & Morrison, A. (2000). In Search of Hospitality. Butterworth-Heinemann.
          </motion.p>
        </motion.div>

        {/* Right: Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <div style={{
            background: 'white',
            borderRadius: '50%',
            padding: '20px',
            boxShadow: 'var(--shadow-xl)',
            border: '2px solid rgba(69,197,190,0.25)',
          }}>
            <HospitalityIcon />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
