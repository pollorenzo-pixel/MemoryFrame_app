import { Component } from 'react'

export default class AppErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, info) {
    console.error('MemoryFrame render error:', error, info)
  }

  render() {
    if (this.state.error) {
      return (
        <main className="app-fallback" role="alert">
          <p className="eyebrow">MemoryFrame could not load</p>
          <h1>Something interrupted the preview.</h1>
          <p>
            The app is installed, but a runtime error stopped the interface from rendering.
            Open the browser console for details, then refresh the page.
          </p>
        </main>
      )
    }

    return this.props.children
  }
}
