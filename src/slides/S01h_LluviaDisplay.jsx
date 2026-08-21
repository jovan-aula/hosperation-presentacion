export default function S01h_LluviaDisplay() {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden' }}>
      <iframe
        src="https://hosperation-presentacion.vercel.app/lluvia-display.html"
        style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
        title="Lluvia de ideas en vivo"
      />
    </div>
  )
}
