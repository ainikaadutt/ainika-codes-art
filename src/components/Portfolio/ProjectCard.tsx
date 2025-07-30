import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

const ProjectCard = ({ 
  title, 
  description, 
  technologies, 
  image, 
  githubUrl, 
  liveUrl, 
  featured = false 
}: ProjectCardProps) => {
  return (
    <Card className={`group overflow-hidden hover:shadow-hover transition-all duration-300 transform hover:scale-105 ${featured ? 'bg-gradient-primary text-white border-0' : 'bg-card shadow-card'}`}>
      {/* Project Image */}
      {image && (
        <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-4 left-4">
            <Badge variant={featured ? "secondary" : "default"} className="shadow-lg">
              {featured ? "Featured" : "Project"}
            </Badge>
          </div>
        </div>
      )}
      
      <div className="p-6">
        <h3 className={`text-xl font-semibold mb-3 ${featured ? 'text-white' : 'text-foreground'}`}>
          {title}
        </h3>
        <p className={`mb-4 leading-relaxed ${featured ? 'text-white/90' : 'text-muted-foreground'}`}>
          {description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <Badge 
              key={index}
              variant={featured ? "secondary" : "outline"}
              className="text-xs"
            >
              {tech}
            </Badge>
          ))}
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-3">
          {githubUrl && (
            <Button 
              variant={featured ? "glass" : "outline"} 
              size="sm"
              className="flex-1"
            >
              <Github />
              Code
            </Button>
          )}
          {liveUrl && (
            <Button 
              variant={featured ? "glass" : "default"} 
              size="sm"
              className="flex-1"
            >
              <ExternalLink />
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;