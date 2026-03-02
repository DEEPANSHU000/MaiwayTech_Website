import { useState } from 'react'
import { collection, addDoc } from "firebase/firestore"
import { db } from '../firebase'

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null) // 'success' or 'error'

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus(null)

        try {
            await addDoc(collection(db, "messages"), {
                name: formData.name,
                phone: formData.phone || '',
                email: formData.email,
                message: formData.message,
                timestamp: new Date()
            })

            setSubmitStatus('success')
            setFormData({ name: '', phone: '', email: '', message: '' })

            // Clear success message after 5 seconds
            setTimeout(() => setSubmitStatus(null), 5000)
        } catch (error) {
            console.error("Error adding document: ", error)
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        required
                        className="relative w-full bg-[#0B1120]/60 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all shadow-[inset_0_2px_10px_rgba(0,0,0,0.2)]"
                    />
                </div>

                <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone"
                        className="relative w-full bg-[#0B1120]/60 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all shadow-[inset_0_2px_10px_rgba(0,0,0,0.2)]"
                    />
                </div>
            </div>

            <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="relative w-full bg-[#0B1120]/60 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all shadow-[inset_0_2px_10px_rgba(0,0,0,0.2)]"
                />
            </div>

            <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    rows="5"
                    required
                    className="relative w-full bg-[#0B1120]/60 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all shadow-[inset_0_2px_10px_rgba(0,0,0,0.2)] resize-none"
                ></textarea>
            </div>

            <div className="flex justify-center pt-4">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative h-14 px-10 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold rounded-full transition-all flex items-center gap-3 overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
                >
                    <span className="relative z-10 flex items-center gap-2">
                        {isSubmitting ? 'Sending...' : 'Send Now'}
                        {!isSubmitting && <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>}
                    </span>
                    {/* Hover glow effect internally */}
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                </button>
            </div>

            {submitStatus === 'success' && (
                <div className="text-emerald-400 text-center mt-4 p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl animate-[fade-in_0.3s_ease-out]">
                    Your message has been sent successfully! Our team will contact you soon.
                </div>
            )}
            {submitStatus === 'error' && (
                <div className="text-red-400 text-center mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-xl animate-[fade-in_0.3s_ease-out]">
                    Oops! Something went wrong while sending your message. Please try again or email us directly.
                </div>
            )}
        </form>
    )
}
