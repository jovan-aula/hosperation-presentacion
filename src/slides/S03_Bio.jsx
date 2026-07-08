import { motion } from 'framer-motion'
import { IconGraduate, IconCertificate, IconBriefcase, IconStar, IconTarget } from '../components/Icons'

const stagger = {
  animate: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const item = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const bioItems = [
  {
    Icon: IconGraduate,
    text: 'Mtro. en Administración de Negocios — Pacífico Universidad',
    color: '#45C5BE',
  },
  {
    Icon: IconGraduate,
    text: 'Licenciado en Docencia — UABC',
    color: '#45C5BE',
  },
  {
    Icon: IconCertificate,
    text: 'Instructor Certificado CONOCER · EC0217, EC0076, EC0518, EC0553',
    color: '#2BA8A2',
  },
  {
    Icon: IconBriefcase,
    text: '14+ años en capacitación, ventas y servicio al cliente',
    color: '#0C2D4E',
  },
  {
    Icon: IconTarget,
    text: 'Ha trabajado con clínicas, hospitales, consultorios, escuelas y empresas de servicio',
    color: '#0C2D4E',
  },
]

const sectors = ['Salud', 'Educación', 'Ventas', 'Servicio al cliente', 'Marketing', 'Liderazgo']

export default function S03_Bio() {
  return (
    <div className="slide bg-dots" style={{ padding: '52px 80px' }}>
      <div className="corner-accent" />

      <div className="grid-split" style={{ gridTemplateColumns: '1.5fr 1fr', maxWidth: '1000px', width: '100%', gap: '3.5rem' }}>
        {/* Left: Bio */}
        <motion.div variants={stagger} initial="initial" animate="animate" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <motion.div variants={item}>
            <div className="pill" style={{ marginBottom: '0.4rem' }}>Facilitador del taller</div>
          </motion.div>

          <motion.div variants={item}>
            <h2 className="slide-title" style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.8rem)' }}>
              Mtro. Jován Naranjo
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--teal-dark)', fontWeight: 600, marginTop: '0.25rem' }}>
              Consultor en Capacitación · Ventas · Servicio
            </p>
          </motion.div>

          <motion.div variants={item} style={{ width: '50px', height: '3px', background: 'linear-gradient(90deg, #45C5BE, #2BA8A2)', borderRadius: '2px' }} />

          <motion.p variants={item} style={{ fontSize: '0.85rem', color: 'var(--text-light)', lineHeight: 1.7, margin: 0 }}>
            Consultor y facilitador con más de 14 años desarrollando talento humano en organizaciones de salud, educación y empresas de servicio. Sus programas combinan metodologías de ventas consultivas, marketing y cultura de servicio aplicados al contexto real de cada organización.
          </motion.p>

          <motion.div variants={stagger} style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
            {bioItems.map((b, i) => (
              <motion.div key={i} variants={item} style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                padding: '0.5rem 0.9rem',
                background: 'white',
                borderRadius: '10px',
                boxShadow: 'var(--shadow-sm)',
                border: '1px solid rgba(69,197,190,0.15)',
              }}>
                <div style={{
                  width: '28px', height: '28px', borderRadius: '7px', flexShrink: 0,
                  background: `${b.color}18`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <b.Icon size={14} color={b.color} />
                </div>
                <span style={{ fontSize: '0.82rem', color: 'var(--text)', fontWeight: 500, lineHeight: 1.3 }}>{b.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Sector tags */}
          <motion.div variants={item} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {sectors.map(s => (
              <span key={s} style={{
                fontSize: '0.72rem', fontWeight: 600,
                background: 'rgba(69,197,190,0.1)',
                color: 'var(--teal-dark)',
                border: '1px solid rgba(69,197,190,0.25)',
                borderRadius: '100px',
                padding: '0.2rem 0.8rem',
              }}>
                {s}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Real photo */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.2rem' }}
        >
          <div style={{ position: 'relative' }}>
            {/* Teal glow */}
            <div style={{
              position: 'absolute', inset: '-6px',
              borderRadius: '50%',
              background: 'conic-gradient(from 0deg, #45C5BE, #2BA8A2, #45C5BE)',
              opacity: 0.25,
              filter: 'blur(10px)',
            }} />
            {/* Border ring */}
            <div style={{
              position: 'absolute', inset: '-3px',
              borderRadius: '50%',
              border: '2px solid rgba(69,197,190,0.4)',
            }} />
            {/* Photo */}
            <img
              src="/jovan-naranjo.png"
              alt="Mtro. Jován Naranjo"
              style={{
                width: '220px', height: '220px',
                borderRadius: '50%',
                objectFit: 'cover',
                objectPosition: 'center top',
                display: 'block',
                boxShadow: '0 12px 40px rgba(12,45,78,0.25)',
                filter: 'brightness(1.05) contrast(1.02)',
              }}
            />
          </div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            style={{
              background: 'white',
              borderRadius: '14px',
              padding: '1rem 1.2rem',
              boxShadow: 'var(--shadow-md)',
              border: '1.5px solid rgba(69,197,190,0.25)',
              maxWidth: '240px',
              textAlign: 'center',
            }}
          >
            <p style={{ fontSize: '0.8rem', color: 'var(--text)', fontStyle: 'italic', lineHeight: 1.55, margin: 0 }}>
              "El servicio de excelencia no es un accidente; es el resultado de un esfuerzo inteligente y humano."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
