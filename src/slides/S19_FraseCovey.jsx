import { motion } from 'framer-motion'
const fade = (d=0) => ({ initial:{opacity:0,y:20}, animate:{opacity:1,y:0}, transition:{duration:0.7,delay:d} })

export default function S19_FraseCovey() {
  return (
    <div className="slide" style={{ padding:'80px' }}>
      <div className="corner-accent" />
      <div style={{ maxWidth:'860px' }}>
        <motion.h2 {...fade(0.2)} style={{ fontFamily:'DM Serif Display,serif', fontSize:'clamp(2rem,4.5vw,3.6rem)', fontWeight:400, lineHeight:1.2, margin:0, color:'#0C2D4E' }}>
          Busca primero{' '}
          <span style={{ color:'#45C5BE' }}>entender</span>
          {', '}
          <span style={{ color:'#45C5BE' }}>luego</span>
          <br />ser entendido
        </motion.h2>
        <motion.p {...fade(0.5)} style={{ marginTop:'2rem', fontSize:'1.1rem', color:'#718096' }}>
          Stephen Covey.
        </motion.p>
      </div>
    </div>
  )
}
