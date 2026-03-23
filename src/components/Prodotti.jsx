import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import bottleShot from '../assets/liquor_bottle_shot.png';

gsap.registerPlugin(ScrollTrigger);

export default function Prodotti() {
  const sectionRef = useRef(null);

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
      gsap.from('.prod-img', {
        x: 100,
        opacity: 0,
        duration: 1.5,
        ease: 'power4.out',
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
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Text Content */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 bg-moss text-cream">
          <h4 className="prod-reveal font-data text-cream/40 text-[10px] uppercase tracking-[0.4em] mb-4">Il Catalogo</h4>
          <h2 className="prod-reveal font-drama text-4xl md:text-6xl mb-8 tracking-tighter">I NOSTRI LIQUORI</h2>
          <p className="prod-reveal text-cream/60 font-light text-lg mb-12 max-w-lg leading-relaxed">
            Dal Trebbiano d'Abruzzo unito alla radice di Genziana Lutea, fino alla morbidezza della Ratafià. 
            Ogni bottiglia racchiude la storia del nostro territorio.
          </p>
          
          <ul className="prod-reveal space-y-6 mb-16">
            <li className="flex items-center gap-4 group cursor-pointer">
              <span className="font-data text-clay/50 text-xs">01</span>
              <span className="font-drama text-2xl group-hover:translate-x-4 transition-transform duration-500 group-hover:text-clay">Genziana Barrique</span>
            </li>
            <li className="flex items-center gap-4 group cursor-pointer border-t border-cream/10 pt-6">
              <span className="font-data text-clay/50 text-xs">02</span>
              <span className="font-drama text-2xl group-hover:translate-x-4 transition-transform duration-500 group-hover:text-clay">Ratafià Tradizionale</span>
            </li>
            <li className="flex items-center gap-4 group cursor-pointer border-t border-cream/10 pt-6">
              <span className="font-data text-clay/50 text-xs">03</span>
              <span className="font-drama text-2xl group-hover:translate-x-4 transition-transform duration-500 group-hover:text-clay">Liquore alla Liquirizia</span>
            </li>
          </ul>

          <a href="#" className="prod-reveal inline-block border border-cream/20 px-8 py-4 rounded-full font-data text-[10px] uppercase tracking-[0.3em] hover:bg-cream hover:text-moss transition-all duration-500">
            Scarica il Catalogo Completo
          </a>
        </div>

        {/* Image Content */}
        <div className="flex-1 relative min-h-[50vh] md:min-h-screen overflow-hidden">
          <img 
            src={bottleShot} 
            alt="Bottiglie Fattoria De Nardis" 
            className="prod-img absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110"
          />
          <div className="absolute inset-0 bg-moss/20 mix-blend-multiply"></div>
        </div>
      </div>
    </section>
  );
}
