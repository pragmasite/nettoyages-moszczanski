import { motion } from "framer-motion";
import { Clock, CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Hours = () => {
  const { t } = useLanguage();

  // Opening hours as per business data
  // Monday-Friday: 08:00-12:00, 13:00-18:00 (Friday: 13:00-16:30)
  // Saturday-Sunday: Closed
  const schedule = [
    { hours: "08:00 - 12:00 / 13:00 - 18:00" }, // Monday
    { hours: "08:00 - 12:00 / 13:00 - 18:00" }, // Tuesday
    { hours: "08:00 - 12:00 / 13:00 - 18:00" }, // Wednesday
    { hours: "08:00 - 12:00 / 13:00 - 18:00" }, // Thursday
    { hours: "08:00 - 12:00 / 13:00 - 16:30" }, // Friday
    { hours: t.hours.closed }, // Saturday
    { hours: t.hours.closed }, // Sunday
  ];

  const todayIndex = [6, 0, 1, 2, 3, 4, 5][new Date().getDay()];

  return (
    <section id="horaires" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">{t.hours.label}</span>
          <h2 className="mt-2 font-serif text-4xl md:text-5xl">{t.hours.title}</h2>
        </motion.div>

        {/* Hours Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-xl rounded-2xl border bg-background shadow-soft overflow-hidden"
        >
          <div className="flex items-center gap-3 border-b bg-primary/5 px-6 py-4">
            <Clock className="h-5 w-5 text-primary" />
            <span className="font-serif text-lg font-bold">{t.hours.header}</span>
          </div>
          <div className="divide-y">
            {schedule.map((item, i) => {
              const isToday = i === todayIndex;
              const isClosed = item.hours === t.hours.closed;
              return (
                <div
                  key={i}
                  className={`px-6 py-4 flex justify-between items-center transition-colors ${
                    isToday ? "bg-primary/5" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {isToday && <CheckCircle className="h-4 w-4 text-primary" />}
                    <span className={isToday ? "font-medium text-primary" : ""}>
                      {t.hours.days[i]}
                    </span>
                    {isToday && (
                      <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                        {t.hours.today}
                      </span>
                    )}
                  </div>
                  <span className={isClosed ? "text-muted-foreground text-sm" : "font-medium"}>
                    {item.hours}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hours;
