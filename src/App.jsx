import { useState } from 'react'

import './Styling/variables.css'
import './App.css'


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

    </main>
  )
}


export default App
