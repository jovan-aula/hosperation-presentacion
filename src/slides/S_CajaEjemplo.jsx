import { motion } from 'framer-motion'

const fade = (d = 0) => ({ initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.55, delay: d } })

const cajas = [
  {
    num: '1', title: 'Lo que observo',
    color: '#0C2D4E', bg: 'rgba(12,45,78,0.12)', border: 'rgba(12,45,78,0.25)',
    texto: 'El paciente llegó sin cita. Exige ser atendido de inmediato con voz elevada y dice que "siempre pasa lo mismo aquí".',
  },
  {
    num: '2', title: 'Lo que entiendo',
    color: '#2BA8A2', bg: 'rgba(43,168,162,0.1)', border: 'rgba(43,168,162,0.3)',
    texto: 'Probablemente ya tuvo una mala experiencia antes. Su frustración es real, aunque la forma de expresarla no sea la adecuada.',
  },
  {
    num: '3', title: 'Lo que puedo hacer',
    color: '#d97706', bg: 'rgba(217,119,6,0.08)', border: 'rgba(217,119,6,0.25)',
    texto: 'No puedo saltarme el protocolo de citas, pero sí puedo explicarle cómo agendar y verificar si hay un espacio disponible hoy.',
  },
  {
    num: '4', title: 'Lo que comunico',
    color: '#7c3aed', bg: 'rgba(124,58,237,0.08)', border: 'rgba(124,58,237,0.25)',
    texto: '"Entiendo que necesita atención. Hoy no contamos con turno sin cita, pero le ayudo a agendar lo antes posible. ¿Le funciona revisar disponibilidad ahora?"',
  },
]

export default function S_CajaEjemplo() {
  return (
    <div style={{
      width: '100vw', height: '100vh',
      background: '#F7FAFC',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '48px 72px',
      position: 'relative', overflow: 'hidden',
    }}>
      <div className="corner-accent" />

      <div style={{ maxWidth: '960px', width: '100%', display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>

        <motion.div {...fade(0.05)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
            <div style={{ background: 'rgba(69,197,190,0.12)', border: '1px solid rgba(69,197,190,0.3)', borderRadius: '100px', padding: '0.25rem 1rem', fontSize: '0.65rem', fontWeight: 700, color: '#2BA8A2', letterSpacing: '0.1em', textTransform: 'uppercase', width: 'fit-content' }}>
              Ejemplo
            </div>
            <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: 400, color: '#0C2D4E', lineHeight: 1.15, margin: 0 }}>
              La Caja Asertiva en acción
            </h2>
          </div>
        </motion.div>

        {/* Situación */}
        <motion.div {...fade(0.15)} style={{
          background: '#0C2D4E', borderRadius: '14px',
          padding: '0.9rem 1.4rem',
          display: 'flex', gap: '1rem', alignItems: 'center',
        }}>
          <div style={{ flexShrink: 0, width: '5px', height: '40px', borderRadius: '3px', background: '#45C5BE' }} />
          <div>
            <div style={{ fontSize: '0.58rem', fontWeight: 800, color: '#45C5BE', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '3px' }}>Situación</div>
            <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.55, margin: 0 }}>
              Un paciente llega sin cita a urgencias y exige ser atendido de inmediato, diciendo que siempre pasa lo mismo en el hospital.
            </p>
          </div>
        </motion.div>

        {/* 4 cajas */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
          {cajas.map((c, i) => (
            <motion.div key={i} {...fade(0.25 + i * 0.1)} style={{
              background: c.bg,
              border: `1.5px solid ${c.border}`,
              borderRadius: '14px',
              padding: '1rem 1.2rem',
              display: 'flex', flexDirection: 'column', gap: '0.5rem',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: c.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 800, color: 'white', flexShrink: 0 }}>
                  {c.num}
                </div>
                <span style={{ fontSize: '0.88rem', fontWeight: 700, color: c.color }}>{c.title}</span>
              </div>
              <p style={{ fontSize: '0.8rem', color: '#4A5568', lineHeight: 1.6, margin: 0, paddingLeft: '2rem', fontStyle: c.num === '4' ? 'italic' : 'normal' }}>
                {c.texto}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}
