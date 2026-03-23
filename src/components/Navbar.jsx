import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl rounded-[2rem] px-6 py-4 transition-all duration-500 border ${scrolled ? 'bg-cream/80 backdrop-blur-xl border-moss/10 text-charcoal' : 'bg-transparent border-transparent text-cream'}`}>
      <div className="flex items-center justify-between">
        <div className="font-sans font-bold text-xl tracking-tight">Fattoria De Nardis</div>
        
        <div className="hidden md:flex items-center gap-8 font-medium text-sm">
          <a href="#prodotti" className="link-hover">{t('nav.liquors')}</a>
          <a href="#filosofia" className="link-hover">{t('nav.philosophy')}</a>
          <a href="#bomboniere" className="link-hover">{t('nav.favors')}</a>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <LanguageSwitcher light={scrolled} />
          <a href="#contatti" className="btn-magnetic bg-moss text-cream px-6 py-2.5 rounded-[1.5rem] font-medium text-sm inline-block border border-moss-light">
            <span className="relative z-10 transition-colors duration-300">{t('nav.contact')}</span>
            <div className="btn-fill absolute inset-0 bg-clay rounded-[1.5rem]"></div>
          </a>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <LanguageSwitcher light={scrolled} />
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 mt-4 bg-cream/95 backdrop-blur-xl rounded-[2rem] border border-moss/10 p-6 flex-col gap-4 transition-all duration-300 ${isOpen ? 'flex opacity-100 translate-y-0 pointer-events-auto' : 'hidden opacity-0 -translate-y-4 pointer-events-none'}`}>
        <a href="#prodotti" className="text-charcoal font-medium text-lg" onClick={() => setIsOpen(false)}>{t('nav.liquors')}</a>
        <a href="#filosofia" className="text-charcoal font-medium text-lg" onClick={() => setIsOpen(false)}>{t('nav.philosophy')}</a>
        <a href="#bomboniere" className="text-charcoal font-medium text-lg" onClick={() => setIsOpen(false)}>{t('nav.favors')}</a>
        <a href="#contatti" className="bg-clay text-cream px-6 py-3 rounded-[1.5rem] font-medium text-center mt-2" onClick={() => setIsOpen(false)}>{t('nav.contact')}</a>
      </div>
    </nav>
  );
}
