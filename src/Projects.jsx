import React, { useState } from 'react';
import './Projects.css';
import myImage1 from './assets/weather.jpg';
import myImage3 from './assets/searcheng.png';
import myImage4 from './assets/notetaker.png';
import myImage5 from './assets/quiz.png';
import myImage6 from './assets/yourcareer.png';
import myImage7 from './assets/pgm.png';

export default function Projects() {
  // Array containing data for each card
  const [cardData, setCardData] = useState([
    { id: 1, imageUrl: myImage1, header: 'Weather Notifier (Python)', text: 'Developed a Python program for live weather updates using web scraping and Windows 10 notifications.' },
    { id: 2, imageUrl: 'https://cdn.shopify.com/s/files/1/0070/7032/files/best_20image_20size_20for_20website.png?v=1706796103', header: 'Rock-Paper-Scissors Game (Python/Tkinter)', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo velit ac tortor ultrices, vel vehicula libero maximus. Vestibulum nec consequat nisl.' },
    { id: 3, imageUrl: myImage3, header: 'Search Engine Interface (HTML/CSS/JavaScript)', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo velit ac tortor ultrices, vel vehicula libero maximus. Vestibulum nec consequat nisl.' },
    { id: 4, imageUrl: myImage4, header: 'Note Taker Application (Python/Tkinter/MySQL)', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo velit ac tortor ultrices, vel vehicula libero maximus. Vestibulum nec consequat nisl.' },
  ]);

  const moreData = [
    { id: 5, imageUrl: myImage5, header: 'Quiz Application (HTML/CSS/JS)', text: 'Developed a Python program for live weather updates using web scraping and Windows 10 notifications.' },
    { id: 6, imageUrl: myImage6, header: 'Your Carrer Application (Flutter)', text: 'Developed a Python program for live weather updates using web scraping and Windows 10 notifications.' },
    { id: 7, imageUrl: myImage7, header: 'Password Generator and Manager (Full Stack Java)', text: 'Developed a Python program for live weather updates using web scraping and Windows 10 notifications.' },
    { id: 8, imageUrl: 'https://cdn.shopify.com/s/files/1/0070/7032/files/best_20image_20size_20for_20website.png?v=1706796103', header: 'Portfolio Web Site(React)', text: 'Developed a Python program for live weather updates using web scraping and Windows 10 notifications.' }
  ];

  const [showButton, setShowButton] = useState(true); // State to track visibility of the button

  // Function to handle adding more data
  const handleViewMore = () => {
    setCardData(prevData => [...prevData, ...moreData]);
    setShowButton(false); // Hide the button after clicking
  };

  return (
    <div className='layout' id='projects'>
      <div style={{paddingLeft:"3%"}}>
        <h4 style={{color:"#8491A0"}}>MY PROJECTS</h4>
        <h1 style={{fontSize:"50px"}}>Work that I've done for the past 3 years</h1>
      </div>
      {cardData.map(card => (
        <div key={card.id} className="card">
          <img src={card.imageUrl} alt="Image"/>
          <div className="text">
            <h2>{card.header}</h2>
            <p>{card.text}</p>
          </div>
        </div>
      ))}
      {showButton && ( // Render the button only if showButton is true
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",height:"300px"}}>
          <button className='viewmore' onClick={handleViewMore}>View All Projects</button>
        </div>
      )}
    </div>
  );
}
