import { useState } from "react";
import { Link } from "react-router-dom";
import { Globe, Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Header = () => {
  const { t, otherLang, otherLangPath, lang } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Listen for scroll events
  window.addEventListener("scroll", () => {
    setIsScrolled(window.scrollY > 50);
  });

  const navLinks = [
    { id: "a-propos", label: t.nav.about },
    { id: "prestations", label: t.nav.services },
    { id: "galerie", label: t.nav.gallery },
    { id: "horaires", label: t.nav.hours },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <a href={lang === "fr" ? "#" : "/en"} className="flex flex-col">
          <img src="/images/logo.png" alt="Romeo Studios" className="h-12 w-12" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`text-sm font-medium transition-colors ${
                isScrolled
                  ? "text-foreground hover:text-primary"
                  : "text-white hover:text-accent"
              }`}
            >
              {link.label}
            </a>
          ))}

          {/* Language Switcher */}
          <Link
            to={otherLangPath}
            className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
              isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white hover:text-accent"
            }`}
          >
            <Globe className="h-4 w-4" />
            {otherLang.toUpperCase()}
          </Link>

          {/* Call Button */}
          <Button asChild className="bg-primary hover:bg-primary/90">
            <a href="tel:+41792503200">
              <Phone className="h-4 w-4 mr-2" />
              {t.nav.call}
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <Link
            to={otherLangPath}
            className={`flex items-center gap-1 text-sm ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
          >
            <Globe className="h-4 w-4" />
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={isScrolled ? "text-foreground" : "text-white"}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md shadow-soft">
          <div className="container mx-auto flex flex-col gap-2 px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground hover:text-primary transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="w-full bg-primary hover:bg-primary/90 mt-2">
              <a href="tel:+41792503200">
                <Phone className="h-4 w-4 mr-2" />
                {t.nav.call}
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
