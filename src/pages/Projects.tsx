
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, User } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Modern Villa Projesi",
      location: "Beykoz, İstanbul",
      year: "2024",
      category: "Villa İnşaatı",
      area: "350 m²",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Modern mimari tasarım ile hayata geçirilen 4+1 villa projesi"
    },
    {
      id: 2,
      title: "Rezidans Kompleksi",
      location: "Kadıköy, İstanbul",
      year: "2023",
      category: "Bina İnşaatı",
      area: "2.500 m²",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "24 daireli lüks rezidans kompleksi projesi"
    },
    {
      id: 3,
      title: "Ofis Binası Tadilat",
      location: "Şişli, İstanbul",
      year: "2024",
      category: "Tadilat",
      area: "800 m²",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "5 katlı ofis binasının komple tadilat projesi"
    },
    {
      id: 4,
      title: "Bahçeli Villa",
      location: "Sarıyer, İstanbul",
      year: "2023",
      category: "Villa İnşaatı",
      area: "450 m²",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Geniş bahçeli 5+2 villa projesi peyzaj çalışması ile birlikte"
    },
    {
      id: 5,
      title: "Ticari Merkez",
      location: "Bakırköy, İstanbul",
      year: "2023",
      category: "Bina İnşaatı",
      area: "1.200 m²",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Modern ticari merkez projesi zemin+3 kat"
    },
    {
      id: 6,
      title: "Lüks Daire Tadilat",
      location: "Etiler, İstanbul",
      year: "2024",
      category: "Tadilat",
      area: "200 m²",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "4+1 lüks daire komple tadilat ve iç dekorasyon projesi"
    }
  ];

  const categories = ["Tümü", "Villa İnşaatı", "Bina İnşaatı", "Tadilat"];
  const [activeCategory, setActiveCategory] = React.useState("Tümü");

  const filteredProjects = activeCategory === "Tümü" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Projelerimiz</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Başarıyla tamamladığımız projelerle kaliteli işçiliğimizi ve deneyimimizi keşfedin
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 left-4">{project.category}</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{project.year}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{project.area}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Hayalinizdeki Proje İçin Bizimle İletişime Geçin
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Deneyimli ekibimizle birlikte projenizi hayata geçirelim
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Projenizi Planlayalım
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
