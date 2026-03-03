export default function ClientMarquee() {
    const clients = [
        { name: "Logo 1", logo: "/clients/logo1.png" },
        { name: "Logo 2", logo: "/clients/logo2.png" },
        { name: "Logo 3", logo: "/clients/logo3.png" },
        { name: "Logo 4", logo: "/clients/logo4.png" },
        { name: "Logo 5", logo: "/clients/logo5.png" }
    ];

    // Double the array to ensure seamless infinite scroll
    const marqueeItems = [...clients, ...clients];

    return (
        <section className="py-12 bg-[#060B19] relative overflow-hidden flex flex-col justify-center items-center z-10 w-full">
            {/* Top and bottom subtle glowing borders */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>

            {/* Inner glow backdrop */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 via-transparent to-purple-900/5"></div>
            {/* Gradient masks for smooth fade in/out on edges */}
            <div className="absolute left-0 top-0 w-16 md:w-32 h-full bg-gradient-to-r from-black to-transparent z-20 pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-16 md:w-32 h-full bg-gradient-to-l from-black to-transparent z-20 pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-16 md:w-32 h-full bg-gradient-to-l from-black to-transparent z-20 pointer-events-none"></div>

            <div className="w-full flex-col">
                <div className="text-center mb-6">
                    <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-blue-400/80 uppercase font-display select-none">
                        -Trusted by teams & investors-
                    </span>
                </div>

                <div className="flex whitespace-nowrap animate-[marquee_35s_linear_infinite] w-max items-center">
                    {marqueeItems.map((client, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-14 px-8 min-w-max group cursor-default"
                        >
                            {/* Glowing Dot separator */}
                            {index > 0 && (
                                <div className="relative flex items-center justify-center">
                                    <div className="absolute w-4 h-4 rounded-full bg-blue-500/20 blur-sm"></div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                                </div>
                            )}
                            {/* Client Logo Only */}
                            <div className="flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(99,102,241,0.5)] h-12 w-32 md:w-40 relative">
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="h-10 md:h-12 w-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none select-none drop-shadow-md"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>
        </section>
    );
}
