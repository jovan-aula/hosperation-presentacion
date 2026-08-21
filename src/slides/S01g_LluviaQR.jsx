import { motion } from 'framer-motion'

export default function S01g_LluviaQR() {
  const url = 'https://hosperation-presentacion.vercel.app/lluvia-input.html'
  const qr = 'https://api.qrserver.com/v1/create-qr-code/?size=220x220&color=45C5BE&bgcolor=081e35&data=' + encodeURIComponent(url)

  return (
    <div style={{
      width: '100vw', height: '100vh',
      background: 'linear-gradient(160deg, #081e35 0%, #0C2D4E 100%)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '60px 80px',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(69,197,190,0.05) 1px, transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', maxWidth: '900px', width: '100%', display: 'flex', alignItems: 'center', gap: '80px' }}>

        {/* Izquierda — instrucciones */}
        <motion.div
          initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
          style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
        >
          <div style={{ background: 'rgba(69,197,190,0.12)', border: '1px solid rgba(69,197,190,0.3)', borderRadius: '100px', padding: '0.3rem 1.2rem', fontSize: '0.72rem', fontWeight: 700, color: '#45C5BE', letterSpacing: '0.12em', textTransform: 'uppercase', width: 'fit-content' }}>
            Actividad en vivo
          </div>

          <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: 'white', lineHeight: 1.15, letterSpacing: '-0.02em', margin: 0 }}>
            Para ti, comunicación asertiva es...
          </h2>

          <div style={{ width: '48px', height: '3px', background: '#45C5BE', borderRadius: '2px' }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {['Escanea el código QR con tu celular', 'Escribe tu propia definición', 'Aparecerá en pantalla en tiempo real'].map((paso, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(69,197,190,0.15)', border: '1.5px solid rgba(69,197,190,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#45C5BE' }}>{i + 1}</span>
                </div>
                <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', margin: 0, lineHeight: 1.4 }}>{paso}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Derecha — QR */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', flexShrink: 0 }}
        >
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1.5px solid rgba(69,197,190,0.25)', borderRadius: '20px', padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <img src={qr} alt="QR" width={220} height={220} style={{ borderRadius: '8px', display: 'block' }} />
            <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.06em', textTransform: 'uppercase', margin: 0, textAlign: 'center' }}>
              hosperation-presentacion.vercel.app
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
