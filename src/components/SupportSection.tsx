import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';
import { Coffee, Video, Palette, Book, Wrench } from 'lucide-react';

export default function SupportSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0">
            <h2 className="font-serif text-3xl lg:text-5xl text-primary font-bold mb-6">
              {t.supportTitle} <span className="text-accent font-script">thread flowing</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8">
              {t.supportDescription}
            </p>

            <Card className="bg-gradient-to-r from-accent/10 to-secondary/10 rounded-2xl p-6 mb-8">
              <CardContent className="p-0">
                <h3 className="font-serif text-xl font-semibold mb-4">{t.whatSupport}</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Video className="h-4 w-4 text-accent" />
                    <span className="text-sm">{t.newVideos}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Palette className="h-4 w-4 text-secondary" />
                    <span className="text-sm">{t.moreColors}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Book className="h-4 w-4 text-primary" />
                    <span className="text-sm">{t.patternDev}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Wrench className="h-4 w-4 text-accent" />
                    <span className="text-sm">{t.betterEquip}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => window.open('https://buymeacoffee.com/gailweaver', '_blank')}
                className="bg-accent text-white px-8 py-3 rounded-full hover:bg-accent/90 transition-colors font-medium flex items-center justify-center space-x-2"
              >
                <Coffee className="h-4 w-4" />
                <span>{t.buyMeCoffee}</span>
              </Button>
              <Button variant="outline" className="border-2 border-primary text-primary px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-colors font-medium">
                {t.joinCircle}
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Cozy crafting workspace with tatting tools, patterns, and a warm cup of coffee" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-4 -right-4 bg-accent text-white p-4 rounded-full shadow-lg">
              <Coffee className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
