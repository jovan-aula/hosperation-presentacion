import { motion } from 'framer-motion'
const fade = (d=0) => ({ initial:{opacity:0,y:20}, animate:{opacity:1,y:0}, transition:{duration:0.7,delay:d} })

export default function S26_FraseNishan() {
  return (
    <div className="slide" style={{ textAlign:'center', padding:'80px' }}>
      <div className="corner-accent" />
      <div style={{ maxWidth:'900px', display:'flex', flexDirection:'column', alignItems:'center', gap:'2rem' }}>
        <motion.h2 {...fade(0.2)} style={{ fontFamily:'DM Serif Display,serif', fontSize:'clamp(1.8rem,4vw,3.2rem)', fontWeight:700, lineHeight:1.25, color:'#0C2D4E', margin:0 }}>
          Nuestro peor problema de comunicación es que no escuchamos para{' '}
          <span style={{ color:'#45C5BE' }}>entender</span>
          {', sino que escuchamos para '}
          <span style={{ color:'#45C5BE' }}>contestar</span>
        </motion.h2>
        <motion.p {...fade(0.5)} style={{ fontSize:'1.1rem', color:'#718096' }}>
          - Nishan Panwar.
        </motion.p>
      </div>
    </div>
  )
}
