import React from 'react';
import './App.css';

import Header from './components/header/header'
import TechStack from './components/stack/stack';

class App extends React.Component {
  render(){ 
    const myImage = 'https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/16178757_1207995335954965_1017026096762378951_o.jpg?_nc_cat=111&_nc_oc=AQnEv5LR7nT9Jn8zxyaVh0ACBhUrWjI_dUDmD4eMhgz_QpWaLzqXmqHEYlRD2NeZ40k&_nc_ht=scontent-sjc3-1.xx&oh=d580ae38f6e70f2bba90245a39d1b95f&oe=5E51A91E'
    
    return (
      <div>
          <Header/>
          <div className = 'bg'>
            <h1 className = 'margin'>Dennis Ninic</h1>
            <div className = 'myFace'>
              <img alt ='me!'src={myImage}/>
            </div>
  
            <h2 className = 'margin'>Full Stack Web Developer</h2>
          </div>
          <TechStack/>
      </div>
    );

    }
}

export default App;
