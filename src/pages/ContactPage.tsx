
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">İletişim</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Projeniz için ücretsiz keşif ve teklif almak üzere bizimle iletişime geçin
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">İletişim Bilgileri</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <Phone className="w-8 h-8 text-blue-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Telefon</h3>
                    <p className="text-lg text-gray-600 mb-1">0532 123 45 67 (Mobil)</p>
                    <p className="text-lg text-gray-600">0212 456 78 90 (Sabit)</p>
                    <p className="text-sm text-gray-500 mt-1">7/24 acil durumlar için mobil hatta ulaşabilirsiniz</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="w-8 h-8 text-blue-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">E-posta</h3>
                    <p className="text-lg text-gray-600 mb-1">info@insaatpro.com</p>
                    <p className="text-lg text-gray-600">teklif@insaatpro.com</p>
                    <p className="text-sm text-gray-500 mt-1">24 saat içinde yanıtlıyoruz</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin className="w-8 h-8 text-blue-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Adres</h3>
                    <p className="text-lg text-gray-600">
                      Merkez Mahallesi, İnşaat Caddesi No:123<br />
                      Şişli / İstanbul, 34360
                    </p>
                    <p className="text-sm text-gray-500 mt-1">Metro: Şişli-Mecidiyeköy (5 dk yürüme)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="w-8 h-8 text-blue-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Çalışma Saatleri</h3>
                    <p className="text-lg text-gray-600 mb-1">Pazartesi - Cumartesi: 08:00 - 18:00</p>
                    <p className="text-lg text-gray-600">Pazar: Kapalı</p>
                    <p className="text-sm text-gray-500 mt-1">Acil durumlar için mobil hattan 7/24 ulaşabilirsiniz</p>
                  </div>
                </div>
              </div>

              {/* Quick Contact Buttons */}
              <div className="mt-8 space-y-4">
                <Button className="w-full" size="lg">
                  <Phone className="mr-2 w-5 h-5" />
                  Hemen Ara: 0532 123 45 67
                </Button>
                <Button variant="outline" className="w-full" size="lg">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  WhatsApp ile İletişim
                </Button>
              </div>
            </div>
            
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Teklif Talep Formu</CardTitle>
                <p className="text-gray-600">
                  Aşağıdaki formu doldurarak ücretsiz keşif ve teklif talebinde bulunabilirsiniz
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">Ad *</Label>
                      <Input id="firstName" placeholder="Adınız" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Soyad *</Label>
                      <Input id="lastName" placeholder="Soyadınız" required />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Telefon *</Label>
                      <Input id="phone" placeholder="0532 123 45 67" required />
                    </div>
                    <div>
                      <Label htmlFor="email">E-posta</Label>
                      <Input id="email" type="email" placeholder="email@example.com" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="project">Proje Türü *</Label>
                    <select id="project" className="w-full px-3 py-2 border border-gray-300 rounded-md" required>
                      <option value="">Seçiniz...</option>
                      <option>Bina İnşaatı</option>
                      <option>Villa İnşaatı</option>
                      <option>Tadilat & Renovasyon</option>
                      <option>Boyama & Badana</option>
                      <option>Onarım Hizmetleri</option>
                      <option>Peyzaj & Bahçe</option>
                      <option>Diğer</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="location">Proje Konumu</Label>
                    <Input id="location" placeholder="İlçe, İstanbul" />
                  </div>

                  <div>
                    <Label htmlFor="budget">Bütçe Aralığı</Label>
                    <select id="budget" className="w-full px-3 py-2 border border-gray-300 rounded-md">
                      <option value="">Seçiniz...</option>
                      <option>50.000₺ - 100.000₺</option>
                      <option>100.000₺ - 250.000₺</option>
                      <option>250.000₺ - 500.000₺</option>
                      <option>500.000₺ - 1.000.000₺</option>
                      <option>1.000.000₺ +</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Proje Detayları</Label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="Proje detaylarınızı, özel isteklerinizi ve sorularınızı yazın..."
                    ></textarea>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="consent" className="rounded" required />
                    <label htmlFor="consent" className="text-sm text-gray-600">
                      Kişisel verilerimin işlenmesini kabul ediyorum *
                    </label>
                  </div>
                  
                  <Button className="w-full" size="lg">
                    Ücretsiz Teklif Gönder
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Ofisimize Uğrayın</h2>
            <p className="text-xl text-gray-600">
              Şişli merkezindeki ofisimizde yüz yüze görüşme imkanı
            </p>
          </div>
          
          <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
            <p className="text-gray-600">
              Harita: Merkez Mahallesi, İnşaat Caddesi No:123, Şişli/İstanbul
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
