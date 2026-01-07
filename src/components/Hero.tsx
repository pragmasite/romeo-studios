import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      {/* Background with gradient */}
      <div className="absolute inset-0">
        {/* Logo pattern background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />

        {/* Decorative blurred shapes */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -right-20 top-1/4 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -left-20 bottom-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="container relative mx-auto flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm tracking-widest text-primary backdrop-blur-sm"
        >
          {t.hero.badge}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-6 max-w-4xl font-serif text-5xl text-foreground md:text-6xl lg:text-7xl"
        >
          {t.hero.title1}
          <br />
          <span className="text-accent">{t.hero.title2}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-10 max-w-2xl text-lg text-foreground/80"
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex gap-4 flex-col sm:flex-row"
        >
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <a href="tel:+41792503200">
              <Phone className="mr-2 h-5 w-5" />
              {t.nav.call}
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5">
            <a href="mailto:pablorodrigues09@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              {t.hero.sendEmail}
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 flex items-center gap-2 text-foreground/60 text-sm"
        >
          <MapPin className="h-4 w-4" />
          {t.hero.location}
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#a-propos"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 rounded-full border border-primary/30 p-3 text-primary/60 hover:bg-primary/5 transition-colors"
        >
          <ArrowDown className="h-5 w-5" />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
