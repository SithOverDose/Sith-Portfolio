import React, { useState } from 'react'
import { Briefcase, Calendar, MapPin, ChevronDown } from 'lucide-react'

export default function Experience() {
  const [expandedId, setExpandedId] = useState(null)

  const experiences = [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "Tech Innovations Co.",
      location: "Bangkok, Thailand",
      period: "Jan 2023 - Present",
      description: "Developed and maintained multiple React applications with focus on user experience and performance optimization.",
      achievements: [
        "Led frontend redesign that increased user engagement by 35%",
        "Implemented CI/CD pipeline reducing deployment time by 50%",
        "Mentored 3 junior developers in React best practices"
      ]
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Digital Solutions Ltd.",
      location: "Bangkok, Thailand",
      period: "Jun 2022 - Dec 2022",
      description: "Created responsive and interactive web interfaces using React, Tailwind CSS, and modern JavaScript.",
      achievements: [
        "Built reusable component library used across 5+ projects",
        "Optimized website performance achieving 95+ Lighthouse score",
        "Collaborated with UX designers to implement pixel-perfect designs"
      ]
    },
    {
      id: 3,
      title: "Junior Web Developer",
      company: "StartUp Hub",
      location: "Bangkok, Thailand",
      period: "Jan 2022 - May 2022",
      description: "Assisted in developing and debugging web applications, learned industry best practices.",
      achievements: [
        "Fixed 50+ bugs and improved code quality",
        "Created documentation for internal tools",
        "Participated in daily stand-ups and code reviews"
      ]
    }
  ]

  return (
    <section id="experience" className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Experience</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-violet-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="group bg-gradient-to-br from-purple-600/10 to-violet-600/10 border border-purple-400/50 rounded-xl p-6 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-600/20 transition-all duration-300"
            >
              {/* Timeline number */}
              <div className="absolute left-8 top-8 w-10 h-10 bg-gradient-to-br from-purple-600 to-violet-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">{experiences.length - index}</span>
              </div>

              <div className="pl-20">
                {/* Main info */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">{exp.title}</h3>
                    <p className="text-purple-300 font-semibold text-lg">{exp.company}</p>
                  </div>
                </div>

                {/* Meta info */}
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar size={18} className="text-purple-400" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <MapPin size={18} className="text-purple-400" />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-4">{exp.description}</p>

                {/* Expandable achievements */}
                <button
                  onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                  className="flex items-center gap-2 text-purple-300 hover:text-purple-200 font-semibold mb-4 transition-colors"
                >
                  <span>{expandedId === exp.id ? 'Show Less' : 'Key Achievements'}</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${expandedId === exp.id ? 'rotate-180' : ''}`}
                  />
                </button>

                {expandedId === exp.id && (
                  <div className="mt-4 pt-4 border-t border-purple-400/30">
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-300">
                          <span className="text-purple-400 font-bold mt-1">✓</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Timeline visual */}
        <div className="mt-12 relative h-20 flex items-center">
          <div className="absolute left-14 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-violet-600"></div>
        </div>
      </div>
    </section>
  )
}
