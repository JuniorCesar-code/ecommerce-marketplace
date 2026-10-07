//what React sends When the user fills in
export interface RegisterRequest {
    email: string
    password: string
    firstName: string
    lastName: string
}

//what React expects back
// After successful registration, your backend returns something like:
export interface RegisterResponse {
    id: number
    email: string
    firstName: string
    lastName: string
    role: string
}

export async function registerUser(
    request: RegisterRequest
): Promise<RegisterResponse> {

    const response = await fetch(
        'http://localhost:8080/api/auth/register',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(request),
        }
    )

    if (!response.ok) {
        const errorData = await response.json()

        throw new Error(
            errorData.message || 'Registration failed'
        )
    }

    return response.json()
}