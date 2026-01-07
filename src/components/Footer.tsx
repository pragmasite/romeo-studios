import { Facebook, Instagram } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { id: "a-propos", label: t.nav.about },
    { id: "prestations", label: t.nav.services },
    { id: "galerie", label: t.nav.gallery },
    { id: "horaires", label: t.nav.hours },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl mb-2">Romeo Studios</h3>
            <p className="text-background/80 text-sm">{t.footer.tagline}</p>
            <p className="text-background/70 text-sm mt-2">{t.footer.description}</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-lg mb-4">{t.footer.navigation}</h4>
            <nav className="space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="block text-background/80 hover:text-accent transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-serif text-lg mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/Romeotattoostudio1196"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-background/20 hover:bg-accent/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-background hover:text-accent" />
              </a>
              <a
                href="https://www.instagram.com/romeotattoostudio?hl=fr"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-background/20 hover:bg-accent/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-background hover:text-accent" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/20 pt-8 text-center text-background/70 text-sm">
          <p>
            © {currentYear} Romeo Studios. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
