
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, Home, Wrench, Paintbrush, Hammer, TreePine } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Building,
      title: "Bina İnşaatı",
      description: "Konut, ofis ve ticari bina inşaatı hizmetleri",
      features: ["Betonarme yapılar", "Çelik konstrüksiyon", "Prefabrik yapılar"]
    },
    {
      icon: Home,
      title: "Villa İnşaatı",
      description: "Özel tasarım villa ve konut projeleri",
      features: ["Mimari tasarım", "İç dizayn", "Bahçe düzenleme"]
    },
    {
      icon: Wrench,
      title: "Tadilat & Renovasyon",
      description: "Ev ve ofis tadilat işleri",
      features: ["Banyo tadilatı", "Mutfak yenileme", "Kapsamlı renovasyon"]
    },
    {
      icon: Paintbrush,
      title: "Boyama & Badana",
      description: "İç ve dış cephe boyama hizmetleri",
      features: ["Dış cephe boyama", "İç mekan boyama", "Dekoratif boyama"]
    },
    {
      icon: Hammer,
      title: "Onarım Hizmetleri",
      description: "Yapısal ve kozmetik onarım işleri",
      features: ["Çatı onarımı", "Su kaçağı tamiri", "Elektrik işleri"]
    },
    {
      icon: TreePine,
      title: "Peyzaj & Bahçe",
      description: "Bahçe düzenleme ve peyzaj hizmetleri",
      features: ["Bahçe tasarımı", "Sulama sistemleri", "Bitkilendirme"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Hizmetlerimiz</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            İnşaat sektöründe geniş hizmet yelpazesi ile tüm ihtiyaçlarınızı karşılıyoruz
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow h-full">
              <CardHeader>
                <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
