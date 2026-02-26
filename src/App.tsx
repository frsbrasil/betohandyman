import React, { useState, useEffect, useMemo, useRef } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import {
    Phone,
    Menu,
    X,
    ChevronRight,
    Star,
    Award,
    ShieldCheck,
    Clock,
    ArrowRight,
    Wrench,
    Paintbrush,
    Zap,
    Hammer,
    Leaf,
    Mail,
    CheckCircle2,
    CalendarCheck,
    Sparkles,
    Building2,
    MapPin,
    MessageSquare,
    Instagram,
    Facebook,
    MessageCircle,
} from 'lucide-react';
import Navbar from './Navbar';
import { useLanguage } from './context/LanguageContext';

// ─── Constants ───────────────────────────────────────────────────────────────
const PHONE_DISPLAY = '07384 631028';
const PHONE_HREF = 'tel:+447384631028';
const EMAIL = 'info@fenlandmaintenance.co.uk';
const WHATSAPP_NUMBER = '447377521293'; // +44 7377 521293 in international format without +
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}`;

// ─── Hero ─────────────────────────────────────────────────────────────────────
const Hero = () => {
    const { t } = useLanguage();
    return (
        <section className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop"
                    alt="Interior recently painted by Fenland Property Maintenance"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    fetchPriority="high"
                    loading="eager"
                />
                <div className="absolute inset-0 bg-neutral-900/40 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/50 via-neutral-900/20 to-neutral-900/70" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-center text-center mt-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="max-w-4xl"
                >
                    {/* Social proof badge */}
                    <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-5 py-2 mb-8">
                        <div className="flex gap-0.5 text-amber-400">
                            {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="currentColor" />)}
                        </div>
                        <span className="text-white text-sm font-medium">{t('heroSocialProof')}</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1] tracking-tight mb-5">
                        {t('heroTitle')}
                    </h1>
                    <p className="text-lg md:text-xl text-white/85 font-light max-w-2xl mx-auto mb-10">
                        {t('heroSubtitle')}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="#contact" className="bg-white text-neutral-900 px-8 py-4 rounded-full font-semibold text-base hover:bg-neutral-100 transition-colors w-full sm:w-auto flex items-center justify-center gap-2 shadow-lg">
                            <span>{t('heroCTA')}</span>
                            <ArrowRight size={17} />
                        </a>
                        <a href={PHONE_HREF} className="bg-neutral-900/30 backdrop-blur-md border border-white/25 text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-neutral-900/50 transition-colors w-full sm:w-auto flex items-center justify-center gap-2">
                            <Phone size={17} />
                            <span>{PHONE_DISPLAY}</span>
                        </a>
                    </div>

                    <p className="mt-6 text-white/60 text-sm">{t('heroHours')}</p>
                </motion.div>
            </div>
        </section>
    );
};

// ─── Credentials Bar ──────────────────────────────────────────────────────────
const Credentials = () => {
    const { t } = useLanguage();
    const items = [
        { icon: <ShieldCheck size={22} className="text-neutral-700" />, title: t('credInsuredTitle'), subtitle: t('credInsuredSub') },
        { icon: <Clock size={22} className="text-neutral-700" />, title: t('credYearsTitle'), subtitle: t('credYearsSub') },
        { icon: <Award size={22} className="text-neutral-700" />, title: t('credTrustedTitle'), subtitle: t('credTrustedSub') },
        { icon: <Star size={22} className="text-neutral-700" />, title: t('credStarsTitle'), subtitle: t('credStarsSub') },
    ];

    return (
        <section className="bg-white py-10 border-b border-neutral-100">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {items.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.08 }}
                            className="flex flex-col items-center text-center gap-3"
                        >
                            <div className="w-11 h-11 rounded-full bg-neutral-50 flex items-center justify-center">
                                {item.icon}
                            </div>
                            <div>
                                <p className="font-serif font-semibold text-neutral-900 text-sm md:text-base">{item.title}</p>
                                <p className="text-xs text-neutral-500 mt-0.5">{item.subtitle}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// ─── How It Works ─────────────────────────────────────────────────────────────
const HowItWorks = () => {
    const { t } = useLanguage();
    const steps = [
        {
            icon: <MessageSquare size={26} className="text-neutral-700" />,
            step: '01',
            title: t('hiwStep1Title'),
            desc: t('hiwStep1Desc'),
        },
        {
            icon: <CalendarCheck size={26} className="text-neutral-700" />,
            step: '02',
            title: t('hiwStep2Title'),
            desc: t('hiwStep2Desc'),
        },
        {
            icon: <Sparkles size={26} className="text-neutral-700" />,
            step: '03',
            title: t('hiwStep3Title'),
            desc: t('hiwStep3Desc'),
        },
    ];

    return (
        <section className="min-h-screen flex flex-col justify-center py-20 bg-[#faf9f6]">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-4">{t('hiwTitle')}</h2>
                    <p className="text-neutral-500 font-light max-w-xl mx-auto">{t('hiwSubtitle')}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connector line (desktop) */}
                    <div className="hidden md:block absolute top-10 left-[calc(16.66%+1.5rem)] right-[calc(16.66%+1.5rem)] h-px bg-neutral-200 z-0" />
                    {steps.map((s, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.12 }}
                            className="flex flex-col items-center text-center relative z-10"
                        >
                            <div className="w-20 h-20 rounded-full bg-white border border-neutral-100 shadow-sm flex items-center justify-center mb-5">
                                {s.icon}
                            </div>
                            <span className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-2">{s.step}</span>
                            <h3 className="font-serif text-xl font-medium text-neutral-900 mb-3">{s.title}</h3>
                            <p className="text-neutral-500 font-light leading-relaxed text-sm max-w-xs">{s.desc}</p>
                        </motion.div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-neutral-900 text-white px-7 py-3.5 rounded-full font-medium hover:bg-neutral-700 transition-colors text-sm">
                        <Phone size={16} />
                        {t('hiwCallNow')} {PHONE_DISPLAY}
                    </a>
                </div>
            </div>
        </section>
    );
};

// ─── Landlord CTA ─────────────────────────────────────────────────────────────
const LandlordCTA = () => {
    const { t } = useLanguage();
    return (
        <section className="min-h-screen flex flex-col justify-center bg-neutral-900 py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
                            <Building2 size={14} className="text-white/70" />
                            <span className="text-white/80 text-xs font-medium tracking-wider uppercase">{t('landlordBadge')}</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif text-white leading-snug mb-6">
                            {t('landlordTitle')}
                        </h2>
                        <p className="text-neutral-400 font-light leading-relaxed mb-8">
                            {t('landlordDesc')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="#contact" className="bg-white text-neutral-900 px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-neutral-100 transition-colors text-center">
                                {t('landlordCTA')}
                            </a>
                            <a href={PHONE_HREF} className="border border-white/25 text-white px-7 py-3.5 rounded-full font-medium text-sm hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                                <Phone size={15} /> {PHONE_DISPLAY}
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        {[
                            { icon: <CheckCircle2 size={20} className="text-emerald-400 shrink-0 mt-0.5" />, title: t('landlordFeature1Title'), desc: t('landlordFeature1Desc') },
                            { icon: <CheckCircle2 size={20} className="text-emerald-400 shrink-0 mt-0.5" />, title: t('landlordFeature2Title'), desc: t('landlordFeature2Desc') },
                            { icon: <CheckCircle2 size={20} className="text-emerald-400 shrink-0 mt-0.5" />, title: t('landlordFeature3Title'), desc: t('landlordFeature3Desc') },
                            { icon: <CheckCircle2 size={20} className="text-emerald-400 shrink-0 mt-0.5" />, title: t('landlordFeature4Title'), desc: t('landlordFeature4Desc') },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex gap-4 p-5 rounded-xl bg-white/5 border border-white/10"
                            >
                                {item.icon}
                                <div>
                                    <p className="text-white font-medium text-sm mb-1">{item.title}</p>
                                    <p className="text-neutral-400 font-light text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// ─── Gallery ──────────────────────────────────────────────────────────────────
const Gallery = () => {
    const { t } = useLanguage();
    const images = [
        { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop', alt: t('galleryLabel1'), label: t('galleryLabel1') },
        { src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=2070&auto=format&fit=crop', alt: t('galleryLabel2'), label: t('galleryLabel2') },
        { src: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop', alt: t('galleryLabel3'), label: t('galleryLabel3') },
        { src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2070&auto=format&fit=crop', alt: t('galleryLabel4'), label: t('galleryLabel4') },
    ];

    return (
        <section id="gallery" className="min-h-screen flex flex-col justify-center py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-4">{t('galleryTitle')}</h2>
                        <p className="text-lg text-neutral-500 font-light">
                            {t('gallerySubtitle')}
                        </p>
                    </div>
                    <a href="#contact" className="mt-6 md:mt-0 flex items-center gap-2 text-neutral-900 font-medium hover:text-neutral-600 transition-colors text-sm">
                        <span>{t('galleryCTA')}</span>
                        <ChevronRight size={15} />
                    </a>
                </div>
                {/* ... rest of gallery ... */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {images.map((image, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: idx * 0.09 }}
                            className="relative group overflow-hidden rounded-2xl aspect-[1/2]"
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                referrerPolicy="no-referrer"
                            />
                            {/* Label overlay */}
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-neutral-900/70 to-transparent px-4 py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                <p className="text-white text-xs font-medium">{image.label}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// ─── Reviews ──────────────────────────────────────────────────────────────────
const Reviews = () => {
    const { t } = useLanguage();
    const reviews = [
        {
            name: 'Sarah J.',
            location: 'Ely',
            rating: 5,
            text: t('review1Text'),
            date: t('review1Date'),
        },
        {
            name: 'James Wilson',
            location: 'Soham',
            rating: 5,
            text: t('review2Text'),
            date: t('review2Date'),
        },
        {
            name: 'Emily R.',
            location: 'Cambridge',
            rating: 5,
            text: t('review3Text'),
            date: t('review3Date'),
        },
    ];

    return (
        <section id="reviews" className="min-h-screen flex flex-col justify-center py-24 bg-neutral-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
                        {t('reviewsTitle')}
                    </h2>
                    <div className="flex items-center justify-center gap-1.5 text-amber-400 mb-2">
                        {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                    </div>
                    <p className="text-neutral-400 text-lg">{t('reviewsSubtitle')}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((rev, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col h-full"
                        >
                            <div className="flex gap-1 text-amber-400 mb-5">
                                {[...Array(rev.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                            </div>
                            <p className="text-white/90 font-light leading-relaxed mb-8 flex-grow italic">
                                "{rev.text}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-white text-xs font-bold">
                                    {rev.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-white font-medium text-sm">{rev.name}</p>
                                    <p className="text-neutral-500 text-xs">{rev.location} · {rev.date}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// ─── Services ─────────────────────────────────────────────────────────────────
const Services = () => {
    const { t } = useLanguage();
    const services = [
        {
            icon: <Paintbrush className="text-neutral-700" />,
            title: t('service1Title'),
            desc: t('service1Desc'),
        },
        {
            icon: <Hammer className="text-neutral-700" />,
            title: t('service2Title'),
            desc: t('service2Desc'),
        },
        {
            icon: <Zap className="text-neutral-700" />,
            title: t('service3Title'),
            desc: t('service3Desc'),
        },
        {
            icon: <Leaf className="text-neutral-700" />,
            title: t('service4Title'),
            desc: t('service4Desc'),
        },
        {
            icon: <Wrench className="text-neutral-700" />,
            title: t('service5Title'),
            desc: t('service5Desc'),
        },
        {
            icon: <Building2 className="text-neutral-700" />,
            title: t('service6Title'),
            desc: t('service6Desc'),
        },
    ];

    return (
        <section id="services" className="min-h-screen flex flex-col justify-center py-24 bg-[#faf9f6]">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-6">{t('servicesTitle')}</h2>
                        <p className="text-lg text-neutral-500 font-light">
                            {t('servicesSubtitle')}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="group p-8 bg-white border border-neutral-100 rounded-3xl hover:shadow-xl hover:shadow-neutral-200/40 transition-all duration-300"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-neutral-50 flex items-center justify-center mb-6 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                                {React.cloneElement(service.icon as React.ReactElement, { size: 24 })}
                            </div>
                            <h3 className="text-xl font-medium text-neutral-900 mb-3">{service.title}</h3>
                            <p className="text-neutral-500 font-light leading-relaxed text-sm">{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a href="#contact" className="inline-flex items-center gap-2 border border-neutral-200 text-neutral-800 px-7 py-3.5 rounded-full font-medium text-sm hover:bg-neutral-50 transition-colors">
                        {t('servicesCTA')} <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};

// ─── Cambridgeshire Map Data ──────────────────────────────────────────────────
const CAMBS_CITIES = [
    { name: 'Ely', lat: 52.3996, lng: 0.2624, hub: true },
    { name: 'Cambridge', lat: 52.2053, lng: 0.1218 },
    { name: 'Soham', lat: 52.3339, lng: 0.3373 },
    { name: 'Newmarket', lat: 52.2457, lng: 0.4083 },
    { name: 'Huntingdon', lat: 52.3320, lng: -0.1836 },
    { name: 'Littleport', lat: 52.4601, lng: 0.3046 },
    { name: 'Burwell', lat: 52.2759, lng: 0.3263 },
    { name: 'Fordham', lat: 52.3121, lng: 0.3868 },
    { name: 'Sutton', lat: 52.3687, lng: -0.0263 },
    { name: 'Chatteris', lat: 52.4564, lng: -0.0544 },
    { name: 'St Ives', lat: 52.3298, lng: -0.0735 },
    { name: 'March', lat: 52.5533, lng: 0.0884 },
    { name: 'Sawston', lat: 52.1257, lng: 0.1757 },
    { name: 'Haverhill', lat: 52.0826, lng: 0.4394 },
    { name: 'Saffron Walden', lat: 52.0224, lng: 0.2402 },
    { name: 'Royston', lat: 52.0477, lng: -0.0210 },
];

const LAT_MIN = 51.95, LAT_MAX = 52.60;
const LNG_MIN = -0.30, LNG_MAX = 0.52;

const CambridgeshireMap = () => {
    const W = 640, H = 420;

    const project = (lat: number, lng: number) => ({
        x: ((lng - LNG_MIN) / (LNG_MAX - LNG_MIN)) * W,
        y: H - ((lat - LAT_MIN) / (LAT_MAX - LAT_MIN)) * H,
    });

    const hub = CAMBS_CITIES.find(c => c.hub)!;
    const hubPt = project(hub.lat, hub.lng);

    const curvePath = (x1: number, y1: number, x2: number, y2: number) => {
        const mx = (x1 + x2) / 2;
        const my = (y1 + y2) / 2 - Math.abs(x2 - x1) * 0.25;
        return `M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`;
    };

    const dots = useMemo(() => {
        const pts: { cx: number; cy: number }[] = [];
        const cols = 52, rows = 34;
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                pts.push({ cx: (c / (cols - 1)) * W, cy: (r / (rows - 1)) * H });
            }
        }
        return pts;
    }, []);

    return (
        <div className="relative w-full rounded-2xl overflow-hidden bg-[#faf9f6] border border-neutral-100 shadow-sm" style={{ aspectRatio: '640/420' }}>
            <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-full">
                {dots.map((d, i) => (
                    <circle key={i} cx={d.cx} cy={d.cy} r={1.2} fill="#d1d5db" opacity={0.45} />
                ))}

                {CAMBS_CITIES.filter(c => !c.hub).map((city, i) => {
                    const { x: x2, y: y2 } = project(city.lat, city.lng);
                    const d = curvePath(hubPt.x, hubPt.y, x2, y2);
                    return (
                        <motion.path
                            key={city.name}
                            d={d}
                            fill="none"
                            stroke="#9ca3af"
                            strokeWidth={1.2}
                            strokeDasharray="4 3"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 1.2, delay: i * 0.06, ease: 'easeOut' }}
                        />
                    );
                })}

                {CAMBS_CITIES.map((city) => {
                    const { x, y } = project(city.lat, city.lng);
                    return (
                        <g key={city.name}>
                            <motion.circle
                                cx={x} cy={y} r={city.hub ? 14 : 10}
                                fill="none"
                                stroke={city.hub ? '#374151' : '#6b7280'}
                                strokeWidth={1}
                                initial={{ scale: 0.6, opacity: 0.8 }}
                                animate={{ scale: 1.5, opacity: 0 }}
                                transition={{ duration: 2, repeat: Infinity, delay: Math.random() * 1.5, ease: 'easeOut' }}
                                style={{ transformOrigin: `${x}px ${y}px` }}
                            />
                            <motion.circle
                                cx={x} cy={y} r={city.hub ? 6 : 4}
                                fill={city.hub ? '#1f2937' : '#4b5563'}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.4, delay: city.hub ? 0 : 0.3 }}
                            />
                            <motion.text
                                x={x + (city.hub ? 9 : 7)}
                                y={y + 4}
                                fontSize={city.hub ? 11 : 9}
                                fontWeight={city.hub ? '700' : '500'}
                                fill={city.hub ? '#111827' : '#374151'}
                                fontFamily="serif"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                {city.name}
                            </motion.text>
                        </g>
                    );
                })}
            </svg>
        </div>
    );
};

// ─── Service Area ─────────────────────────────────────────────────────────────
const ServiceArea = () => {
    const { t } = useLanguage();

    return (
        <section id="service-area" className="min-h-screen flex flex-col justify-center py-24 bg-[#faf9f6] border-y border-neutral-100 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 text-neutral-500 text-sm font-medium mb-5">
                            <MapPin size={15} className="text-neutral-400" />
                            <span className="uppercase tracking-wider text-xs">{t('areaLabel')}</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-8">{t('areaTitle')}</h2>
                        <p className="text-lg text-neutral-500 font-light mb-8 leading-relaxed">
                            {t('areaSubtitle')}
                        </p>
                        <p className="text-neutral-500 font-light leading-relaxed mb-10">
                            {t('areaFlexDesc')}
                        </p>

                        <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-neutral-900 text-white px-7 py-3.5 rounded-full font-medium text-sm hover:bg-neutral-700 transition-colors">
                            <Phone size={15} /> {PHONE_DISPLAY}
                        </a>
                    </div>

                    <div>
                        <p className="text-xs uppercase tracking-widest text-neutral-400 font-medium mb-5">{t('areaSectionLabel')}</p>
                        <CambridgeshireMap />
                    </div>
                </div>
            </div>
        </section>
    );
};

// ─── Contact ──────────────────────────────────────────────────────────────────
const NETLIFY_ENCODE = (data: Record<string, string>) =>
    Object.keys(data)
        .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
        .join('&');

const Contact = () => {
    const { t } = useLanguage();
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(false);
        const form = e.currentTarget;
        const data: Record<string, string> = { 'form-name': 'contact' };
        new FormData(form).forEach((val, key) => { data[key] = val as string; });
        try {
            await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: NETLIFY_ENCODE(data),
            });
            setSubmitted(true);
        } catch {
            setError(true);
        }
    };

    return (
        <section id="contact" className="min-h-screen flex flex-col justify-center py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-5">{t('contactTitle')}</h2>
                        <p className="text-lg text-neutral-500 font-light mb-8">
                            {t('contactSubtitle')}
                        </p>
                        <div className="space-y-5 mb-10">
                            <div className="flex items-center gap-4">
                                <div className="w-11 h-11 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-900 shrink-0">
                                    <Phone size={18} />
                                </div>
                                <div>
                                    <p className="text-xs text-neutral-400 uppercase tracking-wider font-medium">{t('contactPhoneLabel')}</p>
                                    <a href={PHONE_HREF} className="text-lg font-semibold text-neutral-900 hover:text-neutral-600 transition-colors">{PHONE_DISPLAY}</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-11 h-11 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-900 shrink-0">
                                    <Mail size={18} />
                                </div>
                                <div>
                                    <p className="text-xs text-neutral-400 uppercase tracking-wider font-medium">{t('contactEmailLabel')}</p>
                                    <a href={`mailto:${EMAIL}`} className="text-lg font-semibold text-neutral-900 hover:text-neutral-600 transition-colors">{EMAIL}</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-11 h-11 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-900 shrink-0">
                                    <Clock size={18} />
                                </div>
                                <div>
                                    <p className="text-xs text-neutral-400 uppercase tracking-wider font-medium">{t('contactHoursLabel')}</p>
                                    <p className="text-base font-medium text-neutral-900">{t('contactHours')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#faf9f6] rounded-2xl p-6 border border-neutral-100">
                            <p className="text-sm font-semibold text-neutral-900 mb-3">{t('contactWhyChooseUsTitle')}</p>
                            {[t('contactWhyChooseUs1'), t('contactWhyChooseUs2'), t('contactWhyChooseUs3'), t('contactWhyChooseUs4')].map((item) => (
                                <div key={item} className="flex items-center gap-2.5 mb-2.5 last:mb-0">
                                    <CheckCircle2 size={15} className="text-emerald-500 shrink-0" />
                                    <span className="text-sm text-neutral-600">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-[#faf9f6] p-8 md:p-10 rounded-3xl border border-neutral-100">
                        {submitted ? (
                            <div className="flex flex-col items-center justify-center py-12 text-center">
                                <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mb-5">
                                    <CheckCircle2 size={32} className="text-emerald-500" />
                                </div>
                                <h3 className="text-2xl font-serif text-neutral-900 mb-3">{t('contactSuccessTitle')}</h3>
                                <p className="text-neutral-500 font-light max-w-xs">
                                    {t('contactSuccessMessage', { phone: PHONE_DISPLAY })}
                                </p>
                            </div>
                        ) : (
                            <form
                                name="contact"
                                method="POST"
                                data-netlify="true"
                                data-netlify-honeypot="bot-field"
                                className="space-y-5"
                                onSubmit={handleSubmit}
                            >
                                {/* Netlify hidden fields */}
                                <input type="hidden" name="form-name" value="contact" />
                                <p hidden><label>Don't fill this out: <input name="bot-field" /></label></p>

                                <h3 className="font-serif text-xl text-neutral-900 mb-6">{t('contactFormTitle')}</h3>

                                {error && (
                                    <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3">
                                        Something went wrong. Please try again or call us directly.
                                    </div>
                                )}

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-1.5">
                                        <label htmlFor="contact-name" className="text-sm font-medium text-neutral-700">{t('contactNameLabel')}</label>
                                        <input id="contact-name" name="name" type="text" required className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 bg-white text-sm transition-all" placeholder={t('contactNamePlaceholder')} />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label htmlFor="contact-phone" className="text-sm font-medium text-neutral-700">{t('contactPhoneFormLabel')}</label>
                                        <input id="contact-phone" name="phone" type="tel" className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 bg-white text-sm transition-all" placeholder={t('contactPhonePlaceholder')} />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label htmlFor="contact-email" className="text-sm font-medium text-neutral-700">{t('contactEmailFormLabel')}</label>
                                    <input id="contact-email" name="email" type="email" required className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 bg-white text-sm transition-all" placeholder={t('contactEmailPlaceholder')} />
                                </div>
                                <div className="space-y-1.5">
                                    <label htmlFor="contact-service" className="text-sm font-medium text-neutral-700">{t('contactServiceLabel')}</label>
                                    <select id="contact-service" name="service" className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 bg-white text-sm transition-all">
                                        <option>{t('service1Title')}</option>
                                        <option>{t('service2Title')}</option>
                                        <option>{t('service3Title')}</option>
                                        <option>{t('service4Title')}</option>
                                        <option>{t('service5Title')}</option>
                                        <option>{t('service6Title')}</option>
                                        <option>{t('contactServiceOptionUnsure')}</option>
                                    </select>
                                </div>
                                <div className="space-y-1.5">
                                    <label htmlFor="contact-message" className="text-sm font-medium text-neutral-700">{t('contactMessageLabel')}</label>
                                    <textarea id="contact-message" name="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 bg-white text-sm transition-all resize-none" placeholder={t('contactMessagePlaceholder')} />
                                </div>
                                <button type="submit" className="w-full bg-neutral-900 text-white py-4 rounded-xl font-semibold text-sm hover:bg-neutral-700 transition-colors shadow-sm">
                                    {t('contactSubmitButton')}
                                </button>
                                <p className="text-xs text-neutral-400 text-center">{t('contactResponseTime')}</p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

// ─── Footer ───────────────────────────────────────────────────────────────────
const Footer = () => {
    const { t } = useLanguage();
    return (
        <footer className="bg-neutral-950 text-white py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
                    <div className="max-w-2xl">
                        <p className="font-serif text-2xl font-semibold mb-4">Fenland Property Maintenance.</p>
                        <p className="text-neutral-400 font-light text-sm leading-relaxed">{t('footerDesc')}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
                        <a href={PHONE_HREF} className="flex items-center gap-3 group">
                            <Phone size={18} className="text-neutral-400 group-hover:text-white transition-colors" />
                            <span className="text-sm font-semibold tracking-wide">{PHONE_DISPLAY}</span>
                        </a>
                        <a href="#contact" className="bg-white text-neutral-900 px-7 py-3 rounded-full font-bold text-sm hover:bg-neutral-100 transition-all active:scale-95 shadow-lg">
                            {t('navFreeQuote')}
                        </a>
                    </div>
                </div>
                <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6 text-neutral-500">
                    <p className="text-[11px] tracking-wide italic">
                        © {new Date().getFullYear()} Fenland Property Maintenance. {t('footerRights')}
                    </p>
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-4 border-r border-white/10 pr-8 mr-0">
                            <a href="https://www.instagram.com/globalinsightpartners.oficial/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
                                <Instagram size={16} />
                            </a>
                            <a href="https://www.facebook.com/people/Globalinsightpartners/61570809805072/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Facebook">
                                <Facebook size={16} />
                            </a>
                        </div>
                        <a href="#" className="text-[11px] hover:text-white transition-colors">{t('footerPrivacy')}</a>
                        <a href="#" className="text-[11px] hover:text-white transition-colors">{t('footerTerms')}</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

// ─── WhatsApp Button ──────────────────────────────────────────────────────────
const WhatsAppButton = () => {
    const { t } = useLanguage();
    return (
        <motion.a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-2xl hover:bg-[#22c35e] transition-all group"
            aria-label={t('whatsappAriaLabel')}
        >
            <div className="relative">
                <MessageCircle size={24} fill="currentColor" className="text-white" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 border-2 border-[#25D366] rounded-full animate-pulse" />
            </div>
            <span className="font-semibold text-sm tracking-wide">
                {t('whatsappLabel')}
            </span>
        </motion.a>
    );
};

// ─── Main App ─────────────────────────────────────────────────────────────────
const App = () => {
    return (
        <div className="relative font-sans text-neutral-900 bg-white">
            <Navbar />
            <main>
                <Hero />
                <Credentials />
                <HowItWorks />
                <LandlordCTA />
                <Gallery />
                <Reviews />
                <Services />
                <ServiceArea />
                <Contact />
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default App;
