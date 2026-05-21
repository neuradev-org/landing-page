import type { Language } from '../hooks/useLanguage'

export type VerticalId =
  | 'contable'
  | 'inmobiliaria'
  | 'juridico'
  | 'ecommerce'
  | 'clinica'
  | 'gimnasio'
  | 'taller'
  | 'academia'

export interface NavT {
  problem: string
  build: string
  recommender: string
  process: string
  diagnostic: string
  langLabel: string
}

export interface HeroT {
  badgeNew: string
  badge: string
  titleA: string
  titleB: string
  titleC: string
  desc1: string
  desc2: string
  desc3: string
  ctaPrimary: string
  ctaSecondary: string
  trust: string
  tryLabel: string
  marqueeTitle: string
  marqueeItems: string[]
}

export interface ProblemFailT {
  title: string
  desc: string
}

export interface ProblemT {
  eyebrow: string
  title1: string
  title2: string
  subtitle: string
  failLabel: string
  fails: ProblemFailT[]
  solveLabel: string
  solveText1: string
  solveText2: string
}

export interface WhatWeBuildT {
  eyebrow: string
  title1: string
  title2: string
  subtitle: string
  tabAgents: string
  tabInternal: string
}

export interface VerticalT {
  id: VerticalId
  label: string
  tagline: string
  bullets: string[]
  note?: string
  kpi: { value: string; label: string }
}

export interface AgentsT {
  eyebrow: string
  title1: string
  title2: string
  subtitle: string
  useCaseLabel: string
  ctaCard: string
  metaTags: [string, string][]
  verticals: VerticalT[]
}

export interface CategoryT {
  tag: string
  title: string
  desc: string
  items: string[]
}

export interface InternalT {
  eyebrow: string
  title1: string
  title2: string
  subtitle: string
  pipelineLabel: string
  pipelineInput: string
  pipelineProcess: string
  pipelineOutput: string
  pipelineInputs: string[]
  pipelineOutputs: string[]
  categories: CategoryT[]
  footnote: string
}

export interface RecommenderT {
  eyebrow: string
  title1: string
  title2: string
  subtitle: string
  inputLabel: string
  placeholder: string
  designing: string
  generate: string
  tryExample: string
  examples: string[]
  emptyTitle: string
  emptyDesc: string
  emptyPower: string
  loadTitle: string
  loadDesc: string
  errorTitle: string
  errorMsg: string
  errorCta: string
  readyLabel: string
  whatItSolves: string
  integrations: string
  firstStepLabel: string
  resultCta: string
  adjust: string
}

export interface ProcessStepT {
  title: string
  desc: string
  duration: string
}

export interface ProcessT {
  eyebrow: string
  title1: string
  title2: string
  subtitle: string
  avgTime: string
  steps: ProcessStepT[]
}

export interface DiagnosticT {
  title1: string
  title2: string
  title3: string
  desc1: string
  desc2: string
  desc3: string
  bullets: string[]
  formTitle: string
  formSubtitle: string
  nameLabel: string
  namePlaceholder: string
  emailLabel: string
  emailPlaceholder: string
  bizLabel: string
  bizOptions: [string, string][]
  submit: string
  orWriteUs: string
  sentTitle: string
  sentDesc1: string
  sentDescYourMail: string
  sentDesc2: string
}

export interface FooterT {
  tagline: string
  cta: string
  servicesTitle: string
  servicesLinks: [string, string][]
  contactTitle: string
  region: string
  hours: string
  copy: string
  privacy: string
  terms: string
  version: string
}

export interface AgentScriptMsgT {
  from: 'lead' | 'agent' | 'system'
  text: string
  delay: number
  typing?: number
}

export interface AgentScriptT {
  label: string
  subtitle: string
  title: string
  messages: AgentScriptMsgT[]
}

export interface AgentDemoT {
  online: string
  today: string
  hint: string
  tag: string
  responseFooter: string
  scripts: Record<VerticalId, AgentScriptT>
}

export interface Translations {
  code: Language
  nav: NavT
  hero: HeroT
  problem: ProblemT
  whatWeBuild: WhatWeBuildT
  agents: AgentsT
  internal: InternalT
  recommender: RecommenderT
  process: ProcessT
  diagnostic: DiagnosticT
  footer: FooterT
  agentDemo: AgentDemoT
  recommenderPrompt: (biz: string) => string
}

const es: Translations = {
  code: 'es',
  nav: {
    problem: 'El problema',
    build: 'Lo que hacemos',
    recommender: 'Recomendador',
    process: 'Cómo trabajamos',
    diagnostic: 'Diagnóstico gratis',
    langLabel: 'ES',
  },
  hero: {
    badgeNew: 'NUEVO',
    badge: 'AI Agents para PyMEs · Disponibles ahora',
    titleA: 'Automatizá tu negocio',
    titleB: 'sin contratar',
    titleC: 'un equipo tech.',
    desc1: 'Construimos ',
    desc2: 'AI Agents a medida',
    desc3: ' que responden, califican, agendan e integran — para estudios contables, inmobiliarias, clínicas y comercios que pierden ventas por no responder a tiempo.',
    ctaPrimary: 'Reservá tu diagnóstico — 30 min, gratis',
    ctaSecondary: 'Ver cómo funciona',
    trust: 'Sin equipo técnico interno requerido',
    tryLabel: 'Probá un agente →',
    marqueeTitle: 'Construido para PyMEs en LATAM',
    marqueeItems: ['Estudios contables', 'Inmobiliarias', 'Clínicas', 'E-commerce', 'Estudios jurídicos', 'Talleres', 'Gimnasios', 'Academias'],
  },
  problem: {
    eyebrow: '01 / El problema',
    title1: 'La mayoría de los “AI Agents” que vas a ver en LinkedIn',
    title2: 'fallan en producción.',
    subtitle: 'Después de meses construyendo agentes para negocios reales, identificamos los tres motivos por los que el 90% no llega a generar plata.',
    failLabel: 'Falla',
    fails: [
      { title: 'No se integra con tus herramientas', desc: 'Un agente que vive aislado de tu CRM, tu WhatsApp Business o tu calendario es un chatbot caro. Sirve para impresionar, no para vender.' },
      { title: 'No aprende de tu negocio', desc: 'Las plantillas genéricas suenan a plantilla. Si no toma tus respuestas reales, tus precios reales y tus procesos reales — el cliente lo nota en el primer mensaje.' },
      { title: 'No escala con vos', desc: 'Funciona para 10 consultas por semana y se cae a 100. O al revés: cuesta más mantenerlo que el problema que resuelve.' },
    ],
    solveLabel: 'Cómo lo resolvemos',
    solveText1: 'Construimos agentes artesanales, no plantillas.',
    solveText2: ' Cada uno integrado a las herramientas que ya usás (WhatsApp, Gmail, CRM, Calendar), entrenado con tus respuestas reales, y monitoreado en producción.',
  },
  whatWeBuild: {
    eyebrow: '03 / Lo que construimos',
    title1: 'Agentes que atienden a tus clientes.',
    title2: 'Automatizaciones que limpian tu back-office.',
    subtitle: 'Elegí el lado que más te duele. Podés empezar por uno y sumar el otro después.',
    tabAgents: 'Para tus clientes',
    tabInternal: 'Para tu operación',
  },
  agents: {
    eyebrow: '02 / Agentes que atienden clientes',
    title1: 'Un AI Agent no es un chatbot.',
    title2: 'Es un trabajador automatizado que opera dentro de tu negocio.',
    subtitle: 'Responde, califica, agenda, integra — cara al cliente. Elegí tu vertical para ver el caso de uso concreto.',
    useCaseLabel: 'Caso de uso',
    ctaCard: 'Reservá tu diagnóstico',
    metaTags: [
      ['Integra', 'WhatsApp · Gmail · CRM'],
      ['Aprende', 'De tus respuestas reales'],
      ['Escala', '10 → 10.000 mensajes'],
      ['Monitorea', 'Evals en producción'],
    ],
    verticals: [
      { id: 'contable', label: 'Estudio contable', tagline: 'Responde, recuerda vencimientos, agenda.',
        bullets: ['Responde consultas de monotributo y AFIP', 'Recordatorios automáticos de vencimientos', 'Agenda reuniones con el contador', 'Captura datos para recategorizaciones'],
        kpi: { value: '−18hrs', label: 'liberadas por semana en la administración' } },
      { id: 'inmobiliaria', label: 'Inmobiliaria', tagline: 'Filtra leads, agenda visitas, escala solo lo que vale.',
        bullets: ['Filtra consultas por garantía, presupuesto y zona', 'Agenda visitas en el calendario del agente', 'Captura lead data en el CRM', 'Escala a humano solo si hay match real'],
        kpi: { value: '3.4×', label: 'más visitas agendadas vs. respuesta manual' } },
      { id: 'juridico', label: 'Estudio jurídico', tagline: 'FAQ, califica el caso, agenda primera consulta.',
        bullets: ['FAQ con horarios, áreas, honorarios', 'Califica el área del caso (laboral, familia, comercial)', 'Agenda primera consulta paga', 'Envía formulario de preparación previo'],
        note: 'Nunca da asesoramiento legal — flujo administrativo únicamente.',
        kpi: { value: '+42%', label: 'tasa de show en primera consulta' } },
      { id: 'ecommerce', label: 'Local / E-commerce', tagline: 'Responde stock, sugiere, toma pedidos por WhatsApp.',
        bullets: ['Responde stock y precios en tiempo real', 'Sugiere productos según consulta', 'Toma pedidos por WhatsApp', 'Escala a humano para cerrar la venta'],
        kpi: { value: '< 8 seg', label: 'tiempo de primera respuesta · 24/7' } },
      { id: 'clinica', label: 'Clínica / Consultorio', tagline: 'Turnos, confirmación 24h, FAQ de coberturas.',
        bullets: ['Reserva y reagenda turnos', 'Confirmación automática 24h antes (reduce no-shows)', 'FAQ de coberturas y preparación', 'Libera a la secretaria para tareas críticas'],
        kpi: { value: '−65%', label: 'no-shows con confirmación 24h' } },
      { id: 'gimnasio', label: 'Gimnasio / Estudio', tagline: 'Vende membresías, agenda clases de prueba.',
        bullets: ['Responde precios y planes 24/7', 'Agenda clase de prueba gratis', 'Convierte lead en membresía activa', 'Recordatorios de renovación'],
        kpi: { value: '×2.1', label: 'tasa de conversión de consulta a prueba' } },
      { id: 'taller', label: 'Taller / Servicio técnico', tagline: 'Turnos, presupuestos automáticos, recordatorios.',
        bullets: ['Cotiza service y reparaciones', 'Agenda turnos con disponibilidad real', 'Notifica cuando el trabajo está listo', 'Recordatorios de próximo service'],
        kpi: { value: '+38%', label: 'turnos cerrados vs. respuesta manual' } },
      { id: 'academia', label: 'Academia / Escuela', tagline: 'Info de cursos, inscripciones, clases demo.',
        bullets: ['Responde info de cursos, niveles y horarios', 'Agenda clase demo o evaluación de nivel', 'Procesa inscripciones y pagos', 'Recordatorios de inicio de curso'],
        kpi: { value: '+52%', label: 'inscripciones vs. respuesta sólo por mail' } },
    ],
  },
  internal: {
    eyebrow: '03 / Más allá de los chatbots',
    title1: 'Automatizamos lo que',
    title2: 'tu equipo hace a mano.',
    subtitle: 'No todo agente atiende clientes. Procesamos PDFs, leemos logs, generamos reportes y reconciliamos facturas — para que tu equipo deje de copy-pastear y vuelva a pensar.',
    pipelineLabel: 'PIPELINE EN VIVO',
    pipelineInput: 'Entrada',
    pipelineProcess: 'Procesamiento AI',
    pipelineOutput: 'Salida',
    pipelineInputs: ['Facturas PDF', 'Emails', 'Imágenes', 'Logs', 'PRs en GitHub'],
    pipelineOutputs: ['Excel limpio', 'Tickets ruteados', 'KPIs en dashboard', 'Alerta a Slack', 'Review en PR'],
    categories: [
      { tag: 'DATA', title: 'Datos no estructurados → estructurados',
        desc: 'PDFs, imágenes, emails y respuestas de APIs convertidos en data limpia, validada y lista para usar.',
        items: ['PDF / imagen → Excel o base de datos', 'Clasificación y ruteo de documentos al equipo correcto', 'Resúmenes de múltiples documentos en cascada', 'Normalización de respuestas de APIs a tu schema interno'] },
      { tag: 'REPORTES', title: 'Reportes & dashboards',
        desc: 'KPIs que se actualizan solos, board packs que se arman solos, research competitivo que llega cada lunes.',
        items: ['KPIs y dashboards en tiempo real', 'Reportes ejecutivos semanales y mensuales', 'Research competitivo y scraping automatizado', 'Generación de board packs y actas'] },
      { tag: 'CALIDAD', title: 'Calidad, alertas & anomalías',
        desc: 'Sistemas que detectan el problema antes que vos, revisan código antes de mergear, y validan data antes de que entre.',
        items: ['Detección de anomalías en logs y métricas', 'Code review automático en PRs (estilo, seguridad, coverage)', 'Sweeps de calidad y validación de data', 'Alertas inteligentes antes que humanas'] },
      { tag: 'OPS', title: 'Back-office & operaciones',
        desc: 'El trabajo invisible que mueve la empresa — enriquecer leads, reconciliar facturas, onboardear clientes — sin las 8 horas de Excel.',
        items: ['Enriquecimiento de leads y CRM (size, rol, stack)', 'Reconciliación de facturas y gastos vs. OC', 'Onboarding automatizado de empleados y clientes', 'Workflows entre Sheets, Notion, Slack, Drive'] },
    ],
    footnote: '¿Tu caso de uso no encaja en ninguna categoría? Probá el recomendador AI más abajo o reservá un diagnóstico.',
  },
  recommender: {
    eyebrow: '02 / Empezá por acá',
    title1: 'Describí lo que hacés.',
    title2: 'Te diseñamos el agente.',
    subtitle: 'Contanos en 1 o 2 líneas qué hace tu negocio y el recomendador AI propone un agente a medida — capacidades, integraciones y la primera automatización. Después mirá lo que construimos para confirmarlo.',
    inputLabel: 'Tu negocio',
    placeholder: 'Ej: Tengo una panadería, recibo pedidos por WhatsApp todo el día y se me mezclan con consultas de precios y horarios.',
    designing: 'Diseñando…',
    generate: 'Generar mi agente',
    tryExample: 'O probá un ejemplo',
    examples: [
      'Tengo una veterinaria, me llaman todo el día por turnos y precios y se me escapan ventas.',
      'Soy CEO de una agencia de marketing y perdemos tiempo respondiendo briefs iniciales.',
      'Manejo una distribuidora de bebidas, los clientes piden por WhatsApp y se mezclan pedidos.',
    ],
    emptyTitle: 'Tu agente aparecerá acá',
    emptyDesc: 'Generamos una propuesta concreta con las capacidades, integraciones y el primer proceso a automatizar — ajustado a tu negocio.',
    emptyPower: 'Powered by AI · Respuesta en ~10 seg',
    loadTitle: 'Diseñando tu agente',
    loadDesc: 'Analizando tu negocio, identificando procesos y cruzando con casos similares en nuestra base…',
    errorTitle: 'Ups, algo falló',
    errorMsg: 'No pudimos generar la recomendación. Probá de nuevo o reservá un diagnóstico directamente.',
    errorCta: 'Reservá tu diagnóstico',
    readyLabel: 'Recomendación AI',
    whatItSolves: 'Qué resuelve',
    integrations: 'Se integra con',
    firstStepLabel: 'Primer paso · mes 1',
    resultCta: 'Reservá tu diagnóstico',
    adjust: 'Ajustar',
  },
  process: {
    eyebrow: '04 / Cómo trabajamos',
    title1: 'De primera reunión a producción',
    title2: 'en 4 semanas.',
    subtitle: 'No vendemos un PoC bonito para tu próximo board deck. Vendemos un agente funcionando con clientes reales, integrado a las herramientas que ya usás.',
    avgTime: 'Tiempo promedio · 28 días',
    steps: [
      { title: 'Entendemos tu negocio', desc: 'Diagnóstico de 30 min para mapear procesos, volumen de consultas y herramientas actuales.', duration: 'Semana 1' },
      { title: 'Mapeamos el proceso a automatizar', desc: 'Identificamos el cuello de botella con mayor ROI y lo aislamos en un flujo concreto.', duration: 'Semana 1' },
      { title: 'Construimos el agente', desc: 'Lo entrenamos con tus respuestas reales, tus precios reales, tu tono. No plantillas.', duration: 'Semanas 2–3' },
      { title: 'Integramos con tus herramientas', desc: 'WhatsApp Business, Gmail, CRM, Calendar, Sheets — lo que ya uses, no algo nuevo que aprender.', duration: 'Semana 3' },
      { title: 'Iteramos en producción', desc: 'Monitoreo continuo con evaluaciones automáticas. Ajustes semanales con datos reales del primer mes.', duration: 'Semana 4+' },
    ],
  },
  diagnostic: {
    title1: 'Diagnóstico gratis.',
    title2: '30 minutos.',
    title3: 'Una recomendación concreta.',
    desc1: 'Te dedicamos 30 min para identificar ',
    desc2: 'qué proceso conviene automatizar primero',
    desc3: ' en tu negocio. Te vas con un plan concreto, automatices con nosotros o no.',
    bullets: [
      'Mapeo del proceso con mayor ROI en tu operación',
      'Estimación realista de tiempo, costo y resultado esperado',
      'Sin compromiso · sin pitch · sin pérdida de tiempo',
    ],
    formTitle: 'Reservá tu llamada',
    formSubtitle: 'Te respondemos en menos de 24hs',
    nameLabel: 'Nombre',
    namePlaceholder: 'Tu nombre',
    emailLabel: 'Mail',
    emailPlaceholder: 'vos@negocio.com',
    bizLabel: 'Tipo de negocio',
    bizOptions: [
      ['contable', 'Estudio contable'],
      ['inmobiliaria', 'Inmobiliaria'],
      ['juridico', 'Estudio jurídico'],
      ['ecommerce', 'Local / E-commerce'],
      ['clinica', 'Clínica / Consultorio'],
      ['otro', 'Otro'],
    ],
    submit: 'Reservar diagnóstico',
    orWriteUs: 'O escribinos a',
    sentTitle: '¡Listo!',
    sentDesc1: 'Te escribimos a ',
    sentDescYourMail: 'tu mail',
    sentDesc2: ' en menos de 24hs.',
  },
  footer: {
    tagline: 'Automatizamos procesos con AI para PyMEs en LATAM. Sin que necesites un equipo tech interno.',
    cta: 'Reservá tu diagnóstico',
    servicesTitle: 'Servicios',
    servicesLinks: [
      ['#what-we-build', 'AI Agents'],
      ['#what-we-build', 'Automatización'],
      ['#what-we-build', 'Desarrollo a medida'],
      ['#process', 'Cómo trabajamos'],
    ],
    contactTitle: 'Contacto',
    region: 'LATAM · Argentina first',
    hours: 'Lun a Vie · 9 a 18hs',
    copy: '© 2026 Neuradev · Construyendo AI que funciona en producción.',
    privacy: 'Privacidad',
    terms: 'Términos',
    version: 'v2.0 · ES',
  },
  agentDemo: {
    online: 'en línea · automático',
    today: 'HOY',
    hint: 'Mensaje',
    tag: 'AGENT.LIVE',
    responseFooter: 'Respuesta < 8 seg · 24/7',
    scripts: {
      inmobiliaria: {
        label: 'Inmobiliaria',
        subtitle: 'Agente que filtra consultas y agenda visitas',
        title: 'Marcos · interesado en alquiler',
        messages: [
          { from: 'lead', text: 'Hola! Vi el aviso del 2 ambientes en Palermo. Sigue disponible?', delay: 600 },
          { from: 'agent', text: '¡Hola Marcos! Sí, sigue disponible. ¿Es para uso personal o inversión?', delay: 1800, typing: 900 },
          { from: 'lead', text: 'Personal. Para mudarme con mi pareja.', delay: 1400 },
          { from: 'agent', text: 'Perfecto. Para confirmarte rápido: ¿tenés garantía propietaria o necesitás seguro de caución?', delay: 1700, typing: 900 },
          { from: 'lead', text: 'Seguro de caución, no tengo garante.', delay: 1400 },
          { from: 'agent', text: 'Genial, trabajamos con ambas. ¿Querés que coordinemos una visita esta semana? Tengo disponibilidad jueves 16hs o viernes 11hs.', delay: 1900, typing: 1100 },
          { from: 'lead', text: 'Viernes 11hs me viene bien 👍', delay: 1500 },
          { from: 'agent', text: 'Listo, lo agendo. Te paso por mail la confirmación con dirección y datos del agente.', delay: 1700, typing: 800 },
          { from: 'system', text: '✓ Visita agendada · Lead calificado · Asignado a Lucía B.', delay: 1300 },
        ],
      },
      contable: {
        label: 'Estudio contable',
        subtitle: 'Agente que responde consultas de monotributo',
        title: 'Sofía · cliente actual',
        messages: [
          { from: 'lead', text: 'Hola, cuándo se vence el monotributo de mayo?', delay: 600 },
          { from: 'agent', text: '¡Hola Sofía! El vencimiento de mayo es el martes 20. Te puedo recordar el día anterior si querés.', delay: 1800, typing: 1000 },
          { from: 'lead', text: 'Sí, dale. Y aprovecho: necesito pasar de categoría, cómo es?', delay: 1500 },
          { from: 'agent', text: 'Recategorización: te paso el form interno para que carguemos facturación de los últimos 12 meses y lo revisa Daniela esta semana.', delay: 1900, typing: 1200 },
          { from: 'lead', text: 'Genial, mandámelo', delay: 1100 },
          { from: 'agent', text: 'Enviado a tu mail. También te agendo un check rápido con Dani el jueves a las 15hs ✓', delay: 1700, typing: 1000 },
          { from: 'system', text: '✓ Recordatorio creado · Form enviado · Turno agendado con contador', delay: 1300 },
        ],
      },
      clinica: {
        label: 'Clínica',
        subtitle: 'Agente que gestiona turnos y reduce no-shows',
        title: 'Paciente · Dr. Méndez',
        messages: [
          { from: 'lead', text: 'Buenas, necesito un turno con el Dr. Méndez para esta semana', delay: 600 },
          { from: 'agent', text: '¡Hola! ¿Es primera consulta o seguimiento?', delay: 1700, typing: 900 },
          { from: 'lead', text: 'Seguimiento', delay: 900 },
          { from: 'agent', text: 'Perfecto. Tengo miércoles 10:30 o jueves 17:00. ¿Cuál te queda mejor?', delay: 1800, typing: 1000 },
          { from: 'lead', text: 'Jueves 17 va', delay: 1000 },
          { from: 'agent', text: 'Listo. Te confirmo 24hs antes por acá. Llevá tu DNI y los estudios previos.', delay: 1700, typing: 1100 },
          { from: 'system', text: '✓ Turno reservado · Confirmación 24h programada', delay: 1300 },
        ],
      },
      ecommerce: {
        label: 'E-commerce',
        subtitle: 'Agente que cierra ventas por WhatsApp',
        title: 'Cliente · consulta producto',
        messages: [
          { from: 'lead', text: 'Hola tienen la zapatilla blanca talle 41?', delay: 600 },
          { from: 'agent', text: '¡Hola! Sí, la tenemos. $89.000 con envío gratis a CABA. ¿Querés que te la reserve?', delay: 1700, typing: 1000 },
          { from: 'lead', text: 'Y la negra? Cuál me recomendás?', delay: 1300 },
          { from: 'agent', text: 'Las dos están buenísimas. La blanca es más liviana, la negra más resistente. Para uso diario te diría blanca.', delay: 1900, typing: 1200 },
          { from: 'lead', text: 'Dale blanca. Cómo pago?', delay: 1100 },
          { from: 'agent', text: 'Te paso link de pago: Mercado Pago, tarjeta o transferencia. Llega en 24-48hs.', delay: 1700, typing: 1000 },
          { from: 'system', text: '✓ Orden creada · Link de pago enviado · Stock reservado', delay: 1300 },
        ],
      },
      juridico: {
        label: 'Estudio jurídico',
        subtitle: 'Agente que califica casos y agenda primera consulta',
        title: 'Lucas · consulta laboral',
        messages: [
          { from: 'lead', text: 'Hola, me despidieron sin causa. Atienden estos casos?', delay: 600 },
          { from: 'agent', text: '¡Hola Lucas! Sí, atendemos laboral. Para asignarte el abogado correcto: ¿hace cuánto trabajabas ahí y estabas en blanco?', delay: 1800, typing: 1100 },
          { from: 'lead', text: '3 años, en blanco', delay: 1100 },
          { from: 'agent', text: 'Perfecto. La primera consulta es paga ($25.000) y dura 1hr. ¿Querés agendarla esta semana?', delay: 1800, typing: 1100 },
          { from: 'lead', text: 'Sí, el viernes si pueden', delay: 1100 },
          { from: 'agent', text: 'Listo. Viernes 16hs con la Dra. Pereyra. Te mando un form para que prepare el caso antes ✓', delay: 1800, typing: 1100 },
          { from: 'system', text: '✓ Consulta agendada · Área: laboral · Form enviado', delay: 1300 },
        ],
      },
      gimnasio: {
        label: 'Gimnasio',
        subtitle: 'Agente que vende membresías y agenda clases',
        title: 'Camila · interesada',
        messages: [
          { from: 'lead', text: 'Hola, cuánto sale la membresía mensual?', delay: 600 },
          { from: 'agent', text: '¡Hola Cami! Tenemos 3 planes: básico $18.000, full $25.000, premium con nutricionista $35.000. ¿Te interesa alguno?', delay: 1900, typing: 1200 },
          { from: 'lead', text: 'El full. Puedo probar una clase antes?', delay: 1200 },
          { from: 'agent', text: 'Claro! Clase de prueba gratis. Te ofrezco mañana 19hs (funcional) o sábado 10hs (yoga). ¿Cuál?', delay: 1800, typing: 1100 },
          { from: 'lead', text: 'Sábado 10', delay: 900 },
          { from: 'agent', text: 'Reservado. Te espero con DNI. Si te gusta, te activo la membresía en el momento.', delay: 1700, typing: 1000 },
          { from: 'system', text: '✓ Clase de prueba reservada · Lead caliente · Asignado a Diego', delay: 1300 },
        ],
      },
      taller: {
        label: 'Taller mecánico',
        subtitle: 'Agente que toma turnos y presupuestos',
        title: 'Cliente · service auto',
        messages: [
          { from: 'lead', text: 'Hola, necesito service para mi Corsa 2014', delay: 600 },
          { from: 'agent', text: '¡Hola! Service 10mil km en Corsa es $58.000 (aceite, filtros y revisión). ¿Querés agendar?', delay: 1800, typing: 1100 },
          { from: 'lead', text: 'Sí, también tiene un ruido raro adelante', delay: 1300 },
          { from: 'agent', text: 'Lo revisamos sin cargo en el mismo service. Tengo lugar martes 9hs o jueves 14hs.', delay: 1800, typing: 1100 },
          { from: 'lead', text: 'Martes', delay: 900 },
          { from: 'agent', text: 'Anotado. Dejá el auto a las 9, te llamamos cuando esté listo (~5hs). Te paso ubicación 📍', delay: 1800, typing: 1100 },
          { from: 'system', text: '✓ Turno reservado · Service + diagnóstico · Cliente notificado', delay: 1300 },
        ],
      },
      academia: {
        label: 'Academia',
        subtitle: 'Agente que gestiona inscripciones y clases demo',
        title: 'Estudiante · consulta cursos',
        messages: [
          { from: 'lead', text: 'Hola, me interesa el curso de inglés. Cuándo arranca?', delay: 600 },
          { from: 'agent', text: '¡Hola! El próximo arranca el lunes 3 de junio. ¿Sabés tu nivel o querés evaluación gratis?', delay: 1800, typing: 1100 },
          { from: 'lead', text: 'Evaluación gratis', delay: 900 },
          { from: 'agent', text: 'Te ofrezco martes 18hs o jueves 19hs. La evaluación dura 20 min y es online.', delay: 1700, typing: 1000 },
          { from: 'lead', text: 'Jueves 19', delay: 800 },
          { from: 'agent', text: 'Agendado. Te mando el link de Zoom y un test corto para preparar ✓', delay: 1700, typing: 1000 },
          { from: 'system', text: '✓ Evaluación agendada · Material enviado · Lead en pipeline', delay: 1300 },
        ],
      },
    },
  },
  recommenderPrompt: (biz: string) => `Sos un experto en automatización con AI para PyMEs en Latinoamérica. Un dueño de negocio describe su empresa y vos diseñás un AI Agent a medida.

Negocio: """${biz.trim()}"""

Devolvé EXCLUSIVAMENTE un JSON válido con esta estructura (sin markdown, sin comentarios, sin texto extra):

{
  "agentName": "string — nombre corto y pegadizo del agente, ej: 'AgenteVet' o 'BriefBot'",
  "tagline": "string — 1 línea, máximo 10 palabras, qué hace el agente",
  "industry": "string — vertical/categoría del negocio en 2-4 palabras",
  "capabilities": ["string", "string", "string", "string"],
  "integrations": ["string", "string", "string"],
  "firstWin": "string — el primer proceso a automatizar (la 'fruta más baja'), 1 oración concreta",
  "kpi": { "value": "string — métrica con número/símbolo, ej '−18hrs' o '×3.2'", "label": "string — qué mide" }
}

Reglas:
- Todo en español rioplatense informal pero profesional.
- 4 capabilities concretas y específicas al negocio descripto.
- 3 integrations reales que usaría una PyME (WhatsApp Business, Gmail, Google Calendar, Mercado Pago, HubSpot, Sheets, etc.).
- firstWin tiene que ser accionable y conservador — el primer mes.
- KPI realista y específico al tipo de negocio.`,
}

const en: Translations = {
  code: 'en',
  nav: {
    problem: 'The problem',
    build: 'What we build',
    recommender: 'Recommender',
    process: 'How we work',
    diagnostic: 'Free diagnostic',
    langLabel: 'EN',
  },
  hero: {
    badgeNew: 'NEW',
    badge: 'AI Agents for SMBs · Available now',
    titleA: 'Automate your business',
    titleB: 'without hiring',
    titleC: 'a tech team.',
    desc1: 'We build ',
    desc2: 'custom AI Agents',
    desc3: ` that answer, qualify, schedule, and integrate — for accounting firms, real-estate agencies, clinics, and shops that lose sales when they don't respond in time.`,
    ctaPrimary: 'Book your diagnostic — 30 min, free',
    ctaSecondary: 'See how it works',
    trust: 'No in-house tech team required',
    tryLabel: 'Try an agent →',
    marqueeTitle: 'Built for SMBs in LATAM',
    marqueeItems: ['Accounting firms', 'Real estate', 'Clinics', 'E-commerce', 'Law firms', 'Auto shops', 'Gyms', 'Schools'],
  },
  problem: {
    eyebrow: '01 / The problem',
    title1: `Most “AI Agents” you'll see on LinkedIn`,
    title2: 'fail in production.',
    subtitle: 'After months building agents for real businesses, we identified the three reasons why 90% never make money.',
    failLabel: 'Failure',
    fails: [
      { title: `It doesn't integrate with your tools`, desc: `An agent that lives isolated from your CRM, WhatsApp Business, or calendar is an expensive chatbot. It impresses; it doesn't sell.` },
      { title: `It doesn't learn from your business`, desc: `Generic templates sound like templates. If it doesn't use your real answers, real prices, and real processes — your customer notices on message one.` },
      { title: `It doesn't scale with you`, desc: 'It works for 10 messages a week and breaks at 100. Or worse: maintaining it costs more than the problem it solves.' },
    ],
    solveLabel: 'How we solve it',
    solveText1: 'We build hand-crafted agents, not templates.',
    solveText2: ' Each one integrated with the tools you already use (WhatsApp, Gmail, CRM, Calendar), trained on your real responses, and monitored in production.',
  },
  whatWeBuild: {
    eyebrow: '03 / What we build',
    title1: 'Agents that face your customers.',
    title2: 'Automations that clean up your back-office.',
    subtitle: 'Pick the side that hurts more. You can start with one and add the other later.',
    tabAgents: 'Customer-facing',
    tabInternal: 'Back-office',
  },
  agents: {
    eyebrow: '02 / Customer-facing agents',
    title1: `An AI Agent isn't a chatbot.`,
    title2: `It's an automated worker operating inside your business.`,
    subtitle: 'Answers, qualifies, schedules, integrates — facing your customers. Pick your vertical to see the concrete use case.',
    useCaseLabel: 'Use case',
    ctaCard: 'Book your diagnostic',
    metaTags: [
      ['Integrates', 'WhatsApp · Gmail · CRM'],
      ['Learns', 'From your real responses'],
      ['Scales', '10 → 10,000 messages'],
      ['Monitors', 'Evals in production'],
    ],
    verticals: [
      { id: 'contable', label: 'Accounting firm', tagline: 'Answers, tracks deadlines, schedules.',
        bullets: ['Answers tax and compliance questions', 'Automatic deadline reminders', 'Schedules meetings with the accountant', 'Captures data for category changes'],
        kpi: { value: '−18hrs', label: 'freed up per week in admin work' } },
      { id: 'inmobiliaria', label: 'Real estate', tagline: 'Filters leads, schedules visits, escalates only what matters.',
        bullets: ['Filters inquiries by budget, area, and requirements', `Schedules visits on the agent's calendar`, 'Captures lead data in the CRM', 'Escalates to a human only on a real match'],
        kpi: { value: '3.4×', label: 'more visits booked vs. manual response' } },
      { id: 'juridico', label: 'Law firm', tagline: 'FAQ, qualifies the case, books first consultation.',
        bullets: ['FAQ on hours, practice areas, fees', 'Qualifies case area (labor, family, commercial)', 'Schedules paid first consultation', 'Sends preparation form ahead of time'],
        note: 'Never gives legal advice — administrative flow only.',
        kpi: { value: '+42%', label: 'show-up rate on first consultation' } },
      { id: 'ecommerce', label: 'Retail / E-commerce', tagline: 'Stock & prices, recommends, takes WhatsApp orders.',
        bullets: ['Answers stock and prices in real time', 'Recommends products based on inquiry', 'Takes orders via WhatsApp', 'Escalates to a human to close the sale'],
        kpi: { value: '< 8 sec', label: 'first-response time · 24/7' } },
      { id: 'clinica', label: 'Clinic / Practice', tagline: 'Appointments, 24h confirmation, coverage FAQ.',
        bullets: ['Books and reschedules appointments', '24h-before automatic confirmation (cuts no-shows)', 'Coverage and prep FAQ', 'Frees the receptionist for critical tasks'],
        kpi: { value: '−65%', label: 'no-shows with 24h confirmation' } },
      { id: 'gimnasio', label: 'Gym / Studio', tagline: 'Sells memberships, books trial classes.',
        bullets: ['Answers prices and plans 24/7', 'Books free trial class', 'Converts lead to active membership', 'Renewal reminders'],
        kpi: { value: '×2.1', label: 'inquiry-to-trial conversion rate' } },
      { id: 'taller', label: 'Auto shop / Service', tagline: 'Appointments, automatic quotes, reminders.',
        bullets: ['Quotes service and repairs', 'Books appointments with real availability', 'Notifies when the work is done', 'Reminds about next service'],
        kpi: { value: '+38%', label: 'appointments closed vs. manual response' } },
      { id: 'academia', label: 'Academy / School', tagline: 'Course info, enrollments, demo classes.',
        bullets: ['Answers course info, levels, and schedules', 'Books demo class or level assessment', 'Processes enrollments and payments', 'Course start reminders'],
        kpi: { value: '+52%', label: 'enrollments vs. email-only response' } },
    ],
  },
  internal: {
    eyebrow: '03 / Beyond chatbots',
    title1: 'We automate what',
    title2: 'your team does by hand.',
    subtitle: 'Not every agent serves customers. We process PDFs, parse logs, generate reports, and reconcile invoices — so your team stops copy-pasting and starts thinking again.',
    pipelineLabel: 'LIVE PIPELINE',
    pipelineInput: 'Input',
    pipelineProcess: 'AI Processing',
    pipelineOutput: 'Output',
    pipelineInputs: ['PDF invoices', 'Emails', 'Images', 'Logs', 'GitHub PRs'],
    pipelineOutputs: ['Clean Excel', 'Routed tickets', 'Dashboard KPIs', 'Slack alert', 'PR review'],
    categories: [
      { tag: 'DATA', title: 'Unstructured → structured data',
        desc: 'PDFs, images, emails, and API responses turned into clean, validated, ready-to-use data.',
        items: ['PDF / image → Excel or database', 'Document classification & routing to the right team', 'Multi-document summarization pipelines', 'API response normalization to your internal schema'] },
      { tag: 'REPORTING', title: 'Reports & dashboards',
        desc: 'KPIs that update themselves, board packs that assemble themselves, competitive research delivered every Monday.',
        items: ['Real-time KPIs and dashboards', 'Weekly and monthly executive reports', 'Competitive intel & research scraping', 'Board packs and meeting minute generation'] },
      { tag: 'QUALITY', title: 'Quality, alerts & anomalies',
        desc: 'Systems that catch the problem before you do, review code before merge, and validate data before it lands.',
        items: ['Log & metrics anomaly detection', 'Automated code review on PRs (style, security, coverage)', 'Data quality and validation sweeps', 'Smart alerts before humans notice'] },
      { tag: 'OPS', title: 'Back-office & operations',
        desc: 'The invisible work that moves the company — lead enrichment, invoice reconciliation, onboarding — minus the 8 hours of Excel.',
        items: ['Lead / CRM enrichment (size, role, stack)', 'Invoice & expense reconciliation vs. POs', 'Employee & client onboarding automation', 'Workflows between Sheets, Notion, Slack, Drive'] },
    ],
    footnote: `Doesn't fit a category? Try the AI recommender below or book a diagnostic.`,
  },
  recommender: {
    eyebrow: '02 / Start here',
    title1: 'Describe what you do.',
    title2: 'We design the agent.',
    subtitle: 'Tell us in 1 or 2 lines what your business does and the AI recommender proposes a custom agent — capabilities, integrations, and the first automation. Then scroll down to see what we build to confirm it.',
    inputLabel: 'Your business',
    placeholder: 'E.g. I run a bakery, I get orders on WhatsApp all day and they mix with questions about prices and hours.',
    designing: 'Designing…',
    generate: 'Generate my agent',
    tryExample: 'Or try an example',
    examples: [
      'I run a veterinary clinic, I get calls all day about appointments and prices and miss sales.',
      `I'm the CEO of a marketing agency and we waste time answering initial briefs.`,
      'I run a beverage distributor, customers order on WhatsApp and orders get mixed up.',
    ],
    emptyTitle: 'Your agent will appear here',
    emptyDesc: 'We generate a concrete proposal with capabilities, integrations, and the first process to automate — tailored to your business.',
    emptyPower: 'Powered by AI · Response in ~10 sec',
    loadTitle: 'Designing your agent',
    loadDesc: 'Analyzing your business, identifying processes, and cross-referencing with similar cases in our base…',
    errorTitle: 'Oops, something failed',
    errorMsg: `We couldn't generate the recommendation. Try again or book a diagnostic directly.`,
    errorCta: 'Book your diagnostic',
    readyLabel: 'AI Recommendation',
    whatItSolves: 'What it solves',
    integrations: 'Integrates with',
    firstStepLabel: 'First step · month 1',
    resultCta: 'Book your diagnostic',
    adjust: 'Adjust',
  },
  process: {
    eyebrow: '04 / How we work',
    title1: 'From first meeting to production',
    title2: 'in 4 weeks.',
    subtitle: `We don't sell a pretty PoC for your next board deck. We sell an agent running with real customers, integrated with the tools you already use.`,
    avgTime: 'Avg. time · 28 days',
    steps: [
      { title: 'We understand your business', desc: '30-min diagnostic to map processes, volume of inquiries, and current tools.', duration: 'Week 1' },
      { title: 'We map the process to automate', desc: 'We identify the highest-ROI bottleneck and isolate it in a concrete flow.', duration: 'Week 1' },
      { title: 'We build the agent', desc: 'Trained on your real responses, your real prices, your tone. No templates.', duration: 'Weeks 2–3' },
      { title: 'We integrate with your tools', desc: 'WhatsApp Business, Gmail, CRM, Calendar, Sheets — what you already use, nothing new to learn.', duration: 'Week 3' },
      { title: 'We iterate in production', desc: 'Continuous monitoring with automatic evaluations. Weekly adjustments with real first-month data.', duration: 'Week 4+' },
    ],
  },
  diagnostic: {
    title1: 'Free diagnostic.',
    title2: '30 minutes.',
    title3: 'A concrete recommendation.',
    desc1: 'We give you 30 min to identify ',
    desc2: 'which process you should automate first',
    desc3: ' in your business. You leave with a concrete plan, whether you automate with us or not.',
    bullets: [
      'Map of the highest-ROI process in your operation',
      'Realistic estimate of time, cost, and expected result',
      'No commitment · no pitch · no wasted time',
    ],
    formTitle: 'Book your call',
    formSubtitle: 'We respond within 24h',
    nameLabel: 'Name',
    namePlaceholder: 'Your name',
    emailLabel: 'Email',
    emailPlaceholder: 'you@business.com',
    bizLabel: 'Type of business',
    bizOptions: [
      ['contable', 'Accounting firm'],
      ['inmobiliaria', 'Real estate'],
      ['juridico', 'Law firm'],
      ['ecommerce', 'Retail / E-commerce'],
      ['clinica', 'Clinic / Practice'],
      ['otro', 'Other'],
    ],
    submit: 'Book diagnostic',
    orWriteUs: 'Or write to us at',
    sentTitle: `You're in!`,
    sentDesc1: `We'll write to `,
    sentDescYourMail: 'your email',
    sentDesc2: ' within 24h.',
  },
  footer: {
    tagline: 'We automate processes with AI for SMBs in LATAM. Without needing an in-house tech team.',
    cta: 'Book your diagnostic',
    servicesTitle: 'Services',
    servicesLinks: [
      ['#what-we-build', 'AI Agents'],
      ['#what-we-build', 'Automation'],
      ['#what-we-build', 'Custom development'],
      ['#process', 'How we work'],
    ],
    contactTitle: 'Contact',
    region: 'LATAM · Argentina first',
    hours: 'Mon–Fri · 9 to 18 (ART)',
    copy: '© 2026 Neuradev · Building AI that works in production.',
    privacy: 'Privacy',
    terms: 'Terms',
    version: 'v2.0 · EN',
  },
  agentDemo: {
    online: 'online · automated',
    today: 'TODAY',
    hint: 'Message',
    tag: 'AGENT.LIVE',
    responseFooter: 'Response < 8 sec · 24/7',
    scripts: {
      inmobiliaria: {
        label: 'Real estate',
        subtitle: 'Agent that filters inquiries and books visits',
        title: 'Marcus · rental inquiry',
        messages: [
          { from: 'lead', text: 'Hi! Saw the 2-bed listing in Brooklyn Heights. Still available?', delay: 600 },
          { from: 'agent', text: 'Hi Marcus! Yes, still available. Personal use or investment?', delay: 1800, typing: 900 },
          { from: 'lead', text: 'Personal. Moving in with my partner.', delay: 1400 },
          { from: 'agent', text: 'Got it. Quick qualifying: do you have a guarantor or will you use a security deposit?', delay: 1700, typing: 900 },
          { from: 'lead', text: 'Security deposit, no guarantor.', delay: 1400 },
          { from: 'agent', text: 'Perfect, we work with both. Want to schedule a visit this week? I have Thursday 4pm or Friday 11am.', delay: 1900, typing: 1100 },
          { from: 'lead', text: 'Friday 11am works 👍', delay: 1500 },
          { from: 'agent', text: `Done, booking it. I'll email confirmation with address and agent details.`, delay: 1700, typing: 800 },
          { from: 'system', text: '✓ Visit booked · Lead qualified · Assigned to Lucy B.', delay: 1300 },
        ],
      },
      contable: {
        label: 'Accounting firm',
        subtitle: 'Agent that answers tax questions',
        title: 'Sophie · current client',
        messages: [
          { from: 'lead', text: `Hi, when's the May tax deadline?`, delay: 600 },
          { from: 'agent', text: 'Hi Sophie! May deadline is Tuesday the 20th. Want me to remind you the day before?', delay: 1800, typing: 1000 },
          { from: 'lead', text: 'Yes please. Also: I need to change tax category, how does it work?', delay: 1500 },
          { from: 'agent', text: `Category change: I'll send the internal form so we can load the last 12 months of revenue and Danielle reviews it this week.`, delay: 1900, typing: 1200 },
          { from: 'lead', text: 'Great, send it over', delay: 1100 },
          { from: 'agent', text: 'Sent to your email. Also booked a quick check with Dani on Thursday at 3pm ✓', delay: 1700, typing: 1000 },
          { from: 'system', text: '✓ Reminder set · Form sent · Meeting booked with accountant', delay: 1300 },
        ],
      },
      clinica: {
        label: 'Clinic',
        subtitle: 'Agent that books appointments and cuts no-shows',
        title: 'Patient · Dr. Mendez',
        messages: [
          { from: 'lead', text: 'Hi, I need an appointment with Dr. Mendez this week', delay: 600 },
          { from: 'agent', text: 'Hi! First consultation or follow-up?', delay: 1700, typing: 900 },
          { from: 'lead', text: 'Follow-up', delay: 900 },
          { from: 'agent', text: 'Perfect. I have Wednesday 10:30am or Thursday 5pm. Which works?', delay: 1800, typing: 1000 },
          { from: 'lead', text: 'Thursday 5 works', delay: 1000 },
          { from: 'agent', text: `Booked. I'll confirm 24h before. Bring ID and previous reports.`, delay: 1700, typing: 1100 },
          { from: 'system', text: '✓ Appointment booked · 24h confirmation scheduled', delay: 1300 },
        ],
      },
      ecommerce: {
        label: 'E-commerce',
        subtitle: 'Agent that closes sales over WhatsApp',
        title: 'Customer · product inquiry',
        messages: [
          { from: 'lead', text: 'Hi do you have the white sneaker in size 9?', delay: 600 },
          { from: 'agent', text: 'Hi! Yes, we have it. $89 with free shipping. Want me to reserve it?', delay: 1700, typing: 1000 },
          { from: 'lead', text: 'And the black? Which do you recommend?', delay: 1300 },
          { from: 'agent', text: `Both are great. White is lighter, black is more durable. For daily use I'd say white.`, delay: 1900, typing: 1200 },
          { from: 'lead', text: 'Go white. How do I pay?', delay: 1100 },
          { from: 'agent', text: 'Sending payment link: card or transfer. Arrives in 24-48h.', delay: 1700, typing: 1000 },
          { from: 'system', text: '✓ Order created · Payment link sent · Stock reserved', delay: 1300 },
        ],
      },
      juridico: {
        label: 'Law firm',
        subtitle: 'Agent that qualifies cases and books first consult',
        title: 'Luke · labor inquiry',
        messages: [
          { from: 'lead', text: 'Hi, I was fired without cause. Do you handle these cases?', delay: 600 },
          { from: 'agent', text: 'Hi Luke! Yes, we handle labor. To assign the right attorney: how long were you employed and were you on the books?', delay: 1800, typing: 1100 },
          { from: 'lead', text: '3 years, on the books', delay: 1100 },
          { from: 'agent', text: 'Perfect. First consultation is paid ($250) and runs 1hr. Want to book this week?', delay: 1800, typing: 1100 },
          { from: 'lead', text: 'Yes, Friday if possible', delay: 1100 },
          { from: 'agent', text: `Done. Friday 4pm with Ms. Pereyra. I'll send a form so she can prep the case ✓`, delay: 1800, typing: 1100 },
          { from: 'system', text: '✓ Consultation booked · Area: labor · Form sent', delay: 1300 },
        ],
      },
      gimnasio: {
        label: 'Gym',
        subtitle: 'Agent that sells memberships and books classes',
        title: 'Camille · interested',
        messages: [
          { from: 'lead', text: 'Hi, how much is the monthly membership?', delay: 600 },
          { from: 'agent', text: 'Hi Camille! We have 3 plans: basic $40, full $60, premium with nutritionist $90. Interested in any?', delay: 1900, typing: 1200 },
          { from: 'lead', text: 'The full. Can I try a class first?', delay: 1200 },
          { from: 'agent', text: 'Of course! Free trial class. I have tomorrow 7pm (functional) or Saturday 10am (yoga). Which?', delay: 1800, typing: 1100 },
          { from: 'lead', text: 'Saturday 10', delay: 900 },
          { from: 'agent', text: `Booked. Bring ID. If you like it, I'll activate the membership on the spot.`, delay: 1700, typing: 1000 },
          { from: 'system', text: '✓ Trial class booked · Hot lead · Assigned to Diego', delay: 1300 },
        ],
      },
      taller: {
        label: 'Auto shop',
        subtitle: 'Agent that books service and quotes',
        title: 'Customer · car service',
        messages: [
          { from: 'lead', text: 'Hi, I need a service for my Civic 2014', delay: 600 },
          { from: 'agent', text: 'Hi! 10k-mile service on the Civic is $180 (oil, filters, inspection). Want to book?', delay: 1800, typing: 1100 },
          { from: 'lead', text: 'Yes, it also has a weird noise up front', delay: 1300 },
          { from: 'agent', text: `We'll inspect that during the service at no charge. I have Tuesday 9am or Thursday 2pm.`, delay: 1800, typing: 1100 },
          { from: 'lead', text: 'Tuesday', delay: 900 },
          { from: 'agent', text: `Got it. Drop the car off at 9, we'll call when ready (~5h). Sending location 📍`, delay: 1800, typing: 1100 },
          { from: 'system', text: '✓ Appointment booked · Service + diagnosis · Customer notified', delay: 1300 },
        ],
      },
      academia: {
        label: 'Academy',
        subtitle: 'Agent that manages enrollments and demo classes',
        title: 'Student · course inquiry',
        messages: [
          { from: 'lead', text: `Hi, I'm interested in the English course. When does it start?`, delay: 600 },
          { from: 'agent', text: 'Hi! Next cohort starts Monday June 3. Do you know your level or want a free assessment?', delay: 1800, typing: 1100 },
          { from: 'lead', text: 'Free assessment', delay: 900 },
          { from: 'agent', text: 'I have Tuesday 6pm or Thursday 7pm. The assessment takes 20 min and is online.', delay: 1700, typing: 1000 },
          { from: 'lead', text: 'Thursday 7', delay: 800 },
          { from: 'agent', text: `Booked. I'll send the Zoom link and a short test to prepare ✓`, delay: 1700, typing: 1000 },
          { from: 'system', text: '✓ Assessment booked · Material sent · Lead in pipeline', delay: 1300 },
        ],
      },
    },
  },
  recommenderPrompt: (biz: string) => `You are an expert in AI automation for SMBs. A business owner describes their company and you design a custom AI Agent.

Business: """${biz.trim()}"""

Return EXCLUSIVELY a valid JSON object with this structure (no markdown, no comments, no extra text):

{
  "agentName": "string — short catchy agent name, e.g. 'VetAgent' or 'BriefBot'",
  "tagline": "string — 1 line, max 10 words, what the agent does",
  "industry": "string — business vertical/category in 2-4 words",
  "capabilities": ["string", "string", "string", "string"],
  "integrations": ["string", "string", "string"],
  "firstWin": "string — the first process to automate (the 'lowest-hanging fruit'), 1 concrete sentence",
  "kpi": { "value": "string — metric with number/symbol, e.g. '−18hrs' or '×3.2'", "label": "string — what it measures" }
}

Rules:
- All in professional but conversational English.
- 4 capabilities concrete and specific to the described business.
- 3 real integrations an SMB would use (WhatsApp Business, Gmail, Google Calendar, Stripe, HubSpot, Sheets, etc.).
- firstWin must be actionable and conservative — month one.
- KPI realistic and specific to the business type.`,
}

const translations: Record<Language, Translations> = { en, es }

export const getTranslations = (language: Language): Translations => translations[language] ?? translations.es
