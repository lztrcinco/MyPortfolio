import React from 'react'
import '../css/About.css'


function About() {
  return (
  <section>
    <div className='about_container'>
     <div className='about_me'>
         <div className='about_me-image'>
             <img src='./images/about.png' alt='me'/>
         </div>
     </div>
     <div className='about_content'>
       
           <p className='get'>Get to know </p>
           <h3>About Me</h3>
           <p className='get'>
           I am Jan Lester Espinosa Cinco with a passion for learning new languages and problem solving techniques.
           <br/>
           <br/>
           Before transitioning into web and software development, I diligently worked as a Data Entry Specialist in the Call Center Company in Los Baños, Laguna. While in the legal industry I found myself enjoying the technical and computer driven aspects of the office which lead me to follow my true passion for Web Development.
           
           </p>       
     </div>
 </div>
    </section>
  )  
}

export default About