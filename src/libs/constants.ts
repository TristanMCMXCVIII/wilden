// src/lib/constants.ts
export const SITE = {
    name: "Wilden Studio",
    description:
        "Sites, apps et automatisations en code et no-code — cycles courts, ROI mesurable. Du besoin au livrable en semaines.",
    ogImage: "/og.jpg",
    url: "https://wilden.studio",
};

export const HERO = {
    eyebrow: "Agence produit — code & no-code",
    title: "Lancez plus vite. Sans dettes inutiles.",
    subtitle:
        "Je conçois des sites, apps et workflows d’automatisation pour entrepreneurs & PME. Minimaliste, efficace, et orienté résultats.",
    primaryCta: { label: "Planifier un diagnostic (20 min)", href: "#contact" },
    secondaryCta: { label: "Voir des cas concrets", href: "#cases" },
    stats: [
        { kpi: "25+ projets", label: "SaaS, marketplace, outils internes" },
        { kpi: "2–6 semaines", label: "MVP en production" },
        { kpi: "−30 à −60%", label: "Coût vs. approche big-bang" },
    ],
};

export const LOGOS = [
    { name: "Client A", src: "/logos/client-a.svg" },
    { name: "Client B", src: "/logos/client-b.svg" },
    { name: "Client C", src: "/logos/client-c.svg" },
    { name: "Client D", src: "/logos/client-d.svg" },
    { name: "Client E", src: "/logos/client-e.svg" },
    { name: "Client F", src: "/logos/client-f.svg" },
];

export const SERVICES = [
    {
        title: "Sites vitrines (SEO & conversion)",
        desc:
            "Next.js rapide, Core Web Vitals, messages clairs, blog/MDX, analytics propres.",
    },
    {
        title: "Apps “métier” internes",
        desc:
            "Validation, rôles & droits, reporting, connecteurs ERP/CRM, automatisations (Make/n8n).",
    },
    {
        title: "Apps produit (SaaS, marketplace, portail)",
        desc:
            "Auth, billing, emails, Postgres/Prisma, sécurité — MVP rapide puis montée en gamme.",
    },
    {
        title: "Automatisations & IA appliquée",
        desc:
            "Connecteurs API, webhooks, extraction/résumé, RPA léger. Moins d’erreurs, plus de traçabilité.",
    },
];

export const CASES = [
    {
        title: "Portail client B2B",
        problem: "Onboarding lent, échanges mail, pas de suivi.",
        solution: [
            "Authentification & suivi des demandes",
            "Notifications & exports",
            "Rôles & SLA",
        ],
        impact: "−60% d’emails ; satisfaction client en hausse.",
    },
    {
        title: "App interne de production",
        problem: "Plusieurs Excel, aucune traçabilité.",
        solution: [
            "Base unique et étapes de validation",
            "Rôles, logs, reporting",
            "Connexion ERP",
        ],
        impact: "−35% de délais, visibilité temps réel.",
    },
    {
        title: "Vitrine + blog technique",
        problem: "Site lent, message flou.",
        solution: [
            "Architecture SEO + Core Web Vitals",
            "Contenu orienté bénéfices",
            "Analytics & tracking",
        ],
        impact: "+30–40% de leads qualifiés en 3 mois.",
    },
];

export const TESTIMONIALS = [
    {
        quote:
            "MVP livré en 4 semaines, puis deux itérations — approche hyper pragmatique.",
        author: "Clara M.",
        role: "Fondatrice SaaS",
        logo: "/logos/client-c.svg",
    },
    {
        quote:
            "On a remplacé 5 Excel par une app unique. Moins d’erreurs, tout est tracé.",
        author: "Julien R.",
        role: "Directeur Opérations",
        logo: "/logos/client-a.svg",
    },
];

export const PRICING = [
    {
        name: "Sprint MVP",
        price: "à partir de 3 900€",
        features: [
            "Cadrage précis & KPIs",
            "Livrable en 2–6 semaines",
            "Version utilisable (test réel)",
        ],
        cta: { label: "Démarrer un sprint", href: "#contact" },
        note: "Scope serré, priorisation forte.",
    },
    {
        name: "Évolutions",
        price: "490–570€ / jour",
        features: [
            "Nouvelles features",
            "Optimisations et QA",
            "Itérations guidées par l’usage",
        ],
        cta: { label: "Planifier", href: "#contact" },
    },
];

export const FAQS = [
    {
        q: "Combien de temps avant de voir quelque chose ?",
        a: "Généralement 2–6 semaines pour un MVP testable en production.",
    },
    {
        q: "Et si on veut internaliser ensuite ?",
        a: "Je fournis code, documentation et passation. Le projet vous appartient.",
    },
    {
        q: "Sécurité & RGPD ?",
        a: "Auth robuste, gestion des accès, logs, hébergeurs conformes, minimisation des données.",
    },
];

export const CONTACT = {
    emailLabel: "Écrivez-moi",
    email: "hello@wilden.studio",
    calendlyLabel: "Réserver un créneau",
    calendlyHref: "https://calendly.com/",
};
