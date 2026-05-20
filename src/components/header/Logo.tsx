import { Brain } from 'lucide-react'

export default function Logo() {
  return (
    <a href="#home">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-emerald-500 rounded-lg flex items-center justify-center">
          <Brain className="w-5 h-5 text-white" />
        </div>
        <span className="text-xl font-bold text-gray-900 dark:text-white">Neuradev</span>
      </div>
    </a>
  )
}
