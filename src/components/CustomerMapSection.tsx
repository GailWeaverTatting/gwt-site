import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { ExternalLink } from 'lucide-react';
import { FaEtsy } from 'react-icons/fa';
import WorldMap from '@/components/WorldMap';
import ReviewCarousel from '@/components/ReviewCarousel';
import type { Review } from '@shared/schema';

export default function CustomerMapSection() {
  const { t } = useLanguage();
  
  const { data: reviews = [], isLoading } = useQuery<Review[]>({
    queryKey: ['/api/reviews'],
  });

  if (isLoading) {
    return (
      <section className="py-20 bg-gradient-to-br from-secondary/10 via-neutral to-accent/5">
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
    <section className="py-20 bg-gradient-to-br from-secondary/10 via-neutral to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl lg:text-5xl text-primary font-bold mb-6">
            {t.mapTitle}
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t.mapDescription}
          </p>
        </div>

        {/* World Map */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-6 overflow-hidden relative">
            <iframe
              src="https://www.google.com/maps/d/embed?mid=1AGz5PG9mDhvKL-CX26d3OMFHKkFUxtE&ehbc=2E312F&iwloc=&ui=2&z=2"
              width="100%"
              height="480"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
              title="Gail Weaver Tatting Customer Locations Worldwide"
            />
            {/* Hide the top bar */}
            <div className="absolute top-6 left-6 right-6 h-16 bg-white z-10 rounded-t-lg"></div>
          </div>
        </div>

        {/* Customer Reviews Carousel */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl lg:text-3xl text-primary font-semibold mb-4">
              What Customers Are Saying
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real feedback from tatting enthusiasts who have brought these patterns to life
            </p>
          </div>
          
          <ReviewCarousel reviews={reviews} />
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => window.open('https://www.etsy.com/shop/gailweaverjewelry/reviews', '_blank')}
              className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors font-medium flex items-center justify-center space-x-2"
            >
              <FaEtsy className="h-4 w-4" />
              <span>{t.seeEtsyReviews}</span>
              <ExternalLink className="h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-2 border-secondary text-secondary px-8 py-3 rounded-full hover:bg-secondary hover:text-white transition-colors font-medium">
              {t.submitFeedback}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
