import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('about');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3 leading-tight">
            Madhavi K
          </h1>
          <h2 className="text-lg md:text-xl text-gray-600 font-medium mb-3">
            Aspiring Data Analyst | MCA Student
          </h2>

          <div className="flex justify-center gap-3 text-sm md:text-base font-semibold text-primary mb-6">
            <span>Python</span>
            <span>•</span>
            <span>SQL</span>
            <span>•</span>
            <span>Pandas</span>
            <span>•</span>
            <span>Machine Learning</span>
          </div>

          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            I build data-driven applications and analytics dashboards
            using Python, SQL and financial data analysis.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              variant="default"
              size="lg"
              className="px-8 py-3 text-lg font-medium shadow-md hover:shadow-lg transition-all"
            >
              <a href="#projects">
                View Projects
              </a>
            </Button>

            <Button
              asChild
              variant="default"
              size="lg"
              className="px-8 py-3 text-lg font-medium shadow-md hover:shadow-lg transition-all"
            >
              <a href="MadhaviK_Resume.pdf" download>
                Download Resume
              </a>
            </Button>

            <Button
              asChild
              variant="default"
              size="lg"
              className="px-8 py-3 text-lg font-medium shadow-md hover:shadow-lg transition-all"
            >
              <a href="#contact">
                Contact
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div
        onClick={scrollToNext}
        className="scroll-indicator absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer z-20 group"
      >
        <div className="flex flex-col items-center text-gray-400 group-hover:text-white transition-colors duration-300">
          <span className="text-sm font-medium tracking-wide mb-3 uppercase">Scroll to see projects</span>
          <ChevronDown className="h-8 w-8 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;