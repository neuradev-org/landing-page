import { Header } from './components/sections/Header'
import { Hero } from './components/sections/Hero'
import { Problem } from './components/sections/Problem'
import { AIRecommender } from './components/sections/AIRecommender'
import { WhatWeBuild } from './components/sections/WhatWeBuild'
import { Process } from './components/sections/Process'
import { Diagnostic } from './components/sections/Diagnostic'
import { Footer } from './components/sections/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-paper">
      <Header />
      <main>
        <Hero />
        <Problem />
        <AIRecommender />
        <WhatWeBuild />
        <Process />
        <Diagnostic />
      </main>
      <Footer />
    </div>
  )
}
