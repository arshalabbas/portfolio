import { Home, About, Skills, Contact } from "./sections";

export default function App() {
  return (
    <main>
      <section>
        <Home />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Skills />
      </section>
      <section>
        <Contact />
      </section>
    </main>
  );
}
