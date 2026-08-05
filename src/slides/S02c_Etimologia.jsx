import { motion } from 'framer-motion'

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: d, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function S02c_Etimologia() {
  return (
    <div className="slide" style={{ padding: '56px 80px' }}>
      <div className="corner-accent" />

      <div style={{ maxWidth: '980px', width: '100%', display: 'flex', flexDirection: 'column', gap: '2rem' }}>

        {/* Header */}
        <motion.div {...fade(0.1)} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div className="pill" style={{ alignSelf: 'flex-start' }}>Etimología</div>
          <h2 className="slide-title">¿Qué significa <span className="teal-accent">asertivo</span>?</h2>
          <div className="teal-bar" />
        </motion.div>

        {/* Etymology breakdown */}
        <motion.div {...fade(0.3)} style={{
          background: '#0C2D4E',
          borderRadius: '20px',
          padding: '1.8rem 2.2rem',
          display: 'flex', alignItems: 'center', gap: '2rem',
        }}>
          <div style={{ textAlign: 'center', flexShrink: 0 }}>
            <div style={{ fontFamily: 'DM Serif Display, serif', fontSize: '3.2rem', color: '#45C5BE', lineHeight: 1 }}>
              assertus
            </div>
            <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.1em', marginTop: '4px' }}>
              LATÍN
            </div>
          </div>
          <div style={{ width: '1px', height: '60px', background: 'rgba(69,197,190,0.3)', flexShrink: 0 }} />
          <div style={{ display: 'flex', gap: '1.5rem', flex: 1 }}>
            {[
              { prefix: 'ad', meaning: '"hacia"', color: '#45C5BE' },
              { prefix: '+', meaning: '', color: 'rgba(255,255,255,0.3)' },
              { prefix: 'serere', meaning: '"afirmar, declarar, vindicar"', color: '#45C5BE' },
            ].map((item, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'DM Serif Display, serif', fontSize: '1.6rem', color: item.color }}>{item.prefix}</div>
                {item.meaning && <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.55)', marginTop: '4px', lineHeight: 1.4 }}>{item.meaning}</div>}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Definition */}
        <motion.div {...fade(0.5)} style={{
          background: 'white',
          borderRadius: '16px',
          padding: '1.5rem 2rem',
          border: '1.5px solid rgba(69,197,190,0.25)',
          boxShadow: '0 2px 12px rgba(12,45,78,0.06)',
        }}>
          <p style={{ fontSize: 'clamp(1rem, 1.6vw, 1.2rem)', color: '#2D3748', lineHeight: 1.75, margin: 0 }}>
            <strong style={{ color: '#0C2D4E' }}>Ser asertivo</strong> es la capacidad de <strong>afirmar lo propio con claridad, firmeza y respeto</strong> — sin agredir a los demás ni someterse a sus demandas. No es ni agresividad ni pasividad: es el punto de equilibrio.
          </p>
        </motion.div>

        {/* Quotes */}
        <motion.div {...fade(0.65)} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          {[
            {
              quote: '"La gente olvidará lo que dijiste, olvidará lo que hiciste, pero nunca olvidará cómo la hiciste sentir."',
              author: 'Maya Angelou',
              work: 'Escritora y activista',
            },
            {
              quote: '"Ser escuchado es tan próximo a ser amado que la mayoría de las personas no distingue la diferencia."',
              author: 'Carl Rogers',
              work: 'Psicólogo humanista',
            },
          ].map((q, i) => (
            <div key={i} style={{
              background: '#F7FAFC',
              borderRadius: '14px',
              padding: '1rem 1.2rem',
              border: '1px solid rgba(12,45,78,0.08)',
              display: 'flex', flexDirection: 'column', gap: '0.6rem',
            }}>
              <p style={{ fontSize: '0.82rem', color: '#2D3748', lineHeight: 1.65, fontStyle: 'italic', margin: 0 }}>
                {q.quote}
              </p>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0C2D4E' }}>{q.author}</div>
                <div style={{ fontSize: '0.68rem', color: '#718096' }}>{q.work}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* 3 styles comparison */}
        <motion.div {...fade(0.7)} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
          {[
            { label: 'Pasivo', desc: 'Calla lo que piensa. Cede siempre. Evita el conflicto.', color: '#718096', bg: '#F7FAFC' },
            { label: 'Asertivo', desc: 'Expresa con claridad y respeto. Escucha. Establece límites.', color: '#45C5BE', bg: 'rgba(69,197,190,0.08)', border: 'rgba(69,197,190,0.4)' },
            { label: 'Agresivo', desc: 'Impone su opinión. No escucha. Ignora los derechos del otro.', color: '#E53E3E', bg: '#FFF5F5' },
          ].map((s, i) => (
            <div key={i} style={{
              background: s.bg,
              borderRadius: '12px',
              padding: '1rem 1.2rem',
              border: `1.5px solid ${s.border || 'rgba(12,45,78,0.1)'}`,
              textAlign: 'center',
            }}>
              <div style={{ fontWeight: 700, fontSize: '0.9rem', color: s.color, marginBottom: '0.4rem' }}>{s.label}</div>
              <p style={{ fontSize: '0.82rem', color: '#4A5568', lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
