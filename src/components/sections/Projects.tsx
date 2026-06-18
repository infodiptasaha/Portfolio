import { useState } from 'react'
import { ArrowRight, X, CheckCircle2 } from 'lucide-react'

interface Project {
  title: string
  description: string
  technologies: string[]
  results: string[]
  gradient: string
  icon: string
}

const projects: Project[] = [
  {
    title: 'Remark DMS Secondary Application',
    description:
      'End-to-end management of operational deployment and continuous module development to transition complex commercial sales workflows into agile field actions.',
    technologies: ['DMS Ecosystem', 'SFA Tooling', 'Mobile Apps', 'Field Testing'],
    results: ['Eliminated ground bottlenecks', '100% cloud distribution sync', 'Real-time field transparency'],
    gradient: 'from-[#032d60] to-[#1a56db]',
    icon: '📱',
  },
  {
    title: 'Claim Management Module Digitization',
    description:
      'Digitized and optimized the core claim processing cycles, removing slow manual reconciliation risks to streamline corporate financial settlements.',
    technologies: ['Process Automation', 'Financial Auditing', 'Module Design'],
    results: ['Manual errors removed', 'Faster distributor settlement', 'Full financial accountability'],
    gradient: 'from-purple-600 to-purple-800',
    icon: '🔄',
  },
  {
    title: 'Credit Management & Approval Workflow',
    description:
      'Engineered an automated credit monitoring and verification system to evaluate outstanding balances and dynamically manage risk limits across the distribution channels.',
    technologies: ['Risk Controls', 'Approval Routing', 'Data Structuring'],
    results: ['Minimized bad debt risks', 'Automated limit updates', 'Optimized approval time'],
    gradient: 'from-emerald-600 to-emerald-800',
    icon: '🛡️',
  },
  {
    title: 'Infrastructure & Database Route Mapping',
    description:
      'Spearheaded the redesign and dynamic routing of master data setups, mapping territory configurations and outlets for maximized market coverage.',
    technologies: ['Master Data Management', 'Route Mapping', 'Inventory Sync'],
    results: ['Seamless sales coverage', '100% outlet trace accuracy', 'Structured warehouse matching'],
    gradient: 'from-orange-600 to-orange-800',
    icon: '🌐',
  },
  {
    title: 'Ecosystem Change Management & Training',
    description:
      'Led massive onboarding initiatives across multiple corporate hierarchies (RSD, ASD, TM, SO, and Distributors) ensuring 100% alignment and application compliance.',
    technologies: ['Change Management', 'User Adoption', 'Field Quality Assurance'],
    results: ['98%+ user system adoption', 'High platform compliance', 'Frictionless tech onboarding'],
    gradient: 'from-teal-600 to-teal-800',
    icon: '👥',
  }
]

export function ProjectsSection() {
  // State to track which project is currently opened in the modal
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="section-padding py-20 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mt-2">
            Featured <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4 text-sm md:text-base">
            Real-world enterprise solutions delivering measurable impact across the Remark Sales Automation infrastructure.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="group rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
            >
              {/* Visual header */}
              <div
                className={`h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden flex-shrink-0`}
              >
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                  }}
                />
                <div className="text-6xl relative z-10 group-hover:scale-110 transition-transform duration-300 select-none">
                  {project.icon}
                </div>
                <div className="absolute top-4 right-4 text-white/40 text-xs font-mono">
                  #{String(idx + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Content Wrapper */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  {/* Title */}
                  <h3 className="font-extrabold text-lg text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies / Tools Used */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-md text-[11px] font-medium border border-blue-100/60 dark:border-blue-800/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Operational Results / Key Highlights */}
                  <div className="space-y-1.5 mb-6">
                    {project.results.map((result) => (
                      <div
                        key={result}
                        className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                        <span className="font-medium">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Case Study Button */}
                <button 
                  onClick={() => setActiveProject(project)}
                  className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 text-xs md:text-sm font-bold hover:gap-2.5 transition-all w-fit mt-auto group-hover:underline"
                >
                  View Case Study <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal Overlay */}
      {activeProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setActiveProject(null)}
        >
          {/* Modal Container */}
          <div 
            className="bg-white dark:bg-gray-900 w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800 max-h-[90vh] flex flex-col transform transition-all animate-scale-in"
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the modal
          >
            {/* Modal Header Banner */}
            <div className={`p-8 bg-gradient-to-br ${activeProject.gradient} text-white relative`}>
              <button 
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
              <div className="text-4xl mb-3">{activeProject.icon}</div>
              <h3 className="text-2xl font-black tracking-tight">{activeProject.title}</h3>
              <p className="text-white/80 text-xs mt-1 uppercase tracking-wider font-semibold">Case Study Analysis</p>
            </div>

            {/* Modal Content Body */}
            <div className="p-6 md:p-8 overflow-y-auto space-y-6 context-style">
              {/* Overview */}
              <div>
                <h4 className="text-xs uppercase font-bold tracking-wider text-gray-400 dark:text-gray-500 mb-2">
                  Project Overview
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                  {activeProject.description}
                </p>
              </div>

              {/* Technologies / Frameworks */}
              <div>
                <h4 className="text-xs uppercase font-bold tracking-wider text-gray-400 dark:text-gray-500 mb-2.5">
                  Engineered Infrastructure & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg text-xs font-semibold border border-gray-200/50 dark:border-gray-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Measurable Impact / Outcomes */}
              <div>
                <h4 className="text-xs uppercase font-bold tracking-wider text-gray-400 dark:text-gray-500 mb-3">
                  Key Metrics & Results
                </h4>
                <div className="grid sm:grid-cols-1 gap-2.5">
                  {activeProject.results.map((result) => (
                    <div 
                      key={result}
                      className="flex items-start gap-3 p-3 rounded-xl bg-green-50/50 dark:bg-green-950/10 border border-green-100/50 dark:border-green-900/20"
                    >
                      <CheckCircle2 size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">
                        {result}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-gray-50 dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 flex justify-end">
              <button
                onClick={() => setActiveProject(null)}
                className="px-5 py-2 bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 font-bold text-xs md:text-sm rounded-xl transition-colors shadow-sm"
              >
                Close Case Study
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
