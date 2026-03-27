import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface NavigationProps {
  currentLang: string;
  onLanguageChange: (lang: string) => void;
}

const Navigation = ({ currentLang, onLanguageChange }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', emoji: '🏠' },
    { id: 'recommend', label: 'Crop Rec.', emoji: '🌾' },
    { id: 'predict', label: 'Yield Pred.', emoji: '📈' },
    { id: 'schemes', label: 'Schemes', emoji: '📑' },
    { id: 'tutorials', label: 'Tutorials', emoji: '📚' },
    { id: 'about', label: 'About', emoji: '👥' },
    { id: 'contact', label: 'Contact', emoji: '📞' },
  ];

  const languages = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'hi', label: 'हिंदी', flag: '🇮🇳' },
    { code: 'ta', label: 'தமிழ்', flag: '🇮🇳' },
    { code: 'bn', label: 'বাংলা', flag: '🇧🇩' },
    { code: 'mr', label: 'मराठी', flag: '🇮🇳' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'glass-nav shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 animate-fade-slide-right">
            <div className="text-3xl floating-animation">🌱</div>
            <h1 className="text-xl font-bold text-harvest-gradient">
              FarmFusion
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className="text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 scale-bounce group px-3 py-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="mr-2 group-hover:scale-110 transition-transform duration-300">
                  {item.emoji}
                </span>
                {item.label}
              </Button>
            ))}
          </div>

          {/* Language Selector & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Select value={currentLang} onValueChange={onLanguageChange}>
              <SelectTrigger className="w-auto min-w-[120px] bg-white/10 border-white/20 text-white backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center space-x-2">
                  <Globe size={16} />
                  <SelectValue />
                </div>
              </SelectTrigger>
              <SelectContent className="bg-card/95 backdrop-blur-sm border-border/50">
                {languages.map((lang) => (
                  <SelectItem key={lang.code} value={lang.code}>
                    <div className="flex items-center space-x-2">
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white hover:bg-white/10 transition-all duration-300"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="glass-card rounded-xl p-4 space-y-2">
            {navItems.map((item, index) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className="w-full justify-start text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="mr-3 text-lg">{item.emoji}</span>
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;