import React from 'react'
import { 
  Battery, 
  TrendingUp, 
  TrendingDown, 
  AlertCircle,
  CheckCircle,
  Clock
} from 'lucide-react'

const CurrentEnergyPanel = () => {
  const energyLevel = 75
  const status = energyLevel > 80 ? 'Focused' : energyLevel > 50 ? 'Neutral' : 'Fatigued'
  const statusColor = energyLevel > 80 ? 'text-green-600' : energyLevel > 50 ? 'text-yellow-600' : 'text-red-600'
  const statusBg = energyLevel > 80 ? 'bg-green-100' : energyLevel > 50 ? 'bg-yellow-100' : 'bg-red-100'

  const getEnergyColor = (level) => {
    if (level > 80) return 'from-green-400 to-green-600'
    if (level > 50) return 'from-yellow-400 to-orange-500'
    return 'from-red-400 to-red-600'
  }

  const getEnergyIcon = (level) => {
    if (level > 80) return <CheckCircle className="w-5 h-5 text-green-600" />
    if (level > 50) return <Clock className="w-5 h-5 text-yellow-600" />
    return <AlertCircle className="w-5 h-5 text-red-600" />
  }

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Current Energy</h2>
        <div className={`px-3 py-1 rounded-full text-sm font-medium ${statusBg} ${statusColor}`}>
          {getEnergyIcon(energyLevel)}
          <span className="ml-2">{status}</span>
        </div>
      </div>

      {/* Energy Meter */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-slate-600 dark:text-slate-300 mb-2">
          <span>Energy Level</span>
          <span>{energyLevel}%</span>
        </div>
        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
          <div 
            className={`h-3 rounded-full bg-gradient-to-r ${getEnergyColor(energyLevel)} transition-all duration-500 ease-out`}
            style={{ width: `${energyLevel}%` }}
          />
        </div>
      </div>

      {/* Mini Trend Graph */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">Last 2 Hours</h3>
        <div className="flex items-end justify-between space-x-1 h-16">
          {[65, 70, 75, 80, 78, 75, 72, 70, 68, 75, 78, 75].map((height, index) => (
            <div
              key={index}
              className="flex-1 bg-slate-300 dark:bg-slate-600 rounded-sm transition-all duration-300 hover:bg-blue-400 dark:hover:bg-blue-500"
              style={{ height: `${(height / 80) * 100}%` }}
            />
          ))}
        </div>
      </div>

      {/* Action Button */}
      <button className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-teal-600 transition-all duration-200 transform hover:scale-105 shadow-lg">
        👉 Plan My Day
      </button>
    </div>
  )
}

export default CurrentEnergyPanel