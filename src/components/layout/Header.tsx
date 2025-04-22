
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Mail, Menu, X } from "lucide-react";
import { scrollToSection } from "@/lib/scroll-utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md py-4 shadow-md"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold font-mono text-primary hover:opacity-80 transition-opacity"
        >
          john.dev
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm text-foreground/80 hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          ))}
          
          <div className="flex items-center gap-3">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button size="icon" variant="ghost">
                <Github className="h-5 w-5" />
              </Button>
            </a>
            <a href="mailto:contact@example.com">
              <Button size="icon" variant="ghost">
                <Mail className="h-5 w-5" />
              </Button>
            </a>
            <Button asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-[65px] bg-background p-6 flex flex-col items-center animate-fade-in z-40">
            <nav className="flex flex-col items-center gap-8 mt-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-lg text-foreground/80 hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              <div className="flex items-center gap-4 mt-6">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Button size="icon" variant="ghost">
                    <Github className="h-5 w-5" />
                  </Button>
                </a>
                <a href="mailto:contact@example.com">
                  <Button size="icon" variant="ghost">
                    <Mail className="h-5 w-5" />
                  </Button>
                </a>
              </div>
              
              <Button className="mt-4" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
