import { motion } from 'framer-motion'
const fade = (d=0) => ({ initial:{opacity:0,y:20}, animate:{opacity:1,y:0}, transition:{duration:0.7,delay:d} })

export default function S11_TipsTitle() {
  return (
    <div className="slide" style={{ textAlign:'center' }}>
      <div className="corner-accent" />
      <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'1.5rem' }}>
        <motion.h2 {...fade(0.2)} style={{ fontFamily:'DM Serif Display,serif', fontSize:'clamp(2rem,4.5vw,3.8rem)', color:'#0C2D4E', fontWeight:400, lineHeight:1.15, margin:0 }}>
          Tips para mejorar la<br />
          <span style={{ color:'#45C5BE' }}>comunicación asertiva</span>
        </motion.h2>
        <motion.div {...fade(0.5)} style={{ width:'80px', height:'4px', background:'rgba(100,130,160,0.35)', borderRadius:'2px' }} />
      </div>
    </div>
  )
}
