import React, { useState } from 'react'
import { Code2, Palette, Zap, Brain, Users, Target } from 'lucide-react'

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('technical')

  const skillsData = {
    technical: {
      icon: Code2,
      title: "Technical Skills",
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript/TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Node.js", level: 80 },
        { name: "HTML/CSS", level: 92 },
        { name: "Git & GitHub", level: 85 }
      ]
    },
    design: {
      icon: Palette,
      title: "UI/UX Design",
      skills: [
        { name: "Figma", level: 85 },
        { name: "UI Design", level: 88 },
        { name: "Prototyping", level: 82 },
        { name: "Color Theory", level: 80 },
        { name: "Wireframing", level: 87 },
        { name: "User Research", level: 78 }
      ]
    },
    ai: {
      icon: Brain,
      title: "AI & Machine Learning",
      skills: [
        { name: "Python", level: 75 },
        { name: "TensorFlow", level: 70 },
        { name: "AI Integration", level: 72 },
        { name: "Data Analysis", level: 75 },
        { name: "Prompt Engineering", level: 80 },
        { name: "NLP Basics", level: 68 }
      ]
    },
    soft: {
      icon: Users,
      title: "Soft Skills",
      skills: [
        { name: "Communication", level: 88 },
        { name: "Team Collaboration", level: 90 },
        { name: "Problem Solving", level: 87 },
        { name: "Time Management", level: 85 },
        { name: "Creativity", level: 89 },
        { name: "Leadership", level: 82 }
      ]
    }
  }

  const categories = Object.keys(skillsData)
  const current = skillsData[activeCategory]
  const IconComponent = current.icon

  return (
    <section id="skills" className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-linear-to-r from-purple-600 to-violet-600 mx-auto rounded-full"></div>
        </div>

        {/* Category selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {categories.map((category) => {
            const Icon = skillsData[category].icon
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`p-4 rounded-lg transition-all duration-300 flex flex-col items-center gap-2 ${
                  activeCategory === category
                    ? 'bg-purple-600 border border-purple-400 text-white shadow-lg shadow-purple-600/50'
                    : 'bg-purple-600/20 border border-purple-400/50 text-purple-300 hover:border-purple-400'
                }`}
              >
                <Icon size={24} />
                <span className="text-xs md:text-sm font-semibold capitalize text-center">{category}</span>
              </button>
            )
          })}
        </div>

        {/* Skills display */}
        <div className="bg-linear-to-br from-purple-600/20 to-violet-600/20 border border-purple-400/50 rounded-2xl p-8 md:p-12">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-linear-to-br from-purple-600 to-violet-600 rounded-lg">
              <IconComponent size={32} className="text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white">{current.title}</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {current.skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">{skill.name}</span>
                  <span className="text-purple-300 text-sm font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-linear-to-r from-purple-600 to-violet-600 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary stats */}
        <div className="grid grid-cols-3 gap-4 mt-12">
          <div className="bg-purple-600/20 border border-purple-400/50 rounded-lg p-6 text-center hover:border-purple-300 transition-all">
            <p className="text-3xl md:text-4xl font-bold text-purple-400">20+</p>
            <p className="text-gray-400 text-sm mt-2">Technologies</p>
          </div>
          <div className="bg-violet-600/20 border border-violet-400/50 rounded-lg p-6 text-center hover:border-violet-300 transition-all">
            <p className="text-3xl md:text-4xl font-bold text-violet-400">15+</p>
            <p className="text-gray-400 text-sm mt-2">Projects</p>
          </div>
          <div className="bg-pink-600/20 border border-pink-400/50 rounded-lg p-6 text-center hover:border-pink-300 transition-all">
            <p className="text-3xl md:text-4xl font-bold text-pink-400">2+</p>
            <p className="text-gray-400 text-sm mt-2">Years XP</p>
          </div>
        </div>
      </div>
    </section>
  )
}
