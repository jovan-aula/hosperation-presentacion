import { motion } from 'framer-motion'

// Animated SVG curve showing the emotional journey
function EmotionalCurve() {
  const path = "M 50,90 C 120,90 160,155 260,158 C 340,160 370,28 470,22"

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '540px' }}>
      <svg viewBox="0 0 520 185" style={{ width: '100%', overflow: 'visible' }}>
        {/* Grid lines */}
        <line x1="50" y1="20" x2="50" y2="165" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
        <line x1="260" y1="20" x2="260" y2="165" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
        <line x1="470" y1="20" x2="470" y2="165" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
        <line x1="40" y1="90" x2="490" y2="90" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="4 4"/>

        {/* Axis labels */}
        <text x="50" y="180" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.4)">Antes</text>
        <text x="260" y="180" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.4)">Consulta</text>
        <text x="470" y="180" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.4)">Alta</text>
        <text x="20" y="93" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.3)">😐</text>
        <text x="20" y="163" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.3)">😟</text>
        <text x="20" y="28" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.3)">😊</text>

        {/* Glow under curve */}
        <defs>
          <linearGradient id="curveGlow" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#718096" stopOpacity="0.3"/>
            <stop offset="50%" stopColor="#e53e3e" stopOpacity="0.2"/>
            <stop offset="100%" stopColor="#45C5BE" stopOpacity="0.3"/>
          </linearGradient>
        </defs>
        <path d={`${path} L 470,165 L 50,165 Z`} fill="url(#curveGlow)"/>

        {/* Main curve */}
        <motion.path
          d={path}
          fill="none"
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.4, ease: 'easeInOut' }}
        />

        {/* PEAK dot — red */}
        <motion.circle
          cx="260" cy="158" r="9"
          fill="#e53e3e"
          stroke="rgba(229,62,62,0.3)" strokeWidth="8"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, type: 'spring', stiffness: 250 }}
        />
        <motion.text
          x="260" y="148" textAnchor="middle" fontSize="11" fontWeight="800"
          fill="#fc8181" letterSpacing="1"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        >EL PICO ⚡</motion.text>

        {/* END dot — teal */}
        <motion.circle
          cx="470" cy="22" r="9"
          fill="#45C5BE"
          stroke="rgba(69,197,190,0.3)" strokeWidth="8"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.6, type: 'spring', stiffness: 250 }}
        />
        <motion.text
          x="470" y="13" textAnchor="middle" fontSize="11" fontWeight="800"
          fill="#45C5BE" letterSpacing="1"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.9 }}
        >EL FINAL 🏁</motion.text>
      </svg>
    </div>
  )
}

export default function S25d_PeakEndRule() {
  return (
    <div className="slide slide--dark" style={{
      background: 'linear-gradient(135deg, #081e35 0%, #0C2D4E 100%)',
      padding: '40px 72px',
      gap: '1.3rem',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(69,197,190,0.07) 1px, transparent 1px)',
        backgroundSize: '28px 28px', pointerEvents: 'none',
      }} />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        style={{ textAlign: 'center' }}
      >
        <div className="pill" style={{ marginBottom: '0.5rem', borderColor: 'rgba(69,197,190,0.4)', color: '#45C5BE' }}>
          Kahneman, 1993 (Premio Nobel) · Confirmado por Rodríguez Fuertes, 2018
        </div>
        <h2 style={{
          fontFamily: 'DM Serif Display, serif',
          fontSize: 'clamp(1.7rem, 3.2vw, 2.8rem)',
          fontWeight: 400, color: 'white',
          lineHeight: 1.15, margin: 0,
        }}>
          El paciente no recuerda <em>todo</em> lo que vivió.
        </h2>
        <h2 style={{
          fontFamily: 'DM Serif Display, serif',
          fontSize: 'clamp(1.7rem, 3.2vw, 2.8rem)',
          fontWeight: 400, color: '#45C5BE',
          lineHeight: 1.15, margin: '0 0 0.2rem 0',
        }}>
          Solo recuerda <span style={{ color: '#fc8181' }}>el peor momento</span> y cómo terminó.
        </h2>
      </motion.div>

      {/* Main layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '2rem', width: '100%', maxWidth: '980px', alignItems: 'center' }}>

        {/* Left — the curve */}
        <motion.div
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}
        >
          <EmotionalCurve />

          {/* Formula */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
            style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              background: 'rgba(255,255,255,0.05)', borderRadius: '12px',
              padding: '0.7rem 1.2rem', border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)' }}>Su recuerdo</span>
            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '1rem' }}>=</span>
            <span style={{ fontSize: '0.88rem', fontWeight: 800, color: '#fc8181' }}>Pico ⚡</span>
            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '1rem' }}>+</span>
            <span style={{ fontSize: '0.88rem', fontWeight: 800, color: '#45C5BE' }}>Final 🏁</span>
          </motion.div>
        </motion.div>

        {/* Right — two callouts + takeaway */}
        <motion.div
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.3 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}
        >
          {/* Peak */}
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            style={{
              background: 'rgba(229,62,62,0.1)', borderRadius: '16px',
              border: '1.5px solid rgba(229,62,62,0.3)',
              padding: '1.1rem 1.2rem',
            }}
          >
            <div style={{ fontSize: '0.62rem', fontWeight: 800, color: 'rgba(229,62,62,0.8)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '5px' }}>
              ⚡ El Pico — durante la consulta
            </div>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, margin: '0 0 8px 0' }}>
              El momento más intenso emocionalmente. El estudio confirmó que el paciente se siente{' '}
              <strong style={{ color: '#fc8181' }}>8 veces más ignorado</strong> aquí que en la sala de espera.
            </p>
            <div style={{ fontSize: '0.76rem', fontWeight: 700, color: '#fc8181' }}>
              → Este momento quedará en su memoria.
            </div>
          </motion.div>

          {/* End */}
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            style={{
              background: 'rgba(69,197,190,0.08)', borderRadius: '16px',
              border: '1.5px solid rgba(69,197,190,0.3)',
              padding: '1.1rem 1.2rem',
            }}
          >
            <div style={{ fontSize: '0.62rem', fontWeight: 800, color: 'rgba(69,197,190,0.8)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '5px' }}>
              🏁 El Final — la despedida / alta
            </div>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, margin: '0 0 8px 0' }}>
              La última impresión es la que le contará a su familia esa noche — y lo que determinará si recomienda el hospital.
            </p>
            <div style={{ fontSize: '0.76rem', fontWeight: 700, color: '#45C5BE' }}>
              → Una despedida cálida no es un detalle menor.
            </div>
          </motion.div>

          {/* Takeaway */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.9 }}
            style={{
              background: 'white', borderRadius: '14px',
              padding: '1rem 1.2rem',
            }}
          >
            <p style={{ fontSize: '0.88rem', color: 'var(--navy)', lineHeight: 1.6, margin: 0 }}>
              No puedes controlar el diagnóstico.{' '}
              Sí puedes controlar <strong>cómo tratas al paciente en su momento más vulnerable</strong>{' '}
              y <strong>cómo te despides de él.</strong>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
