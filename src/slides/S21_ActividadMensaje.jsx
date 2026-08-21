import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const frases = [
  {
    reactiva: '"Eso no se puede."',
    asertiva: '"Entiendo lo que necesita. Lo que sí puedo hacer es orientarle para que lo resuelva por la vía correcta."',
    esEjemplo: true,
  },
  {
    reactiva: '"Esa no es mi área."',
    asertiva: '"Comprendo. Esta situación la atiende otro departamento, pero con gusto le indico con quién puede hablar."',
    esEjemplo: true,
  },
  {
    reactiva: '"Tiene que esperar."',
    asertiva: null,
    esEjemplo: false,
  },
  {
    reactiva: '"No puedo hacer nada."',
    asertiva: null,
    esEjemplo: false,
  },
  {
    reactiva: '"Tiene que calmarse."',
    asertiva: null,
    esEjemplo: false,
  },
]

export default function S21_ActividadMensaje() {
  const [index, setIndex] = useState(0)
  const [revealed, setRevealed] = useState(false)

  const frase = frases[index]
  const total = frases.length

  function siguiente() {
    if (index < total - 1) { setIndex(index + 1); setRevealed(false) }
  }
  function anterior() {
    if (index > 0) { setIndex(index - 1); setRevealed(false) }
  }

  return (
    <div style={{
      width: '100vw', height: '100vh',
      background: 'linear-gradient(160deg, #081e35 0%, #0C2D4E 100%)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '60px 80px',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(69,197,190,0.05) 1px, transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', maxWidth: '800px', width: '100%', display: 'flex', flexDirection: 'column', gap: '2rem' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flex: 'column', gap: '0.5rem' }}>
            <div style={{ background: 'rgba(69,197,190,0.12)', border: '1px solid rgba(69,197,190,0.3)', borderRadius: '100px', padding: '0.3rem 1.2rem', fontSize: '0.68rem', fontWeight: 700, color: '#45C5BE', letterSpacing: '0.12em', textTransform: 'uppercase', width: 'fit-content' }}>
              {frase.esEjemplo ? 'Ejemplo' : 'Turno del grupo'}
            </div>
          </div>
          <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', fontWeight: 300, letterSpacing: '0.05em' }}>
            {index + 1} / {total}
          </div>
        </div>

        {/* Progress dots */}
        <div style={{ display: 'flex', gap: '8px' }}>
          {frases.map((f, i) => (
            <div key={i} style={{
              height: '3px', flex: 1, borderRadius: '2px',
              background: i <= index ? '#45C5BE' : 'rgba(255,255,255,0.12)',
              transition: 'background 0.3s',
            }} />
          ))}
        </div>

        {/* Frase reactiva */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <div>
              <div style={{ fontSize: '0.6rem', fontWeight: 700, color: '#e87c6a', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                Frase reactiva
              </div>
              <div style={{
                background: 'rgba(232,124,106,0.08)',
                border: '1.5px solid rgba(232,124,106,0.25)',
                borderRadius: '14px',
                padding: '1.4rem 1.8rem',
              }}>
                <p style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: 'rgba(255,255,255,0.9)', fontWeight: 400, margin: 0, lineHeight: 1.3 }}>
                  {frase.reactiva}
                </p>
              </div>
            </div>

            {/* Respuesta asertiva o prompt */}
            {frase.esEjemplo ? (
              <AnimatePresence>
                {!revealed ? (
                  <motion.button
                    key="btn-reveal"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    onClick={() => setRevealed(true)}
                    style={{
                      background: '#45C5BE', color: '#0C2D4E',
                      border: 'none', borderRadius: '100px',
                      padding: '0.75rem 2rem',
                      fontSize: '0.85rem', fontWeight: 800,
                      letterSpacing: '0.06em', textTransform: 'uppercase',
                      cursor: 'pointer', alignSelf: 'flex-start',
                    }}
                  >
                    Ver respuesta asertiva
                  </motion.button>
                ) : (
                  <motion.div
                    key="respuesta"
                    initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div style={{ fontSize: '0.6rem', fontWeight: 700, color: '#45C5BE', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                      Respuesta asertiva
                    </div>
                    <div style={{
                      background: 'rgba(69,197,190,0.1)',
                      border: '1.5px solid rgba(69,197,190,0.3)',
                      borderRadius: '14px',
                      padding: '1.2rem 1.6rem',
                    }}>
                      <p style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)', color: 'rgba(255,255,255,0.85)', margin: 0, lineHeight: 1.65, fontStyle: 'italic' }}>
                        {frase.asertiva}
                      </p>
                    </div>
                    <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', marginTop: '0.6rem', fontStyle: 'italic' }}>
                      Estructura: Entiendo + explico + oriento
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                style={{
                  background: 'rgba(167,105,250,0.08)',
                  border: '1.5px solid rgba(167,105,250,0.25)',
                  borderRadius: '14px',
                  padding: '1.1rem 1.6rem',
                  display: 'flex', alignItems: 'center', gap: '12px',
                }}
              >
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#a769fa', flexShrink: 0, animation: 'pulse2 1.4s ease-in-out infinite' }} />
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.5 }}>
                  ¿Cómo lo dirían de forma asertiva? — Entiendo + explico + oriento
                </p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navegación */}
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
          {index > 0 && (
            <button onClick={anterior} style={{
              background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '100px', padding: '0.6rem 1.6rem',
              color: 'rgba(255,255,255,0.45)', fontSize: '0.8rem', fontWeight: 600,
              cursor: 'pointer', letterSpacing: '0.04em',
            }}>
              Anterior
            </button>
          )}
          {index < total - 1 && (
            <button onClick={siguiente} style={{
              background: 'rgba(69,197,190,0.15)', border: '1.5px solid rgba(69,197,190,0.35)',
              borderRadius: '100px', padding: '0.6rem 1.6rem',
              color: '#45C5BE', fontSize: '0.8rem', fontWeight: 700,
              cursor: 'pointer', letterSpacing: '0.04em',
            }}>
              Siguiente frase
            </button>
          )}
        </div>

      </div>
      <style>{`@keyframes pulse2 { 0%,100%{opacity:0.4;transform:scale(0.8)} 50%{opacity:1;transform:scale(1.2)} }`}</style>
    </div>
  )
}
