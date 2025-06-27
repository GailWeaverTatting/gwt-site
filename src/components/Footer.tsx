import { useLanguage } from '@/hooks/useLanguage';
import { Instagram, Youtube, Coffee } from 'lucide-react';
import { FaEtsy } from 'react-icons/fa';
import logoPath from '@assets/Untitled_Artwork.png';

export default function Footer() {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={logoPath} 
                alt="Gail Weaver Tatting Logo" 
                className="w-12 h-12 object-contain bg-white rounded-full p-1"
              />
              <div>
                <h3 className="font-serif text-lg font-semibold">Gail Weaver Tatting</h3>
                <p className="text-xs text-gray-400 font-script">Lace that tells a story</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t.footerDescription}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t.quickLinks}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="hover:text-white transition-colors"
                >
                  {t.about}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('patterns')}
                  className="hover:text-white transition-colors"
                >
                  {t.patterns}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('free')}
                  className="hover:text-white transition-colors"
                >
                  {t.free}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('vintage')}
                  className="hover:text-white transition-colors"
                >
                  {t.vintage}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-white transition-colors"
                >
                  {t.contact}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t.resources}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Beginner's Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Video Tutorials</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Color Builder</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Thread Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t.followWork}</h4>
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://instagram.com/gailweavertatting" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="https://youtube.com/gailweavertatting" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a 
                href="https://etsy.com/shop/gailweaverjewelry" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
              >
                <FaEtsy className="h-4 w-4" />
              </a>
              <a 
                href="https://buymeacoffee.com/gailweaver" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Coffee className="h-4 w-4" />
              </a>
            </div>
            <p className="text-gray-400 text-xs">
              {t.followDescription}
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Gail Weaver Tatting. {t.allRights}
          </p>
          <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">{t.privacy}</a>
            <a href="#" className="hover:text-white transition-colors">{t.terms}</a>
            <a href="#" className="hover:text-white transition-colors">{t.returns}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
