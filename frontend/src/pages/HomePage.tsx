import { useEffect, useState } from 'react'
import { getHealth } from '../api/healthApi'

function HomePage() {
    const [backendStatus, setBackendStatus] = useState('Checking...')

    useEffect(() => {
        getHealth()
            .then((data) => {
                setBackendStatus(data.status)
            })
            .catch(() => {
                setBackendStatus('Connection failed')
            })
    }, [])

    return (
        <>
            <h2>Welcome to the Marketplace</h2>

            <section>
                <h3>Backend Status</h3>
                <p>{backendStatus}</p>
            </section>
        </>
    )
}

export default HomePage