import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from './context/LanguageContext';

const PHONE_DISPLAY = '07384 631028';
const PHONE_HREF = 'tel:+447384631028';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { t, language, setLanguage } = useLanguage();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#services', label: t('navServices') },
        { href: '#service-area', label: t('navArea') },
        { href: '#gallery', label: t('navGallery') },
        { href: '#reviews', label: t('navReviews') },
        { href: '#contact', label: t('navContact') },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className={`font-serif text-xl font-semibold tracking-tight transition-opacity hover:opacity-75 cursor-pointer ${isScrolled ? 'text-neutral-900' : 'text-white'}`}
                    aria-label="Back to top"
                >
                    {t('brand')}
                </button>

                <div className="hidden md:flex items-center space-x-7">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className={`text-sm font-medium tracking-wide transition-colors ${isScrolled ? 'text-neutral-600 hover:text-neutral-900' : 'text-white/80 hover:text-white'}`}>
                            {link.label}
                        </a>
                    ))}

                    {/* Language Switcher */}
                    <div className="flex items-center space-x-2 border-l border-neutral-300/30 pl-6 h-4">
                        <button
                            onClick={() => setLanguage('EN')}
                            className={`text-xs font-bold transition-all ${language === 'EN' ? 'opacity-100 scale-110' : 'opacity-40 hover:opacity-100'} ${isScrolled ? 'text-neutral-900' : 'text-white'}`}
                            title="English"
                        >
                            EN 🇬🇧
                        </button>
                        <button
                            onClick={() => setLanguage('PT')}
                            className={`text-xs font-bold transition-all ${language === 'PT' ? 'opacity-100 scale-110' : 'opacity-40 hover:opacity-100'} ${isScrolled ? 'text-neutral-900' : 'text-white'}`}
                            title="Português"
                        >
                            PT 🇵🇹
                        </button>
                    </div>

                    <a href={PHONE_HREF} className={`flex items-center space-x-1.5 text-sm font-semibold transition-colors ${isScrolled ? 'text-neutral-900' : 'text-white'}`}>
                        <Phone size={15} />
                        <span>{PHONE_DISPLAY}</span>
                    </a>
                    <a href="#contact" className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${isScrolled ? 'bg-neutral-900 text-white hover:bg-neutral-700' : 'bg-white text-neutral-900 hover:bg-neutral-100'}`}>
                        {t('navFreeQuote')}
                    </a>
                </div>

                <div className="md:hidden flex items-center space-x-4">
                    <div className="flex items-center space-x-3 mr-2">
                        <button onClick={() => setLanguage('EN')} className={`text-sm ${language === 'EN' ? 'opacity-100' : 'opacity-40'}`}>🇬🇧</button>
                        <button onClick={() => setLanguage('PT')} className={`text-sm ${language === 'PT' ? 'opacity-100' : 'opacity-40'}`}>🇵🇹</button>
                    </div>
                    <button
                        className={`${isScrolled ? 'text-neutral-900' : 'text-white'}`}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-white shadow-lg py-6 px-6 flex flex-col space-y-4 md:hidden"
                    >
                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href} className="text-neutral-700 font-medium py-1" onClick={() => setMobileMenuOpen(false)}>{link.label}</a>
                        ))}
                        <a href={PHONE_HREF} className="flex items-center space-x-2 text-neutral-900 font-semibold py-1">
                            <Phone size={16} /><span>{PHONE_DISPLAY}</span>
                        </a>
                        <a href="#contact" className="bg-neutral-900 text-white px-6 py-3 rounded-full font-medium text-center mt-2" onClick={() => setMobileMenuOpen(false)}>
                            {t('navMobileQuote')}
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
