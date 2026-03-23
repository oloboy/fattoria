import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Contatti() {
  const { t } = useTranslation();
  return (
    <section id="contatti" className="py-24 px-6 md:px-12 lg:px-24 bg-cream pb-32">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        
        {/* Info Box */}
        <div className="w-full lg:w-1/3">
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-moss mb-8">{t('contatti.title')}</h2>
          
          <div className="flex flex-col gap-8">
            <div className="flex gap-4 items-start">
              <div className="bg-clay/10 p-3 rounded-xl">
                <MapPin className="text-clay shrink-0" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-moss font-sans text-xl mb-1">{t('contatti.workshop')}</h4>
                <p className="text-charcoal/70 font-sans leading-relaxed">{t('contatti.workshopAddr1')}<br/>{t('contatti.workshopAddr2')}</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="bg-clay/10 p-3 rounded-xl">
                <Phone className="text-clay shrink-0" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-moss font-sans text-xl mb-1">{t('contatti.phoneLabel')}</h4>
                <p className="text-charcoal/70 font-sans leading-relaxed">+39 349 734 8330</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="bg-clay/10 p-3 rounded-xl">
                <Mail className="text-clay shrink-0" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-moss font-sans text-xl mb-1">{t('contatti.emailLabel')}</h4>
                <p className="text-charcoal/70 font-sans leading-relaxed">info@fattoriadenardis.it</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="bg-clay/10 p-3 rounded-xl">
                <Clock className="text-clay shrink-0" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-moss font-sans text-xl mb-1">{t('contatti.hoursLabel')}</h4>
                <p className="text-charcoal/70 font-sans leading-relaxed">{t('contatti.hoursDays')}<br/>15:00 – 19:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Box */}
        <div className="w-full lg:w-2/3 h-[350px] md:h-[450px] rounded-[2.5rem] overflow-hidden border border-moss/10 shadow-[0_20px_50px_rgb(0,0,0,0.05)] bg-cream-dark relative">
          <iframe 
            src="https://maps.google.com/maps?q=42.69810,13.65841&z=14&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="filter grayscale-[60%] contrast-[1.1] opacity-90 absolute inset-0"
          ></iframe>
        </div>

      </div>
    </section>
  );
}
