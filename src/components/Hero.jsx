export default function Hero({ onStart }) {
  return <main className="hero section-shell">
    <div className="hero-copy">
      <p className="eyebrow">Personal art, made from your moments</p>
      <h1>Your memories,<br/><em>made art.</em></h1>
      <p className="hero-lead">Turn your favourite photos into beautiful, print-ready artwork — made to keep, frame or gift.</p>
      <div className="hero-actions">
        <button className="button button-primary" onClick={onStart}>Create your artwork <span>→</span></button>
        <a className="text-link" href="#how-it-works">See how it works</a>
      </div>
      <p className="microcopy"><span>✓</span> No design skills needed <span>✓</span> Preview before you choose</p>
    </div>
    <div className="hero-art" aria-label="A photo becoming framed artwork">
      <div className="sun-glow" />
      <div className="frame frame-back"><div className="abstract-print print-two" /></div>
      <div className="frame frame-front"><div className="abstract-print"><span className="portrait-shape" /></div></div>
      <span className="art-note">One photo.<br/>Endless feeling.</span>
    </div>
  </main>
}
