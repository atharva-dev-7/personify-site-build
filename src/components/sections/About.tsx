
import SectionHeading from "../ui/section-heading";
import { Card } from "@/components/ui/card";
import { Code, Database, Layout, Monitor } from "lucide-react";

const About = () => {
  const skills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Next.js",
    "TailwindCSS",
    "GraphQL",
    "AWS",
    "Docker",
  ];

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container">
        <SectionHeading
          title="About Me"
          subtitle="Here's a brief introduction about myself and my technical expertise."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <p>
              Hello! I'm John, a passionate full-stack developer with over 5 years of
              experience building web applications. I enjoy creating things that live on
              the internet, whether that be websites, applications, or anything in between.
            </p>
            <p>
              My goal is to always build products that provide pixel-perfect, 
              performance-focused experiences. I'm constantly learning and exploring 
              new technologies to stay at the cutting edge of web development.
            </p>
            <p>
              Currently, I'm focused on building accessible, responsive products at 
              <a href="#" className="text-primary font-medium mx-1">
                TechCorp
              </a>
              where I work on a team of talented engineers to solve complex problems.
            </p>

            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Skills & Technologies</h3>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {skills.map((skill, index) => (
                  <li key={index} className="flex items-center gap-2 text-muted-foreground">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 hover:border-primary/50 transition-colors">
                <Monitor className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold mb-1">Frontend</h3>
                <p className="text-sm text-muted-foreground">
                  Creating responsive and performant user interfaces.
                </p>
              </Card>
              
              <Card className="p-6 hover:border-primary/50 transition-colors">
                <Database className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold mb-1">Backend</h3>
                <p className="text-sm text-muted-foreground">
                  Building scalable APIs and databases.
                </p>
              </Card>
              
              <Card className="p-6 hover:border-primary/50 transition-colors">
                <Code className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold mb-1">Development</h3>
                <p className="text-sm text-muted-foreground">
                  Clean code and best practices.
                </p>
              </Card>
              
              <Card className="p-6 hover:border-primary/50 transition-colors">
                <Layout className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold mb-1">Design</h3>
                <p className="text-sm text-muted-foreground">
                  User-centered interfaces with attention to detail.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
