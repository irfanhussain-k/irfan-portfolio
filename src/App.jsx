import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Architecture from "./sections/Architecture";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Architecture />
        <Experience />
        <Projects />
        <Resume />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
