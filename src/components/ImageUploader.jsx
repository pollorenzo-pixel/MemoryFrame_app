import { useRef, useState } from 'react'

export default function ImageUploader({ image, onImage }) {
  const inputRef = useRef(null)
  const [error, setError] = useState('')

  function handleFile(file) {
    if (!file) return
    if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
      setError('Please choose a JPG, PNG or WebP image.')
      return
    }
    setError('')
    onImage({ file, url: URL.createObjectURL(file) })
  }

  return <div>
    <button type="button" className={`upload-zone ${image ? 'has-image' : ''}`} onClick={() => inputRef.current?.click()}>
      {image ? <img src={image.url} alt="Your uploaded memory" /> : <>
        <span className="upload-icon">↥</span>
        <strong>Choose a favourite photo</strong>
        <small>JPG, PNG or WebP · up to 10MB</small>
      </>}
    </button>
    <input ref={inputRef} hidden type="file" accept="image/jpeg,image/png,image/webp" onChange={(event) => handleFile(event.target.files?.[0])} />
    {error && <p className="form-error" role="alert">{error}</p>}
    {image && <button className="quiet-button" onClick={() => inputRef.current?.click()}>Choose a different photo</button>}
  </div>
}
