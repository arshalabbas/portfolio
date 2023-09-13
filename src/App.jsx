import { Home, About, Skills, Contact, Footer } from "./sections";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  //Reveal animation on scroll
  useEffect(() => {
    const toRevealItems = document.querySelectorAll(".to-reveal");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // entry.target.classList.toggle("reveal", entry.isIntersecting);
        if (entry.isIntersecting) entry.target.classList.add("reveal");
      });
    });

    toRevealItems.forEach((el) => observer.observe(el));

    return () => toRevealItems.forEach((el) => observer.unobserve(el));
  }, []);

  //Active the link of the NavBar on scroll
  useEffect(() => {
    const sections = ["home", "about", "skills", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setActiveSection(sectionId);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
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
      <NavBar activeSection={activeSection} />
      <Footer />
    </main>
  );
}
