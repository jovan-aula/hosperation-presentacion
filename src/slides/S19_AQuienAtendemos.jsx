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
    <div className="slide bg-dots" style={{ padding: '55px 80px', gap: '1.5rem' }}>
      <div className="corner-accent" />

      <div className="grid-split" style={{ maxWidth: '1000px', width: '100%', gridTemplateColumns: '1fr 2fr', gap: '3rem' }}>
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}
        >
          <div className="pill">Nuestros clientes</div>
          <h2 className="slide-title">¿A quién atendemos?</h2>
          <div className="teal-bar" />
          <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', lineHeight: 1.65 }}>
            Todo el personal de un hospital tiene clientes, aunque no siempre los llamemos así.
          </p>

          <div style={{
            background: 'linear-gradient(135deg, #0C2D4E, #163557)',
            borderRadius: '14px',
            padding: '1.2rem',
            color: 'white',
          }}>
            <p style={{ fontSize: '0.85rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.75)', lineHeight: 1.55, margin: 0 }}>
              "Atender bien al cliente interno es la base para atender bien al cliente externo."
            </p>
          </div>
        </motion.div>

        {/* Right: Two cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {/* External */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              background: 'white',
              borderRadius: '16px',
              padding: '1.4rem',
              boxShadow: 'var(--shadow-md)',
              border: '2px solid rgba(69,197,190,0.3)',
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
              background: 'white',
              borderRadius: '16px',
              padding: '1.4rem',
              boxShadow: 'var(--shadow-md)',
              border: '2px solid rgba(12,45,78,0.2)',
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
        </div>
      </div>
    </div>
  )
}
