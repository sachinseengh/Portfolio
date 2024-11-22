import React, { useState, useEffect } from 'react';
import { Cloud, renderSimpleIcon } from 'react-icon-cloud';
import { 
  siJavascript, siTailwindcss, siReact, siSpring, siSpringboot, siPython, 
  siWordpress, siBootstrap, siFigma, siHtml5, siCss3, siC, siPhp, siDotnet 
} from 'simple-icons/icons';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Project from './components/Project';
import Contact from './components/Contact';
import { useTypewriter } from 'react-simple-typewriter';

// IconCloud Component
const IconCloud = () => {
  // Array of icons to display
  const icons = [
    siJavascript, siTailwindcss, siReact, siSpring, siSpringboot, siPython,
    siWordpress, siBootstrap, siFigma, siHtml5, siCss3, siC, siPhp, siDotnet
  ].map(icon => renderSimpleIcon({ icon, size: 142 }));


  

  return (
  <div>
    <div  className="mt-11" style={{ height: '80vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Cloud options={{
        depth: 0.8,  // Increase depth for a more dynamic effect
        initialSpeed: 0.4,  // Set a speed for automatic rotation
        maxSpeed: 0.2,      // Ensure it keeps spinning automatically
        keepRollingAfterMouseOut: true,  // Continue spinning after mouse moves away
        wheelZoom: false,  // Disable zooming with scroll
        dragControl: false, // Prevent drag interaction to keep it spinning continuously
        clickToFront: false // Disable zoom effect when icons are clicked
      }}>
        {icons}
      </Cloud>
      
    </div>
    <div className='text-center justify-center'>
      <h1 className='text-blue-400 '>Loading......</h1>
    </div>
    </div>
  );
};

// Main Content Component
const MainContent = () => (
  <div className='container mx-auto px-6 lg:px-10 z-10 relative'>
    <NavBar />
    <Hero />
    <About />
    <Technologies />
    <Experience />
    <Project />
    <Contact />
  </div>
);

function App() {
  const [showIconCloud, setShowIconCloud] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIconCloud(false);
    }, 2000); // Show IconCloud for 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='overflow-x-hidden antialiased text-neutral-300'>
      {/* Gridded Background with Solid Color */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 bg-slate-950">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] blur-md"></div>
      </div>

      {/* Main Content or Icon Cloud */}
      {showIconCloud ? (
        <div className="relative z-10">
          <IconCloud />
        </div>
      ) : (
        <MainContent />
      )}
    </div>
  );
}

export default App;
