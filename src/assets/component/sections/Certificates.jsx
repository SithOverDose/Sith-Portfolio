import React, { useState } from 'react'
import { Award, ExternalLink, Calendar } from 'lucide-react'

export default function Certificates() {
  const [expandedId, setExpandedId] = useState(null)

  const certificates = [
    {
      id: 1,
      title: "Professional React Developer",
      issuer: "Udemy",
      date: "Dec 2023",
      credentialId: "UC-XXXXX",
      description: "Advanced React patterns, hooks, state management, and performance optimization.",
      details: "Completed comprehensive course covering React 18 features, Context API, Redux, and modern development practices. Built 5+ production-ready applications.",
      link: "#"
    },
    {
      id: 2,
      title: "Full Stack Web Development",
      issuer: "Codecademy",
      date: "Aug 2023",
      credentialId: "CC-XXXXX",
      description: "Complete stack from frontend to backend with databases and APIs.",
      details: "Mastered HTML, CSS, JavaScript, Node.js, Express, MongoDB, and SQL. Developed full-stack e-commerce platform.",
      link: "#"
    },
    {
      id: 3,
      title: "UI/UX Design Fundamentals",
      issuer: "Google Design",
      date: "May 2023",
      credentialId: "GD-XXXXX",
      description: "User research, wireframing, prototyping, and design systems.",
      details: "Learned design thinking methodology, conducted user interviews, created high-fidelity prototypes in Figma, and built comprehensive design systems.",
      link: "#"
    },
    {
      id: 4,
      title: "AI & Machine Learning Basics",
      issuer: "Coursera",
      date: "Feb 2023",
      credentialId: "CR-XXXXX",
      description: "Introduction to AI, neural networks, and practical machine learning applications.",
      details: "Completed modules on supervised learning, neural networks, computer vision, and NLP. Implemented 3+ ML projects with Python.",
      link: "#"
    },
    {
      id: 5,
      title: "Google Cloud Associate Developer",
      issuer: "Google Cloud",
      date: "Nov 2022",
      credentialId: "GCP-XXXXX",
      description: "Cloud platform expertise and deployment best practices.",
      details: "Certified in Google Cloud Platform services, cloud development, and DevOps practices.",
      link: "#"
    }
  ]

  return (
    <section id="certificates" className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Certificates & Credentials</h2>
          <div className="h-1 w-20 bg-linear-to-r from-purple-600 to-violet-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="group bg-linear-to-br from-purple-600/20 to-violet-600/20 border border-purple-400/50 rounded-xl overflow-hidden hover:border-purple-300 hover:shadow-lg hover:shadow-purple-600/20 transition-all duration-300"
            >
              {/* Header */}
              <div className="p-6 bg-linear-to-r from-purple-600/30 to-violet-600/30 border-b border-purple-400/30">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-linear-to-br from-purple-600 to-violet-600 rounded-lg">
                    <Award size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-purple-300 font-semibold">{cert.issuer}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Date and ID */}
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar size={16} className="text-purple-400" />
                    <span className="text-sm">{cert.date}</span>
                  </div>
                  <div className="text-gray-400 text-sm">
                    ID: <span className="text-purple-300 font-semibold">{cert.credentialId}</span>
                  </div>
                </div>

                {/* Main description */}
                <p className="text-gray-300 text-sm mb-4">{cert.description}</p>

                {/* Expandable details */}
                {expandedId === cert.id && (
                  <div className="mt-4 pt-4 border-t border-purple-400/30">
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{cert.details}</p>
                  </div>
                )}

                {/* Toggle button and link */}
                <div className="flex gap-2">
                  <button
                    onClick={() => setExpandedId(expandedId === cert.id ? null : cert.id)}
                    className="flex-1 px-4 py-2 text-sm font-semibold text-purple-300 hover:text-purple-200 bg-purple-600/20 hover:bg-purple-600/40 rounded-lg transition-all duration-300"
                  >
                    {expandedId === cert.id ? 'Show Less' : 'Show More'}
                  </button>
                  <button className="flex-1 px-4 py-2 text-sm font-semibold text-white bg-linear-to-r from-purple-600 to-violet-600 hover:shadow-lg hover:shadow-purple-600/50 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                    <ExternalLink size={16} />
                    <span>View</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-4">
          <div className="bg-purple-600/20 border border-purple-400/50 rounded-lg p-6 text-center hover:border-purple-300 transition-all">
            <p className="text-3xl font-bold text-purple-400">{certificates.length}</p>
            <p className="text-gray-400 text-sm mt-2">Certificates</p>
          </div>
          <div className="bg-violet-600/20 border border-violet-400/50 rounded-lg p-6 text-center hover:border-violet-300 transition-all">
            <p className="text-3xl font-bold text-violet-400">100%</p>
            <p className="text-gray-400 text-sm mt-2">Completed</p>
          </div>
          <div className="bg-pink-600/20 border border-pink-400/50 rounded-lg p-6 text-center hover:border-pink-300 transition-all">
            <p className="text-3xl font-bold text-pink-400">5+</p>
            <p className="text-gray-400 text-sm mt-2">Platforms</p>
          </div>
        </div>
      </div>
    </section>
  )
}
