
import SectionHeading from "../ui/section-heading";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container">
        <SectionHeading
          title="About Me"
          subtitle="Here's a brief introduction about myself and my engineering journey."
        />

        <div className="max-w-2xl space-y-6">
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
        </div>
      </div>
    </section>
  );
};

export default About;
