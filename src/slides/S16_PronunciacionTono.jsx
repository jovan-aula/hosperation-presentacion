import { motion } from 'framer-motion'

export default function S16_PronunciacionTono() {
  return (
    <div style={{ width:'100vw', height:'100vh', display:'grid', gridTemplateColumns:'1fr 1fr', overflow:'hidden' }}>
      <div style={{ background:'#EEF2F7', display:'flex', flexDirection:'column', justifyContent:'center', padding:'60px 64px', gap:'1.4rem', position:'relative' }}>
        <div className="corner-accent" style={{ opacity:0.5 }} />
        <motion.h2 initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} transition={{duration:0.6}} style={{ fontFamily:'DM Serif Display,serif', fontSize:'clamp(1.8rem,3.2vw,2.8rem)', color:'#45C5BE', lineHeight:1.15, margin:0 }}>
          Pronunciación y<br />tono de voz
        </motion.h2>
        <motion.p initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} transition={{duration:0.6,delay:0.2}} style={{ fontSize:'clamp(0.9rem,1.4vw,1.05rem)', color:'#4A5568', lineHeight:1.8 }}>
          Es importante desarrollar una pronunciación clara y una buena dicción para que el mensaje sea fácil de entender.
        </motion.p>
        <motion.p initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} transition={{duration:0.6,delay:0.3}} style={{ fontSize:'clamp(0.9rem,1.4vw,1.05rem)', color:'#4A5568', lineHeight:1.8 }}>
          El tono, volumen y ritmo de voz deben permitir que la persona escuche con claridad, sin sentirse abrumada, presionada o incómoda.
        </motion.p>
        <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.5,delay:0.55}} style={{ background:'rgba(69,197,190,0.08)', border:'1px solid rgba(69,197,190,0.25)', borderRadius:'10px', padding:'0.65rem 1.2rem', display:'flex', alignItems:'center', gap:'10px' }}>
          <span style={{ fontSize:'0.65rem', fontWeight:700, color:'#45C5BE', letterSpacing:'0.1em', textTransform:'uppercase', flexShrink:0 }}>Tip</span>
          <span style={{ width:'1px', height:'14px', background:'rgba(69,197,190,0.3)', flexShrink:0 }} />
          <p style={{ fontSize:'0.8rem', color:'#4A5568', margin:0, lineHeight:1.5 }}>
            Grabate hablando un minuto. Lo que escuchas es exactamente lo que el paciente escucha.
          </p>
        </motion.div>
      </div>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.9,delay:0.1}} style={{ position:'relative', overflow:'hidden' }}>
        <img src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&auto=format&fit=crop" alt="Pronunciación" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(90deg, rgba(238,242,247,0.3) 0%, transparent 30%)' }} />
      </motion.div>
    </div>
  )
}
