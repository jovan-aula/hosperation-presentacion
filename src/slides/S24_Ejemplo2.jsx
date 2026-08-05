import { motion } from 'framer-motion'

export default function S24_Ejemplo2() {
  return (
    <div style={{ width:'100vw', height:'100vh', display:'grid', gridTemplateColumns:'1fr 1fr', overflow:'hidden' }}>
      <div style={{ background:'#EEF2F7', display:'flex', flexDirection:'column', justifyContent:'center', padding:'60px 64px', gap:'1.4rem', position:'relative' }}>
        <div className="corner-accent" style={{ opacity:0.5 }} />
        <motion.p initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} transition={{duration:0.6}} style={{ fontSize:'clamp(0.9rem,1.4vw,1.05rem)', color:'#4A5568', lineHeight:1.8 }}>
          Cuando una persona experimenta una emoción ante una situación o interacción, es mejor expresarla desde la propia experiencia y no como acusación hacia la otra persona.
        </motion.p>
        <motion.div initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} transition={{duration:0.6,delay:0.25}}>
          <p style={{ fontSize:'clamp(0.9rem,1.4vw,1.05rem)', color:'#45C5BE', fontWeight:700, lineHeight:1.6, margin:0 }}>
            En lugar de decir: <em style={{ color:'#4A5568', fontWeight:400 }}>"Me haces sentir..."</em>
          </p>
          <p style={{ fontSize:'clamp(0.9rem,1.4vw,1.05rem)', color:'#45C5BE', fontWeight:700, lineHeight:1.6, margin:0, marginTop:'0.5rem' }}>
            Podemos decir: <em style={{ color:'#4A5568', fontWeight:400 }}>"Me siento..."</em>
          </p>
        </motion.div>
      </div>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.9,delay:0.1}} style={{ position:'relative', overflow:'hidden' }}>
        <img src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&auto=format&fit=crop" alt="Emoción" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(90deg, rgba(238,242,247,0.3) 0%, transparent 30%)' }} />
      </motion.div>
    </div>
  )
}
