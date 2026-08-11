import Nav from "@/components/nav";
import Hero from "@/components/hero";
import FeaturedProjects from "@/components/featured-projects";
import MoreProjects from "@/components/more-projects";
import BusinessProject from "@/components/business-project";
import ContactCta from "@/components/contact-cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <FeaturedProjects />
      <MoreProjects />
      <BusinessProject />
      <ContactCta />
      <Footer />
    </main>
  );
}
