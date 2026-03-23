import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: '01',
    title: 'Selezione Naturale',
    desc: 'La ricerca meticolosa delle migliori erbe e radici nel Parco Nazionale del Gran Sasso. Genziana Lutea, bacche di ginepro e botaniche spontanee vengono selezionate e raccolte manualmente nel pieno rispetto dei cicli stagionali, garantendo l\'assoluta purezza della materia prima per i nostri liquori.',
    tag: 'Raccolta Manuale',
    img: 'https://www.artigianinvetrina.com/wp-content/uploads/2021/02/fattoriadenardis6-2300x2000.jpg'
  },
  {
    num: '02',
    title: 'Estrazione Fredda',
    desc: 'Il cuore del nostro processo artigianale: nessuna forzatura termica o chimica. Applichiamo esclusivamente la tecnica della macerazione a freddo, un\'infusione lenta e prolungata che dura oltre 40 giorni per estrarre in modo non invasivo l\'anima aromatica e le proprietà naturali essenziali.',
    tag: 'Processo Lento',
    img: 'https://images.unsplash.com/photo-1555196301-8ef77a641a9a?auto=format&fit=crop&q=80'
  },
  {
    num: '03',
    title: 'Equilibrio & Riposo',
    desc: 'Dopo una filtrazione rigorosamente artigianale, il liquore riposa e si affina in antiche barrique di rovere per smussare ogni asperità. Questo affinamento conferisce morbidezza, stabilizza il sapore nel tempo e dona quella rotondità ed eleganza tipica della tradizione abruzzese.',
    tag: 'Affinamento Rovere',
    img: 'https://www.artigianinvetrina.com/wp-content/uploads/2021/02/fattoriadenardis17-2300x2000.jpg'
  }
];

export default function Protocollo() {
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
          <h4 className="font-data text-moss/50 text-[10px] uppercase tracking-[0.4em] mb-4">Il Metodo</h4>
          <h2 className="font-drama text-moss text-4xl md:text-5xl lg:text-6xl tracking-[0.1em]">ETICA DELLA LAVORAZIONE</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {steps.map((step) => (
            <div key={step.num} className="protocol-step group flex flex-col h-full">
              {/* Image Container */}
              <div className="mb-10 w-full aspect-[4/5] rounded-[2rem] overflow-hidden relative border border-moss/5 shadow-xl">
                <div className="absolute inset-0 bg-moss/20 group-hover:bg-transparent transition-colors duration-700 z-10 mix-blend-multiply pointer-events-none"></div>
                <img 
                  src={step.img} 
                  alt={step.title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-1000"
                />
              </div>

              {/* Text Content */}
              <div className="flex-1 flex flex-col">
                <div className="mb-6 flex items-baseline gap-4">
                  <span className="font-data text-clay text-3xl font-light">{step.num}</span>
                  <div className="h-px flex-1 bg-moss/10 group-hover:bg-clay group-hover:scale-x-110 transition-all duration-700 origin-left"></div>
                </div>
                
                <h3 className="font-drama text-moss text-3xl mb-4 tracking-wider">{step.title}</h3>
                
                <p className="text-charcoal/70 font-sans leading-relaxed mb-8 flex-1">
                  {step.desc}
                </p>
                
                <div className="mt-auto">
                  <span className="inline-block font-data text-[10px] uppercase tracking-[0.2em] text-clay/90 border border-clay/30 px-5 py-2.5 rounded-full bg-clay/5">
                    {step.tag}
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
