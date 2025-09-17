import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Linkedin, 
  Github, 
  Twitter,
  Send,
  Download
} from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss data, opportunities, or collaborate on exciting projects
          </p>
        </div>

        <div className="max-w-md mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="shadow-card hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">madhavikalmadi@gmail.com</p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">India</p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">+91 9663374433</p>
              </CardContent>
            </Card>

            {/* Social Links */}
            <div className="pt-6">
              <h3 className="text-lg font-semibold mb-4 text-center">Connect With Me</h3>
              <div className="flex gap-4 justify-center">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open('https://www.linkedin.com/in/madhavi-k-0b3664254/', '_blank')}
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open('https://github.com/madhavikalmadi', '_blank')}
                >
                  <Github className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
