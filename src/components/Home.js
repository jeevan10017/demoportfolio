import React from 'react';
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
              <p>Hi ,my <br />
                name is <b>Jeevan</b></p>
            </div>
            <p>I am an <em> Creative web developer</em> from <br />
              <b>
                IIT Kharagpur </b>
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;



