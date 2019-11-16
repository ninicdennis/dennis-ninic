import React from 'react'
import './stack.css'

import { FaReact, FaHtml5, FaCss3Alt,
         FaNodeJs, FaJs, FaDocker,
         FaServer, FaKeyboard, FaFedora,
         FaTerminal, FaGithub, FaMailBulk, FaWindowMaximize}
          from "react-icons/fa";
import Portfolio from '../portfolio/portfolio';
import AboutMe from '../about/about';

class TechStack extends React.Component {
   render() {
      return(
         <div className = 'main'>
            <div className = 'whitespace' />
            
            <div className ='box'>
               <div className = 'techead'>
                  <h1 className = 'appHeader'>
                  Technology Stack
                  </h1>
               </div>

               <div className = 'iconBundle'>
               <div className = 'icon'>
                  <p>React</p>
                  <FaReact size color = 'white'/>
               </div>

               <div className = 'icon'>
                  <p>Javascript</p>
                  <FaJs size color = 'white'/>
                  </div>

               <div className = 'icon'>
                  <p>Html5</p>
                  <FaHtml5 size color = 'white'/>
                  </div>

               <div className = 'icon'>
                  <p>CSS3</p>
                  <FaCss3Alt size color = 'white'/>
                  </div>

               <div className = 'icon'>
                  <p>Node.js</p>
                  <FaNodeJs size color = 'white'/>
                  </div>

               <div className = 'icon'>
                  <p>PostgreSQL</p>
                  <FaServer size color = 'white'/>
                  </div>

               <div className = 'icon'>
                  <p>Docker</p>
                  <FaDocker size color = 'white'/>
                  </div>

                <div className = 'icon'>
                  <p>Hapi.js</p>
                  <FaKeyboard size color = 'white'/>
                  </div>
               </div>
               <h1 className = 'appHeader'>
                  Developer Kit
               </h1>
               <div className = 'iconBundle'>
               <div className = 'icon'>
                  <p>Fedora</p>
                  <FaFedora size color = 'white'/>
               </div>
               <div className = 'icon'>
                  <p>VSCode</p>
                  <FaTerminal size color = 'white'/>
               </div>
               <div className = 'icon'>
                  <p>Github</p>
                  <FaGithub size color = 'white'/>
               </div>
               <div className = 'icon'>
                  <p>Postman</p>
                  <FaMailBulk size color = 'white'/>
               </div>
               <div className = 'icon'>
                  <p>i3wm</p>
                  <FaWindowMaximize size color = 'white'/>
               </div>
               <div> 
               </div>
               </div>

               <Portfolio />  
               <AboutMe /> 
            </div>
            <div className = 'whitespace' />

            
            
         </div>
      )
   }
} 

export default TechStack