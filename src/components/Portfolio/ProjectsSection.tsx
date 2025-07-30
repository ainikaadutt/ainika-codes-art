import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Bank Management System",
      description: "Comprehensive banking application with account management, transaction processing, and secure authentication. Built with robust database design and user-friendly interface.",
      technologies: ["Java", "MySQL", "Swing", "JDBC"],
      featured: true,
      githubUrl: "#"
    },
    {
      title: "Real-time Chat Application",
      description: "Interactive chat platform supporting multiple users with real-time messaging, user authentication, and modern UI. Implements WebSocket for instant communication.",
      technologies: ["Node.js", "Socket.io", "MongoDB", "Express"],
      featured: true,
      githubUrl: "#"
    },
    {
      title: "LeetCode Problem Solutions",
      description: "Collection of 100+ algorithmic problem solutions demonstrating strong problem-solving skills and coding efficiency across various data structures.",
      technologies: ["Java", "Python", "C++", "Algorithms", "DSA"],
      githubUrl: "#"
    },
    {
      title: "Aahaar Connect Platform",
      description: "Community-driven platform addressing food insecurity in Yamuna Khadar slum areas, contributing to UN SDG 2 - Zero Hunger initiative.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing my journey through code - from academic projects to real-world solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;