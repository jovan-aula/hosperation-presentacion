import { motion } from 'framer-motion'

export default function S23_Ejemplo1() {
  return (
    <div style={{ width:'100vw', height:'100vh', display:'grid', gridTemplateColumns:'1fr 1fr', overflow:'hidden' }}>
      <div style={{ background:'#EEF2F7', display:'flex', flexDirection:'column', justifyContent:'center', padding:'60px 64px', gap:'1.4rem', position:'relative' }}>
        <div className="corner-accent" style={{ opacity:0.5 }} />
        <motion.p initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} transition={{duration:0.6}} style={{ fontSize:'clamp(0.9rem,1.4vw,1.05rem)', color:'#4A5568', lineHeight:1.8 }}>
          En un intercambio de ideas, cuando percibimos que la otra persona puede estar equivocada, es mejor expresar desacuerdo de forma respetuosa.
        </motion.p>
        <motion.div initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} transition={{duration:0.6,delay:0.25}}>
          <p style={{ fontSize:'clamp(0.9rem,1.4vw,1.05rem)', color:'#45C5BE', fontWeight:700, lineHeight:1.6, margin:0 }}>
            En lugar de decir: <em style={{ color:'#4A5568', fontWeight:400 }}>"Tú estás mal".</em>
          </p>
          <p style={{ fontSize:'clamp(0.9rem,1.4vw,1.05rem)', color:'#45C5BE', fontWeight:700, lineHeight:1.6, margin:0, marginTop:'0.5rem' }}>
            Podemos decir: <em style={{ color:'#4A5568', fontWeight:400 }}>"No estoy de acuerdo" o "Lo veo de manera distinta".</em>
          </p>
        </motion.div>
      </div>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.9,delay:0.1}} style={{ position:'relative', overflow:'hidden' }}>
        <img src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&auto=format&fit=crop" alt="Comunicación" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(90deg, rgba(238,242,247,0.3) 0%, transparent 30%)' }} />
      </motion.div>
    </div>
  )
}
