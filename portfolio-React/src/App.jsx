import './App.css'
import Navigation from './Components/Navigation'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import FooterApp from './Components/FooterApp'
import Social from './Components/Social'

/* import './data/componentsObserver';  */

function App() {


  return (
    <>
      <Navigation/>
      <Social/>
      <section id='about'>
        <About/>
      </section>
      <section id='skills'>
        <Skills/>
      </section>
      <section id='projects'>
        <Projects/>
      </section>
      <section id='contact'>
        <Contact/>
      </section>
      <FooterApp/>
    </>
  )
}

export default App
