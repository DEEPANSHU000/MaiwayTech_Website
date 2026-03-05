import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-10 pb-6">
            <div className="w-full px-[4%] sm:px-[5%]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 xl:gap-6 mb-8">
                    <div className="space-y-6 xl:pr-4">
                        <Link to="/" className="inline-flex items-center">
                            <div className="bg-white rounded-full px-4 py-2 shadow-[0_0_15px_rgba(255,255,255,0.1)] border border-white/20 flex items-center justify-center overflow-hidden hover:scale-[1.02] transition-transform duration-200">
                                <img src="/maiway-logo.png" alt="Maiway AI" className="h-10 sm:h-12 object-contain mix-blend-multiply" />
                            </div>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                            A next-generation consulting firm merging strategy, engineering, and AI to help ambitious companies ship products that win.
                        </p>

                        <div className="flex gap-4 pt-1">
                            <a className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#0A66C2] transition-all group" href="https://www.linkedin.com/company/maiwaytechnologies/posts/?feedView=all" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                                <svg className="w-4 h-4 fill-slate-400 group-hover:fill-white transition-colors" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                            </a>
                            <a className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#1877F2] transition-all group" href="https://www.facebook.com/maiwaytechnologies/" target="_blank" rel="noopener noreferrer" title="Facebook">
                                <svg className="w-4 h-4 fill-slate-400 group-hover:fill-white transition-colors" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                            </a>
                            <a className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-gradient-to-br hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888] transition-all group" href="https://www.instagram.com/maiwaytechnologies/" target="_blank" rel="noopener noreferrer" title="Instagram">
                                <svg className="w-4 h-4 fill-slate-400 group-hover:fill-white transition-colors" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.882 0 1.441 1.441 0 012.882 0z" /></svg>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4 text-white uppercase tracking-[0.3em] text-xs">Platform</h4>
                        <ul className="space-y-5">
                            <li><Link className="footer-link" to="/services"><span className="material-symbols-outlined text-[14px]">chevron_right</span> Services</Link></li>
                            <li><Link className="footer-link" to="/about"><span className="material-symbols-outlined text-[14px]">chevron_right</span> About Us</Link></li>
                            <li><Link className="footer-link" to="/services#ai-services"><span className="material-symbols-outlined text-[14px]">chevron_right</span> AI Lab</Link></li>
                            <li><Link className="footer-link" to="/#faq"><span className="material-symbols-outlined text-[14px]">chevron_right</span> FAQ</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4 text-white uppercase tracking-[0.3em] text-xs flex items-center gap-2">
                            USA <span className="text-lg" title="United States">🇺🇸</span>
                        </h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary text-[18px]">call</span>
                                <a href="tel:+16502158776" className="hover:text-white transition-colors">+1 (650) 215-8776</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary text-[18px]">mail</span>
                                <a href="mailto:team@maiwaytech.com" className="hover:text-white transition-colors break-all">team@maiwaytech.com</a>
                            </li>
                            <li className="flex items-start gap-3 leading-relaxed">
                                <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">location_on</span>
                                <span>22402, Hemlock Hills Pl<br />Clarksburg, Maryland, 20871<br />United States</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary text-[18px]">language</span>
                                <a href="https://technoduty.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">technoduty.com</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4 text-white uppercase tracking-[0.3em] text-xs flex items-center gap-2">
                            INDIA <span className="text-lg" title="India">🇮🇳</span>
                        </h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary text-[18px]">call</span>
                                <a href="tel:+919958503926" className="hover:text-white transition-colors">+91 9958503926</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary text-[18px]">mail</span>
                                <a href="mailto:team@maiwaytech.com" className="hover:text-white transition-colors break-all">team@maiwaytech.com</a>
                            </li>
                            <li className="flex items-start gap-3 leading-relaxed">
                                <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">location_on</span>
                                <span>1018, Tower B, A-40, i-Thum Tower,<br />Sector-62, Noida-201301,<br />U.P., India</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4 text-white uppercase tracking-[0.3em] text-xs">Newsletter</h4>
                        <p className="text-xs text-slate-500 mb-3">Stay ahead with the latest in AI and strategy.</p>
                        <div className="relative flex items-center">
                            <input className="bg-[#111] border border-white/10 rounded-xl pl-5 pr-12 py-4 text-xs w-full focus:ring-1 focus:ring-primary focus:border-transparent outline-none text-white placeholder-slate-600" placeholder="Enter your email" type="email" />
                            <button className="absolute right-2 px-3 py-2 bg-primary hover:bg-accent rounded-lg transition-colors">
                                <span className="material-symbols-outlined text-white text-[18px]">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                    <p>Copyright © 2026 Maiway Technologies. All Rights Reserved.</p>
                    <div className="flex gap-8">
                        <span className="text-slate-500 cursor-default">Privacy Policy</span>
                        <span className="text-slate-500 cursor-default">Terms of Service</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
