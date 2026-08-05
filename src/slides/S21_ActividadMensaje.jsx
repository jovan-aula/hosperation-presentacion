import { motion } from 'framer-motion'
const fade = (d=0) => ({ initial:{opacity:0,y:16}, animate:{opacity:1,y:0}, transition:{duration:0.6,delay:d} })

const frases = ['"Eso no se puede."','"Ya se le explicó."','"Tiene que esperar."','"Esa no es mi área."','"No puedo hacer nada."','"Usted está mal."','"Tiene que calmarse."']

export default function S21_ActividadMensaje() {
  return (
    <div className="slide" style={{ padding:'48px 72px' }}>
      <div className="corner-accent" />
      <div style={{
        position: 'absolute', top: '24px', right: '32px',
        background: '#45C5BE', color: '#0C2D4E',
        borderRadius: '100px', padding: '0.3rem 1rem',
        fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase',
      }}>
        Ejercicio 3 · Hoja C
      </div>
      <div style={{ width:'100%', maxWidth:'980px', display:'flex', flexDirection:'column', gap:'1.6rem' }}>
        <motion.h2 {...fade(0.1)} className="slide-title" style={{ textAlign:'center' }}>Actividad</motion.h2>
        <motion.p {...fade(0.2)} style={{ textAlign:'center', fontSize:'clamp(1rem,1.6vw,1.25rem)', color:'#45C5BE', fontWeight:700 }}>Del mensaje reactivo al mensaje asertivo</motion.p>
        <motion.p {...fade(0.3)} style={{ fontSize:'clamp(0.85rem,1.3vw,1rem)', color:'#4A5568', lineHeight:1.7 }}>
          Transforma las siguientes frases en respuestas más claras, respetuosas y orientadas a solución.
        </motion.p>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'3rem', alignItems:'start' }}>
          <motion.div {...fade(0.4)}>
            <p style={{ fontWeight:700, color:'#0C2D4E', marginBottom:'0.8rem', fontSize:'1rem' }}>En equipos, respondan:</p>
            {frases.map((f,i) => (
              <div key={i} className="list-item" style={{ fontSize:'clamp(0.82rem,1.2vw,0.95rem)', fontStyle:'italic' }}>
                <span className="list-number">{i+1}.</span>
                <span>{f}</span>
              </div>
            ))}
            <p style={{ marginTop:'1.2rem', fontWeight:700, color:'#0C2D4E', fontSize:'0.9rem' }}>Usa esta estructura:</p>
            <p style={{ color:'#4A5568', fontSize:'0.9rem' }}>Entiendo + explico + oriento</p>
          </motion.div>
          <motion.div {...fade(0.5)}>
            <p style={{ fontWeight:700, color:'#0C2D4E', marginBottom:'1rem', fontSize:'1rem' }}>Ejemplo:</p>
            <p style={{ fontWeight:700, color:'#4A5568', fontSize:'0.9rem', marginBottom:'0.4rem' }}>En lugar de: <em>"No es mi área."</em></p>
            <p style={{ color:'#4A5568', fontSize:'0.9rem', lineHeight:1.7, fontStyle:'italic' }}>Decir: "Entiendo lo que necesita. Esta situación la atiende otra área, pero puedo orientarle para que llegue con la persona indicada."</p>
            <div style={{ marginTop:'2rem', display:'flex', justifyContent:'flex-end' }}>
              <svg width="110" height="110" viewBox="0 0 140 140">
                <circle cx="70" cy="75" r="55" fill="none" stroke="#e2e8f0" strokeWidth="3" />
                <path d="M70,20 A55,55 0 0,1 125,75" fill="none" stroke="#93C5D9" strokeWidth="3" strokeLinecap="round" />
                {[0,30,60,90,120,150,180,210,240,270,300,330].map(a => {
                  const r=(a*Math.PI)/180, x1=70+50*Math.sin(r), y1=75-50*Math.cos(r), x2=70+55*Math.sin(r), y2=75-55*Math.cos(r)
                  return <line key={a} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#0C2D4E" strokeWidth="1.5" opacity="0.3" />
                })}
                <text x="70" y="82" textAnchor="middle" fill="#0C2D4E" fontSize="32" fontWeight="700" fontFamily="DM Sans">10</text>
                <text x="70" y="100" textAnchor="middle" fill="#718096" fontSize="14" fontFamily="DM Sans">min</text>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
