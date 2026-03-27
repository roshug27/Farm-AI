import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Sprout, Beaker, Thermometer, Droplets, Activity } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import cropImage from '@/assets/crop-recommendation.jpg';

interface CropData {
  N: string;
  P: string;
  K: string;
  temperature: string;
  humidity: string;
  ph: string;
  rainfall: string;
}

const CropRecommendationSection = () => {
  const [formData, setFormData] = useState<CropData>({
    N: '',
    P: '',
    K: '',
    temperature: '',
    humidity: '',
    ph: '',
    rainfall: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<string>('');
  const { toast } = useToast();

  const inputFields = [
    { key: 'N', label: 'Nitrogen (N)', icon: Beaker, unit: 'ppm', color: 'text-blue-500' },
    { key: 'P', label: 'Phosphorus (P)', icon: Beaker, unit: 'ppm', color: 'text-purple-500' },
    { key: 'K', label: 'Potassium (K)', icon: Beaker, unit: 'ppm', color: 'text-orange-500' },
    { key: 'temperature', label: 'Temperature', icon: Thermometer, unit: '°C', color: 'text-red-500' },
    { key: 'humidity', label: 'Humidity', icon: Droplets, unit: '%', color: 'text-cyan-500' },
    { key: 'ph', label: 'pH Value', icon: Activity, unit: 'pH', color: 'text-green-500' },
    { key: 'rainfall', label: 'Rainfall', icon: Droplets, unit: 'mm', color: 'text-blue-600' },
  ];

  const handleInputChange = (key: keyof CropData, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    // Validate inputs
    const emptyFields = Object.entries(formData).filter(([_, value]) => !value.trim());
    if (emptyFields.length > 0) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock recommendation logic
      const crops = ['Rice', 'Wheat', 'Corn', 'Barley', 'Sugarcane', 'Cotton', 'Tomato', 'Potato'];
      const recommendedCrop = crops[Math.floor(Math.random() * crops.length)];
      
      setResult(recommendedCrop);
      toast({
        title: "Recommendation Generated! 🌾",
        description: `Based on your soil conditions, we recommend ${recommendedCrop}.`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate recommendation. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section 
      id="recommend" 
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 section-bg relative overflow-hidden"
      style={{ backgroundImage: `url(${cropImage})` }}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-slide-right">
          <div className="inline-flex items-center justify-center p-3 bg-accent/20 rounded-full mb-6 floating-animation">
            <Sprout className="text-accent" size={32} />
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            🌾 Smart Crop Recommendation
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Get AI-powered crop suggestions based on your soil conditions and environmental factors.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Input Form */}
          <Card className="glass-card border-0 card-float">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-primary flex items-center justify-center gap-3">
                <Beaker className="text-accent" />
                Soil & Environment Data
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {inputFields.map((field, index) => (
                <div 
                  key={field.key}
                  className="space-y-2 animate-fade-slide-right"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <field.icon className={field.color} size={16} />
                    {field.label}
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={formData[field.key as keyof CropData]}
                      onChange={(e) => handleInputChange(field.key as keyof CropData, e.target.value)}
                      placeholder={`Enter ${field.label.toLowerCase()}`}
                      className="farm-input"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground text-sm">
                      {field.unit}
                    </span>
                  </div>
                </div>
              ))}

              <Button
                onClick={handleSubmit}
                disabled={isLoading}
                className="w-full farm-button mt-8"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Analyzing Soil...
                  </>
                ) : (
                  <>
                    <Sprout className="mr-2 h-5 w-5" />
                    Get Crop Recommendation
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Results & Info */}
          <div className="space-y-6">
            {/* Result Card */}
            {result && (
              <Card className="glass-card border-0 pulse-glow animate-grow-in">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl mb-4 floating-animation">🌾</div>
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    Recommended Crop
                  </h3>
                  <p className="text-4xl font-bold text-harvest-gradient mb-4">
                    {result}
                  </p>
                  <p className="text-muted-foreground">
                    This crop is optimal for your current soil and environmental conditions.
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  emoji: '🧪',
                  title: 'Soil Analysis',
                  description: 'NPK levels determine nutrient availability'
                },
                {
                  emoji: '🌡️',
                  title: 'Climate Factors',
                  description: 'Temperature and humidity affect growth'
                },
                {
                  emoji: '💧',
                  title: 'Water Management',
                  description: 'Rainfall patterns guide irrigation needs'
                },
                {
                  emoji: '⚖️',
                  title: 'pH Balance',
                  description: 'Optimal pH ensures nutrient uptake'
                }
              ].map((info, index) => (
                <Card 
                  key={info.title}
                  className="glass-card border-0 card-float animate-bounce-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl mb-2">{info.emoji}</div>
                    <h4 className="font-semibold text-primary mb-1">{info.title}</h4>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CropRecommendationSection;