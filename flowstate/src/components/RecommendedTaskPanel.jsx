import React, { useState, useEffect } from 'react'
import { Sparkles, ArrowRight, Brain, Clock, Zap } from 'lucide-react'

const RecommendedTaskPanel = () => {
    const [recommendedTask, setRecommendedTask] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    // Mock ML Model / Logic
    // In a real scenario, this would fetch from a backend or run a local model
    // based on work velocity, error rates, and energy level.
    useEffect(() => {
        const fakeMLInference = () => {
            setIsLoading(true)
            
            // Simulating a calculation delay
            setTimeout(() => {
                const tasks = [
                    {
                        id: 1,
                        title: 'Draft Project Architecture',
                        reason: 'Your work velocity is high. It is the perfect time for complex structural thinking.',
                        energyRequired: 'High',
                        expectedImpact: 'Major',
                        timeEstimate: '45 mins'
                    },
                    {
                        id: 2,
                        title: 'Review Documentation',
                        reason: 'Error rates are creeping up. Switching to a medium-complexity verification task is advised.',
                        energyRequired: 'Medium',
                        expectedImpact: 'Stability',
                        timeEstimate: '20 mins'
                    },
                    {
                        id: 3,
                        title: 'Organize Workspace',
                        reason: 'Velocity has dropped significantly. A low-complexity physical reset task will help recover.',
                        energyRequired: 'Low',
                        expectedImpact: 'Clarity',
                        timeEstimate: '10 mins'
                    }
                ]

                // Fake "Inference": Pick based on "simulated" current state
                // We'll pick index 0 (High complexity) for this demo
                setRecommendedTask(tasks[0])
                setIsLoading(false)
            }, 1500)
        }

        fakeMLInference()
    }, [])

    if (isLoading) {
        return (
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 animate-pulse">
                <div className="flex items-center space-x-2 mb-4">
                    <div className="w-5 h-5 bg-slate-200 dark:bg-slate-700 rounded-full" />
                    <div className="h-4 w-40 bg-slate-200 dark:bg-slate-700 rounded" />
                </div>
                <div className="h-6 w-3/4 bg-slate-200 dark:bg-slate-700 rounded mb-2" />
                <div className="h-4 w-full bg-slate-200 dark:bg-slate-700 rounded" />
            </div>
        )
    }

    return (
        <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-blue-600 to-indigo-700 rounded-xl shadow-xl border border-indigo-500/20 p-6 text-white group">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700" />
            <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 bg-indigo-400/20 rounded-full blur-3xl" />

            <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                        <div className="bg-white/20 p-2 rounded-lg backdrop-blur-md">
                            <Sparkles className="w-5 h-5 text-yellow-300" />
                        </div>
                        <span className="font-bold text-sm tracking-widest uppercase text-indigo-100">AI Recommended Next Task</span>
                    </div>
                    <div className="flex items-center space-x-1 px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm border border-white/10">
                        <Brain className="w-3.5 h-3.5" />
                        <span className="text-[10px] font-bold">ML OPTIMIZED</span>
                    </div>
                </div>

                <div className="mb-6">
                    <h3 className="text-2xl font-extrabold mb-2 leading-tight">
                        {recommendedTask?.title}
                    </h3>
                    <p className="text-indigo-100/90 text-sm leading-relaxed">
                        {recommendedTask?.reason}
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-white/10 rounded-lg p-2 backdrop-blur-sm border border-white/5">
                        <div className="flex items-center space-x-1 text-indigo-200 mb-1">
                            <Zap className="w-3 h-3" />
                            <span className="text-[10px] uppercase font-bold">Energy</span>
                        </div>
                        <span className="text-sm font-bold">{recommendedTask?.energyRequired}</span>
                    </div>
                    <div className="bg-white/10 rounded-lg p-2 backdrop-blur-sm border border-white/5">
                        <div className="flex items-center space-x-1 text-indigo-200 mb-1">
                            <Clock className="w-3 h-3" />
                            <span className="text-[10px] uppercase font-bold">Time</span>
                        </div>
                        <span className="text-sm font-bold">{recommendedTask?.timeEstimate}</span>
                    </div>
                    <div className="bg-white/10 rounded-lg p-2 backdrop-blur-sm border border-white/5">
                        <div className="flex items-center space-x-1 text-indigo-100 mb-1">
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                            <span className="text-[10px] uppercase font-bold">Priority</span>
                        </div>
                        <span className="text-sm font-bold">{recommendedTask?.expectedImpact}</span>
                    </div>
                </div>

                <button className="w-full bg-white text-indigo-700 py-3 rounded-lg font-bold flex items-center justify-center space-x-2 hover:bg-slate-50 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg">
                    <span>Start This Task Now</span>
                    <ArrowRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    )
}

export default RecommendedTaskPanel
