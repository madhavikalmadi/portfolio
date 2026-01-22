import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Download } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Removed 'scrolled' state and its corresponding useEffect hook
  // as the navigation background will now be static.

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    // Smooth scroll behavior is kept as it's a UX feature, not a decorative animation on the navigation itself.
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    // Removed 'transition-all duration-300' and the 'scrolled' conditional class.
    // The navigation bar will now have a fixed background color.
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background shadow-lg">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-3xl font-bold text-gradient"> 
            Madhavi K
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                // Removed 'transition-colors duration-300' and 'hover:text-primary'.
                // Hover effect will be immediate or default browser behavior.
                className="text-foreground font-semibold text-lg py-2" 
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            // Removed 'transition-colors duration-300' and 'hover:bg-muted'.
            className="md:hidden p-3 rounded-lg"
          >
            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          // The dropdown itself will appear/disappear instantly (no CSS transition on 'isOpen')
          // If you want to disable any slide-down/fade-in animation for this panel,
          // that would likely be handled by a separate component or global CSS rules
          // that respond to the 'isOpen' state. This current JSX doesn't explicitly
          // have a Tailwind animation class for the dropdown's appearance.
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-lg shadow-lg border-t">
            <div className="flex flex-col space-y-4 p-6">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  // Removed 'transition-colors duration-300' and 'hover:text-primary'.
                  className="text-foreground font-medium text-xl text-left py-2" 
                >
                  {item.label}
                </button>
              ))}
              <Button 
                size="lg"
                // Removed 'transition-opacity duration-300' and 'hover:opacity-90'.
                className="bg-gradient-primary w-fit text-lg" 
              >
                <Download className="h-5 w-5 mr-2" />
                Resume
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;