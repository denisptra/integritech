import { useState } from 'react';
import { BloomNavbar } from './components/integritech/BloomNavbar';
import { BloomHero } from './components/integritech/BloomHero';
import { BloomAbout } from './components/integritech/BloomAbout';
import { BloomFeatures } from './components/integritech/BloomFeatures';
import { BloomProjects } from './components/integritech/BloomProjects';
import { BloomStats, BloomTeam } from './components/integritech/BloomTeam';
import { BloomProcess } from './components/integritech/BloomProcess';
import { BloomCTA } from './components/integritech/BloomCTA';
import { BloomFooter } from './components/integritech/BloomFooter';

function App() {
  const [lang, setLang] = useState('en');

  return (
    <div className="min-h-screen bg-white">
      <a
        href="#services"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <BloomNavbar lang={lang} setLang={setLang} />

      <main>
        <BloomHero lang={lang} />
        <BloomAbout lang={lang} />
        <BloomFeatures lang={lang} />
        <BloomProjects lang={lang} />
        <BloomStats lang={lang} />
        <BloomTeam lang={lang} />
        <BloomProcess lang={lang} />
        <BloomCTA lang={lang} />
      </main>

      <BloomFooter lang={lang} />
    </div>
  );
}

export default App;
