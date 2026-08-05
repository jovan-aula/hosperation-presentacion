import { motion } from 'framer-motion'
const fade = (delay=0) => ({ initial:{opacity:0,y:20}, animate:{opacity:1,y:0}, transition:{duration:0.6,delay,ease:[0.25,0.46,0.45,0.94]} })

export default function S02_Objetivo() {
  return (
    <div className="slide" style={{ textAlign:'center' }}>
      <div className="corner-accent" />
      <div style={{ maxWidth:'820px', display:'flex', flexDirection:'column', alignItems:'center', gap:'2rem' }}>
        <motion.h2 {...fade(0.2)} className="slide-title" style={{ color:'#0C2D4E' }}>
          Objetivo del módulo
        </motion.h2>
        <motion.p {...fade(0.4)} style={{ fontSize:'clamp(1rem,1.7vw,1.25rem)', color:'#4A5568', lineHeight:1.75, textAlign:'center' }}>
          Al finalizar el módulo, el participante reconocerá los elementos de la
          comunicación asertiva y aplicará herramientas básicas para comunicarse con
          claridad, respeto y calma en la atención a pacientes, familiares, usuarios y
          colaboradores.
        </motion.p>
        <motion.div {...fade(0.6)} style={{ width:'80px', height:'5px', background:'linear-gradient(90deg,#45C5BE,#2BA8A2)', borderRadius:'3px' }} />
      </div>
    </div>
  )
}
