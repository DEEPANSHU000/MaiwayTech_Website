export default function Services() {
    return (
        <section className="w-full px-[4%] sm:px-[5%] py-28 relative border-t border-white/5">
            <div className="absolute inset-0 tech-grid opacity-[0.02] pointer-events-none"></div>
            <div className="flex flex-col items-center text-center gap-4 mb-20">
                <span className="gradient-text-vibrant font-black text-sm uppercase tracking-[0.25em]">Core Practices &amp; Services</span>
                <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
                    <span className="gradient-text-vibrant">Strategy, Technology &amp; Growth</span>— Built to <br /> Work Together
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
                {/* Business Consulting Card */}
                <div className="lg:col-span-6 group p-10 rounded-[3rem] bg-white/4 border border-white/8 hover:border-indigo-500/30 hover:bg-white/6 transition-all flex flex-col relative overflow-hidden min-h-[580px]">
                    <div className="relative z-10">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h3 className="text-white text-3xl font-extrabold mb-3">Business Consulting</h3>
                                <p className="text-slate-400 text-sm leading-relaxed max-w-sm">Strategic growth engines through data-backed GTM plans and refined operational excellence.</p>
                            </div>
                            <span className="material-symbols-outlined text-indigo-400 text-3xl bg-indigo-500/10 border border-indigo-500/20 p-4 rounded-2xl group-hover:scale-110 transition-transform">corporate_fare</span>
                        </div>
                        <div className="grid grid-cols-2 gap-3 mt-4 mb-10">
                            <div className="feature-bullet"><span className="material-symbols-outlined text-[16px] text-blue-500">trending_up</span> Go-To-Market</div>
                            <div className="feature-bullet"><span className="material-symbols-outlined text-[16px] text-blue-500">groups</span> Org Design</div>
                            <div className="feature-bullet"><span className="material-symbols-outlined text-[16px] text-blue-500">receipt_long</span> Financial Models</div>
                            <div className="feature-bullet"><span className="material-symbols-outlined text-[16px] text-blue-500">rocket_launch</span> Scaling Strategy</div>
                        </div>
                    </div>
                    <div className="mt-auto relative w-full h-[280px] card-3d-scene flex justify-center">
                        <div className="absolute bottom-0 w-full max-w-[400px] h-[220px] bg-slate-50 rounded-2xl border border-slate-200 shadow-xl overflow-hidden" style={{ transform: 'perspective(1200px) rotateX(12deg) rotateY(-5deg)' }}>
                            <div className="absolute inset-0 tech-grid opacity-10"></div>
                            <div className="absolute top-8 left-8 w-24 h-32 bg-white rounded-lg border border-slate-200 shadow-md p-3" style={{ transform: 'rotate(-12deg)' }}>
                                <div className="h-1 w-full bg-slate-100 mb-2"></div>
                                <div className="h-1 w-3/4 bg-slate-100 mb-4"></div>
                                <div className="h-12 w-full bg-blue-50 rounded flex flex-col justify-center gap-1 px-1">
                                    <div className="h-0.5 w-full bg-blue-200"></div>
                                    <div className="h-0.5 w-2/3 bg-blue-200"></div>
                                </div>
                            </div>
                            <div className="absolute top-12 right-12 w-32 h-24 bg-white rounded-lg border border-slate-200 shadow-md p-4" style={{ transform: 'rotate(6deg)' }}>
                                <div className="flex gap-1 mb-4">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                                </div>
                                <div className="h-10 w-full bg-purple-50 rounded flex items-center justify-center">
                                    <span className="material-symbols-outlined text-purple-400 text-xl">query_stats</span>
                                </div>
                            </div>
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-48 h-12 bg-white rounded-full border border-slate-200 shadow-lg flex items-center justify-between px-4">
                                <div className="flex -space-x-2">
                                    <div className="w-6 h-6 rounded-full bg-blue-100 border-2 border-white"></div>
                                    <div className="w-6 h-6 rounded-full bg-purple-100 border-2 border-white"></div>
                                    <div className="w-6 h-6 rounded-full bg-pink-100 border-2 border-white"></div>
                                </div>
                                <div className="h-2 w-16 bg-slate-100 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* IT & Digital Transformation Card */}
                <div className="lg:col-span-6 group p-10 rounded-[3rem] bg-white/4 border border-white/8 hover:border-purple-500/30 hover:bg-white/6 transition-all flex flex-col relative overflow-hidden min-h-[580px]">
                    <div className="relative z-10">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h3 className="text-white text-3xl font-extrabold mb-3">IT &amp; Digital Transformation</h3>
                                <p className="text-slate-400 text-sm leading-relaxed max-w-sm">Architecting resilient, cloud-first infrastructures for hyper-connected enterprises.</p>
                            </div>
                            <span className="material-symbols-outlined text-purple-400 text-3xl bg-purple-500/10 border border-purple-500/20 p-4 rounded-2xl group-hover:scale-110 transition-transform">cloud_sync</span>
                        </div>
                        <div className="grid grid-cols-2 gap-3 mt-4 mb-10">
                            <div className="feature-bullet"><span className="material-symbols-outlined text-[16px] text-indigo-500">settings_suggest</span> ERP/CRM Hubs</div>
                            <div className="feature-bullet"><span className="material-symbols-outlined text-[16px] text-indigo-500">terminal</span> Modern Stacks</div>
                            <div className="feature-bullet"><span className="material-symbols-outlined text-[16px] text-indigo-500">security</span> Zero-Trust Security</div>
                            <div className="feature-bullet"><span className="material-symbols-outlined text-[16px] text-indigo-500">dns</span> Cloud Native</div>
                        </div>
                    </div>
                    <div className="mt-auto relative w-full h-[280px] card-3d-scene flex justify-center">
                        <div className="absolute bottom-0 w-full max-w-[400px] h-[220px] bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden p-6" style={{ transform: 'perspective(1200px) rotateX(12deg) rotateY(5deg)' }}>
                            <div className="grid grid-cols-3 gap-4 h-full">
                                <div className="space-y-3">
                                    <div className="h-2 w-full bg-slate-800 rounded"></div>
                                    <div className="h-32 bg-slate-800/50 rounded-lg border border-slate-700 flex flex-col items-center justify-center gap-2 group-hover:border-indigo-500 transition-colors">
                                        <span className="material-symbols-outlined text-indigo-400 text-4xl">storage</span>
                                        <div className="w-8 h-1 bg-indigo-500/30 rounded"></div>
                                    </div>
                                </div>
                                <div className="space-y-3 pt-6">
                                    <div className="h-2 w-full bg-slate-800 rounded"></div>
                                    <div className="h-32 bg-slate-800/50 rounded-lg border border-slate-700 flex flex-col items-center justify-center gap-2 group-hover:border-purple-500 transition-colors">
                                        <span className="material-symbols-outlined text-purple-400 text-4xl">lan</span>
                                        <div className="w-8 h-1 bg-purple-500/30 rounded"></div>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="h-2 w-full bg-slate-800 rounded"></div>
                                    <div className="h-32 bg-slate-800/50 rounded-lg border border-slate-700 flex flex-col items-center justify-center gap-2 group-hover:border-blue-500 transition-colors">
                                        <span className="material-symbols-outlined text-blue-400 text-4xl">router</span>
                                        <div className="w-8 h-1 bg-blue-500/30 rounded"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
                        </div>
                    </div>
                </div>

                {/* AI/ML & Analytics Card */}
                <div className="lg:col-span-12 group p-12 rounded-[4rem] bg-white/4 border border-white/8 hover:border-purple-500/30 transition-all flex flex-col lg:flex-row items-center gap-16 relative overflow-hidden min-h-[500px]">
                    <div className="absolute inset-0 tech-grid opacity-[0.08]"></div>
                    <div className="relative z-10 flex-1">
                        <div className="flex items-center gap-5 mb-8">
                            <span className="material-symbols-outlined text-purple-400 bg-white/10 border border-purple-500/20 p-5 rounded-[2rem]" style={{ fontSize: '48px' }}>psychology</span>
                            <h3 className="text-white font-extrabold tracking-tight" style={{ fontSize: '48px' }}>AI/ML &amp; Analytics</h3>
                        </div>
                        <p className="text-slate-400 leading-relaxed max-w-xl mb-10" style={{ fontSize: '20px' }}>Deploying practical agentic workflows and predictive engines that automate complexity and fuel compounding growth.</p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <div className="feature-bullet"><span className="material-symbols-outlined text-purple-500" style={{ fontSize: '18px' }}>hub</span> NLP &amp; LLM Fine-tuning</div>
                            <div className="feature-bullet"><span className="material-symbols-outlined text-purple-500" style={{ fontSize: '18px' }}>model_training</span> Predictive Modeling</div>
                            <div className="feature-bullet"><span className="material-symbols-outlined text-purple-500" style={{ fontSize: '18px' }}>database</span> Robust Data Pipelines</div>
                            <div className="feature-bullet"><span className="material-symbols-outlined text-purple-500" style={{ fontSize: '18px' }}>smart_toy</span> Multi-Agent Systems</div>
                            <div className="feature-bullet"><span className="material-symbols-outlined text-purple-500" style={{ fontSize: '18px' }}>visibility</span> Computer Vision</div>
                            <div className="feature-bullet"><span className="material-symbols-outlined text-purple-500" style={{ fontSize: '18px' }}>auto_awesome</span> Intelligent Automation</div>
                        </div>
                    </div>
                    <div className="flex-1 w-full flex justify-center items-center relative py-10 lg:py-0">
                        <div className="relative" style={{ width: '400px', height: '400px' }}>
                            <div className="absolute inset-0 bg-purple-500/10 rounded-full" style={{ filter: 'blur(80px)' }}></div>
                            <div className="relative z-10 w-full h-full flex items-center justify-center bg-white/40 overflow-hidden group-hover:rotate-1 transition-transform duration-700" style={{ borderRadius: '3.5rem', border: '16px solid white', backdropFilter: 'blur(12px)', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)' }}>
                                <div className="absolute inset-0 tech-grid opacity-20"></div>
                                <div className="relative flex items-center justify-center">
                                    <span className="material-symbols-outlined text-transparent floating" style={{ fontSize: '160px', background: 'linear-gradient(to bottom right, #2563eb, #9333ea, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>memory</span>
                                    <div className="absolute inset-0 animate-[spin_12s_linear_infinite]">
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full glow-pulse" style={{ boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}></div>
                                    </div>
                                    <div className="absolute inset-4 animate-[spin_20s_linear_infinite_reverse]">
                                        <div className="absolute bottom-0 right-1/4 w-3 h-3 bg-purple-500 rounded-full glow-pulse" style={{ boxShadow: '0 0 15px rgba(139,92,246,0.5)' }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute z-20 w-32 h-32 bg-white rounded-3xl shadow-xl flex flex-col items-center justify-center rotate-6 border border-slate-50 group-hover:translate-y-[-10px] transition-transform" style={{ top: '-24px', right: '-24px' }}>
                                <span className="material-symbols-outlined text-blue-500 mb-1" style={{ fontSize: '36px' }}>query_stats</span>
                                <span className="font-black text-slate-800" style={{ fontSize: '20px' }}>99.8%</span>
                            </div>
                            <div className="absolute z-20 w-36 h-36 bg-white rounded-3xl shadow-xl flex flex-col items-center justify-center -rotate-6 border border-slate-50 group-hover:translate-y-[10px] transition-transform" style={{ bottom: '-24px', left: '-24px' }}>
                                <span className="material-symbols-outlined text-purple-500 mb-1" style={{ fontSize: '36px' }}>neurology</span>
                                <span className="font-bold text-slate-500 uppercase" style={{ fontSize: '12px' }}>Neural Net</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
