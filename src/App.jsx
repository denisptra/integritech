import { BloomNavbar } from './components/integritech/BloomNavbar';
import { BloomHero } from './components/integritech/BloomHero';
import { BloomAbout } from './components/integritech/BloomAbout';
import { BloomFeatures } from './components/integritech/BloomFeatures';
import { BloomProjects } from './components/integritech/BloomProjects';
import { BloomStats, BloomTeam } from './components/integritech/BloomTeam';
import { BloomProcess } from './components/integritech/BloomProcess';
import { BloomSocial } from './components/integritech/BloomSocial';
import { BloomCTA } from './components/integritech/BloomCTA';
import { BloomFooter } from './components/integritech/BloomFooter';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <a
        href="#services"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <BloomNavbar />

      <main>
        <BloomHero />
        <BloomAbout />
        <BloomFeatures />
        <BloomProjects />
        <BloomStats />
        <BloomTeam />
        <BloomProcess />
        <BloomSocial />
        <BloomCTA />
      </main>

      <BloomFooter />
    </div>
  );
}

export default App;
