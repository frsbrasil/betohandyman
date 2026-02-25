import React, { useState, useEffect, useMemo, useRef } from 'react';
import DottedMap from 'dotted-map';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from './context/LanguageContext';
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
  Globe,
  LayoutGrid,
  Users,
  Search,
} from 'lucide-react';

// ─── Constants ───────────────────────────────────────────────────────────────
const PHONE_DISPLAY = '07384 631028';
const PHONE_HREF = 'tel:+447384631028';
const EMAIL = 'hello@antigravity.dev';

// ─── Navbar ──────────────────────────────────────────────────────────────────
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className={`font-serif text-xl font-semibold tracking-tight ${isScrolled ? 'text-neutral-900' : 'text-white'}`}>
          {t('nav_brand')}.
        </div>

        <div className="hidden md:flex items-center space-x-7">
          {['#services', '#service-area', '#gallery', '#reviews', '#contact'].map((href, i) => {
            const keys = ['nav_services', 'nav_areas', 'nav_gallery', 'nav_reviews', 'nav_contact'];
            return (
              <a key={href} href={href} className={`text-sm font-medium tracking-wide transition-colors ${isScrolled ? 'text-neutral-600 hover:text-neutral-900' : 'text-white/80 hover:text-white'}`}>
                {t(keys[i])}
              </a>
            );
          })}

          {/* Language Toggle */}
          <button
            onClick={() => setLanguage(language === 'EN' ? 'PT' : 'EN')}
            className={`flex items-center space-x-1 px-3 py-1.5 rounded-full border text-xs font-semibold transition-all ${isScrolled
              ? 'border-neutral-200 text-neutral-600 hover:bg-neutral-50'
              : 'border-white/20 text-white/80 hover:bg-white/10'
              }`}
          >
            <Globe size={13} />
            <span>{language === 'EN' ? 'PT' : 'EN'}</span>
          </button>

          <a href={PHONE_HREF} className={`flex items-center space-x-1.5 text-sm font-semibold transition-colors ${isScrolled ? 'text-neutral-900' : 'text-white'}`}>
            <Phone size={15} />
            <span>{PHONE_DISPLAY}</span>
          </a>
          <a href="#contact" className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${isScrolled ? 'bg-neutral-900 text-white hover:bg-neutral-700' : 'bg-white text-neutral-900 hover:bg-neutral-100'}`}>
            {t('nav_free_quote')}
          </a>
        </div>

        <button
          className={`md:hidden ${isScrolled ? 'text-neutral-900' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-lg py-6 px-6 flex flex-col space-y-4 md:hidden"
          >
            {[['#services', 'nav_services'], ['#service-area', 'nav_areas'], ['#gallery', 'nav_gallery'], ['#reviews', 'nav_reviews'], ['#contact', 'nav_contact']].map(([href, key]) => (
              <a key={href} href={href} className="text-neutral-700 font-medium py-1" onClick={() => setMobileMenuOpen(false)}>{t(key)}</a>
            ))}

            <button
              onClick={() => {
                setLanguage(language === 'EN' ? 'PT' : 'EN');
                setMobileMenuOpen(false);
              }}
              className="flex items-center space-x-2 text-neutral-700 font-medium py-1 border-t pt-4 mt-2"
            >
              <Globe size={16} />
              <span>{language === 'EN' ? 'Português (PT)' : 'English (EN)'}</span>
            </button>

            <a href={PHONE_HREF} className="flex items-center space-x-2 text-neutral-900 font-semibold py-1">
              <Phone size={16} /><span>{PHONE_DISPLAY}</span>
            </a>
            <a href="#contact" className="bg-neutral-900 text-white px-6 py-3 rounded-full font-medium text-center mt-2" onClick={() => setMobileMenuOpen(false)}>
              {t('nav_free_quote')}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// ─── Hero ─────────────────────────────────────────────────────────────────────
const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
          alt="Modern dashboard and web development by Antigravity"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
          fetchPriority="high"
          loading="eager"
        />
        <div className="absolute inset-0 bg-neutral-900/60 mix-blend-multiply" />
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
            <span className="text-white text-sm font-medium">{t('hero_social_proof')}</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1] tracking-tight mb-5">
            {t('hero_title_1')}<br className="hidden md:block" />
            <span className="text-neutral-200">{t('hero_title_2')}</span>
          </h1>
          <p className="text-lg md:text-xl text-white/85 font-light max-w-2xl mx-auto mb-10">
            {t('hero_desc')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="bg-white text-neutral-900 px-8 py-4 rounded-full font-semibold text-base hover:bg-neutral-100 transition-colors w-full sm:w-auto flex items-center justify-center gap-2 shadow-lg">
              <span>{t('hero_cta')}</span>
              <ArrowRight size={17} />
            </a>
            <a href={PHONE_HREF} className="bg-neutral-900/30 backdrop-blur-md border border-white/25 text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-neutral-900/50 transition-colors w-full sm:w-auto flex items-center justify-center gap-2">
              <Phone size={17} />
              <span>{PHONE_DISPLAY}</span>
            </a>
          </div>

          <p className="mt-6 text-white/60 text-sm">{t('hero_hours')}</p>
        </motion.div>
      </div>
    </section>
  );
};

// ─── Credentials Bar ──────────────────────────────────────────────────────────
const Credentials = () => {
  const { t } = useLanguage();
  const items = [
    { icon: <ShieldCheck size={22} className="text-neutral-700" />, title: t('cred_title_1'), subtitle: t('cred_subtitle_1') },
    { icon: <Clock size={22} className="text-neutral-700" />, title: t('cred_title_2'), subtitle: t('cred_subtitle_2') },
    { icon: <Award size={22} className="text-neutral-700" />, title: t('cred_title_3'), subtitle: t('cred_subtitle_3') },
    { icon: <Star size={22} className="text-neutral-700" />, title: t('cred_title_4'), subtitle: t('cred_subtitle_4') },
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
      title: t('how_step1_title'),
      desc: t('how_step1_desc'),
    },
    {
      icon: <CalendarCheck size={26} className="text-neutral-700" />,
      step: '02',
      title: t('how_step2_title'),
      desc: t('how_step2_desc'),
    },
    {
      icon: <Sparkles size={26} className="text-neutral-700" />,
      step: '03',
      title: t('how_step3_title'),
      desc: t('how_step3_desc'),
    },
  ];

  return (
    <section className="py-20 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-4">{t('how_title')}</h2>
          <p className="text-neutral-500 font-light max-w-xl mx-auto">{t('how_desc')}</p>
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
            {t('how_cta')}
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
    <section className="bg-neutral-900 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <Building2 size={14} className="text-white/70" />
              <span className="text-white/80 text-xs font-medium tracking-wider uppercase">{t('landlord_badge')}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-white leading-snug mb-6 whitespace-pre-line">
              {t('landlord_title')}
            </h2>
            <p className="text-neutral-400 font-light leading-relaxed mb-8">
              {t('landlord_desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-white text-neutral-900 px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-neutral-100 transition-colors text-center">
                {t('landlord_cta_1')}
              </a>
              <a href={PHONE_HREF} className="border border-white/25 text-white px-7 py-3.5 rounded-full font-medium text-sm hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                <Phone size={15} /> {PHONE_DISPLAY}
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {[
              { icon: <CheckCircle2 size={20} className="text-emerald-400 shrink-0 mt-0.5" />, title: t('landlord_feat1_title'), desc: t('landlord_feat1_desc') },
              { icon: <CheckCircle2 size={20} className="text-emerald-400 shrink-0 mt-0.5" />, title: t('landlord_feat2_title'), desc: t('landlord_feat2_desc') },
              { icon: <CheckCircle2 size={20} className="text-emerald-400 shrink-0 mt-0.5" />, title: t('landlord_feat3_title'), desc: t('landlord_feat3_desc') },
              { icon: <CheckCircle2 size={20} className="text-emerald-400 shrink-0 mt-0.5" />, title: t('landlord_feat4_title'), desc: t('landlord_feat4_desc') },
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
    { src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop', alt: 'Modern Dashboard Development', label: t('gallery_img1_label') },
    { src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop', alt: 'Clean Code Architecture', label: t('gallery_img2_label') },
    { src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2031&auto=format&fit=crop', alt: 'AI Integration Work', label: t('gallery_img3_label') },
    { src: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop', alt: 'Performance Optimization', label: t('gallery_img4_label') },
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-4">{t('gallery_title')}</h2>
            <p className="text-lg text-neutral-500 font-light">
              {t('gallery_desc')}
            </p>
          </div>
          <a href="#contact" className="mt-6 md:mt-0 flex items-center gap-2 text-neutral-900 font-medium hover:text-neutral-600 transition-colors text-sm">
            <span>{t('gallery_cta')}</span>
            <ChevronRight size={15} />
          </a>
        </div>

        {/* Uniform 2×2 grid — all images same fixed height, no overflow split */}
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
      name: 'Eleanor Hughes',
      location: 'Grantchester, Cambridge',
      text: t('review_1_text'),
    },
    {
      name: 'David & Sarah Chen',
      location: 'Trumpington, Cambridge',
      text: t('review_2_text'),
    },
    {
      name: 'Marcus Thorne',
      location: 'Soham',
      text: t('review_3_text'),
    },
    {
      name: 'Janet Proctor',
      location: 'Ely',
      text: t('review_4_text'),
    },
    {
      name: 'Tom Whitfield',
      location: 'Newmarket',
      text: t('review_5_text'),
    },
    {
      name: 'Sarah Okafor',
      location: 'Huntingdon',
      text: t('review_6_text'),
    },
  ];

  return (
    <section id="reviews" className="py-24 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-4">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="flex gap-0.5 text-amber-400">
              {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
            </div>
            <span className="text-neutral-600 font-medium text-sm">{t('reviews_proof')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-5">{t('reviews_title')}</h2>
          <p className="text-neutral-500 font-light">
            {t('reviews_subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bg-white p-7 rounded-2xl border border-neutral-100 shadow-sm"
            >
              <div className="flex gap-1 mb-5 text-amber-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-neutral-600 font-light leading-relaxed mb-6 text-[15px]">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3 pt-5 border-t border-neutral-100">
                <div className="w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center text-sm font-semibold text-neutral-600">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-neutral-900 text-sm">{review.name}</p>
                  <p className="text-xs text-neutral-400 flex items-center gap-1 mt-0.5">
                    <MapPin size={10} /> {review.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-neutral-400 text-sm">{t('reviews_source')}</p>
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
      title: t('service_s1_title'),
      description: t('service_s1_desc'),
      icon: <LayoutGrid size={22} />,
    },
    {
      title: t('service_s2_title'),
      description: t('service_s2_desc'),
      icon: <Sparkles size={22} />,
    },
    {
      title: t('service_s3_title'),
      description: t('service_s3_desc'),
      icon: <Users size={22} />,
    },
    {
      title: t('service_s4_title'),
      description: t('service_s4_desc'),
      icon: <Paintbrush size={22} />,
    },
    {
      title: t('service_s5_title'),
      description: t('service_s5_desc'),
      icon: <Globe size={22} />,
    },
    {
      title: t('service_s6_title'),
      description: t('service_s6_desc'),
      icon: <Search size={22} />,
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-5">{t('services_title')}</h2>
          <p className="text-lg text-neutral-500 font-light">
            {t('services_desc')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.07 }}
              className="p-8 rounded-2xl border border-neutral-100 bg-[#faf9f6] hover:shadow-md transition-shadow group"
            >
              <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center text-neutral-900 mb-6 shadow-sm group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-lg font-serif font-semibold text-neutral-900 mb-3">{service.title}</h3>
              <p className="text-neutral-500 font-light leading-relaxed text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="#contact" className="inline-flex items-center gap-2 border border-neutral-200 text-neutral-800 px-7 py-3.5 rounded-full font-medium text-sm hover:bg-neutral-50 transition-colors">
            {t('services_cta')} <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

// ─── Cambridgeshire Map ───────────────────────────────────────────────────────
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

// Bounding box slightly padded around Cambridgeshire
const LAT_MIN = 51.95, LAT_MAX = 52.60;
const LNG_MIN = -0.30, LNG_MAX = 0.52;

const CambridgeshireMap = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const W = 640, H = 420;

  const project = (lat: number, lng: number) => ({
    x: ((lng - LNG_MIN) / (LNG_MAX - LNG_MIN)) * W,
    y: H - ((lat - LAT_MIN) / (LAT_MAX - LAT_MIN)) * H,
  });

  const hub = CAMBS_CITIES.find(c => c.hub)!;
  const hubPt = project(hub.lat, hub.lng);

  // Build curved SVG path between two points
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
      <svg ref={svgRef} viewBox={`0 0 ${W} ${H}`} className="w-full h-full">
        <defs>
          {CAMBS_CITIES.filter(c => !c.hub).map((city, i) => {
            const { x: x2, y: y2 } = project(city.lat, city.lng);
            return (
              <linearGradient key={i} id={`grad-${i}`} x1={hubPt.x / W} y1={hubPt.y / H} x2={x2 / W} y2={y2 / H} gradientUnits="objectBoundingBox">
                <stop offset="0%" stopColor="#6b7280" />
                <stop offset="100%" stopColor="#374151" />
              </linearGradient>
            );
          })}
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Dot grid background */}
        {dots.map((d, i) => (
          <circle key={i} cx={d.cx} cy={d.cy} r={1.2} fill="#d1d5db" opacity={0.45} />
        ))}

        {/* Connection arcs from Ely to each city */}
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

        {/* City dots */}
        {CAMBS_CITIES.map((city) => {
          const { x, y } = project(city.lat, city.lng);
          return (
            <g key={city.name}>
              {/* Pulse ring */}
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
              {/* Main dot */}
              <motion.circle
                cx={x} cy={y} r={city.hub ? 6 : 4}
                fill={city.hub ? '#1f2937' : '#4b5563'}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: city.hub ? 0 : 0.3 }}
              />
              {/* Label */}
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
  const areas = [
    'Ely', 'Cambridge', 'Soham', 'Newmarket', 'Huntingdon', 'Littleport',
    'Burwell', 'Fordham', 'Sutton', 'Chatteris', 'St Ives', 'March',
    'Sawston', 'Haverhill', 'Saffron Walden', 'Royston',
  ];

  return (
    <section id="service-area" className="py-20 bg-[#faf9f6] border-t border-neutral-100 min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-neutral-500 text-sm font-medium mb-5">
              <MapPin size={15} className="text-neutral-400" />
              <span className="uppercase tracking-wider text-xs">{t('area_badge')}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-5">
              {t('area_title')}
            </h2>
            <p className="text-neutral-500 font-light leading-relaxed mb-8">
              {t('area_desc1')}
            </p>
            <p className="text-neutral-500 font-light leading-relaxed mb-8">
              {t('area_desc2')}
            </p>
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-neutral-900 text-white px-7 py-3.5 rounded-full font-medium text-sm hover:bg-neutral-700 transition-colors">
              <Phone size={15} /> {PHONE_DISPLAY}
            </a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-neutral-400 font-medium mb-5">{t('area_label')}</p>
            <CambridgeshireMap />
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Contact ──────────────────────────────────────────────────────────────────
const Contact = () => {
  const { language, t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-5">{t('contact_title')}</h2>
            <p className="text-lg text-neutral-500 font-light mb-8">
              {t('contact_desc')}
            </p>
            <div className="space-y-5 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-900 shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs text-neutral-400 uppercase tracking-wider font-medium">{t('contact_phone_label')}</p>
                  <a href={PHONE_HREF} className="text-lg font-semibold text-neutral-900 hover:text-neutral-600 transition-colors">{PHONE_DISPLAY}</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-900 shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs text-neutral-400 uppercase tracking-wider font-medium">{t('contact_email_label')}</p>
                  <a href={`mailto:${EMAIL}`} className="text-lg font-semibold text-neutral-900 hover:text-neutral-600 transition-colors">{EMAIL}</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-900 shrink-0">
                  <Clock size={18} />
                </div>
                <div>
                  <p className="text-xs text-neutral-400 uppercase tracking-wider font-medium">{t('contact_hours_label')}</p>
                  <p className="text-base font-medium text-neutral-900">{t('contact_hours_val')}</p>
                </div>
              </div>
            </div>
            <div className="bg-[#faf9f6] rounded-2xl p-6 border border-neutral-100">
              <p className="text-sm font-semibold text-neutral-900 mb-3">{t('contact_reason_title')}</p>
              {[t('contact_r1'), t('contact_r2'), t('contact_r3'), t('contact_r4')].map((item) => (
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
                <h3 className="text-2xl font-serif text-neutral-900 mb-3">{t('contact_success_title')}</h3>
                <p className="text-neutral-500 font-light max-w-xs">
                  {t('contact_success_desc')}
                </p>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                <h3 className="font-serif text-xl text-neutral-900 mb-6">{t('contact_form_title')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-sm font-medium text-neutral-700">{t('contact_form_name')}</label>
                    <input id="contact-name" type="text" required className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 bg-white text-sm transition-all" placeholder={t('contact_form_name_ph')} />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="contact-phone" className="text-sm font-medium text-neutral-700">{t('contact_form_phone')}</label>
                    <input id="contact-phone" type="tel" className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 bg-white text-sm transition-all" placeholder={t('contact_form_phone_ph')} />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="text-sm font-medium text-neutral-700">{t('contact_form_email')}</label>
                  <input id="contact-email" type="email" required className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 bg-white text-sm transition-all" placeholder={t('contact_form_email_ph')} />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="contact-service" className="text-sm font-medium text-neutral-700">{t('contact_form_service')}</label>
                  <select id="contact-service" className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 bg-white text-sm transition-all">
                    {language === 'EN' ? (
                      <>
                        <option>Painting & Decorating</option>
                        <option>End-of-Tenancy Refresh</option>
                        <option>Property Maintenance</option>
                        <option>Carpentry & Joinery</option>
                        <option>Minor Plumbing & Electrical</option>
                        <option>Outdoor & Garden Care</option>
                        <option>Not Sure — Need Advice</option>
                      </>
                    ) : (
                      <>
                        <option>Pintura e Decoração</option>
                        <option>Limpeza de Fim de Contrato</option>
                        <option>Manutenção de Propriedades</option>
                        <option>Carpintaria</option>
                        <option>Pequenos Reparos Hidráulicos e Elétricos</option>
                        <option>Cuidado de Jardins e Áreas Externas</option>
                        <option>Não tenho certeza — preciso de ajuda</option>
                      </>
                    )}
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-sm font-medium text-neutral-700">{t('contact_field_project')}</label>
                  <textarea id="contact-message" rows={4} className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 bg-white text-sm transition-all resize-none" placeholder={t('contact_field_project_ph')} />
                </div>
                <button type="submit" className="w-full bg-neutral-900 text-white py-4 rounded-xl font-semibold text-sm hover:bg-neutral-700 transition-colors shadow-sm">
                  {t('contact_form_submit')}
                </button>
                <p className="text-xs text-neutral-400 text-center">{t('contact_reply_time')}</p>
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
    <footer className="bg-neutral-900 py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div>
            <div className="font-serif text-lg font-semibold text-white mb-1">{t('nav_brand')}</div>
            <p className="text-neutral-400 text-sm font-light">
              {t('footer_desc')}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={PHONE_HREF} className="flex items-center gap-2 text-white font-medium text-sm hover:text-neutral-300 transition-colors">
              <Phone size={15} /> {PHONE_DISPLAY}
            </a>
            <a href="#contact" className="bg-white text-neutral-900 px-5 py-2 rounded-full text-sm font-semibold hover:bg-neutral-100 transition-colors text-center">
              {t('nav_free_quote')}
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-neutral-800 text-xs text-neutral-500 font-light gap-3">
          <p>© {new Date().getFullYear()} {t('nav_brand')}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">{t('footer_privacy')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footer_terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen font-sans text-neutral-900 selection:bg-neutral-900 selection:text-white">
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
    </div>
  );
}
