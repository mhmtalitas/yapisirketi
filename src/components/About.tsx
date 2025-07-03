
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Calendar, Award, MapPin } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Calendar, value: "20+", label: "Yıl Tecrübe" },
    { icon: Users, value: "500+", label: "Mutlu Müşteri" },
    { icon: Award, value: "15", label: "Ödül" },
    { icon: MapPin, value: "10", label: "Şehir" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Hakkımızda</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            2004 yılından bu yana Trabzon Beşikdüzü'nde inşaat sektöründe hizmet veren firmamız, 
            kaliteli işçilik ve güvenilir hizmet anlayışı ile öne çıkıyor.
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors">
                <stat.icon className="w-10 h-10 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Deneyimli ekibimiz ve modern teknoloji kullanarak, her projede 
            mükemmellik standartlarını yakalıyor ve müşteri memnuniyetini 
            en üst seviyede tutuyoruz. Karadeniz Bölgesi'nde güvenilir 
            inşaat hizmetleri sunmaktayız.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
