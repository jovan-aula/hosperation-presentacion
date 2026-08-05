import { motion } from 'framer-motion'

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay: d, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function S06_PorQueImportante() {
  return (
    <div className="slide" style={{ padding: '48px 72px' }}>
      <div className="corner-accent" />
      <div style={{ maxWidth: '980px', width: '100%', display: 'flex', flexDirection: 'column', gap: '1.6rem' }}>

        {/* Header */}
        <motion.div {...fade(0.1)} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <h2 className="slide-title">
            ¿Por qué es importante la{' '}
            <span className="teal-accent">comunicación asertiva</span>?
          </h2>
          <div className="teal-bar" />
          <p style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)', color: '#4A5568', lineHeight: 1.7, maxWidth: '680px' }}>
            Una comunicación poco clara puede generar confusión, tensión o desconfianza.
            La forma en que hablamos también es una forma de cuidar.
          </p>
        </motion.div>

        {/* Contrast examples */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>

          {/* Non-assertive */}
          <motion.div {...fade(0.3)} style={{
            background: '#fff5f5',
            border: '1.5px solid rgba(229,62,62,0.2)',
            borderLeft: '4px solid #E53E3E',
            borderRadius: '0 14px 14px 0',
            padding: '1.2rem 1.4rem',
            display: 'flex', flexDirection: 'column', gap: '0.8rem',
          }}>
            <div style={{
              fontSize: '0.65rem', fontWeight: 800,
              color: '#C53030', letterSpacing: '0.1em', textTransform: 'uppercase',
            }}>
              Sin asertividad
            </div>
            <p style={{ fontSize: 'clamp(0.85rem, 1.25vw, 0.95rem)', color: '#2D3748', lineHeight: 1.65, fontStyle: 'italic', margin: 0 }}>
              "Ya le dijeron que tiene que esperar. No sé cuánto, depende del doctor."
            </p>
            <p style={{ fontSize: '0.78rem', color: '#E53E3E', margin: 0, fontWeight: 500 }}>
              El familiar se va sin información, sin contención y con más angustia que antes.
            </p>
          </motion.div>

          {/* Assertive */}
          <motion.div {...fade(0.45)} style={{
            background: 'rgba(69,197,190,0.06)',
            border: '1.5px solid rgba(69,197,190,0.35)',
            borderLeft: '4px solid #45C5BE',
            borderRadius: '0 14px 14px 0',
            padding: '1.2rem 1.4rem',
            display: 'flex', flexDirection: 'column', gap: '0.8rem',
          }}>
            <div style={{
              fontSize: '0.65rem', fontWeight: 800,
              color: '#2BA8A2', letterSpacing: '0.1em', textTransform: 'uppercase',
            }}>
              Con asertividad
            </div>
            <p style={{ fontSize: 'clamp(0.85rem, 1.25vw, 0.95rem)', color: '#2D3748', lineHeight: 1.65, fontStyle: 'italic', margin: 0 }}>
              "Entiendo que la espera es difícil. El médico está con su paciente en este momento — en cuanto haya una actualización, le informamos de inmediato."
            </p>
            <p style={{ fontSize: '0.78rem', color: '#2BA8A2', margin: 0, fontWeight: 500 }}>
              El familiar recibe presencia, información y un compromiso concreto.
            </p>
          </motion.div>
        </div>

        {/* Bottom 3 points */}
        <motion.div {...fade(0.6)} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.8rem' }}>
          {[
            {
              svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#45C5BE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>,
              text: 'Orienta al paciente y familia en momentos de incertidumbre',
            },
            {
              svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#45C5BE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
              text: 'Contiene la angustia sin necesidad de resolver todo',
            },
            {
              svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#45C5BE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
              text: 'Construye confianza con cada interacción, no solo con el diagnóstico',
            },
          ].map((item, i) => (
            <div key={i} style={{
              background: 'white',
              borderRadius: '12px',
              padding: '0.9rem 1rem',
              border: '1px solid rgba(12,45,78,0.08)',
              display: 'flex', gap: '0.7rem', alignItems: 'flex-start',
            }}>
              <span style={{ flexShrink: 0, marginTop: '2px' }}>{item.svg}</span>
              <p style={{ fontSize: '0.8rem', color: '#4A5568', lineHeight: 1.6, margin: 0 }}>{item.text}</p>
            </div>
          ))}
        </motion.div>

        {/* Closing line */}
        <motion.p {...fade(0.75)} style={{
          fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
          color: '#45C5BE', fontWeight: 700,
          lineHeight: 1.5, margin: 0, textAlign: 'center',
        }}>
          Comunicar bien también es cuidar.
        </motion.p>
      </div>
    </div>
  )
}
