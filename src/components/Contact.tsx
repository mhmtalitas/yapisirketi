
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      details: ["0462 234 56 78", "0532 123 45 67"]
    },
    {
      icon: Mail,
      title: "E-posta",
      details: ["info@tasyapi.com", "teklif@tasyapi.com"]
    },
    {
      icon: MapPin,
      title: "Adres",
      details: ["Atatürk Caddesi No:45/A", "Beşikdüzü / Trabzon"]
    },
    {
      icon: Clock,
      title: "Çalışma Saatleri",
      details: ["Pazartesi - Cumartesi: 08:00 - 18:00", "Pazar: Kapalı"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">İletişim</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600">
            Projeniz için ücretsiz keşif ve teklif alın
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <info.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">{detail}</p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Card className="max-w-2xl mx-auto border-0 shadow-xl">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Teklif Formu</h3>
              <p className="text-gray-600">Size en kısa sürede dönüş yapalım</p>
            </div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-gray-700 font-medium">Ad Soyad</Label>
                  <Input id="name" placeholder="Adınız Soyadınız" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-gray-700 font-medium">Telefon</Label>
                  <Input id="phone" placeholder="0532 123 45 67" className="mt-2" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email" className="text-gray-700 font-medium">E-posta</Label>
                <Input id="email" type="email" placeholder="email@example.com" className="mt-2" />
              </div>
              
              <div>
                <Label htmlFor="project" className="text-gray-700 font-medium">Proje Türü</Label>
                <select id="project" className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Seçiniz...</option>
                  <option>Bina İnşaatı</option>
                  <option>Villa İnşaatı</option>
                  <option>Tadilat</option>
                  <option>Onarım</option>
                  <option>Diğer</option>
                </select>
              </div>
              
              <div>
                <Label htmlFor="message" className="text-gray-700 font-medium">Mesaj</Label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Proje detaylarınızı yazın..."
                ></textarea>
              </div>
              
              <Button className="w-full py-3 text-lg">Teklif Gönder</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
