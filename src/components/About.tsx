import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { Sparkles, Award, Users, Shield } from "lucide-react";

const About = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Users,
      title: t.about.features[0].title,
      description: t.about.features[0].description,
    },
    {
      icon: Sparkles,
      title: t.about.features[1].title,
      description: t.about.features[1].description,
    },
    {
      icon: Award,
      title: t.about.features[2].title,
      description: t.about.features[2].description,
    },
    {
      icon: Shield,
      title: t.about.features[3].title,
      description: t.about.features[3].description,
    },
  ];

  const stats = [
    { value: "15+", label: t.about.stat1 },
    { value: "500+", label: t.about.stat2 },
    { value: "100%", label: t.about.stat3 },
  ];

  return (
    <section id="a-propos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">{t.about.label}</span>
          <h2 className="mt-2 font-serif text-4xl md:text-5xl">
            {t.about.title1}
            <br />
            <span className="text-primary">{t.about.title2}</span>
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 items-center mb-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-foreground/80">{t.about.p1}</p>
            <p className="text-lg text-foreground/80">{t.about.p2}</p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {stats.map((stat, index) => (
              <div key={index} className="rounded-xl bg-primary/5 p-6 border border-primary/10">
                <div className="font-serif text-4xl font-bold text-primary">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="rounded-xl border bg-card p-6 shadow-soft hover:shadow-medium transition-shadow"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-serif text-lg font-bold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
