import { printProducts } from '../data/printProducts.js'

export default function PrintOptions({ selected, onSelect, onCheckout, confirmed }) {
  if (confirmed) return <div className="confirmation">
    <span>✓</span><p className="eyebrow">Saved for later</p><h3>Your print order is ready.</h3>
    <p>Payment integration is coming soon. Your artwork and print choice will be waiting here.</p>
  </div>

  return <div>
    <div className="product-grid">
      {printProducts.map((product) => <button key={product.id} className={`product-card ${selected?.id === product.id ? 'selected' : ''}`} onClick={() => onSelect(product)}>
        <span>{product.name}</span><small>{product.note}</small><strong>{product.price}</strong>
      </button>)}
    </div>
    <button className="button button-primary button-wide" onClick={onCheckout} disabled={!selected}>Continue to checkout →</button>
  </div>
}
