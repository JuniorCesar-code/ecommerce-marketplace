import { useEffect, useState } from 'react'

function App() {
  const [backendStatus, setBackendStatus] = useState('Checking...')

  useEffect(() => {
    fetch('http://localhost:8080/health')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Backend request failed')
          }

          return response.json()
        })
        .then((data) => {
          setBackendStatus(data.status)
        })
        .catch(() => {
          setBackendStatus('Connection failed')
        })
  }, [])

  return (
      <main>
        <h1>E-Commerce Marketplace</h1>

        <h2>Backend Status</h2>

        <p>{backendStatus}</p>
      </main>
  )
}

export default App
