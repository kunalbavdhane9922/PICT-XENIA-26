import React from 'react'
import {
  BarChart3,
  TrendingUp,
  Calendar,
  Activity,
  AlertTriangle,
  CheckCircle,
  Clock,
  Users
} from 'lucide-react'

const Analytics = () => {
  const [timeframe, setTimeframe] = React.useState('Weekly')
  // Mock data for charts
  const focusHoursData = [
    { hour: '6 AM', focus: 20, medium: 30, burnout: 50 },
    { hour: '7 AM', focus: 25, medium: 35, burnout: 40 },
    { hour: '8 AM', focus: 30, medium: 40, burnout: 30 },
    { hour: '9 AM', focus: 40, medium: 45, burnout: 15 },
    { hour: '10 AM', focus: 80, medium: 15, burnout: 5 },
    { hour: '11 AM', focus: 85, medium: 10, burnout: 5 },
    { hour: '12 PM', focus: 75, medium: 20, burnout: 5 },
    { hour: '1 PM', focus: 60, medium: 30, burnout: 10 },
    { hour: '2 PM', focus: 70, medium: 25, burnout: 5 },
    { hour: '3 PM', focus: 75, medium: 20, burnout: 5 },
    { hour: '4 PM', focus: 80, medium: 15, burnout: 5 },
    { hour: '5 PM', focus: 65, medium: 25, burnout: 10 },
    { hour: '6 PM', focus: 45, medium: 35, burnout: 20 },
    { hour: '7 PM', focus: 30, medium: 40, burnout: 30 },
    { hour: '8 PM', focus: 20, medium: 45, burnout: 35 },
    { hour: '9 PM', focus: 15, medium: 50, burnout: 35 },
  ]
  const weeklyData = [
    { day: 'Mon', productivity: 75, tasks: 8 },
    { day: 'Tue', productivity: 82, tasks: 10 },
    { day: 'Wed', productivity: 78, tasks: 9 },
    { day: 'Thu', productivity: 85, tasks: 11 },
    { day: 'Fri', productivity: 70, tasks: 7 },
    { day: 'Sat', productivity: 45, tasks: 3 },
    { day: 'Sun', productivity: 35, tasks: 2 },
  ]

  const monthlyData = [
    { day: 'Week 1', productivity: 70, tasks: 45 },
    { day: 'Week 2', productivity: 85, tasks: 52 },
    { day: 'Week 3', productivity: 78, tasks: 48 },
    { day: 'Week 4', productivity: 82, tasks: 55 },
  ]

  const yearlyData = [
    { day: 'Jan', productivity: 65, tasks: 180 },
    { day: 'Feb', productivity: 72, tasks: 210 },
    { day: 'Mar', productivity: 85, tasks: 250 },
    { day: 'Apr', productivity: 80, tasks: 230 },
  ]

  const productivityTrend = timeframe === 'Weekly' ? weeklyData : timeframe === 'Monthly' ? monthlyData : yearlyData;

  const summaryStats = [
    {
      title: 'Peak Focus Window',
      value: '10 AM - 4 PM',
      change: '+2 hours',
      icon: Clock,
      color: 'text-green-600'
    },
    {
      title: 'Productivity Trend',
      value: '82%',
      change: '+15%',
      icon: TrendingUp,
      color: 'text-green-600'
    },
    {
      title: 'Burnout Risk',
      value: 'Low',
      change: '-40%',
      icon: CheckCircle,
      color: 'text-green-600'
    },
    {
      title: 'Task Completion',
      value: '89%',
      change: '+8%',
      icon: Users,
      color: 'text-blue-600'
    }
  ]



  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white uppercase tracking-tight">
            {timeframe} Analytics
          </h1>
          <p className="text-slate-600 dark:text-slate-300">Data-driven insights for better productivity</p>
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={timeframe === 'Weekly' ? 'Last 7 days' : timeframe === 'Monthly' ? 'Last 30 days' : 'Last year'}
            onChange={(e) => {
              const val = e.target.value;
              if (val === 'Last 7 days') setTimeframe('Weekly');
              else if (val === 'Last 30 days') setTimeframe('Monthly');
              else setTimeframe('Yearly');
            }}
            className="px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white font-bold"
          >
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
            <option>Last year</option>
          </select>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryStats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{stat.title}</p>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-full bg-slate-100 dark:bg-slate-700 ${stat.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className={`text-sm font-medium ${stat.color}`}>
                  {stat.change}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">vs last week</span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Main Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Peak Focus Hours Heatmap */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Peak Focus Hours</h2>
            <div className="flex items-center space-x-4 text-sm text-slate-600 dark:text-slate-300">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded" />
                <span>High focus</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-500 rounded" />
                <span>Medium focus</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded" />
                <span>Burnout risk</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            {focusHoursData.map((data, index) => (
              <div key={index} className="flex items-center space-x-4">
                <span className="w-16 text-sm text-slate-600 dark:text-slate-300">{data.hour}</span>
                <div className="flex-1 flex space-x-1">
                  <div
                    className="bg-green-400 rounded-sm"
                    style={{ height: '20px', width: `${data.focus}%` }}
                  />
                  <div
                    className="bg-yellow-400 rounded-sm"
                    style={{ height: '20px', width: `${data.medium}%` }}
                  />
                  <div
                    className="bg-red-400 rounded-sm"
                    style={{ height: '20px', width: `${data.burnout}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 text-center text-sm text-slate-500 dark:text-slate-400">
            👉 Your peak focus window: 10 AM - 4 PM
          </div>
        </div>

        {/* Productivity Trend */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Productivity Trend</h2>
          <div className="space-y-4">
            {productivityTrend.map((day, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                <div className="flex items-center space-x-4">
                  <span className="w-12 text-sm font-medium text-slate-900 dark:text-white">{day.day}</span>
                  <div className="flex-1 bg-slate-200 dark:bg-slate-600 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-teal-500 h-2 rounded-full"
                      style={{ width: `${day.productivity}%` }}
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-sm text-slate-600 dark:text-slate-300">
                  <span>{day.productivity}%</span>
                  <span className="flex items-center space-x-1">
                    <Activity className="w-4 h-4" />
                    <span>{day.tasks} tasks</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Error Rate Trend */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Error Rate Trend</h3>
          <div className="space-y-3">
            {[{ day: 'Mon', rate: 3.2 }, { day: 'Tue', rate: 2.8 }, { day: 'Wed', rate: 2.1 }, { day: 'Thu', rate: 1.9 }, { day: 'Fri', rate: 2.5 }].map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-300">{item.day}</span>
                <div className="flex items-center space-x-2">
                  <div className="w-24 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-red-500 h-2 rounded-full"
                      style={{ width: `${item.rate * 10}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium text-slate-900 dark:text-white">{item.rate}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Task Completion Histogram */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Task Completion</h3>
          <div className="space-y-3">
            {[{ category: 'Hard', completion: 75 }, { category: 'Medium', completion: 85 }, { category: 'Easy', completion: 92 }].map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-300">{item.category}</span>
                <div className="flex items-center space-x-2">
                  <div className="w-32 bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full"
                      style={{ width: `${item.completion}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium text-slate-900 dark:text-white">{item.completion}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Burnout Risk Analysis */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Burnout Risk Analysis</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">Low Risk</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Excellent balance</p>
                </div>
              </div>
              <span className="text-2xl font-bold text-green-600">85%</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="w-6 h-6 text-yellow-600" />
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">Medium Risk</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Monitor closely</p>
                </div>
              </div>
              <span className="text-2xl font-bold text-yellow-600">12%</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="w-6 h-6 text-red-600" />
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">High Risk</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Take action</p>
                </div>
              </div>
              <span className="text-2xl font-bold text-red-600">3%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analytics