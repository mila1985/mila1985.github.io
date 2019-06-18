import React from 'react';
import aboutme from './aboutme.jpg';
import './AboutMe.css';


const AboutMe = () => {
  return (
    <div>
      <div>
        <h1 className="page-title">About me</h1>
      </div>  

      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className ="text-about">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat.</p>
              <br/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat.</p>
              <br/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat.</p>
              <br/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat.</p>
              <br/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        

 
          <div className="col-6">
            <img className="about-img" src={aboutme} alt="about me"/>
          </div>
        </div>
      </div>
     
     </div>
      
  )
}

export default AboutMe;
