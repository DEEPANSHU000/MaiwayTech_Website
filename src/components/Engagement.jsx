import { useModal } from '../context/ModalContext'

export default function Engagement() {
    const { open } = useModal()

    return (
        <section className="py-24 relative border-t border-white/5">
            <div className="w-full px-[4%] sm:px-[5%] relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/10 to-purple-500/10 rounded-[3rem] blur-2xl group-hover:blur-3xl transition-all"></div>
                        <div className="relative bg-white/5 border border-white/10 p-4 rounded-[3rem]">
                            <img
                                alt="Dashboard Preview"
                                className="rounded-[2.5rem] w-full"
                                src="/dashboard.png"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-12">
                        <div>
                            <span className="gradient-text-vibrant font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Our Engagement Model</span>
                            <h2 className="text-5xl font-extrabold text-white leading-tight">From Strategic Clarity to <br /> Compounding Results</h2>
                        </div>
                        <div className="space-y-12">
                            <div className="flex gap-8 group">
                                <div className="text-5xl font-extrabold step-number opacity-20 group-hover:opacity-100 transition-all shrink-0">01</div>
                                <div className="space-y-3">
                                    <h4 className="text-2xl font-bold text-white">Discovery &amp; Quick Wins</h4>
                                    <p className="text-slate-400 text-base leading-relaxed">Deep-dive workshops to align on business goals, map architecture, and identify immediate ROI opportunities.</p>
                                </div>
                            </div>
                            <div className="flex gap-8 group">
                                <div className="text-5xl font-extrabold step-number opacity-20 group-hover:opacity-100 transition-all shrink-0">02</div>
                                <div className="space-y-3">
                                    <h4 className="text-2xl font-bold text-white">Agile Build &amp; Integration</h4>
                                    <p className="text-slate-400 text-base leading-relaxed">Rapid prototyping and iterative development of custom AI agents and cloud-native solutions.</p>
                                </div>
                            </div>
                            <div className="flex gap-8 group">
                                <div className="text-5xl font-extrabold step-number opacity-20 group-hover:opacity-100 transition-all shrink-0">03</div>
                                <div className="space-y-3">
                                    <h4 className="text-2xl font-bold text-white">Scale &amp; Optimize</h4>
                                    <p className="text-slate-400 text-base leading-relaxed">Production-grade deployment with continuous monitoring to ensure accuracy and scaling capacity.</p>
                                </div>
                            </div>
                        </div>
                        <button onClick={open} className="h-16 px-12 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold rounded-full transition-all text-lg shadow-2xl shadow-indigo-500/30 w-fit cursor-pointer">
                            Start Your Journey
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
