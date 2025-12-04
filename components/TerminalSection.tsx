import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Minus, Square, Maximize2, RefreshCw } from 'lucide-react';
import { PROFILE, SKILLS, PROJECTS, EDUCATION } from '../constants';

interface CommandHistory {
    id: number;
    command: string;
    output: React.ReactNode;
}

const TerminalSection: React.FC = () => {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState<CommandHistory[]>([]);
    const [isBooting, setIsBooting] = useState(true);
    const inputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Boot sequence animation
    useEffect(() => {
        const bootSequence = [
            { text: "Initializing CKM-OS Kernel v1.0.0...", delay: 500 },
            { text: "Loading modules: [PROFILE, SKILLS, PROJECTS]... OK", delay: 1200 },
            { text: "Mounting file system... OK", delay: 1800 },
            { text: "Starting shell session...", delay: 2400 },
        ];

        let timeouts: number[] = [];

        bootSequence.forEach(({ text, delay }) => {
            const timeout = window.setTimeout(() => {
                setHistory(prev => [...prev, {
                    id: Date.now(),
                    command: 'SYSTEM_BOOT',
                    output: <span className="text-slate-400 font-mono text-xs">{text}</span>
                }]);
            }, delay);
            timeouts.push(timeout);
        });

        const finalTimeout = window.setTimeout(() => {
            setIsBooting(false);
            setHistory(prev => [
                ...prev,
                {
                    id: Date.now(),
                    command: 'banner',
                    output: (
                        <div className="mb-4 animate-fade-in">
                            <pre className="text-[10px] md:text-xs leading-tight font-bold text-emerald-500 select-none">
                                {`
   ______  __ __  __  __
  / ____/ / //_/ /  |/  /
 / /     / ,<   / /|_/ / 
/ /___  / /| | / /  / /  
\\____/ /_/ |_|/_/  /_/   
`}
                            </pre>
                            <p className="mt-2 text-slate-300">Welcome to Chandan's Interactive Portfolio.</p>
                            <p className="text-slate-400">Type <span className="text-yellow-400">'help'</span> to view available commands.</p>
                            <p className="text-slate-500 text-xs mt-1">Hint: Try 'ls' to list files.</p>
                        </div>
                    )
                }
            ]);
        }, 3000);
        timeouts.push(finalTimeout);

        return () => timeouts.forEach(clearTimeout);
    }, []);

    const scrollToBottom = () => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [history, isBooting]);

    const focusInput = () => {
        if (!isBooting) {
            inputRef.current?.focus();
        }
    };

    const executeCommand = (cmd: string) => {
        const trimmedCmd = cmd.trim();
        const [command, ...args] = trimmedCmd.split(' ');
        const arg = args.join(' ');

        let output: React.ReactNode;

        switch (command.toLowerCase()) {
            case 'help':
                output = (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-slate-300 text-sm">
                        <div><span className="text-yellow-400 font-bold">ls</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- List directory contents</div>
                        <div><span className="text-yellow-400 font-bold">cat</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Read a file (e.g., cat about.txt)</div>
                        <div><span className="text-yellow-400 font-bold">whoami</span> &nbsp;&nbsp;&nbsp;- Display profile info</div>
                        <div><span className="text-yellow-400 font-bold">skills</span> &nbsp;&nbsp;&nbsp;- List technical skills</div>
                        <div><span className="text-yellow-400 font-bold">projects</span> &nbsp;- View top projects</div>
                        <div><span className="text-yellow-400 font-bold">resume</span> &nbsp;&nbsp;&nbsp;- Download/View Resume</div>
                        <div><span className="text-yellow-400 font-bold">contact</span> &nbsp;&nbsp;- Show contact info</div>
                        <div><span className="text-yellow-400 font-bold">clear</span> &nbsp;&nbsp;&nbsp;&nbsp;- Clear terminal screen</div>
                        <div><span className="text-yellow-400 font-bold">date</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Show current date</div>
                    </div>
                );
                break;

            case 'ls':
                output = (
                    <div className="flex flex-wrap gap-6 text-sm">
                        <span className="text-blue-400 font-bold">about.txt</span>
                        <span className="text-yellow-400 font-bold">skills.json</span>
                        <span className="text-emerald-400 font-bold">projects.md</span>
                        <span className="text-red-400 font-bold">resume.pdf</span>
                        <span className="text-purple-400 font-bold">education.log</span>
                        <span className="text-slate-300">contact.info</span>
                    </div>
                );
                break;

            case 'cat':
                if (!arg) {
                    output = <span className="text-red-400">Usage: cat [filename] (hint: try 'ls' first)</span>;
                } else {
                    switch (arg) {
                        case 'about.txt':
                            output = executeCommand('whoami'); // Reuse logic
                            break;
                        case 'skills.json':
                            output = executeCommand('skills');
                            break;
                        case 'projects.md':
                            output = executeCommand('projects');
                            break;
                        case 'resume.pdf':
                            output = executeCommand('resume');
                            break;
                        case 'education.log':
                            output = executeCommand('education');
                            break;
                        case 'contact.info':
                            output = executeCommand('contact');
                            break;
                        default:
                            output = <span className="text-red-400">cat: {arg}: No such file or directory</span>;
                    }
                    // If we reused logic, executeCommand returns a Node directly, we need to handle that carefully
                    // Actually, recursively calling executeCommand in a functional way is tricky if it returns the full history object logic.
                    // Let's simplified: manually set output for these.
                    if (arg === 'about.txt') output = (
                        <div className="text-slate-300 max-w-2xl">
                            <p>User: <span className="text-emerald-400 font-bold">{PROFILE.name}</span></p>
                            <p className="mt-1">{PROFILE.summary}</p>
                        </div>
                    );
                }
                break;

            case 'whoami':
                output = (
                    <div className="text-slate-300">
                        <p>User: <span className="text-emerald-400 font-bold">{PROFILE.name}</span></p>
                        <p>Role: {PROFILE.tagline}</p>
                        <p>Location: {PROFILE.location}</p>
                        <p className="mt-2 text-xs text-slate-500 italic">"I harness the power of data to craft impactful visualizations."</p>
                    </div>
                );
                break;

            case 'skills':
                output = (
                    <div className="space-y-2 text-slate-300">
                        {SKILLS.map(cat => (
                            <div key={cat.title}>
                                <span className="text-blue-400 font-bold">[{cat.title}]:</span>{' '}
                                <span className="text-slate-400">{cat.skills.join(', ')}</span>
                            </div>
                        ))}
                    </div>
                );
                break;

            case 'projects':
                output = (
                    <div className="space-y-3">
                        <p className="text-slate-400 mb-2">Listing top directories...</p>
                        {PROJECTS.slice(0, 3).map((p, i) => (
                            <div key={i} className="pl-2 border-l-2 border-emerald-500/30">
                                <div className="text-emerald-400 font-bold">{p.title}</div>
                                <div className="text-xs text-slate-500">{p.description.substring(0, 100)}...</div>
                                <a href={p.link} target="_blank" rel="noreferrer" className="text-xs text-blue-400 hover:underline">[View Source]</a>
                            </div>
                        ))}
                        <p className="text-xs text-slate-500 mt-2">Type 'cat projects.md' for full list in GUI.</p>
                    </div>
                );
                break;

            case 'education':
                output = (
                    <div className="space-y-2">
                        {EDUCATION.map((edu, i) => (
                            <div key={i}>
                                <span className="text-yellow-400">[{edu.year}]</span> <span className="font-bold text-slate-200">{edu.institution}</span>
                                <div className="text-slate-400 text-xs pl-4">- {edu.degree}</div>
                            </div>
                        ))}
                    </div>
                );
                break;

            case 'resume':
                output = (
                    <div className="text-slate-300">
                        <p className="animate-pulse text-emerald-500">Initiating secure download...</p>
                        <div className="w-48 h-2 bg-slate-700 rounded mt-2 overflow-hidden">
                            <div className="h-full bg-emerald-500 animate-[slideUp_1s_ease-out] w-full origin-left"></div>
                        </div>
                        <p className="mt-2 text-xs">Download complete.</p>
                        <a href="#" className="text-blue-400 hover:underline flex items-center gap-1 mt-1 font-bold">
                            Download CV.pdf
                        </a>
                    </div>
                );
                break;

            case 'socials':
                output = (
                    <div className="flex flex-col gap-1 pl-2">
                        <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline w-fit">LinkedIn: /in/chandanmallick19</a>
                        <a href={PROFILE.github} target="_blank" rel="noreferrer" className="text-purple-400 hover:underline w-fit">GitHub: /chandanmallick19</a>
                        <a href={PROFILE.blog} target="_blank" rel="noreferrer" className="text-orange-400 hover:underline w-fit">Blog: chandanmallick19.blogspot.com</a>
                    </div>
                );
                break;

            case 'contact':
                output = (
                    <div className="text-slate-300">
                        <p>Email: <a href={`mailto:${PROFILE.email}`} className="text-emerald-400 hover:underline">{PROFILE.email}</a></p>
                        <p>Phone: {PROFILE.phone}</p>
                        <p>Status: <span className="text-green-500">Open to opportunities</span></p>
                    </div>
                );
                break;

            case 'date':
                output = <span className="text-slate-300">{new Date().toString()}</span>;
                break;

            case 'sudo':
                output = <span className="text-red-400 font-bold">Permission denied: You are not in the sudoers file. This incident will be reported.</span>;
                break;

            case 'rm':
                output = <span className="text-red-500 font-bold">I'm sorry Dave, I'm afraid I can't do that.</span>;
                break;

            case 'clear':
                setHistory([]);
                return null; // Special case handled in handleKeyDown

            case '':
                output = null;
                break;

            default:
                output = (
                    <span className="text-red-400">
                        Command not found: '{command}'. Type <span className="text-yellow-400">'help'</span> for list.
                    </span>
                );
        }

        return output;
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const output = executeCommand(input);

            if (input.trim().toLowerCase() === 'clear') {
                setHistory([]);
            } else {
                setHistory(prev => [...prev, {
                    id: Date.now(),
                    command: input,
                    output: output
                }]);
            }

            setInput('');
        }
    };

    return (
        <section className="py-20 bg-slate-950 scroll-mt-24" id="terminal">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold text-white mb-12 flex items-center justify-center">
                    <span className="text-emerald-400 mr-2 text-2xl md:text-3xl">_&gt;</span> Interactive Terminal
                </h2>

                <div className="max-w-4xl mx-auto bg-[#0d1117] rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-slate-800 overflow-hidden font-mono text-sm md:text-base relative group">

                    {/* Terminal Header */}
                    <div className="bg-[#161b22] px-4 py-3 flex items-center justify-between border-b border-slate-800 sticky top-0 z-10">
                        <div className="flex items-center gap-2 text-slate-400 select-none">
                            <TerminalIcon size={14} className="text-emerald-500" />
                            <span className="text-xs font-medium">guest@ckm-portfolio:~</span>
                        </div>
                        <div className="flex gap-2 group-hover:opacity-100 opacity-60 transition-opacity">
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 cursor-pointer"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 cursor-pointer"></div>
                            <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 cursor-pointer"></div>
                        </div>
                    </div>

                    {/* Terminal Body */}
                    <div
                        ref={containerRef}
                        className="p-4 md:p-6 h-[400px] md:h-[500px] overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent bg-[#0d1117] text-slate-200 cursor-text"
                        onClick={focusInput}
                    >
                        {/* History Output */}
                        {history.map((entry) => (
                            <div key={entry.id} className="mb-2 break-words">
                                {entry.command !== 'SYSTEM_BOOT' && entry.command !== 'banner' && (
                                    <div className="flex items-center gap-2 mb-1 text-slate-400">
                                        <span className="text-emerald-500 font-bold shrink-0 select-none">guest@ckm:~$</span>
                                        <span className="text-white">{entry.command}</span>
                                    </div>
                                )}
                                <div className="ml-0 md:ml-0 text-slate-300 leading-relaxed">{entry.output}</div>
                            </div>
                        ))}

                        {/* Active Input Line */}
                        {!isBooting && (
                            <div className="flex flex-wrap items-center gap-x-2 mt-2">
                                <span className="text-emerald-500 font-bold shrink-0 select-none">guest@ckm:~$</span>
                                <div className="relative flex-1 min-w-[100px] break-all">
                                    {/* Visual Input Display with Custom Cursor */}
                                    <span className="whitespace-pre-wrap">{input}</span>
                                    <span className="inline-block w-2.5 h-5 bg-slate-400 animate-pulse align-middle ml-[1px] mb-1"></span>

                                    {/* Hidden Real Input */}
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        onKeyDown={handleKeyDown}
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-text"
                                        autoComplete="off"
                                        autoCapitalize="none"
                                        spellCheck="false"
                                    />
                                </div>
                            </div>
                        )}

                        {isBooting && (
                            <div className="mt-2 text-emerald-500/50 animate-pulse text-xs">_</div>
                        )}
                    </div>
                </div>

                <p className="text-center text-slate-600 text-xs mt-4">
                    Pro tip: Click inside the terminal to type. Use <span className="text-slate-400">'help'</span> to explore.
                </p>
            </div>
        </section>
    );
};

export default TerminalSection;