import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import StatsCard from "./StatsCard";
import { GraduationCap, Code, Trophy, Users } from "lucide-react";

const AboutSection = () => {
  const skills = [
    "Java", "Python", "C", "Data Structures", "Algorithms", 
    "Node.js", "MySQL", "MongoDB", "Socket.io", "UI/UX Design"
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <StatsCard
            number="9.28"
            label="CGPA"
            icon={<GraduationCap />}
            gradient={true}
          />
          <StatsCard
            number="100+"
            label="LeetCode Problems"
            icon={<Code />}
          />
          <StatsCard
            number="5+"
            label="Projects"
            icon={<Trophy />}
          />
          <StatsCard
            number="Active"
            label="Community Work"
            icon={<Users />}
          />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* About Text */}
          <Card className="p-8 shadow-card hover:shadow-hover transition-all duration-300">
            <h3 className="text-2xl font-semibold text-foreground mb-6">My Journey</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate B.Tech Computer Science student at <span className="text-primary font-semibold">Sharda University (CSP)</span> with a stellar 9.28 CGPA. My journey in technology is driven by curiosity and the desire to solve real-world problems through innovative code.
              </p>
              <p>
                With a strong foundation in <span className="text-primary font-semibold">Java, Python, and C</span>, I'm constantly expanding my expertise in Data Structures and Algorithms. I've successfully built projects ranging from banking systems to real-time applications.
              </p>
              <p>
                Beyond coding, I bring a unique blend of technical expertise and artistic creativity. My interests in <span className="text-secondary font-semibold">UI/UX design, crafting, and dance</span> influence my approach to creating user-centered solutions.
              </p>
              <p>
                Currently, I'm contributing to <span className="text-accent font-semibold">Team Aahaar Connect</span>, working towards UN SDG 2 - Zero Hunger, demonstrating my commitment to using technology for social impact.
              </p>
            </div>
          </Card>

          {/* Skills & Education */}
          <div className="space-y-8">
            {/* Education */}
            <Card className="p-8 shadow-card hover:shadow-hover transition-all duration-300">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Education</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-lg text-foreground">B.Tech Computer Science</h4>
                  <p className="text-primary font-medium">Sharda University (CSP)</p>
                  <p className="text-sm text-muted-foreground">Current CGPA: 9.28</p>
                </div>
              </div>
            </Card>

            {/* Skills */}
            <Card className="p-8 shadow-card hover:shadow-hover transition-all duration-300">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary"
                    className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Interests */}
            <Card className="p-8 shadow-card hover:shadow-hover transition-all duration-300 bg-gradient-artistic text-white border-0">
              <h3 className="text-2xl font-semibold mb-6">Creative Interests</h3>
              <div className="grid grid-cols-2 gap-4 text-white/90">
                <div>• UI/UX Design</div>
                <div>• Crafting</div>
                <div>• Home Decor</div>
                <div>• Painting</div>
                <div>• Kathak Dance</div>
                <div>• Freestyle Dance</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;