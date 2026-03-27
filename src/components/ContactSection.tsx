import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Instagram, Linkedin, MapPin, Clock, Users, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  const contacts = [
    {
      type: 'Email',
      icon: Mail,
      items: [
        { label: 'Aastha Bhagat', value: 'aasthaa.99@gmail.com', link: 'mailto:aasthaa.99@gmail.com' },
        { label: 'Roshan Gupta', value: 'roshangupta8179@gmail.com', link: 'mailto:roshangupta8179@gmail.com' }
      ],
      color: 'text-blue-600'
    },
    {
      type: 'Phone',
      icon: Phone,
      items: [
        { label: 'Aastha Bhagat', value: '+91-9152473255', link: 'tel:+919152473255' },
        { label: 'Roshan Gupta', value: '+91-8591331841', link: 'tel:+918591331841' }
      ],
      color: 'text-green-600'
    },
    {
      type: 'Social Media',
      icon: Users,
      items: [
        { label: 'Instagram', value: '@aasthaa.bhagat', link: 'https://instagram.com/aasthaa.bhagat', icon: Instagram },
        { label: 'Instagram', value: '@roshu_gupta27', link: 'https://instagram.com/roshu_gupta27', icon: Instagram },
        { label: 'LinkedIn', value: 'Aastha Bhagat', link: 'https://linkedin.com/in/aastha-bhagat', icon: Linkedin },
        { label: 'LinkedIn', value: 'Aditya Gupta', link: 'https://linkedin.com/in/aditya-gupta', icon: Linkedin }
      ],
      color: 'text-purple-600'
    }
  ];

  const supportInfo = [
    {
      emoji: '⏰',
      title: 'Support Hours',
      description: 'Monday - Friday: 9:00 AM - 6:00 PM IST',
      icon: Clock,
      color: 'text-orange-600'
    },
    {
      emoji: '📍',
      title: 'Location',
      description: 'Serving farmers across India',
      icon: MapPin,
      color: 'text-red-600'
    },
    {
      emoji: '💬',
      title: 'Response Time',
      description: 'Average response within 2 hours',
      icon: MessageCircle,
      color: 'text-blue-600'
    }
  ];

  return (
    <section 
      id="contact" 
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 floating-animation">
          <div className="text-9xl">📞</div>
        </div>
        <div className="absolute bottom-20 left-10 floating-animation" style={{ animationDelay: '1s' }}>
          <div className="text-7xl">💬</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-slide-right">
          <div className="inline-flex items-center justify-center p-3 bg-accent/20 rounded-full mb-6 floating-animation">
            <MessageCircle className="text-accent" size={32} />
          </div>
          <h2 className="text-5xl font-bold text-foreground mb-6">
            📞 Get in <span className="text-harvest-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have questions or need support? We're here to help you make the most of FarmFusion. 
            Reach out to our team for personalized assistance.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {contacts.map((contactType, index) => (
            <Card 
              key={contactType.type}
              className="border-0 shadow-lg card-float animate-grow-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <contactType.icon className={`${contactType.color}`} size={28} />
                  <h3 className="text-2xl font-bold text-primary">{contactType.type}</h3>
                </div>
                
                <div className="space-y-4">
                  {contactType.items.map((item, idx) => (
                    <div key={idx} className="group">
                      <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-all duration-300">
                        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                          {item.icon ? (
                            <item.icon className="text-accent" size={16} />
                          ) : (
                            <contactType.icon className={contactType.color} size={16} />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-muted-foreground">{item.label}</div>
                          <a 
                            href={item.link}
                            className="text-primary hover:text-accent transition-colors duration-300 font-medium group-hover:underline"
                            target={item.link.startsWith('http') ? '_blank' : undefined}
                            rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {item.value}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Support Information */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {supportInfo.map((info, index) => (
            <Card 
              key={info.title}
              className="border-0 shadow-lg text-center card-float animate-bounce-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-6">
                <div className="text-4xl mb-4 floating-animation" style={{ animationDelay: `${index * 0.3}s` }}>
                  {info.emoji}
                </div>
                <info.icon className={`${info.color} mx-auto mb-3`} size={24} />
                <h4 className="text-lg font-bold text-primary mb-2">{info.title}</h4>
                <p className="text-muted-foreground text-sm">{info.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Form & FAQ */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Quick Contact Form */}
          <Card className="border-0 shadow-xl animate-grow-in" style={{ animationDelay: '0.5s' }}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <MessageCircle className="text-accent" />
                Quick Message
              </h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="farm-input"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="farm-input"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="farm-input resize-none"
                />
                <Button className="w-full farm-button">
                  <Mail className="mr-2" size={16} />
                  Send Message
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* FAQ */}
          <Card className="border-0 shadow-xl animate-grow-in" style={{ animationDelay: '0.7s' }}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <Users className="text-accent" />
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                {[
                  {
                    question: 'How accurate are the crop recommendations?',
                    answer: 'Our AI models achieve 95% accuracy based on extensive testing.'
                  },
                  {
                    question: 'Is FarmFusion free to use?',
                    answer: 'Yes! Basic features are completely free for all farmers.'
                  },
                  {
                    question: 'What languages do you support?',
                    answer: 'We support English, Hindi, Tamil, Bengali, and Marathi.'
                  },
                  {
                    question: 'How do I get technical support?',
                    answer: 'Contact us via phone or email for immediate assistance.'
                  }
                ].map((faq, index) => (
                  <div key={index} className="border-l-4 border-accent/30 pl-4">
                    <h4 className="font-semibold text-primary mb-1">{faq.question}</h4>
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 animate-fade-slide-right">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/5 to-accent/5">
            <CardContent className="p-8">
              <div className="text-4xl mb-4 floating-animation">🌱</div>
              <h3 className="text-2xl font-bold text-primary mb-3">
                Growing Together
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Thank you for being part of the FarmFusion community. Together, we're building 
                a smarter, more sustainable future for agriculture.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;