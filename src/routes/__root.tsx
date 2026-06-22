import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'
import { Analytics } from '@vercel/analytics/react'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Dipta Saha | Salesforce Automation Developer' },
      {
        name: 'description',
        content:
          'Experienced Salesforce Automation Developer specializing in Apex, Flow Builder, LWC, and CRM solutions. Building scalable enterprise automation systems.',
      },
      {
        name: 'keywords',
        content:
          'Salesforce Developer, Apex, Flow Builder, LWC, Lightning Web Components, Salesforce Admin, CRM, Process Automation',
      },
      { property: 'og:title', content: 'Dipta Saha | Salesforce Automation Developer' },
      {
        property: 'og:description',
        content: 'Expert in Salesforce automation, Apex development, and enterprise integrations.',
      },
      { property: 'og:type', content: 'website' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
        <Analytics />
      </body>
    </html>
  )
}
