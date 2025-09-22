import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Services from "@/components/services";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    return () => {
      // Clean up event listeners
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function () {});
      });
    };
  }, []);

  return (
    <>
      <title>Sowjanya Vangalapudi - Senior QA Consultant | Test Lead</title>
      <meta name="description" content="PSPO-certified QA Leader with 7+ years of experience in software quality assurance, test management, automation, and API testing. Driving quality through strategy, leadership & automation." />
      <meta property="og:title" content="Sowjanya Vangalapudi - Senior QA Consultant | Test Lead" />
      <meta property="og:description" content="Professional QA consultant specializing in test management, automation frameworks, and agile methodologies." />
      
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
