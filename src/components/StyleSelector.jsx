import { artStyles } from '../data/artStyles.js'

export default function StyleSelector({ selected, onSelect }) {
  return <div className="style-grid">
    {artStyles.map((style) => <button key={style.id} className={`style-card ${selected?.id === style.id ? 'selected' : ''}`} onClick={() => onSelect(style)}>
      <span className="style-swatch" style={{ background: style.swatch }}><i /><b>✓</b></span>
      <strong>{style.name}</strong><small>{style.description}</small>
    </button>)}
  </div>
}
