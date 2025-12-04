import React, { useEffect, useState } from 'react';

const SkillRadar: React.FC = () => {
    const [animatedPoints, setAnimatedPoints] = useState("");

    // Data for the radar chart
    const skills = [
        { name: 'Backend', value: 95 },
        { name: 'Security', value: 85 },
        { name: 'Cloud', value: 80 },
        { name: 'AI/ML', value: 75 },
        { name: 'Frontend', value: 70 },
        { name: 'DevOps', value: 65 },
    ];

    const size = 300;
    const center = size / 2;
    const radius = 100; // Radius of the chart
    const angleStep = (Math.PI * 2) / skills.length;

    // Calculate vertex coordinates
    const getCoordinates = (value: number, index: number) => {
        const angle = index * angleStep - Math.PI / 2; // Start from top (-90deg)
        const r = (value / 100) * radius;
        const x = center + r * Math.cos(angle);
        const y = center + r * Math.sin(angle);
        return [x, y];
    };

    // Generate the path strings
    const fullPolyPoints = skills.map((_, i) => getCoordinates(100, i).join(',')).join(' ');
    const midPolyPoints = skills.map((_, i) => getCoordinates(50, i).join(',')).join(' ');
    const dataPoints = skills.map((s, i) => getCoordinates(s.value, i).join(',')).join(' ');
    const zeroPoints = skills.map((_, i) => getCoordinates(0, i).join(',')).join(' ');

    // Trigger animation on mount
    useEffect(() => {
        // Start at zero size
        setAnimatedPoints(zeroPoints);

        // Animate to full data size
        const timer = setTimeout(() => {
            setAnimatedPoints(dataPoints);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative flex flex-col items-center justify-center p-6 bg-slate-900/50 rounded-2xl border border-slate-700/50 shadow-xl backdrop-blur-sm">
            <h3 className="text-lg font-bold text-white mb-2 tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                SKILL_METRICS
            </h3>

            <div className="relative w-[300px] h-[300px] animate-fade-in">
                <svg width={size} height={size} className="overflow-visible">
                    {/* Background Grid (Hexagons) */}
                    <polygon points={fullPolyPoints} fill="none" stroke="#1e293b" strokeWidth="1" />
                    <polygon points={midPolyPoints} fill="none" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />

                    {/* Axis Lines */}
                    {skills.map((_, i) => {
                        const [x, y] = getCoordinates(100, i);
                        return (
                            <line
                                key={i}
                                x1={center}
                                y1={center}
                                x2={x}
                                y2={y}
                                stroke="#1e293b"
                                strokeWidth="1"
                            />
                        );
                    })}

                    {/* Data Area */}
                    <polygon
                        points={animatedPoints}
                        fill="rgba(16, 185, 129, 0.2)" // emerald-500/20
                        stroke="rgb(16, 185, 129)" // emerald-500
                        strokeWidth="2"
                        className="transition-all duration-1000 ease-out drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                    />

                    {/* Data Points (Dots) */}
                    {skills.map((s, i) => {
                        // We need to calculate based on the current animated state effectively, 
                        // but for simplicity in SVG we render dots at the final position with delay
                        const [x, y] = getCoordinates(s.value, i);
                        return (
                            <g key={i} className="group cursor-pointer">
                                <circle
                                    cx={x}
                                    cy={y}
                                    r="4"
                                    className="fill-slate-950 stroke-emerald-500 stroke-2 transition-all duration-300 group-hover:r-6 group-hover:fill-emerald-500"
                                />

                                {/* Labels */}
                                <text
                                    x={x}
                                    y={y}
                                    dy={y < center ? -15 : 25}
                                    dx={x < center ? -10 : 10}
                                    textAnchor="middle"
                                    className="fill-slate-400 text-[10px] font-mono uppercase tracking-wider group-hover:fill-white transition-colors"
                                >
                                    {s.name}
                                </text>

                                {/* Tooltip Value on Hover */}
                                <text
                                    x={center}
                                    y={center + 140}
                                    textAnchor="middle"
                                    className="fill-emerald-400 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    {s.name}: {s.value}%
                                </text>
                            </g>
                        );
                    })}
                </svg>
            </div>

            <div className="text-[10px] text-slate-500 mt-[-20px] font-mono">
                System Analysis: High proficiency in backend & security protocols.
            </div>
        </div>
    );
};

export default SkillRadar;
