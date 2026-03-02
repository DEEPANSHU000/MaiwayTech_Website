export default function StatsBar() {
    return (
        <section className="py-8 md:py-12 relative overflow-hidden border-y border-white/5">
            <div className="absolute inset-0 tech-grid opacity-[0.04]"></div>
            <div className="w-full px-[4%] sm:px-[5%] relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
                    <div className="flex items-center gap-4 group">
                        <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center group-hover:bg-indigo-500 transition-colors duration-300">
                            <span className="material-symbols-outlined text-indigo-400 group-hover:text-white text-3xl">task_alt</span>
                        </div>
                        <div>
                            <span className="text-2xl md:text-4xl font-extrabold text-white block">50+</span>
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Global Projects</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 group">
                        <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center group-hover:bg-purple-600 transition-colors duration-300">
                            <span className="material-symbols-outlined text-purple-400 group-hover:text-white text-3xl">auto_awesome</span>
                        </div>
                        <div>
                            <span className="text-2xl md:text-4xl font-extrabold text-white block">99%</span>
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Model Accuracy</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 group">
                        <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                            <span className="material-symbols-outlined text-blue-400 group-hover:text-white text-3xl">speed</span>
                        </div>
                        <div>
                            <span className="text-2xl md:text-4xl font-extrabold text-white block">10x</span>
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Faster Delivery</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 group">
                        <div className="w-14 h-14 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center group-hover:bg-pink-600 transition-colors duration-300">
                            <span className="material-symbols-outlined text-pink-400 group-hover:text-white text-3xl">support_agent</span>
                        </div>
                        <div>
                            <span className="text-2xl md:text-4xl font-extrabold text-white block">24/7</span>
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Expert Support</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
