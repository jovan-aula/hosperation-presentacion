import { motion } from 'framer-motion'
const fade = (d=0) => ({ initial:{opacity:0,x:20}, animate:{opacity:1,x:0}, transition:{duration:0.6,delay:d} })

const items = ['Ser claro.','Ser conciso.','Ser concreto.','Ser correcto.','Ser coherente.','Ser completo.','Ser cortés.']

export default function S20_Recuerda() {
  return (
    <div style={{ width:'100vw', height:'100vh', display:'grid', gridTemplateColumns:'1fr 1.4fr', overflow:'hidden' }}>
      {/* Left */}
      <div style={{ background:'#EEF2F7', display:'flex', flexDirection:'column', justifyContent:'center', padding:'60px 64px', gap:'1.2rem', position:'relative' }}>
        <div className="corner-accent" style={{ opacity:0.5 }} />
        <motion.h2 initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} transition={{duration:0.6}} style={{ fontFamily:'DM Serif Display,serif', fontSize:'clamp(2.4rem,4.5vw,3.8rem)', color:'#0C2D4E', fontWeight:400, margin:0 }}>
          Recuerda
        </motion.h2>
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.6,delay:0.3}} className="teal-bar" />
      </div>
      {/* Right */}
      <div style={{ background:'white', display:'flex', flexDirection:'column', justifyContent:'center', padding:'60px 64px', gap:'0.8rem', position:'relative' }}>
        {items.map((item,i) => (
          <motion.div key={i} {...fade(0.2+i*0.08)} style={{ display:'flex', alignItems:'center', gap:'0.8rem', fontSize:'clamp(0.9rem,1.4vw,1.1rem)', color:'#4A5568', padding:'0.3rem 0' }}>
            <div style={{ width:'8px', height:'8px', borderRadius:'50%', background:'#45C5BE', flexShrink:0 }} />
            {item}
          </motion.div>
        ))}

      </div>
    </div>
  )
}
