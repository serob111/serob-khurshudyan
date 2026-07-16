import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ToptalBadge from "@/components/ToptalBadge";

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />

      <div className="animate-fade-in fixed bottom-4 right-4 z-40 origin-bottom-right scale-[0.6] sm:bottom-6 sm:right-6 sm:scale-75 lg:scale-90">
        <ToptalBadge />
      </div>
    </div>
  );
}
