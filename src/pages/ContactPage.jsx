import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useModal } from '../context/ModalContext'
import ContactDetails from '../components/ContactDetails'
import ContactForm from '../components/ContactForm'

export default function ContactPage() {
    // eslint-disable-next-line no-unused-vars
    const { open } = useModal()

    useEffect(() => {
        document.title = "Contact Us | Maiway"
    }, [])

    return (
        <div className="relative w-full pt-32 pb-20 flex flex-col items-center">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[#020617] -z-20"></div>
            <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
                {/* Glowing orbs */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[120px] mix-blend-screen translate-x-1/3 -translate-y-1/4"></div>
                <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[100px] mix-blend-screen -translate-x-1/4"></div>
                {/* Grid pattern overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                {/* Hero Section */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 mb-24 lg:mb-32">
                    {/* Left Text */}
                    <div className="w-full lg:w-5/12 relative">
                        {/* Decorative line */}
                        <div className="hidden lg:block absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0"></div>

                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-8 animate-[fade-in_1s_ease-out]">
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                            24/7 Support Available
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
                            Let's Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Future</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-lg leading-relaxed">
                            Whether you need enterprise AI solutions or technical consulting, our team is ready to accelerate your growth.
                        </p>
                        <div className="flex items-center gap-3 text-sm font-medium">
                            <Link to="/" className="text-slate-400 hover:text-white transition-colors">Home</Link>
                            <span className="text-slate-600">/</span>
                            <span className="text-blue-400">Contact</span>
                        </div>
                    </div>

                    {/* Right Image/Robot */}
                    <div className="w-full lg:w-7/12 flex justify-center lg:justify-end shrink-0 pointer-events-none select-none">
                        <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
                            {/* Inner Glow behind robot */}
                            <div className="absolute inset-12 bg-gradient-to-tr from-blue-600/30 to-purple-600/30 rounded-full blur-[80px] animate-[pulse_4s_ease-in-out_infinite]"></div>

                            <img
                                src="/robot.png"
                                alt="AI Assistant"
                                className="relative z-10 w-4/5 h-auto object-contain animate-[floating_6s_ease-in-out_infinite]"
                                style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5)) brightness(1.1) contrast(1.1)' }}
                            />

                            {/* Floating Chat Bubbles */}
                            <div className="absolute top-[15%] right-[5%] lg:-right-[5%] bg-white/10 backdrop-blur-md border border-white/20 px-5 py-3 rounded-2xl rounded-tr-none text-sm font-medium text-white shadow-[0_4px_24px_-4px_rgba(59,130,246,0.3)] animate-[floating_5s_ease-in-out_infinite_0.5s] z-20 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                                Hello! 👋
                            </div>
                            <div className="absolute top-[45%] -left-[5%] lg:-left-[15%] bg-blue-500/10 backdrop-blur-md border border-blue-500/30 px-5 py-3 rounded-2xl rounded-tl-none text-sm font-medium text-blue-100 shadow-[0_4px_24px_-4px_rgba(59,130,246,0.3)] animate-[floating_7s_ease-in-out_infinite_1s] z-20">
                                How can I help you?
                            </div>
                            <div className="absolute bottom-[20%] right-[10%] lg:right-[0%] bg-purple-500/10 backdrop-blur-md border border-purple-500/30 px-5 py-3 rounded-2xl rounded-br-none text-sm font-medium text-purple-100 shadow-[0_4px_24px_-4px_rgba(168,85,247,0.3)] animate-[floating_6s_ease-in-out_infinite_1.5s] z-20">
                                Let's innovate 🚀
                            </div>
                        </div>
                    </div>
                </div>

                {/* Details Grid Section */}
                <div className="mb-24 lg:mb-32 relative">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 text-blue-400 font-bold uppercase tracking-widest text-xs mb-4">Contact Info</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Reach Out to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Maiway</span></h2>
                    </div>
                    <ContactDetails />
                </div>

                {/* Contact Form Section */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Decorative background card for form */}
                    <div className="absolute inset-0 bg-[#0A101F]/80 border border-white/5 rounded-[3rem] -z-10 shadow-2xl shadow-black/50 backdrop-blur-xl"></div>
                    <div className="absolute -inset-0.5 bg-gradient-to-b from-blue-500/20 to-purple-500/5 blur-lg -z-20 opacity-50 rounded-[3rem]"></div>

                    <div className="px-8 py-16 md:p-16">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Have a Project in Mind?</h2>
                            <p className="text-lg text-slate-400 max-w-2xl mx-auto">Fill out the form below and our AI and implementation experts will get in touch with you shortly.</p>
                        </div>
                        <ContactForm />
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes floating {
                    0% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-15px) rotate(1deg); }
                    100% { transform: translateY(0px) rotate(0deg); }
                }
            `}</style>
        </div>
    )
}
