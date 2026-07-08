import { motion } from 'framer-motion'

const refs = [
  {
    author: 'Rodríguez Fuertes, A.',
    year: '2018',
    title: 'Análisis de las emociones generadas durante la experiencia sanitaria del paciente mediante la aplicación de técnicas de neuromarketing.',
    source: 'Tesis Doctoral. Universidad de Alcalá.',
  },
  {
    author: 'The Joint Commission.',
    year: '2024',
    title: 'Sentinel Event Data: 2023 Annual Review.',
    source: 'The Joint Commission.',
  },
  {
    author: 'CRICO Strategies.',
    year: '2016',
    title: 'Malpractice Risks in Communication Failures.',
    source: 'Harvard Medical Institutions.',
  },
  {
    author: 'Press Ganey.',
    year: '2024',
    title: 'Patient Experience in 2024: Bridging the Gap in Patient Care Journeys.',
    source: 'Press Ganey Associates.',
  },
  {
    author: 'Kelley, J.M. et al.',
    year: '2014',
    title: 'The influence of the patient-clinician relationship on healthcare outcomes: A systematic review.',
    source: 'PLOS ONE, 9(4).',
  },
  {
    author: 'Mercer, S.W. et al.',
    year: '2022',
    title: 'Impact of physician empathy on patient outcomes.',
    source: 'British Journal of General Practice, 72(715).',
  },
  {
    author: 'Carlzon, J.',
    year: '1987',
    title: 'Moments of Truth.',
    source: 'Ballinger Publishing.',
  },
  {
    author: 'Lashley, C. & Morrison, A.',
    year: '2000',
    title: 'In Search of Hospitality.',
    source: 'Butterworth-Heinemann.',
  },
  {
    author: 'Derksen, F. et al.',
    year: '2013',
    title: 'Effectiveness of empathy in general practice: A systematic review.',
    source: 'British Journal of General Practice, 63(606).',
  },
  {
    author: 'Centers for Medicare & Medicaid Services (CMS).',
    year: '2024',
    title: 'HCAHPS Summary Analyses.',
    source: 'CMS.gov.',
  },
  {
    author: 'Benner, P.',
    year: '1984',
    title: 'From Novice to Expert: Excellence and Power in Clinical Nursing Practice.',
    source: 'Addison-Wesley.',
  },
  {
    author: 'Rogers, C.',
    year: '1980',
    title: 'A Way of Being.',
    source: 'Houghton Mifflin.',
  },
]

export default function S34_Referencias() {
  const col1 = refs.slice(0, 6)
  const col2 = refs.slice(6)

  return (
    <div className="slide bg-dots" style={{ padding: '50px 80px', gap: '1.5rem' }}>
      <div className="corner-accent" />

      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center' }}
      >
        <div className="pill" style={{ marginBottom: '0.5rem' }}>Fuentes</div>
        <h2 className="slide-title">Referencias bibliográficas</h2>
        <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, #45C5BE, #2BA8A2)', borderRadius: '2px', margin: '0.7rem auto 0' }} />
      </motion.div>

      <div className="grid-2" style={{ maxWidth: '960px', width: '100%', gap: '1.5rem', alignItems: 'start' }}>
        {[col1, col2].map((col, ci) => (
          <div key={ci} style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
            {col.map((ref, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 + (ci * 6 + i) * 0.05 }}
                style={{
                  background: 'white',
                  borderRadius: '10px',
                  padding: '0.7rem 0.9rem',
                  boxShadow: 'var(--shadow-sm)',
                  border: '1px solid rgba(69,197,190,0.15)',
                  borderLeft: '3px solid rgba(69,197,190,0.5)',
                }}
              >
                <div style={{ display: 'flex', gap: '6px', alignItems: 'baseline', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--navy)' }}>{ref.author}</span>
                  <span style={{ fontSize: '0.68rem', color: 'var(--teal-dark)', fontWeight: 600 }}>({ref.year}).</span>
                </div>
                <p style={{ fontSize: '0.68rem', color: 'var(--text)', lineHeight: 1.5, margin: '2px 0 0', fontStyle: 'italic' }}>
                  {ref.title} <span style={{ fontStyle: 'normal', color: 'var(--text-light)' }}>{ref.source}</span>
                </p>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
