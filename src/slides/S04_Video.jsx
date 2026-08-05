import { motion } from 'framer-motion'

export default function S04_Video() {
  return (
    <div className="slide" style={{ background:'#EEF2F7' }}>
      <div className="corner-accent" />
      <motion.div initial={{opacity:0,scale:0.96}} animate={{opacity:1,scale:1}} transition={{duration:0.7}} style={{ width:'100%', maxWidth:'960px', aspectRatio:'16/9', borderRadius:'16px', overflow:'hidden', boxShadow:'0 20px 60px rgba(12,45,78,0.25)' }}>
        <iframe
          width="100%" height="100%"
          src="https://www.youtube.com/embed/AX10ZkuY_VU"
          title="Qué es la asertividad y para qué sirve"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ display:'block' }}
        />
      </motion.div>
    </div>
  )
}
