export default function GlobalImpact() {
    return (
        <section className="py-32 relative overflow-hidden bg-black text-white">
            <div className="absolute inset-0 tech-grid opacity-[0.05]"></div>
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <span className="text-primary font-bold text-xs uppercase tracking-[0.4em] mb-6 block">Our Impact is Global</span>
                        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-10 leading-tight">Connecting Intelligence <br /> Across Continents</h2>
                        <p className="text-slate-400 text-xl leading-relaxed mb-12">Headquartered in India with a strong footprint in the US, Europe, and Asia. We build the digital infrastructure for 24/7 global transformation.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="bg-[#111111] p-6 rounded-none border border-slate-800 hover:bg-[#1a1a1a] transition-colors">
                                <span className="material-symbols-outlined text-primary text-3xl mb-4">public</span>
                                <h4 className="font-bold text-lg mb-2">Hybrid Delivery</h4>
                                <p className="text-slate-500 text-sm">Synchronized workflows across all global timezones.</p>
                            </div>
                            <div className="bg-[#111111] p-6 rounded-none border border-slate-800 hover:bg-[#1a1a1a] transition-colors">
                                <span className="material-symbols-outlined text-accent text-3xl mb-4">language</span>
                                <h4 className="font-bold text-lg mb-2">Localized Models</h4>
                                <p className="text-slate-500 text-sm">AI trained for regional nuances and regulations.</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex justify-center">
                        <div className="relative w-full aspect-square max-w-[550px] border border-slate-800 rounded-full flex items-center justify-center p-12 bg-black">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.05)_0%,transparent_70%)] animate-pulse"></div>
                            <div className="relative w-full h-full border border-slate-800 rounded-full">
                                <svg className="w-full h-full opacity-30" viewBox="0 0 100 100">
                                    <circle cx="50" cy="50" fill="none" r="45" stroke="currentColor" strokeDasharray="1 3" strokeWidth="0.5"></circle>
                                    <circle cx="50" cy="50" fill="none" r="30" stroke="currentColor" strokeDasharray="1 3" strokeWidth="0.5"></circle>
                                    <path d="M50 5 L50 95 M5 50 L95 50" stroke="currentColor" strokeWidth="0.1"></path>
                                    <path d="M30 40 Q 50 20 75 55" fill="none" stroke="#00ffff" strokeDasharray="1 2" strokeWidth="0.2"></path>
                                    <path d="M25 65 Q 45 80 80 30" fill="none" stroke="#ff00ff" strokeDasharray="1 2" strokeWidth="0.2"></path>
                                </svg>
                                <div className="map-dot" style={{ top: '35%', left: '25%' }}></div>
                                <div className="map-dot" style={{ top: '45%', left: '75%', animationDelay: '0.5s' }}></div>
                                <div className="map-dot" style={{ top: '70%', left: '45%', animationDelay: '1s' }}></div>
                                <div className="map-dot" style={{ top: '25%', left: '60%', animationDelay: '1.5s' }}></div>
                                <div className="map-dot" style={{ top: '60%', left: '15%', animationDelay: '2s' }}></div>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="material-symbols-outlined text-[160px] text-primary/[0.02] blur-sm">public</span>
                                <span className="material-symbols-outlined text-[140px] text-primary/[0.05] absolute">public</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
