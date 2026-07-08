import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const stages = [
  {
    num: 1,
    label: 'Visibilidad',
    sub: 'Antes de llegar',
    detail: 'El paciente busca especialista en Google, redes sociales o referencias. Ya forma una expectativa antes del primer contacto.',
    touchpoints: ['Google Maps', 'Redes sociales', 'Recomendación', 'Sitio web'],
    emotion: 'Esperanza / Incertidumbre',
    color: '#0C2D4E',
    risk: 'Si no apareces o tienes malas reseñas, el paciente elige otro.',
  },
  {
    num: 2,
    label: 'Reputación',
    sub: 'Evaluación',
    detail: 'Lee reseñas, revisa fotos, compara opciones. El 87% valora la atención personalizada del personal como factor #1 al elegir.',
    touchpoints: ['Reseñas Google', 'Fotos', 'Calificaciones', 'Comentarios'],
    emotion: 'Evaluación / Comparación',
    color: '#1a4068',
    risk: '1 reseña negativa sobre trato puede eliminar 5 reseñas positivas sobre calidad clínica.',
    source: 'Primerared, 2017 · 3,000 pacientes',
  },
  {
    num: 3,
    label: 'Reserva',
    sub: 'Primer contacto',
    detail: 'Llama o reserva en línea. El primer contacto humano define si el paciente siente que "eligió bien".',
    touchpoints: ['Llamada telefónica', 'WhatsApp', 'Chat web', 'Presencial'],
    emotion: 'Expectativa / Ansiedad',
    color: '#45C5BE',
    risk: 'Un primer contacto frío o desorganizado genera cancelaciones antes de la visita.',
  },
  {
    num: 4,
    label: 'Antes',
    sub: 'Pre-visita',
    detail: 'Recibe recordatorios, instrucciones previas, formularios. La comunicación clara reduce la ansiedad hasta en un 40%.',
    touchpoints: ['SMS / Email', 'Instrucciones previas', 'Estacionamiento', 'Accesibilidad'],
    emotion: 'Ansiedad / Preparación',
    color: '#2BA8A2',
    risk: 'Sin orientación previa, el paciente llega estresado y ya empieza la visita con una experiencia negativa.',
  },
  {
    num: 5,
    label: 'Visita',
    sub: 'La atención',
    detail: 'El momento de mayor impacto emocional. Rodríguez Fuertes (2018): el "desprecio" se dispara 8× en este momento cuando el personal no conecta con el paciente.',
    touchpoints: ['Recepción', 'Espera', 'Consulta', 'Procedimientos', 'Enfermería'],
    emotion: 'Vulnerabilidad máxima',
    color: '#e53e3e',
    risk: 'Este es el momento de verdad definitivo. Todo lo demás puede fallar si este momento es excelente.',
    source: 'Rodríguez Fuertes, A. (2018). Emociones e interacciones en experiencia sanitaria. UAM.',
  },
  {
    num: 6,
    label: 'Alta',
    sub: 'El cierre',
    detail: 'Instrucciones de alta, medicamentos, seguimiento. El 23% de readmisiones se deben a instrucciones al alta incompletas o incomprensibles.',
    touchpoints: ['Instrucciones', 'Medicamentos', 'Cita de seguimiento', 'Preguntas'],
    emotion: 'Alivio / Confusión',
    color: '#c05621',
    risk: 'El paciente más satisfecho puede irse insatisfecho si el cierre es deficiente.',
  },
  {
    num: 7,
    label: 'Recomendación',
    sub: 'Promoción',
    detail: 'Deja una reseña, recomienda o advierte a otros. El 80% de los pacientes comparte su experiencia online. (Press Ganey, 2024)',
    touchpoints: ['Google Maps', 'Facebook', 'Boca a boca', 'Encuestas'],
    emotion: 'Satisfacción o decepción',
    color: '#0C2D4E',
    risk: 'Esta etapa alimenta de vuelta a la etapa 1 (Visibilidad). El ciclo se cierra aquí.',
    source: 'Press Ganey, 2024',
  },
]

export default function S21b_PatientJourneyMap() {
  const [active, setActive] = useState(null)
  const activeStage = active !== null ? stages[active] : null

  return (
    <div className="slide" style={{
      background: 'linear-gradient(160deg, #EEF2F7 0%, #dde9f5 100%)',
      padding: '44px 72px',
      gap: '1rem',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(12,45,78,0.05) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        pointerEvents: 'none',
      }} />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ textAlign: 'center' }}
      >
        <div className="pill pill--solid" style={{ marginBottom: '0.4rem' }}>Recorrido del paciente · Mapa de experiencia</div>
        <h2 className="slide-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.6rem)' }}>
          ¿Dónde comienza la experiencia?
          <span style={{ color: '#45C5BE' }}> ¿Dónde termina?</span>
        </h2>
        <p className="slide-subtitle" style={{ fontSize: '0.88rem' }}>
          Selecciona cada etapa — Rodríguez Fuertes (2018) + Primerared (2017) + Press Ganey (2024)
        </p>
      </motion.div>

      {/* Journey arc */}
      <div style={{ width: '100%', maxWidth: '960px' }}>
        {/* Arc line */}
        <div style={{ position: 'relative', height: '80px', marginBottom: '0.5rem' }}>
          <svg viewBox="0 0 960 80" style={{ width: '100%', height: '80px', overflow: 'visible' }}>
            <motion.path
              d="M 60 70 Q 480 0 900 70"
              stroke="#45C5BE"
              strokeWidth="2"
              fill="none"
              strokeDasharray="6 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 1.5, delay: 0.3 }}
            />
            {stages.map((s, i) => {
              const t = i / 6
              const x = 60 + (900 - 60) * t
              const y = 70 - Math.sin(t * Math.PI) * 60
              return (
                <motion.g
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  onClick={() => setActive(active === i ? null : i)}
                  style={{ cursor: 'pointer' }}
                >
                  <circle
                    cx={x} cy={y} r={active === i ? 20 : 16}
                    fill={active === i ? s.color : 'white'}
                    stroke={s.color}
                    strokeWidth="2.5"
                  />
                  <text
                    x={x} y={y + 5}
                    textAnchor="middle"
                    fill={active === i ? 'white' : s.color}
                    fontSize="11"
                    fontWeight="700"
                    fontFamily="DM Sans, sans-serif"
                  >
                    {s.num}
                  </text>
                </motion.g>
              )
            })}
          </svg>
        </div>

        {/* Stage labels */}
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', paddingTop: '0.2rem' }}>
          {stages.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.08 }}
              onClick={() => setActive(active === i ? null : i)}
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                width: '13%', cursor: 'pointer', gap: '2px',
              }}
            >
              <div style={{
                fontSize: '0.75rem', fontWeight: 700,
                color: active === i ? s.color : 'var(--navy)',
                textAlign: 'center', lineHeight: 1.2,
                transition: 'color 0.2s',
              }}>
                {s.label}
              </div>
              <div style={{ fontSize: '0.62rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                {s.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail panel */}
      <div style={{ width: '100%', maxWidth: '960px', minHeight: '120px' }}>
        <AnimatePresence mode="wait">
          {activeStage ? (
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              style={{
                background: 'white',
                borderRadius: '16px',
                padding: '1.2rem 1.6rem',
                boxShadow: 'var(--shadow-lg)',
                border: `2px solid ${activeStage.color}30`,
                display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
                gap: '1.2rem',
              }}
            >
              {/* Left: detail */}
              <div style={{ gridColumn: '1 / 3' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem' }}>
                  <div style={{
                    width: '28px', height: '28px', borderRadius: '8px',
                    background: activeStage.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.72rem', fontWeight: 800, color: 'white',
                  }}>
                    {activeStage.num}
                  </div>
                  <div>
                    <span style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--navy)' }}>{activeStage.label}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-light)', marginLeft: '6px' }}>{activeStage.sub}</span>
                  </div>
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text)', lineHeight: 1.6, margin: '0 0 0.6rem' }}>
                  {activeStage.detail}
                </p>
                {activeStage.source && (
                  <p style={{ fontSize: '0.66rem', color: 'var(--text-muted)', fontStyle: 'italic', margin: 0 }}>
                    Fuente: {activeStage.source}
                  </p>
                )}
              </div>

              {/* Right: risk + emotion + touchpoints */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <div>
                  <div style={{ fontSize: '0.64rem', fontWeight: 700, color: '#e53e3e', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '3px' }}>
                    Riesgo clave
                  </div>
                  <p style={{ fontSize: '0.76rem', color: 'var(--text-light)', lineHeight: 1.45, margin: 0 }}>
                    {activeStage.risk}
                  </p>
                </div>
                <div>
                  <div style={{ fontSize: '0.64rem', fontWeight: 700, color: activeStage.color, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>
                    Emoción dominante
                  </div>
                  <span style={{
                    fontSize: '0.75rem', fontWeight: 600,
                    background: `${activeStage.color}15`,
                    color: activeStage.color,
                    borderRadius: '6px',
                    padding: '2px 10px',
                  }}>
                    {activeStage.emotion}
                  </span>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                textAlign: 'center',
                color: 'var(--text-muted)',
                fontSize: '0.85rem',
                fontStyle: 'italic',
                paddingTop: '1.5rem',
              }}
            >
              Selecciona una etapa del recorrido para ver los detalles
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
