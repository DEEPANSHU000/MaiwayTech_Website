export default function Process() {
    return (
        <section className="py-28 relative overflow-hidden border-t border-white/5">
            <div className="absolute inset-0 tech-grid opacity-[0.05]"></div>
            <div className="w-full px-[4%] sm:px-[5%] relative z-10">
                <div className="text-center mb-24">
                    <span className="gradient-text-vibrant font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Execution Lifecycle</span>
                    <h2 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">How We Deliver Results</h2>
                </div>
                <div className="relative flex flex-col md:flex-row justify-between items-start gap-12">
                    <div className="flex-1 flex flex-col items-center text-center group">
                        <div className="relative w-56 h-56 mb-10 flex items-center justify-center">
                            <div className="absolute inset-0 bg-white/5 border border-white/10 rounded-full group-hover:scale-110 transition-transform"></div>
                            <div className="absolute inset-0 bg-indigo-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative z-10">
                                <span className="material-symbols-outlined text-indigo-400 drop-shadow-xl" style={{ fontSize: '100px' }}>database_upload</span>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <span className="text-indigo-400/40 font-black text-6xl block">01</span>
                            <h3 className="text-2xl font-bold text-white">Data Ingestion</h3>
                            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">Building seamless automated pipelines to aggregate and clean proprietary data assets.</p>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col items-center text-center group pt-12 md:pt-24">
                        <div className="relative w-64 h-64 mb-10 flex items-center justify-center">
                            <div className="absolute inset-0 bg-white/5 border border-white/10 rounded-full group-hover:scale-110 transition-transform"></div>
                            <div className="absolute inset-0 bg-purple-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative z-10">
                                <span className="material-symbols-outlined text-purple-400" style={{ fontSize: '120px' }}>hub</span>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <span className="text-purple-400/40 font-black text-6xl block">02</span>
                            <h3 className="text-2xl font-bold text-white">Model Training</h3>
                            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">Fine-tuning high-performance neural networks specialized for your unique logic.</p>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col items-center text-center group">
                        <div className="relative w-56 h-56 mb-10 flex items-center justify-center">
                            <div className="absolute inset-0 bg-white/5 border border-white/10 rounded-full group-hover:scale-110 transition-transform"></div>
                            <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative z-10">
                                <span className="material-symbols-outlined text-blue-400 drop-shadow-xl" style={{ fontSize: '100px' }}>cloud_done</span>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <span className="text-blue-400/40 font-black text-6xl block">03</span>
                            <h3 className="text-2xl font-bold text-white">Deployment</h3>
                            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">Scaling to secure cloud environments with real-time performance monitoring.</p>
                        </div>
                    </div>
                    <div className="hidden md:block absolute top-[20%] left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10"></div>
                </div>
            </div>
        </section>
    )
}
