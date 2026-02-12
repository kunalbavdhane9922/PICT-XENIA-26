import React, { useState } from 'react'
import { 
  Calendar, 
  Clock, 
  Target, 
  Plus, 
  Play, 
  Pause, 
  CheckCircle,
  Sun,
  Moon
} from 'lucide-react'

const Planner = () => {
  const [view, setView] = useState('day') // 'day' or 'week'
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Deep work session',
      time: '10:00 - 12:00',
      duration: '2 hours',
      difficulty: 'Hard',
      category: 'Focus',
      status: 'pending'
    },
    {
      id: 2,
      title: 'Email management',
      time: '14:00 - 15:00',
      duration: '1 hour',
      difficulty: 'Easy',
      category: 'Admin',
      status: 'pending'
    },
    {
      id: 3,
      title: 'Code review',
      time: '16:00 - 17:00',
      duration: '1 hour',
      difficulty: 'Medium',
      category: 'Collaboration',
      status: 'pending'
    }
  ])

  const optimizeDay = () => {
    // AI optimization logic - rearrange tasks based on energy levels
    const optimizedTasks = [...tasks].sort((a, b) => {
      // Hard tasks go to peak focus hours (10-12, 14-16)
      const isHardA = a.difficulty === 'Hard'
      const isHardB = b.difficulty === 'Hard'
      if (isHardA && !isHardB) return -1
      if (!isHardA && isHardB) return 1
      return 0
    })
    setTasks(optimizedTasks)
  }

  const addTask = () => {
    const newTask = {
      id: Date.now(),
      title: 'New Task',
      time: '13:00 - 14:00',
      duration: '1 hour',
      difficulty: 'Medium',
      category: 'General',
      status: 'pending'
    }
    setTasks([...tasks, newTask])
  }

  const updateTaskStatus = (id, status) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, status } : task
    ))
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Hard': return 'bg-red-100 text-red-800 border-red-200'
      case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      default: return 'bg-green-100 text-green-800 border-green-200'
    }
  }

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Focus': return 'bg-blue-100 text-blue-800'
      case 'Admin': return 'bg-gray-100 text-gray-800'
      case 'Collaboration': return 'bg-purple-100 text-purple-800'
      default: return 'bg-slate-100 text-slate-800'
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Energy-Aware Planner</h1>
          <p className="text-slate-600 dark:text-slate-300">Smart scheduling based on your energy cycles</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex bg-slate-100 dark:bg-slate-700 rounded-lg p-1">
            <button
              onClick={() => setView('day')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                view === 'day' ? 'bg-white dark:bg-slate-600 shadow-sm' : 'text-slate-600 dark:text-slate-300'
              }`}
            >
              Day View
            </button>
            <button
              onClick={() => setView('week')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                view === 'week' ? 'bg-white dark:bg-slate-600 shadow-sm' : 'text-slate-600 dark:text-slate-300'
              }`}
            >
              Week View
            </button>
          </div>
          <button
            onClick={optimizeDay}
            className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-600 hover:to-teal-600 transition-all duration-200 transform hover:scale-105"
          >
            👉 Optimize My Day
          </button>
        </div>
      </div>

      {/* Energy Timeline */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Peak Focus Hours</h2>
        <div className="grid grid-cols-24 gap-1">
          {[...Array(24)].map((_, hour) => {
            const isPeak = (hour >= 10 && hour <= 12) || (hour >= 14 && hour <= 16)
            const hasTask = tasks.some(task => {
              const taskStart = parseInt(task.time.split(' - ')[0])
              const taskEnd = parseInt(task.time.split(' - ')[1])
              return hour >= taskStart && hour < taskEnd
            })
            
            return (
              <div
                key={hour}
                className={`h-16 border border-slate-200 dark:border-slate-700 rounded ${
                  isPeak ? 'bg-green-100 dark:bg-green-900/30' : 'bg-slate-50 dark:bg-slate-700'
                } ${hasTask ? 'ring-2 ring-blue-400' : ''} transition-all duration-200 hover:opacity-80`}
              >
                <div className="text-xs text-slate-500 dark:text-slate-400 p-1">{hour}:00</div>
              </div>
            )
          })}
        </div>
        <div className="flex items-center justify-between mt-4 text-sm text-slate-600 dark:text-slate-300">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded" />
              <span>Peak focus</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-slate-300 dark:bg-slate-600 rounded" />
              <span>Low energy</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Sun className="w-4 h-4 text-yellow-500" />
            <span>10 AM - 4 PM</span>
            <Moon className="w-4 h-4 text-slate-500" />
          </div>
        </div>
      </div>

      {/* Task Schedule */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Today's Schedule</h2>
            <button
              onClick={addTask}
              className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
            >
              <Plus className="w-4 h-4" />
              <span>Add Task</span>
            </button>
          </div>
          
          <div className="space-y-3">
            {tasks.map((task) => (
              <div key={task.id} className="border border-slate-200 dark:border-slate-700 rounded-lg p-4 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-slate-900 dark:text-white">{task.title}</h3>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(task.category)}`}>
                      {task.category}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(task.difficulty)}`}>
                      {task.difficulty}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-300">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{task.time}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Target className="w-4 h-4" />
                      <span>{task.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateTaskStatus(task.id, task.status === 'in_progress' ? 'pending' : 'in_progress')}
                      className={`p-2 rounded-lg transition-colors ${
                        task.status === 'in_progress' 
                          ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {task.status === 'in_progress' ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </button>
                    <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
                      <CheckCircle className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Calendar Integration</h2>
          <div className="space-y-4">
            <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
              <h3 className="font-medium text-slate-900 dark:text-white mb-2">Google Calendar Sync</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
                Connect your calendar to automatically import meetings and events
              </p>
              <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
                Connect Calendar
              </button>
            </div>
            
            <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
              <h3 className="font-medium text-slate-900 dark:text-white mb-2">Auto-Schedule</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
                Let AI optimize your day by automatically scheduling tasks
              </p>
              <button className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-2 px-4 rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-200">
                Auto-Schedule Day
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Planner