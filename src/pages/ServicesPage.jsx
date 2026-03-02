import Services from '../components/Services'
import AIServices from '../components/AIServices'
import usePageTitle from '../hooks/usePageTitle'

export default function ServicesPage() {
    usePageTitle('Services')
    return (
        <>
            {/* Page banner */}
            <section className="relative pt-32 pb-16 overflow-hidden hero-gradient">
                <div className="absolute inset-0 tech-grid opacity-[0.05]"></div>

                {/* Decorative Elements - Left */}
                <div className="hidden lg:block absolute left-0 top-0 w-1/3 h-full pointer-events-none">
                    <div className="absolute top-1/2 left-20 -translate-y-1/2 w-72 h-72 bg-purple-500/10 rounded-full blur-[80px]"></div>
                    <div className="absolute top-[10%] left-5 w-[220px] aspect-square rounded-full border border-purple-500/10 animate-[spin_20s_linear_infinite]"></div>
                    <div className="absolute top-[35%] left-[25%] w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md animate-[bounce_4s_infinite] shadow-xl shadow-purple-500/20">
                        <span className="material-symbols-outlined text-purple-400 text-2xl">deployed_code</span>
                    </div>
                    <div className="absolute top-[70%] left-[10%] w-10 h-10 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center backdrop-blur-md animate-[bounce_5s_infinite_1s]">
                        <span className="material-symbols-outlined text-blue-400 text-lg">schema</span>
                    </div>
                </div>

                {/* Decorative Elements - Right */}
                <div className="hidden lg:block absolute right-0 top-0 w-1/3 h-full pointer-events-none">
                    <div className="absolute top-1/2 right-20 -translate-y-1/2 w-72 h-72 bg-blue-500/10 rounded-full blur-[80px]"></div>
                    <div className="absolute top-[20%] right-5 w-[280px] aspect-square rounded-full border border-blue-500/10 animate-[spin_25s_linear_infinite_reverse]"></div>
                    <div className="absolute top-[20%] right-[30%] w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center backdrop-blur-md animate-[bounce_5s_infinite_0.5s] shadow-xl shadow-blue-500/20">
                        <span className="material-symbols-outlined text-blue-400 text-xl">hub</span>
                    </div>
                    <div className="absolute top-[65%] right-[15%] w-16 h-16 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl flex items-center justify-center backdrop-blur-md animate-[bounce_4s_infinite_1.5s]">
                        <span className="material-symbols-outlined text-indigo-400 text-3xl">model_training</span>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-[10px] font-bold uppercase tracking-wider mb-6">
                        <span className="material-symbols-outlined text-[14px]">deployed_code</span>
                        What We Offer
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
                        Our <span className="gradient-text-vibrant">Services</span>
                    </h1>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        End-to-end technology solutions powered by AI, engineering excellence, and strategic thinking.
                    </p>
                </div>
            </section>
            <Services />
            <AIServices />
        </>
    )
}
