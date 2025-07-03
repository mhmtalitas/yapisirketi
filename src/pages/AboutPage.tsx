
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Calendar, Award, MapPin, Target, Eye, Heart } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { icon: Calendar, value: "20+", label: "Yıl Tecrübe" },
    { icon: Users, value: "500+", label: "Mutlu Müşteri" },
    { icon: Award, value: "15", label: "Ödül" },
    { icon: MapPin, value: "10", label: "Şehir" }
  ];

  const values = [
    {
      icon: Target,
      title: "Misyonumuz",
      description: "Kaliteli malzeme, deneyimli işçilik ve güvenilir hizmet anlayışıyla Karadeniz Bölgesi'nde müşterilerimizin hayallerini gerçeğe dönüştürmek"
    },
    {
      icon: Eye,
      title: "Vizyonumuz", 
      description: "İnşaat sektöründe örnek alınan, sürdürülebilir ve yenilikçi çözümler sunan Karadeniz Bölgesi'nin lider firması olmak"
    },
    {
      icon: Heart,
      title: "Değerlerimiz",
      description: "Dürüstlük, kalite, güvenilirlik, müşteri odaklılık ve çevreye saygı temel değerlerimizdir"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-32 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-8">Hakkımızda</h1>
            <div className="w-32 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-xl text-blue-100 leading-relaxed">
              2004 yılından bu yana Trabzon Beşikdüzü'nde inşaat sektöründe güvenilir hizmet veren, 
              kaliteli işçilik anlayışıyla öne çıkan bir firmayız
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Hikayemiz</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Taş Yapı, 2004 yılında Trabzon Beşikdüzü'nde küçük bir aile işletmesi olarak başladığı yolculuğunda, 
                  bugün Karadeniz Bölgesi'nin önde gelen inşaat firmalarından biri haline gelmiştir.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  20 yıllık deneyimimiz boyunca 500'den fazla proje tamamladık ve binlerce ailenin 
                  hayallerini gerçeğe dönüştürdük. Kaliteli malzeme kullanımı, zamanında teslimat 
                  ve müşteri memnuniyeti odaklı çalışma prensiplerimizle bölgede güvenilir bir 
                  marka olduk.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Deneyimli ekibimiz, modern teknoloji ve geleneksel ustalık bilgisini harmanlayarak 
                  her projede mükemmellik standardını yakalamaya odaklanır.
                </p>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl transform rotate-3"></div>
                <img 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Taş Yapı Ekibi" 
                  className="relative rounded-2xl shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Rakamlarla Biz</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
                  <stat.icon className="w-12 h-12 text-blue-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Değerlerimiz</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
