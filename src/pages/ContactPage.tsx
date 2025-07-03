
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-32 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-8">İletişim</h1>
            <div className="w-32 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-xl text-blue-100 leading-relaxed">
              Projeniz için ücretsiz keşif ve teklif almak için bizimle iletişime geçin
            </p>
          </div>
        </div>
      </section>
      
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;
