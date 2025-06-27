import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';
import { ExternalLink } from 'lucide-react';
import { FaEtsy } from 'react-icons/fa';
import type { Pattern } from '@shared/schema';

export default function ShopPatternsSection() {
  const { t } = useLanguage();
  
  const { data: patterns = [], isLoading } = useQuery<Pattern[]>({
    queryKey: ['/api/patterns'],
  });

  if (isLoading) {
    return (
      <section id="patterns" className="py-20 bg-neutral">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded w-1/2 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="patterns" className="py-20 bg-neutral">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl lg:text-5xl text-primary font-bold mb-6">
            {t.shopTitle}
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t.shopDescription}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {patterns.map((pattern) => (
            <Card key={pattern.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={pattern.imageUrl} 
                alt={pattern.name} 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-2">{pattern.name}</h3>
                <p className="text-gray-600 mb-4">{pattern.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-semibold">{pattern.price}</span>
                  <span className="text-sm text-gray-500">
                    {pattern.difficulty === 'Beginner' ? t.beginner : 
                     pattern.difficulty === 'Intermediate' ? t.intermediate : t.advanced}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => window.open('https://www.etsy.com/shop/gailweaverjewelry', '_blank')}
              className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors font-medium flex items-center justify-center space-x-2"
            >
              <FaEtsy className="h-4 w-4" />
              <span>{t.visitEtsy}</span>
              <ExternalLink className="h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-2 border-secondary text-secondary px-8 py-3 rounded-full hover:bg-secondary hover:text-white transition-colors font-medium">
              {t.viewCollections}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
