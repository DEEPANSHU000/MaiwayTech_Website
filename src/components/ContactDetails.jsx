export default function ContactDetails() {
    const details = [
        {
            id: 'location',
            icon: 'location_on',
            title: 'Our Location:',
            lines: [
                '1018, Tower B, I-Thumb Tower',
                'Sector 62, Noida, Uttar Pradesh',
                '201301'
            ]
        },
        {
            id: 'email',
            icon: 'mail',
            title: 'Email us at:',
            lines: [
                'team@maiwaytech.com',
                'rajesh@maiwaytech.com'
            ],
            links: [
                'mailto:team@maiwaytech.com',
                'mailto:rajesh@maiwaytech.com'
            ]
        },
        {
            id: 'phone',
            icon: 'smartphone',
            title: 'Phone Number:',
            lines: [
                '+91-99585 03926',
                '+91-9661676563'
            ],
            links: [
                'tel:+91-9958503926',
                'tel:+91-9661676563'
            ]
        },
        {
            id: 'hours',
            icon: 'schedule',
            title: 'Business Hours:',
            lines: [
                'Monday–Friday, 9 am–6 pm',
                'Saturday-Sunday: 12 pm - 5pm'
            ]
        }
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {details.map((detail) => (
                <div
                    key={detail.id}
                    className="p-8 rounded-3xl bg-[#0B1120]/80 backdrop-blur-xl border border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden flex flex-col h-full"
                >
                    {/* Hover Glow Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Top Accent Line */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10 flex-grow">
                        <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/20 text-blue-400 mb-8 group-hover:scale-110 group-hover:text-blue-300 group-hover:border-blue-400/50 transition-all duration-300 shadow-lg shadow-blue-500/5">
                            <span className="material-symbols-outlined text-[32px]">{detail.icon}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors">{detail.title}</h3>
                        <div className="space-y-2">
                            {detail.lines.map((line, idx) => (
                                detail.links && detail.links[idx] ? (
                                    <a key={idx} href={detail.links[idx]} className="block text-slate-400 hover:text-blue-400 transition-colors leading-relaxed font-medium">
                                        {line}
                                    </a>
                                ) : (
                                    <p key={idx} className="text-slate-400 leading-relaxed block font-medium">{line}</p>
                                )
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
