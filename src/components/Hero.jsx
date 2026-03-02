import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useModal } from '../context/ModalContext'

export default function Hero() {
    const { open } = useModal()
    const containerRef = useRef(null)
    const [tilt, setTilt] = useState({ x: 0, y: 0 })
    const [mouseIn, setMouseIn] = useState(false)

    const handleMouseMove = (e) => {
        if (!containerRef.current) return
        const rect = containerRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const x = ((e.clientX - centerX) / (rect.width / 2)) * 15
        const y = ((e.clientY - centerY) / (rect.height / 2)) * -15
        setTilt({ x, y })
    }

    return (
        <section className="relative hero-gradient pt-24 md:pt-28 pb-12 md:pb-16 overflow-hidden w-full">
            <div className="absolute inset-0 tech-grid opacity-[0.05]"></div>

            {/* Fluid full-width grid */}
            <div className="w-full px-[4%] sm:px-[5%] lg:px-[6%] xl:px-[7%] grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center relative z-10">

                {/* Left — Text Content */}
                <div className="flex flex-col gap-4 md:gap-5 text-center lg:text-left">
                    <div className="flex flex-wrap items-center gap-2 justify-center lg:justify-start">
                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[9px] md:text-[10px] font-bold uppercase tracking-wider">
                            <span className="material-symbols-outlined text-[14px]">check_circle</span>
                            AI Development for startups &amp; enterprises
                        </div>
                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-[9px] md:text-[10px] font-bold uppercase tracking-wider">
                            <span className="material-symbols-outlined text-[14px]">check_circle</span>
                            Execution-focused. No fluff
                        </div>
                    </div>

                    {/* Fully fluid heading — clamp scales with viewport */}
                    <h1
                        className="font-extrabold leading-[1.05] tracking-tight text-white"
                        style={{ fontSize: 'clamp(2.2rem, 5.5vw, 6rem)' }}
                    >
                        Build &amp; Grow. The{' '}
                        <span className="gradient-text-vibrant">New Era</span> of AI/IT Consulting by{' '}
                        <span className="text-primary">Maiway</span>
                    </h1>

                    <p
                        className="text-slate-400 leading-relaxed lg:mx-0 mx-auto"
                        style={{ fontSize: 'clamp(1rem, 1.6vw, 1.25rem)', maxWidth: '55ch' }}
                    >
                        We blend strategy, technology, and AI/ML to help ambitious teams launch faster, scale smarter, and measure impact.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-3 mt-2 justify-center lg:justify-start">
                        <button
                            onClick={open}
                            className="h-12 md:h-14 px-8 md:px-10 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold rounded-full transition-all text-sm md:text-base shadow-xl shadow-indigo-500/30 cursor-pointer"
                        >
                            Book A Call
                        </button>
                        <Link
                            to="/services"
                            className="h-12 md:h-14 px-8 md:px-10 bg-white/5 hover:bg-white/10 text-white font-bold rounded-full border border-white/15 hover:border-white/30 transition-all text-sm md:text-base shadow-sm flex items-center justify-center"
                        >
                            Explore Services
                        </Link>
                    </div>
                </div>

                {/* Right — 3D Interactive Robot */}
                <div
                    ref={containerRef}
                    className="relative flex justify-center items-center min-h-[300px] md:min-h-[420px] lg:min-h-[520px]"
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setMouseIn(true)}
                    onMouseLeave={() => { setMouseIn(false); setTilt({ x: 0, y: 0 }); }}
                    style={{ perspective: '1000px' }}
                >
                    {/* Animated glowing rings */}
                    <div className="absolute w-[70%] aspect-square rounded-full border border-blue-200/30 animate-[spin_20s_linear_infinite]"></div>
                    <div className="absolute w-[55%] aspect-square rounded-full border border-purple-200/20 animate-[spin_15s_linear_infinite_reverse]"></div>
                    <div className="absolute w-[85%] aspect-square rounded-full border border-blue-100/15 animate-[spin_25s_linear_infinite]"></div>

                    {/* Background glow */}
                    <div
                        className="absolute w-[70%] aspect-square rounded-full transition-all duration-300"
                        style={{
                            background: `radial-gradient(circle, rgba(59,130,246,${mouseIn ? 0.15 : 0.08}) 0%, transparent 70%)`,
                            transform: `translate(${tilt.x * 0.5}px, ${tilt.y * -0.5}px)`,
                        }}
                    ></div>

                    {/* Orbiting icons */}
                    <div className="hidden sm:block absolute w-[68%] aspect-square animate-[spin_12s_linear_infinite]">
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                            <span className="material-symbols-outlined text-white text-sm">psychology</span>
                        </div>
                    </div>
                    <div className="hidden sm:block absolute w-[68%] aspect-square animate-[spin_16s_linear_infinite_reverse]">
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/30">
                            <span className="material-symbols-outlined text-white text-xs">code</span>
                        </div>
                    </div>
                    <div className="hidden sm:block absolute w-[75%] aspect-square animate-[spin_20s_linear_infinite]">
                        <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-9 h-9 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/30">
                            <span className="material-symbols-outlined text-white text-sm">auto_awesome</span>
                        </div>
                    </div>
                    <div className="hidden sm:block absolute w-[62%] aspect-square animate-[spin_14s_linear_infinite_reverse]">
                        <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-7 h-7 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center shadow-md shadow-pink-500/30">
                            <span className="material-symbols-outlined text-white" style={{ fontSize: '12px' }}>data_object</span>
                        </div>
                    </div>

                    {/* Robot image — fluid width based on viewport */}
                    <div
                        className="relative z-10 transition-transform duration-200 ease-out"
                        style={{
                            transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg) scale(${mouseIn ? 1.05 : 1})`,
                            transformStyle: 'preserve-3d',
                        }}
                    >
                        <img
                            alt="Friendly 3D AI Robot"
                            style={{ width: 'clamp(240px, 38vw, 680px)' }}
                            className="h-auto object-contain drop-shadow-2xl"
                            src="/robot.png"
                        />

                        {/* Reflection glow */}
                        <div
                            className="absolute -bottom-8 left-1/2 h-6 bg-blue-400/20 rounded-full blur-xl"
                            style={{
                                width: 'clamp(120px, 18vw, 280px)',
                                transform: `translateX(-50%) scaleX(${mouseIn ? 1.2 : 1})`,
                                transition: 'transform 0.3s'
                            }}
                        ></div>
                    </div>

                    {/* Floating particles */}
                    <div className="hidden sm:block absolute w-2 h-2 bg-blue-400 rounded-full floating opacity-60" style={{ top: '15%', right: '10%', animationDelay: '0s' }}></div>
                    <div className="hidden sm:block absolute w-1.5 h-1.5 bg-purple-400 rounded-full floating opacity-50" style={{ bottom: '20%', left: '8%', animationDelay: '1s' }}></div>
                    <div className="hidden sm:block absolute w-2.5 h-2.5 bg-cyan-400 rounded-full floating opacity-40" style={{ top: '30%', left: '5%', animationDelay: '3s' }}></div>
                    <div className="hidden sm:block absolute w-1.5 h-1.5 bg-pink-400 rounded-full floating opacity-50" style={{ bottom: '30%', right: '5%', animationDelay: '2s' }}></div>
                </div>
            </div>
        </section>
    )
}
