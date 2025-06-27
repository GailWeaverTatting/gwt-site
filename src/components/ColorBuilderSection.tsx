import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';
import { Palette, Save, Share, Download } from 'lucide-react';
import { threadBrands, type ThreadBrand } from '@/lib/colorBuilder';
import ColorBuilder from './ColorBuilder';

export default function ColorBuilderSection() {
  const { t } = useLanguage();
  const [selectedBrand, setSelectedBrand] = useState<ThreadBrand | null>(null);
  const [showColorBuilder, setShowColorBuilder] = useState(false);

  const handleLaunchBuilder = () => {
    setShowColorBuilder(true);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-accent/5 via-neutral to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl lg:text-5xl text-primary font-bold mb-6">
            {t.colorTitle} <span className="text-accent font-script">color magic</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t.colorDescription}
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 max-w-6xl mx-auto">
          <div className="lg:grid lg:grid-cols-3 lg:gap-12">
            <div className="lg:col-span-2 mb-8 lg:mb-0">
              <div className="bg-gray-50 rounded-2xl p-8 h-96 flex items-center justify-center relative">
                <img 
                  src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                  alt="Colorful thread spools and tatting supplies arranged for crafting" 
                  className="rounded-xl w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-2xl">
                  <Button 
                    onClick={handleLaunchBuilder}
                    className="bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-shadow flex items-center space-x-2"
                  >
                    <Palette className="h-5 w-5" />
                    <span>{t.launchBuilder}</span>
                  </Button>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-xl font-semibold mb-4">{t.threadPalettes}</h3>
                <div className="space-y-3">
                  {threadBrands.map((brand) => (
                    <Card 
                      key={brand.id}
                      className={`border rounded-lg p-3 hover:border-primary transition-colors cursor-pointer ${
                        selectedBrand?.id === brand.id ? 'border-primary bg-primary/5' : 'border-gray-200'
                      }`}
                      onClick={() => setSelectedBrand(brand)}
                    >
                      <CardContent className="p-0">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{brand.name}</span>
                          <span className="text-sm text-gray-500">{brand.colorCount} colors</span>
                        </div>
                        <div className="flex mt-2 space-x-1">
                          {brand.colors.slice(0, 5).map((color) => (
                            <div 
                              key={color.id}
                              className="w-4 h-4 rounded-full" 
                              style={{ backgroundColor: color.hex }}
                            />
                          ))}
                          <span className="text-xs text-gray-400 ml-2">+{brand.colorCount - 5}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <h4 className="font-medium mb-3">{t.comingSoon}</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <Save className="h-4 w-4 text-accent" />
                    <span>{t.saveColors}</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Share className="h-4 w-4 text-secondary" />
                    <span>{t.shareComm}</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Download className="h-4 w-4 text-primary" />
                    <span>{t.exportList}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {showColorBuilder && (
        <ColorBuilder onClose={() => setShowColorBuilder(false)} />
      )}
    </section>
  );
}
