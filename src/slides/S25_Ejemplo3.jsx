import { motion } from 'framer-motion'

export default function S25_Ejemplo3() {
  return (
    <div style={{ width:'100vw', height:'100vh', display:'grid', gridTemplateColumns:'1fr 1fr', overflow:'hidden' }}>
      <div style={{ background:'#EEF2F7', display:'flex', flexDirection:'column', justifyContent:'center', padding:'60px 64px', gap:'1.4rem', position:'relative' }}>
        <div className="corner-accent" style={{ opacity:0.5 }} />
        <motion.p initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} transition={{duration:0.6}} style={{ fontSize:'clamp(0.9rem,1.4vw,1.05rem)', color:'#4A5568', lineHeight:1.8 }}>
          Cuando una persona expresa inconformidad o desacuerdo, es mejor abrir un espacio de diálogo antes que ignorar su comentario.
        </motion.p>
        <motion.p initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} transition={{duration:0.6,delay:0.2}} style={{ fontSize:'clamp(0.9rem,1.4vw,1.05rem)', color:'#4A5568', lineHeight:1.8 }}>
          En lugar de restarle importancia o evadirlo, podemos preguntar:
        </motion.p>
        <motion.p initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} transition={{duration:0.6,delay:0.35}} style={{ fontSize:'clamp(0.9rem,1.4vw,1.05rem)', color:'#45C5BE', fontWeight:700, lineHeight:1.6 }}>
          "¿Qué propones?" o "¿Qué alternativa considera adecuada?"
        </motion.p>
      </div>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.9,delay:0.1}} style={{ position:'relative', overflow:'hidden' }}>
        <img src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&auto=format&fit=crop" alt="Diálogo" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(90deg, rgba(238,242,247,0.3) 0%, transparent 30%)' }} />
      </motion.div>
    </div>
  )
}
