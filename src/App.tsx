/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import CelestialBackground from './components/CelestialBackground';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="relative min-h-screen">
      <CelestialBackground />
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Gallery />
      </main>

      <Contact />
    </div>
  );
}
