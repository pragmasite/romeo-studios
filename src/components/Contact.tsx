import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Contact = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const contactInfo = [
    {
      icon: Phone,
      label: t.contact.phone,
      value: "+41 79 250 3200",
      href: "tel:+41792503200",
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: "pablorodrigues09@gmail.com",
      href: "mailto:pablorodrigues09@gmail.com",
    },
    {
      icon: MapPin,
      label: t.contact.address,
      value: "Rue Neuve 6, 1260 Nyon, Switzerland",
      href: "https://maps.google.com/?q=Rue+Neuve+6,+1260+Nyon,+Switzerland",
    },
  ];

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.contact.label}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">
            {t.contact.title1} <span className="text-accent">{t.contact.title2}</span>
          </h2>
          <p className="text-lg text-foreground/70 mt-4 max-w-2xl mx-auto">
            {t.contact.description}
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex gap-6 p-6 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-medium transition-all group"
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-lg text-foreground mb-1">
                      {item.label}
                    </h3>
                    <p className="text-foreground/70 hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-medium border border-border h-full min-h-96"
          >
            <iframe
              title="Romeo Studios Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2743.196652857193!2d6.238926!3d46.383142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e5b5e5e5e5e5d%3A0x1a1a1a1a1a1a1a1a!2sRue%20Neuve%206%2C%201260%20Nyon!5e0!3m2!1sfr!2sch!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "24rem" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
