import React from 'react'
import CurrentEnergyPanel from '../components/CurrentEnergyPanel'
import TaskQueuePanel from '../components/TaskQueuePanel'
import LiveProductivityMetrics from '../components/LiveProductivityMetrics'
import InterventionPanel from '../components/InterventionPanel'

import RecommendedTaskPanel from '../components/RecommendedTaskPanel'

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white uppercase tracking-tight">Performance Dashboard</h1>
          <p className="text-slate-600 dark:text-slate-300">Real-time daily scoring and energy tracking</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-300">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>Live tracking</span>
          </div>
        </div>
      </div>

      {/* Daily Scoring stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl p-4 text-white shadow-lg transform hover:scale-[1.02] transition-transform">
          <p className="text-xs font-bold opacity-80 uppercase tracking-wider">Today's Tasks</p>
          <div className="flex items-end justify-between mt-1">
            <p className="text-3xl font-black">12</p>
            <p className="text-[10px] font-bold bg-white/20 px-2 py-0.5 rounded-full">Target: 15</p>
          </div>
        </div>
        <div className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl p-4 text-white shadow-lg transform hover:scale-[1.02] transition-transform">
          <p className="text-xs font-bold opacity-80 uppercase tracking-wider">Daily Score</p>
          <div className="flex items-end justify-between mt-1">
            <p className="text-3xl font-black">87%</p>
            <p className="text-[10px] font-bold bg-white/20 px-2 py-0.5 rounded-full">Optimal</p>
          </div>
        </div>
        <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl p-4 text-white shadow-lg transform hover:scale-[1.02] transition-transform">
          <p className="text-xs font-bold opacity-80 uppercase tracking-wider">Today's Breaks</p>
          <div className="flex items-end justify-between mt-1">
            <p className="text-3xl font-black">18m</p>
            <p className="text-[10px] font-bold bg-white/20 px-2 py-0.5 rounded-full">Healthy</p>
          </div>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-4 text-white shadow-lg transform hover:scale-[1.02] transition-transform">
          <p className="text-xs font-bold opacity-80 uppercase tracking-wider">Daily Focus</p>
          <div className="flex items-end justify-between mt-1">
            <p className="text-3xl font-black">92%</p>
            <p className="text-[10px] font-bold bg-white/20 px-2 py-0.5 rounded-full">+4% vs Avg</p>
          </div>
        </div>
      </div>


      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-1 space-y-6">
          <RecommendedTaskPanel />
          <CurrentEnergyPanel />
        </div>

        {/* Right Column */}
        <div className="lg:col-span-2">
          <TaskQueuePanel />
        </div>
      </div>


      {/* Wide Productivity Section */}
      <LiveProductivityMetrics />
    </div>
  )
}



export default Dashboard