import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('about');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero relative overflow-hidden">
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Madhavi K
          </h1>
          <h2 className="subtitle text-lg md:text-xl text-gray-600 font-medium">
            Aspiring Data Analyst | MCA Student
          </h2>

          <div className="location text-md md:text-lg text-gray-500 font-medium">
            Bengaluru • Open to Data Analyst Roles
          </div>

          <div className="tech-stack flex justify-center gap-3 text-sm md:text-base font-semibold text-primary">
            <span>Python</span>
            <span>•</span>
            <span>SQL</span>
            <span>•</span>
            <span>Pandas</span>
            <span>•</span>
            <span>Machine Learning</span>
            <span>•</span>
            <span>Data Visualization</span>
          </div>

          <p className="description text-lg md:text-xl text-gray-600 leading-relaxed">
            I build data-driven applications and analytics dashboards
            using Python, SQL and financial data analysis.
          </p>

          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center items-center">
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