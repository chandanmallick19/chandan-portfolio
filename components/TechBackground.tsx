import React, { useEffect, useRef } from 'react';

interface TechBackgroundProps {
    theme: 'blue' | 'red';
}

const TechBackground: React.FC<TechBackgroundProps> = ({ theme }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const characters = '01'; // Binary for cybersecurity theme
        const fontSize = 14;
        const columns = width / fontSize;
        const drops: number[] = [];

        // Initialize drops
        for (let i = 0; i < columns; i++) {
            drops[i] = Math.random() * -100; // Randomize start positions
        }

        const draw = () => {
            // Semi-transparent black to create fade trail effect
            ctx.fillStyle = 'rgba(2, 6, 23, 0.05)';
            ctx.fillRect(0, 0, width, height);

            // Color based on theme
            ctx.fillStyle = theme === 'blue' ? '#059669' : '#dc2626'; // Emerald-600 vs Red-600
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = characters.charAt(Math.floor(Math.random() * characters.length));
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                // Reset drop to top randomly
                if (drops[i] * fontSize > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        const interval = setInterval(draw, 50);

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener('resize', handleResize);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', handleResize);
        };
    }, [theme]); // Re-run effect when theme changes

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none -z-20 opacity-[0.15]" // Low opacity for subtlety
        />
    );
};

export default TechBackground;