import Header from "./components/Header";
import Banner from "./components/Banner";
import Experience from "./components/Experience";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

export default function Home(): React.JSX.Element {
  return (
    <main className="min-h-screen bg-indigo-950 text-white">
      <Header />
      <Banner />
      <Skills />
      <About />
        <Experience />
      <Projects />
      <Footer />
    </main>
  );
}
