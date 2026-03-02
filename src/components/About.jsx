import { Link } from 'react-router-dom'
import { useModal } from '../context/ModalContext'

export default function About() {
    const { open } = useModal()
    const team = [
        {
            name: "Visionary Leadership",
            role: "Strategy & Growth",
            icon: "psychology",
            desc: "Senior strategists with 15+ years in enterprise digital transformation and AI adoption."
        },
        {
            name: "Engineering Excellence",
            role: "Full-Stack & AI/ML",
            icon: "engineering",
            desc: "Battle-tested engineers building scalable systems across cloud, mobile, and embedded AI."
        },
        {
            name: "Design Thinking",
            role: "UX & Product Design",
            icon: "palette",
            desc: "Award-winning designers crafting intuitive experiences that drive engagement and conversion."
        },
        {
            name: "Data Science",
            role: "ML & Analytics",
            icon: "query_stats",
            desc: "PhD-level data scientists specializing in NLP, computer vision, and predictive analytics."
        },
    ];

    const values = [
        {
            icon: "rocket_launch",
            title: "Innovation First",
            desc: "We don't follow trends—we set them. Every solution we build pushes the boundary of what's possible."
        },
        {
            icon: "handshake",
            title: "Client Partnership",
            desc: "Your success is our success. We embed ourselves in your team and treat every project as our own."
        },
        {
            icon: "verified",
            title: "Quality Obsessed",
            desc: "We ship production-grade solutions, not prototypes. Every line of code is tested, reviewed, and optimized."
        },
        {
            icon: "speed",
            title: "Speed to Market",
            desc: "Agile methodology meets disciplined execution. We move fast without breaking things."
        },
        {
            icon: "eco",
            title: "Sustainable Impact",
            desc: "We build solutions designed to scale and evolve, ensuring long-term value for every stakeholder."
        },
        {
            icon: "diversity_3",
            title: "Diverse Perspectives",
            desc: "Our global team brings together diverse backgrounds and experiences to deliver creative solutions."
        },
    ];

    const milestones = [
        { year: "2024", title: "Founded", desc: "Maiway Technologies was born with a vision to bridge the gap between strategy, AI, and execution." },
        { year: "2024", title: "First Enterprise Client", desc: "Delivered an AI-powered analytics platform for our first enterprise client within months of launch." },
        { year: "2025", title: "AI Services Suite Launched", desc: "Launched our comprehensive AI services suite including data labeling, multi-modal capture, image recognition, and GenAI solutions." },
        { year: "2025", title: "50+ Projects", desc: "Crossed 50 successful project deliveries across multiple industries and 8+ countries." },
        { year: "2025", title: "Global Expansion", desc: "Expanded our reach to the US, Middle East, and Europe, growing into a truly global AI company." },
    ];

    return (
        <section id="about" className="relative py-28 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 tech-grid opacity-[0.03]"></div>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>

            <div className="w-full px-[4%] sm:px-[5%]">

                {/* ——— Mission / Vision / Who We Are — Two Column ——— */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-28">
                    {/* Left — Big statement card */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                        <div className="relative bg-white/5 border border-white/10 rounded-3xl p-10 h-full flex flex-col justify-between">
                            <div>
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/25">
                                    <span className="material-symbols-outlined text-white text-2xl">auto_awesome</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                                <p className="text-slate-400 leading-relaxed text-[15px]">
                                    To empower businesses of every size with world-class technology and AI solutions—delivering measurable outcomes, not just deliverables. We believe that great technology should be accessible, impactful, and built to last.
                                </p>
                            </div>
                            <div className="mt-8 grid grid-cols-3 gap-4">
                                <div className="text-center p-4 bg-indigo-500/10 rounded-2xl">
                                    <div className="text-2xl font-extrabold text-indigo-300">150+</div>
                                    <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mt-1">Projects</div>
                                </div>
                                <div className="text-center p-4 bg-purple-500/10 rounded-2xl">
                                    <div className="text-2xl font-extrabold text-purple-300">50+</div>
                                    <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mt-1">Clients</div>
                                </div>
                                <div className="text-center p-4 bg-pink-500/10 rounded-2xl">
                                    <div className="text-2xl font-extrabold text-pink-300">12+</div>
                                    <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mt-1">Countries</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right — Vision + Who we are */}
                    <div className="flex flex-col gap-6">
                        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300">
                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/25">
                                    <span className="material-symbols-outlined text-white text-xl">visibility</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Our Vision</h3>
                                    <p className="text-slate-400 leading-relaxed text-sm">
                                        To be the world's most trusted AI-first technology partner—where every engagement turns complexity into clarity and strategy into shipped products.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300">
                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/25">
                                    <span className="material-symbols-outlined text-white text-xl">groups</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Who We Are</h3>
                                    <p className="text-slate-400 leading-relaxed text-sm">
                                        A 100+ member team of engineers, designers, strategists, and data scientists spread across India, the US, and the Middle East. We work at the intersection of consulting and product engineering.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300">
                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-500/25">
                                    <span className="material-symbols-outlined text-white text-xl">emoji_objects</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Why Maiway?</h3>
                                    <p className="text-slate-400 leading-relaxed text-sm">
                                        We don't just consult—we build. Unlike traditional firms, we own the execution end-to-end: from roadmap to architecture to deployment and beyond, powered by AI at every step.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ——— Leadership / Meet the People ——— */}
                <div className="mb-28">
                    <div className="text-center mb-14">
                        <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-indigo-400">Our Leadership</span>
                        <h3 className="text-3xl font-extrabold text-white mt-2 mb-3">Meet the People Behind<br />Maiway's Vision</h3>
                        <p className="text-slate-400 max-w-lg mx-auto text-sm">The visionaries and experts driving our mission to build the future of AI-powered technology.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {/* Neeraj Nagar */}
                        <div className="group flex flex-col items-center">
                            <div className="relative mb-5">
                                <div className="absolute -inset-1 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition-opacity duration-500"></div>
                                <div className="relative w-44 h-52 rounded-2xl overflow-hidden border border-white/10">
                                    <img src="/team-neeraj.jpg" alt="Neeraj Nagar" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                                </div>
                            </div>
                            <h4 className="text-white font-bold text-lg">Neeraj Nagar</h4>
                            <p className="text-indigo-400 text-xs font-semibold uppercase tracking-wider mt-1">Managing Director</p>
                        </div>
                        {/* Rajesh Srivasty */}
                        <div className="group flex flex-col items-center">
                            <div className="relative mb-5">
                                <div className="absolute -inset-1 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition-opacity duration-500"></div>
                                <div className="relative w-44 h-52 rounded-2xl overflow-hidden border border-white/10">
                                    <img src="/team-rajesh.jpg" alt="Rajesh Srivasty" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                                </div>
                            </div>
                            <h4 className="text-white font-bold text-lg">Rajesh Srivasty</h4>
                            <p className="text-purple-400 text-xs font-semibold uppercase tracking-wider mt-1">Chief Executive Officer</p>
                        </div>
                        {/* Deepak Rai */}
                        <div className="group flex flex-col items-center">
                            <div className="relative mb-5">
                                <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition-opacity duration-500"></div>
                                <div className="relative w-44 h-52 rounded-2xl overflow-hidden border border-white/10">
                                    <img src="/team-deepak.jpg" alt="Deepak Rai" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                                </div>
                            </div>
                            <h4 className="text-white font-bold text-lg">Deepak Rai</h4>
                            <p className="text-blue-400 text-xs font-semibold uppercase tracking-wider mt-1">Chief Technical Officer</p>
                        </div>
                    </div>
                </div>

                {/* ——— Core Values ——— */}
                <div className="mb-28">
                    <div className="text-center mb-14">
                        <h3 className="text-3xl font-extrabold text-white mb-3">Our Core Values</h3>
                        <p className="text-slate-400 max-w-lg mx-auto text-sm">The principles that drive every project, every decision, and every line of code we write.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {values.map((v, i) => (
                            <div key={i} className="group bg-white/5 border border-white/8 rounded-2xl p-7 hover:border-indigo-500/30 hover:bg-white/8 transition-all duration-300">
                                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-5 shadow-md shadow-indigo-500/20 group-hover:scale-110 transition-transform duration-300">
                                    <span className="material-symbols-outlined text-white text-lg">{v.icon}</span>
                                </div>
                                <h4 className="font-bold text-white mb-2">{v.title}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ——— Team Pillars ——— */}
                <div className="mb-28">
                    <div className="text-center mb-14">
                        <h3 className="text-3xl font-extrabold text-white mb-3">Our Team Pillars</h3>
                        <p className="text-slate-400 max-w-lg mx-auto text-sm">Cross-functional expertise built for delivering end-to-end digital transformation.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {team.map((t, i) => (
                            <div key={i} className="group relative">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                                <div className="relative bg-white/5 border border-white/8 rounded-2xl p-7 hover:border-indigo-500/30 transition-all duration-300 h-full">
                                    <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-5 group-hover:bg-gradient-to-br group-hover:from-indigo-500 group-hover:to-purple-600 transition-all duration-300">
                                        <span className="material-symbols-outlined text-indigo-400 text-2xl group-hover:text-white transition-colors duration-300">{t.icon}</span>
                                    </div>
                                    <h4 className="font-bold text-white mb-1">{t.name}</h4>
                                    <div className="text-[10px] font-bold uppercase tracking-wider text-indigo-400 mb-3">{t.role}</div>
                                    <p className="text-slate-400 text-sm leading-relaxed">{t.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ——— Journey / Timeline ——— */}
                <div className="mb-20">
                    <div className="text-center mb-14">
                        <h3 className="text-3xl font-extrabold text-white mb-3">Our Journey</h3>
                        <p className="text-slate-400 max-w-lg mx-auto text-sm">From a small team with a big vision to a global AI-first technology partner.</p>
                    </div>
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden lg:block"></div>

                        <div className="space-y-8 lg:space-y-0">
                            {milestones.map((m, i) => (
                                <div key={i} className={`relative flex flex-col lg:flex-row items-center gap-6 lg:gap-0 ${i % 2 === 0 ? '' : 'lg:flex-row-reverse'} lg:mb-12`}>
                                    {/* Content card */}
                                    <div className={`w-full lg:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'lg:pr-0 lg:text-right' : 'lg:pl-0 lg:text-left'}`}>
                                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-indigo-500/30 transition-all duration-300">
                                            <div className={`text-[11px] font-bold uppercase tracking-wider text-indigo-400 mb-2 ${i % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>{m.year}</div>
                                            <h4 className="font-bold text-white mb-1">{m.title}</h4>
                                            <p className="text-slate-400 text-sm leading-relaxed">{m.desc}</p>
                                        </div>
                                    </div>
                                    {/* Dot */}
                                    <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 border-4 border-[#0a0e1a] shadow-md z-10"></div>
                                    {/* Spacer for the other side */}
                                    <div className="hidden lg:block w-[calc(50%-2rem)]"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ——— CTA ——— */}
                <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-15"></div>
                    <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-12 md:p-16 text-center overflow-hidden">
                        <div className="absolute inset-0 tech-grid opacity-[0.05]"></div>
                        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]"></div>
                        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px]"></div>
                        <div className="relative z-10">
                            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ready to Build Something Extraordinary?</h3>
                            <p className="text-slate-400 max-w-xl mx-auto mb-8 text-sm leading-relaxed">
                                Whether you need a full product build, an AI solution, or a technology strategy, our team is ready to turn your vision into reality.
                            </p>
                            <div className="flex items-center justify-center">
                                <button onClick={open} className="h-13 px-8 bg-primary hover:bg-accent text-white font-bold rounded-full transition-all text-sm shadow-xl shadow-blue-500/30 cursor-pointer">
                                    Book A Free Consultation
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
