import { motion } from 'framer-motion'
const fade = (d=0) => ({ initial:{opacity:0,y:20}, animate:{opacity:1,y:0}, transition:{duration:0.7,delay:d} })

export default function S22_EjemplosTitle() {
  return (
    <div className="slide" style={{ textAlign:'center' }}>
      <div className="corner-accent" />
      <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'1.5rem' }}>
        <motion.h2 {...fade(0.2)} className="slide-title">
          Ejemplos de<br />comunicación asertiva
        </motion.h2>
        <motion.div {...fade(0.5)} style={{ width:'80px', height:'4px', background:'linear-gradient(90deg,#45C5BE,#2BA8A2)', borderRadius:'2px' }} />
      </div>
    </div>
  )
}
