import { apiGet } from './apiClient' // API for health

export interface HealthResponse {
    status: string
}

export function getHealth(): Promise<HealthResponse> {
    return apiGet<HealthResponse>('/api/health')
}