import { type JSX } from 'react'
import { CheckCircle } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  icon: JSX.Element
  checklists: string[]
}

export default function ServiceCard({ title, description, icon, checklists }: ServiceCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm hover:shadow-lg dark:shadow-gray-900/50 transition-all duration-300 hover:-translate-y-1">
      <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>
      <ul className="space-y-2">
        {checklists.map((item, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
            <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
