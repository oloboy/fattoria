import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import heroImg from '../assets/vineyard_hero.png';
import logo from '../assets/logo.png';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.hero-reveal', {
        y: 60,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: 'power4.out',
        delay: 0.5
      });
      gsap.from('.hero-bg', {
        scale: 1.1,
        duration: 3,
        ease: 'power2.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex flex-col justify-center items-center text-center overflow-hidden">
      {/* Background with Zoom Effect */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImg} 
          alt="Vigneti Fattoria De Nardis"
          className="hero-bg w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-moss/40 via-transparent to-moss/80"></div>
      </div>

      <div className="relative z-10 px-6 max-w-5xl">
        <div className="hero-reveal mb-4 overflow-hidden">
          <span className="font-data text-cream/60 tracking-[0.3em] text-[10px] md:text-xs uppercase block">Dal 1916 • Teramo, Abruzzo</span>
        </div>
        
        <div className="hero-reveal flex flex-col items-center mb-10">
          <h1 className="font-drama text-cream text-[8vw] md:text-[5rem] lg:text-[6rem] leading-none tracking-[0.2em] mb-4">
            L'Abruzzo è il
          </h1>
          <h2 className="font-drama text-clay text-[15vw] md:text-[10rem] lg:text-[12rem] leading-[0.7] tracking-tighter drop-shadow-2xl">
            sapore.
          </h2>
        </div>

        <div className="hero-reveal max-w-xl mx-auto mb-12">
          <p className="text-cream/80 text-base md:text-lg font-light leading-relaxed px-4">
            L'essenza liquida di una terra aspra e generosa. <br className="hidden md:block"/>
            Tradizione, attesa e natura racchiuse in ogni goccia.
          </p>
        </div>

        <div className="hero-reveal flex flex-col items-center gap-12 justify-center">
          <a href="#prodotti" className="group flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full border border-cream/20 flex items-center justify-center group-hover:bg-cream group-hover:text-moss transition-all duration-500">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="font-data text-[10px] uppercase tracking-widest text-cream/40 group-hover:text-cream transition-colors">Esplora</span>
          </a>

          <img 
            src={logo} 
            alt="Fattoria De Nardis Seal" 
            className="w-72 md:w-[32rem] lg:w-[40rem] h-auto opacity-80 grayscale invert contrast-[10] brightness-[1.6] mix-blend-screen hover:opacity-100 transition-all duration-1000 transform hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
