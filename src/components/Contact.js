import React from 'react';
import '../css/Contact.css';
import {AiOutlineMail} from 'react-icons/ai';
import {BsMessenger} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_m7u0hap', 'template_qouao0g', form.current, 'mgBjDTo6jf9wBMwU-')
    alert('Message has been sent' )
    e.target.reset()
  };

  return (
    <section id='contact'>
      <div className='bgimage'>
       <div className='head'>
          <p>Get In Touch</p>
          <br/>
          <h4>Contact Me</h4>
        </div>
    
      <div className='contact_container'>
        <div className='contact_options'>
            <article className='contact_option'>
              <AiOutlineMail className='contact_option-icon'/>
              <p>Email</p>
              <p>lztrcinco@gmail.com</p>
              <a href='https://mail.google.com/mail/u/0/#inbox?compose=new' target='_black'>Send a message</a>
            </article>
            <article className='contact_option'>
              <BsMessenger className='contact_option-icon'/>
              <p>Messenger</p>
              <p>Jan Lester Cinco</p>
                <a href='https://m.me/' target='_black'>Send a message</a>
              </article>
        </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type='text' name='name' placeholder='Your Full Name' required/>
            <input type='email' name='email' placeholder='Your Email Address' required/>
            <textarea name='message' aria-rowspan='10' placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-warning'><b>Send Message</b></button>
          </form>

      </div>
      </div>
    </section>
  )
}

export default Contact