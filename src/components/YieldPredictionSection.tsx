import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, TrendingUp, Calendar, Droplets, Bug, Thermometer, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import yieldImage from '@/assets/yield-prediction.jpg';

interface YieldData {
  crop_name: string;
  year: string;
  rainfall: string;
  pesticide: string;
  temperature: string;
  area: string;
}

const YieldPredictionSection = () => {
  const [formData, setFormData] = useState<YieldData>({
    crop_name: '',
    year: '',
    rainfall: '',
    pesticide: '',
    temperature: '',
    area: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<string>('');
  const { toast } = useToast();

  const inputFields = [
    { key: 'crop_name', label: 'Crop Name', icon: TrendingUp, type: 'text', unit: '', color: 'text-green-500' },
    { key: 'year', label: 'Year', icon: Calendar, type: 'number', unit: '', color: 'text-blue-500' },
    { key: 'rainfall', label: 'Rainfall', icon: Droplets, type: 'number', unit: 'mm', color: 'text-cyan-500' },
    { key: 'pesticide', label: 'Pesticide Usage', icon: Bug, type: 'number', unit: 'kg/ha', color: 'text-orange-500' },
    { key: 'temperature', label: 'Temperature', icon: Thermometer, type: 'number', unit: '°C', color: 'text-red-500' },
    { key: 'area', label: 'Area', icon: MapPin, type: 'number', unit: 'hectares', color: 'text-purple-500' },
  ];

  const handleInputChange = (key: keyof YieldData, value: string) => {
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
      await new Promise(resolve => setTimeout(resolve, 2500));
      
      // Mock yield prediction
      const baseYield = Math.random() * 5000 + 2000; // 2000-7000 kg/ha
      const predictedYield = `${baseYield.toFixed(0)} kg/hectare`;
      
      setResult(predictedYield);
      toast({
        title: "Yield Prediction Ready! 📈",
        description: `Expected yield: ${predictedYield}`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to predict yield. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section 
      id="predict" 
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 section-bg relative overflow-hidden"
      style={{ backgroundImage: `url(${yieldImage})` }}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-slide-right">
          <div className="inline-flex items-center justify-center p-3 bg-accent/20 rounded-full mb-6 floating-animation">
            <TrendingUp className="text-accent" size={32} />
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            📈 Intelligent Yield Prediction
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Forecast your crop yields using advanced AI models based on environmental factors and farming practices.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Input Form */}
          <Card className="glass-card border-0 card-float">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-primary flex items-center justify-center gap-3">
                <TrendingUp className="text-accent" />
                Crop & Environment Data
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
                      type={field.type}
                      value={formData[field.key as keyof YieldData]}
                      onChange={(e) => handleInputChange(field.key as keyof YieldData, e.target.value)}
                      placeholder={`Enter ${field.label.toLowerCase()}`}
                      className="farm-input"
                    />
                    {field.unit && (
                      <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground text-sm">
                        {field.unit}
                      </span>
                    )}
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
                    Calculating Yield...
                  </>
                ) : (
                  <>
                    <TrendingUp className="mr-2 h-5 w-5" />
                    Predict Yield
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Results & Analytics */}
          <div className="space-y-6">
            {/* Result Card */}
            {result && (
              <Card className="glass-card border-0 pulse-glow animate-grow-in">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl mb-4 floating-animation">📊</div>
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    Predicted Yield
                  </h3>
                  <p className="text-4xl font-bold text-harvest-gradient mb-4">
                    {result}
                  </p>
                  <div className="flex items-center justify-center gap-2 text-green-600">
                    <TrendingUp size={20} />
                    <span className="text-sm">95% Accuracy Rate</span>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Prediction Factors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  emoji: '🌧️',
                  title: 'Weather Impact',
                  description: 'Rainfall patterns affect growth cycles',
                  value: '+15%'
                },
                {
                  emoji: '🌡️',
                  title: 'Temperature',
                  description: 'Optimal temperature boosts yield',
                  value: '+8%'
                },
                {
                  emoji: '🧪',
                  title: 'Pesticide Use',
                  description: 'Proper pest control increases output',
                  value: '+12%'
                },
                {
                  emoji: '📏',
                  title: 'Area Efficiency',
                  description: 'Land utilization optimization',
                  value: '+5%'
                }
              ].map((factor, index) => (
                <Card 
                  key={factor.title}
                  className="glass-card border-0 card-float animate-bounce-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-2xl">{factor.emoji}</div>
                      <span className="text-green-600 font-bold text-sm">{factor.value}</span>
                    </div>
                    <h4 className="font-semibold text-primary mb-1">{factor.title}</h4>
                    <p className="text-sm text-muted-foreground">{factor.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Tips Card */}
            <Card className="glass-card border-0 animate-grow-in">
              <CardContent className="p-6">
                <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                  💡 Yield Optimization Tips
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Monitor soil moisture levels regularly</li>
                  <li>• Apply fertilizers at optimal growth stages</li>
                  <li>• Use integrated pest management practices</li>
                  <li>• Consider crop rotation for soil health</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YieldPredictionSection;