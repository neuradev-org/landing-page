import type { Translations } from '../../translations'

export default function GetStarted({
  handleEmailClick,
  t,
}: {
  handleEmailClick: () => void
  t: Translations
}) {
  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={handleEmailClick}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-200 hover:shadow-lg"
      >
        {t.getStarted}
      </button>
    </div>
  )
}
