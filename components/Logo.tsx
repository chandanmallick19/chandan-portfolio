import React from 'react';

interface LogoProps {
    className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10" }) => {
    return (
        <svg
            viewBox="0 0 100 100"
            className={className}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="CKM Logo"
        >
            {/* Glow Effect */}
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>

            {/* Hexagon Shield Outline */}
            <path
                d="M50 5 L89 27.5 V72.5 L50 95 L11 72.5 V27.5 Z"
                stroke="#10b981"
                strokeWidth="3"
                fill="rgba(15, 23, 42, 0.8)"
                strokeLinejoin="round"
            />

            {/* Inner Circuit Connections */}
            <g filter="url(#glow)">
                {/* Center Node */}
                <circle cx="50" cy="50" r="6" fill="#10b981" className="animate-pulse" />

                {/* Connection Lines */}
                <path d="M50 50 L50 80" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M50 50 L24 35" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M50 50 L76 35" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" />

                {/* Outer Nodes */}
                <circle cx="50" cy="80" r="3" fill="#3b82f6" />
                <circle cx="24" cy="35" r="3" fill="#3b82f6" />
                <circle cx="76" cy="35" r="3" fill="#3b82f6" />
            </g>
        </svg>
    );
};

export default Logo;