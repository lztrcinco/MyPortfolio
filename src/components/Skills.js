import React from 'react';
import '../css/Skills.css'


const Skills = () => {
  return (
    <section id='experience'>
      <div className='bg'>
        
      <div className='title'>
        <p>What Skill I Have</p>
        <h4>My Experience</h4>
      </div>
      
      <div className='experience_container'>
        <div className='experience_frontend'>
            {/* <div className='fd'>Skills</div> */}
          <div className='experience_content'>
            <article className='experience_details'>
            <img src='./images/htmlp.png' alt='html' />
              <div><p><i>HTML</i></p></div>
            </article>
            <article className='experience_details'>
            <img src='./images/csspp.png' alt='html'  />
               <div><p><i>CSS</i></p></div>
            </article>
             <article className='experience_details'>
             <img className='js' src='./images/jspp.png' alt='html' />
               <div ><p><i>JavaScript</i></p></div>
             </article>
             <article className='experience_details'>
             <img src='./images/strapp.png' alt='html'  />
               <div><p><i>Bootstrap</i></p></div>
             </article>
             <article className='experience_details'>
             <img src='./images/reactp.png' alt='html' />
               <div><p><i>ReactJS</i></p></div>
             </article>
             <article className='experience_details'>
              <img src='./images/Mui.png' alt='html' />
                <div><p><i>Material UI</i></p></div>
              </article>

              <article className='experience_details'>
              <img src='./images/php.png' alt='html' />
                <div><p><i>Php</i></p></div>
              </article>
              <article className='experience_details'>
              <img src='./images/laravel.png' alt='html' />
                <div><p><i>Laravel</i></p></div>
              </article>
              <article className='experience_details'>
              <img src='./images/nodejs.png' alt='html' />
                <div><p><i>Nodejs</i></p></div>
              </article>
              <article className='experience_details'>
              <img src='./images/mysql.png' alt='html' />
                <div><p><i>MySql</i></p></div>
              </article>
          </div>
        </div>

      </div>
      <div className='qoutes'>
        <p><i>"Believe in yourself and your ability to learn. With hard work, dedication, and a passion for coding, you can become a successful full-stack web developer and turn your dreams into reality."</i></p>
      </div>
      </div>
    </section>
  )
}

export default Skills