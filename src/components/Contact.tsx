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
    <section id="contact" className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 border-b-4 border-primary inline-block pb-2 mb-4">
            Open to Opportunities
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-4 mt-6">
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
              className="bg-white shadow-md border hover:border-primary/50 transition-all rounded-xl flex flex-col items-center justify-center text-center group cursor-pointer p-8"
            >
              <div className="p-4 bg-primary/10 rounded-full mb-4 group-hover:scale-110 transition-transform">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">📧 Email</h3>
              <p className="text-gray-600">madhavikalamadi@gmail.com</p>
            </a>

            <a
              href="https://www.linkedin.com/in/madhavi-k-0b3664254/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white shadow-md border hover:border-blue-500/50 transition-all rounded-xl flex flex-col items-center justify-center text-center group cursor-pointer p-8"
            >
              <div className="p-4 bg-blue-500/10 rounded-full mb-4 group-hover:scale-110 transition-transform">
                <Linkedin className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">💼 LinkedIn</h3>
              <p className="text-gray-600">linkedin.com/in/madhavi-k-0b3664254/</p>
            </a>

            <a
              href="https://github.com/madhavikalmadi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white shadow-md border hover:border-gray-500/50 transition-all rounded-xl flex flex-col items-center justify-center text-center group cursor-pointer p-8"
            >
              <div className="p-4 bg-gray-100 rounded-full mb-4 group-hover:scale-110 transition-transform">
                <Github className="h-8 w-8 text-gray-800" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">💻 GitHub</h3>
              <p className="text-gray-600">github.com/madhavikalmadi</p>
            </a>

            <a
              href="MadhaviK_Resume.pdf"
              download
              className="bg-white shadow-md border hover:border-green-500/50 transition-all rounded-xl flex flex-col items-center justify-center text-center group cursor-pointer p-8"
            >
              <div className="p-4 bg-green-500/10 rounded-full mb-4 group-hover:scale-110 transition-transform">
                <Download className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">📄 Resume</h3>
              <p className="text-gray-600">Download Resume</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
