
import SectionHeading from "../ui/section-heading";
import ProjectCard from "../ui/project-card";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with product catalog, shopping cart, and payment processing capabilities built with React and Node.js.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&h=600&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Redux", "Stripe"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true,
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates and team collaboration features using WebSockets.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&h=500&q=80",
      technologies: ["TypeScript", "React", "Express", "PostgreSQL", "Socket.io"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      title: "Finance Dashboard",
      description: "Interactive financial dashboard with data visualization and reporting tools for tracking expenses and investments.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&h=500&q=80",
      technologies: ["Next.js", "TypeScript", "Chart.js", "Supabase", "TailwindCSS"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      title: "Real Estate Listing Platform",
      description: "Property listing website with search functionality, map integration, and user authentication.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&h=500&q=80",
      technologies: ["React", "Firebase", "Google Maps API", "Styled Components"],
      githubUrl: "https://github.com",
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-secondary/30">
      <div className="container">
        <SectionHeading
          title="Projects"
          subtitle="Check out some of the projects I've worked on recently."
          className="text-center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            View more projects on my{" "}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline-offset-4 hover:underline"
            >
              GitHub profile
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
