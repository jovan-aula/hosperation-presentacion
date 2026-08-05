import { motion } from 'framer-motion'

export default function S07_Definicion() {
  return (
    <div style={{ width:'100vw', height:'100vh', display:'grid', gridTemplateColumns:'1fr 1fr', overflow:'hidden' }}>
      {/* Left */}
      <div style={{ background:'#EEF2F7', display:'flex', flexDirection:'column', justifyContent:'center', padding:'60px 64px', gap:'1.4rem', position:'relative' }}>
        <div className="corner-accent" style={{ opacity:0.6 }} />
        <motion.h2 initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} transition={{duration:0.6}} style={{ fontFamily:'DM Serif Display,serif', fontSize:'clamp(2rem,3.5vw,2.8rem)', color:'#0C2D4E', lineHeight:1.15, margin:0 }}>
          Comunicación<br />asertiva
        </motion.h2>
        <motion.p initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} transition={{duration:0.6,delay:0.2}} style={{ fontSize:'clamp(0.9rem,1.4vw,1.05rem)', color:'#4A5568', lineHeight:1.75 }}>
          Es comunicar un mensaje de forma clara, directa y respetuosa. Permite expresar información, límites u orientaciones sin agredir, imponer o evadir responsabilidades.
        </motion.p>
        <motion.p initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} transition={{duration:0.6,delay:0.35}} style={{ fontSize:'clamp(0.95rem,1.4vw,1.1rem)', color:'#45C5BE', fontWeight:700, lineHeight:1.5 }}>
          Asertividad es decir lo necesario de la mejor manera posible.
        </motion.p>
      </div>
      {/* Right: photo */}
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.9,delay:0.1}} style={{ position:'relative', overflow:'hidden' }}>
        <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&auto=format&fit=crop" alt="Comunicación asertiva" style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center' }} />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(90deg, rgba(238,242,247,0.3) 0%, transparent 30%)' }} />
      </motion.div>
    </div>
  )
}
