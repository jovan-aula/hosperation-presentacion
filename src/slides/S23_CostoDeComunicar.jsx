import { motion } from 'framer-motion'
import AnimatedCounter from '../components/AnimatedCounter'

const stats = [
  {
    prefix: '$',
    number: 1700,
    suffix: 'M',
    label: 'en demandas de mala praxis relacionadas con comunicación deficiente',
    source: 'CRICO/Harvard Medical Institutions, 2016',
  },
  {
    prefix: '',
    number: 1744,
    suffix: '',
    label: 'muertes en 5 años atribuibles a errores de comunicación en hospitales',
    source: 'CRICO Strategies, 2016',
  },
  {
    prefix: '',
    number: 67,
    suffix: '%',
    label: 'de los errores de comunicación ocurren durante traspasos de turno',
    source: 'Joint Commission, 2024',
  },
]

export default function S23_CostoDeComunicar() {
  return (
    <div className="slide slide--dark" style={{
      background: 'linear-gradient(135deg, #060f1f 0%, #0C2D4E 100%)',
      padding: '55px 80px',
      gap: '2rem',
    }}>
      <div className="bg-dots--dark" style={{ position: 'absolute', inset: 0 }} />

      {/* Left glow */}
      <div style={{
        position: 'absolute', left: '-100px', top: '50%', transform: 'translateY(-50%)',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(229,62,62,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center' }}
      >
        <div style={{
          display: 'inline-block',
          background: 'rgba(229,62,62,0.2)',
          border: '1px solid rgba(229,62,62,0.4)',
          borderRadius: '100px',
          padding: '0.3rem 1.2rem',
          fontSize: '0.75rem',
          fontWeight: 700,
          color: '#FC8181',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom: '0.5rem',
        }}>
          Datos de Impacto
        </div>
        <h2 style={{
          fontFamily: 'DM Serif Display, serif',
          fontSize: 'clamp(2rem, 4vw, 3.2rem)',
          color: 'white',
          fontWeight: 400,
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
          margin: 0,
        }}>
          El costo de <span style={{ color: '#FC8181' }}>no comunicar</span>
        </h2>
      </motion.div>

      <div style={{ display: 'flex', gap: '1.5rem', width: '100%', maxWidth: '880px' }}>
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
            style={{
              flex: 1,
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '20px',
              padding: '1.8rem 1.5rem',
              borderTop: '3px solid rgba(69,197,190,0.6)',
            }}
          >
            <div style={{
              fontFamily: 'DM Serif Display, serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: '#45C5BE',
              lineHeight: 1,
              letterSpacing: '-0.02em',
            }}>
              {s.prefix}<AnimatedCounter to={s.number} duration={2.2} />{s.suffix}
            </div>
            <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.5, margin: '0.5rem 0 0.3rem', fontWeight: 500 }}>
              {s.label}
            </p>
            <p style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)', fontStyle: 'italic', margin: 0 }}>
              {s.source}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.85 }}
        style={{
          maxWidth: '700px',
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: '14px',
          padding: '1.1rem 1.8rem',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', fontStyle: 'italic', lineHeight: 1.6, margin: 0 }}>
          "La experiencia sanitaria es, ante todo, una experiencia emocional."<br />
          <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)' }}>— Rodríguez Fuertes, A. (2018). Tesis Doctoral. Universidad de Alcalá.</span>
        </p>
      </motion.div>
    </div>
  )
}
