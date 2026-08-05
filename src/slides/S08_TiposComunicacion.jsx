import { motion } from 'framer-motion'

const tipos = [
  { title:'Paraverbal', color:'#45C5BE', body:'Elementos entre lo verbal y lo no verbal: tono de voz, ritmo, pausas, silencios y forma de expresar el mensaje. Influyen en cómo la otra persona recibe e interpreta lo que decimos.' },
  { title:'No verbal', color:'#0C2D4E', body:'Elementos corporales que acompañan el mensaje: postura, mirada, gestos y expresión corporal. Ayudan a transmitir apertura, respeto e interés, evitando parecer arrogantes o distantes.' },
  { title:'Verbal', color:'#45C5BE', body:'Uso correcto y oportuno de las palabras con las que se transmite el mensaje. Debe ser claro, respetuoso y comprensible para la persona que nos escucha.' },
]

export default function S08_TiposComunicacion() {
  return (
    <div className="slide" style={{ padding:'50px 72px' }}>
      <div className="corner-accent" />
      <div style={{ display:'flex', alignItems:'center', gap:'4rem', width:'100%', maxWidth:'1000px' }}>
        {/* Center circle */}
        <motion.div initial={{opacity:0,scale:0.8}} animate={{opacity:1,scale:1}} transition={{duration:0.6}} style={{ flexShrink:0 }}>
          <div style={{ width:'160px', height:'160px', borderRadius:'50%', border:'4px solid #45C5BE', display:'flex', alignItems:'center', justifyContent:'center', textAlign:'center', background:'white', boxShadow:'0 4px 20px rgba(69,197,190,0.2)' }}>
            <span style={{ fontFamily:'DM Serif Display,serif', fontSize:'1rem', color:'#0C2D4E', fontWeight:400, lineHeight:1.3 }}>Tipos de<br />comunicación<br />asertiva</span>
          </div>
        </motion.div>
        {/* Cards */}
        <div style={{ display:'flex', flexDirection:'column', gap:'1.2rem', flex:1 }}>
          {tipos.map((t,i) => (
            <motion.div key={i} initial={{opacity:0,x:30}} animate={{opacity:1,x:0}} transition={{duration:0.5,delay:0.2+i*0.15}} style={{ background:'white', borderRadius:'14px', border:`1.5px solid ${t.color === '#45C5BE' ? 'rgba(69,197,190,0.35)' : 'rgba(12,45,78,0.2)'}`, padding:'1.1rem 1.4rem', boxShadow:'0 2px 8px rgba(12,45,78,0.08)' }}>
              <div style={{ fontSize:'0.95rem', fontWeight:700, color:t.color, marginBottom:'0.4rem' }}>{t.title}</div>
              <p style={{ fontSize:'clamp(0.78rem,1.1vw,0.9rem)', color:'#4A5568', lineHeight:1.65, margin:0, fontStyle:'italic' }}>{t.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
