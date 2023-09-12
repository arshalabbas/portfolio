import { Home, About, Skills, Contact, Footer } from "./sections";
import NavBar from "./components/NavBar";
export default function App() {
  return (
    <main>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills" className="py-11 bg-black">
        <Skills />
      </section>
      <section id="contact" className="mb-4 pb-11 bg-white">
        <Contact />
      </section>
      <NavBar />
      <Footer />
    </main>
  );
}
