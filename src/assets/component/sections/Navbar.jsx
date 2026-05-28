import { Code, User, Phone, FlaskConical, Award, Briefcase, Download, Home } from 'lucide-react';
import React from 'react'

export default function Navbar({ activeSection, setActiveSection }) {

    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    const link = [
        { name: "Home", icon: <Home size={15} />, id: "home" },
        { name: "About", icon: <User size={15} />, id: "about" },
        { name: "Skills", icon: <FlaskConical size={15} />, id: "skills" },
        { name: "Experience", icon: <Briefcase size={15} />, id: "experience" },
        { name: "Certificates", icon: <Award size={15} />, id: "certificates" },
        { name: "Contact", icon: <Phone size={15} />, id: "contact" }
    ]

    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            setActiveSection(id)
            setMobileMenuOpen(false)
        } else if (id === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' })
            setActiveSection(id)
            setMobileMenuOpen(false)
        }
    }

    return (
        <nav className='sticky top-0 z-50 w-full transition-all duration-300 border-b border-white/10 bg-purple-950/95 backdrop-blur-md'>

            <div className="max-w-6xl mx-auto flex items-center justify-between h-[70px] px-4">
                {/* Logo */}
                <button 
                    onClick={() => scrollToSection('home')}
                    className="flex items-center gap-2.5 no-underline cursor-pointer hover:opacity-80 transition-opacity"
                >
                    <div>
                        <Code size={28} color='white' />
                    </div>
                    <span className="text-white text-[15px] font-bold tracking-wide">Sith</span>
                    <span className="text-yellow-400 font-bold">.Dev</span>
                </button>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0">
                    <li>
                        <button className="flex items-center gap-1 px-4 py-2 rounded-lg border border-white/50 bg-transparent hover:bg-white/10 transition-all duration-200 cursor-pointer text-purple-200 hover:text-white">
                            <Download size={15} /> Resume
                        </button>
                    </li>

                    {link.map(({ name, icon, id }) => (
                        <li key={name} className="">
                            <button 
                                onClick={() => scrollToSection(id)}
                                className={`relative flex items-center gap-1 px-3.5 py-3 
                        text-sm rounded-lg no-underline transition-all duration-300
                        ${activeSection === id ? 'text-white bg-purple-600/30' : 'text-white/50 hover:text-white'}`}
                            >
                                {icon}{name}

                                {activeSection === id && (
                                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-purple-400 rounded-full animate-pulse" />
                                )}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden flex flex-col gap-1.5 cursor-pointer"
                >
                    <div className={`w-6 h-0.5 bg-white transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                    <div className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></div>
                    <div className={`w-6 h-0.5 bg-white transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-purple-900/95 border-t border-white/10 py-4 animate-slide-up">
                    <ul className="flex flex-col gap-2 list-none m-0 p-4">
                        {link.map(({ name, icon, id }) => (
                            <li key={name} className="w-full">
                                <button 
                                    onClick={() => scrollToSection(id)}
                                    className={`w-full flex items-center gap-2 px-4 py-3 
                            text-sm rounded-lg no-underline transition-all duration-300
                            ${activeSection === id ? 'text-white bg-purple-600' : 'text-white/70 hover:text-white'}`}
                                >
                                    {icon}{name}
                                </button>
                            </li>
                        ))}
                        <li className="w-full pt-2 border-t border-white/10">
                            <button className="w-full flex items-center justify-center gap-1 px-4 py-3 rounded-lg border border-white/50 bg-transparent hover:bg-white/10 transition-all duration-200 cursor-pointer text-purple-200 hover:text-white">
                                <Download size={15} /> Resume
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    )
}
