
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building, Home, Wrench, Paintbrush, Hammer, TreePine, CheckCircle, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Building,
      title: "Bina İnşaatı",
      description: "Konut, ofis ve ticari bina inşaatı hizmetleri",
      features: ["Betonarme yapılar", "Çelik konstrüksiyon", "Prefabrik yapılar", "Proje yönetimi"],
      price: "Metrekare başına 2.500₺'den başlayan fiyatlar"
    },
    {
      icon: Home,
      title: "Villa İnşaatı",
      description: "Özel tasarım villa ve konut projeleri",
      features: ["Mimari tasarım", "İç dizayn", "Bahçe düzenleme", "Akıllı ev sistemleri"],
      price: "Anahtar teslim villa projeleri"
    },
    {
      icon: Wrench,
      title: "Tadilat & Renovasyon",
      description: "Ev ve ofis tadilat işleri",
      features: ["Banyo tadilatı", "Mutfak yenileme", "Kapsamlı renovasyon", "İç mekan tasarımı"],
      price: "Uygun fiyatlarla kaliteli tadilat"
    },
    {
      icon: Paintbrush,
      title: "Boyama & Badana",
      description: "İç ve dış cephe boyama hizmetleri",
      features: ["Dış cephe boyama", "İç mekan boyama", "Dekoratif boyama", "Su bazlı boyalar"],
      price: "Metrekare başına 25₺'den başlayan fiyatlar"
    },
    {
      icon: Hammer,
      title: "Onarım Hizmetleri",
      description: "Yapısal ve kozmetik onarım işleri",
      features: ["Çatı onarımı", "Su kaçağı tamiri", "Elektrik işleri", "Tesisatçılık"],
      price: "7/24 acil onarım hizmetleri"
    },
    {
      icon: TreePine,
      title: "Peyzaj & Bahçe",
      description: "Bahçe düzenleme ve peyzaj hizmetleri",
      features: ["Bahçe tasarımı", "Sulama sistemleri", "Bitkilendirme", "Dış mekan aydınlatması"],
      price: "Profesyonel peyzaj çözümleri"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Hizmetlerimiz</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              20 yıllık deneyimimizle inşaat sektöründe geniş hizmet yelpazesi sunuyoruz. 
              Kaliteli işçilik ve güvenilir hizmet anlayışıyla projelerinizi hayata geçiriyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t">
                    <p className="text-blue-600 font-medium text-sm">{service.price}</p>
                    <Button className="w-full mt-3">
                      Teklif Al <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Projeniz İçin Ücretsiz Keşif
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Deneyimli ekibimiz projenizi değerlendirerek size en uygun çözümü sunuyor
          </p>
          <Button size="lg" className="mr-4">
            Hemen Ara: 0532 123 45 67
          </Button>
          <Button size="lg" variant="outline">
            Online Teklif Al
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
