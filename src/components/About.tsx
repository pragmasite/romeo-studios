import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "@/hooks/useLanguage";

const About = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const stats = [
    { value: "15+", label: t.about.stat1 },
    { value: "500+", label: t.about.stat2 },
    { value: "4.9/5", label: t.about.stat3 },
  ];

  return (
    <section id="a-propos" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="mb-16 max-w-3xl"
        >
          <span className="text-sm uppercase tracking-widest text-primary">{t.about.label}</span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">
            {t.about.title1} <span className="text-accent">{t.about.title2}</span>
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-foreground/80">{t.about.p1}</p>
            <p className="text-lg text-foreground/80">{t.about.p2}</p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-3 gap-6"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-background shadow-soft">
                <div className="font-serif text-3xl md:text-4xl text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {t.about.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="p-6 rounded-2xl bg-background border border-border shadow-soft hover:shadow-medium transition-shadow"
            >
              <h3 className="font-serif text-lg text-foreground mb-2">{feature.title}</h3>
              <p className="text-foreground/70 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
