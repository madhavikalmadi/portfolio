import { Heart, Mail, Linkedin, Github, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              DataAnalyst Portfolio
            </h3>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Passionate MCA student specializing in data analysis, machine learning,
              and business intelligence. Always eager to tackle new challenges and
              transform data into actionable insights.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3 text-muted-foreground">
              <p>📧 madhavikalamadi@gmail.com</p>
              <p>📍 Bengaluru, India</p>
              <p>📱 Available for opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
