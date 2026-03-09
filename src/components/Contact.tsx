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
            Open to Opportunities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            I am currently seeking opportunities in Data Analytics
            and Software Development where I can apply my skills
            in Python, SQL, and data analysis to solve real-world problems.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information & Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="mailto:madhavikalamadi@gmail.com"
              className="custom-card flex flex-col items-center justify-center text-center group cursor-pointer"
            >
              <div className="p-4 bg-primary/10 rounded-full mb-4 group-hover:scale-110 transition-transform">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">📧 Email</h3>
              <p className="text-muted-foreground">madhavikalamadi@gmail.com</p>
            </a>

            <a
              href="https://www.linkedin.com/in/madhavi-k-0b3664254/"
              target="_blank"
              rel="noopener noreferrer"
              className="custom-card flex flex-col items-center justify-center text-center group cursor-pointer"
            >
              <div className="p-4 bg-blue-500/10 rounded-full mb-4 group-hover:scale-110 transition-transform">
                <Linkedin className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">💼 LinkedIn</h3>
              <p className="text-muted-foreground">linkedin.com/in/madhavi-k-0b3664254/</p>
            </a>

            <a
              href="https://github.com/madhavikalmadi"
              target="_blank"
              rel="noopener noreferrer"
              className="custom-card flex flex-col items-center justify-center text-center group cursor-pointer"
            >
              <div className="p-4 bg-foreground/10 rounded-full mb-4 group-hover:scale-110 transition-transform">
                <Github className="h-8 w-8 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">💻 GitHub</h3>
              <p className="text-muted-foreground">github.com/madhavikalmadi</p>
            </a>

            <a
              href="MadhaviK_Resume.pdf"
              download
              className="custom-card flex flex-col items-center justify-center text-center group cursor-pointer"
            >
              <div className="p-4 bg-green-500/10 rounded-full mb-4 group-hover:scale-110 transition-transform">
                <Download className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">📄 Resume</h3>
              <p className="text-muted-foreground">Download Resume</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
