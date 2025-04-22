
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 pb-16">
      <div className="container">
        <div className="max-w-3xl space-y-6 animate-fade-in">
          <p className="text-primary font-mono">Hi, my name is</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter">
            John Doe
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-muted-foreground">
            I build things for the web.
          </h2>
          <p className="max-w-xl text-lg text-muted-foreground">
            I'm a full-stack developer specializing in building exceptional 
            digital experiences. Currently, I'm focused on building accessible, 
            responsive web applications with modern technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button asChild size="lg" className="group">
              <a href="#projects">
                View my work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">Get in touch</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
