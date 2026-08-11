import Nav from "@/components/nav";
import Hero from "@/components/hero";
import FeaturedProjects from "@/components/featured-projects";
import MoreProjects from "@/components/more-projects";
import BusinessProject from "@/components/business-project";
import ContactCta from "@/components/contact-cta";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <FeaturedProjects />
      <MoreProjects />
      <BusinessProject />
      <ContactCta />

      <p className="site-copyright">
        © 2026 Portfolio. All rights reserved.
      </p>
    </main>
  );
}
