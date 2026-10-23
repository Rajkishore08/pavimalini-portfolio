import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Achievements from '@/components/Achievements';
import Education from '@/components/Education';
import Leadership from '@/components/Leadership';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-[#38bdf8] selection:text-[#070e1b]">
      {/* Sticky Floating Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Me Section */}
      <About />

      {/* Work Experience Section */}
      <Experience />

      {/* Featured Projects Section */}
      <Projects />

      {/* Achievements Section */}
      <Achievements />

      {/* Education Section */}
      <Education />

      {/* Leadership & Responsibilities ("Beyond the Code") */}
      <Leadership />

      {/* Skills & Technologies Section (Placed right above Contact) */}
      <Skills />

      {/* Contact Section */}
      <Contact />

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
