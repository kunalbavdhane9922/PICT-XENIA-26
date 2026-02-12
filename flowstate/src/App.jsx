import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Planner from './pages/Planner'
import Analytics from './pages/Analytics'
import Gamification from './pages/Gamification'
import SettingsPage from './pages/Settings'

function App() {
  return (
    <div className="min-h-screen">
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="planner" element={<Planner />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="gamification" element={<Gamification />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App