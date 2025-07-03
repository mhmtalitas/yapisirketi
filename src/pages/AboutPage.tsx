
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

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Hakkımızda</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              2004 yılından bu yana Trabzon Beşikdüzü'nde inşaat sektöründe güvenilir hizmet veren, 
              kaliteli işçilik anlayışıyla öne çıkan bir firmayız
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Hikayemiz</h2>
              <p className="text-lg text-gray-600 mb-6">
                İnşaat Pro, 2004 yılında Trabzon Beşikdüzü'nde küçük bir aile işletmesi olarak başladığı yolculuğunda, 
                bugün Karadeniz Bölgesi'nin önde gelen inşaat firmalarından biri haline gelmiştir.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                20 yıllık deneyimimiz boyunca 500'den fazla proje tamamladık ve binlerce ailenin 
                hayallerini gerçeğe dönüştürdük. Kaliteli malzeme kullanımı, zamanında teslimat 
                ve müşteri memnuniyeti odaklı çalışma prensiplerimizle bölgede güvenilir bir 
                marka olduk.
              </p>
              <p className="text-lg text-gray-600">
                Deneyimli ekibimiz, modern teknoloji ve geleneksel ustalık bilgisini harmanlayarak 
                her projede mükemmellik standardını yakalamaya odaklanır. Trabzon ve çevre illerde 
                kaliteli inşaat hizmetleri sunmaktan gurur duyuyoruz.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="İnşaat Ekibi" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Rakamlarla Biz</h2>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-8">
                <CardContent className="pt-6">
                  <stat.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-gray-800 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Değerlerimiz</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <CardContent className="pt-6">
                <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-4">Misyonumuz</h3>
                <p className="text-gray-600">
                  Kaliteli malzeme, deneyimli işçilik ve güvenilir hizmet anlayışıyla 
                  Karadeniz Bölgesi'nde müşterilerimizin hayallerini gerçeğe dönüştürmek
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8">
              <CardContent className="pt-6">
                <Eye className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-4">Vizyonumuz</h3>
                <p className="text-gray-600">
                  İnşaat sektöründe örnek alınan, sürdürülebilir ve yenilikçi 
                  çözümler sunan Karadeniz Bölgesi'nin lider firması olmak
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8">
              <CardContent className="pt-6">
                <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-4">Değerlerimiz</h3>
                <p className="text-gray-600">
                  Dürüstlük, kalite, güvenilirlik, müşteri odaklılık ve 
                  çevreye saygı temel değerlerimizdir
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
