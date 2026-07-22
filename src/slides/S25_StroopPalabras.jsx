import { motion } from 'framer-motion'

// Colores básicos y saturados — fáciles de detectar en pantalla blanca
// word = texto visible, ink = color de la tinta (nunca el color que dice)
const words = [
  { word: 'VERDE',    ink: '#dc2626'  }, // rojo
  { word: 'ROJO',     ink: '#1d4ed8'  }, // azul
  { word: 'AZUL',     ink: '#16a34a'  }, // verde
  { word: 'AMARILLO', ink: '#7c3aed'  }, // morado
  { word: 'MORADO',   ink: '#ea580c'  }, // naranja
  { word: 'NARANJA',  ink: '#dc2626'  }, // rojo
  { word: 'ROSA',     ink: '#1d4ed8'  }, // azul
  { word: 'NEGRO',    ink: '#16a34a'  }, // verde
  { word: 'CAFÉ',     ink: '#7c3aed'  }, // morado
  { word: 'GRIS',     ink: '#ea580c'  }, // naranja
]

function WordSlide({ word, ink, index }) {
  return (
    <div style={{
      width: '100vw', height: '100vh',
      background: 'white',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      position: 'relative',
    }}>
      {/* Counter */}
      <div style={{
        position: 'absolute', top: '1.5rem', right: '2rem',
        fontSize: '0.8rem', fontWeight: 700,
        color: 'rgba(0,0,0,0.15)', letterSpacing: '0.08em',
      }}>
        {index} / {words.length}
      </div>

      {/* The word — fills the screen */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2, type: 'spring', stiffness: 320, damping: 24 }}
        style={{
          fontFamily: 'DM Serif Display, serif',
          fontSize: 'clamp(5rem, 16vw, 14rem)',
          color: ink,
          lineHeight: 1,
          userSelect: 'none',
          letterSpacing: '-0.02em',
        }}
      >
        {word}
      </motion.div>

      {/* Instruction reminder — very subtle */}
      <div style={{
        position: 'absolute', bottom: '1.8rem',
        fontSize: '0.75rem', fontWeight: 600,
        color: 'rgba(0,0,0,0.18)', letterSpacing: '0.1em', textTransform: 'uppercase',
      }}>
        Di el color de la tinta
      </div>
    </div>
  )
}

export const StroopP1  = () => <WordSlide {...words[0]} index={1}  />
export const StroopP2  = () => <WordSlide {...words[1]} index={2}  />
export const StroopP3  = () => <WordSlide {...words[2]} index={3}  />
export const StroopP4  = () => <WordSlide {...words[3]} index={4}  />
export const StroopP5  = () => <WordSlide {...words[4]} index={5}  />
export const StroopP6  = () => <WordSlide {...words[5]} index={6}  />
export const StroopP7  = () => <WordSlide {...words[6]} index={7}  />
export const StroopP8  = () => <WordSlide {...words[7]} index={8}  />
export const StroopP9  = () => <WordSlide {...words[8]} index={9}  />
export const StroopP10 = () => <WordSlide {...words[9]} index={10} />
