import { motion } from 'framer-motion'
const fade = (d=0) => ({ initial:{opacity:0,y:16}, animate:{opacity:1,y:0}, transition:{duration:0.6,delay:d} })

const tecnicas = [
  {
    title: 'Tensión flotante',
    body: 'Cuando el otro dice algo que molesta o con lo que no estamos de acuerdo, en lugar de pelear, dejamos pasar esa parte y atendemos el resto del mensaje.',
    sinEj: '"Ya sé que usted siempre cree que todo es urgente — pero ahora mismo no puedo atenderle."',
    conEj: '"Entiendo que necesita atención. Déjeme ver en qué le puedo ayudar ahora mismo."',
  },
  {
    title: 'Hablar desde el yo',
    body: 'Enunciar las cosas desde la propia percepción, no como verdades absolutas. Reduce la defensividad del otro y abre el diálogo.',
    sinEj: '"Usted siempre llega tarde y desorganiza todo."',
    conEj: '"Cuando llegamos tarde al cambio de turno, yo siento que el paciente queda desatendido. ¿Qué pasó hoy?"',
  },
]

export default function S18_TensionHablar() {
  return (
    <div className="slide" style={{ padding:'48px 80px' }}>
      <div className="corner-accent" />
      <div style={{ width:'100%', maxWidth:'960px', display:'flex', flexDirection:'column', gap:'1.6rem' }}>
        <motion.div {...fade(0.1)} style={{ display:'flex', flexDirection:'column', gap:'0.4rem' }}>
          <h2 className="slide-title" style={{ textAlign:'center' }}>Más técnicas</h2>
          <div style={{ width:'80px', height:'4px', background:'linear-gradient(90deg,#45C5BE,#2BA8A2)', borderRadius:'2px', alignSelf:'center' }} />
        </motion.div>

        <div style={{ display:'flex', flexDirection:'column', gap:'1.1rem' }}>
          {tecnicas.map((t, i) => (
            <motion.div key={i} {...fade(0.25 + i * 0.2)} style={{
              background:'white',
              borderRadius:'16px',
              border:'1px solid rgba(12,45,78,0.08)',
              boxShadow:'0 1px 6px rgba(12,45,78,0.05)',
              overflow:'hidden',
            }}>
              {/* Header */}
              <div style={{ padding:'0.9rem 1.4rem 0.7rem', borderBottom:'1px solid rgba(12,45,78,0.06)' }}>
                <div style={{ display:'flex', alignItems:'baseline', gap:'0.8rem' }}>
                  <span style={{ fontSize:'0.6rem', fontWeight:800, color:'#45C5BE', letterSpacing:'0.1em', textTransform:'uppercase', flexShrink:0 }}>0{i+4}</span>
                  <span style={{ fontSize:'0.95rem', fontWeight:700, color:'#0C2D4E' }}>{t.title}</span>
                </div>
                <p style={{ fontSize:'0.82rem', color:'#718096', lineHeight:1.6, margin:'0.3rem 0 0 1.4rem' }}>{t.body}</p>
              </div>
              {/* Example */}
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
