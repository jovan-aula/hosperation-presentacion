import { motion } from 'framer-motion'

export default function S15_CapacitacionContinua() {
  return (
    <div style={{ width:'100vw', height:'100vh', display:'grid', gridTemplateColumns:'1fr 1fr', overflow:'hidden' }}>
      <div style={{ background:'#EEF2F7', display:'flex', flexDirection:'column', justifyContent:'center', padding:'60px 64px', gap:'1.4rem', position:'relative' }}>
        <div className="corner-accent" style={{ opacity:0.5 }} />
        <motion.h2 initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} transition={{duration:0.6}} style={{ fontFamily:'DM Serif Display,serif', fontSize:'clamp(1.8rem,3.2vw,2.8rem)', color:'#45C5BE', lineHeight:1.15, margin:0 }}>
          Capacitación<br />continua
        </motion.h2>
        <motion.p initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} transition={{duration:0.6,delay:0.2}} style={{ fontSize:'clamp(0.9rem,1.4vw,1.05rem)', color:'#4A5568', lineHeight:1.8 }}>
          La capacitación continua en técnicas de comunicación y en aspectos culturales es esencial para mantener altos estándares de servicio en un entorno tan diverso como el turismo médico.
        </motion.p>
      </div>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.9,delay:0.1}} style={{ position:'relative', overflow:'hidden' }}>
        <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop" alt="Capacitación" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(90deg, rgba(238,242,247,0.3) 0%, transparent 30%)' }} />
      </motion.div>
    </div>
  )
}
