import { motion } from 'framer-motion'
const fade = (d=0) => ({ initial:{opacity:0,y:20}, animate:{opacity:1,y:0}, transition:{duration:0.7,delay:d} })

export default function S05_FraseJimRohn() {
  return (
    <div className="slide" style={{ padding:'80px' }}>
      <div className="corner-accent" />
      <div style={{ maxWidth:'780px' }}>
        <motion.h2 {...fade(0.2)} style={{ fontFamily:'DM Serif Display,serif', fontSize:'clamp(2rem,4.5vw,3.6rem)', fontWeight:400, color:'#0C2D4E', lineHeight:1.2, margin:0 }}>
          El único estilo de<br />comunicación saludable es la<br />comunicación{' '}
          <span style={{ color:'#45C5BE' }}>asertiva</span>
        </motion.h2>
        <motion.p {...fade(0.5)} style={{ marginTop:'2rem', fontSize:'1.1rem', color:'#718096', fontStyle:'italic' }}>
          - Jim Rohn.
        </motion.p>
      </div>
    </div>
  )
}
