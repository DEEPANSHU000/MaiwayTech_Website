import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useModal } from '../context/ModalContext'

export default function Navbar() {
    const { open } = useModal()
    const [mobileOpen, setMobileOpen] = useState(false)

    const closeMobile = () => setMobileOpen(false)

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
            <div className="w-full px-[4%] lg:px-[6%] h-24 flex items-center justify-between">
                <Link to="/" className="flex items-center" onClick={closeMobile}>
                    <div className="bg-white rounded-full px-4 py-1.5 shadow-[0_0_15px_rgba(255,255,255,0.15)] border border-white/20 flex items-center justify-center overflow-hidden active:scale-95 transition-transform duration-200">
                        <img
                            src="/maiway-logo.png"
                            alt="Maiway AI"
                            className="h-10 md:h-11 lg:h-12 object-contain block mix-blend-multiply"
                        />
                    </div>
                </Link>

                {/* Desktop nav */}
                <div className="hidden lg:flex items-center gap-10">
                    <NavLink to="/" end className={({ isActive }) => `nav-link relative pb-1 ${isActive ? 'text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full' : ''}`}>Home</NavLink>
                    <NavLink to="/about" className={({ isActive }) => `nav-link relative pb-1 ${isActive ? 'text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full' : ''}`}>About</NavLink>
                    <NavLink to="/services" className={({ isActive }) => `nav-link relative pb-1 ${isActive ? 'text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full' : ''}`}>Services</NavLink>
                    <div className="relative group">
                        <button className="nav-link flex items-center gap-1">
                            Clients <span className="material-symbols-outlined text-[16px] transition-transform duration-200 group-hover:rotate-180">expand_more</span>
                        </button>
                        <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-50">
                            {/* EdTech Category (Nested Dropdown) */}
                            <div className="relative group/edtech">
                                <button className="w-full flex items-center justify-between px-4 py-2 text-sm font-bold text-slate-700 hover:bg-blue-50 transition-colors">
                                    EdTech
                                    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                                </button>
                                {/* EdTech Sub-menu */}
                                <div className="absolute top-0 left-full ml-1 w-64 bg-white rounded-xl shadow-xl border border-slate-100 opacity-0 invisible group-hover/edtech:opacity-100 group-hover/edtech:visible transition-all duration-200 py-2">
                                    <a href="https://unchaai.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-3 py-2 text-sm text-slate-600 hover:bg-blue-50 hover:text-primary rounded-lg transition-colors mx-2">
                                        <span className="material-symbols-outlined text-[18px] text-primary">smart_toy</span>
                                        UnchaAi
                                    </a>
                                    <a href="https://diksharth.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-3 py-2 text-sm text-slate-600 hover:bg-blue-50 hover:text-primary rounded-lg transition-colors mx-2">
                                        <span className="material-symbols-outlined text-[18px] text-primary">school</span>
                                        Diksharth Education
                                    </a>
                                </div>
                            </div>

                            {/* Real Estate Category (Nested Dropdown) */}
                            <div className="relative group/realestate">
                                <button className="w-full flex items-center justify-between px-4 py-2 text-sm font-bold text-slate-700 hover:bg-blue-50 transition-colors">
                                    Real Estate
                                    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                                </button>
                                {/* Real Estate Sub-menu */}
                                <div className="absolute top-0 left-full ml-1 w-64 bg-white rounded-xl shadow-xl border border-slate-100 opacity-0 invisible group-hover/realestate:opacity-100 group-hover/realestate:visible transition-all duration-200 py-2">
                                    <a href="https://realtycapitalventures.in/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-3 py-2 text-sm text-slate-600 hover:bg-blue-50 hover:text-primary rounded-lg transition-colors mx-2">
                                        <span className="material-symbols-outlined text-[18px] text-primary">apartment</span>
                                        Realty Capital Ventures
                                    </a>
                                </div>
                            </div>

                            {/* AI Services — links to AI Services section */}
                            <Link
                                to="/services#ai-services"
                                className="flex items-center gap-3 px-4 py-2 text-sm font-bold text-slate-700 hover:bg-purple-50 hover:text-purple-600 transition-colors rounded-lg mx-1"
                            >
                                <span className="material-symbols-outlined text-[18px] text-purple-500">model_training</span>
                                AI Services
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Desktop buttons */}
                <div className="hidden lg:flex items-center gap-4">
                    <button onClick={open} className="px-6 py-2.5 border-2 border-indigo-400 text-indigo-300 hover:bg-indigo-500 hover:text-white text-sm font-bold rounded-xl transition-all duration-200 cursor-pointer">
                        Book A Call
                    </button>
                    <Link to="/contact" className="px-6 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-indigo-500/30 cursor-pointer">
                        Contact Us
                    </Link>
                </div>

                {/* Mobile hamburger */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 cursor-pointer"
                    aria-label="Toggle menu"
                >
                    <span className={`w-6 h-0.5 bg-slate-300 rounded-full transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-slate-300 rounded-full transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-slate-300 rounded-full transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </div>

            {/* Mobile menu */}
            <div className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-[600px] border-t border-white/10' : 'max-h-0'}`}>
                <div className="bg-[#0d1020]/98 backdrop-blur-xl px-6 py-6 space-y-1">
                    <NavLink to="/" end onClick={closeMobile} className={({ isActive }) => `block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${isActive ? 'bg-indigo-500/15 text-indigo-300' : 'text-slate-300 hover:bg-white/5'}`}>
                        <span className="flex items-center gap-3"><span className="material-symbols-outlined text-lg">home</span> Home</span>
                    </NavLink>
                    <NavLink to="/about" onClick={closeMobile} className={({ isActive }) => `block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${isActive ? 'bg-indigo-500/15 text-indigo-300' : 'text-slate-300 hover:bg-white/5'}`}>
                        <span className="flex items-center gap-3"><span className="material-symbols-outlined text-lg">info</span> About</span>
                    </NavLink>
                    <NavLink to="/services" onClick={closeMobile} className={({ isActive }) => `block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${isActive ? 'bg-indigo-500/15 text-indigo-300' : 'text-slate-300 hover:bg-white/5'}`}>
                        <span className="flex items-center gap-3"><span className="material-symbols-outlined text-lg">settings_suggest</span> Services</span>
                    </NavLink>
                    <NavLink to="/contact" onClick={closeMobile} className={({ isActive }) => `block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${isActive ? 'bg-indigo-500/15 text-indigo-300' : 'text-slate-300 hover:bg-white/5'}`}>
                        <span className="flex items-center gap-3"><span className="material-symbols-outlined text-lg">mail</span> Contact</span>
                    </NavLink>

                    {/* Clients section */}
                    <div className="px-4 py-3">
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Clients</p>
                        <div className="pl-2 mb-4">
                            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">EdTech</p>
                            <div className="space-y-1 pl-2">
                                <a href="https://unchaai.com/" target="_blank" rel="noopener noreferrer" onClick={closeMobile} className="flex items-center gap-3 py-2 text-sm text-slate-300 hover:text-primary transition-colors">
                                    <span className="material-symbols-outlined text-[16px] text-primary">smart_toy</span> UnchaAi
                                </a>
                                <a href="https://diksharth.com/" target="_blank" rel="noopener noreferrer" onClick={closeMobile} className="flex items-center gap-3 py-2 text-sm text-slate-300 hover:text-primary transition-colors">
                                    <span className="material-symbols-outlined text-[16px] text-primary">school</span> Diksharth Education
                                </a>
                            </div>
                        </div>

                        <div className="pl-2">
                            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Real Estate</p>
                            <div className="space-y-1 pl-2">
                                <a href="https://realtycapitalventures.in/" target="_blank" rel="noopener noreferrer" onClick={closeMobile} className="flex items-center gap-3 py-2 text-sm text-slate-300 hover:text-primary transition-colors">
                                    <span className="material-symbols-outlined text-[16px] text-primary">apartment</span> Realty Capital Ventures
                                </a>
                            </div>
                        </div>

                        <div className="pl-2 mt-3">
                            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">AI Services</p>
                            <div className="space-y-1 pl-2">
                                <Link to="/services#ai-services" onClick={closeMobile} className="flex items-center gap-3 py-2 text-sm text-slate-300 hover:text-purple-400 transition-colors">
                                    <span className="material-symbols-outlined text-[16px] text-purple-400">model_training</span> AI Services Suite
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Mobile CTA buttons */}
                    <div className="flex gap-3 pt-4 border-t border-white/10">
                        <button onClick={() => { closeMobile(); open(); }} className="flex-1 py-3 border-2 border-indigo-400 text-indigo-300 text-sm font-bold rounded-xl transition-all cursor-pointer">
                            Book A Call
                        </button>
                        <button onClick={() => { closeMobile(); open(); }} className="flex-1 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-bold rounded-xl transition-all shadow-md cursor-pointer">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
