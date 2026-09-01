import { Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import LoginPage from './features/auth/LoginPage'
import HomePage from './features/home/HomePage'
import RegisterPage from './features/auth/RegisterPage'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App