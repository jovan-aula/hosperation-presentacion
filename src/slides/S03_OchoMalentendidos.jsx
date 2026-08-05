import { motion } from 'framer-motion'

const labels = [
  { x: 130, y: 250, text: 'Entre lo\nque pienso', anchor: 'end' },
  { x: 185, y: 155, text: 'Lo que\ndeseo decir', anchor: 'end' },
  { x: 280, y: 105, text: 'Lo que creo\nque digo', anchor: 'middle' },
  { x: 390, y: 80, text: 'Lo que en\nrealidad digo', anchor: 'middle' },
  { x: 510, y: 80, text: 'Lo que tú\ndeseas escuchar', anchor: 'middle' },
  { x: 630, y: 105, text: 'Lo que realmente\nescuchas', anchor: 'middle' },
  { x: 740, y: 155, text: 'Lo que\ncrees que comprendes', anchor: 'start' },
  { x: 820, y: 250, text: 'Lo que\nrealmente comprendes', anchor: 'start' },
]

export default function S03_OchoMalentendidos() {
  return (
    <div className="slide" style={{ padding:'40px 60px' }}>
      <div className="corner-accent" />

      <motion.div initial={{opacity:0,y:-16}} animate={{opacity:1,y:0}} transition={{duration:0.6}} style={{ textAlign:'center', marginBottom:'0.6rem' }}>
        <h2 className="slide-title" style={{ fontSize:'clamp(1.5rem,2.6vw,2.2rem)', marginBottom:'0.5rem' }}>
          Existen <span className="teal-accent">8 posibilidades</span> de que se produzca un malentendido
        </h2>
        <p style={{ fontSize:'clamp(0.85rem,1.3vw,1rem)', color:'#718096', lineHeight:1.6 }}>
          Entre lo que el médico o el personal explica y lo que el paciente comprende,<br />
          el mensaje pasa por 8 filtros distintos — cualquiera puede distorsionarlo.
        </p>
      </motion.div>

      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3,duration:0.8}} style={{ width:'100%', maxWidth:'900px' }}>
        <svg viewBox="0 0 960 420" style={{ width:'100%', height:'auto' }}>
          {/* Ellipses — 8 concentric, gradient from red-ish left to blue-ish right */}
          {[1,2,3,4,5,6,7,8].map((n,i) => {
            const rx = 60 + i*50
            const ry = 30 + i*22
            const cx = 480
            const cy = 310
            const opacity = 0.12 + i*0.04
            return (
              <ellipse key={n} cx={cx} cy={cy} rx={rx} ry={ry}
                fill="none" stroke={i < 4 ? '#d97070' : '#6090d0'} strokeWidth="1.2" opacity={opacity + 0.3}
              />
            )
          })}
          {/* Horizontal axis line */}
          <line x1="100" y1="310" x2="860" y2="310" stroke="#0C2D4E" strokeWidth="1" opacity="0.2" />
          {/* Numbered dots */}
          {[1,2,3,4,5,6,7,8].map((n,i) => {
            const x = 160 + i * 92
            return (
              <g key={n}>
                <circle cx={x} cy={310} r={18} fill="#0C2D4E" />
                <text x={x} y={315} textAnchor="middle" fill="white" fontSize="13" fontWeight="700">{n}</text>
              </g>
            )
          })}
          {/* Labels with dashed lines */}
          {labels.map((l, i) => {
            const dotX = 160 + i * 92
            const lines = l.text.split('\n')
            return (
              <g key={i}>
                <line x1={dotX} y1={292} x2={l.x} y2={l.y + (lines.length-1)*14 + 6} stroke="#0C2D4E" strokeWidth="0.8" strokeDasharray="3,3" opacity="0.4" />
                {lines.map((line, li) => (
                  <text key={li} x={l.x} y={l.y + li*14} textAnchor={l.anchor} fill="#2D3748" fontSize="11" fontFamily="DM Sans, sans-serif">{line}</text>
                ))}
              </g>
            )
          })}
        </svg>
      </motion.div>

      <motion.div
        initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay:0.8, duration:0.6}}
        style={{
          display:'grid', gridTemplateColumns:'1fr auto 1fr',
          gap:'0.8rem', alignItems:'center',
          width:'100%', maxWidth:'860px',
        }}
      >
        {/* Origin */}
        <div style={{
          background:'#f5f8fc',
          border:'1px solid rgba(12,45,78,0.12)',
          borderRadius:'12px',
          padding:'0.8rem 1.2rem',
        }}>
          <div style={{ fontSize:'0.6rem', fontWeight:800, color:'#6B8FA8', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:'5px' }}>
            El médico dice
          </div>
          <p style={{ fontSize:'clamp(0.82rem,1.2vw,0.9rem)', color:'#0C2D4E', margin:0, lineHeight:1.55, fontStyle:'italic' }}>
            "Que descanse y evite el estrés."
          </p>
        </div>

        {/* Arrow + filters */}
        <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'3px', flexShrink:0 }}>
          <div style={{ fontSize:'0.58rem', fontWeight:700, color:'#45C5BE', letterSpacing:'0.06em', textTransform:'uppercase', textAlign:'center', lineHeight:1.4 }}>
            8 filtros<br/>después
          </div>
          <div style={{ color:'#45C5BE', fontSize:'1.2rem', lineHeight:1 }}>→</div>
        </div>

        {/* Result */}
        <div style={{
          background:'#fff5f5',
          border:'1px solid rgba(229,62,62,0.2)',
          borderLeft:'3px solid #E53E3E',
          borderRadius:'0 12px 12px 0',
          padding:'0.8rem 1.2rem',
        }}>
          <div style={{ fontSize:'0.6rem', fontWeight:800, color:'#C53030', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:'5px' }}>
            La familia entiende
          </div>
          <p style={{ fontSize:'clamp(0.82rem,1.2vw,0.9rem)', color:'#2D3748', margin:0, lineHeight:1.55, fontStyle:'italic' }}>
            "Ya está bien — podemos organizarle una visita sorpresa."
          </p>
        </div>
      </motion.div>
    </div>
  )
}
