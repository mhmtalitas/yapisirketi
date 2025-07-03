
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
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Hakkımızda</h2>
            <p className="text-lg text-gray-600 mb-6">
              2004 yılından bu yana inşaat sektöründe hizmet veren firmamız, 
              kaliteli işçilik ve güvenilir hizmet anlayışıyla müşterilerine 
              değer katmaya devam ediyor.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Deneyimli ekibimiz ve modern teknoloji kullanarak, her projede 
              mükemmellik standartlarını yakalıyor ve müşteri memnuniyetini 
              en üst seviyede tutuyoruz.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6">
                  <CardContent className="pt-6">
                    <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="İnşaat Ekibi" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
