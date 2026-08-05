import { motion } from 'framer-motion'

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay: d, ease: [0.25, 0.46, 0.45, 0.94] },
})

const elementos = [
  {
    num: '01',
    label: 'Tono de voz',
    context: 'En urgencias, un tono calmado puede reducir la angustia del paciente antes de que llegue el médico.',
    color: '#45C5BE',
  },
  {
    num: '02',
    label: 'Postura y gestos',
    context: 'Agacharse al nivel del paciente o del familiar comunica respeto y atención genuina sin decir una palabra.',
    color: '#6B8FA8',
  },
  {
    num: '03',
    label: 'Ritmo al hablar',
    context: 'Al dar información difícil, hablar despacio le da tiempo al paciente de procesar lo que está escuchando.',
    color: '#45C5BE',
  },
  {
    num: '04',
    label: 'Información clara',
    context: 'Evitar tecnicismos innecesarios reduce malentendidos que en un hospital pueden derivar en errores graves.',
    color: '#6B8FA8',
  },
  {
    num: '05',
    label: 'Comprensión mutua',
    context: 'Preguntar "¿entendió lo que le expliqué?" no es redundante — es cerrar el ciclo de comunicación.',
    color: '#45C5BE',
  },
]


export default function S09_ElementosEsenciales() {
  return (
    <div className="slide" style={{ padding: '48px 72px' }}>
      <div className="corner-accent" />

      {/* Exercise badge */}
      <div style={{
        position: 'absolute', top: '24px', right: '32px',
        background: '#45C5BE', color: '#0C2D4E',
        borderRadius: '100px', padding: '0.3rem 1rem',
        fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase',
      }}>
        Ejercicio 2 · Hoja B
      </div>

      <div style={{ maxWidth: '980px', width: '100%', display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>

        {/* Header */}
        <motion.div {...fade(0.1)} style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <div className="pill" style={{ alignSelf: 'flex-start' }}>Sistema completo</div>
          <h2 className="slide-title">
            5 elementos de la comunicación{' '}
            <span className="teal-accent">asertiva</span>
          </h2>
          <div className="teal-bar" />
          <p style={{ fontSize: '0.88rem', color: '#718096', lineHeight: 1.6 }}>
            Todos operan al mismo tiempo. Ninguno funciona solo.
          </p>
        </motion.div>

        {/* Elements grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
          {elementos.map((el, i) => (
            <motion.div
              key={i}
              {...fade(0.25 + i * 0.1)}
              style={{
                display: 'flex', gap: '1rem', alignItems: 'flex-start',
                background: 'white',
                borderRadius: '14px',
                padding: '1rem 1.2rem',
                border: '1px solid rgba(12,45,78,0.08)',
                boxShadow: '0 1px 6px rgba(12,45,78,0.05)',
                ...(i === 4 ? { gridColumn: '1 / -1' } : {}),
              }}
            >
              <div style={{
                flexShrink: 0,
                width: '34px', height: '34px',
                borderRadius: '50%',
                background: el.color === '#45C5BE' ? 'rgba(69,197,190,0.12)' : 'rgba(107,143,168,0.1)',
                border: `1.5px solid ${el.color}50`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.62rem', fontWeight: 800, color: el.color,
              }}>
                {el.num}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0C2D4E' }}>{el.label}</div>
                <p style={{ fontSize: '0.8rem', color: '#718096', lineHeight: 1.6, margin: 0 }}>{el.context}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
