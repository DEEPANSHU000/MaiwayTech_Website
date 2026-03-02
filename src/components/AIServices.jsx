import { useState } from 'react'
import { useModal } from '../context/ModalContext'

const services = [
    {
        icon: 'label',
        title: 'Data Labeling',
        description: 'High-quality training data annotation at scale. Bounding boxes, segmentation masks, keypoints, and text classification — powering your ML pipelines.',
        color: 'blue',
        features: ['Image Annotation', 'Text Classification', 'Video Labeling', 'Sensor Fusion'],
        details: {
            overview: 'Our data labeling services provide pixel-perfect annotations across images, video, text, and sensor data. We combine human expertise with AI-assisted tooling to deliver high-quality training data at scale.',
            benefits: ['99.5%+ annotation accuracy with multi-stage QA', 'Support for 20+ annotation types', 'Scalable workforce for projects of any size', 'HIPAA & SOC2 compliant data handling'],
            useCases: ['Autonomous vehicle perception', 'Medical image analysis', 'Retail product recognition', 'NLP model training'],
        },
    },
    {
        icon: 'image_search',
        title: 'Image Recognition',
        description: 'Production-grade computer vision models for object detection, facial recognition, OCR, and scene understanding across industries.',
        color: 'purple',
        features: ['Object Detection', 'Facial Recognition', 'OCR Engine', 'Scene Analysis'],
        details: {
            overview: 'We build and deploy custom computer vision models that see, understand, and interpret visual data with superhuman accuracy. From real-time detection to complex scene analysis.',
            benefits: ['Sub-100ms inference for real-time applications', 'Custom model training on your domain data', 'Edge deployment support (mobile, IoT, embedded)', 'Continuous model monitoring & retraining'],
            useCases: ['Security & surveillance systems', 'Quality inspection in manufacturing', 'Healthcare imaging diagnostics', 'Document processing & OCR'],
        },
    },
    {
        icon: 'perm_media',
        title: 'Multi-Modal Capture',
        description: 'End-to-end data acquisition pipelines for image, video, text, audio, and sensor data — powering AI pipelines across every modality.',
        color: 'indigo',
        features: ['Image & Video', 'Text & Documents', 'Audio & Speech', 'Sensor & IoT'],
        details: {
            overview: 'We design and implement automated multi-modal data capture systems that acquire high-quality training data from every source — cameras, microphones, documents, sensors, drones, and more. One unified pipeline for all your AI data needs.',
            benefits: ['Automated capture scheduling across all modalities', 'Real-time pre-processing & quality filtering', 'Video frame extraction & scene segmentation', 'Audio transcription & noise reduction pipelines', 'Cloud-based storage, tagging & retrieval'],
            useCases: ['Self-driving vehicle perception datasets', 'Video analytics & surveillance systems', 'Speech recognition & NLP model training', 'Document digitization & OCR pipelines', 'IoT sensor data aggregation for predictive AI'],
        },
    },
    {
        icon: 'campaign',
        title: 'Digital Marketing AI',
        description: 'AI-powered campaign optimization, audience segmentation, predictive analytics, and automated content generation for maximum ROI.',
        color: 'pink',
        features: ['Ad Optimization', 'Audience Targeting', 'Content Generation', 'Predictive Analytics'],
        details: {
            overview: 'Supercharge your marketing with AI that predicts customer behavior, personalizes content, and optimizes spend across channels—all in real-time.',
            benefits: ['30-50% improvement in campaign ROAS', 'AI-driven audience micro-segmentation', 'Automated A/B testing & optimization', 'Cross-channel attribution modeling'],
            useCases: ['E-commerce conversion optimization', 'Social media campaign management', 'Email marketing personalization', 'Customer lifetime value prediction'],
        },
    },
    {
        icon: 'auto_awesome',
        title: 'Generative AI',
        description: 'Custom LLM fine-tuning, RAG pipelines, AI agents, and multimodal generation — tailored to your business domain and data.',
        color: 'violet',
        features: ['LLM Fine-tuning', 'RAG Pipelines', 'AI Chatbots', 'Multimodal Gen'],
        details: {
            overview: 'We build custom GenAI solutions using state-of-the-art LLMs, fine-tuned on your proprietary data. From intelligent chatbots to content generation engines.',
            benefits: ['Domain-specific LLM fine-tuning', 'Enterprise-grade RAG with knowledge bases', 'Multi-agent orchestration systems', 'Guardrails for safe & compliant AI output'],
            useCases: ['Customer support automation', 'Internal knowledge assistants', 'Content & copywriting at scale', 'Code generation & review tools'],
        },
    },
    {
        icon: 'model_training',
        title: 'Model Evaluation',
        description: 'Rigorous RLHF, red-teaming, bias detection, and benchmark testing to ensure your AI models are safe, accurate, and reliable.',
        color: 'emerald',
        features: ['RLHF', 'Red Teaming', 'Bias Detection', 'Benchmark Testing'],
        details: {
            overview: 'We rigorously test and evaluate AI models to ensure they are accurate, fair, safe, and production-ready. Our evaluation frameworks cover every dimension of model quality.',
            benefits: ['Comprehensive bias & fairness audits', 'Adversarial red-teaming for safety', 'Custom benchmark suite creation', 'Continuous evaluation in production'],
            useCases: ['Pre-deployment model validation', 'Regulatory compliance testing', 'LLM safety & alignment evaluation', 'Performance regression monitoring'],
        },
    },
]

const colorMap = {
    blue: { bg: 'bg-blue-500/10', iconBg: 'bg-blue-500/15', iconText: 'text-blue-400', border: 'hover:border-blue-500/30', shadow: 'hover:shadow-blue-500/10', featureIcon: 'text-blue-400', gradient: 'from-blue-500 to-blue-600', ring: 'ring-blue-500/20' },
    purple: { bg: 'bg-purple-500/10', iconBg: 'bg-purple-500/15', iconText: 'text-purple-400', border: 'hover:border-purple-500/30', shadow: 'hover:shadow-purple-500/10', featureIcon: 'text-purple-400', gradient: 'from-purple-500 to-purple-600', ring: 'ring-purple-500/20' },
    indigo: { bg: 'bg-indigo-500/10', iconBg: 'bg-indigo-500/15', iconText: 'text-indigo-400', border: 'hover:border-indigo-500/30', shadow: 'hover:shadow-indigo-500/10', featureIcon: 'text-indigo-400', gradient: 'from-indigo-500 to-indigo-600', ring: 'ring-indigo-500/20' },
    pink: { bg: 'bg-pink-500/10', iconBg: 'bg-pink-500/15', iconText: 'text-pink-400', border: 'hover:border-pink-500/30', shadow: 'hover:shadow-pink-500/10', featureIcon: 'text-pink-400', gradient: 'from-pink-500 to-pink-600', ring: 'ring-pink-500/20' },
    violet: { bg: 'bg-violet-500/10', iconBg: 'bg-violet-500/15', iconText: 'text-violet-400', border: 'hover:border-violet-500/30', shadow: 'hover:shadow-violet-500/10', featureIcon: 'text-violet-400', gradient: 'from-violet-500 to-violet-600', ring: 'ring-violet-500/20' },
    emerald: { bg: 'bg-emerald-500/10', iconBg: 'bg-emerald-500/15', iconText: 'text-emerald-400', border: 'hover:border-emerald-500/30', shadow: 'hover:shadow-emerald-500/10', featureIcon: 'text-emerald-400', gradient: 'from-emerald-500 to-emerald-600', ring: 'ring-emerald-500/20' },
}

function ServiceDetailModal({ service, colors, onClose }) {
    const { open: openContact } = useModal()

    if (!service) return null

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
            <div
                className="relative w-full max-w-2xl bg-[#0f1221] border border-white/10 rounded-3xl shadow-2xl overflow-hidden animate-[modalIn_0.3s_ease-out] max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Gradient header */}
                <div className={`bg-gradient-to-r ${colors.gradient} px-10 py-8 relative overflow-hidden`}>
                    <div className="absolute inset-0 tech-grid opacity-10"></div>
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors cursor-pointer"
                    >
                        <span className="material-symbols-outlined text-white text-lg">close</span>
                    </button>
                    <div className="relative z-10 flex items-center gap-5">
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                            <span className="material-symbols-outlined text-white" style={{ fontSize: '32px' }}>{service.icon}</span>
                        </div>
                        <div>
                            <h2 className="text-2xl font-extrabold text-white">{service.title}</h2>
                            <p className="text-white/70 text-sm mt-1">{service.description}</p>
                        </div>
                    </div>
                </div>

                <div className="px-10 py-8 space-y-8">
                    {/* Overview */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">Overview</h3>
                        <p className="text-slate-300 text-[15px] leading-relaxed">{service.details.overview}</p>
                    </div>

                    {/* Benefits */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">Key Benefits</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {service.details.benefits.map((b, i) => (
                                <div key={i} className={`flex items-start gap-3 p-3 rounded-xl ${colors.bg} border border-white/5`}>
                                    <span className={`material-symbols-outlined ${colors.featureIcon} text-lg mt-0.5 flex-shrink-0`}>check_circle</span>
                                    <span className="text-sm text-slate-300">{b}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Use Cases */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">Use Cases</h3>
                        <div className="flex flex-wrap gap-2">
                            {service.details.useCases.map((uc, i) => (
                                <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold">
                                    {uc}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="pt-4 border-t border-white/10">
                        <button
                            onClick={() => { onClose(); openContact(); }}
                            className={`w-full py-4 bg-gradient-to-r ${colors.gradient} text-white font-bold rounded-xl transition-all text-sm shadow-lg cursor-pointer flex items-center justify-center gap-2 hover:opacity-90`}
                        >
                            <span className="material-symbols-outlined text-lg">send</span>
                            Get Started with {service.title}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function AIServices() {
    const [selectedService, setSelectedService] = useState(null)
    const { open: openContact } = useModal()

    return (
        <>
            <section id="ai-services" className="py-28 relative overflow-hidden border-t border-white/5">
                <div className="absolute inset-0 tech-grid opacity-[0.03]"></div>
                <div className="w-full px-[4%] sm:px-[5%] relative z-10">
                    <div className="flex flex-col items-center text-center gap-4 mb-20">
                        <span className="gradient-text-vibrant font-black text-sm uppercase tracking-[0.25em]">AI-Powered Solutions</span>
                        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
                            Our <span className="gradient-text-vibrant">AI-Powered</span> Service Suite
                        </h2>
                        <p className="text-slate-400 text-lg max-w-2xl leading-relaxed mt-2">
                            From data labeling to model deployment — we provide the full stack of AI services to accelerate your machine learning lifecycle.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => {
                            const colors = colorMap[service.color]
                            return (
                                <div
                                    key={index}
                                    className={`group p-8 rounded-3xl bg-white/4 border border-white/8 ${colors.border} hover:bg-white/6 transition-all duration-300 flex flex-col relative overflow-hidden`}
                                >
                                    {/* Background accent */}
                                    <div className={`absolute top-0 right-0 w-32 h-32 ${colors.bg} rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 -translate-y-1/2 translate-x-1/2`}></div>

                                    {/* Icon */}
                                    <div className={`w-16 h-16 ${colors.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <span className={`material-symbols-outlined ${colors.iconText}`} style={{ fontSize: '32px' }}>{service.icon}</span>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-extrabold text-white mb-3">{service.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">{service.description}</p>

                                    {/* Feature tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {service.features.map((feature, fi) => (
                                            <span
                                                key={fi}
                                                className="feature-bullet"
                                            >
                                                <span className={`material-symbols-outlined ${colors.featureIcon}`} style={{ fontSize: '14px' }}>check_circle</span>
                                                {feature}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Learn more link */}
                                    <div className="mt-6 pt-6 border-t border-white/8">
                                        <button
                                            onClick={() => setSelectedService(index)}
                                            className={`text-sm font-bold ${colors.iconText} flex items-center gap-2 group-hover:gap-3 transition-all cursor-pointer bg-transparent border-none p-0`}
                                        >
                                            Learn More
                                            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
                                        </button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {/* CTA Banner */}
                    <div className="mt-20 relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-15"></div>
                        <div className="relative bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
                            <div className="absolute inset-0 tech-grid opacity-[0.05]"></div>
                            <div className="absolute left-0 top-0 w-40 h-40 bg-blue-500/10 rounded-full blur-[60px]"></div>
                            <div className="relative z-10">
                                <h3 className="text-xl md:text-2xl font-extrabold text-white mb-1">Need a Custom AI Solution?</h3>
                                <p className="text-slate-400 text-sm">Let's discuss your requirements and build something extraordinary together.</p>
                            </div>
                            <button onClick={openContact} className="relative z-10 h-13 px-8 bg-primary hover:bg-accent text-white font-bold rounded-full transition-all text-sm shadow-xl shadow-blue-500/30 cursor-pointer whitespace-nowrap flex-shrink-0">
                                Book A Free Consultation
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Detail Modal */}
            {selectedService !== null && (
                <ServiceDetailModal
                    service={services[selectedService]}
                    colors={colorMap[services[selectedService].color]}
                    onClose={() => setSelectedService(null)}
                />
            )}
        </>
    )
}
