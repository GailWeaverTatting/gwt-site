import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { Download, Youtube } from 'lucide-react';
import type { Pattern } from '@shared/schema';

export default function FreePatternsSection() {
  const { t } = useLanguage();
  
  const { data: freePatterns = [], isLoading } = useQuery<Pattern[]>({
    queryKey: ['/api/patterns/free'],
  });

  if (isLoading) {
    return (
      <section id="free" className="py-20 bg-white">
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
    <section id="free" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0">
            <h2 className="font-serif text-3xl lg:text-5xl text-primary font-bold mb-6">
              {t.freeTitle} <span className="text-accent font-script">on the house!</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8">
              {t.freeDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-accent text-white px-8 py-3 rounded-full hover:bg-accent/90 transition-colors font-medium flex items-center justify-center space-x-2">
                <Download className="h-4 w-4" />
                <span>{t.downloadFree}</span>
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.open('https://www.youtube.com/playlist?list=gailweavertatting-free', '_blank')}
                className="border-2 border-primary text-primary px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-colors font-medium flex items-center justify-center space-x-2"
              >
                <Youtube className="h-4 w-4" />
                <span>{t.watchSeries}</span>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Beginner tatting supplies with simple patterns and colorful threads" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute top-4 left-4 bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold">
              Free!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
