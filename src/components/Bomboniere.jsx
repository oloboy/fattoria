import { Gift, CheckCircle2, Star, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Bomboniere() {
  const { t } = useTranslation();
  const features = t('bomboniere.features', { returnObjects: true });

  return (
    <section id="bomboniere" className="py-32 px-6 md:px-12 lg:px-24 bg-moss relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://www.artigianinvetrina.com/wp-content/uploads/2021/02/fattoriadenardis20-2300x2000.jpg" 
          alt="Bomboniere Eventi" 
          className="w-full h-full object-cover object-center opacity-30 mix-blend-overlay img-zoom" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-moss/95 via-moss/80 to-moss/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Left: Content */}
        <div className="w-full lg:w-1/2">
          <div className="inline-flex items-center gap-3 bg-clay/20 border border-clay/30 px-5 py-2.5 rounded-full mb-8">
            <Gift size={18} className="text-clay" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-cream">{t('bomboniere.badge')}</span>
          </div>
          
          <h2 className="font-sans font-bold text-4xl md:text-6xl text-cream mb-6 leading-[1.1]">
            {t('bomboniere.title1')} <span className="font-drama italic font-normal text-clay">{t('bomboniere.title2')}</span>
          </h2>
          
          <p className="font-sans text-lg md:text-xl text-cream/80 max-w-xl leading-relaxed mb-10">
            {t('bomboniere.desc')}
          </p>
          
          <div className="flex flex-col gap-5 mb-12">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <CheckCircle2 size={24} className="text-clay shrink-0 mt-0.5" />
                <span className="font-sans text-cream text-base md:text-lg">{feature}</span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <a 
              href="https://www.matrimonio.com/bomboniere/fattoria-de-nardis--e301785" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-magnetic bg-clay text-cream px-8 py-4 rounded-[2rem] font-bold text-lg inline-block shadow-xl shadow-clay/20 text-center"
            >
              <span className="relative z-10 transition-colors duration-300">{t('bomboniere.cta')}</span>
              <div className="btn-fill absolute inset-0 bg-white text-moss rounded-[2rem]"></div>
            </a>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#D4A373" className="text-clay" />
                ))}
                <span className="ml-2 font-sans font-bold text-cream text-sm">{t('bomboniere.reviews.rating')}</span>
                <span className="mx-2 text-cream/20">•</span>
                <a 
                  href="https://www.matrimonio.com/bomboniere/fattoria-de-nardis--e301785" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-sans text-cream/60 hover:text-clay transition-colors underline underline-offset-4 text-sm"
                >
                  {t('bomboniere.reviews.count')}
                </a>
              </div>
              <div className="flex items-center gap-2 text-cream/40">
                <MapPin size={14} />
                <span className="font-sans text-xs uppercase tracking-widest">{t('bomboniere.reviews.location')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Gallery Grid */}
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 md:gap-6">
          <div className="flex flex-col gap-4 md:gap-6 pt-12">
            <div className="rounded-[2.5rem] overflow-hidden border border-cream/10 bg-moss-light relative aspect-[4/5] shadow-2xl">
              <img src="https://cdn0.matrimonio.com/vendor/1785/3_2/960/jpg/01ftx8d3zs3301nm1ckn8t3de7_2_301785-164681828329943.jpeg" className="w-full h-full object-cover" alt="Bomboniera stile bianco" />
            </div>
            <div className="rounded-[2.5rem] overflow-hidden border border-cream/10 bg-moss-light relative aspect-square shadow-2xl">
              <img src="https://cdn0.matrimonio.com/vendor/1785/3_2/960/jpeg/0d97685b-a220-4cea-b713-9da8a4cc7110_2_301785-166403686225633.jpeg" className="w-full h-full object-cover" alt="Bomboniere personalizzate" />
            </div>
          </div>
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="rounded-[2.5rem] overflow-hidden border border-cream/10 bg-moss-light relative aspect-square shadow-2xl">
              <img src="https://cdn0.matrimonio.com/vendor/1785/3_2/960/jpg/bott-20cl-piatta_2_301785-164681828349163.jpeg" className="w-full h-full object-cover" alt="Bomboniera palla piatta" />
            </div>
            <div className="rounded-[2.5rem] overflow-hidden border border-cream/10 bg-moss-light relative aspect-[4/5] shadow-2xl">
              <img src="https://www.artigianinvetrina.com/wp-content/uploads/2021/02/fattoriadenardis.jpg" className="w-full h-full object-cover" alt="Dettaglio bomboniera" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
