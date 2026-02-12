import React, { useState } from 'react'
import {
  Trophy,
  Star,
  Zap,
  Calendar,
  Target,
  Award,
  TrendingUp,
  Clock,
  CheckCircle,
  Users,
  Shield,
  Coffee,
  Sparkles,
  Flame,
  ArrowRight,
  Gift,
  Lock,
  ChevronRight,
  HelpCircle,
  ZapOff
} from 'lucide-react'

const Gamification = () => {
  const [activeTab, setActiveTab] = useState('streaks')

  const streaks = {
    current: 15,
    longest: 30,
    weekly: 6
  }

  const scores = {
    focus: 85,
    consistency: 92,
    efficiency: 78
  }

  const achievements = [
    {
      id: 1,
      title: 'Deep Work Champion',
      description: 'Complete 10 deep work sessions',
      icon: Trophy,
      earned: true,
      color: 'bg-yellow-500',
      tier: 'Gold'
    },
    {
      id: 2,
      title: 'Consistency Star',
      description: 'Maintain 7-day streak',
      icon: Star,
      earned: true,
      color: 'bg-blue-500',
      tier: 'Silver'
    },
    {
      id: 3,
      title: 'Burnout Avoider',
      description: 'Take 5 scheduled breaks',
      icon: Award,
      earned: false,
      color: 'bg-green-500',
      tier: 'Bronze'
    },
    {
      id: 4,
      title: 'Task Master',
      description: 'Complete 50 tasks',
      icon: Target,
      earned: false,
      color: 'bg-purple-500',
      tier: 'Silver'
    },
    {
      id: 5,
      title: 'Early Bird',
      description: 'Start work before 8 AM for 3 days',
      icon: Clock,
      earned: false,
      color: 'bg-orange-500',
      tier: 'Bronze'
    }
  ]

  const rewards = [
    { id: 1, title: 'Coffee Break', cost: 500, icon: Coffee, unlocked: true },
    { id: 2, title: 'Streak Shield', cost: 1200, icon: Shield, unlocked: true },
    { id: 3, title: 'Double Points Box', cost: 2000, icon: Gift, unlocked: false },
    { id: 4, title: 'Early Friday Finish', cost: 5000, icon: Zap, unlocked: false },
  ]

  const leaderboard = [
    { name: 'You', score: 2147, rank: 1, avatar: '👤' },
    { name: 'Alex Rivera', score: 1980, rank: 2, avatar: '👨‍💻' },
    { name: 'Sarah Chen', score: 1850, rank: 3, avatar: '👩‍🔬' },
    { name: 'Mike Ross', score: 1200, rank: 4, avatar: '👔' },
  ]

  const dailyChallenges = [
    { id: 1, task: 'Complete 5 tasks before noon', points: 150, progress: 3, total: 5 },
    { id: 2, task: 'Focus mode for 2 hours total', points: 200, progress: 80, total: 120 },
  ]

  const getScoreColor = (score) => {
    if (score >= 90) return 'text-green-600'
    if (score >= 70) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getScoreBg = (score) => {
    if (score >= 90) return 'bg-green-500'
    if (score >= 70) return 'bg-yellow-500'
    return 'bg-red-500'
  }

  return (
    <div className="p-6 space-y-8 bg-slate-50/50 dark:bg-slate-900/50 min-h-full">
      {/* Header with Points & Level */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight uppercase">Productivity Arena</h1>
          <p className="text-slate-600 dark:text-slate-400 font-medium">Level 14 • Battle-Hardened Architect</p>
        </div>
        <div className="flex items-center gap-4 bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
          <div className="text-right">
            <p className="text-[10px] font-black text-slate-400 tracking-widest uppercase">Current Points</p>
            <p className="text-2xl font-black text-slate-900 dark:text-white">2,147</p>
          </div>
          <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg transform rotate-3">
            <Zap className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-1 bg-slate-200/50 dark:bg-slate-800/50 rounded-xl p-1 w-full max-w-2xl">
        {[
          { id: 'streaks', label: 'Streaks', icon: Flame },
          { id: 'scores', label: 'E-Scores', icon: TrendingUp },
          { id: 'achievements', label: 'Trophies', icon: Trophy },
          { id: 'rewards', label: 'Vault', icon: Lock },
          { id: 'social', label: 'Social', icon: Users }
        ].map((tab) => {
          const Icon = tab.icon
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center space-x-2 px-3 py-2.5 rounded-lg text-xs font-black transition-all duration-300 uppercase tracking-wider ${activeTab === tab.id
                  ? 'bg-white dark:bg-slate-700 shadow-md text-indigo-600 dark:text-white scale-105'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
            >
              <Icon className="w-4 h-4" />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          )
        })}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">

        {/* Main Content Area */}
        <div className="xl:col-span-3 space-y-8">

          {/* Streaks Tab Content */}
          {activeTab === 'streaks' && (
            <div className="space-y-8">
              {/* Streak Progress Visualization */}
              <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-100 dark:border-slate-700 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 opacity-5 rounded-full -mr-32 -mt-32 blur-3xl" />

                <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-orange-500 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
                    <div className="w-32 h-32 rounded-full border-8 border-slate-100 dark:border-slate-700 flex items-center justify-center relative">
                      <svg className="absolute -rotate-90 w-32 h-32">
                        <circle
                          cx="64" cy="64" r="56"
                          stroke="currentColor" strokeWidth="8" fill="transparent"
                          className="text-orange-500"
                          strokeDasharray={351.8}
                          strokeDashoffset={351.8 * (1 - streaks.current / streaks.longest)}
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="text-center">
                        <span className="text-3xl font-black text-slate-900 dark:text-white">{streaks.current}</span>
                        <p className="text-[10px] font-black text-slate-400 uppercase">Days</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 space-y-4">
                    <div className="flex justify-between items-end">
                      <div>
                        <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Record Breaker</h2>
                        <p className="text-sm text-slate-500">You are 50% through to your longest streak!</p>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-black text-orange-500">Record: {streaks.longest}d</span>
                      </div>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-700 h-3 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-orange-400 to-red-500 h-full w-[50%] rounded-full shadow-lg" />
                    </div>
                    <div className="flex gap-4">
                      <div className="bg-orange-50 dark:bg-orange-900/20 px-4 py-2 rounded-xl border border-orange-100 dark:border-orange-800/50 flex items-center gap-2">
                        <Shield className="w-4 h-4 text-orange-500" />
                        <span className="text-xs font-black text-orange-700 dark:text-orange-300 uppercase">Streak Shield Active</span>
                      </div>
                      <div className="bg-red-50 dark:bg-red-900/20 px-4 py-2 rounded-xl border border-red-100 dark:border-red-800/50 flex items-center gap-2 animate-pulse">
                        <ZapOff className="w-4 h-4 text-red-500" />
                        <span className="text-xs font-black text-red-700 dark:text-red-300 uppercase">Danger Zone: 4h Left</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Intensity Heatmap (Calendar) */}
              <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-100 dark:border-slate-700 shadow-sm">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight">Consistency Map</h3>
                  <div className="flex items-center gap-4 text-[10px] font-black text-slate-400">
                    <span>LOW</span>
                    <div className="flex gap-1">
                      {[0.2, 0.4, 0.6, 0.8, 1].map(o => (
                        <div key={o} className="w-3 h-3 rounded-sm bg-indigo-500" style={{ opacity: o }} />
                      ))}
                    </div>
                    <span>HIGH</span>
                  </div>
                </div>
                <div className="grid grid-cols-7 sm:grid-cols-14 md:grid-cols-21 gap-2">
                  {Array.from({ length: 28 }).map((_, i) => (
                    <div
                      key={i}
                      className={`aspect-square rounded-lg transition-transform hover:scale-110 cursor-pointer shadow-sm ${i < 15 ? 'bg-indigo-500' : 'bg-slate-100 dark:bg-slate-700'
                        }`}
                      style={{ opacity: i < 15 ? 0.3 + (Math.random() * 0.7) : 1 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Achievements Tab Content */}
          {activeTab === 'achievements' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement) => {
                const Icon = achievement.icon
                return (
                  <div
                    key={achievement.id}
                    className={`group relative bg-white dark:bg-slate-800 rounded-3xl p-6 border transition-all duration-500 hover:-translate-y-2 ${achievement.earned
                        ? 'border-indigo-100 dark:border-indigo-900 shadow-lg'
                        : 'border-slate-100 dark:border-slate-700 opacity-60'
                      }`}
                  >
                    <div className={`absolute top-4 right-4 text-[10px] font-black px-2 py-0.5 rounded-full uppercase ${achievement.tier === 'Gold' ? 'bg-yellow-100 text-yellow-700' :
                        achievement.tier === 'Silver' ? 'bg-slate-100 text-slate-700' : 'bg-orange-100 text-orange-700'
                      }`}>
                      {achievement.tier}
                    </div>
                    <div className={`w-14 h-14 ${achievement.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg transform -rotate-6 group-hover:rotate-0 transition-transform`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2 tracking-tight">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                      {achievement.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {achievement.earned ? (
                          <div className="flex items-center gap-1.5 text-emerald-500">
                            <CheckCircle className="w-4 h-4 shadow-sm" />
                            <span className="text-xs font-black uppercase">Unlocked</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-1.5 text-slate-400">
                            <Lock className="w-4 h-4" />
                            <span className="text-xs font-black uppercase">Locked</span>
                          </div>
                        )}
                      </div>
                      <button className="p-2 rounded-lg bg-slate-50 dark:bg-slate-700 text-slate-400 group-hover:text-indigo-600 transition-colors">
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )
              })}
              {/* Mystery Box Placeholder */}
              <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-6 text-white flex flex-col justify-center items-center text-center shadow-xl border border-white/10 group cursor-pointer">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-md animate-bounce">
                  <Gift className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black mb-1">Mystery Box</h3>
                <p className="text-xs text-indigo-100 opacity-80 mb-4">Unlocks at 3,000 Points</p>
                <div className="w-full bg-black/20 h-2 rounded-full overflow-hidden">
                  <div className="bg-white h-full w-[71%]" />
                </div>
              </div>
            </div>
          )}

          {/* Social Tab Content */}
          {activeTab === 'social' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-100 dark:border-slate-700 shadow-sm">
                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tight">Weekly Leaderboard</h3>
                <div className="space-y-4">
                  {leaderboard.map((user) => (
                    <div
                      key={user.rank}
                      className={`flex items-center justify-between p-4 rounded-2xl transition-all ${user.name === 'You' ? 'bg-indigo-50 dark:bg-indigo-900/40 border border-indigo-100 dark:border-indigo-800' : 'hover:bg-slate-50 dark:hover:bg-slate-700'
                        }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className={`w-6 text-sm font-black ${user.rank === 1 ? 'text-yellow-500' : 'text-slate-400'}`}>#{user.rank}</span>
                        <div className="w-10 h-10 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center text-xl">{user.avatar}</div>
                        <div>
                          <p className="font-bold text-slate-900 dark:text-white">{user.name}</p>
                          <p className="text-[10px] font-black text-slate-400 uppercase">Productivity Pro</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-black text-slate-900 dark:text-white">{user.score}</p>
                        <p className="text-[10px] font-black text-indigo-500 uppercase">Points</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-100 dark:border-slate-700 shadow-sm flex flex-col justify-center items-center text-center">
                <div className="w-20 h-20 bg-emerald-50 dark:bg-emerald-900/30 rounded-3xl flex items-center justify-center mb-6 border border-emerald-100 dark:border-emerald-800">
                  <Users className="w-10 h-10 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Team Challenges</h3>
                <p className="text-slate-500 mb-8 max-w-[250px]">Join forces with friends to unlock combined weekly rewards!</p>
                <button className="px-8 py-3 bg-indigo-600 text-white rounded-2xl font-black shadow-lg shadow-indigo-200 dark:shadow-none hover:bg-indigo-700 transition-all uppercase tracking-widest text-xs">
                  Browse Squads
                </button>
              </div>
            </div>
          )}

          {/* Rewards (Vault) Content */}
          {activeTab === 'rewards' && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {rewards.map(reward => (
                <div key={reward.id} className={`bg-white dark:bg-slate-800 rounded-3xl p-6 border border-slate-100 dark:border-slate-700 shadow-sm group cursor-pointer ${!reward.unlocked && 'opacity-70'}`}>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${reward.unlocked ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-100 text-slate-400'}`}>
                    <reward.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-black text-slate-900 dark:text-white text-sm mb-1 uppercase tracking-tight">{reward.title}</h4>
                  <div className="flex items-center gap-1.5 mb-4">
                    <Zap className="w-3 h-3 text-yellow-500" />
                    <span className="text-xs font-black text-slate-500">{reward.cost}</span>
                  </div>
                  <button className={`w-full py-2 rounded-xl text-[10px] font-black uppercase transition-all ${reward.unlocked
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'bg-slate-100 text-slate-400 pointer-events-none'
                    }`}>
                    {reward.unlocked ? 'Redeem' : 'Locked'}
                  </button>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Sidebar: Daily Challenges & Power-ups */}
        <div className="space-y-8">

          <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 border border-slate-100 dark:border-slate-700 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-500 opacity-5 rounded-full -mr-8 -mt-8 blur-2xl" />
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">Daily Quests</h3>
              <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
            </div>
            <div className="space-y-6">
              {dailyChallenges.map(challenge => (
                <div key={challenge.id} className="space-y-2">
                  <div className="flex justify-between text-[11px] font-bold">
                    <span className="text-slate-600 dark:text-slate-400 w-2/3">{challenge.task}</span>
                    <span className="text-indigo-600">+{challenge.points} XP</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-indigo-500 h-full rounded-full"
                      style={{ width: `${(challenge.progress / challenge.total) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 rounded-3xl p-6 text-white shadow-xl relative group cursor-pointer overflow-hidden">
            {/* Power-up Card */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-md">
                  <TrendingUp className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-sm font-black uppercase tracking-widest">Active Multiplier</h3>
                  <p className="text-[10px] text-slate-400">Combo: 3 Days</p>
                </div>
              </div>
              <p className="text-2xl font-black mb-4 flex items-baseline gap-2">
                x1.5 <span className="text-xs text-indigo-400 uppercase tracking-widest">Growth</span>
              </p>
              <button className="w-full flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-[10px] font-black uppercase transition-all tracking-widest">
                Claim Bonus Points <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-3xl p-6 border border-indigo-100 dark:border-indigo-800/50 flex flex-col items-center text-center">
            <HelpCircle className="w-8 h-8 text-indigo-400 mb-2 opacity-50" />
            <h4 className="text-[10px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-[0.2em] mb-1">Coming Soon</h4>
            <p className="text-xs text-slate-500 font-bold">New Avatar Customization</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Gamification