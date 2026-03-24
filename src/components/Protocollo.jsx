import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';
import estrazioneImg from '../assets/estrazione.jpg';
import selezioneImg from '../assets/genziana.jpg';
import riposoImg from '../assets/cantina.jpg';

gsap.registerPlugin(ScrollTrigger);

const stepsData = [
  {
    num: '01',
    key: 'step1',
    img: selezioneImg
  },
  {
    num: '02',
    key: 'step2',
    img: estrazioneImg
  },
  {
    num: '03',
    key: 'step3',
    img: riposoImg
  }
];

export default function Protocollo() {
  const { t } = useTranslation();
  const containerRef = useRef(null);
  
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.protocol-step', {
        opacity: 0,
        y: 60,
        scale: 0.95,
        stagger: 0.2,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="processo" ref={containerRef} className="py-32 px-6 bg-cream border-t border-moss/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 text-center">
          <h4 className="font-data text-moss/50 text-[10px] uppercase tracking-[0.4em] mb-4">{t('protocollo.subtitle')}</h4>
          <h2 className="font-drama text-moss text-4xl md:text-5xl lg:text-6xl tracking-[0.1em]">{t('protocollo.title')}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {stepsData.map((step) => (
            <div key={step.num} className="protocol-step group flex flex-col h-full">
              {/* Image Container */}
              <div className="mb-10 w-full aspect-[4/5] rounded-[2rem] overflow-hidden relative border border-moss/5 shadow-xl">
                <div className="absolute inset-0 bg-moss/20 group-hover:bg-transparent transition-colors duration-700 z-10 mix-blend-multiply pointer-events-none"></div>
                <img 
                  src={step.img} 
                  alt={t(`protocollo.${step.key}.title`)}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-1000"
                />
              </div>

              {/* Text Content */}
              <div className="flex-1 flex flex-col">
                <div className="mb-6 flex items-baseline gap-4">
                  <span className="font-data text-clay text-3xl font-light">{step.num}</span>
                  <div className="h-px flex-1 bg-moss/10 group-hover:bg-clay group-hover:scale-x-110 transition-all duration-700 origin-left"></div>
                </div>
                
                <h3 className="font-drama text-moss text-3xl mb-4 tracking-wider">{t(`protocollo.${step.key}.title`)}</h3>
                
                <p className="text-charcoal/70 font-sans leading-relaxed mb-8 flex-1">
                  {t(`protocollo.${step.key}.desc`)}
                </p>
                
                <div className="mt-auto">
                  <span className="inline-block font-data text-[10px] uppercase tracking-[0.2em] text-clay/90 border border-clay/30 px-5 py-2.5 rounded-full bg-clay/5">
                    {t(`protocollo.${step.key}.tag`)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
