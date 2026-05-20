import type { Language } from '../hooks/useLanguage'

export interface Translations {
  // Header
  about: string
  services: string
  whyChooseUs: string
  getStarted: string
  team: string

  // Team Section
  teamIntro: string
  aiEngineer: string
  softwareEngineer: string
  devopsEngineer: string
  nicolasDesc: string
  tomasDesc: string
  sebastianDesc: string

  // Hero Section
  heroTagline: string
  heroTitle1: string
  heroTitle2: string
  heroDescription: string
  sendMessage: string
  bookMeeting: string

  // About Section
  whoWeAre: string
  whoWeAreDescription: string
  pioneersTitle: string
  pioneersDescription1: string
  pioneersDescription2: string
  aiFirst: string
  aiFirstDesc: string
  lightningFast: string
  lightningFastDesc: string

  // Services Section
  whatWeDo: string
  whatWeDoDescription: string
  aiDevelopment: string
  aiDevelopmentDesc: string
  smartAutomation: string
  smartAutomationDesc: string
  customSolutions: string
  customSolutionsDesc: string
  machineLearning: string
  nlp: string
  predictiveAnalytics: string
  processAutomation: string
  workflowOptimization: string
  integrationSolutions: string
  webApplications: string
  apiDevelopment: string
  systemIntegration: string

  // Why Choose Us Section
  whyChooseUsTitle: string
  whyChooseUsDescription: string
  innovationFirst: string
  innovationFirstDesc: string
  maximumEfficiency: string
  maximumEfficiencyDesc: string
  fastResults: string
  fastResultsDesc: string

  // CTA Section
  ctaTitle: string
  ctaDescription: string

  // Footer
  readyToStart: string
  footerText: string
}

const translations: Record<Language, Translations> = {
  en: {
    // Header
    about: 'About',
    services: 'Services',
    whyChooseUs: 'Why Choose Us',
    getStarted: 'Get Started',
    team: 'Team',

    // Team Section
    teamIntro: 'A complementary group of specialists taking your AI projects to production.',
    aiEngineer: 'AI Engineer',
    softwareEngineer: 'Software Engineer',
    devopsEngineer: 'DevOps Engineer',
    nicolasDesc:
      'Leads the construction of AI agents, LLM orchestration (tools, function calling), production-grade RAG, and continuous quality evaluation.',
    tomasDesc:
      'Full‑stack expert focused on robust API design, automated testing, performance, and solid architecture practices.',
    sebastianDesc:
      'AWS specialist in Infrastructure as Code, CI/CD, observability, security, and high availability in production.',

    // Hero Section
    heroTagline: 'AI-Powered Development & Automation',
    heroTitle1: 'Build Smarter.',
    heroTitle2: 'Automate Everything.',
    heroDescription:
      'We transform your business with cutting-edge AI solutions and intelligent automation. Get faster results, reduce costs, and stay ahead of the competition.',
    sendMessage: 'Send us a message',
    bookMeeting: 'Book a meeting',

    // About Section
    whoWeAre: 'Who We Are',
    whoWeAreDescription:
      'A forward-thinking team of AI specialists and automation experts dedicated to revolutionizing how businesses operate in the digital age.',
    pioneersTitle: 'Pioneers in AI Innovation',
    pioneersDescription1:
      "We're not just developers – we're visionaries who see the transformative power of artificial intelligence and automation. Our mission is to make cutting-edge technology accessible to businesses of all sizes.",
    pioneersDescription2:
      "With a fresh perspective and deep technical expertise, we focus on delivering solutions that don't just work today, but evolve with your business tomorrow.",
    aiFirst: 'AI-First',
    aiFirstDesc: 'Every solution powered by intelligent automation',
    lightningFast: 'Lightning Fast',
    lightningFastDesc: 'Rapid development and deployment cycles',

    // Services Section
    whatWeDo: 'What We Do',
    whatWeDoDescription:
      'From AI-powered applications to intelligent automation systems, we create solutions that transform your business operations.',
    aiDevelopment: 'AI Development',
    aiDevelopmentDesc:
      'Custom AI solutions including machine learning models, natural language processing, and intelligent data analysis systems tailored to your needs.',
    smartAutomation: 'Smart Automation',
    smartAutomationDesc:
      'Intelligent workflow automation that learns and adapts, eliminating repetitive tasks and optimizing your business processes for maximum efficiency.',
    customSolutions: 'Custom Solutions',
    customSolutionsDesc:
      'Bespoke applications and systems designed specifically for your unique business requirements, built with scalability and future growth in mind.',
    machineLearning: 'Machine Learning Models',
    nlp: 'Natural Language Processing',
    predictiveAnalytics: 'Predictive Analytics',
    processAutomation: 'Process Automation',
    workflowOptimization: 'Workflow Optimization',
    integrationSolutions: 'Integration Solutions',
    webApplications: 'Web Applications',
    apiDevelopment: 'API Development',
    systemIntegration: 'System Integration',

    // Why Choose Us Section
    whyChooseUsTitle: 'Why Choose Us',
    whyChooseUsDescription:
      'We combine innovation with reliability to deliver exceptional results that drive your business forward.',
    innovationFirst: 'Innovation First',
    innovationFirstDesc:
      'We stay at the forefront of AI and automation technology, ensuring you always have access to the latest and most effective solutions.',
    maximumEfficiency: 'Maximum Efficiency',
    maximumEfficiencyDesc:
      'Our solutions are designed to maximize efficiency and minimize waste, helping you achieve more with less effort and resources.',
    fastResults: 'Fast Results',
    fastResultsDesc:
      'We believe in rapid implementation and quick wins. See measurable improvements in your business operations within weeks, not months.',

    // CTA Section
    ctaTitle: 'Ready to Transform Your Business?',
    ctaDescription:
      "Let's discuss how AI and automation can revolutionize your operations. Get started with a free consultation today.",

    // Footer
    readyToStart: 'Ready to get started?',
    footerText: '© 2025 AIFlow. Building the future with intelligent automation.',
  },

  es: {
    // Header
    about: 'Acerca de',
    services: 'Servicios',
    whyChooseUs: 'Por Qué Elegirnos',
    getStarted: 'Comenzar',
    team: 'Equipo',

    // Team Section
    teamIntro:
      'Un grupo complementario de especialistas que llevan tus proyectos de IA a producción.',
    aiEngineer: 'Ingeniero de IA',
    softwareEngineer: 'Ingeniero de Software',
    devopsEngineer: 'Ingeniero DevOps',
    nicolasDesc:
      'Responsable de construcción de agentes de IA, orquestación de LLMs (tools, function calling), RAG productivo y evaluación continua de calidad.',
    tomasDesc:
      'Experto full‑stack en diseño de APIs robustas, pruebas automatizadas, rendimiento y buenas prácticas de arquitectura.',
    sebastianDesc:
      'Especialista en AWS, Infraestructura como Código, CI/CD, observabilidad, seguridad y alta disponibilidad en producción.',

    // Hero Section
    heroTagline: 'Desarrollo y Automatización Impulsados por IA',
    heroTitle1: 'Construye Más Inteligente.',
    heroTitle2: 'Automatiza Todo.',
    heroDescription:
      'Transformamos tu negocio con soluciones de IA de vanguardia y automatización inteligente. Obtén resultados más rápidos, reduce costos y mantente por delante de la competencia.',
    sendMessage: 'Envíanos un mensaje',
    bookMeeting: 'Reservar una reunión',

    // About Section
    whoWeAre: 'Quiénes Somos',
    whoWeAreDescription:
      'Un equipo de Ingenieros de Software, expertos en IA y automatización dedicados a revolucionar la forma en que las empresas operan en la era digital.',
    pioneersTitle: 'Ingenieros de IA',
    pioneersDescription1:
      'No somos solo desarrolladores – somos visionarios que ven el poder transformador de la inteligencia artificial y la automatización. Nuestra misión es llevar la IA a todas las empresas, haciéndola accesible para todos.',
    pioneersDescription2:
      'Con una perspectiva fresca y profunda experiencia técnica, nos enfocamos en entregar soluciones que no solo funcionan hoy, sino que evolucionan con tu negocio mañana.',
    aiFirst: 'IA Primero',
    aiFirstDesc: 'Cada solución impulsada por automatización inteligente',
    lightningFast: 'Súper Rápido',
    lightningFastDesc: 'Ciclos rápidos de desarrollo e implementación',

    // Services Section
    whatWeDo: 'Qué Hacemos',
    whatWeDoDescription:
      'Desde aplicaciones impulsadas por IA hasta sistemas de automatización inteligente, creamos soluciones que transforman las operaciones de tu negocio.',
    aiDevelopment: 'Desarrollo de IA',
    aiDevelopmentDesc:
      'Soluciones de IA personalizadas incluyendo modelos de aprendizaje automático, procesamiento de lenguaje natural y sistemas de análisis de datos inteligentes adaptados a tus necesidades.',
    smartAutomation: 'Automatización Inteligente',
    smartAutomationDesc:
      'Automatización de flujos de trabajo inteligente que aprende y se adapta, eliminando tareas repetitivas y optimizando tus procesos de negocio para máxima eficiencia.',
    customSolutions: 'Soluciones Personalizadas',
    customSolutionsDesc:
      'Aplicaciones y sistemas a medida diseñados específicamente para tus requisitos únicos de negocio, construidos con escalabilidad y crecimiento futuro en mente.',
    machineLearning: 'Modelos de Aprendizaje Automático',
    nlp: 'Procesamiento de Lenguaje Natural',
    predictiveAnalytics: 'Análisis Predictivo',
    processAutomation: 'Automatización de Procesos',
    workflowOptimization: 'Optimización de Flujos de Trabajo',
    integrationSolutions: 'Soluciones de Integración',
    webApplications: 'Aplicaciones Web',
    apiDevelopment: 'Desarrollo de APIs',
    systemIntegration: 'Integración de Sistemas',

    // Why Choose Us Section
    whyChooseUsTitle: 'Por Qué Elegirnos',
    whyChooseUsDescription:
      'Combinamos innovación con confiabilidad para entregar resultados excepcionales que impulsan tu negocio hacia adelante.',
    innovationFirst: 'Innovación Primero',
    innovationFirstDesc:
      'Nos mantenemos a la vanguardia de la tecnología de IA y automatización, asegurando que siempre tengas acceso a las soluciones más recientes y efectivas.',
    maximumEfficiency: 'Máxima Eficiencia',
    maximumEfficiencyDesc:
      'Nuestras soluciones están diseñadas para maximizar la eficiencia y minimizar el desperdicio, ayudándote a lograr más con menos esfuerzo y recursos.',
    fastResults: 'Resultados Rápidos',
    fastResultsDesc:
      'Creemos en la implementación rápida y victorias tempranas. Ve mejoras medibles en las operaciones de tu negocio en semanas, no meses.',

    // CTA Section
    ctaTitle: '¿Listo para Transformar tu Negocio?',
    ctaDescription:
      'Hablemos sobre cómo la IA y automatización pueden revolucionar tus operaciones. Comienza con una consulta gratuita hoy.',

    // Footer
    readyToStart: '¿Listo para comenzar?',
    footerText: '© 2025 AIFlow. Construyendo el futuro con automatización inteligente.',
  },
}

export const getTranslations = (language: Language): Translations => {
  return translations[language] || translations.en
}
