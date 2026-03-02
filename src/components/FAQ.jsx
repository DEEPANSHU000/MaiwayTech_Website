import { useState } from 'react'

const faqs = [
    {
        question: "What kind of companies does Maiway work with?",
        answer: "Startups validating new bets, scale-ups building robust systems, and enterprises modernizing tech and operations."
    },
    {
        question: "How do we start?",
        answer: "We begin with a discovery session and a 90-day execution plan—clear goals, owners, and milestones."
    },
    {
        question: "Can you work with our existing tools and teams?",
        answer: "Yes. We integrate with your stack and collaborate with internal teams to ship quickly without disruption."
    },
    {
        question: "How do you measure success?",
        answer: "Jointly defined KPIs—time-to-market, CAC/LTV, retention, cost savings, and reliability improvements."
    },
]

function AccordionItem({ question, answer, isOpen, onClick }) {
    return (
        <div
            className={`border rounded-2xl transition-all duration-300 ${isOpen ? 'border-indigo-500/30 bg-indigo-500/5 shadow-md shadow-indigo-500/10' : 'border-white/8 bg-white/4 hover:border-white/15'}`}
        >
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between px-8 py-6 text-left cursor-pointer"
            >
                <span className="text-[15px] font-bold text-white pr-4">{question}</span>
                <span className={`material-symbols-outlined text-xl flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45 text-primary' : 'text-slate-400'}`}>
                    add
                </span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 pb-6' : 'max-h-0'}`}>
                <p className="px-8 text-sm text-slate-400 leading-relaxed">{answer}</p>
            </div>
        </div>
    )
}

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null)

    return (
        <section id="faq" className="py-28 relative overflow-hidden">
            <div className="absolute inset-0 tech-grid opacity-[0.03]"></div>

            {/* Left side animated elements */}
            <div className="hidden lg:block absolute left-4 xl:left-16 top-1/2 -translate-y-1/2 pointer-events-none">
                {/* Paper plane */}
                <div className="floating" style={{ animationDelay: '0s' }}>
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-500/25 rotate-[-15deg]">
                        <span className="material-symbols-outlined text-white text-3xl">send</span>
                    </div>
                </div>
                {/* Chat bubble */}
                <div className="floating mt-8 ml-6" style={{ animationDelay: '2s' }}>
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20 rotate-[10deg]">
                        <span className="material-symbols-outlined text-white text-xl">forum</span>
                    </div>
                </div>
                {/* Dot cluster */}
                <div className="floating mt-6 -ml-2" style={{ animationDelay: '4s' }}>
                    <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center shadow-md shadow-pink-500/20">
                        <span className="material-symbols-outlined text-white text-sm">help</span>
                    </div>
                </div>
            </div>

            {/* Right side animated elements */}
            <div className="hidden lg:block absolute right-4 xl:right-16 top-1/2 -translate-y-1/2 pointer-events-none">
                {/* Lightbulb */}
                <div className="floating" style={{ animationDelay: '1s' }}>
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl shadow-amber-500/25 rotate-[12deg]">
                        <span className="material-symbols-outlined text-white text-2xl">emoji_objects</span>
                    </div>
                </div>
                {/* Rocket */}
                <div className="floating mt-8 -ml-4" style={{ animationDelay: '3s' }}>
                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20 rotate-[-8deg]">
                        <span className="material-symbols-outlined text-white text-xl">rocket_launch</span>
                    </div>
                </div>
                {/* Star */}
                <div className="floating mt-6 ml-6" style={{ animationDelay: '5s' }}>
                    <div className="w-10 h-10 bg-gradient-to-br from-violet-400 to-violet-600 rounded-full flex items-center justify-center shadow-md shadow-violet-500/20">
                        <span className="material-symbols-outlined text-white text-sm">stars</span>
                    </div>
                </div>
            </div>

            {/* Glow effects */}
            <div className="absolute left-0 top-1/3 w-64 h-64 bg-blue-400/5 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="absolute right-0 bottom-1/3 w-64 h-64 bg-purple-400/5 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <div className="text-center mb-14">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[10px] font-bold uppercase tracking-wider mb-6">
                        <span className="material-symbols-outlined text-[14px]">quiz</span>
                        FAQ's
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
                        Answers to Your Most <br />Frequently Asked Questions
                    </h2>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <AccordionItem
                            key={i}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === i}
                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
