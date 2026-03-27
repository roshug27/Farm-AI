import { useState, useEffect } from 'react';

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  en: {
    home: 'Home',
    recommend: 'Recommend Crop',
    predict: 'Predict Yield',
    schemes: 'Schemes',
    tutorials: 'Tutorials',
    about: 'About Us',
    contact: 'Contact',
    title: 'FarmFusion 🌱',
    subtitle: 'Empowering farmers with AI-powered crop recommendations, yield predictions, and seamless access to government schemes.',
    btnRec: 'Get Recommendation',
    btnYield: 'Predict Yield',
    heroTitle: 'FarmFusion',
    heroSubtitle: 'Empowering farmers with AI-powered crop recommendations, yield predictions, and seamless access to government schemes for sustainable agriculture.',
    startJourney: 'Start Your Journey',
    learnMore: 'Learn More'
  },
  hi: {
    home: 'होम',
    recommend: 'फसल सुझाव',
    predict: 'उपज पूर्वानुमान',
    schemes: 'योजनाएँ',
    tutorials: 'ट्यूटोरियल',
    about: 'हमारे बारे में',
    contact: 'संपर्क',
    title: 'फार्मफ्यूजन 🌱',
    subtitle: 'किसानों की मदद AI से फसल सुझाव, उपज पूर्वानुमान और सरकारी योजनाओं तक पहुंच से।',
    btnRec: 'सुझाव प्राप्त करें',
    btnYield: 'उपज अनुमान',
    heroTitle: 'फार्मफ्यूजन',
    heroSubtitle: 'किसानों को AI-संचालित फसल सिफारिशों, उपज पूर्वानुमान, और टिकाऊ कृषि के लिए सरकारी योजनाओं तक निर्बाध पहुंच के साथ सशक्त बनाना।',
    startJourney: 'अपनी यात्रा शुरू करें',
    learnMore: 'और जानें'
  },
  ta: {
    home: 'முகப்பு',
    recommend: 'பயிர் பரிந்துரை',
    predict: 'விளைச்சல் கணிப்பு',
    schemes: 'திட்டங்கள்',
    tutorials: 'பயிற்சிகள்',
    about: 'எங்களை பற்றி',
    contact: 'தொடர்பு',
    title: 'ஃபார்ம் ஃப்யூஷன் 🌱',
    subtitle: 'விவசாயிகளை AI மூலம் பயிர் பரிந்துரைகள் மற்றும் அரசு திட்டங்களுடன் உதவுதல்.',
    btnRec: 'பரிந்துரை பெறுக',
    btnYield: 'விளைச்சல் கணிக்க',
    heroTitle: 'ஃபார்ம் ஃப்யூஷன்',
    heroSubtitle: 'நிலையான விவசாயத்திற்கான AI-இயக்கப்படும் பயிர் பரிந்துரைகள், விளைச்சல் கணிப்புகள் மற்றும் அரசாங்க திட்டங்களுக்கான தடையற்ற அணுகலுடன் விவசாயிகளை வலுப்படுத்துதல்.',
    startJourney: 'உங்கள் பயணத்தைத் தொடங்குங்கள்',
    learnMore: 'மேலும் அறிக'
  },
  bn: {
    home: 'হোম',
    recommend: 'ফসল সুপারিশ',
    predict: 'উৎপাদন পূর্বাভাস',
    schemes: 'যোজনা',
    tutorials: 'টিউটোরিয়াল',
    about: 'আমাদের সম্পর্কে',
    contact: 'যোগাযোগ',
    title: 'ফার্মফিউশন 🌱',
    subtitle: 'কৃষকদের AI দিয়ে ফসল সুপারিশ, উৎপাদন পূর্বাভাস এবং সরকারি যোজনায় সাহায্য।',
    btnRec: 'সুপারিশ পান',
    btnYield: 'ফসল অনুমান',
    heroTitle: 'ফার্মফিউশন',
    heroSubtitle: 'টেকসই কৃষির জন্য AI-চালিত ফসল সুপারিশ, উৎপাদন পূর্বাভাস এবং সরকারি প্রকল্পগুলিতে নিরবচ্ছিন্ন অ্যাক্সেসের সাথে কৃষকদের ক্ষমতায়ন।',
    startJourney: 'আপনার যাত্রা শুরু করুন',
    learnMore: 'আরও জানুন'
  },
  mr: {
    home: 'मुख्यपृष्ठ',
    recommend: 'पीक शिफारस',
    predict: 'उत्पन्न अंदाज',
    schemes: 'योजना',
    tutorials: 'ट्युटोरियल्स',
    about: 'आमच्याबद्दल',
    contact: 'संपर्क',
    title: 'फार्मफ्यूजन 🌱',
    subtitle: 'शेतकऱ्यांना AI सोबत पीक शिफारशी आणि सरकारी योजनांसह मदत.',
    btnRec: 'शिफारस मिळवा',
    btnYield: 'उत्पन्न अंदाज',
    heroTitle: 'फार्मफ्यूजन',
    heroSubtitle: 'शाश्वत शेतीसाठी AI-चालित पीक शिफारशी, उत्पादन अंदाज आणि सरकारी योजनांमध्ये निर्बाध प्रवेशासह शेतकऱ्यांना सक्षम करणे.',
    startJourney: 'तुमचा प्रवास सुरू करा',
    learnMore: 'अधिक जाणून घ्या'
  }
};

export const useLanguage = () => {
  const [currentLang, setCurrentLang] = useState<string>('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('farmfusion-language');
    if (savedLang && translations[savedLang]) {
      setCurrentLang(savedLang);
    }
  }, []);

  const changeLanguage = (lang: string) => {
    if (translations[lang]) {
      setCurrentLang(lang);
      localStorage.setItem('farmfusion-language', lang);
    }
  };

  const t = (key: string): string => {
    return translations[currentLang]?.[key] || translations.en[key] || key;
  };

  return {
    currentLang,
    changeLanguage,
    t,
    availableLanguages: Object.keys(translations)
  };
};

export default useLanguage;