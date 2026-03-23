import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher({ className = "", light = false }) {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const colorActive = light ? 'text-charcoal font-bold' : 'text-cream font-bold';
  const colorInactive = light ? 'text-charcoal/50 hover:text-charcoal/80' : 'text-cream/50 hover:text-cream/80';
  const colorSeparator = light ? 'text-charcoal/30' : 'text-cream/30';

  return (
    <div className={`flex gap-3 items-center z-50 ${className}`}>
      <button 
        onClick={() => changeLanguage('it')}
        className={`font-data text-[10px] md:text-xs uppercase tracking-widest transition-colors ${i18n.language === 'it' ? colorActive : colorInactive}`}
      >
        IT
      </button>
      <span className={`text-[10px] md:text-xs ${colorSeparator}`}>|</span>
      <button 
        onClick={() => changeLanguage('en')}
        className={`font-data text-[10px] md:text-xs uppercase tracking-widest transition-colors ${i18n.language === 'en' ? colorActive : colorInactive}`}
      >
        EN
      </button>
      <span className={`text-[10px] md:text-xs ${colorSeparator}`}>|</span>
      <button 
        onClick={() => changeLanguage('fr')}
        className={`font-data text-[10px] md:text-xs uppercase tracking-widest transition-colors ${i18n.language === 'fr' ? colorActive : colorInactive}`}
      >
        FR
      </button>
    </div>
  );
}
