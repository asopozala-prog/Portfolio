"use client";

import Nav from "@/components/nav";
import Hero from "@/components/hero";
import FeaturedProjects from "@/components/featured-projects";
import MoreProjects from "@/components/more-projects";
import BusinessProject from "@/components/business-project";
import ContactCta from "@/components/contact-cta";
import { PortfolioLanguageProvider, usePortfolioLanguage } from "@/components/portfolio-language-context";
import { portfolioCopy } from "@/components/portfolio-copy";

function PortfolioHomeContent() {
  const { language } = usePortfolioLanguage();

  return (
    <main>
      <Nav />
      <Hero />
      <FeaturedProjects />
      <MoreProjects />
      <BusinessProject />
      <ContactCta />

      <p className="site-copyright">{portfolioCopy[language].copyright}</p>
    </main>
  );
}

export default function Home() {
  return (
    <PortfolioLanguageProvider>
      <PortfolioHomeContent />
    </PortfolioLanguageProvider>
  );
}
