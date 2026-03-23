import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { MousePointer2 } from 'lucide-react';

function ShufflerCard() {
  const [items, setItems] = useState([
    { id: 1, title: 'Genziana Lutea', desc: 'Riposata in barrique', color: 'bg-moss' },
    { id: 2, title: 'Ratafià & Papavero', desc: 'Ricette tradizionali', color: 'bg-clay' },
    { id: 3, title: 'Amaro alle Erbe', desc: 'Selezione botanica', color: 'bg-charcoal' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems(current => {
        const newArr = [...current];
        const last = newArr.pop();
        newArr.unshift(last);
        return newArr;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-48 w-full mt-6">
      {items.map((item, index) => {
        const scale = 1 - index * 0.05;
        const translateY = index * 12;
        const opacity = 1 - index * 0.2;
        
        return (
          <div 
            key={item.id}
            className={`shuffler-item ${item.color} text-cream p-6 rounded-[1.5rem] absolute border border-cream/10 w-full`}
            style={{ 
              transform: `translateY(${translateY}px) scale(${scale})`, 
              opacity,
              zIndex: 10 - index
            }}
          >
            <div className="font-mono text-[10px] opacity-60 mb-2">0{item.id} // LIQUORE</div>
            <div className="font-sans font-bold text-lg">{item.title}</div>
            <div className="font-sans text-xs mt-1 text-cream/80">{item.desc}</div>
          </div>
        );
      })}
    </div>
  );
}

function TypewriterCard() {
  const [text, setText] = useState('');
  const fullText = "> INIZIALIZZAZIONE...\n> Macerazione: ATTIVA\n> Aromi: ZERO RILEVATI\n> Riposo: IN BARRIQUE\n> Filtrazione: ARTIGIANALE\n> STATO: PRONTO";
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setTimeout(() => { currentIndex = 0; setText(''); }, 3000);
      }
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-6 bg-charcoal text-cream-dark p-6 rounded-[1.5rem] h-48 border border-moss-light/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-moss to-transparent opacity-50 scan-line"></div>
      <pre className="font-data text-xs leading-[1.6] whitespace-pre-wrap">
        {text}
        <span className="cursor-blink"></span>
      </pre>
    </div>
  );
}

function SchedulerCard() {
  const cursorRef = useRef(null);
  const [activeDay, setActiveDay] = useState(null);
  const days = ['D', 'L', 'M', 'M', 'G', 'V', 'S'];

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
      
      tl.set(cursorRef.current, { x: 150, y: 100, opacity: 0 });
      
      tl.to(cursorRef.current, { x: 215, y: 30, opacity: 1, duration: 1, ease: 'power2.inOut' })
        .to(cursorRef.current, { scale: 0.8, duration: 0.1 })
        .call(() => setActiveDay(5))
        .to(cursorRef.current, { scale: 1, duration: 0.1 })
        .to(cursorRef.current, { x: 80, y: 95, duration: 0.8, ease: 'power2.inOut', delay: 0.2 })
        .to(cursorRef.current, { scale: 0.8, duration: 0.1 })
        .to(cursorRef.current, { scale: 1, duration: 0.1 })
        .to(cursorRef.current, { x: 150, y: 150, opacity: 0, duration: 0.8, ease: 'power2.in' })
        .call(() => setActiveDay(null));
        
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="mt-6 h-48 relative">
      <div className="flex justify-between mb-8 pr-4">
        {days.map((d, i) => (
          <div 
            key={i} 
            className={`w-7 h-7 rounded-full flex items-center justify-center font-sans text-xs font-bold transition-colors ${activeDay === i ? 'bg-clay text-cream' : 'bg-moss/10 text-moss'}`}
          >
            {d}
          </div>
        ))}
      </div>
      
      <div className="bg-moss/5 border border-moss/10 rounded-xl p-4 w-32 mb-4">
        <div className="h-1.5 bg-moss/20 rounded-full w-full mb-2"></div>
        <div className="h-1.5 bg-moss/20 rounded-full w-2/3"></div>
      </div>
      
      <div className="inline-block bg-charcoal text-cream text-[10px] uppercase tracking-wider font-bold px-4 py-2 rounded-lg">
        Prenota Data
      </div>

      <div ref={cursorRef} className="absolute top-0 left-0 z-10 drop-shadow-md text-charcoal pointer-events-none">
        <MousePointer2 size={24} className="fill-cream" />
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 md:px-12 lg:px-24 bg-cream">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          
          <div className="bg-white rounded-[2.5rem] p-6 md:p-10 border border-moss/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col h-[400px] md:h-[420px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-clay pulse-dot"></div>
              <span className="font-mono text-xs font-bold tracking-wider text-charcoal/40 uppercase">Catalogo</span>
            </div>
            <h3 className="font-sans font-bold text-2xl text-moss mb-3">Liquori Artigianali</h3>
            <p className="font-sans text-sm text-charcoal/60 leading-relaxed font-medium">
              Ricette tipiche abruzzesi prodotte in piccoli lotti. Genziana, Ratafià, Liquirizia, Papavero e Amaro.
            </p>
            <div className="mt-auto">
              <ShufflerCard />
            </div>
          </div>

          <div className="bg-white rounded-[2.5rem] p-6 md:p-10 border border-moss/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col h-[400px] md:h-[420px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-moss pulse-dot"></div>
              <span className="font-mono text-xs font-bold tracking-wider text-charcoal/40 uppercase">Protocollo</span>
            </div>
            <h3 className="font-sans font-bold text-2xl text-moss mb-3">Zero Artefatti</h3>
            <p className="font-sans text-sm text-charcoal/60 leading-relaxed font-medium">
              Macerazione lenta delle botaniche, riposo in rovere e filtrazione naturale. Nessun aroma aggiunto.
            </p>
            <div className="mt-auto">
              <TypewriterCard />
            </div>
          </div>

          <div className="bg-white rounded-[2.5rem] p-6 md:p-10 border border-moss/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col h-[400px] md:h-[420px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-charcoal pulse-dot"></div>
              <span className="font-mono text-xs font-bold tracking-wider text-charcoal/40 uppercase">Eventi</span>
            </div>
            <h3 className="font-sans font-bold text-2xl text-moss mb-3">Bomboniere Custom</h3>
            <p className="font-sans text-sm text-charcoal/60 leading-relaxed font-medium">
              Personalizzazione reale per matrimoni. Bottiglie, etichette e packaging su misura per il tuo evento.
            </p>
            <div className="mt-auto">
              <SchedulerCard />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
