import { useState } from 'react'
import { CheckCircle, ExternalLink, X, Award, ShieldCheck } from 'lucide-react'

interface Certification {
  name: string
  issuer: string
  year: string
  credential: string
  badge: string
  level: string
  verificationUrl: string
  skills?: string[]
}

const certifications: Certification[] = [
  {
    name: 'Reports, Dashboards, and Customer Success in Salesforce',
    issuer: 'Salesforce',
    year: '2026',
    credential: 'JJT5FLPAANRR',
    badge: '📊',
    level: 'CRM & Sales',
    verificationUrl: 'https://www.coursera.org/account/accomplishments/verify/JJT5FLPAANRR',
    skills: ['Data Visualization', 'Performance Reporting']
  },
  {
    name: 'Sales and CRM Overview',
    issuer: 'Salesforce',
    year: '2026',
    credential: '6YRBLCC4IM14',
    badge: '🤝',
    level: 'CRM & Sales',
    verificationUrl: 'https://www.coursera.org/account/accomplishments/verify/6YRBLCC4IM14',
    skills: ['Sales Operations', 'Customer Data Management']
  },
  {
    name: 'Lead Management in Salesforce',
    issuer: 'Salesforce',
    year: '2026',
    credential: '1NU5L2Z93HA2',
    badge: '🎯',
    level: 'CRM & Sales',
    verificationUrl: 'https://www.coursera.org/account/accomplishments/verify/1NU5L2Z93HA2',
    skills: ['Sales Development', 'Promotions and Campaigns']
  },
  {
    name: 'Foundations of Business Analysis',
    issuer: 'SAP',
    year: '2026',
    credential: 'UR2XWM4E1W7L',
    badge: '💼',
    level: 'Business Analysis',
    verificationUrl: 'https://www.coursera.org/account/accomplishments/verify/UR2XWM4E1W7L',
    skills: ['Business Analysis', 'Business Analysis Tools']
  },
  {
    name: 'Introduction to Data Analysis using Microsoft Excel',
    issuer: 'Coursera',
    year: '2026',
    credential: 'OMFLX739V3W8',
    badge: '📈',
    level: 'Data Analysis',
    verificationUrl: 'https://www.coursera.org/account/accomplishments/verify/OMFLX739V3W8',
    skills: ['Excel Data Analytics', 'Spreadsheets']
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
  const [activeCert, setActiveCert] = useState<Certification | null>(null)

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
                  <h3 className="font-extrabold text-gray-900 dark:text-white text-base leading-snug mb-2">
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

                {/* Show Certificate Button */}
                <button
                  onClick={() => setActiveCert(cert)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline transition-all duration-200"
                >
                  Show Certificate <ExternalLink size={12} />
                </button>
              </div>

              {/* Verified Badge Checkmark */}
              <div className="absolute top-3 right-3" title="Verified Credential">
                <CheckCircle size={18} className="text-green-500 drop-shadow-sm" />
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Secure Verification Modal */}
        {activeCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md transition-all">
            <div className="relative w-full max-w-xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-800 animate-in fade-in zoom-in-95 duration-200">
              
              {/* Close Button */}
              <button
                onClick={() => setActiveCert(null)}
                className="absolute top-4 right-4 p-1.5 z-10 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 bg-gray-100 dark:bg-gray-800 rounded-full transition-colors"
              >
                <X size={18} />
              </button>

              {/* Modal Body - Designed as an elegant Certificate Preview */}
              <div className="p-8 pt-10 text-center flex flex-col items-center">
                
                {/* Visual Graphic Element */}
                <div className="relative mb-6 flex items-center justify-center w-20 h-20 bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 rounded-full border-4 border-blue-100 dark:border-blue-900">
                  <Award size={40} className="stroke-[1.5]" />
                  <div className="absolute -bottom-1 -right-1 bg-green-500 text-white p-1 rounded-full border-2 border-white dark:border-gray-900">
                    <ShieldCheck size={14} />
                  </div>
                </div>

                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-[10px] font-bold tracking-widest uppercase rounded-md mb-3">
                  Verified Security Link
                </span>

                <h3 className="text-xl font-black text-gray-900 dark:text-white max-w-md leading-snug mb-2">
                  {activeCert.name}
                </h3>

                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-1">
                  Issued by {activeCert.issuer} · {activeCert.year}
                </p>

                <p className="text-[11px] font-mono text-gray-400 dark:text-gray-500 mb-6">
                  Credential ID: {activeCert.credential}
                </p>

                {/* Validated Skills tags inside modal */}
                {activeCert.skills && (
                  <div className="mb-8 w-full border-t border-b border-gray-100 dark:border-gray-800 py-4">
                    <span className="block text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">
                      Validated Skills
                    </span>
                    <div className="flex flex-wrap justify-center gap-1.5">
                      {activeCert.skills.map((skill) => (
                        <span key={skill} className="px-2.5 py-1 text-xs font-medium bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md border border-gray-200/60 dark:border-gray-700/50">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Main Secure Action Button */}
                <a
                  href={activeCert.verificationUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 font-bold text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 duration-150"
                >
                  Verify on Coursera Portal <ExternalLink size={15} />
                </a>

                <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-4 max-w-xs">
                  To secure user data, Coursera prevents direct site embedding. Clicking above routes safely via secure SSL directly to your accomplishment dashboard.
                </p>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  )
}
