import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "@/hooks/useLanguage";

const Gallery = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  // Placeholder gallery message since no images were provided
  const placeholderImages = [
    { id: 1, title: "Tattoo artistry" },
    { id: 2, title: "Custom designs" },
    { id: 3, title: "Professional piercing" },
    { id: 4, title: "Beauty services" },
    { id: 5, title: "Nail art" },
    { id: 6, title: "Expert care" },
  ];

  return (
    <section id="galerie" className="py-24 bg-muted/30">
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
            {t.gallery.label}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            {t.gallery.title}
          </h2>
          <p className="text-lg text-foreground/70">{t.gallery.description}</p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {placeholderImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.08 }}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 border border-border cursor-pointer hover:shadow-medium transition-all"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-2">
                    <div className="w-8 h-8 rounded-full bg-accent/40" />
                  </div>
                  <p className="text-sm font-medium text-foreground">{image.title}</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* Info message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-12 p-6 rounded-2xl bg-background border border-border text-center"
        >
          <p className="text-foreground/70">
            Follow us on{" "}
            <a
              href="https://www.instagram.com/romeotattoostudio?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 font-medium"
            >
              Instagram
            </a>{" "}
            to see our latest work and creations
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
