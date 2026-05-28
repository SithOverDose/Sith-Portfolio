import React from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4 pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-violet-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600/20 border border-purple-400/50">
          <Sparkles size={18} className="text-purple-400" />
          <span className="text-sm font-medium text-purple-300">Welcome to my portfolio</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
          Hi, I'm <span className="bg-linear-to-r from-purple-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">Sith</span>
        </h1>

        <p className="text-lg md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Full-Stack Developer | UI/UX Enthusiast | AI Learner
        </p>

        <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-base md:text-lg">
          I craft beautiful and functional digital experiences. Specializing in modern web technologies, AI integration, and user-centered design.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <button className="px-8 py-3 bg-linear-to-r from-purple-600 to-violet-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-600/50 transition-all duration-300 flex items-center gap-2">
            View My Work <ArrowRight size={20} />
          </button>
          <button className="px-8 py-3 border border-purple-400/50 text-purple-300 font-semibold rounded-lg hover:bg-purple-600/20 transition-all duration-300">
            Download CV
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
