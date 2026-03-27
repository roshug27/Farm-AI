import { Card, CardContent } from '@/components/ui/card';
import { Target, Lightbulb, Users, Leaf, Shield, Zap, Globe, Heart } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      emoji: '🎯',
      title: 'Our Mission',
      description: 'Empowering farmers with cutting-edge AI technology to make agriculture smarter, more sustainable, and profitable.',
      color: 'text-blue-600'
    },
    {
      icon: Lightbulb,
      emoji: '💡',
      title: 'Innovation',
      description: 'Bringing revolutionary AI/ML technology directly to the fields, transforming traditional farming practices.',
      color: 'text-yellow-600'
    },
    {
      icon: Users,
      emoji: '🤝',
      title: 'Community',
      description: 'Building a strong network connecting farmers with agricultural experts, researchers, and modern resources.',
      color: 'text-purple-600'
    },
    {
      icon: Leaf,
      emoji: '🌿',
      title: 'Sustainability',
      description: 'Promoting eco-friendly farming practices that protect our environment for future generations.',
      color: 'text-green-600'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Reliable Predictions',
      description: 'AI models trained on vast agricultural datasets',
      percentage: '95%'
    },
    {
      icon: Zap,
      title: 'Fast Processing',
      description: 'Instant recommendations and yield predictions',
      percentage: '< 2s'
    },
    {
      icon: Globe,
      title: 'Wide Coverage',
      description: 'Supporting farmers across multiple regions',
      percentage: '15+'
    },
    {
      icon: Heart,
      title: 'User Satisfaction',
      description: 'Positive feedback from farming community',
      percentage: '98%'
    }
  ];

  const team = [
    {
      emoji: '👩‍💻',
      name: 'AI Research Team',
      role: 'Developing advanced prediction models',
      expertise: 'Machine Learning & Agriculture'
    },
    {
      emoji: '🌾',
      name: 'Agricultural Experts',
      role: 'Providing domain knowledge',
      expertise: 'Crop Science & Soil Management'
    },
    {
      emoji: '🎨',
      name: 'Design Team',
      role: 'Creating intuitive user experiences',
      expertise: 'UX/UI & Product Design'
    }
  ];

  return (
    <section 
      id="about" 
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 floating-animation">
          <div className="text-8xl">🌾</div>
        </div>
        <div className="absolute top-40 right-20 floating-animation" style={{ animationDelay: '1s' }}>
          <div className="text-6xl">🚜</div>
        </div>
        <div className="absolute bottom-40 left-20 floating-animation" style={{ animationDelay: '2s' }}>
          <div className="text-7xl">🌱</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-slide-right">
          <div className="inline-flex items-center justify-center p-3 bg-accent/20 rounded-full mb-6 floating-animation">
            <Users className="text-accent" size={32} />
          </div>
          <h2 className="text-5xl font-bold text-foreground mb-6">
            About <span className="text-harvest-gradient">FarmFusion</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're on a mission to revolutionize agriculture through artificial intelligence, 
            making farming more efficient, sustainable, and profitable for farmers worldwide.
          </p>
        </div>

        {/* Core Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {values.map((value, index) => (
            <Card 
              key={value.title}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 card-float animate-grow-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <value.icon className={`${value.color} mx-auto mb-2 group-hover:scale-110 transition-transform duration-300`} size={40} />
                  <div className="text-4xl floating-animation" style={{ animationDelay: `${index * 0.3}s` }}>
                    {value.emoji}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Features */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12 animate-fade-slide-right">
            🚀 Why Choose FarmFusion?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={feature.title}
                className="border-0 shadow-lg card-float animate-bounce-in group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-6 text-center">
                  <feature.icon className="text-accent mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" size={32} />
                  <div className="text-3xl font-bold text-harvest-gradient mb-2">
                    {feature.percentage}
                  </div>
                  <h4 className="font-bold text-primary mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12 animate-fade-slide-right">
            👥 Our Expert Team
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card 
                key={member.name}
                className="border-0 shadow-lg card-float animate-grow-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="text-5xl mb-4 floating-animation" style={{ animationDelay: `${index * 0.4}s` }}>
                    {member.emoji}
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-2">{member.name}</h4>
                  <p className="text-muted-foreground mb-3">{member.role}</p>
                  <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                    {member.expertise}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-grow-in" style={{ animationDelay: '1s' }}>
          <Card className="border-0 shadow-xl bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
            <CardContent className="p-12">
              <div className="text-5xl mb-6 floating-animation">🌟</div>
              <h3 className="text-3xl font-bold text-primary mb-4">
                Join the Agricultural Revolution
              </h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Be part of the future of farming. Together, we're building a more sustainable 
                and prosperous agricultural ecosystem for everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Shield className="text-green-600" size={20} />
                  <span>Trusted by 10,000+ farmers</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Zap className="text-yellow-600" size={20} />
                  <span>99.9% uptime guarantee</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;