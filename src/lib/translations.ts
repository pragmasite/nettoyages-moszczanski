export type Language = "fr" | "en";

export const translations = {
  fr: {
    nav: {
      aboutUs: "À propos",
      services: "Services",
      gallery: "Galerie",
      hours: "Horaires",
      contact: "Contact",
      call: "Appeler",
      profession: "ENTREPRISE DE NETTOYAGE",
    },
    hero: {
      badge: "Service professionnel de qualité",
      title1: "Nettoyage",
      title2: "Professionnel",
      description: "Services d'entretien et de nettoyage intérieur et extérieur pour tous types de locaux",
      sendEmail: "Envoyer un email",
      location: "Corgémont, Suisse",
    },
    about: {
      label: "À propos",
      title1: "Qui sommes",
      title2: "nous?",
      p1: "Nettoyages Moszczanski est une entreprise spécialisée dans les services de nettoyage et d'entretien pour tous types de locaux résidentiels, commerciaux et administratifs.",
      p2: "Fort d'une équipe de professionnels qualifiés et d'équipements performants, nous garantissons une prestation de qualité adaptée à vos besoins.",
      stat1: "Ans d'expérience",
      stat2: "Clients satisfaits",
      stat3: "Qualité garantie",
      features: [
        { title: "Personnel qualifié", description: "Équipe formée et expérimentée dans tous les types de nettoyage" },
        { title: "Équipement moderne", description: "Matériel et produits performants pour un nettoyage efficace" },
        { title: "Service fiable", description: "Ponctualité et professionnalisme à chaque intervention" },
        { title: "Solutions personnalisées", description: "Fréquences et services adaptés à votre établissement" },
      ],
    },
    services: {
      label: "Nos prestations",
      title: "Services Professionnels",
      description: "Nous proposons une gamme complète de services d'entretien et de nettoyage",
      items: [
        { title: "Nettoyage des locaux", description: "Nettoyage et entretien réguliers d'immeubles résidentiels, bureaux, usines, hôpitaux et magasins" },
        { title: "Maintenance générale", description: "Services minimisant le nombre d'interlocuteurs pour la gestion de vos bâtiments" },
        { title: "Nettoyage des vitres", description: "Nettoyage en profondeur des fenêtres et surfaces vitrées sur abonnement" },
        { title: "Nettoyage de fin de chantier", description: "Nettoyage complet pour constructions neuves et rénovations" },
        { title: "Services additionnels", description: "Shampooing de tapis, traitement anti-acariens, petits déménagements" },
        { title: "Surveillance et sécurité", description: "Services de surveillance et de sécurité pour vos locaux" },
      ],
    },
    gallery: {
      label: "Nos réalisations",
      title: "Galerie",
      description: "Découvrez nos réalisations et la qualité de notre travail",
    },
    hours: {
      label: "Disponibilité",
      title: "Horaires d'ouverture",
      header: "Heures d'ouverture",
      today: "Aujourd'hui",
      closed: "Fermé",
      days: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"],
    },
    contact: {
      label: "Contact",
      title1: "Nous vous",
      title2: "contactons",
      description: "N'hésitez pas à nous contacter pour vos demandes de nettoyage et d'entretien",
      phone: "Téléphone",
      email: "Email",
      address: "Adresse",
      cta: "Prendre rendez-vous",
      callNow: "Appelez maintenant",
    },
    footer: {
      tagline: "Entreprise de nettoyage professionnelle",
      description: "Services d'entretien et de nettoyage de qualité pour tous vos besoins",
      navigation: "Navigation",
      about: "À propos",
      copyright: "Tous droits réservés.",
    },
    disclaimer: {
      title: "Aperçu du site",
      items: [
        "Ce site web est un brouillon de prévisualisation",
        "Il n'est pas référencé sur Google",
        "Il peut contenir des erreurs ou des inexactitudes",
      ],
      button: "J'ai compris",
    },
  },
  en: {
    nav: {
      aboutUs: "About Us",
      services: "Services",
      gallery: "Gallery",
      hours: "Hours",
      contact: "Contact",
      call: "Call",
      profession: "CLEANING COMPANY",
    },
    hero: {
      badge: "Professional quality service",
      title1: "Professional",
      title2: "Cleaning",
      description: "Interior and exterior cleaning and maintenance services for all types of premises",
      sendEmail: "Send an email",
      location: "Corgémont, Switzerland",
    },
    about: {
      label: "About",
      title1: "Who are",
      title2: "we?",
      p1: "Nettoyages Moszczanski is a company specializing in cleaning and maintenance services for all types of residential, commercial and administrative premises.",
      p2: "With a team of qualified professionals and high-performance equipment, we guarantee quality service tailored to your needs.",
      stat1: "Years of experience",
      stat2: "Satisfied clients",
      stat3: "Quality guaranteed",
      features: [
        { title: "Qualified staff", description: "Team trained and experienced in all types of cleaning" },
        { title: "Modern equipment", description: "High-performance materials and products for effective cleaning" },
        { title: "Reliable service", description: "Punctuality and professionalism at every intervention" },
        { title: "Personalized solutions", description: "Frequencies and services adapted to your establishment" },
      ],
    },
    services: {
      label: "Our Services",
      title: "Professional Services",
      description: "We offer a complete range of cleaning and maintenance services",
      items: [
        { title: "Premises cleaning", description: "Regular cleaning and maintenance of residential buildings, offices, factories, hospitals and shops" },
        { title: "General maintenance", description: "Services minimizing the number of interlocutors for managing your buildings" },
        { title: "Window cleaning", description: "Deep cleaning of windows and glass surfaces on a subscription basis" },
        { title: "End of construction cleaning", description: "Complete cleaning for new constructions and renovations" },
        { title: "Additional services", description: "Carpet shampooing, anti-mite treatment, small removals" },
        { title: "Surveillance and security", description: "Surveillance and security services for your premises" },
      ],
    },
    gallery: {
      label: "Our Work",
      title: "Gallery",
      description: "Discover our work and the quality of our service",
    },
    hours: {
      label: "Availability",
      title: "Opening Hours",
      header: "Opening Hours",
      today: "Today",
      closed: "Closed",
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    },
    contact: {
      label: "Contact",
      title1: "Get in",
      title2: "Touch",
      description: "Feel free to contact us for your cleaning and maintenance requests",
      phone: "Phone",
      email: "Email",
      address: "Address",
      cta: "Schedule an appointment",
      callNow: "Call now",
    },
    footer: {
      tagline: "Professional cleaning company",
      description: "Quality cleaning and maintenance services for all your needs",
      navigation: "Navigation",
      about: "About",
      copyright: "All rights reserved.",
    },
    disclaimer: {
      title: "Website Preview",
      items: [
        "This website is a draft preview",
        "It is not indexed on Google",
        "It may contain errors or inaccuracies",
      ],
      button: "Got it",
    },
  },
};

export interface Translations {
  nav: {
    aboutUs: string;
    services: string;
    gallery: string;
    hours: string;
    contact: string;
    call: string;
    profession: string;
  };
  hero: {
    badge: string;
    title1: string;
    title2: string;
    description: string;
    sendEmail: string;
    location: string;
  };
  about: {
    label: string;
    title1: string;
    title2: string;
    p1: string;
    p2: string;
    stat1: string;
    stat2: string;
    stat3: string;
    features: Array<{ title: string; description: string }>;
  };
  services: {
    label: string;
    title: string;
    description: string;
    items: Array<{ title: string; description: string }>;
  };
  gallery: {
    label: string;
    title: string;
    description: string;
  };
  hours: {
    label: string;
    title: string;
    header: string;
    today: string;
    closed: string;
    days: string[];
  };
  contact: {
    label: string;
    title1: string;
    title2: string;
    description: string;
    phone: string;
    email: string;
    address: string;
    cta: string;
    callNow: string;
  };
  footer: {
    tagline: string;
    description: string;
    navigation: string;
    about: string;
    copyright: string;
  };
  disclaimer: {
    title: string;
    items: string[];
    button: string;
  };
}
