import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import CropRecommendationSection from '@/components/CropRecommendationSection';
import YieldPredictionSection from '@/components/YieldPredictionSection';
import SchemesSection from '@/components/SchemesSection';
import TutorialsSection from '@/components/TutorialsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import ScrollAnimations from '@/components/ScrollAnimations';
import { useLanguage } from '@/hooks/useLanguage';

const Index = () => {
  const { currentLang, changeLanguage } = useLanguage();

  useEffect(() => {
    // Add smooth scrolling and optimize performance
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Preload critical resources
    const preloadImages = [
      '/src/assets/hero-farm.jpg',
      '/src/assets/crop-recommendation.jpg',
      '/src/assets/yield-prediction.jpg'
    ];
    
    preloadImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation 
        currentLang={currentLang} 
        onLanguageChange={changeLanguage} 
      />
      
      <main>
        <HeroSection />
        <CropRecommendationSection />
        <YieldPredictionSection />
        <SchemesSection />
        <TutorialsSection />
        <AboutSection />
        <ContactSection />
      </main>
      
      <ScrollAnimations />
    </div>
  );
};

export default Index;
