import React from 'react';
import './About.css';
import profileImage from './dxn.jpg'; 
import { FaChevronDown } from 'react-icons/fa';

const accordionData = [
  {
    title:  <b>Academic Odyssey:</b>,
    content: 'My academic journey commenced at Jawahar Navodaya Vidyalaya, where I fostered a deep passion for learning and exploration. This foundation led me to an incredible opportunity with the Dakshana Foundation, where I received comprehensive coaching for the Joint Entrance Examination (JEE). Through perseverance and dedication, I secured a coveted spot in the Mechanical Engineering program at IIT Kharagpur.',
  },
  {
    title: <b> Unveiling Web Development:</b>,
    content: 'Beyond the realm of gears and mechanics, I have uncovered a fascination for web development. Armed with HTML, CSS, and Javascript, I have delved into crafting digital experiences that blend functionality and aesthetics. This journey has allowed me to harness creativity through intuitive user interfaces and captivating user journeys with my toolkit of web development skills, I have unlocked the potential to create dynamic and engaging websites. From ideation to execution, I revel in the art of seamlessly combining design and code to deliver user-centric solutions..',
  },
  
  {
    title: <b> Badminton: A Passion Beyond Limits:</b>,
    content: 'Beyond my academic pursuits, I am an ardent badminton enthusiast. The court is where I find my solace and unleash my competitive spirit. Through countless rallies and intense matches, I have honed my skills, fueled by an unwavering passion to excel in this dynamic sport.',
  },
  
];

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion ${isOpen ? 'open' : ''}`}>
      <button className="accordion-toggle" onClick={toggleAccordion}>
        {title} <FaChevronDown className={`accordion-icon ${isOpen ? 'open' : ''}`} />
      </button>
      <div className="accordion-content">{content}</div>
    </div>
  );
};

const About = () => {
  return (
    <section className="about">
      <div className="container">
      <div className="image-container">
      <img src={profileImage} alt="Profile" />
        </div>
        <h2>JEEVAN KUMAR KORRA</h2>
        <p><b>Second-Year Undergraduate Student | Mechanical Department | IIT Kharagpur</b></p>
        <p>👋 Hello there! I'm Jeevan Kumar Korra, a passionate second-year undergraduate student pursuing a degree in Mechanical Engineering at the prestigious Indian Institute of Technology (IIT) Kharagpur.</p>
        <div className="accordion-container">
          {accordionData.map((item, index) => (
            <Accordion key={index} title={item.title} content={item.content} />
            
          ))}
          </div>
          <div className="secondp">
          <p>My dual interests in mechanical engineering, web development, and badminton epitomize the fusion of theory and application. By merging engineering insights with coding finesse and on-court strategies, I strive to create innovative solutions that span the physical and digital realms.As my academic voyage continues, I am brimming with excitement about the future.</p>
          </div>
        
      </div>
    </section>
  );
};

export default About;
