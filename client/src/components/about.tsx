import { Download, Award, GraduationCap, Trophy, Medal, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const handleDownloadResume = () => {
    // Create a link to download the resume PDF
    const link = document.createElement('a');
    link.href = '/Sowjanya_Vangalapudi_Resume.pdf';
    link.download = 'Sowjanya_Vangalapudi_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const education = [
    { degree: "B.Tech", institution: "NIT Nagpur", description: "Engineering Foundation" },
    { degree: "Class XII", institution: "Sri Chaitanya", description: "Pre-University Education" },
    { degree: "Class X", institution: "Siddhartha", description: "Secondary Education" },
  ];

  const certifications = [
    { name: "PSPO I", description: "Professional Scrum Product Owner", icon: Award },
    { name: "Product Management Summer School", description: "IIIT Hyderabad", icon: GraduationCap },
  ];

  const awards = [
    { name: "Women in Tech Nomination", description: "Industry Recognition", icon: Trophy },
    { name: "Prefect Leadership", description: "Leadership Excellence", icon: Medal },
    { name: "Jagriti Yatra Participant", description: "Entrepreneurial Journey", icon: Star },
  ];

  return (
    <section id="about" className="py-20 bg-background" data-testid="about-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="text-about-title">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-about-subtitle">
            Passionate QA professional dedicated to delivering excellence through strategic thinking, innovative automation, and strong leadership.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card className="card-hover" data-testid="card-professional-journey">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6" data-testid="text-journey-title">
                Professional Journey
              </h3>
              <p className="text-muted-foreground mb-6" data-testid="text-journey-description-1">
                With over 7 years of experience in software quality assurance, I have established myself as a strategic QA leader who combines technical expertise with strong leadership skills. My journey spans across various domains including test management, automation framework development, and API testing.
              </p>
              <p className="text-muted-foreground mb-6" data-testid="text-journey-description-2">
                I specialize in building robust testing strategies that align with business objectives while fostering a culture of quality throughout the development lifecycle. My experience includes leading cross-functional teams, implementing agile methodologies, and driving continuous improvement initiatives.
              </p>
              <div className="flex gap-4 mt-8">
                <Button
                  onClick={handleDownloadResume}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                  data-testid="button-download-resume"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="card-hover" data-testid="card-education-timeline">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6" data-testid="text-education-title">
                Education Timeline
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="flex items-start" data-testid={`education-item-${index}`}>
                    <div className="w-3 h-3 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-foreground" data-testid={`text-education-degree-${index}`}>
                        {edu.degree}
                      </h4>
                      <p className="text-primary font-medium" data-testid={`text-education-institution-${index}`}>
                        {edu.institution}
                      </p>
                      <p className="text-sm text-muted-foreground" data-testid={`text-education-description-${index}`}>
                        {edu.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="card-hover" data-testid="card-certifications">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6" data-testid="text-certifications-title">
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center" data-testid={`certification-item-${index}`}>
                    <cert.icon className="w-5 h-5 text-accent mr-4" />
                    <div>
                      <h4 className="font-semibold text-foreground" data-testid={`text-certification-name-${index}`}>
                        {cert.name}
                      </h4>
                      <p className="text-sm text-muted-foreground" data-testid={`text-certification-description-${index}`}>
                        {cert.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="card-hover" data-testid="card-awards">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6" data-testid="text-awards-title">
                Awards & Recognition
              </h3>
              <div className="space-y-4">
                {awards.map((award, index) => (
                  <div key={index} className="flex items-center" data-testid={`award-item-${index}`}>
                    <award.icon className="w-5 h-5 text-accent mr-4" />
                    <div>
                      <h4 className="font-semibold text-foreground" data-testid={`text-award-name-${index}`}>
                        {award.name}
                      </h4>
                      <p className="text-sm text-muted-foreground" data-testid={`text-award-description-${index}`}>
                        {award.description}
                      </p>
                    </div>
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
