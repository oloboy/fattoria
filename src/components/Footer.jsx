import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream pt-24 pb-12 px-6 md:px-12 lg:px-24 rounded-t-[3rem] md:rounded-t-[4rem] mt-[-3rem] relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.2)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 mb-16">
        
        <div className="max-w-sm">
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Fattoria De Nardis" className="h-10 md:h-12 w-auto object-contain brightness-0 invert" />
            <h3 className="font-sans font-bold text-3xl tracking-tight">Fattoria De Nardis</h3>
          </div>
          <p className="text-cream/60 font-sans text-sm md:text-base leading-relaxed mb-8">
            Liquori tradizionali abruzzesi prodotti artigianalmente a Garrano Alto, nel Parco Nazionale del Gran Sasso e Monti della Laga.
          </p>
          <div className="inline-flex items-center gap-3 bg-moss/20 border border-moss/30 px-4 py-2.5 rounded-full">
            <div className="w-2.5 h-2.5 rounded-full bg-[#10B981] pulse-dot shadow-[0_0_10px_#10B981]"></div>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#10B981]">Sistema: Online</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-16 md:gap-24">
          <div className="flex flex-col gap-4 font-sans text-base">
            <h4 className="font-bold text-clay uppercase tracking-widest text-xs mb-2">Esplora</h4>
            <a href="#prodotti" className="link-hover text-cream/80">I Liquori</a>
            <a href="#filosofia" className="link-hover text-cream/80">La Filosofia</a>
            <a href="#processo" className="link-hover text-cream/80">Il Metodo</a>
            <a href="#bomboniere" className="link-hover text-cream/80">Bomboniere & Eventi</a>
          </div>
          <div className="flex flex-col gap-4 font-sans text-base">
            <h4 className="font-bold text-clay uppercase tracking-widest text-xs mb-2">Network</h4>
            <a href="https://www.facebook.com/FattoriaDeNardis/" target="_blank" rel="noreferrer" className="link-hover text-cream/80">Facebook</a>
            <a href="https://www.instagram.com/liquorifattoriadenardis/" target="_blank" rel="noreferrer" className="link-hover text-cream/80">Instagram</a>
            <a href="#contatti" className="link-hover text-cream/80">Contattaci</a>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs md:text-sm text-cream/40 font-sans font-medium">
        <p>© {new Date().getFullYear()} DE NARDIS MARIANNA. P.IVA 01722800677. REA 147252.</p>
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-6 gap-y-2 text-center md:text-right">
          <span className="hover:text-cream/80 cursor-pointer transition-colors">Privacy Policy</span>
          <span className="hover:text-cream/80 cursor-pointer transition-colors">Cookie</span>
          <span className="text-clay/80 font-bold uppercase tracking-widest text-[10px] w-full md:w-auto mt-2 md:mt-0">
            Bevi responsabilmente. <br className="md:hidden" /> La vendita di alcolici è vietata ai minori di 18 anni.
          </span>
        </div>
      </div>
    </footer>
  );
}
