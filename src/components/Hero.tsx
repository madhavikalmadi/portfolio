import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const Hero = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const textToCopy = `Madhavi K
Open to Work

Data Analyst | Python | SQL | Power BI

Transforming raw data into actionable insights through data analysis, visualization, and business intelligence. Passionate about solving real-world business problems.

Skills:
- Python (Pandas)
- SQL (NumPy)
- Power BI (MySQL)
- Excel (Git)`;

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="hero relative min-h-[85vh] flex flex-col justify-center items-center py-20 px-4 md:px-6">
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none select-none" />

      {/* Terminal Card */}
      <div className="relative w-full max-w-2xl bg-zinc-950/90 border border-zinc-800/80 rounded-xl p-6 sm:p-8 md:p-10 shadow-2xl text-zinc-100 font-mono select-none">
        
        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-300 transition-colors p-1.5 rounded hover:bg-zinc-900/60"
          title="Copy text representation"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-400" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </button>

        {/* Top Dashed Line */}
        <div className="text-zinc-700/80 text-xs tracking-tight overflow-hidden whitespace-nowrap mb-6 select-none">
          ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        </div>

        {/* Header (Name & Status) */}
        <div className="flex justify-between items-center mb-6 flex-wrap gap-2">
          <span className="font-bold text-white text-base sm:text-lg">Madhavi K</span>
          <div className="flex items-center gap-2 text-zinc-400 text-xs sm:text-sm">
            <span>Open to Work</span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
          </div>
        </div>

        {/* Role Subtitle */}
        <div className="text-zinc-300 text-sm sm:text-base mb-6 font-medium">
          Data Analyst | Python | SQL | Power BI
        </div>

        {/* Description */}
        <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-8 max-w-[620px]">
          Transforming raw data into actionable insights through<br className="hidden sm:inline" />
          data analysis, visualization, and business intelligence.<br className="hidden sm:inline" />
          Passionate about solving real-world business problems.
        </p>

        {/* Terminal Links */}
        <div className="flex flex-wrap gap-4 text-xs sm:text-sm mb-8 text-zinc-500">
          <span>
            [&nbsp;
            <a href="#projects" className="text-zinc-300 hover:text-primary transition-colors">
              View Projects
            </a>
            &nbsp;]
          </span>
          <span>
            [&nbsp;
            <a href="MadhaviK_Resume.pdf" download className="text-zinc-300 hover:text-primary transition-colors">
              Resume
            </a>
            &nbsp;]
          </span>
          <span>
            [&nbsp;
            <a href="#contact" className="text-zinc-300 hover:text-primary transition-colors">
              Contact
            </a>
            &nbsp;]
          </span>
        </div>

        {/* Solid Line Divider */}
        <div className="border-t border-zinc-800/80 my-6"></div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-4 gap-x-4 text-xs sm:text-sm">
          <div>
            <span className="text-zinc-100 block font-medium">Python</span>
            <span className="text-zinc-500 text-[11px] sm:text-xs">Pandas</span>
          </div>
          <div>
            <span className="text-zinc-100 block font-medium">SQL</span>
            <span className="text-zinc-500 text-[11px] sm:text-xs">NumPy</span>
          </div>
          <div>
            <span className="text-zinc-100 block font-medium">Power BI</span>
            <span className="text-zinc-500 text-[11px] sm:text-xs">MySQL</span>
          </div>
          <div>
            <span className="text-zinc-100 block font-medium">Excel</span>
            <span className="text-zinc-500 text-[11px] sm:text-xs">Git</span>
          </div>
        </div>

        {/* Bottom Dashed Line */}
        <div className="text-zinc-700/80 text-xs tracking-tight overflow-hidden whitespace-nowrap mt-8 select-none">
          ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        </div>

      </div>
    </section>
  );
};

export default Hero;