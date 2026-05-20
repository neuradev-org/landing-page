import { Brain, Zap, Cog } from 'lucide-react'
import type { Translations } from '../../translations'
import ServiceCard from './ServiceCard'

export default function Services({ t }: { t: Translations }) {
  return (
    <section
      id="services"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300 min-h-screen flex items-center"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.whatWeDo}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t.whatWeDoDescription}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            title={t.aiDevelopment}
            description={t.aiDevelopmentDesc}
            icon={<Brain className="w-7 h-7 text-blue-600" />}
            checklists={[t.machineLearning, t.nlp, t.predictiveAnalytics]}
          />
          <ServiceCard
            title={t.smartAutomation}
            description={t.smartAutomationDesc}
            icon={<Zap className="w-7 h-7 text-emerald-600" />}
            checklists={[t.processAutomation, t.workflowOptimization, t.integrationSolutions]}
          />
          <ServiceCard
            title={t.customSolutions}
            description={t.customSolutionsDesc}
            icon={<Cog className="w-7 h-7 text-purple-600" />}
            checklists={[t.webApplications, t.apiDevelopment, t.systemIntegration]}
          />
        </div>
      </div>
    </section>
  )
}
