import { motion } from 'framer-motion'
import AnimatedCounter from '../components/AnimatedCounter'
import { IconChart, IconAlert, IconHeart } from '../components/Icons'

const stats = [
  {
    number: 80,
    suffix: '%',
    label: 'de 128 estudios confirman que la empatía clínica mejora los resultados de salud del paciente',
    source: 'PMC, 2023',
    Icon: IconChart,
    iconColor: '#2BA8A2',
  },
  {
    number: 38,
    suffix: '%',
    label: 'mayor riesgo de hospitalización en pacientes con baja adherencia terapéutica',
    source: 'BJGP, 2022',
    Icon: IconAlert,
    iconColor: '#c05621',
  },
  {
    number: 100,
    suffix: '%',
    label: 'de los estudios de intervención con comunicación centrada en paciente muestran mayor adherencia al tratamiento',
    source: 'Kelley et al., 2014',
    Icon: IconHeart,
    iconColor: '#e53e3e',
  },
]

export default function S25_EmpatiaYAdherencia() {
  return (
    <div className="slide" style={{
      background: 'linear-gradient(160deg, #EEF2F7 0%, #dff4f3 100%)',
      padding: '55px 80px',
      gap: '1.8rem',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(69,197,190,0.12) 1.5px, transparent 1.5px)',
        backgroundSize: '28px 28px',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '-100px', right: '-100px',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(69,197,190,0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center' }}
      >
        <div className="pill pill--solid" style={{ marginBottom: '0.5rem' }}>Evidencia científica</div>
        <h2 className="slide-title">Empatía que <span className="teal-accent">salva vidas</span></h2>
        <p className="slide-subtitle">La relación entre empatía clínica y resultados de salud</p>
      </motion.div>

      <div className="grid-3" style={{ maxWidth: '900px', width: '100%', gap: '1.2rem' }}>
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
            className="stat-card"
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
              <div className="stat-number" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                <AnimatedCounter to={s.number} duration={2} />{s.suffix}
              </div>
              <div style={{
                width: '36px', height: '36px', borderRadius: '10px', flexShrink: 0,
                background: `${s.iconColor}15`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <s.Icon size={20} color={s.iconColor} />
              </div>
            </div>
            <p className="stat-label">{s.label}</p>
            <p className="stat-source">{s.source}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.85 }}
        style={{
          maxWidth: '700px',
          background: 'white',
          borderRadius: '14px',
          padding: '1rem 1.8rem',
          boxShadow: 'var(--shadow-sm)',
          border: '1px solid rgba(69,197,190,0.2)',
          textAlign: 'center',
        }}
      >
        <p className="ref-text" style={{ margin: 0, borderTop: 'none', paddingTop: 0 }}>
          Kelley, J.M. et al. (2014). The influence of the patient-clinician relationship on healthcare outcomes: A systematic review and meta-analysis. <em>PLOS ONE</em>, 9(4). | Mercer, S.W. et al. (2022). Impact of physician empathy on patient outcomes. <em>British Journal of General Practice</em>, 72(715).
        </p>
      </motion.div>
    </div>
  )
}
