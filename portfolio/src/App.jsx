import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Process from './components/Process.jsx'
import WhyHireMe from './components/WhyHireMe.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Process />
        <WhyHireMe />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
