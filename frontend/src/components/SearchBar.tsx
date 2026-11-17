import { useState } from 'react'
import type { FormEvent } from 'react'

// What the parent page gives this component:
// the current search text and a function to call when the user searches
interface SearchBarProps {
    initialValue: string
    onSearch: (searchText: string) => void
}

// Text box + button; tells the page what the user wants to search for
function SearchBar({ initialValue, onSearch }: SearchBarProps) {
    // What the user is typing right now (not searched yet)
    const [text, setText] = useState(initialValue)

    // On submit (button or Enter): don't reload the page, send the trimmed text up
    function handleSubmit(event: FormEvent) {
        event.preventDefault()
        onSearch(text.trim())
    }

    return (
        <form onSubmit={handleSubmit} role="search">
            <input
                type="search"
                placeholder="Search products..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchBar