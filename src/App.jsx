import { useState } from 'react'
import './App.css'
import Navbar from './assets/component/sections/Navbar'
import Hero from './assets/component/sections/Hero'
import About from './assets/component/sections/About'
import Skills from './assets/component/sections/Skills'
import Experience from './assets/component/sections/Experience'
import Certificates from './assets/component/sections/Certificates'
import Projects from './assets/component/sections/Projects'
import Contact from './assets/component/sections/Contact'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen overflow-x-hidden">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Certificates />
      {/* <Projects /> */}
      <Contact />
      
      {/* Footer */}
      <footer className="bg-slate-900 border-t border-purple-400/20 py-8 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-gray-400">
            &copy; 2024 Sith. All rights reserved. Made with <span className="text-purple-400">♥</span> using React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
