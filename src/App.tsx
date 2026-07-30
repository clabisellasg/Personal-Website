import { SiteHeader } from './components/layout/SiteHeader'
import { AboutSection } from './components/sections/AboutSection'
import { HeroSection } from './components/sections/HeroSection'
import { SkillsSection } from './components/sections/SkillsSection'

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <div id="home">
          <HeroSection />
        </div>
        <AboutSection />
        <SkillsSection />
      </main>
    </>
  )
}

export default App
