import { motion } from 'framer-motion'

const IconGlobe = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2BA8A2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
)

const IconHospitalSmall = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0C2D4E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <path d="M9 22V12h6v10"/>
    <path d="M12 9v4M10 11h4" strokeWidth="1.8"/>
  </svg>
)

const external = ['Pacientes', 'Familiares', 'Acompañantes', 'Visitantes', 'Usuarios', 'Proveedores']
const internal = ['Médicos', 'Enfermería', 'Recepción', 'Caja', 'Laboratorio', 'Limpieza', 'Seguridad', 'Administración', 'Dirección']

export default function S19_AQuienAtendemos() {
  return (
    <div className="slide" style={{ padding: '55px 60px 55px 48%', gap: '1rem', position: 'relative' }}>

      {/* Background image — left, fades to right */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(/images/12.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'left center',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to right, rgba(238,242,247,0) 0%, rgba(238,242,247,0.55) 35%, rgba(238,242,247,0.97) 52%, #EEF2F7 65%)',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(12,45,78,0.04) 1.5px, transparent 1.5px)',
        backgroundSize: '28px 28px', pointerEvents: 'none',
      }} />

      {/* Title — floated over image */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          position: 'absolute', left: '2.5rem', bottom: '2.5rem',
          maxWidth: '300px',
        }}
      >
        <div className="pill" style={{ marginBottom: '0.5rem' }}>Nuestros clientes</div>
        <h2 style={{
          fontFamily: 'DM Serif Display, serif',
          fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
          color: '#0C2D4E', fontWeight: 400, lineHeight: 1.15, margin: '0 0 0.5rem',
          textShadow: '0 1px 12px rgba(238,242,247,0.9)',
        }}>
          ¿A quién<br />atendemos?
        </h2>
        <p style={{
          fontSize: '0.8rem', color: 'var(--text-light)', lineHeight: 1.5,
          textShadow: '0 1px 8px rgba(238,242,247,0.9)',
        }}>
          Todo el personal tiene clientes,<br />aunque no siempre los llamemos así.
        </p>
      </motion.div>

      {/* Right — cards */}
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>

        {/* External */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            background: 'white', borderRadius: '16px', padding: '1.4rem',
            boxShadow: 'var(--shadow-md)', border: '2px solid rgba(69,197,190,0.3)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.8rem' }}>
            <IconGlobe />
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--teal-dark)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Cliente Externo
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>Personas que vienen de fuera del hospital</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {external.map((e) => (
              <span key={e} className="pill" style={{ fontSize: '0.8rem' }}>{e}</span>
            ))}
          </div>
        </motion.div>

        {/* Internal */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          style={{
            background: 'white', borderRadius: '16px', padding: '1.4rem',
            boxShadow: 'var(--shadow-md)', border: '2px solid rgba(12,45,78,0.2)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.8rem' }}>
            <IconHospitalSmall />
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--navy)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Cliente Interno
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>Personas que forman parte del equipo</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {internal.map((e) => (
              <span key={e} className="pill pill--navy" style={{ fontSize: '0.8rem' }}>{e}</span>
            ))}
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          style={{
            background: 'linear-gradient(135deg, #0C2D4E, #163557)',
            borderRadius: '12px', padding: '0.9rem 1.2rem',
          }}
        >
          <p style={{ fontSize: '0.85rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.82)', lineHeight: 1.55, margin: 0 }}>
            "Atender bien al compañero de trabajo es la base para atender bien al paciente."
          </p>
        </motion.div>
      </div>
    </div>
  )
}
