import { Linkedin } from 'lucide-react'

export interface TeamMember {
  name: string
  role: string
  desc: string
  linkedin: string
}

export default function TeamCard({ member }: { member: TeamMember }) {
  return (
    <a
      href={member.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-900 shadow-sm transition-all hover:shadow-xl hover:-translate-y-0.5 hover:border-blue-500/60 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
    >
      <div className="pointer-events-none absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <div className="flex items-center justify-center bg-blue-400/90 dark:bg-blue-500/90 rounded-full p-3 text-white shadow-lg">
          <Linkedin className="w-6 h-6" />
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{member.name}</h3>
      <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{member.role}</p>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{member.desc}</p>
    </a>
  )
}


