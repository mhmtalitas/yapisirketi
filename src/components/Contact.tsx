
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">İletişim</h2>
          <p className="text-xl text-gray-600">
            Projeniz için ücretsiz keşif ve teklif alın
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">İletişim Bilgileri</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Telefon</h4>
                  <p className="text-gray-600">0532 123 45 67</p>
                  <p className="text-gray-600">0212 456 78 90</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">E-posta</h4>
                  <p className="text-gray-600">info@insaatpro.com</p>
                  <p className="text-gray-600">teklif@insaatpro.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Adres</h4>
                  <p className="text-gray-600">
                    Merkez Mahallesi, İnşaat Caddesi No:123<br />
                    Şişli / İstanbul
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Çalışma Saatleri</h4>
                  <p className="text-gray-600">Pazartesi - Cumartesi: 08:00 - 18:00</p>
                  <p className="text-gray-600">Pazar: Kapalı</p>
                </div>
              </div>
            </div>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Teklif Formu</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Ad Soyad</Label>
                    <Input id="name" placeholder="Adınız Soyadınız" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefon</Label>
                    <Input id="phone" placeholder="0532 123 45 67" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">E-posta</Label>
                  <Input id="email" type="email" placeholder="email@example.com" />
                </div>
                
                <div>
                  <Label htmlFor="project">Proje Türü</Label>
                  <select id="project" className="w-full px-3 py-2 border border-gray-300 rounded-md">
                    <option>Seçiniz...</option>
                    <option>Bina İnşaatı</option>
                    <option>Villa İnşaatı</option>
                    <option>Tadilat</option>
                    <option>Onarım</option>
                    <option>Diğer</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="message">Mesaj</Label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Proje detaylarınızı yazın..."
                  ></textarea>
                </div>
                
                <Button className="w-full">Teklif Gönder</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
