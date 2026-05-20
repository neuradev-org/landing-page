import { type JSX } from 'react'

export default function Feature({
  title,
  description,
  icon,
}: {
  title: string
  description: string
  icon: JSX.Element
}) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  )
}
