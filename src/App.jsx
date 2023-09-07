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
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <NavBar />
      <Footer />
    </main>
  );
}
