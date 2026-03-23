import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';
import slownessIcon from '../assets/slowness_icon.png';
import craftIcon from '../assets/craftmanship_icon.png';
import vinoImg from '../assets/vino.jpg';
import barrelImg from '../assets/botte.jpg';

gsap.registerPlugin(ScrollTrigger);

const featuresData = [
  { id: 'abruzzo', img: 'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&q=80&w=300' },
  { id: 'vino', img: vinoImg },
  { id: 'legno', img: barrelImg },
  { id: 'lentezza', img: slownessIcon },
  { id: 'artigianato', img: craftIcon }
];

export default function Filosofia() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.feature-item', {
        scale: 0.8,
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="filosofia" className="bg-moss py-32 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h4 className="font-data text-cream/40 text-[10px] uppercase tracking-[0.4em] mb-4">{t('filosofia.subtitle')}</h4>
        <h2 className="font-drama text-cream text-3xl md:text-5xl mb-16 tracking-widest">{t('filosofia.title')}</h2>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {featuresData.map((feature) => (
            <div key={feature.id} className="feature-item flex flex-col items-center gap-4 group cursor-pointer">
              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border border-cream/10 grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105 group-hover:border-clay/50">
                <img src={feature.img} alt={t(`filosofia.features.${feature.id}.name`)} className="w-full h-full object-cover" />
                
                {/* Storytelling Overlay */}
                <div className="absolute inset-0 bg-moss/90 flex items-center justify-center p-3 md:p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px]">
                  <p className="text-cream text-[8px] md:text-[10px] leading-relaxed font-sans text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {t(`filosofia.features.${feature.id}.desc`)}
                  </p>
                </div>
              </div>
              <span className="font-data text-[10px] text-cream/60 uppercase tracking-widest group-hover:text-clay transition-colors">{t(`filosofia.features.${feature.id}.name`)}</span>
            </div>
          ))}
        </div>

        <div className="mt-24 max-w-2xl mx-auto">
          <p className="font-drama text-cream/80 text-xl md:text-2xl leading-relaxed italic">
            {t('filosofia.quote')}
          </p>
        </div>
      </div>
    </section>
  );
}
