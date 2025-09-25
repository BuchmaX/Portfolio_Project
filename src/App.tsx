import { DarkModeProvider } from './components/DarkModeProvider';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CaseStudies } from './components/CaseStudies';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <DarkModeProvider>
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
        <Header />
        <main>
          <Hero />
          <CaseStudies />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </DarkModeProvider>
  );
}