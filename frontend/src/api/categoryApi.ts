// Shape of one category, exactly as the backend sends it (CategoryResponse.java)
export interface Category {
    id: number
    name: string
    description: string | null
}

// Asks the backend for all categories (public, no token needed)
export async function getCategories(): Promise<Category[]> {
    const response = await fetch('http://localhost:8080/api/categories')

    if (!response.ok) {
        throw new Error('Could not load categories')
    }

    return response.json()
}