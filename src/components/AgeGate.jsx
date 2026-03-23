import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

export default function AgeGate() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if the user has already confirmed they are of age
    const isOfAge = localStorage.getItem('fattoria_de_nardis_age_verified');
    if (isOfAge) {
      setIsVisible(false);
    } else {
      // Prevent scrolling when age gate is visible
      document.body.style.overflow = 'hidden';
    }
  }, []);

  const handleConfirm = () => {
    localStorage.setItem('fattoria_de_nardis_age_verified', 'true');
    setIsVisible(false);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  const handleDeny = () => {
    window.location.href = 'https://www.google.com'; // Redirect somewhere else
  };

  return (
    <div className={`age-gate ${!isVisible ? 'hidden' : ''} text-center px-6`}>
      <img src={logo} alt="Fattoria De Nardis" className="w-32 md:w-48 mb-8 mx-auto grayscale invert brightness-200" />
      
      <h2 className="font-drama text-cream text-3xl md:text-5xl mb-4 tracking-[0.1em]">BENVENUTO</h2>
      <p className="font-sans text-cream/70 max-w-md mx-auto mb-10 text-sm md:text-base leading-relaxed">
        Per accedere a questo sito web devi avere l'età legale per il consumo di alcolici nel tuo paese di residenza.
        <br /><br />
        <span className="font-bold text-cream">Sei maggiorenne?</span>
      </p>

      <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
        <button 
          onClick={handleConfirm}
          className="btn-magnetic bg-clay text-cream px-10 py-3 rounded-full font-sans text-sm tracking-wide uppercase font-medium hover:bg-clay-dark transition-colors w-full md:w-auto"
        >
          <span className="relative z-10">Sì, ho più di 18 anni</span>
        </button>
        <button 
          onClick={handleDeny}
          className="bg-transparent border border-cream/30 text-cream/70 px-10 py-3 rounded-full font-sans text-sm tracking-wide uppercase font-medium hover:bg-cream hover:text-charcoal transition-all w-full md:w-auto"
        >
          <span className="relative z-10">No, sono minorenne</span>
        </button>
      </div>
      
      <div className="mt-16 text-cream/30 font-sans text-xs max-w-md mx-auto">
        <p>Bevete responsabilmente. La vendita di alcolici è vietata ai minori di 18 anni.</p>
      </div>
    </div>
  );
}
