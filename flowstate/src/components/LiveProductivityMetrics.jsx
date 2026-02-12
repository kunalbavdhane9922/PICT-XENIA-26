import React, { useState, useEffect } from 'react';
import {
  Activity,
  Clock,
  Zap,
  Target
} from 'lucide-react';

const LiveProductivityMetrics = () => {
  const [animatedValues, setAnimatedValues] = useState({
    velocity: 0,
    errorRate: 0,
    idleTime: 0,
    taskDensity: 0
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValues({
        velocity: 85,
        errorRate: 2.1,
        idleTime: 12,
        taskDensity: 4.3
      });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const metrics = [
    {
      title: 'WORK VELOCITY',
      value: animatedValues.velocity,
      unit: 'tasks/hour',
      icon: Zap,
      color: 'blue',
      gradient: 'from-blue-400 to-blue-600'
    },
    {
      title: 'ERROR RATE',
      value: animatedValues.errorRate,
      unit: '%',
      icon: Target,
      color: 'green',
      gradient: 'from-emerald-400 to-emerald-600'
    },
    {
      title: 'IDLE TIME',
      value: animatedValues.idleTime,
      unit: 'min',
      icon: Clock,
      color: 'amber',
      gradient: 'from-amber-400 to-orange-500'
    },
    {
      title: 'TASK DENSITY',
      value: animatedValues.taskDensity,
      unit: 't/h',
      icon: Activity,
      color: 'purple',
      gradient: 'from-purple-400 to-pink-600'
    }
  ];

  const focusData = [
    { time: '11:00', focused: true, intensity: 85 },
    { time: '11:05', focused: true, intensity: 90 },
    { time: '11:10', focused: false, intensity: 45 },
    { time: '11:15', focused: true, intensity: 75 },
    { time: '11:20', focused: true, intensity: 80 },
    { time: '11:25', focused: false, intensity: 50 },
    { time: '11:30', focused: false, intensity: 55 },
    { time: '11:35', focused: true, intensity: 88 },
    { time: '11:40', focused: true, intensity: 92 },
    { time: '11:45', focused: true, intensity: 85 },
    { time: '11:50', focused: true, intensity: 78 },
    { time: '11:55', focused: true, intensity: 95 }
  ];

  const CircularProgress = ({ value, max, color, size = 100 }) => {
    const percentage = Math.min((value / max) * 100, 100);
    const circumference = 2 * Math.PI * 40;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className="relative inline-flex" style={{ width: size, height: size }}>
        <svg className="transform -rotate-90" width={size} height={size}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r="40"
            stroke="currentColor"
            className="text-slate-100 dark:text-slate-700"
            strokeWidth="5"
            fill="none"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r="40"
            stroke={`url(#grad-${color})`}
            strokeWidth="5"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
          <defs>
            <linearGradient id="grad-blue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
            <linearGradient id="grad-green" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
            <linearGradient id="grad-amber" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
            <linearGradient id="grad-purple" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c084fc" />
              <stop offset="100%" stopColor="#9333ea" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 p-8 flex flex-col xl:flex-row gap-8 overflow-hidden">
      {/* Column 1: Metrics */}
      <div className="flex-1">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Live Productivity</h2>
          <div className="px-3 py-1 bg-emerald-50 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 rounded-full text-xs font-bold flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full" />
            87% SCORE
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="bg-slate-50/50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 rounded-2xl p-6 flex flex-col items-center">
                <div className="relative mb-4 flex items-center justify-center">
                  <CircularProgress value={metric.value} max={metric.title.includes('VELOCITY') ? 100 : metric.title.includes('RATE') ? 10 : 60} color={metric.color} />
                  <div className={`absolute w-12 h-12 rounded-full bg-gradient-to-br ${metric.gradient} flex items-center justify-center text-white shadow-lg`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-[10px] font-bold text-slate-400 dark:text-slate-500 mb-1 tracking-widest">{metric.title}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-black text-slate-900 dark:text-white">{metric.value}</span>
                  <span className="text-xs font-bold text-slate-400">{metric.unit}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Column 2: Focus & Heatmap */}
      <div className="flex-1 flex flex-col justify-between py-2">
        <div>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">Focus Wave</h3>
            <div className="flex gap-3 text-[10px] font-black tracking-widest">
              <span className="text-emerald-500">PEAK</span>
              <span className="text-slate-300 dark:text-slate-600">•</span>
              <span className="text-amber-500 uppercase">Lapse</span>
            </div>
          </div>
          <div className="flex items-end justify-between h-32 gap-1.5 px-2">
            {focusData.map((point, index) => (
              <div
                key={index}
                className={`flex-1 rounded-full transition-all duration-700 ${point.focused
                  ? 'bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                  : 'bg-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.2)]'
                  }`}
                style={{ height: `${point.intensity}%` }}
              />
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-lg font-black text-slate-900 dark:text-white mb-6 tracking-tight italic">Intensity Heatmap</h3>
          <div className="grid grid-cols-6 gap-3">
            {focusData.map((point, index) => (
              <div
                key={index}
                className={`aspect-square rounded-full transition-all duration-500 hover:scale-125 cursor-pointer shadow-sm ${point.focused
                  ? 'bg-emerald-500'
                  : 'bg-amber-400'
                  }`}
                style={{ opacity: 0.4 + (point.intensity / 100) * 0.6 }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Column 3: Session Status */}
      <div className="w-full xl:w-64 bg-white rounded-3xl p-8 flex flex-col justify-between text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 opacity-10 rounded-full -mr-16 -mt-16 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-500 opacity-5 rounded-full -ml-12 -mb-12 blur-2xl" />

        <div className="relative z-10">
          <div className="text-5xl font-black text-cyan-400 mb-2 tracking-tighter">12:45</div>
          <div className="text-sm font-black text-slate-400 tracking-[0.2em] uppercase">Remaining</div>
        </div>

        <div className="relative z-10 space-y-2">
          <div className="text-xs font-black text-slate-500 tracking-[0.15em] uppercase">Current Session</div>
          <div className="text-3xl font-black tracking-tight flex items-baseline gap-2">
            45m <span className="text-lg text-slate-400">Active</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveProductivityMetrics;