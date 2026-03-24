import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function LegalModal({ isOpen, onClose, type }) {
  const { t } = useTranslation();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-charcoal/80 backdrop-blur-sm">
      <div className="bg-cream w-full max-w-4xl max-h-[90vh] rounded-[2rem] shadow-2xl overflow-hidden flex flex-col relative">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-charcoal/50 hover:bg-clay hover:text-cream rounded-full transition-colors z-10"
          aria-label="Chiudi"
        >
          <X size={24} />
        </button>
        
        <div className="p-8 md:p-12 overflow-y-auto font-sans text-charcoal/80 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4 [&_li]:mb-2">
          <PolicyText t={t} sectionKey={type} />
        </div>
      </div>
    </div>
  );
}

function PolicyText({ t, sectionKey }) {
  const data = t(`legal.${sectionKey}`, { returnObjects: true });
  
  // Condizione di fallback nel caso in cui i dati non fossero ancora caricati correttamente
  if (!data || !data.sections) return null;

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-drama text-charcoal mb-8">{data.title}</h2>
      <p className="text-sm text-charcoal/50">{data.updated}</p>
      
      {data.sections.map((sec, i) => (
        <section key={i}>
          {sec.title && <h3 className="text-xl font-bold text-charcoal mb-2">{sec.title}</h3>}
          {sec.paragraphs && sec.paragraphs.map((p, j) => (
            <p key={j} dangerouslySetInnerHTML={{ __html: p }} />
          ))}
          {sec.list && (
            <ul className="list-disc pl-5">
              {sec.list.map((item, j) => (
                <li key={j} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  );
}
