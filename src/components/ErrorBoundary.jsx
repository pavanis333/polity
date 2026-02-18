import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 40, textAlign: 'center', color: '#e94560' }}>
          <h2>Something went wrong</h2>
          <pre style={{ color: '#aab', fontSize: '0.85rem', marginTop: 16, whiteSpace: 'pre-wrap' }}>
            {this.state.error?.message}
          </pre>
          <button
            onClick={() => { this.setState({ hasError: false }); window.location.href = '/' }}
            style={{ marginTop: 20, padding: '10px 20px', background: '#e94560', color: 'white', border: 'none', borderRadius: 8, cursor: 'pointer' }}
          >
            Go Home
          </button>
        </div>
      )
    }
    return this.props.children
  }
}
