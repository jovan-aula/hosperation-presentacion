import { motion } from 'framer-motion'
import AnimatedCounter from '../components/AnimatedCounter'
import { IconAlert, IconChart, IconMessage, IconHeart } from '../components/Icons'

const stagger = {
  animate: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
}
const item = {
  initial: { opacity: 0, y: 24, scale: 0.96 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const stats = [
  {
    prefix: '',
    number: 70,
    suffix: '%',
    label: 'de los incidentes graves en hospitales tienen como causa una falla de comunicación entre el personal y el paciente',
    source: 'Comisión Conjunta Internacional (Joint Commission), 2024',
    Icon: IconAlert,
    iconColor: '#e53e3e',
  },
  {
    prefix: '$',
    number: 1700,
    suffix: 'M',
    label: 'en demandas médicas y 1,744 muertes en 5 años, atribuibles directamente a comunicación deficiente',
    source: 'Centro de Seguros Médicos de Harvard (CRICO), 2016',
    Icon: IconChart,
    iconColor: '#c05621',
  },
  {
    prefix: '',
    number: 96,
    suffix: '%',
    label: 'de las quejas hospitalarias son por trato y comunicación — no por calidad clínica ni por el resultado médico',
    source: 'Consejo Asesor de Salud, EE.UU. (Advisory Board), 2016',
    Icon: IconMessage,
    iconColor: '#0C2D4E',
  },
  {
    prefix: '',
    number: 80,
    suffix: '%',
    label: 'de estudios de intervención confirman que la empatía clínica mejora los resultados de salud del paciente',
    source: 'Revisión sistemática · PLOS Medicine, 2023',
    Icon: IconHeart,
    iconColor: '#2BA8A2',
  },
]

export default function S05_DatosDuros() {
  return (
    <div className="slide" style={{ padding: '50px 80px', gap: '1.3rem' }}>
      <div className="corner-accent" />
      <div className="corner-accent--tl" />

      <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', marginBottom: '0.3rem' }}>
        <div className="pill" style={{ marginBottom: '0.4rem' }}>Contexto · Evidencia</div>
        <h2 className="slide-title">La realidad que nos convoca</h2>
        <p style={{ fontSize: '1rem', color: 'var(--teal-dark)', fontWeight: 600, marginTop: '0.2rem' }}>
          Los datos no mienten
        </p>
      </motion.div>

      <motion.div
        variants={stagger} initial="initial" animate="animate"
        className="grid-2"
        style={{ gap: '1.1rem', maxWidth: '960px', width: '100%' }}
      >
        {stats.map((s, i) => (
          <motion.div key={i} variants={item} className="stat-card" style={{ padding: '1.3rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
              <div className="stat-number" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                {s.prefix}
                <AnimatedCounter to={s.number} duration={2} />
                {s.suffix}
              </div>
              <div style={{
                width: '38px', height: '38px', borderRadius: '10px', flexShrink: 0,
                background: `${s.iconColor}15`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <s.Icon size={20} color={s.iconColor} />
              </div>
            </div>
            <p className="stat-label" style={{ fontSize: '0.82rem' }}>{s.label}</p>
            <p className="stat-source">{s.source}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* WOW thesis callout */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        style={{
          maxWidth: '960px', width: '100%',
          background: 'linear-gradient(135deg, #0C2D4E, #163557)',
          borderRadius: '14px',
          padding: '1rem 1.6rem',
          display: 'flex', alignItems: 'center', gap: '1.2rem',
          border: '1px solid rgba(69,197,190,0.25)',
        }}
      >
        <div style={{
          background: 'rgba(69,197,190,0.15)',
          borderRadius: '10px',
          padding: '0.6rem 1rem',
          flexShrink: 0,
          textAlign: 'center',
        }}>
          <div style={{ fontFamily: 'DM Serif Display, serif', fontSize: '2rem', color: '#45C5BE', lineHeight: 1 }}>8×</div>
          <div style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.5)', marginTop: '2px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>aumento</div>
        </div>
        <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.6, margin: 0 }}>
          La emoción de <strong style={{ color: '#45C5BE' }}>desprecio en el paciente se multiplica 8 veces</strong> durante la consulta médica respecto al momento previo — primer estudio con neuroimagen aplicada a la experiencia sanitaria en España.
          <span style={{ display: 'block', marginTop: '4px', fontSize: '0.68rem', color: 'rgba(255,255,255,0.4)', fontStyle: 'italic' }}>
            Rodríguez Fuertes, A. (2018). Emociones e Interacciones Sociales en Experiencia Sanitaria. Universidad Autónoma de Madrid.
          </span>
        </p>
      </motion.div>
    </div>
  )
}
