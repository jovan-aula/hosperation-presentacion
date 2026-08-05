import { motion } from 'framer-motion'

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay: d },
})

const abc = [
  {
    letter: 'A',
    word: 'Afirma',
    desc: 'Tu posición con calma — sin atacar al otro ni ceder lo que es válido.',
  },
  {
    letter: 'B',
    word: 'Breve',
    desc: 'Un mensaje bien dicho ocupa menos palabras. Evita justificarte de más.',
  },
  {
    letter: 'C',
    word: 'Confirma',
    desc: 'Verifica que el otro entendió. El ciclo no cierra hasta que hay comprensión mutua.',
  },
]

const frases = [
  {
    label: 'Para reconocer',
    color: '#45C5BE',
    items: [
      'Entiendo cómo se siente...',
      'Comprendo que esto es difícil para usted.',
      'Tiene razón en estar preocupado.',
    ],
  },
  {
    label: 'Para aclarar',
    color: '#6B8FA8',
    items: [
      'Lo que puedo hacer ahora mismo es...',
      'La situación es la siguiente...',
      'Permítame explicarle...',
    ],
  },
  {
    label: 'Para redirigir',
    color: '#2BA8A2',
    items: [
      '¿Le parece bien si...?',
      'Le propongo que...',
      'Lo que sí está en mis manos es...',
    ],
  },
  {
    label: 'Para poner límites',
    color: '#0C2D4E',
    items: [
      'En este momento no es posible, pero...',
      'Eso no depende de mí. Lo que puedo hacer es...',
      'Necesito pedirle que...',
    ],
  },
]

export default function S32_ABCFrases() {
  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', overflow: 'hidden' }}>

      {/* LEFT — ABC */}
      <div style={{
        width: '40%', height: '100%',
        background: 'linear-gradient(160deg,#081e35 0%,#0C2D4E 100%)',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center', padding: '56px 52px',
        position: 'relative',
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(69,197,190,0.05) 1px, transparent 1px)', backgroundSize: '28px 28px', pointerEvents: 'none' }} />

        <motion.div {...fade(0.1)} style={{
          display: 'inline-flex', alignSelf: 'flex-start',
          background: 'rgba(69,197,190,0.15)',
          border: '1px solid rgba(69,197,190,0.35)',
          borderRadius: '100px',
          padding: '0.3rem 1rem',
          fontSize: '0.62rem', fontWeight: 800,
          color: '#45C5BE', letterSpacing: '0.1em', textTransform: 'uppercase',
          marginBottom: '1.2rem',
        }}>
          Los fundamentos
        </motion.div>

        <motion.h2 {...fade(0.2)} style={{
          fontFamily: 'DM Serif Display, serif',
          fontSize: 'clamp(2rem,3.5vw,2.8rem)',
          fontWeight: 400, color: 'white',
          lineHeight: 1.15, marginBottom: '0.5rem',
        }}>
          El ABC de la<br />asertividad
        </motion.h2>

        <motion.div {...fade(0.25)} style={{ width: '40px', height: '3px', background: '#45C5BE', borderRadius: '2px', marginBottom: '1.6rem' }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
          {abc.map((item, i) => (
            <motion.div key={i} {...fade(0.3 + i * 0.15)} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{
                flexShrink: 0,
                width: '40px', height: '40px',
                borderRadius: '50%',
                background: 'rgba(69,197,190,0.15)',
                border: '1.5px solid rgba(69,197,190,0.4)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'DM Serif Display, serif',
                fontSize: '1.2rem', color: '#45C5BE',
              }}>
                {item.letter}
              </div>
              <div>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'white', marginBottom: '0.2rem' }}>
                  {item.word}
                </div>
                <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* RIGHT — Banco de frases */}
      <div style={{
        width: '60%', height: '100%',
        background: '#F7FAFC',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center', padding: '56px 52px',
        gap: '1rem',
      }}>
        <motion.div {...fade(0.1)} style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', marginBottom: '0.4rem' }}>
          <div style={{
            display: 'inline-flex', alignSelf: 'flex-start',
            background: 'rgba(12,45,78,0.08)',
            borderRadius: '100px', padding: '0.25rem 0.9rem',
            fontSize: '0.62rem', fontWeight: 800,
            color: '#0C2D4E', letterSpacing: '0.1em', textTransform: 'uppercase',
          }}>
            Referencia rápida
          </div>
          <h3 style={{
            fontFamily: 'DM Serif Display, serif',
            fontSize: 'clamp(1.3rem,2vw,1.7rem)',
            fontWeight: 400, color: '#0C2D4E',
            lineHeight: 1.2, margin: 0,
          }}>
            Banco de frases asertivas
          </h3>
          <p style={{ fontSize: '0.78rem', color: '#718096', margin: 0 }}>
            Úsalas como punto de partida — adáptalas a tu voz y contexto.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
          {frases.map((grupo, i) => (
            <motion.div key={i} {...fade(0.25 + i * 0.12)} style={{
              background: 'white',
              borderRadius: '14px',
              border: '1px solid rgba(12,45,78,0.08)',
              boxShadow: '0 1px 6px rgba(12,45,78,0.04)',
              overflow: 'hidden',
            }}>
              <div style={{
                padding: '0.55rem 1rem',
                borderBottom: `3px solid ${grupo.color}`,
                background: `${grupo.color}12`,
              }}>
                <div style={{ fontSize: '0.6rem', fontWeight: 800, color: grupo.color, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  {grupo.label}
                </div>
              </div>
              <div style={{ padding: '0.7rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                {grupo.items.map((frase, j) => (
                  <div key={j} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: grupo.color, flexShrink: 0, marginTop: '6px' }} />
                    <p style={{ fontSize: '0.78rem', color: '#4A5568', lineHeight: 1.55, margin: 0, fontStyle: 'italic' }}>
                      "{frase}"
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  )
}
