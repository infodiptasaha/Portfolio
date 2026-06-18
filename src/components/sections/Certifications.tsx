import { useState } from 'react'
import { CheckCircle, ExternalLink, X } from 'lucide-react'

interface Certification {
  name: string
  issuer: string
  year: string
  credential: string
  badge: string
  level: string
  verificationUrl: string
}

const certifications: Certification[] = [
  {
    name: 'Reports, Dashboards, and Customer Success in Salesforce',
    issuer: 'Salesforce',
    year: '2026',
    credential: 'JJT5FLPAANRR',
    badge: '📊',
    level: 'CRM & Sales',
    // Salesforce credentials via Trailhead/Coursera verification path
    verificationUrl: 'https://www.coursera.org/account/accomplishments/verify/JJT5FLPAANRR',
  },
  {
    name: 'Sales and CRM Overview',
    issuer: 'Salesforce',
    year: '2026',
    credential: '6YRBLCC4IM14',
    badge: '🤝',
    level: 'CRM & Sales',
    verificationUrl: 'https://www.coursera.org/account/accomplishments/verify/6YRBLCC4IM14',
  },
  {
    name: 'Lead Management in Salesforce',
    issuer: 'Salesforce',
    year: '2026',
    credential: '1NU5L2Z93HA2',
    badge: '🎯',
    level: 'CRM & Sales',
    verificationUrl: 'https://www.coursera.org/account/accomplishments/verify/1NU5L2Z93HA2',
  },
  {
    name: 'Foundations of Business Analysis',
    issuer: 'SAP',
    year: '2026',
    credential: 'UR2XWM4E1W7L',
    badge: '💼',
    level: 'Business Analysis',
    verificationUrl: 'https://www.coursera.org/account/accomplishments/verify/UR2XWM4E1W7L',
  },
  {
    name: 'Introduction to Data Analysis using Microsoft Excel',
    issuer: 'Coursera',
    year: '2026',
    credential: 'OMFLX739V3W8',
    badge: '📈',
    level: 'Data Analysis',
    verificationUrl: 'https://www.coursera.org/account/accomplishments/verify/OMFLX739V3W8',
  }
]

const levelColors: Record<string, string> = {
  'Business Analysis': 'border-blue-300 dark:border-blue-700 bg-blue-50/50 dark:bg-blue-950/20',
  'Data Analysis': 'border-green-300 dark:border-green-700 bg-green-50/50 dark:bg-green-950/20',
  'CRM & Sales': 'border-sky-300 dark:border-sky-700 bg-sky-50/50 dark:bg-sky-950/20'
}

const levelBadgeColors: Record<string, string> = {
  'Business Analysis': 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300',
  'Data Analysis': 'bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300',
  'CRM & Sales': 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-300'
}

export function CertificationsSection() {
  const [activeUrl, setActiveUrl] = useState<string | null>(null)
  const [activeName, setActiveName] = useState<string>('')

  return (
    <section id="certifications" className="section-padding py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-widest">
            Verified Excellence
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mt-2">
            My <span className="text-blue-600 dark:text-blue-400">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4 text-sm md:text-base">
            Professional credentials validating core expertise in data intelligence, systems analysis, and business process automation.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {certifications.map((cert) => (
            <div
              key={cert.credential}
              className={`relative rounded-2xl p-6 border-2 bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col justify-between ${levelColors[cert.level] || ''}`}
            >
              <div>
                {/* Badge Icon */}
                <div className="text-4xl mb-4 text-center select-none">{cert.badge}</div>
                
                <div className="text-center">
                  {/* Title */}
                  <h3 className="font-extrabold text-gray-900 dark:text-white text-base leading-snug mb-2 group-hover:text-blue-600">
                    {cert.name}
                  </h3>
                  
                  {/* Issuer & Date */}
                  <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">
                    {cert.issuer} · {cert.year}
                  </div>
                  
                  {/* Credential ID */}
                  <div className="text-[10px] font-mono text-gray-400 dark:text-gray-500 mb-4">
                    ID: {cert.credential}
                  </div>
                </div>
              </div>

              {/* Actions Element Container */}
              <div className="text-center mt-auto space-y-3">
                <div>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase ${levelBadgeColors[cert.level] || ''}`}
                  >
                    {cert.level}
                  </span>
                </div>

                {/* Show Credential Button */}
                <button
                  onClick={() => {
                    setActiveUrl(cert.verificationUrl)
                    setActiveName(cert.name)
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline transition-all duration-200"
                >
                  Show Credential <ExternalLink size={12} />
                </button>
              </div>

              {/* Verified Badge Checkmark */}
              <div className="absolute top-3 right-3" title="Verified Credential">
                <CheckCircle size={18} className="text-green-500 drop-shadow-sm" />
              </div>
            </div>
          ))}
        </div>

        {/* Iframe Modal Overlay */}
        {activeUrl && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
            <div className="relative w-full max-w-5xl h-[85vh] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-gray-200 dark:border-gray-800 animate-in fade-in zoom-in-95 duration-200">
              
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
                <div className="pr-4 truncate">
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white truncate">
                    {activeName}
                  </h4>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 truncate">
                    {activeUrl}
                  </p>
                </div>
                
                <div className="flex items-center gap-3 shrink-0">
                  <a
                    href={activeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-sm"
                  >
                    Open in New Tab <ExternalLink size={13} />
                  </a>
                  <button
                    onClick={() => {
                      setActiveUrl(null)
                      setActiveName('')
                    }}
                    className="p-1.5 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 bg-gray-200/50 dark:bg-gray-700/50 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Embed Frame Body */}
              <div className="flex-1 bg-gray-100 dark:bg-gray-950 relative">
                {/* Fallback Notice in case platform CSP blocks frame loading */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-0">
                  <p className="text-sm text-gray-600 dark:text-gray-400 max-w-sm mb-4">
                    If Coursera restricts loading directly inside this panel due to security protocols, use the secure link alternative.
                  </p>
                  <a 
                    href={activeUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Launch Official Verification Page →
                  </a>
                </div>

                <iframe
                  src={activeUrl}
                  title="Certificate Verification"
                  className="w-full h-full border-none relative z-10 bg-transparent"
                  allow="autoplay"
                />
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  )
}
