import { useEffect, useState } from 'react'
import { getHealth } from '../api/healthApi'
import CategoryFilter from '../components/CategoryFilter'
import SearchBar from '../components/SearchBar'

function HomePage() {
    const [backendStatus, setBackendStatus] = useState('Checking...')
    // Which category the user picked (null = all categories)
    const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null)
    // What the user searched for (empty = no search)
    const [searchText, setSearchText] = useState('')

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

            {/* Temporary place for search + filter until the catalog page exists */}
            <section>
                <h3>Find products</h3>
                <SearchBar initialValue={searchText} onSearch={setSearchText} />
                <CategoryFilter
                    selectedId={selectedCategoryId}
                    onChange={setSelectedCategoryId}
                />
                <p>Searched for: {searchText || '(nothing)'}</p>
                <p>Selected category id: {selectedCategoryId ?? 'all'}</p>
            </section>
        </>
    )
}

export default HomePage