export default function GeneratePanel({ image, style, loading, onGenerate }) {
  return <div className="generate-panel">
    <div className="generate-summary">
      <img src={image.url} alt="Uploaded memory" />
      <div><span>Your photo</span><strong>{style.name}</strong><small>Selected finish</small></div>
    </div>
    <button className="button button-primary button-wide" onClick={onGenerate} disabled={loading}>
      {loading ? <><i className="spinner" /> Creating your artwork…</> : <>Generate artwork <span>✦</span></>}
    </button>
    <p className="mock-note">This preview is simulated for the MVP — no image leaves your browser.</p>
  </div>
}
