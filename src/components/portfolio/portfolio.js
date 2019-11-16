import React from 'react'
import './portfolio.css'
import { FaPaperPlane, FaShoppingCart } from 'react-icons/fa'

class Portfolio extends React.Component {
   render() {
      return(
         <div>
            <h1 className = 'portfolio-header'>Portfolio</h1>

            <div className = 'portfolio-stack'>
               <div className = 'portfolio-icon'>
                  <h3>Simple Forum</h3>
                  <FaPaperPlane size color='#70A3CC'/>
                  <article>
                     A Forum type website where users can sign up and create posts.
                      You can also update your own posts and delete as well!
                  </article>
                  <div className = 'links'>
                  <a href ='https://www.github.com/pupper-bot/simple-forum'>Github</a>
                  <a href ='https://simple-forum-main.herokuapp.com/'>Live!</a>

                  </div>
               </div>


               <div className = 'portfolio-stack'>
               <div className = 'portfolio-icon'>
                  <h3>React Shopping</h3>
                  <FaShoppingCart size color='#646464'/>
                  <article>
                     An Amazon like shopping site to where users can purchase fake items.
                     Items are stored into the backend, and will dynamically update the cart.
                  </article>
                  <div className = 'links'>
                  <a href ='https://www.github.com/pupper-bot/react-shopping'>Github</a>
                  </div>


                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default Portfolio