import { Home, About, Skills, Contact, Footer } from "./sections";
import NavBar from "./components/NavBar";
import { useEffect } from "react";
export default function App() {
  useEffect(() => {
    const toRevealItems = document.querySelectorAll(".to-reveal");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("reveal", entry.isIntersecting);
      });
    });

    toRevealItems.forEach((el) => observer.observe(el));

    return () => toRevealItems.forEach((el) => observer.unobserve(el));
  }, []);
  return (
    <main>
      <section id="home" className="overflow-x-hidden">
        <Home />
      </section>
      <section id="about" className="overflow-x-hidden">
        <About />
      </section>
      <section id="skills" className="py-11 bg-black overflow-x-hidden">
        <Skills />
      </section>
      <section id="contact" className="mb-4 pb-11 bg-white overflow-x-hidden">
        <Contact />
      </section>
      <NavBar />
      <Footer />
    </main>
  );
}
