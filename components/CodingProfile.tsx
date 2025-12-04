import React, { useEffect, useState } from 'react';
import { Code, GitCommit, Coffee, Trophy, Activity } from 'lucide-react';

const CodingProfile: React.FC = () => {
    // Animated counters
    const [counts, setCounts] = useState({ problems: 0, commits: 0, lines: 0, coffee: 0 });

    useEffect(() => {
        const duration = 2000; // ms
        const steps = 50;
        const intervalTime = duration / steps;

        const targets = {
            problems: 50,
            commits: 1280,
            lines: 25000,
            coffee: 365
        };

        let currentStep = 0;

        const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            // Ease-out function
            const ease = 1 - Math.pow(1 - progress, 3);

            setCounts({
                problems: Math.floor(targets.problems * ease),
                commits: Math.floor(targets.commits * ease),
                lines: Math.floor(targets.lines * ease),
                coffee: Math.floor(targets.coffee * ease)
            });

            if (currentStep >= steps) clearInterval(timer);
        }, intervalTime);

        return () => clearInterval(timer);
    }, []);

    // Generate random contribution data for heatmap (simulated)
    const weeks = 20;
    const days = 7;
    const contributionData = Array.from({ length: weeks * days }).map(() => Math.random());

    const getHeatmapColor = (value: number) => {
        // Using dynamic theme colors via class names won't work easily inside inline styles for varied opacity, 
        // so we use Tailwind classes.
        if (value > 0.8) return 'bg-emerald-500';
        if (value > 0.6) return 'bg-emerald-600';
        if (value > 0.4) return 'bg-emerald-700';
        if (value > 0.2) return 'bg-emerald-900';
        return 'bg-slate-800';
    };

    return (
        <section className="py-20 bg-slate-900/50 border-y border-slate-800 relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Stats Grid */}
                    <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-emerald-500/50 transition-all group">
                            <div className="flex items-center gap-3 mb-2">
                                <Trophy className="text-yellow-500 w-5 h-5" />
                                <span className="text-slate-400 text-sm font-medium">Problems Solved</span>
                            </div>
                            <div className="text-3xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                                {counts.problems}+
                            </div>
                            <div className="text-xs text-slate-500 mt-1">LeetCode & Hackerrank</div>
                        </div>

                        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-emerald-500/50 transition-all group">
                            <div className="flex items-center gap-3 mb-2">
                                <GitCommit className="text-blue-500 w-5 h-5" />
                                <span className="text-slate-400 text-sm font-medium">Total Commits</span>
                            </div>
                            <div className="text-3xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                                {counts.commits.toLocaleString()}
                            </div>
                            <div className="text-xs text-slate-500 mt-1">Across 40+ Repositories</div>
                        </div>

                        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-emerald-500/50 transition-all group">
                            <div className="flex items-center gap-3 mb-2">
                                <Code className="text-purple-500 w-5 h-5" />
                                <span className="text-slate-400 text-sm font-medium">Lines of Code</span>
                            </div>
                            <div className="text-3xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                                {counts.lines.toLocaleString()}+
                            </div>
                            <div className="text-xs text-slate-500 mt-1">Java, Python, JS</div>
                        </div>

                        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-emerald-500/50 transition-all group">
                            <div className="flex items-center gap-3 mb-2">
                                <Coffee className="text-amber-700 w-5 h-5" />
                                <span className="text-slate-400 text-sm font-medium">Coffee Consumed</span>
                            </div>
                            <div className="text-3xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                                {counts.coffee}
                            </div>
                            <div className="text-xs text-slate-500 mt-1">Fuel for code</div>
                        </div>
                    </div>

                    {/* Activity Graph */}
                    <div className="lg:w-1/2 bg-slate-900 rounded-xl border border-slate-800 p-6 relative overflow-hidden">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                <Activity className="text-emerald-500 w-5 h-5" />
                                Activity Log
                            </h3>
                            <div className="flex items-center gap-2 text-xs text-slate-500">
                                <span>Less</span>
                                <div className="w-3 h-3 bg-slate-800 rounded-sm"></div>
                                <div className="w-3 h-3 bg-emerald-900 rounded-sm"></div>
                                <div className="w-3 h-3 bg-emerald-600 rounded-sm"></div>
                                <div className="w-3 h-3 bg-emerald-400 rounded-sm"></div>
                                <span>More</span>
                            </div>
                        </div>

                        {/* Heatmap Grid */}
                        <div className="flex gap-1 overflow-hidden mask-fade-right">
                            {Array.from({ length: weeks }).map((_, weekIndex) => (
                                <div key={weekIndex} className="flex flex-col gap-1">
                                    {Array.from({ length: days }).map((_, dayIndex) => {
                                        const intensity = contributionData[weekIndex * days + dayIndex];
                                        return (
                                            <div
                                                key={dayIndex}
                                                className={`w-3 h-3 md:w-4 md:h-4 rounded-sm ${getHeatmapColor(intensity)} hover:scale-125 transition-transform duration-200`}
                                                title={`Contribution Level: ${Math.floor(intensity * 100)}%`}
                                            ></div>
                                        );
                                    })}
                                </div>
                            ))}
                        </div>

                        <div className="mt-4 pt-4 border-t border-slate-800 text-xs text-slate-500 flex justify-between font-mono">
                            <span>Recent Push: AI-Fake News Detection Using BERT (main)</span>
                            <span className="text-emerald-500">2 hours ago</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CodingProfile;
