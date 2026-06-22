export function generateMockArtwork(imageUrl, style) {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve({ imageUrl, style, createdAt: new Date().toISOString() }), 1400)
  })
}
