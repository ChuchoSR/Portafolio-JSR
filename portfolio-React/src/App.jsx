import './App.css'
import Navigation from './Components/Navigation'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import FooterApp from './Components/FooterApp'
import Social from './Components/Social'
import React from 'react'
import { useState } from 'react'
import lightOn from '../src/assets/image/on.png'
import lightOff from '../src/assets/image/off.png'

/* import './data/componentsObserver';  */

function App() {

/* const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => { 
    if (darkMode) {
      document.body.classList.remove('dark-mode');
    }else {
      document.body.classList.add('dark-mode');
    }
    setDarkMode(!darkMode);
  } */

  return (
    <>
      <Navigation/>
      <Social/>
      {/* <button onClick={toggleDarkMode} className='dark-mode-toggle'>
        {darkMode ? <img src={lightOn} alt='light-on'/> : <img src={lightOff} alt='light-off'/>}
      </button> */}
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
