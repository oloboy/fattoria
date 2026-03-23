import grapesImg from '../assets/grapes_macro.png';

export default function VisualDivider() {
  return (
    <div className="relative h-[60vh] w-full overflow-hidden bg-moss">
      <img 
        src={grapesImg} 
        alt="Dettaglio Uva Montepulciano" 
        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-moss via-transparent to-moss/40 opacity-60"></div>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-6">
          <h3 className="font-drama text-cream text-3xl md:text-5xl tracking-[0.2em] mb-4">MATERIA PRIMA</h3>
          <p className="font-data text-cream/40 text-[10px] uppercase tracking-[0.4em]">Dal grappolo al bicchiere</p>
        </div>
      </div>
    </div>
  );
}
