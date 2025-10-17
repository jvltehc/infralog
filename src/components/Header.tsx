import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from './../assets/images/logo.png'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg">
              <img 
              src={logo} 
              alt="Logo da empresa" 
              className="h-12 w-auto"
            />
            </div>
            <div>
              <h1
                className={`text-2xl font-bold transition-colors ${
                  isScrolled ? 'text-red-600' : 'text-white'
                }`}
              >
                {/* Ajustar depois */}
              </h1>
              <p
                className={`text-xs transition-colors ${
                  isScrolled ? 'text-gray-600' : 'text-red-100'
                }`}
              >
                {/* Ajustar depois */}
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {['Início', 'Sobre', 'Serviços', 'Unidades', 'Área do Cliente', 'Contato'].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, '-'))}
                  className={`font-bold transition-colors hover:text-red-600 ${
                    isScrolled ? 'text-gray-700' : 'text-gray-700'
                  }`}
                >
                  {item}
                </button>
              )
            )}
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? 'text-gray-700' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-gray-700' : 'text-white'} />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3">
            {['Início', 'Sobre', 'Serviços', 'Unidades', 'Área do Cliente', 'Contato'].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, '-'))}
                  className={`block w-full text-left font-medium transition-colors hover:text-red-600 ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {item}
                </button>
              )
            )}
          </nav>
        )}
      </div>
    </header>
  );
}
