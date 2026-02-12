import React, { useState } from 'react'
import {
  Settings,
  Bell,
  Calendar,
  Moon,
  Sun,
  Activity,
  Save,
  RefreshCw,
  Trash2
} from 'lucide-react'

const SettingsPage = () => {
  const [settings, setSettings] = useState({
    breakPreferences: {
      duration: 5,
      frequency: 60,
      reminders: true
    },
    workHours: {
      start: '09:00',
      end: '17:00',
      days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday']
    },
    notifications: {
      energyAlerts: true,
      taskReminders: true,
      breakReminders: true,
      analyticsReports: true
    },
    energySensitivity: 'medium',
    calendarSync: {
      enabled: false,
      provider: 'google',
      autoImport: true
    }
  })

  const handleSave = () => {
    // Save settings logic
    console.log('Settings saved:', settings)
  }

  const resetSettings = () => {
    setSettings({
      breakPreferences: {
        duration: 5,
        frequency: 60,
        reminders: true
      },
      workHours: {
        start: '09:00',
        end: '17:00',
        days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday']
      },
      notifications: {
        energyAlerts: true,
        taskReminders: true,
        breakReminders: true,
        analyticsReports: true
      },
      energySensitivity: 'medium',
      calendarSync: {
        enabled: false,
        provider: 'google',
        autoImport: true
      }
    })
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Settings</h1>
          <p className="text-slate-600 dark:text-slate-300">Customize your FlowState experience</p>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={resetSettings}
            className="flex items-center space-x-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Reset to Default</span>
          </button>
          <button
            onClick={handleSave}
            className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            <Save className="w-4 h-4" />
            <span>Save Settings</span>
          </button>
        </div>
      </div>

      {/* Settings Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Break Preferences */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Break Preferences</h2>
              <p className="text-sm text-slate-600 dark:text-slate-300">Configure your break schedule</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Break Duration (minutes)
              </label>
              <input
                type="range"
                min="1"
                max="30"
                value={settings.breakPreferences.duration}
                onChange={(e) => setSettings({
                  ...settings,
                  breakPreferences: { ...settings.breakPreferences, duration: parseInt(e.target.value) }
                })}
                className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-sm text-slate-500 dark:text-slate-400 mt-1">
                <span>1 min</span>
                <span>{settings.breakPreferences.duration} min</span>
                <span>30 min</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Break Frequency (minutes)
              </label>
              <input
                type="range"
                min="30"
                max="120"
                value={settings.breakPreferences.frequency}
                onChange={(e) => setSettings({
                  ...settings,
                  breakPreferences: { ...settings.breakPreferences, frequency: parseInt(e.target.value) }
                })}
                className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-sm text-slate-500 dark:text-slate-400 mt-1">
                <span>30 min</span>
                <span>{settings.breakPreferences.frequency} min</span>
                <span>2 hours</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Enable Break Reminders
                </label>
                <p className="text-sm text-slate-500 dark:text-slate-400">Get notified when it's time to take a break</p>
              </div>
              <input
                type="checkbox"
                checked={settings.breakPreferences.reminders}
                onChange={(e) => setSettings({
                  ...settings,
                  breakPreferences: { ...settings.breakPreferences, reminders: e.target.checked }
                })}
                className="w-4 h-4 text-blue-600 bg-slate-100 border-slate-300 rounded focus:ring-blue-500 dark:bg-slate-700 dark:border-slate-600"
              />
            </div>
          </div>
        </div>

        {/* Work Hours */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
              <Sun className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Work Hours</h2>
              <p className="text-sm text-slate-600 dark:text-slate-300">Set your productive hours</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Start Time
                </label>
                <input
                  type="time"
                  value={settings.workHours.start}
                  onChange={(e) => setSettings({
                    ...settings,
                    workHours: { ...settings.workHours, start: e.target.value }
                  })}
                  className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  End Time
                </label>
                <input
                  type="time"
                  value={settings.workHours.end}
                  onChange={(e) => setSettings({
                    ...settings,
                    workHours: { ...settings.workHours, end: e.target.value }
                  })}
                  className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
                Work Days
              </label>
              <div className="grid grid-cols-7 gap-2">
                {['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].map((day) => (
                  <label key={day} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={settings.workHours.days.includes(day)}
                      onChange={(e) => {
                        const days = e.target.checked
                          ? [...settings.workHours.days, day]
                          : settings.workHours.days.filter(d => d !== day)
                        setSettings({
                          ...settings,
                          workHours: { ...settings.workHours, days }
                        })
                      }}
                      className="w-4 h-4 text-blue-600 bg-slate-100 border-slate-300 rounded focus:ring-blue-500 dark:bg-slate-700 dark:border-slate-600"
                    />
                    <span className="text-sm text-slate-700 dark:text-slate-300 capitalize">
                      {day.slice(0, 3)}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>



        {/* Energy Sensitivity */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Energy Sensitivity</h2>
              <p className="text-sm text-slate-600 dark:text-slate-300">How sensitive should the system be to energy changes?</p>
            </div>
          </div>

          <div className="space-y-3">
            {[
              { value: 'low', label: 'Low', description: 'Fewer interventions, less sensitive' },
              { value: 'medium', label: 'Medium', description: 'Balanced approach' },
              { value: 'high', label: 'High', description: 'More frequent interventions' }
            ].map((option) => (
              <label key={option.value} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="energySensitivity"
                  value={option.value}
                  checked={settings.energySensitivity === option.value}
                  onChange={(e) => setSettings({
                    ...settings,
                    energySensitivity: e.target.value
                  })}
                  className="w-4 h-4 text-blue-600 bg-slate-100 border-slate-300 focus:ring-blue-500 dark:bg-slate-700 dark:border-slate-600"
                />
                <div>
                  <div className="text-sm font-medium text-slate-900 dark:text-white">{option.label}</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">{option.description}</div>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Calendar Integration */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 lg:col-span-2">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Calendar Integration</h2>
              <p className="text-sm text-slate-600 dark:text-slate-300">Connect your calendar for seamless scheduling</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Enable Calendar Sync
                </label>
                <p className="text-sm text-slate-500 dark:text-slate-400">Import meetings and events from your calendar</p>
              </div>
              <input
                type="checkbox"
                checked={settings.calendarSync.enabled}
                onChange={(e) => setSettings({
                  ...settings,
                  calendarSync: { ...settings.calendarSync, enabled: e.target.checked }
                })}
                className="w-4 h-4 text-blue-600 bg-slate-100 border-slate-300 rounded focus:ring-blue-500 dark:bg-slate-700 dark:border-slate-600"
              />
            </div>

            {settings.calendarSync.enabled && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Calendar Provider
                  </label>
                  <select
                    value={settings.calendarSync.provider}
                    onChange={(e) => setSettings({
                      ...settings,
                      calendarSync: { ...settings.calendarSync, provider: e.target.value }
                    })}
                    className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                  >
                    <option value="google">Google Calendar</option>
                    <option value="outlook">Outlook</option>
                    <option value="ical">iCal</option>
                  </select>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                      Auto-import Events
                    </label>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Automatically add calendar events to your schedule</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.calendarSync.autoImport}
                    onChange={(e) => setSettings({
                      ...settings,
                      calendarSync: { ...settings.calendarSync, autoImport: e.target.checked }
                    })}
                    className="w-4 h-4 text-blue-600 bg-slate-100 border-slate-300 rounded focus:ring-blue-500 dark:bg-slate-700 dark:border-slate-600"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center">
            <Trash2 className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Danger Zone</h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">Reset or clear your data</p>
          </div>
        </div>

        <div className="flex space-x-4">
          <button
            onClick={resetSettings}
            className="flex items-center space-x-2 text-red-600 hover:text-red-700"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Reset All Settings</span>
          </button>
          <button
            className="flex items-center space-x-2 text-red-600 hover:text-red-700"
          >
            <Trash2 className="w-4 h-4" />
            <span>Clear Analytics Data</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Settings