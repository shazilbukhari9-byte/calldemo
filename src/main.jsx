import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import DownloadApp from './pages/DownloadApp.jsx'
import 'flag-icons/css/flag-icons.min.css'
import './index.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

function PageFallback() {
  return (
    <div style={{ minHeight: '60vh', display: 'grid', placeItems: 'center' }}>
      <div style={{ width: 28, height: 28, borderRadius: '50%', border: '3px solid #E5EEF8', borderTopColor: '#1B99F9', animation: 'cmSpin 0.8s linear infinite' }} />
      <style>{`@keyframes cmSpin{to{transform:rotate(360deg)}}`}</style>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Navigate to="/download-callmama-app/" replace />} />
          <Route path="/download-callmama-app" element={<DownloadApp />} />
          <Route path="/download-callmama-app/" element={<DownloadApp />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
)
