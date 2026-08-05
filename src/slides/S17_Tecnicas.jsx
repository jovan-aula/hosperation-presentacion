import { motion } from 'framer-motion'
const fade = (d=0) => ({ initial:{opacity:0,y:16}, animate:{opacity:1,y:0}, transition:{duration:0.6,delay:d} })

const tecnicas = [
  {
    title: 'El disco rayado',
    body: 'Repetir, en el mismo tono y cadencia, un mensaje que no fue recibido idealmente, sin propiciar confrontaciones.',
    sinEj: '"Ya le dije que tiene que esperar."',
    conEj: '"Entiendo su preocupación. En este momento no hay camas disponibles. En cuanto haya lugar, le avisamos de inmediato."',
  },
  {
    title: 'El banco de niebla',
    body: 'Dar la razón al otro de manera amable pero sin ceder en lo esencial, evitando que la conversación escale.',
    sinEj: '"No, usted está equivocado, así son las reglas."',
    conEj: '"Tiene razón en que la espera es larga. Comprendo que es difícil. El protocolo nos pide seguir este orden para garantizar su seguridad."',
  },
  {
    title: 'Pregunta asertiva',
    body: 'En lugar de hacer un reproche, formular una pregunta que orienta hacia la solución o el entendimiento mutuo.',
    sinEj: '"¿Por qué no siguió las indicaciones?"',
    conEj: '"¿Qué parte de las indicaciones no quedó clara? Así me aseguro de explicarle mejor."',
  },
]

export default function S17_Tecnicas() {
  return (
    <div className="slide" style={{ padding:'48px 80px' }}>
      <div className="corner-accent" />
      <div style={{ width:'100%', maxWidth:'960px', display:'flex', flexDirection:'column', gap:'1.6rem' }}>
        <motion.div {...fade(0.1)} style={{ display:'flex', flexDirection:'column', gap:'0.4rem' }}>
          <h2 className="slide-title" style={{ textAlign:'center' }}>Técnicas asertivas</h2>
          <div style={{ width:'80px', height:'4px', background:'linear-gradient(90deg,#45C5BE,#2BA8A2)', borderRadius:'2px', alignSelf:'center' }} />
        </motion.div>

        <div style={{ display:'flex', flexDirection:'column', gap:'1.1rem' }}>
          {tecnicas.map((t, i) => (
            <motion.div key={i} {...fade(0.25 + i * 0.15)} style={{
              background:'white',
              borderRadius:'16px',
              border:'1px solid rgba(12,45,78,0.08)',
              boxShadow:'0 1px 6px rgba(12,45,78,0.05)',
              overflow:'hidden',
            }}>
              {/* Header row */}
              <div style={{ padding:'0.9rem 1.4rem 0.7rem', borderBottom:'1px solid rgba(12,45,78,0.06)' }}>
                <div style={{ display:'flex', alignItems:'baseline', gap:'0.8rem' }}>
                  <span style={{ fontSize:'0.6rem', fontWeight:800, color:'#45C5BE', letterSpacing:'0.1em', textTransform:'uppercase', flexShrink:0 }}>0{i+1}</span>
                  <span style={{ fontSize:'0.95rem', fontWeight:700, color:'#0C2D4E' }}>{t.title}</span>
                </div>
                <p style={{ fontSize:'0.82rem', color:'#718096', lineHeight:1.6, margin:'0.3rem 0 0 1.4rem' }}>{t.body}</p>
              </div>
              {/* Example row */}
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:0 }}>
                <div style={{ padding:'0.7rem 1.2rem 0.7rem 1.4rem', borderRight:'1px solid rgba(12,45,78,0.06)' }}>
                  <div style={{ fontSize:'0.58rem', fontWeight:700, color:'#e87c6a', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:'0.3rem' }}>Sin asertividad</div>
                  <p style={{ fontSize:'0.8rem', color:'#718096', lineHeight:1.55, margin:0, fontStyle:'italic' }}>{t.sinEj}</p>
                </div>
                <div style={{ padding:'0.7rem 1.4rem 0.7rem 1.2rem' }}>
                  <div style={{ fontSize:'0.58rem', fontWeight:700, color:'#45C5BE', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:'0.3rem' }}>Con asertividad</div>
                  <p style={{ fontSize:'0.8rem', color:'#4A5568', lineHeight:1.55, margin:0, fontStyle:'italic' }}>{t.conEj}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
