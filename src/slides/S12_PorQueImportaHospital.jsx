import { motion } from 'framer-motion'

const IconHeart = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
)

const IconChart = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/>
    <line x1="12" y1="20" x2="12" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="14"/>
  </svg>
)

const IconMegaphone = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 11l19-9-9 19-2-8-8-2z"/>
  </svg>
)

const impacts = [
  {
    icon: IconHeart,
    stat: '80%',
    title: 'de las quejas no son sobre la calidad médica',
    desc: 'Son sobre el trato, la comunicación y la falta de información. El paciente juzga lo que puede ver y sentir.',
    source: 'Advisory Board, 2016',
    color: '#45C5BE',
  },
  {
    icon: IconChart,
    stat: '+19%',
    title: 'de adherencia cuando hay buena comunicación',
    desc: 'Pacientes que entienden su tratamiento y se sienten escuchados lo siguen más. La experiencia impacta el resultado clínico.',
    source: 'Derksen et al., 2013',
    color: '#45C5BE',
  },
  {
    icon: IconMegaphone,
    stat: '11×',
    title: 'más lo comparte un paciente insatisfecho',
    desc: 'Uno satisfecho lo cuenta a 3 personas. Uno que vivió una mala experiencia lo cuenta a 11. La reputación se construye en cada interacción.',
    source: 'Press Ganey, 2022',
    color: '#45C5BE',
  },
]

export default function S12_PorQueImportaHospital() {
  return (
    <div className="slide bg-dots" style={{ padding: '52px 72px', gap: '0', flexDirection: 'row', alignItems: 'stretch' }}>
      <div className="corner-accent" />

      {/* Left — emotional anchor */}
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          flex: '0 0 38%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingRight: '3rem',
          borderRight: '1.5px solid rgba(69,197,190,0.2)',
          gap: '1.4rem',
        }}
      >
        <div>
          <div className="pill" style={{ marginBottom: '0.8rem' }}>¿Por qué importa?</div>
          <h2 style={{
            fontFamily: 'DM Serif Display, serif',
            fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)',
            fontWeight: 400,
            color: 'var(--navy)',
            lineHeight: 1.2,
            margin: 0,
          }}>
            La experiencia del paciente<br/>
            <span style={{ color: '#45C5BE' }}>no es solo servicio.</span><br/>
            Es clínica.
          </h2>
        </div>

        <div style={{
          background: 'linear-gradient(135deg, #0C2D4E, #1a4068)',
          borderRadius: '16px',
          padding: '1.4rem',
        }}>
          <p style={{
            fontSize: 'clamp(0.9rem, 1.3vw, 1.05rem)',
            color: 'rgba(255,255,255,0.88)',
            lineHeight: 1.7,
            margin: 0,
            fontStyle: 'italic',
          }}>
            "Quien entra al hospital no entra como cliente. Entra con miedo, con preguntas sin respuesta, con alguien que ama en riesgo."
          </p>
        </div>

        <p style={{
          fontSize: '0.85rem',
          color: 'var(--text-light)',
          lineHeight: 1.65,
          margin: 0,
        }}>
          Cada interacción — un saludo, una explicación, una espera — puede aumentar o reducir esa carga emocional. Eso es lo que está en juego.
        </p>
      </motion.div>

      {/* Right — 3 impact cards */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '1rem',
        paddingLeft: '3rem',
      }}>
        {impacts.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.2 + i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              background: 'white',
              borderRadius: '14px',
              padding: '1rem 1.2rem',
              display: 'flex',
              gap: '1rem',
              alignItems: 'flex-start',
              boxShadow: 'var(--shadow-sm)',
              border: '1.5px solid rgba(69,197,190,0.15)',
            }}
          >
            {/* Stat */}
            <div style={{
              flexShrink: 0,
              minWidth: '64px',
              textAlign: 'center',
            }}>
              <div style={{
                fontFamily: 'DM Serif Display, serif',
                fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
                color: '#0C2D4E',
                lineHeight: 1,
                marginBottom: '2px',
              }}>{item.stat}</div>
              <div style={{
                width: '28px', height: '28px', borderRadius: '8px',
                background: 'rgba(69,197,190,0.12)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto',
                color: '#2BA8A2',
              }}>
                <item.icon />
              </div>
            </div>

            {/* Text */}
            <div style={{ flex: 1 }}>
              <div style={{
                fontWeight: 700,
                fontSize: '0.88rem',
                color: 'var(--navy)',
                lineHeight: 1.3,
                marginBottom: '0.3rem',
              }}>
                {item.title}
              </div>
              <p style={{
                fontSize: '0.78rem',
                color: 'var(--text-light)',
                lineHeight: 1.55,
                margin: 0,
                marginBottom: '0.35rem',
              }}>
                {item.desc}
              </p>
              <span style={{
                fontSize: '0.65rem',
                color: '#45C5BE',
                fontWeight: 700,
                letterSpacing: '0.04em',
              }}>{item.source}</span>
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          style={{
            textAlign: 'right',
            fontSize: '0.78rem',
            color: 'var(--navy)',
            fontWeight: 700,
            paddingTop: '0.3rem',
          }}
        >
          No es tecnología. No es presupuesto. Es decisión.
        </motion.div>
      </div>
    </div>
  )
}
