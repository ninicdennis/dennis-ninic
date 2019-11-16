import React from 'react'
import './about.css'
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'

class AboutMe extends React.Component {
   render() {
      return(
            <div className ='about-flex'>
               
               <h2>
                  About Me
               </h2>
               <article className ='about-article'>
                  My name is Dennis Ninic and I am a full stack React web developer!
                  I started my passion with a coding bootcamp roughly a year ago, and have been striving
                  to become a proffesional web developer one day. I am very passionate in making websites,
                  as well as growing my potential to the absolute fullest. Thank you for visiting, and 
                  if you would like to reach out to me, please message me at: Pupperbot@protonmail.com.


               </article>

               <article className = 'about-article'>
               Thank you!

               You can also find me here: 
               </article>
               <div className = 'findme'>
                  <div className = 'find-icon'>
                     <a href = 'https://github.com/pupper-bot'><FaGithub size /></a>
                  </div>

                  <div className ='find-icon'>
                     <a href = 'https://linkedin.com/in/dennis-ninic'><FaLinkedin size /></a>
                  </div>

                  <div className = 'find-icon'>
                     <a href = 'https://www.facebook.com/dennis.ninic'><FaFacebook size /></a>
                  </div>
               </div>




            </div>
         
      )
   }
}

export default AboutMe