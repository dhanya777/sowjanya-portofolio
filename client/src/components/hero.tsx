import { Download, Mail, User, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

export default function Hero() {
  const handleViewResume = () => {
    // Open the resume PDF in a new tab
    window.open("/Sowjanya_Vangalapudi_Resume.pdf", "_blank");
  };

  const handleContactMe = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center hero-gradient pt-16 overflow-hidden" data-testid="hero-section">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-foreground rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-primary-foreground/50 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Content Section */}
          <div className="lg:w-3/5 text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground/80 text-sm font-medium animate-fade-in">
              <Sparkles className="w-4 h-4 mr-2" />
              PSPO-I Certified • 7+ Years Experience
            </div>
            
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight tracking-tight" data-testid="text-hero-name">
                Sowjanya
                <br />
                <span className="bg-gradient-to-r from-primary-foreground to-accent-foreground bg-clip-text text-transparent">
                  Vangalapudi
                </span>
              </h1>
              <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4">
                <p className="text-2xl lg:text-3xl text-primary-foreground/90 font-semibold" data-testid="text-hero-title">
                  Senior QA Consultant
                </p>
                <div className="hidden lg:block w-2 h-2 bg-accent rounded-full"></div>
                <p className="text-2xl lg:text-3xl text-accent font-semibold">
                  Test Lead
                </p>
              </div>
            </div>
            
            {/* Headline */}
            <p className="text-xl lg:text-2xl text-primary-foreground/80 leading-relaxed max-w-3xl" data-testid="text-hero-headline">
              Driving Quality Through Strategy, Leadership & Automation
            </p>
            
            {/* Description */}
            <p className="text-lg text-primary-foreground/70 leading-relaxed max-w-2xl" data-testid="text-hero-description">
              Transforming software quality through strategic leadership, innovative automation frameworks, and agile methodologies. Proven expertise in test management, API testing, and building high-performing QA teams.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={handleViewResume}
                className="group bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-accent/25"
                data-testid="button-view-resume"
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                View Resume
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                onClick={handleContactMe}
                className="group border-2 border-primary-foreground/30 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                data-testid="button-contact-me"
              >
                <Mail className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Let's Connect
              </Button>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="lg:w-2/5 flex justify-center">
            <div className="relative">
              {/* Animated Background Rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/30 to-primary-foreground/30 animate-spin-slow"></div>
              <div className="absolute inset-2 rounded-full bg-gradient-to-l from-accent/20 to-primary-foreground/20 animate-pulse"></div>
              
              {/* Main Image Container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-primary-foreground/20 to-accent/20 backdrop-blur-sm border-4 border-primary-foreground/20 flex items-center justify-center shadow-2xl overflow-hidden" data-testid="hero-image-container">
                <img 
                  src={profilePhoto} 
                  alt="Sowjanya Vangalapudi - Professional Photo" 
                  className="w-full h-full object-cover rounded-full"
                  data-testid="hero-profile-image"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-4 right-4 w-6 h-6 bg-accent rounded-full animate-bounce delay-300"></div>
              <div className="absolute bottom-8 left-4 w-4 h-4 bg-primary-foreground rounded-full animate-bounce delay-700"></div>
              <div className="absolute top-1/2 -left-4 w-5 h-5 bg-accent/70 rounded-full animate-bounce delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
