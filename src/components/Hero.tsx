import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section 
      className="hero relative min-h-[90vh] flex flex-col justify-center items-center py-20 px-4 md:px-6 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #f8fbff 0%, #ffffff 100%)' }}
    >
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto w-full pt-10">
        
        {/* Open to Work Badge */}
        <div 
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide uppercase select-none border border-[#d2f9e3]"
          style={{
            background: '#e8fff1',
            color: '#0f9d58',
            borderRadius: '50px'
          }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0f9d58] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0f9d58]"></span>
          </span>
          Open to Work
        </div>

        {/* Name */}
        <h1 
          className="text-[44px] sm:text-[72px] font-[800] text-gray-900 tracking-[-2px] leading-[1.05] mb-6"
        >
          Madhavi K
        </h1>

        {/* Role & Tech tags */}
        <div className="mb-6 flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 tracking-tight mb-2">
            Data Analyst
          </h2>
          <p className="text-base sm:text-lg text-gray-500 font-medium tracking-wide">
            Python &bull; SQL &bull; Power BI &bull; Excel
          </p>
        </div>

        {/* Bio Description */}
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-[650px] mb-10">
          Passionate about transforming raw data into meaningful insights using Python, SQL, Power BI, and Excel.
        </p>

        {/* Technology Pills */}
        <div className="flex flex-wrap justify-center gap-3 max-w-2xl mb-12">
          {['Python', 'SQL', 'Power BI', 'Excel', 'Pandas', 'NumPy', 'MySQL', 'Git'].map((tech) => (
            <span 
              key={tech} 
              className="bg-white border border-zinc-200 text-zinc-700 px-4 py-1.5 rounded-full text-sm font-medium shadow-sm hover:border-zinc-300 hover:shadow-md hover:scale-[1.03] transition-all duration-300 cursor-default select-none"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Hero Buttons / Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            variant="default"
            size="lg"
            className="rounded-full px-8 py-6 text-base font-semibold shadow-md hover:shadow-lg transition-all"
          >
            <a href="#projects" className="flex items-center gap-2">
              View Projects
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full px-8 py-6 text-base font-semibold bg-white border-zinc-200 hover:bg-zinc-50 text-zinc-700 shadow-sm hover:shadow transition-all"
          >
            <a href="MadhaviK_Resume.pdf" download className="flex items-center gap-2">
              <Download className="h-5 w-5" />
              Download Resume
            </a>
          </Button>

          <Button
            asChild
            variant="ghost"
            size="lg"
            className="rounded-full px-6 py-6 text-base font-semibold text-zinc-600 hover:text-zinc-900 transition-all"
          >
            <a href="#contact" className="flex items-center gap-2">
              Contact Me
            </a>
          </Button>
        </div>

      </div>
    </section>
  );
};

export default Hero;