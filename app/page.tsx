'use client';

import Navbar from '@/components/Navbar';
import AboutMe from '@/components/AboutMe';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import License from '@/components/License';
import Recommendations from '@/components/Recommendations';
import Contact from '@/components/Contact';
import ClickSpark from '@/components/ui/click-sparks';



export default function Home() {
  return (
    <ClickSpark
      sparkColor="#fff"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      
      <main className="min-h-screen bg-neutral-800 bg-background text-white">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <section id="about">
            <AboutMe />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="licenses">
            <License />
          </section>
          <section id="recommendations">
            <Recommendations />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </div>
      </main>

     
    </ClickSpark>
  );
}
