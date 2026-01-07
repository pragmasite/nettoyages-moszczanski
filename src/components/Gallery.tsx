import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

const Gallery = () => {
  const { t } = useLanguage();

  // Placeholder gallery items (company doesn't have specific images)
  const galleryItems = [
    { id: 1, title: "Cleaning", color: "from-primary/60" },
    { id: 2, title: "Maintenance", color: "from-accent/60" },
    { id: 3, title: "Professional", color: "from-secondary/60" },
    { id: 4, title: "Service", color: "from-primary/40" },
    { id: 5, title: "Quality", color: "from-accent/40" },
    { id: 6, title: "Reliable", color: "from-secondary/40" },
  ];

  return (
    <section id="galerie" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">{t.gallery.label}</span>
          <h2 className="mt-2 font-serif text-4xl md:text-5xl">{t.gallery.title}</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            {t.gallery.description}
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className={`group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br ${item.color} to-primary/20`}
            >
              {/* Placeholder with icon and text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl font-serif text-white/40 mb-2">◆</div>
                  <p className="text-white/60 font-medium">{item.title}</p>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium text-white">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
