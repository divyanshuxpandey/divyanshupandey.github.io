import { About } from './components/About'
import { Contact } from './components/Contact'
import { EducationAchievements } from './components/EducationAchievements'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <EducationAchievements />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
