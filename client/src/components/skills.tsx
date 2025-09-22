import { useEffect, useRef } from "react";
import { CheckSquare, Users, Bot, Cloud, Database, Code, Settings, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Skills() {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-bar');
            skillBars.forEach((bar) => {
              const width = (bar as HTMLElement).dataset.width;
              (bar as HTMLElement).style.width = width || '0%';
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Test Management & Strategy",
      icon: CheckSquare,
      skills: [
        { name: "Test Planning", level: 95, proficiency: "Expert" },
        { name: "Risk Mitigation", level: 90, proficiency: "Advanced" },
        { name: "Release Management", level: 92, proficiency: "Expert" },
      ],
    },
    {
      title: "Leadership & Agile",
      icon: Users,
      skills: [
        { name: "Team Management", level: 94, proficiency: "Expert" },
        { name: "Resource Planning", level: 88, proficiency: "Advanced" },
        { name: "Stakeholder Communication", level: 96, proficiency: "Expert" },
      ],
    },
  ];

  const tools = [
    { name: "UFT", icon: Settings },
    { name: "SoapUI", icon: Code },
    { name: "JIRA", icon: Settings },
    { name: "ServiceNow", icon: Wrench },
  ];

  const technologies = [
    { name: "SQL", icon: Database },
    { name: "C#", icon: Code },
    { name: "AWS", icon: Cloud },
    { name: "IBM Cloud", icon: Cloud },
  ];

  return (
    <section id="skills" className="py-20 bg-muted" data-testid="skills-section" ref={skillsRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="text-skills-title">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-skills-subtitle">
            Comprehensive skill set spanning quality assurance, leadership, automation, and modern technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="card-hover" data-testid={`card-skill-category-${categoryIndex}`}>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <category.icon className="w-6 h-6 text-primary mr-4" />
                  <h3 className="text-xl font-semibold text-foreground" data-testid={`text-category-title-${categoryIndex}`}>
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} data-testid={`skill-item-${categoryIndex}-${skillIndex}`}>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground" data-testid={`text-skill-name-${categoryIndex}-${skillIndex}`}>
                          {skill.name}
                        </span>
                        <span className="text-sm font-medium text-primary" data-testid={`text-skill-proficiency-${categoryIndex}-${skillIndex}`}>
                          {skill.proficiency}
                        </span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2 mt-2">
                        <div
                          className="bg-primary h-2 rounded-full skill-bar transition-all duration-1000 ease-out"
                          style={{ width: '0%' }}
                          data-width={`${skill.level}%`}
                          data-testid={`progress-skill-${categoryIndex}-${skillIndex}`}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="card-hover" data-testid="card-automation-tools">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Bot className="w-6 h-6 text-primary mr-4" />
                <h3 className="text-xl font-semibold text-foreground" data-testid="text-automation-tools-title">
                  Automation & Tools
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {tools.map((tool, index) => (
                  <div
                    key={index}
                    className="text-center p-3 bg-muted rounded-lg"
                    data-testid={`tool-item-${index}`}
                  >
                    <tool.icon className="w-5 h-5 text-accent mx-auto mb-2" />
                    <p className="text-sm font-medium text-foreground" data-testid={`text-tool-name-${index}`}>
                      {tool.name}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="card-hover" data-testid="card-programming-cloud">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Cloud className="w-6 h-6 text-primary mr-4" />
                <h3 className="text-xl font-semibold text-foreground" data-testid="text-programming-cloud-title">
                  Programming & Cloud
                </h3>
              </div>
              <div className="space-y-3">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-background rounded-lg"
                    data-testid={`tech-item-${index}`}
                  >
                    <span className="font-medium text-foreground" data-testid={`text-tech-name-${index}`}>
                      {tech.name}
                    </span>
                    <tech.icon className="w-5 h-5 text-accent" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
