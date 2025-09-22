import { Shield, ArrowRightLeft, Settings, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Services() {

  const services = [
    {
      title: "QA Leadership & Governance",
      icon: Shield,
      description: "Strategic QA leadership focusing on establishing robust governance frameworks, quality standards, and team excellence.",
      features: [
        "Quality strategy development",
        "Process optimization",
        "Team leadership & mentoring",
        "Quality metrics & reporting",
      ],
      color: "primary",
    },
    {
      title: "API & Migration Testing",
      icon: ArrowRightLeft,
      description: "Specialized expertise in API testing, data migration validation, and system integration verification.",
      features: [
        "REST/SOAP API testing",
        "Data migration validation",
        "Integration testing",
        "Performance testing",
      ],
      color: "accent",
    },
    {
      title: "Automation Framework Optimization",
      icon: Settings,
      description: "Design and optimize automation frameworks for maximum efficiency, maintainability, and ROI.",
      features: [
        "Framework architecture",
        "Tool selection & setup",
        "CI/CD integration",
        "Maintenance strategies",
      ],
      color: "primary",
    },
    {
      title: "Agile QA Coaching",
      icon: Users,
      description: "Transform your QA practices with agile methodologies, coaching teams to deliver quality at speed.",
      features: [
        "Agile QA transformation",
        "Team coaching & training",
        "Sprint planning & execution",
        "Continuous improvement",
      ],
      color: "accent",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background" data-testid="services-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="text-services-title">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-services-subtitle">
            Core areas of expertise and proven experience in quality assurance, leadership, and automation frameworks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="card-hover border border-border text-center"
              data-testid={`card-service-${index}`}
            >
              <CardContent className="p-8">
                <div className={`w-16 h-16 ${service.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <service.icon className={`w-6 h-6 ${service.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4" data-testid={`text-service-title-${index}`}>
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6" data-testid={`text-service-description-${index}`}>
                  {service.description}
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} data-testid={`text-service-feature-${index}-${featureIndex}`}>
                      • {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
