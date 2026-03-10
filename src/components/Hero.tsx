import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('about');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero relative min-h-[85vh] flex flex-col overflow-hidden">
      {/* Main content — centered in the flex column */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto w-full pt-8 md:pt-10">
        <div>
          <h1 className="text-[48px] md:text-[52px] font-bold text-gray-800 leading-tight mb-8">
            Madhavi K
          </h1>
          <h2 className="subtitle text-xl md:text-2xl text-gray-600 font-medium mb-6">
            Aspiring Data Analyst | MCA Student
          </h2>

          <div className="location text-[18px] md:text-[20px] text-gray-500 font-medium mb-6">
            Bengaluru • Open to Data Analyst Roles
          </div>

          <div className="tech-stack flex justify-center flex-wrap gap-x-4 gap-y-2 text-sm md:text-base font-semibold text-primary mb-10">
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

          <p className="description text-lg md:text-xl text-gray-600 leading-relaxed max-w-[650px] mx-auto mb-12">
            I build data-driven applications and analytics dashboards
            using Python, SQL and financial data analysis.
          </p>

          <div className="hero-buttons flex flex-col sm:flex-row gap-6 justify-center items-center mt-10">
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

      {/* Scroll indicator — naturally pinned to bottom */}
      <div
        onClick={scrollToNext}
        className="flex justify-center cursor-pointer pb-8 z-50 group"
      >
        <div className="flex flex-col items-center text-gray-600 group-hover:text-primary transition-colors duration-300">
          <span className="text-xs font-semibold tracking-widest mb-2 uppercase opacity-80">Scroll</span>
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;