import { useState } from 'react';
import logo from '../assets/logo.png';
import { useTranslation } from 'react-i18next';
import LegalModal from './LegalModal'; // Import the new modal component

export default function Footer() {
  const { t } = useTranslation();
  
  // State for the legal modal
  const [modalState, setModalState] = useState({ isOpen: false, type: null });

  const openModal = (type) => {
    setModalState({ isOpen: true, type });
  };

  const closeModal = () => {
    setModalState({ isOpen: false, type: null });
  };

  return (
    <>
      <footer className="bg-charcoal text-cream pt-24 pb-12 px-6 md:px-12 lg:px-24 rounded-t-[3rem] md:rounded-t-[4rem] mt-[-3rem] relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.2)]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 mb-16">
          
          <div className="max-w-sm">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Fattoria De Nardis" className="h-10 md:h-12 w-auto object-contain brightness-0 invert" />
              <h3 className="font-sans font-bold text-3xl tracking-tight">Fattoria De Nardis</h3>
            </div>
            <p className="text-cream/60 font-sans text-sm md:text-base leading-relaxed mb-8">
              {t('footer.desc')}
            </p>

          </div>

          <div className="flex flex-wrap gap-16 md:gap-24">
            <div className="flex flex-col gap-4 font-sans text-base">
              <h4 className="font-bold text-clay uppercase tracking-widest text-xs mb-2">{t('footer.explore')}</h4>
              <a href="#prodotti" className="link-hover text-cream/80">{t('nav.liquors')}</a>
              <a href="#filosofia" className="link-hover text-cream/80">{t('nav.philosophy')}</a>
              <a href="#processo" className="link-hover text-cream/80">{t('protocollo.subtitle')}</a>
              <a href="#bomboniere" className="link-hover text-cream/80">{t('nav.favors')}</a>
            </div>
            <div className="flex flex-col gap-4 font-sans text-base">
              <h4 className="font-bold text-clay uppercase tracking-widest text-xs mb-2">{t('footer.network')}</h4>
              <a href="https://www.facebook.com/FattoriaDeNardis/" target="_blank" rel="noreferrer" className="link-hover text-cream/80">Facebook</a>
              <a href="https://www.instagram.com/liquorifattoriadenardis/" target="_blank" rel="noreferrer" className="link-hover text-cream/80">Instagram</a>
              <a href="#contatti" className="link-hover text-cream/80">{t('nav.contact')}</a>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs md:text-sm text-cream/40 font-sans font-medium">
          <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-6 gap-y-2 text-center md:text-right">
            <span 
              onClick={() => openModal('privacy')}
              className="hover:text-cream/80 cursor-pointer transition-colors"
            >
              {t('footer.privacy')}
            </span>
            <span 
              onClick={() => openModal('cookie')}
              className="hover:text-cream/80 cursor-pointer transition-colors"
            >
              {t('footer.cookie')}
            </span>
            <span 
              className="text-clay/80 font-bold uppercase tracking-widest text-[10px] w-full md:w-auto mt-2 md:mt-0"
              dangerouslySetInnerHTML={{ __html: t('footer.warning') }}
            ></span>
          </div>
        </div>
      </footer>

      {/* Render the modal outside the main footer constraints */}
      <LegalModal 
        isOpen={modalState.isOpen} 
        type={modalState.type} 
        onClose={closeModal} 
      />
    </>
  );
}
