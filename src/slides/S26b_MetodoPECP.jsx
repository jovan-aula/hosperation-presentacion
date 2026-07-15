import { motion } from 'framer-motion'

const pasos = [
  {
    letra: 'P',
    accion: 'Pregunté',
    descripcion: 'Abrí el espacio para que la persona hablara. No asumí — indagué.',
    color: '#45C5BE',
    bg: 'rgba(69,197,190,0.10)',
  },
  {
    letra: 'E',
    accion: 'Escuché',
    descripcion: 'Me detuve de verdad. Sin interrumpir, sin preparar mi respuesta mientras el otro habla.',
    color: '#2BA8A2',
    bg: 'rgba(43,168,162,0.10)',
  },
  {
    letra: 'C',
    accion: 'Confirmé',
    descripcion: 'Verifiqué que entendí bien. Devolví lo que escuché para que la persona se sintiera comprendida.',
    color: '#0C2D4E',
    bg: 'rgba(12,45,78,0.08)',
  },
  {
    letra: 'P',
    accion: 'Personalicé',
    descripcion: 'Respondí a esta persona específica — no al diagnóstico, no al número de cama.',
    color: '#163557',
    bg: 'rgba(22,53,87,0.08)',
  },
]

export default function S26b_MetodoPECP() {
  return (
    <div className="slide bg-dots" style={{ padding: '50px 80px', gap: '1.4rem' }}>
      <div className="corner-accent" />

      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', width: '100%' }}
      >
        <div className="pill" style={{ marginBottom: '0.6rem' }}>Herramienta práctica</div>
        <h2 className="slide-title">Método PECP</h2>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-light)', marginTop: '0.3rem' }}>
          Cuatro pasos para generar confianza en cada interacción
        </p>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1rem',
        width: '100%',
        maxWidth: '900px',
      }}>
        {pasos.map((paso, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.13, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              background: 'white',
              borderRadius: '18px',
              padding: '1.4rem 1.6rem',
              boxShadow: 'var(--shadow-sm)',
              border: '1px solid rgba(69,197,190,0.15)',
              display: 'flex',
              gap: '1.2rem',
              alignItems: 'flex-start',
            }}
          >
            {/* Letra grande */}
            <div style={{
              width: '52px', height: '52px',
              borderRadius: '14px',
              background: paso.bg,
              border: `2px solid ${paso.color}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              <span style={{
                fontSize: '1.7rem',
                fontWeight: 800,
                color: paso.color,
                fontFamily: '"DM Serif Display", serif',
                lineHeight: 1,
              }}>
                {paso.letra}
              </span>
            </div>

            {/* Contenido */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              <span style={{
                fontSize: '1.05rem',
                fontWeight: 700,
                color: 'var(--navy)',
                fontFamily: '"DM Serif Display", serif',
              }}>
                {paso.accion}
              </span>
              <p style={{
                margin: 0,
                fontSize: '0.85rem',
                color: 'var(--text-light)',
                lineHeight: 1.6,
              }}>
                {paso.descripcion}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        style={{
          background: 'linear-gradient(135deg, #45C5BE, #2BA8A2)',
          borderRadius: '14px',
          padding: '1rem 2rem',
          maxWidth: '900px',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.8rem',
        }}
      >
        <span style={{ fontSize: '1.3rem' }}>🤝</span>
        <p style={{ margin: 0, fontSize: '0.9rem', color: 'white', fontWeight: 600, textAlign: 'center' }}>
          No se trata de seguir pasos — se trata de que la persona sienta que le importas.
        </p>
      </motion.div>
    </div>
  )
}
