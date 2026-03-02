import { useState } from 'react'
import { useModal } from '../context/ModalContext'
import { collection, addDoc } from "firebase/firestore"
import { db } from '../firebase'

export default function ContactModal() {
    const { isOpen, close } = useModal()
    const [submitted, setSubmitted] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState(null)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        website: '',
        requirement: ''
    })

    if (!isOpen) return null

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setError(null)

        try {
            await addDoc(collection(db, "messages"), {
                ...formData,
                source: "Popup Modal",
                timestamp: new Date()
            })

            setSubmitted(true)
            setTimeout(() => {
                setSubmitted(false)
                setFormData({ name: '', email: '', phone: '', website: '', requirement: '' })
                close()
            }, 3000)
        } catch (err) {
            console.error("Error adding document: ", err)
            setError("Oops! Something went wrong. Please try again.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={close}>
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

            {/* Modal */}
            <div
                className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden animate-[modalIn_0.3s_ease-out]"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Gradient header bar */}
                <div className="h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

                {/* Close button */}
                <button
                    onClick={close}
                    className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors cursor-pointer z-10"
                >
                    <span className="material-symbols-outlined text-slate-500 text-lg">close</span>
                </button>

                {submitted ? (
                    /* Success state */
                    <div className="px-10 py-16 text-center">
                        <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6">
                            <span className="material-symbols-outlined text-green-500 text-4xl">check_circle</span>
                        </div>
                        <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Thank You!</h3>
                        <p className="text-slate-500 text-sm">We'll get back to you within 24 hours.</p>
                    </div>
                ) : (
                    /* Form */
                    <div className="px-10 pt-8 pb-10">
                        {/* Header */}
                        <div className="mb-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-primary text-[10px] font-bold uppercase tracking-wider mb-4">
                                <span className="material-symbols-outlined text-[12px]">rocket_launch</span>
                                Let's Connect
                            </div>
                            <h2 className="text-2xl font-extrabold text-slate-900 leading-tight">
                                Scale Your Business <span className="gradient-text-vibrant">Online</span>
                            </h2>
                            <p className="text-slate-500 text-sm mt-2">Get a Customized Growth Plan for Your Business</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 text-lg">person</span>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Name*"
                                    required
                                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                />
                            </div>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 text-lg">mail</span>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email*"
                                    required
                                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                />
                            </div>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 text-lg">call</span>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Phone No.*"
                                    required
                                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                />
                            </div>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 text-lg">language</span>
                                <input
                                    type="url"
                                    name="website"
                                    value={formData.website}
                                    onChange={handleChange}
                                    placeholder="Your Website"
                                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                />
                            </div>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-4 text-slate-300 text-lg">edit_note</span>
                                <textarea
                                    name="requirement"
                                    value={formData.requirement}
                                    onChange={handleChange}
                                    placeholder="Your Requirement"
                                    rows="3"
                                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                                ></textarea>
                            </div>

                            {error && <p className="text-red-500 text-xs text-center">{error}</p>}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold rounded-xl transition-all text-sm shadow-lg shadow-blue-500/25 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                <span className="material-symbols-outlined text-lg">send</span>
                                {isSubmitting ? 'Sending...' : 'Request A Callback'}
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    )
}
