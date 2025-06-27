import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/hooks/useLanguage';
import { apiRequest, queryClient } from '@/lib/queryClient';
import { Mail, Instagram, Youtube, Coffee } from 'lucide-react';
import { FaEtsy } from 'react-icons/fa';
import type { InsertContact, InsertNewsletter } from '@shared/schema';

export default function ContactSection() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest('POST', '/api/contact', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: t.thankYouMessage,
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message",
        variant: "destructive",
      });
    },
  });

  const newsletterMutation = useMutation({
    mutationFn: async (data: InsertNewsletter) => {
      const response = await apiRequest('POST', '/api/newsletter', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Subscribed!",
        description: t.thankYouNewsletter,
      });
      setNewsletterEmail('');
    },
    onError: (error: any) => {
      const message = error.message?.includes('already subscribed') ? t.emailExists : "Failed to subscribe";
      toast({
        title: "Error",
        description: message,
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      newsletterMutation.mutate({ email: newsletterEmail });
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-neutral via-white to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl lg:text-5xl text-primary font-bold mb-6">
            {t.contactTitle}
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t.contactDescription}
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-16 max-w-6xl mx-auto">
          <div className="mb-12 lg:mb-0">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label className="block text-sm font-medium text-gray-700 mb-2">{t.yourName}</Label>
                <Input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" 
                  placeholder={t.yourName}
                  required
                />
              </div>
              <div>
                <Label className="block text-sm font-medium text-gray-700 mb-2">{t.emailAddress}</Label>
                <Input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" 
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <Label className="block text-sm font-medium text-gray-700 mb-2">{t.subject}</Label>
                <Select value={formData.subject} onValueChange={(value) => setFormData({ ...formData, subject: value })}>
                  <SelectTrigger className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                    <SelectValue placeholder={t.subject} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">{t.generalQuestion}</SelectItem>
                    <SelectItem value="pattern">{t.patternInquiry}</SelectItem>
                    <SelectItem value="collaboration">{t.collaboration}</SelectItem>
                    <SelectItem value="support">{t.technicalSupport}</SelectItem>
                    <SelectItem value="other">{t.other}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="block text-sm font-medium text-gray-700 mb-2">{t.message}</Label>
                <Textarea 
                  rows={5} 
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" 
                  placeholder="Tell me about your tatting journey or ask any questions..."
                  required
                />
              </div>
              <Button 
                type="submit" 
                disabled={contactMutation.isPending}
                className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                {contactMutation.isPending ? 'Sending...' : t.sendMessage}
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl font-semibold mb-6">{t.connectWithMe}</h3>
              <div className="space-y-4">
                <a href="mailto:gail@gailweavertatting.com" className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">Email Me</div>
                    <div className="text-gray-600 text-sm">gail@gailweavertatting.com</div>
                  </div>
                </a>

                <a href="https://instagram.com/gailweavertatting" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Instagram className="text-secondary h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">Instagram</div>
                    <div className="text-gray-600 text-sm">@gailweavertatting</div>
                  </div>
                </a>

                <a href="https://youtube.com/gailweavertatting" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <Youtube className="text-red-600 h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">YouTube</div>
                    <div className="text-gray-600 text-sm">Gail Weaver Tatting</div>
                  </div>
                </a>

                <a href="https://etsy.com/shop/gailweaverjewelry" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <FaEtsy className="text-orange-600 h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">Etsy Shop</div>
                    <div className="text-gray-600 text-sm">GailWeaverTattingShop</div>
                  </div>
                </a>

                <a href="https://buymeacoffee.com/gailweaver" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Coffee className="text-accent h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">Buy Me a Coffee</div>
                    <div className="text-gray-600 text-sm">Support my work</div>
                  </div>
                </a>
              </div>
            </div>

            <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-6">
              <CardContent className="p-0">
                <h4 className="font-serif text-lg font-semibold mb-3">{t.newsletter}</h4>
                <p className="text-gray-600 text-sm mb-4">{t.newsletterDesc}</p>
                <form onSubmit={handleNewsletterSubmit} className="flex">
                  <Input 
                    type="email" 
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Your email" 
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                  <Button 
                    type="submit"
                    disabled={newsletterMutation.isPending}
                    className="bg-primary text-white px-6 py-2 rounded-r-lg hover:bg-primary/90 transition-colors"
                  >
                    {newsletterMutation.isPending ? '...' : t.subscribe}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
