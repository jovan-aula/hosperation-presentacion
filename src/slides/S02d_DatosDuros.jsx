import { motion } from 'framer-motion'

const datos = [
  {
    num: '70%',
    text: 'de los errores médicos están relacionados con fallas de comunicación entre el equipo de salud.',
    source: 'Joint Commission, EUA',
  },
  {
    num: '#1',
    text: 'La comunicación asertiva es la habilidad más demandada por los empleadores a nivel global.',
    source: 'LinkedIn Global Talent Trends',
  },
  {
    num: '93%',
    text: 'de lo que comunicamos es no verbal: 55% lenguaje corporal, 38% tono de voz y solo 7% palabras.',
    source: 'Albert Mehrabian, UCLA',
  },
  {
    num: '34%',
    text: 'menos burnout reportan los colaboradores en equipos con comunicación asertiva y psicológicamente seguros.',
    source: 'Gallup Workplace Report',
  },
]

export default function S02d_DatosDuros() {
  return (
    <div className="slide" style={{ padding: '52px 80px' }}>
      <div className="corner-accent" />

      <div style={{ maxWidth: '980px', width: '100%', display: 'flex', flexDirection: 'column', gap: '2rem' }}>

        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
        >
          <div className="pill" style={{ alignSelf: 'flex-start' }}>Datos duros</div>
          <h2 className="slide-title">La comunicación <span className="teal-accent">importa</span> más de lo que creemos</h2>
          <div className="teal-bar" />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}>
          {datos.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25 + i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="stat-card"
            >
              <div className="stat-number">{d.num}</div>
              <p className="stat-label" style={{ marginTop: '0.5rem', lineHeight: 1.55 }}>{d.text}</p>
              <div className="stat-source">{d.source}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
