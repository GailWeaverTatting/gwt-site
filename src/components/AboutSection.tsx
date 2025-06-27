import { useLanguage } from '@/hooks/useLanguage';
import { Heart, Clock, Globe } from 'lucide-react';

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl lg:text-5xl text-primary font-bold mb-8">
            {t.aboutTitle}
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-12">
            {t.aboutDescription}
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-primary text-2xl" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">{t.madeWithCare}</h3>
              <p className="text-gray-600">{t.madeWithCareDesc}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-secondary text-2xl" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">{t.timelessCraft}</h3>
              <p className="text-gray-600">{t.timelessCraftDesc}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-accent text-2xl" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">{t.globalCommunity}</h3>
              <p className="text-gray-600">{t.globalCommunityDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
