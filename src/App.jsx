import { Navbar } from './components/integritech/Navbar';
import { Hero } from './components/integritech/Hero';
import { Services } from './components/integritech/Services';
import { Projects } from './components/integritech/Projects';
import { About } from './components/integritech/About';
import { Team } from './components/integritech/Team';
import { Process } from './components/integritech/Process';
import { Social } from './components/integritech/Social';
import { CTA } from './components/integritech/CTA';
import { Footer } from './components/integritech/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <a
        href="#services"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <Navbar />

      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <Team />
        <Process />
        <Social />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;
