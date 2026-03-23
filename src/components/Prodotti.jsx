import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';
import bottleShot from '../assets/liquor_bottle_shot.png';

gsap.registerPlugin(ScrollTrigger);

export default function Prodotti() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const products = t('prodotti.items', { returnObjects: true });

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.prod-reveal', {
        x: -50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="prodotti" className="bg-cream overflow-hidden">
      <div className="flex flex-col md:flex-row min-h-screen relative">
        {/* Text Content */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 bg-moss text-cream relative z-10">
          <h4 className="prod-reveal font-data text-cream/40 text-[10px] uppercase tracking-[0.4em] mb-4">{t('prodotti.subtitle')}</h4>
          <h2 className="prod-reveal font-drama text-4xl md:text-6xl mb-8 tracking-tighter">{t('prodotti.title')}</h2>
          <p className="prod-reveal text-cream/60 font-light text-lg mb-12 max-w-lg leading-relaxed">
            {t('prodotti.desc')}
          </p>
          
          <ul className="prod-reveal space-y-4 mb-16">
            {products.map((product, idx) => (
              <li 
                key={product.id} 
                className={`flex items-center gap-4 group cursor-pointer border-t border-cream/5 pt-4 transition-all duration-300 ${hoveredProduct?.id === product.id ? 'translate-x-4' : ''}`}
                onMouseEnter={() => setHoveredProduct(product)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <span className="font-data text-clay/50 text-[10px]">0{idx + 1}</span>
                <span className={`font-drama text-2xl md:text-3xl transition-colors duration-300 ${hoveredProduct?.id === product.id ? 'text-clay border-l-2 border-clay pl-4' : 'text-cream/90'}`}>
                  {product.name}
                </span>
              </li>
            ))}
          </ul>

          <a href="#" className="prod-reveal inline-block border border-cream/20 px-8 py-4 rounded-full font-data text-[10px] uppercase tracking-[0.3em] hover:bg-cream hover:text-moss transition-all duration-500 max-w-fit">
            {t('prodotti.cta')}
          </a>
        </div>

        {/* Detailed Info Card (Visible on Hover) */}
        <div className={`fixed md:absolute inset-0 md:inset-auto md:right-10 md:top-1/2 md:-translate-y-1/2 z-50 pointer-events-none transition-all duration-700 ease-expo ${hoveredProduct ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          {hoveredProduct && (
            <div className="bg-cream shadow-[0_30px_100px_rgba(0,0,0,0.3)] w-full h-full md:w-[450px] md:h-auto md:rounded-[3rem] p-10 md:p-12 text-moss overflow-y-auto pointer-events-auto border border-moss/5 backdrop-blur-sm">
              <div className="mb-8 flex justify-between items-start">
                <span className="font-data text-clay text-[10px] uppercase tracking-widest">{hoveredProduct.gradazione}</span>
                <button 
                  className="md:hidden text-moss/40"
                  onClick={() => setHoveredProduct(null)}
                >
                  <span className="text-xs font-data">CHIUDI [X]</span>
                </button>
              </div>
              
              <h3 className="font-drama text-4xl md:text-5xl mb-6 text-moss leading-tight">{hoveredProduct.name}</h3>
              <p className="font-sans text-clay/80 font-bold mb-8 text-sm italic">{hoveredProduct.title}</p>
              
              <div className="space-y-8 text-sm leading-relaxed">
                <div>
                  <h5 className="font-data text-moss/30 uppercase tracking-[0.2em] text-[10px] mb-3">{t('prodotti.labels.ingredienti')}</h5>
                  <p className="text-moss/80 font-medium">{hoveredProduct.ingredienti}</p>
                </div>

                <div>
                  <h5 className="font-data text-moss/30 uppercase tracking-[0.2em] text-[10px] mb-3">{t('prodotti.labels.degustazione')}</h5>
                  <p className="text-moss/70 italic">{hoveredProduct.degustazione}</p>
                </div>

                <div className="pt-6 border-t border-moss/10 flex justify-between items-center">
                  <span className="font-data text-[10px] text-moss/40 uppercase tracking-widest">{t('prodotti.labels.formati')}</span>
                  <span className="font-mono text-xs font-bold text-moss">{hoveredProduct.formati}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Image / Visual Content */}
        <div className="flex-1 relative min-h-[50vh] md:min-h-screen overflow-hidden">
          <img 
            src={bottleShot} 
            alt="Bottiglie Fattoria De Nardis" 
            className={`prod-img absolute inset-0 w-full h-full object-cover grayscale transition-all duration-1000 scale-110 ${hoveredProduct ? 'blur-md opacity-40' : 'hover:grayscale-0'}`}
          />
          <div className="absolute inset-0 bg-moss/20 mix-blend-multiply"></div>
        </div>
      </div>
    </section>
  );
}
