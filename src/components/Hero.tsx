import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('about');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Main Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
            Transforming Data into{' '}
            <span className="text-transparent bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text">
              Insights
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about uncovering patterns in data and building intelligent solutions.
            Currently pursuing MCA with expertise in Python, Machine Learning, and Business Intelligence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Resume Download – RAW GitHub (FIXED) */}
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary/10 transition-all duration-300 px-8 py-3 text-lg"
            >
              <a
                href="https://raw.githubusercontent.com/madhavikalmadi/portfolio/main/public/MadhaviK_Resume.pdf"
                download="MadhaviK_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
      >
        <div className="flex flex-col items-center text-gray-700 hover:text-gray-900 transition-colors duration-300">
          <span className="text-sm mb-2">Scroll to explore</span>
          <ChevronDown className="h-6 w-6" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
