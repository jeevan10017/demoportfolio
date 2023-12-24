import React from 'react';
import Typewriter from './typewriter'; // Make sure to adjust the import path
import profileImage from './pic.jpg';
import './Home.css';

const Home = () => {
  return (
    <section className="home">
      <div className="background-overlay">
        <div className="home-content">
          <div className="profile-photo">
            <img src={profileImage} alt="Profile" />
          </div>
          <div className="welcome-message">
            <div className="heading">
              <p>
                Hi, my <br />
                name is <em><b><Typewriter text="Jeevan Kumar Korra" /></b></em>
              </p>
            </div>
            <p>
              {/* I am an <em><Typewriter text="Creative web developer" /></em> from <br /> */}I am an <em>Creative Web developer</em>
              <b>
               <p>{/* <Typewriter text="IIT Kharagpur" /> */}IIT Kharagpur</p> 
              </b>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
