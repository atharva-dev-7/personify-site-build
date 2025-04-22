
import SectionHeading from "../ui/section-heading";
import ExperienceItem from "../ui/experience-item";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Inc.",
      period: "2021 - Present",
      description: [
        "Led the development of a customer-facing dashboard that increased user engagement by 35%.",
        "Architected and implemented microservices infrastructure reducing deployment time by 40%.",
        "Mentored junior developers and conducted code reviews to maintain code quality.",
        "Collaborated with design team to implement responsive and accessible user interfaces."
      ],
      technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker", "MongoDB"],
    },
    {
      title: "Full Stack Developer",
      company: "WebSolutions Agency",
      period: "2019 - 2021",
      description: [
        "Developed and maintained client websites and web applications across various industries.",
        "Built custom API integrations with third-party services like payment gateways and CRMs.",
        "Implemented responsive designs and ensured cross-browser compatibility.",
        "Participated in daily stand-ups and sprint planning meetings in an Agile environment."
      ],
      technologies: ["JavaScript", "React", "Express", "PostgreSQL", "Redux", "Heroku"],
    },
    {
      title: "Frontend Developer",
      company: "StartApp Ventures",
      period: "2017 - 2019",
      description: [
        "Collaborated with UI/UX designers to implement pixel-perfect interfaces.",
        "Optimized application performance by implementing code splitting and lazy loading.",
        "Built reusable component libraries to ensure design consistency across projects.",
        "Created interactive data visualizations using D3.js for analytics dashboards."
      ],
      technologies: ["JavaScript", "React", "CSS3", "SASS", "Webpack", "D3.js"],
    },
  ];

  const education = [
    {
      title: "Master of Computer Science",
      company: "Tech University",
      period: "2015 - 2017",
      description: [
        "Specialized in Web Technologies and Data Science",
        "Thesis: 'Optimizing Performance in Single Page Applications'",
        "GPA: 3.9/4.0"
      ],
      technologies: ["Algorithms", "Data Structures", "Machine Learning", "Software Engineering"],
    },
    {
      title: "Bachelor of Science in Computer Science",
      company: "State University",
      period: "2011 - 2015",
      description: [
        "Dean's List all semesters",
        "Participated in ACM programming competition",
        "Teaching Assistant for Introduction to Programming"
      ],
      technologies: ["Java", "Python", "C++", "Database Systems"],
    },
  ];

  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container">
        <SectionHeading 
          title="Experience & Education" 
          subtitle="My professional journey and academic background."
        />
        
        <Tabs defaultValue="work" className="mt-8">
          <TabsList className="grid w-full grid-cols-2 max-w-[400px] mx-auto mb-8">
            <TabsTrigger value="work">Work Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>
          
          <TabsContent value="work" className="space-y-6">
            {experiences.map((item, index) => (
              <ExperienceItem key={index} {...item} />
            ))}
          </TabsContent>
          
          <TabsContent value="education" className="space-y-6">
            {education.map((item, index) => (
              <ExperienceItem key={index} {...item} />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Experience;
