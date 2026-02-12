import React, { useState } from 'react'
import { 
  Plus, 
  Play, 
  Pause, 
  CheckCircle, 
  Edit, 
  Trash2,
  Clock,
  AlertCircle,
  TrendingUp
} from 'lucide-react'

const TaskQueuePanel = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Complete project proposal',
      description: 'Draft and review the quarterly project proposal',
      difficulty: 'Hard',
      deadline: 'Today, 5:00 PM',
      estimatedTime: '2 hours',
      priority: 'High',
      status: 'in_progress',
      timeSpent: '45'
    },
    {
      id: 2,
      title: 'Code review PR #123',
      description: 'Review frontend component changes',
      difficulty: 'Medium',
      deadline: 'Tomorrow, 10:00 AM',
      estimatedTime: '1 hour',
      priority: 'Medium',
      status: 'pending'
    },
    {
      id: 3,
      title: 'Update documentation',
      description: 'Update API documentation for new endpoints',
      difficulty: 'Easy',
      deadline: 'Friday, 3:00 PM',
      estimatedTime: '30 minutes',
      priority: 'Low',
      status: 'pending'
    }
  ])

  const [showAddTask, setShowAddTask] = useState(false)
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    difficulty: 'Medium',
    deadline: '',
    estimatedTime: ''
  })

  const handleAddTask = (e) => {
    e.preventDefault()
    if (newTask.title.trim()) {
      const task = {
        id: Date.now(),
        ...newTask,
        priority: newTask.difficulty === 'Hard' ? 'High' : newTask.difficulty === 'Medium' ? 'Medium' : 'Low',
        status: 'pending'
      }
      setTasks([...tasks, task])
      setNewTask({ title: '', description: '', difficulty: 'Medium', deadline: '', estimatedTime: '' })
      setShowAddTask(false)
    }
  }

  const updateTaskStatus = (id, status) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, status, timeSpent: status === 'in_progress' ? (task.timeSpent || '0') : task.timeSpent } : task
    ))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Hard': return 'bg-red-100 text-red-800 border-red-200'
      case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      default: return 'bg-green-100 text-green-800 border-green-200'
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'bg-red-500'
      case 'Medium': return 'bg-yellow-500'
      default: return 'bg-green-500'
    }
  }

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Task Queue</h2>
        <button
          onClick={() => setShowAddTask(!showAddTask)}
          className="flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 px-3 py-2 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Add Task</span>
        </button>
      </div>

      {/* Add Task Form */}
      {showAddTask && (
        <form onSubmit={handleAddTask} className="mb-6 p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="md:col-span-2">
              <input
                type="text"
                placeholder="Task title"
                value={newTask.title}
                onChange={(e) => setNewTask({...newTask, title: e.target.value})}
                className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-600 text-slate-900 dark:text-white"
                required
              />
            </div>
            <div className="md:col-span-2">
              <input
                type="text"
                placeholder="Description (optional)"
                value={newTask.description}
                onChange={(e) => setNewTask({...newTask, description: e.target.value})}
                className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-600 text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <select
                value={newTask.difficulty}
                onChange={(e) => setNewTask({...newTask, difficulty: e.target.value})}
                className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-600 text-slate-900 dark:text-white"
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>
            <div>
              <input
                type="datetime-local"
                value={newTask.deadline}
                onChange={(e) => setNewTask({...newTask, deadline: e.target.value})}
                className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-600 text-slate-900 dark:text-white"
              />
            </div>
            <div className="md:col-span-2">
              <input
                type="text"
                placeholder="Estimated time (e.g., 2 hours)"
                value={newTask.estimatedTime}
                onChange={(e) => setNewTask({...newTask, estimatedTime: e.target.value})}
                className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-600 text-slate-900 dark:text-white"
              />
            </div>
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={() => setShowAddTask(false)}
              className="px-4 py-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Add Task
            </button>
          </div>
        </form>
      )}

      {/* Task List */}
      <div className="space-y-3">
        {tasks.map((task) => (
          <div key={task.id} className="border border-slate-200 dark:border-slate-700 rounded-lg p-4 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="font-medium text-slate-900 dark:text-white">{task.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(task.difficulty)}`}>
                    {task.difficulty}
                  </span>
                  <div className="flex space-x-1">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full ${i < (task.difficulty === 'Hard' ? 3 : task.difficulty === 'Medium' ? 2 : 1) ? 'bg-blue-500' : 'bg-slate-300 dark:bg-slate-600'}`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">{task.description}</p>
                <div className="flex items-center space-x-4 text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{task.estimatedTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <AlertCircle className="w-4 h-4" />
                    <span>{task.deadline}</span>
                  </div>
                  {task.timeSpent && (
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="w-4 h-4" />
                      <span>{task.timeSpent} min spent</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${getPriorityColor(task.priority)}`} />
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
                  <Edit className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => deleteTask(task.id)}
                  className="p-2 text-slate-400 hover:text-red-600 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TaskQueuePanel