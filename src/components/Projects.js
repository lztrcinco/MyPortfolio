import React from 'react'
import '../css/Projects.css';


function Projects () {

  return (
    <section id="cards">
    <div className='bgc'>
    
    
        <i><p className='my'>My Recent Work</p></i>

        <b><h1>Projects</h1></b>

      <div className='container card_container'>
        <article className='card_item'>
          <div className='card_item-image'>
            <img className='skate' src='./images/p1.png' alt='me'/>
            <h3>Barber Magazine</h3>
            <p><i>Barber history and barber battles.</i></p>
            <div className='card_btn'>
            <a href='https://github.com/lztrcinco/lztrcinco.github.io' className='btn' target='_blank'>Github</a>
            <a href='https://lztrcinco.github.io/' className='btn btn-warning' target='_blank'>Demo</a>
            </div>
          </div>
        </article>
        <article className='card_item'>
           <div className='card_item-image'>
            <img src='./images/p2.png' alt='me'/>
            <h3>Medical Form</h3>
            <p><i>Health and wellness</i></p>
            <div className='card_btn'>
            <a href='https://github.com/lztrcinco/patientform.io' className='btn' target='_blank'>Github</a>
            <a href='https://lztrcinco.github.io/patientform.io/' className='btn btn-warning' target='_blank'>Demo</a>
            </div>
          </div>
        </article>
        <article className='card_item'>
          <div className='card_item-image'>
            <img src='./images/p3.png' alt='me'/>
            <h3>My E-Calculator</h3>
            <p><i>The beginning of something great: my first calculator</i></p>
            <div className='card_btn'>
            <a href='https://github.com/lztrcinco/ECalculator.io.git' className='btn' target='_blank'>Github</a>
            <a href='https://github.com/lztrcinco/ECalculator.io.git' className='btn btn-warning' target='_blank'>Demo</a>
            </div>
          </div>
        </article>
      </div>
      </div>
    </section>
        
  )
  }

export default Projects