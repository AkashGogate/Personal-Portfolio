import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Accomplishments from "@/components/Accomplishments";
import FeaturedProject from "@/components/FeaturedProject";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Accomplishments />
      <FeaturedProject />
      <Projects />
      <Skills />
    </main>
  );
}
