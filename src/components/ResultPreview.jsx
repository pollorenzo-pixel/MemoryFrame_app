export default function ResultPreview({ result, onPrint, onReset }) {
  return <div className="result-grid">
    <div className="result-frame"><img src={result.imageUrl} alt={`Mock ${result.style.name} artwork`} /></div>
    <div className="result-copy">
      <p className="eyebrow">Your artwork is ready</p>
      <h3>A memory, reimagined.</h3>
      <p>Your <strong>{result.style.name}</strong> preview is ready to make your own.</p>
      <button className="button button-primary button-wide" onClick={() => window.alert('Digital download checkout is coming soon.')}>Download digital <span>↓</span></button>
      <button className="button button-secondary button-wide" onClick={onPrint}>Explore print options</button>
      <button className="quiet-button" onClick={onReset}>Create another</button>
    </div>
  </div>
}
