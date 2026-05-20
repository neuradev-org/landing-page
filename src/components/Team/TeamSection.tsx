import type { Translations } from '../../translations'
import TeamCard, { type TeamMember } from './TeamCard'

export default function TeamSection({ t }: { t: Translations }) {
  const members: TeamMember[] = [
    {
      name: 'Nicolás Chávez',
      role: t.aiEngineer,
      desc: t.nicolasDesc,
      linkedin: 'https://www.linkedin.com/in/nicolas-leonardo-chavez/',
    },
    {
      name: 'Tomás Álvarez',
      role: t.softwareEngineer,
      desc: t.tomasDesc,
      linkedin: 'https://www.linkedin.com/in/tomas-i-alvarez-03xyza/',
    },
    {
      name: 'Sebastián Zafra',
      role: t.devopsEngineer,
      desc: t.sebastianDesc,
      linkedin: 'https://www.linkedin.com/in/sebastian-zafra/',
    },
  ]

  return (
    <section id="team" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t.team}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t.teamIntro}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {members.map((m) => (
            <TeamCard key={m.name} member={m} />
          ))}
        </div>
      </div>
    </section>
  )
}


