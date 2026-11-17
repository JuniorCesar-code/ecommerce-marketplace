import { useEffect, useState } from 'react'
import { getCategories } from '../api/categoryApi'
import type { Category } from '../api/categoryApi'
import LoadingIndicator from './LoadingIndicator'
import ErrorMessage from './ErrorMessage'

// What the parent page gives this component:
// the selected category id (null = all) and a function to call when it changes
interface CategoryFilterProps {
    selectedId: number | null
    onChange: (categoryId: number | null) => void
}

// Dropdown that loads all categories from the backend and lets the user pick one
function CategoryFilter({ selectedId, onChange }: CategoryFilterProps) {
    // Memory of this component: the list, "still loading?" and a possible error
    const [categories, setCategories] = useState<Category[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    // Runs once when the component appears: ask the backend for the categories
    useEffect(() => {
        getCategories()
            .then((data) => setCategories(data))
            .catch(() => setError('Categories could not be loaded.'))
            .finally(() => setLoading(false))
    }, [])

    if (loading) return <LoadingIndicator message="Loading categories..." />
    if (error) return <ErrorMessage message={error} />

    // Empty value = "All categories"; otherwise turn the text back into a number
    return (
        <label>
            Category:{' '}
            <select
                value={selectedId ?? ''}
                onChange={(e) => onChange(e.target.value === '' ? null : Number(e.target.value))}
            >
                <option value="">All categories</option>
                {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                        {category.name}
                    </option>
                ))}
            </select>
        </label>
    )
}

export default CategoryFilter