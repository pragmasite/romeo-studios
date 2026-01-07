import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "@/hooks/useLanguage";

const Services = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="prestations" className="py-24">
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
            {t.services.label}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            {t.services.title}
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            {t.services.description}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.08 }}
              className="group p-6 rounded-2xl bg-background border border-border shadow-soft hover:shadow-medium hover:border-primary/30 transition-all"
            >
              <div className="h-12 w-12 rounded-full bg-accent/20 group-hover:bg-accent/30 transition-colors mb-4" />
              <h3 className="font-serif text-lg text-foreground mb-2">{service.title}</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
