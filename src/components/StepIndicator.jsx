const labels = ['Photo', 'Style', 'Preview']

export default function StepIndicator({ step }) {
  return <ol className="steps" aria-label="Creation progress">
    {labels.map((label, index) => <li key={label} className={index <= step ? 'active' : ''} aria-current={index === step ? 'step' : undefined}>
      <span>{index + 1}</span>{label}
    </li>)}
  </ol>
}
