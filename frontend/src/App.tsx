import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLayout from './layout/AppLayout'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import RegisterPage from './pages/RegisterPage'

// Zentrale Routen: welche Adresse zeigt welche Seite.
// Neue Seiten (z. B. /products) werden hier ergänzt.
function App() {
    return (
        <BrowserRouter>
            <AppLayout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="*" element={<NotFoundPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                </Routes>
            </AppLayout>
        </BrowserRouter>
    )
}

export default App