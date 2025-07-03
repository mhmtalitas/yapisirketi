
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Clock, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Güvenilir İnşaat Çözümleri
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              20 yıllık deneyimimizle kaliteli inşaat hizmetleri sunuyoruz. 
              Hayalinizdeki yapıyı gerçeğe dönüştürüyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Ücretsiz Keşif <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Projelerimizi İncele
              </Button>
            </div>
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-2">
                <Shield className="w-6 h-6 text-green-400" />
                <span>Garantili İşçilik</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-6 h-6 text-green-400" />
                <span>Zamanında Teslimat</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-6 h-6 text-green-400" />
                <span>Kaliteli Malzeme</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="İnşaat Projesi" 
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
