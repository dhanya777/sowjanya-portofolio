export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-8" data-testid="footer">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm" data-testid="text-copyright">
              &copy; {currentYear} Sowjanya Vangalapudi. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-primary-foreground hover:text-primary-foreground/70 transition-colors duration-200"
                data-testid={`link-footer-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
