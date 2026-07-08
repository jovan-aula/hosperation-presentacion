import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

function Stars({ count, max = 5 }) {
  return (
    <div style={{ display: 'flex', gap: '2px' }}>
      {Array.from({ length: max }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill={i < count ? '#FBBC04' : '#3a3a3a'}>
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
        </svg>
      ))}
    </div>
  )
}

function GoogleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
}

// Reseñas reales — Google Maps · seleccionadas por patrón de servicio/comunicación
const negativeReviews = [
  {
    avatar: 'CL',
    avatarColor: '#5C6BC0',
    name: 'C. L.',
    stars: 1,
    time: 'Hace 3 meses',
    text: 'Llamamos para verificar la situación con la doctora que atendió a mi pareja. El recepcionista no quiso pasarme a ningún médico, diciéndome que teníamos que ir a otra consulta. Mientras tanto mi pareja ardiendo en fiebre. No les importan sus pacientes.',
    tag: 'Comunicación reactiva',
    tagColor: '#e53e3e',
    diagnosis: 'El paciente no necesitaba una cita nueva — necesitaba una respuesta. El recepcionista cerró una puerta cuando su rol era abrirla. Un solo gesto de escucha habría cambiado esta reseña.',
  },
  {
    avatar: 'MA',
    avatarColor: '#2E7D32',
    name: 'Marco A.',
    stars: 1,
    time: 'Hace 3 meses',
    text: 'Al día siguiente marcamos para comentarle a la doctora mi situación. El recepcionista se portó bien grosero y me dijo que no podía pasarme a nadie, que necesitaba ir en persona y pagar otra consulta. Yo no podía ni caminar del dolor.',
    tag: 'Primer contacto telefónico',
    tagColor: '#e53e3e',
    diagnosis: 'Un paciente que no puede caminar, al teléfono, buscando orientación. La respuesta fue una barrera administrativa. La comunicación reactiva puede ser tan dañina como la ausencia total de atención.',
  },
  {
    avatar: 'LP',
    avatarColor: '#7B1FA2',
    name: 'Laura P.',
    stars: 1,
    time: 'Hace 2 meses',
    text: 'Me hicieron esperar más de 30 minutos únicamente para darme el alta, sin ofrecer siquiera un lugar donde sentarme. No recibí receta, tratamiento ni explicación clara, y aun así me cobraron $1,500 por la consulta. Falta total de empatía.',
    tag: 'Proceso de alta',
    tagColor: '#c05621',
    diagnosis: 'El alta no es el final de la atención — es el último momento de verdad. 30 minutos de espera sin asiento, sin receta, sin explicación: el paciente se va con la sensación de no importarle a nadie.',
  },
  {
    avatar: 'RT',
    avatarColor: '#00695C',
    name: 'Rosa T.',
    stars: 2,
    time: 'Hace un año',
    text: 'Decidí llevar a mi esposo al Sharp en Chulavista donde le hicieron todos los estudios. Salió completamente bien, ni siquiera requirió antibióticos. Afuera del hospital dice "Laboratorios 24 hrs" pero al momento de solicitarlo me dijeron que no era posible sin internamiento. Nadie explicó por qué.',
    tag: 'Comunicación + Expectativas',
    tagColor: '#c05621',
    diagnosis: 'La paciente salió con más dudas de las que entró. Cuando la información no fluye con claridad, el paciente busca respuestas en otra parte — y muchas veces no regresa.',
  },
]

const positiveReviews = [
  {
    avatar: 'KM',
    avatarColor: '#1565C0',
    name: 'Karla M.',
    stars: 5,
    time: 'Hace 4 meses',
    text: 'La Dra. González atendió a mi niño a la brevedad. En todo momento estuvo al pendiente. A los enfermeros(as) las gracias por cómo trataron a mi niño, con esa dulzura que es lo que ellos necesitan en esos momentos. Sin duda alguna siempre será mi primera opción.',
    tag: 'Calidez con paciente pediátrico',
  },
  {
    avatar: 'DR',
    avatarColor: '#BF360C',
    name: 'Daniel R.',
    stars: 5,
    time: 'Hace 4 meses',
    text: 'El médico me explicó todo con claridad, resolvió mis dudas y me dio mucha confianza. Se siente un ambiente profesional pero al mismo tiempo humano, lo cual es muy importante cuando uno va por temas de salud.',
    tag: 'Claridad + Confianza',
  },
  {
    avatar: 'TV',
    avatarColor: '#2E7D32',
    name: 'Tomás V.',
    stars: 5,
    time: 'Hace un mes',
    text: 'La calidad humana de cada persona hizo una enorme diferencia. Llegué en un momento complicado y desde el primer minuto recibí atención humana, profesional y cálida. Gracias por brindar tranquilidad y confianza en uno de los momentos más difíciles.',
    tag: 'Atención integral',
  },
]

export default function S13b_VozDelPaciente() {
  const [revealed, setRevealed] = useState({})
  const [showContrast, setShowContrast] = useState(false)

  const toggleReveal = (i) =>
    setRevealed(prev => ({ ...prev, [i]: !prev[i] }))

  return (
    <div className="slide slide--dark" style={{
      background: 'linear-gradient(160deg, #0a0a0a 0%, #111827 60%, #0C2D4E 100%)',
      padding: '40px 68px',
      gap: '1rem',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(69,197,190,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(69,197,190,0.025) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
        pointerEvents: 'none',
      }} />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center' }}
      >
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: 'rgba(255,255,255,0.07)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '100px',
          padding: '0.28rem 1rem',
          marginBottom: '0.5rem',
        }}>
          <GoogleIcon />
          <span style={{ fontSize: '0.7rem', fontWeight: 600, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Testimonios · Google Maps
          </span>
        </div>
        <h2 style={{
          fontFamily: 'DM Serif Display, serif',
          fontSize: 'clamp(1.6rem, 2.8vw, 2.5rem)',
          color: 'white', fontWeight: 400, margin: 0, lineHeight: 1.1,
        }}>
          {showContrast
            ? <>Cuando el servicio <span style={{ color: '#45C5BE' }}>sí hace la diferencia</span></>
            : <>Lo que los pacientes dicen <span style={{ color: '#e53e3e' }}>cuando algo falla</span></>
          }
        </h2>
        <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.38)', marginTop: '0.25rem' }}>
          {showContrast
            ? 'Las dos realidades coexisten. La diferencia la hace la persona, no el edificio.'
            : 'Lee cada reseña · identifica qué falla específica de servicio la originó · haz clic para el diagnóstico'
          }
        </p>
      </motion.div>

      <AnimatePresence mode="wait">
        {!showContrast ? (
          /* ── RESEÑAS NEGATIVAS ── */
          <motion.div
            key="negative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              gap: '0.75rem', width: '100%', maxWidth: '960px',
            }}
          >
            {negativeReviews.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.1 }}
                onClick={() => toggleReveal(i)}
                style={{
                  background: revealed[i] ? 'rgba(229,62,62,0.07)' : 'rgba(255,255,255,0.04)',
                  border: `1px solid ${revealed[i] ? 'rgba(229,62,62,0.28)' : 'rgba(255,255,255,0.09)'}`,
                  borderRadius: '14px',
                  padding: '0.95rem 1.1rem',
                  cursor: 'pointer',
                  transition: 'background 0.25s, border 0.25s',
                  backdropFilter: 'blur(8px)',
                }}
              >
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{
                      width: '30px', height: '30px', borderRadius: '50%', flexShrink: 0,
                      background: r.avatarColor,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.65rem', fontWeight: 700, color: 'white',
                    }}>
                      {r.avatar}
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'rgba(255,255,255,0.85)' }}>{r.name}</div>
                      <div style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.3)' }}>{r.time}</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '3px' }}>
                    <Stars count={r.stars} />
                    <span style={{
                      fontSize: '0.6rem', fontWeight: 700,
                      background: `${r.tagColor}22`,
                      color: r.tagColor,
                      borderRadius: '4px', padding: '1px 6px',
                    }}>
                      {r.tag}
                    </span>
                  </div>
                </div>

                {/* Texto */}
                <p style={{
                  fontSize: '0.77rem',
                  color: 'rgba(255,255,255,0.62)',
                  lineHeight: 1.55, margin: 0, fontStyle: 'italic',
                }}>
                  "{r.text}"
                </p>

                {/* Diagnóstico */}
                <AnimatePresence>
                  {revealed[i] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      style={{ marginTop: '0.6rem', borderTop: '1px solid rgba(229,62,62,0.2)', paddingTop: '0.55rem' }}
                    >
                      <div style={{ fontSize: '0.6rem', fontWeight: 700, color: '#e53e3e', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '3px' }}>
                        Diagnóstico de servicio
                      </div>
                      <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.5, margin: 0 }}>
                        {r.diagnosis}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {!revealed[i] && (
                  <div style={{ marginTop: '0.4rem', fontSize: '0.62rem', color: 'rgba(255,255,255,0.2)', textAlign: 'right', fontStyle: 'italic' }}>
                    Toca para ver el diagnóstico →
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        ) : (
          /* ── RESEÑAS POSITIVAS ── */
          <motion.div
            key="positive"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1rem', width: '100%', maxWidth: '960px',
            }}
          >
            {positiveReviews.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12 }}
                style={{
                  background: 'rgba(69,197,190,0.07)',
                  border: '1.5px solid rgba(69,197,190,0.28)',
                  borderRadius: '14px',
                  padding: '1.1rem',
                  backdropFilter: 'blur(8px)',
                  display: 'flex', flexDirection: 'column', gap: '0.6rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{
                    width: '32px', height: '32px', borderRadius: '50%',
                    background: r.avatarColor, flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.68rem', fontWeight: 700, color: 'white',
                  }}>
                    {r.avatar}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'rgba(255,255,255,0.88)' }}>{r.name}</div>
                    <Stars count={r.stars} />
                  </div>
                </div>
                <span style={{
                  fontSize: '0.62rem', fontWeight: 700,
                  background: 'rgba(69,197,190,0.18)', color: '#45C5BE',
                  borderRadius: '4px', padding: '2px 8px', alignSelf: 'flex-start',
                }}>
                  {r.tag}
                </span>
                <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.55, margin: 0, fontStyle: 'italic', flex: 1 }}>
                  "{r.text}"
                </p>
              </motion.div>
            ))}

            {/* Cierre poderoso */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              style={{
                gridColumn: '1 / -1',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(69,197,190,0.18)',
                borderRadius: '14px',
                padding: '1rem 1.6rem',
                textAlign: 'center',
              }}
            >
              <p style={{
                fontFamily: 'DM Serif Display, serif',
                fontSize: 'clamp(1rem, 2vw, 1.35rem)',
                color: 'white', margin: '0 0 0.4rem', lineHeight: 1.4,
              }}>
                "La Dra. González, el Dr. Ramírez, la Enf. de pediatría...{' '}
                <span style={{ color: '#45C5BE' }}>tienen nombre propio en las reseñas buenas.</span>"
              </p>
              <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', margin: 0 }}>
                Pregunta de reflexión: ¿Qué quieres que escriban sobre ti?
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Research anchor */}
      <AnimatePresence>
        {!showContrast && (
          <motion.div
            key="research"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.7 }}
            style={{
              width: '100%', maxWidth: '960px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '12px',
              padding: '0.65rem 1.2rem',
              display: 'flex', gap: '1.5rem', alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <span style={{ fontSize: '0.6rem', fontWeight: 700, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.12em', flexShrink: 0 }}>
              La ciencia lo confirma
            </span>
            {[
              { stat: '96%', text: 'de las quejas: trato y comunicación', src: 'Advisory Board, 2016' },
              { stat: '70%', text: 'de incidentes graves: causa principal, comunicación deficiente', src: 'Joint Commission, 2024' },
              { stat: '8×', text: 'se multiplica el desprecio durante la consulta', src: 'Rodríguez Fuertes, 2018' },
            ].map((d, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                <span style={{ fontFamily: 'DM Serif Display, serif', fontSize: '1.1rem', color: '#e53e3e', lineHeight: 1 }}>{d.stat}</span>
                <span style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.42)', lineHeight: 1.35 }}>
                  {d.text}
                  <span style={{ display: 'block', fontSize: '0.58rem', color: 'rgba(255,255,255,0.22)', fontStyle: 'italic' }}>{d.src}</span>
                </span>
                {i < 2 && <span style={{ marginLeft: '0.5rem', color: 'rgba(255,255,255,0.1)' }}>·</span>}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          width: '100%', maxWidth: '960px', gap: '1.5rem',
        }}
      >
        <p style={{
          fontSize: '0.78rem', fontStyle: 'italic', margin: 0,
          color: showContrast ? 'rgba(69,197,190,0.6)' : 'rgba(229,62,62,0.7)',
        }}>
          {showContrast
            ? 'Los pacientes recuerdan nombres. Lo que haces hoy se convierte en lo que alguien cuenta mañana.'
            : 'El patrón es claro: comunicación, trato, empatía. No es tecnología — es decisión.'}
        </p>
        <button
          onClick={() => setShowContrast(s => !s)}
          style={{
            background: showContrast ? 'rgba(229,62,62,0.12)' : 'rgba(69,197,190,0.12)',
            border: `1.5px solid ${showContrast ? 'rgba(229,62,62,0.35)' : 'rgba(69,197,190,0.35)'}`,
            borderRadius: '10px',
            padding: '0.5rem 1.1rem',
            color: showContrast ? '#e53e3e' : '#45C5BE',
            fontSize: '0.75rem', fontWeight: 700,
            cursor: 'pointer', flexShrink: 0,
            letterSpacing: '0.04em', transition: 'all 0.25s',
          }}
        >
          {showContrast ? '← Ver lo que falla' : 'Ver lo que sí funciona →'}
        </button>
      </motion.div>
    </div>
  )
}
