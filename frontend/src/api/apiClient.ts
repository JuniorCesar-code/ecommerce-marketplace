const API_BASE_URL = 'http://localhost:8080' //communicate with the backend


export async function apiGet<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${API_BASE_URL}${endpoint}`)

    if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`)
    }

    return response.json() as Promise<T>
}