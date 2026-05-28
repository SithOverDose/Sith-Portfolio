import React, { useState } from 'react'
import { Mail, Calendar, User, MapPin, ExternalLink } from 'lucide-react'

export default function About() {
  const [expanded, setExpanded] = useState(false)

  const aboutData = {
    name: "Sacksith Phommasith",
    age: 22,
    email: "Sacksith@gmail.com",
    dob: "01/01/2001",
    location: "Galaxy, Earth",
    bio: "I'm a passionate developer with a keen interest in creating seamless user experiences and exploring artificial intelligence. I love learning new technologies and applying them to solve real-world problems.",
    fullBio: "With a background in web development and UI/UX design, I've worked on various projects ranging from e-commerce platforms to AI-powered applications. I'm always eager to take on new challenges and collaborate with talented teams to create impactful digital solutions."
  }

  return (
    <section id="about" className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="h-1 w-20 bg-linear-to-r from-purple-600 to-violet-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left side - Image placeholder */}
          <div className="flex justify-center">
            <div className="w-full max-w-sm aspect-square rounded-2xl bg-linear-to-br from-purple-600 to-violet-600 p-1">
              <div className="w-full h-full bg-slate-900 rounded-2xl flex items-center justify-center">
                <User size={120} className="text-purple-400" />
              </div>
            </div>
          </div>

          {/* Right side - Info cards */}
          <div className="space-y-6">
            {/* Main info cards */}
            <div className="bg-purple-600/20 border border-purple-400/50 rounded-lg p-6 hover:border-purple-300 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-4">Personal Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <User className="text-purple-400 shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-gray-400 text-sm">Full Name</p>
                    <p className="text-white font-semibold">{aboutData.name}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Calendar className="text-purple-400 shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-gray-400 text-sm">Age & DOB</p>
                    <p className="text-white font-semibold">{aboutData.age} years old • {aboutData.dob}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="text-purple-400 shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-semibold break-all">{aboutData.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="text-purple-400 shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white font-semibold">{aboutData.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio section */}
            <div className="bg-violet-600/20 border border-violet-400/50 rounded-lg p-6 hover:border-violet-300 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-4">About Me</h3>
              <p className="text-gray-300 leading-relaxed mb-4">{aboutData.bio}</p>
              
              {expanded && (
                <div className="mt-4 pt-4 border-t border-violet-400/30">
                  <p className="text-gray-300 leading-relaxed">{aboutData.fullBio}</p>
                </div>
              )}

              <button 
                onClick={() => setExpanded(!expanded)}
                className="mt-4 inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 transition-colors duration-300 font-semibold"
              >
                {expanded ? 'Show Less' : 'Read More'} <ExternalLink size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
