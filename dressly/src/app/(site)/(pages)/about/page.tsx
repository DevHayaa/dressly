import { Metadata } from "next";
import AboutHero from "@/components/About/AboutHero";
import AboutStory from "@/components/About/AboutStory";
import AboutTeam from "@/components/About/AboutTeam";
import AboutValues from "@/components/About/AboutValues";
import AboutStats from "@/components/About/AboutStats";
import AboutTestimonials from "@/components/About/AboutTestimonials";

export const metadata: Metadata = {
  title: "About Us | Dressly - Premium Ladies Suits Store",
  description: "Learn about Dressly's journey in providing elegant and sophisticated ladies suits. Discover our story, values, and commitment to quality fashion.",
};

const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutStats />
      <AboutTeam />
      <AboutTestimonials />
    </>
  );
};

export default AboutPage;
