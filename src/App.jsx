import { useState, useRef, useEffect } from 'react'
import FakeHead from './Components/FakeHead'
import RealHead from './Components/RealHead'

import './Styling/variables.css'
import './App.css'
import './Styling/about.css'
import './Styling/timeline.css'


function App() {

  //black magic
  const [showRealHead, setShowRealHead] = useState(false);
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowRealHead(entry.isIntersecting);
      },
      { threshold: 1 } // Trigger when 100% of timeline is visible
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, []);

  //black magic ends here

  return (
    <main>

      {showRealHead ? <RealHead /> : <FakeHead />}

      <div className="video-bg">
        <video autoPlay loop muted playsInline>
          <source src="crystal.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="nerf-vid"></div>

      <div className="container">
        <section className="hero">
          <h1 className="hero-text">Haze</h1>
          <p className="hero-subtext">Fading Reality- placeholder text here dunno what to write.</p>
          <button className="btnImp" type="text">The Timeline</button>
          <p className="filler">Explore my Identity.</p>
          <p className="scroll-tag">Scroll to Explore</p>
        </section>
      </div>

      {/* isolation giving me nightmares so let it be here*/}
      <section className="about">
        <img src="about.png" alt="image" className='about-img' />
        <h1 className="about-text">About</h1>
        <p className="about-subtext">About</p>
      </section>

      <section className="timeline" ref={timelineRef}>
      </section>

    </main>
  )
}


export default App
