import { motion } from 'framer-motion'

// 100 cells — each = 1 point out of 100 in patient satisfaction
// Colors: 4 red (medical care 3.5%), 64 teal (org+trato 64.1%), 32 gray (other factors)
const CELLS = Array.from({ length: 100 }, (_, i) => {
  if (i < 4)  return 'red'   // cuidado médico
  if (i < 68) return 'teal'  // organización y trato
  return 'gray'               // otros factores
})

function WaffleChart() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(10, 1fr)',
      gap: '4px',
      width: '220px',
    }}>
      {CELLS.map((color, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 + i * 0.007, duration: 0.18, ease: 'backOut' }}
          style={{
            width: '18px', height: '18px',
            borderRadius: '3px',
            background:
              color === 'red'  ? '#e53e3e' :
              color === 'teal' ? '#45C5BE' :
                                 '#e2e8f0',
          }}
        />
      ))}
    </div>
  )
}

const genera = [
  'Ignorar al paciente mientras escribes en la computadora',
  'Hablar sin mirarlo a los ojos',
  'Usar lenguaje técnico sin verificar que entendió',
]
const reduce = [
  'Llamarlo por su nombre desde el primer momento',
  'Preguntarle "¿Me puede repetir cómo tomará el medicamento?"',
  'Darle 30 segundos de atención total sin interrupciones',
]

export default function S25c_ParadojaSatisfaccion() {
  return (
    <div className="slide" style={{
      background: 'linear-gradient(160deg, #EEF2F7 0%, #dff4f3 100%)',
      padding: '40px 72px',
      gap: '1.2rem',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(69,197,190,0.08) 1px, transparent 1px)',
        backgroundSize: '28px 28px', pointerEvents: 'none',
      }} />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        style={{ textAlign: 'center' }}
      >
        <div className="pill pill--solid" style={{ marginBottom: '0.5rem' }}>
          Rodríguez Fuertes, 2018 · Análisis estadístico de satisfacción global
        </div>
        <h2 className="slide-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.5rem)', margin: '0 0 0.4rem 0' }}>
          ¿Qué determina si el paciente queda satisfecho?
        </h2>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-light)', margin: 0 }}>
          El estudio analizó estadísticamente qué tanto influye cada factor. Imagina que la satisfacción son 100 puntos — ¿cuántos aporta cada uno?
        </p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', width: '100%', maxWidth: '980px', alignItems: 'start' }}>

        {/* Left — waffle + callouts */}
        <motion.div
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.2rem' }}
        >
          {/* Waffle */}
          <WaffleChart />

          {/* Legend */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
            {[
              { color: '#45C5BE', label: 'Organización y trato personal', pct: '64.1%', size: 'big', desc: 'tiempos, comunicación, cómo lo tratan' },
              { color: '#e2e8f0', label: 'Otros factores (infraestructura, etc.)', pct: '32.4%', size: 'small', desc: '' },
              { color: '#e53e3e', label: 'Cuidado médico', pct: '3.5%', size: 'big', desc: 'diagnóstico, tratamiento, habilidad clínica' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '14px', height: '14px', borderRadius: '3px', background: item.color, flexShrink: 0 }} />
                <div style={{ flex: 1 }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--navy)', fontWeight: item.size === 'big' ? 700 : 400 }}>
                    {item.label}
                  </span>
                  {item.desc && <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>{item.desc}</div>}
                </div>
                <span style={{
                  fontFamily: 'DM Serif Display, serif',
                  fontSize: item.size === 'big' ? '1.6rem' : '1.1rem',
                  color: item.color === '#e2e8f0' ? '#a0aec0' : item.color,
                  lineHeight: 1, flexShrink: 0,
                }}>{item.pct}</span>
              </div>
            ))}
          </div>

          {/* Explanation */}
          <div style={{
            background: 'rgba(69,197,190,0.1)', borderRadius: '12px',
            padding: '0.85rem 1rem', borderLeft: '4px solid #45C5BE',
            width: '100%',
          }}>
            <p style={{ fontSize: '0.82rem', color: 'var(--navy)', lineHeight: 1.6, margin: 0 }}>
              El paciente <strong>no puede evaluar</strong> si tu diagnóstico fue correcto — eso requiere conocimiento médico que no tiene.
              Juzga lo que <em>sí</em> puede ver y sentir: cómo lo tratan.
            </p>
          </div>
        </motion.div>

        {/* Right — behaviors + takeaway */}
        <motion.div
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.3 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          {/* Bridge question */}
          <div style={{
            background: '#0C2D4E', borderRadius: '16px',
            padding: '1.1rem 1.3rem',
          }}>
            <p style={{ fontSize: '0.9rem', color: 'white', lineHeight: 1.65, margin: 0, fontWeight: 600 }}>
              Entonces la pregunta no es:<br/>
              <span style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 400 }}>¿cómo soy mejor médico?</span>
            </p>
            <p style={{ fontSize: '0.9rem', color: '#45C5BE', lineHeight: 1.5, margin: '8px 0 0 0', fontWeight: 700 }}>
              La pregunta es:<br/>
              ¿cómo trato mejor a la persona que tengo enfrente?
            </p>
          </div>

          {/* Genera */}
          <div style={{
            background: 'white', borderRadius: '14px', padding: '1rem 1.2rem',
            border: '1.5px solid rgba(229,62,62,0.2)', boxShadow: 'var(--shadow-sm)',
          }}>
            <div style={{ fontSize: '0.62rem', fontWeight: 800, color: '#c53030', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '10px' }}>
              ✕ Genera la sensación de ser ignorado
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {genera.map((g, i) => (
                <div key={i} style={{ display: 'flex', gap: '9px', alignItems: 'flex-start' }}>
                  <span style={{ color: '#e53e3e', fontWeight: 800, fontSize: '0.8rem', flexShrink: 0, marginTop: '1px' }}>✕</span>
                  <span style={{ fontSize: '0.83rem', color: 'var(--navy)', lineHeight: 1.5 }}>{g}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Reduce */}
          <div style={{
            background: 'white', borderRadius: '14px', padding: '1rem 1.2rem',
            border: '1.5px solid rgba(69,197,190,0.25)', boxShadow: 'var(--shadow-sm)',
          }}>
            <div style={{ fontSize: '0.62rem', fontWeight: 800, color: '#2BA8A2', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '10px' }}>
              ✓ La elimina — sin necesitar más tiempo
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {reduce.map((r, i) => (
                <div key={i} style={{ display: 'flex', gap: '9px', alignItems: 'flex-start' }}>
                  <span style={{ color: '#2BA8A2', fontWeight: 800, fontSize: '0.8rem', flexShrink: 0, marginTop: '1px' }}>✓</span>
                  <span style={{ fontSize: '0.83rem', color: 'var(--navy)', lineHeight: 1.5 }}>{r}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}
            style={{ borderLeft: '4px solid #45C5BE', paddingLeft: '1rem' }}
          >
            <p style={{ fontSize: '0.82rem', color: '#2BA8A2', fontStyle: 'italic', lineHeight: 1.6, margin: '0 0 4px 0' }}>
              "Si no te dan información, no piensas más que en lo malo."
            </p>
            <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', margin: 0 }}>— Paciente, grupo focal del estudio</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
