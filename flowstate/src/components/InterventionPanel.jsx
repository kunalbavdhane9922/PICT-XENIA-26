import React, { useState, useEffect } from 'react'
import {
  AlertCircle,
  Lightbulb,
  Coffee,
  Brain,
  CheckCircle,
  X,
  Play,
  RotateCcw
} from 'lucide-react'

const InterventionPanel = () => {
  const [suggestions, setSuggestions] = useState([
    {
      id: 1,
      type: 'movement',
      title: 'Velocity dropped',
      message: 'Take a 5 min movement break',
      status: 'pending',
      icon: Coffee,
      color: 'bg-yellow-500'
    },
    {
      id: 2,
      type: 'task_switch',
      title: 'Error rate increasing',
      message: 'Switch to low complexity task',
      status: 'pending',
      icon: Brain,
      color: 'bg-blue-500'
    },
    {
      id: 3,
      type: 'energy',
      title: 'Energy low',
      message: 'Schedule lighter tasks',
      status: 'pending',
      icon: AlertCircle,
      color: 'bg-red-500'
    }
  ])

  const [isVisible, setIsVisible] = useState(true)

  const handleAction = (id, action) => {
    setSuggestions(suggestions.map(s =>
      s.id === id ? { ...s, status: action === 'accept' ? 'accepted' : 'ignored' } : s
    ))
  }

  const resetSuggestions = () => {
    setSuggestions(suggestions.map(s => ({ ...s, status: 'pending' })))
  }

  const getIcon = (icon) => {
    switch (icon) {
      case Coffee: return <Coffee className="w-5 h-5" />
      case Brain: return <Brain className="w-5 h-5" />
      case AlertCircle: return <AlertCircle className="w-5 h-5" />
      default: return <Lightbulb className="w-5 h-5" />
    }
  }

  if (!isVisible) {
    return (
      <div className="fixed top-24 right-4 z-50">
        <button
          onClick={() => setIsVisible(true)}
          className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
        >
          <Lightbulb className="w-6 h-6" />
        </button>
      </div>
    )
  }

  return (
    <div className="fixed top-24 right-4 w-80 space-y-3 z-50">
      {suggestions.map((suggestion) => (
        <div
          key={suggestion.id}
          className={`bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-4 shadow-lg ${suggestion.status === 'accepted' ? 'opacity-50' : ''
            }`}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-3">
              <div className={`p-2 rounded-full text-white ${suggestion.color}`}>
                {getIcon(suggestion.icon)}
              </div>
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white">{suggestion.title}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{suggestion.message}</p>
              </div>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {suggestion.status === 'pending' && (
            <div className="flex space-x-2 mt-3">
              <button
                onClick={() => handleAction(suggestion.id, 'accept')}
                className="flex items-center space-x-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm hover:bg-green-600 transition-colors"
              >
                <CheckCircle className="w-4 h-4" />
                <span>Accept</span>
              </button>
              <button
                onClick={() => handleAction(suggestion.id, 'ignore')}
                className="flex items-center space-x-2 bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm hover:bg-slate-200 transition-colors"
              >
                <span>Ignore</span>
              </button>
            </div>
          )}

          {suggestion.status === 'accepted' && (
            <div className="flex items-center space-x-2 mt-3 text-green-600 text-sm">
              <CheckCircle className="w-4 h-4" />
              <span>Applied</span>
              <button
                onClick={resetSuggestions}
                className="ml-auto text-slate-400 hover:text-slate-600"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          )}

          {suggestion.status === 'ignored' && (
            <div className="flex items-center space-x-2 mt-3 text-slate-500 text-sm">
              <span>Ignored</span>
              <button
                onClick={resetSuggestions}
                className="ml-auto text-slate-400 hover:text-slate-600"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      ))}

      <div className="text-center">
        <button
          onClick={resetSuggestions}
          className="text-sm text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
        >
          Reset suggestions
        </button>
      </div>
    </div>
  )
}

export default InterventionPanel