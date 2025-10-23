import {Header} from "@/sections/Header";

export const dynamic = 'force-static';
export const revalidate = 3600; // régénère au plus 1x/heure si besoin

import Badge from "@/components/Badge";
import Button from "@/components/Button";
import CaseStudyCard from "@/components/CaseStudyCard";
import Container from "@/components/Container";
import FAQ from "@/components/FAQ";
import FeatureItem from "@/components/FeatureItem";
import LogoCloud from "@/components/LogoCloud";
import PricingCard from "@/components/PricingCard";
import Section from "@/components/Section";
import Stat from "@/components/Stat";
import {
  HERO, LOGOS, SERVICES, CASES, TESTIMONIALS, PRICING, FAQS, CONTACT,
} from "@/libs/constants";

export default function Page() {
  return (
      <main className="overflow-hidden">

        <Header />

        <header className="section bg-amber-200" role="banner" aria-label="En-tête">
          <Container>
            <div className="flex flex-col items-start gap-6 bg-blue-300">
              <Badge>{HERO.eyebrow}</Badge>
              <h1 className="h1 text-balance">{HERO.title}</h1>
              <p className="muted max-w-2xl">{HERO.subtitle}</p>
              <div className="flex flex-wrap items-center gap-3">
                <Button href={HERO.primaryCta.href}>{HERO.primaryCta.label}</Button>
                <Button variant="ghost" href={HERO.secondaryCta.href}>
                  {HERO.secondaryCta.label}
                </Button>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-6 w-full max-w-xl">
                {HERO.stats.map((s) => (
                    <Stat key={s.kpi} kpi={s.kpi} label={s.label} />
                ))}
              </div>
            </div>
          </Container>
        </header>

        <main id="main" role="main">
          {/* LOGO CLOUD */}
          <Section id="logos" className="pt-0">
            <LogoCloud logos={LOGOS} />
          </Section>

          {/* SERVICES */}
          <Section id="services">
            <div className="flex items-center justify-between gap-6">
              <div>
                <div className="eyebrow">Ce que je fais</div>
                <h2 className="h2 mt-2">Sites, apps & automatisations</h2>
              </div>
              <a href="#contact" className="btn btn-ghost">Parler de votre projet</a>
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              {SERVICES.map((f) => (
                  <div key={f.title} className="card">
                    <FeatureItem title={f.title} desc={f.desc} />
                  </div>
              ))}
            </div>
          </Section>

          {/* METHOD */}
          <Section id="method" className="bg-neutral-50">
            <div className="eyebrow">Méthode</div>
            <h2 className="h2 mt-2">Du besoin au livrable en semaines</h2>
            <div className="mt-6 grid md:grid-cols-4 gap-6">
              {[
                { t: "1. Diagnostic express", d: "Objectif, périmètre, KPIs. Gratuit." },
                { t: "2. Sprint MVP", d: "Livrable utilisable en 2–6 semaines." },
                { t: "3. Itérations", d: "Améliorations guidées par l’usage réel." },
                { t: "4. Scale & passation", d: "Perf, sécurité, doc — vous êtes propriétaire." },
              ].map((x) => (
                  <div key={x.t} className="card">
                    <div className="font-medium">{x.t}</div>
                    <div className="text-sm text-neutral-600 mt-2">{x.d}</div>
                  </div>
              ))}
            </div>
          </Section>

          {/* CASE STUDIES */}
          <Section id="cases">
            <div className="eyebrow">Résultats concrets</div>
            <h2 className="h2 mt-2">Mini cas clients</h2>
            <div className="mt-6 grid md:grid-cols-3 gap-6">
              {CASES.map((c) => <CaseStudyCard key={c.title} {...c} />)}
            </div>
          </Section>

          {/* TESTIMONIALS */}
          <Section id="testimonials" className="bg-neutral-50">
            <div className="eyebrow">Ils en parlent</div>
            <h2 className="h2 mt-2">Témoignages</h2>
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              {TESTIMONIALS.map((t) => (
                  <div key={t.author} className="card">
                    <div className="prose-min text-neutral-900">&ldquo;{t.quote}&rdquo;</div>
                    <div className="mt-4 flex items-center gap-3">
                      {t.logo ? <img src={t.logo} alt="" className="h-6 w-auto opacity-80" /> : null}
                      <div className="text-sm">
                        <div className="font-medium">{t.author}</div>
                        <div className="text-neutral-600">{t.role}</div>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </Section>

          {/* PRICING */}
          <Section id="pricing">
            <div className="eyebrow">Transparence</div>
            <h2 className="h2 mt-2">Tarifs indicatifs</h2>
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              {PRICING.map((p) => <PricingCard key={p.name} tier={p} />)}
            </div>
          </Section>

          {/* FAQ */}
          <Section id="faq" className="bg-neutral-50">
            <div className="eyebrow">FAQ</div>
            <h2 className="h2 mt-2">Questions fréquentes</h2>
            <div className="mt-6">
              <FAQ items={FAQS} />
            </div>
          </Section>

          {/* CONTACT / CTA */}
          <Section id="contact" aria-label="Contact">
            <div className="card glass">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <div className="eyebrow">Prêt à gagner des semaines ?</div>
                  <h3 className="h3 mt-1">Diagnostic gratuit de 20 min</h3>
                  <p className="muted mt-2 max-w-xl">
                    Vous repartez avec un plan d’action concret et priorisé.
                  </p>
                </div>
                <div className="flex gap-3">
                  <a className="btn btn-primary" href={CONTACT.calendlyHref} rel="noopener noreferrer">
                    {CONTACT.calendlyLabel}
                  </a>
                  <a className="btn btn-ghost" href={`mailto:${CONTACT.email}`}>
                    {CONTACT.emailLabel}
                  </a>
                </div>
              </div>
            </div>
          </Section>
        </main>

        <footer className="py-8 border-t border-neutral-200" role="contentinfo">
          <Container>
            <div className="text-sm text-neutral-600">
              © {new Date().getFullYear()} Wilden Studio — Tous droits réservés.
            </div>
          </Container>
        </footer>
  </main>
  );
}
