import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Play, BookOpen, Video, Users, Award } from 'lucide-react';
import tutorialsImage from '@/assets/tutorials.jpg';

const TutorialsSection = () => {
  const tutorials = [
    {
      title: 'Modern Farming Techniques',
      emoji: '🚜',
      description: 'Learn precision farming, smart irrigation systems, and sustainable agricultural practices.',
      type: 'Video Course',
      duration: '2.5 hours',
      level: 'Intermediate',
      link: 'https://www.youtube.com/watch?v=R_JF6dY-EuE',
      icon: Video,
      color: 'text-red-600'
    },
    {
      title: 'Crop Cultivation Basics',
      emoji: '📹',
      description: 'Comprehensive step-by-step video guide for beginners in agriculture.',
      type: 'Video Series',
      duration: '3 hours',
      level: 'Beginner',
      link: 'https://www.youtube.com/watch?v=zFvu_VJ0sPo',
      icon: Play,
      color: 'text-blue-600'
    },
    {
      title: 'ICAR Research Resources',
      emoji: '🌱',
      description: 'Access advanced agricultural research, publications, and expert guidance.',
      type: 'Research Portal',
      duration: 'Self-paced',
      level: 'Advanced',
      link: 'https://icar.org.in/',
      icon: BookOpen,
      color: 'text-green-600'
    },
    {
      title: 'Ministry Guidelines',
      emoji: '📑',
      description: 'Official policies, latest agricultural guidelines, and government initiatives.',
      type: 'Documentation',
      duration: 'Reference',
      level: 'All Levels',
      link: 'https://agricoop.gov.in/',
      icon: Award,
      color: 'text-purple-600'
    }
  ];

  const learningPaths = [
    {
      emoji: '🌱',
      title: 'Beginner Farmer',
      description: 'Start your agricultural journey',
      modules: ['Basic Farming', 'Soil Basics', 'Crop Selection']
    },
    {
      emoji: '🚀',
      title: 'Advanced Techniques',
      description: 'Modern farming methodologies',
      modules: ['Precision Farming', 'IoT in Agriculture', 'Data Analytics']
    },
    {
      emoji: '💼',
      title: 'Agri-Business',
      description: 'Commercial farming strategies',
      modules: ['Market Analysis', 'Supply Chain', 'Financial Planning']
    }
  ];

  return (
    <section 
      id="tutorials" 
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 section-bg relative overflow-hidden"
      style={{ backgroundImage: `url(${tutorialsImage})` }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-slide-right">
          <div className="inline-flex items-center justify-center p-3 bg-accent/20 rounded-full mb-6 floating-animation">
            <BookOpen className="text-accent" size={32} />
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            📚 Comprehensive Learning Hub
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Master modern farming techniques through expert-curated tutorials, research papers, and interactive learning modules.
          </p>
        </div>

        {/* Featured Tutorials */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {tutorials.map((tutorial, index) => (
            <Card 
              key={tutorial.title}
              className="glass-card border-0 card-float group animate-grow-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl floating-animation" style={{ animationDelay: `${index * 0.3}s` }}>
                      {tutorial.emoji}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                        {tutorial.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <tutorial.icon className={tutorial.color} size={16} />
                        <span className="text-sm text-muted-foreground">{tutorial.type}</span>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                    className="border-accent/30 hover:border-accent hover:bg-accent/10 transition-all duration-300"
                  >
                    <a href={tutorial.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                    </a>
                  </Button>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {tutorial.description}
                </p>

                <div className="flex items-center gap-4 mb-6 text-sm">
                  <div className="flex items-center gap-1">
                    <span className="text-accent">⏱️</span>
                    <span className="text-muted-foreground">{tutorial.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-accent">📊</span>
                    <span className="text-muted-foreground">{tutorial.level}</span>
                  </div>
                </div>

                <Button 
                  asChild
                  className="w-full farm-button group/btn"
                >
                  <a href={tutorial.link} target="_blank" rel="noopener noreferrer">
                    <Play className="mr-2 group-hover/btn:scale-110 transition-transform duration-300" size={16} />
                    Start Learning
                    <ExternalLink className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" size={16} />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learning Paths */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-8 animate-fade-slide-right">
            🎯 Structured Learning Paths
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {learningPaths.map((path, index) => (
              <Card 
                key={path.title}
                className="glass-card border-0 card-float animate-bounce-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4 floating-animation" style={{ animationDelay: `${index * 0.3}s` }}>
                    {path.emoji}
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-2">{path.title}</h4>
                  <p className="text-muted-foreground mb-4">{path.description}</p>
                  <div className="space-y-2">
                    {path.modules.map((module, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 rounded-full bg-accent"></div>
                        <span className="text-muted-foreground">{module}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { emoji: '📚', number: '500+', label: 'Tutorials' },
            { emoji: '👨‍🎓', number: '50K+', label: 'Learners' },
            { emoji: '🏆', number: '25+', label: 'Experts' },
            { emoji: '🌟', number: '4.8', label: 'Rating' },
          ].map((stat, index) => (
            <Card 
              key={stat.label}
              className="glass-card border-0 text-center animate-grow-in"
              style={{ animationDelay: `${1.5 + index * 0.1}s` }}
            >
              <CardContent className="p-4">
                <div className="text-3xl mb-2 floating-animation" style={{ animationDelay: `${index * 0.4}s` }}>
                  {stat.emoji}
                </div>
                <div className="text-2xl font-bold text-harvest-gradient">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TutorialsSection;