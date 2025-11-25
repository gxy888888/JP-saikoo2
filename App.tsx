import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CompanyProfile } from './components/CompanyProfile';
import { Services } from './components/Services';
import { Strengths } from './components/Strengths';
import { CEOProfile } from './components/CEOProfile';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>
        
        <section id="about" className="py-20 bg-white">
          <CompanyProfile />
        </section>

        <section id="services" className="py-20 bg-slate-50">
          <Services />
        </section>

        <section id="strengths" className="py-20 bg-white">
          <Strengths />
        </section>

        <section id="ceo" className="py-20 bg-slate-50">
          <CEOProfile />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;