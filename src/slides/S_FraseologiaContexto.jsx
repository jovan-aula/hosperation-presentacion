import { motion } from 'framer-motion'

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: d },
})

export default function S_FraseologiaContexto() {
  return (
    <div style={{
      width: '100vw', height: '100vh',
      background: '#F7FAFC',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '60px 80px',
      position: 'relative', overflow: 'hidden',
    }}>
      <div className="corner-accent" />

      <div style={{ maxWidth: '960px', width: '100%', display: 'flex', flexDirection: 'column', gap: '2rem' }}>

        <motion.div {...fade(0.1)} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ background: 'rgba(69,197,190,0.12)', border: '1px solid rgba(69,197,190,0.3)', borderRadius: '100px', padding: '0.3rem 1.2rem', fontSize: '0.68rem', fontWeight: 700, color: '#2BA8A2', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            Fraseologia estandarizada
          </div>
          <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 400, color: '#0C2D4E', lineHeight: 1.2, margin: 0 }}>
            ¿Por que los bancos siempre<br />suenan igual?
          </h2>
        </motion.div>

        <motion.div {...fade(0.25)} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}>

          {/* Ejemplo banco */}
          <div style={{ background: 'white', borderRadius: '16px', border: '1px solid rgba(12,45,78,0.08)', boxShadow: '0 2px 8px rgba(12,45,78,0.06)', overflow: 'hidden' }}>
            <div style={{ padding: '0.7rem 1.2rem', background: 'rgba(12,45,78,0.04)', borderBottom: '1px solid rgba(12,45,78,0.06)' }}>
              <span style={{ fontSize: '0.62rem', fontWeight: 800, color: '#6B8FA8', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Ejemplo — Banco</span>
            </div>
            <div style={{ padding: '1rem 1.2rem', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              {[
                { label: 'Bienvenida', frase: '"Buenos dias, le atiende Maria del Banco Nacional, ¿en que le puedo servir?"' },
                { label: 'Despedida', frase: '"Gracias por comunicarse con nosotros. Que tenga un excelente dia."' },
                { label: 'Telefono', frase: '"Banco Nacional, le atiende Maria, ¿con quien tengo el gusto?"' },
              ].map((item, i) => (
                <div key={i}>
                  <div style={{ fontSize: '0.6rem', fontWeight: 700, color: '#45C5BE', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>{item.label}</div>
                  <p style={{ fontSize: '0.82rem', color: '#4A5568', lineHeight: 1.55, margin: 0, fontStyle: 'italic' }}>{item.frase}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Por que funciona */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', justifyContent: 'center' }}>
            <p style={{ fontSize: '0.9rem', color: '#4A5568', lineHeight: 1.75, margin: 0 }}>
              Cuando una institucion tiene frases estandarizadas, no improvisa — <strong style={{ color: '#0C2D4E' }}>comunica con intencion</strong>.
            </p>
            <p style={{ fontSize: '0.9rem', color: '#4A5568', lineHeight: 1.75, margin: 0 }}>
              El paciente escucha lo mismo sin importar quien lo atiende. Eso genera <strong style={{ color: '#0C2D4E' }}>confianza, profesionalismo y calidez</strong>.
            </p>

            <div style={{ background: 'rgba(69,197,190,0.08)', border: '1px solid rgba(69,197,190,0.25)', borderRadius: '10px', padding: '0.75rem 1.1rem', display: 'flex', alignItems: 'center', gap: '10px', marginTop: '0.4rem' }}>
              <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#45C5BE', letterSpacing: '0.1em', textTransform: 'uppercase', flexShrink: 0 }}>Tip</span>
              <span style={{ width: '1px', height: '14px', background: 'rgba(69,197,190,0.3)', flexShrink: 0 }} />
              <p style={{ fontSize: '0.8rem', color: '#4A5568', margin: 0, lineHeight: 1.5 }}>
                No se trata de sonar robotico — se trata de tener un punto de partida asertivo.
              </p>
            </div>
          </div>

        </motion.div>

      </div>
    </div>
  )
}
