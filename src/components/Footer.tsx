
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">İnşaat Pro</h3>
            <p className="text-gray-300 mb-4">
              Güvenilir inşaat çözümleri ile hayalinizdeki yapıyı gerçeğe dönüştürüyoruz.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer" />
              <Instagram className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer" />
              <Twitter className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer" />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Hizmetler</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/hizmetler" className="hover:text-white">Bina İnşaatı</Link></li>
              <li><Link to="/hizmetler" className="hover:text-white">Villa İnşaatı</Link></li>
              <li><Link to="/hizmetler" className="hover:text-white">Tadilat</Link></li>
              <li><Link to="/hizmetler" className="hover:text-white">Onarım</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Kurumsal</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/hakkimizda" className="hover:text-white">Hakkımızda</Link></li>
              <li><Link to="/projeler" className="hover:text-white">Projeler</Link></li>
              <li><Link to="/iletisim" className="hover:text-white">İletişim</Link></li>
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">İletişim</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>0532 123 45 67</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@insaatpro.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1" />
                <span>Merkez Mah. İnşaat Cad. No:123<br />Şişli / İstanbul</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 İnşaat Pro. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
