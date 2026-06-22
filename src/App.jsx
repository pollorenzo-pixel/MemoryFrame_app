import { useState } from 'react'
import Hero from './components/Hero.jsx'
import ImageUploader from './components/ImageUploader.jsx'
import StyleSelector from './components/StyleSelector.jsx'
import GeneratePanel from './components/GeneratePanel.jsx'
import ResultPreview from './components/ResultPreview.jsx'
import PrintOptions from './components/PrintOptions.jsx'
import StepIndicator from './components/StepIndicator.jsx'
import { generateMockArtwork } from './services/mockImageGeneration.js'

const useCases = [
  ['For the ones who stay close', 'Turn family portraits and quiet everyday moments into art that belongs at home.', '01'],
  ['For four-legged family', 'Celebrate all the character, mischief and love in a one-of-a-kind pet portrait.', '02'],
  ['For places you still feel', 'Give a favourite trip, landscape or shared adventure a permanent place on your wall.', '03'],
  ['For a gift only you could give', 'Make birthdays, anniversaries and milestones feel genuinely personal.', '04'],
]

export default function App() {
  const [step, setStep] = useState(0)
  const [image, setImage] = useState(null)
  const [style, setStyle] = useState(null)
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [showPrints, setShowPrints] = useState(false)
  const [product, setProduct] = useState(null)
  const [confirmed, setConfirmed] = useState(false)

  function start() { document.querySelector('#create')?.scrollIntoView({ behavior: 'smooth' }) }
  function reset() { setStep(0); setImage(null); setStyle(null); setResult(null); setShowPrints(false); setProduct(null); setConfirmed(false) }
  async function generate() {
    setLoading(true)
    const artwork = await generateMockArtwork(image.url, style)
    setResult(artwork); setLoading(false); setStep(2)
  }

  return <>
    <header className="site-header section-shell">
      <a className="brand" href="#top" aria-label="MemoryFrame home"><span>MF</span>MemoryFrame</a>
      <nav><a href="#use-cases">Made for</a><a href="#how-it-works">How it works</a><a href="#pricing">Pricing</a></nav>
      <button className="nav-cta" onClick={start}>Create yours</button>
    </header>
    <div id="top"><Hero onStart={start} /></div>

    <section className="trust-strip"><span>Made for meaningful moments</span><i /> Pets <i /> People <i /> Places <i /> Gifts</section>

    <section className="section-shell content-section" id="use-cases">
      <div className="section-heading"><p className="eyebrow">Made personal</p><h2>Some moments deserve<br/><em>more than a camera roll.</em></h2></div>
      <div className="use-grid">{useCases.map(([title, copy, number]) => <article key={number}><span>{number}</span><div className={`use-art use-art-${number}`} /><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </section>

    <section className="how-section" id="how-it-works"><div className="section-shell">
      <div className="section-heading centered"><p className="eyebrow">From photo to frame</p><h2>Beautifully simple,<br/><em>thoughtfully made.</em></h2></div>
      <div className="how-grid">
        <article><span>01</span><div className="how-icon">▧</div><h3>Choose your photo</h3><p>Pick a memory that means something — polished or perfectly imperfect.</p></article>
        <article><span>02</span><div className="how-icon">✦</div><h3>Find your style</h3><p>Explore a small, curated collection of timeless artistic finishes.</p></article>
        <article><span>03</span><div className="how-icon">◇</div><h3>Make it yours</h3><p>Preview your piece, then choose a digital file or a print for your wall.</p></article>
      </div>
    </div></section>

    <section className="section-shell pricing-section" id="pricing">
      <div className="pricing-card"><div><p className="eyebrow">Simple pricing</p><h2>Start with a memory.<br/><em>Choose the ending.</em></h2><p>Create and preview for free. Only pay when you find the piece you love.</p></div>
        <div className="price-list"><p><span>Digital artwork</span><strong>from £9.99</strong></p><p><span>Fine art prints</span><strong>from £24.99</strong></p><p><span>Framed & canvas</span><strong>from £59.99</strong></p><button className="button button-primary" onClick={start}>Create a free preview →</button></div>
      </div>
    </section>

    <section className="creator-section" id="create"><div className="section-shell creator-shell">
      <div className="creator-intro"><p className="eyebrow">MemoryFrame studio</p><h2>Let’s make something<br/><em>worth keeping.</em></h2><p>Your free preview takes less than a minute.</p></div>
      <div className="creator-card">
        <StepIndicator step={step} />
        {showPrints ? <div className="creator-body"><button className="back-link" onClick={() => setShowPrints(false)}>← Back to artwork</button><p className="eyebrow">Choose your finish</p><h3>Bring it home.</h3><PrintOptions selected={product} onSelect={setProduct} onCheckout={() => setConfirmed(true)} confirmed={confirmed} /></div>
        : step === 0 ? <div className="creator-body"><p className="eyebrow">Step one</p><h3>Choose a photo you love.</h3><p>Good light and a clear subject work best — but feeling matters more than perfection.</p><ImageUploader image={image} onImage={setImage} />{image && <button className="button button-primary button-wide" onClick={() => setStep(1)}>Choose an art style →</button>}</div>
        : step === 1 ? <div className="creator-body"><button className="back-link" onClick={() => setStep(0)}>← Back</button><p className="eyebrow">Step two</p><h3>What feels like your memory?</h3><p>Pick a finish. You can always come back and try another.</p><StyleSelector selected={style} onSelect={setStyle} />{style && <GeneratePanel image={image} style={style} loading={loading} onGenerate={generate} />}</div>
        : <div className="creator-body"><ResultPreview result={result} onPrint={() => setShowPrints(true)} onReset={reset} /></div>}
      </div>
    </div></section>

    <footer className="section-shell"><a className="brand" href="#top"><span>MF</span>MemoryFrame</a><p>Meaningful moments, made tangible.</p><span>© 2026 MemoryFrame</span></footer>
  </>
}
