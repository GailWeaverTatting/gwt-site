import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { ChevronDown, Menu } from 'lucide-react';
import logoPath from '@assets/Untitled_Artwork.png';

export default function Navigation() {
  const { language, setLanguage, t } = useLanguage();
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-secondary/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-serif text-xl text-primary font-semibold">Gail Weaver Tatting</h1>
            <p className="text-xs text-gray-600 font-script">Lace that tells a story</p>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-dark hover:text-primary transition-colors"
            >
              {t.about}
            </button>
            <button 
              onClick={() => scrollToSection('patterns')}
              className="text-dark hover:text-primary transition-colors"
            >
              {t.patterns}
            </button>
            <button 
              onClick={() => scrollToSection('free')}
              className="text-dark hover:text-primary transition-colors"
            >
              {t.free}
            </button>
            <button 
              onClick={() => scrollToSection('vintage')}
              className="text-dark hover:text-primary transition-colors"
            >
              {t.vintage}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-dark hover:text-primary transition-colors"
            >
              {t.contact}
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <button 
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-1 text-sm bg-gray-100 px-3 py-1.5 rounded-full hover:bg-gray-200 transition-colors"
              >
                <span>{language === 'en' ? 'EN' : 'УК'}</span>
                <ChevronDown className="h-3 w-3" />
              </button>
              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg border py-2 min-w-[100px]">
                  <button 
                    onClick={() => {
                      setLanguage('en');
                      setIsLanguageOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50"
                  >
                    English
                  </button>
                  <button 
                    onClick={() => {
                      setLanguage('uk');
                      setIsLanguageOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50"
                  >
                    Українська
                  </button>
                </div>
              )}
            </div>
            
            <Button variant="ghost" size="sm" className="lg:hidden text-dark">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
