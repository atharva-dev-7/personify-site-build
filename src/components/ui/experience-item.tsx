
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

const ExperienceItem = ({
  title,
  company,
  period,
  description,
  technologies,
}: ExperienceItemProps) => {
  return (
    <Card className="p-6 border-border/40 hover:border-primary/30 transition-colors">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <span className="text-sm text-muted-foreground">{period}</span>
      </div>
      
      <p className="text-primary font-medium mb-4">{company}</p>
      
      <ul className="space-y-2 mb-4 list-disc list-inside text-muted-foreground">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      
      <div className="flex flex-wrap gap-2 mt-3">
        {technologies.map((tech, index) => (
          <Badge key={index} variant="outline" className="text-xs">
            {tech}
          </Badge>
        ))}
      </div>
    </Card>
  );
};

export default ExperienceItem;
