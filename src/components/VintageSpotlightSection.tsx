import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import type { Pattern } from '@shared/schema';

export default function VintageSpotlightSection() {
  const { t } = useLanguage();
  
  const { data: vintagePatterns = [], isLoading } = useQuery<Pattern[]>({
    queryKey: ['/api/patterns/vintage'],
  });

  if (isLoading) {
    return (
      <section id="vintage" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-1/2 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="vintage" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative mb-12 lg:mb-0">
            <img 
              src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Vintage tatting pattern books with antique lace doilies" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute top-4 right-4 bg-secondary text-white px-4 py-2 rounded-full text-sm font-semibold">
              Est. 1800s
            </div>
          </div>

          <div>
            <h2 className="font-serif text-3xl lg:text-5xl text-primary font-bold mb-6">
              {t.vintageTitle}
            </h2>
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8">
              {t.vintageDescription}
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-serif font-bold text-primary">127</div>
                <div className="text-sm text-gray-600">{t.patternsRestored}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-serif font-bold text-secondary">6</div>
                <div className="text-sm text-gray-600">{t.erasSpanned}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-serif font-bold text-accent">89</div>
                <div className="text-sm text-gray-600">{t.historicalNotes}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-serif font-bold text-primary">12</div>
                <div className="text-sm text-gray-600">{t.countriesOrigin}</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-secondary text-white px-8 py-3 rounded-full hover:bg-secondary/90 transition-colors font-medium">
                {t.exploreVintage}
              </Button>
              <Button variant="outline" className="border-2 border-accent text-accent px-8 py-3 rounded-full hover:bg-accent hover:text-white transition-colors font-medium">
                {t.downloadTry}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
