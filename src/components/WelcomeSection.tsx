import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { Search, Youtube, Coffee } from 'lucide-react';
import logoPath from '@assets/Untitled_Artwork.png';

export default function WelcomeSection() {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-neutral via-white to-secondary/10 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-8 lg:gap-16">
          <div className="flex-shrink-0">
            <img 
              src={logoPath} 
              alt="Gail Weaver Tatting Logo" 
              className="w-48 h-48 lg:w-64 lg:h-64 object-contain"
            />
          </div>
          
          <div className="max-w-3xl text-center">
            <h1 className="font-serif text-4xl lg:text-6xl text-primary font-bold mb-6 leading-tight">
              {t.welcomeTitle} <span className="text-secondary font-script font-light">{t.welcomeSubtitle}</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed">
              {t.welcomeDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => scrollToSection('patterns')}
                className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors font-medium flex items-center justify-center space-x-2"
              >
                <Search className="h-4 w-4" />
                <span>{t.browsePatterns}</span>
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.open('https://www.youtube.com/channel/gailweavertatting', '_blank')}
                className="border-2 border-secondary text-secondary px-8 py-3 rounded-full hover:bg-secondary hover:text-white transition-colors font-medium flex items-center justify-center space-x-2"
              >
                <Youtube className="h-4 w-4" />
                <span>{t.watchYoutube}</span>
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.open('https://buymeacoffee.com/gailweaver', '_blank')}
                className="border-2 border-accent text-accent px-8 py-3 rounded-full hover:bg-accent hover:text-white transition-colors font-medium flex items-center justify-center space-x-2"
              >
                <Coffee className="h-4 w-4" />
                <span>{t.supportWork}</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
