import React from 'react';
import { ShieldAlert, Unlock, Download, X } from 'lucide-react';

interface GodModeModalProps {
    onClose: () => void;
}

const GodModeModal: React.FC<GodModeModalProps> = ({ onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fade-in">
            <div className="w-full max-w-lg bg-slate-900 border-2 border-red-500 rounded-lg shadow-[0_0_50px_rgba(239,68,68,0.5)] overflow-hidden relative">

                {/* Header */}
                <div className="bg-red-600 px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-white font-mono font-bold">
                        <ShieldAlert className="w-5 h-5 animate-pulse" />
                        <span>ADMIN_ACCESS_GRANTED</span>
                    </div>
                    <button onClick={onClose} className="text-white hover:bg-red-700 rounded p-1">
                        <X size={20} />
                    </button>
                </div>

                {/* Body */}
                <div className="p-8 text-center space-y-6">
                    <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mx-auto border border-red-500/50">
                        <Unlock className="w-10 h-10 text-red-500" />
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold text-white">God Mode Activated</h2>
                        <p className="text-slate-400">
                            Konami code accepted. You have unlocked the classified version of my resume.
                        </p>
                    </div>

                    <div className="bg-slate-950 p-4 rounded border border-slate-800 font-mono text-xs text-left text-green-500">
                        <p> Accessing secure mainframe...</p>
                        <p> Decrypting user_profile...</p>
                        <p> Bypass successful.</p>
                        <p> Ready for transfer.</p>
                    </div>

                    <button className="w-full py-3 bg-red-600 hover:bg-red-500 text-white font-bold rounded flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-red-500/25">
                        <Download size={18} />
                        DOWNLOAD CLASSIFIED RESUME
                    </button>
                </div>

                {/* Scanlines Overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-10 bg-[url('https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif')] bg-cover mix-blend-overlay"></div>
            </div>
        </div>
    );
};

export default GodModeModal;