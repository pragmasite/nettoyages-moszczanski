import { useLanguage } from "@/hooks/useLanguage";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const { t, lang } = useLanguage();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Company Info */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Nettoyages Moszczanski</h3>
            <p className="text-primary-foreground/80 mb-6">{t.footer.description}</p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/nettoyagesMoszczanski"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <span className="text-sm font-bold">f</span>
              </a>
              <a
                href="https://www.linkedin.com/in/nettoyges-moszczanski-b556a3204"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="LinkedIn"
              >
                <span className="text-sm font-bold">in</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">{t.footer.navigation}</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#a-propos" className="hover:text-primary-foreground transition-colors">
                  {t.nav.aboutUs}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-foreground transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#galerie" className="hover:text-primary-foreground transition-colors">
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a href="#horaires" className="hover:text-primary-foreground transition-colors">
                  {t.nav.hours}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-foreground transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">{t.nav.contact}</h4>
            <ul className="space-y-3 text-primary-foreground/80 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <a href="tel:+41786326547" className="hover:text-primary-foreground transition-colors">
                  +41 78 632 65 47
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:netmoszczanski@gmail.com"
                  className="hover:text-primary-foreground transition-colors break-all"
                >
                  netmoszczanski@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>Grand'Rue 2<br />2606 Corgémont<br />Suisse</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-primary-foreground/20" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-primary-foreground/60 text-sm">
          <p>
            © {currentYear} Nettoyages Moszczanski. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
