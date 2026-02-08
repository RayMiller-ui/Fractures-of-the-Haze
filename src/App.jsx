import { useState } from 'react'

import './Styling/variables.css'
import './App.css'
import './Styling/about.css'
import './Styling/timeline.css'


function App() {
  return (
    <main>

      <div className="fake-head">
        <p className='metastab'>Metastab</p>
        <p className="github">Github</p>
      </div>

      <div className="container">
        <section className="hero">
          <h1 className="hero-text">Haze</h1>
          <p className="hero-subtext">Fading Reality- placeholder text here dunno what to write.</p>
          <button className="btnImp" type="text">The Timeline</button>
          <p className="filler">Explore my Identity.</p>
          <p className="scroll-tag">Scroll to Explore</p>
        </section>
      </div>

      <section className="about">
        <h1 className="about-text">About</h1>
        <p className="about-subtext">About</p>
      </section>

      <section className="timeline">
        <h1 className="timeline-text">Timeline</h1>
        <p className="timeline-subtext">Timeline</p>
      </section>

    </main>
  )
}


export default App
