
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            Taş Yapı
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Ana Sayfa</Link>
            <Link to="/hizmetler" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Hizmetler</Link>
            <Link to="/projeler" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Projeler</Link>
            <Link to="/hakkimizda" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Hakkımızda</Link>
            <Link to="/iletisim" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">İletişim</Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <span>0462 234 56 78</span>
            </div>
            <Button>Teklif Al</Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-700 hover:text-blue-600 py-2">Ana Sayfa</Link>
              <Link to="/hizmetler" className="text-gray-700 hover:text-blue-600 py-2">Hizmetler</Link>
              <Link to="/projeler" className="text-gray-700 hover:text-blue-600 py-2">Projeler</Link>
              <Link to="/hakkimizda" className="text-gray-700 hover:text-blue-600 py-2">Hakkımızda</Link>
              <Link to="/iletisim" className="text-gray-700 hover:text-blue-600 py-2">İletişim</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
