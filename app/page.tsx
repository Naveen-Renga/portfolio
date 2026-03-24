import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ProjectsSection } from "@/components/projects-section"
import { GithubSection } from "@/components/github-section"
import { TeamSection } from "@/components/team-section"
import { TechStackSection } from "@/components/tech-stack-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <GithubSection />
      <TeamSection />
      <TechStackSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
