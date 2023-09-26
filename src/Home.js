import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './Home.css'

const tourData = [
  {
    date: 'JUL 16',
    location: 'DETROIT, MI',
    venue: 'DTE ENERGY MUSIC THEATRE',
    ticketLink: '#', 
  },
  {
    date: 'JUL 19',
    location: 'TORONTO, ON',
    venue: 'BUDWEISER STAGE',
    ticketLink: '#', 
  },
  {
    date: 'JUL 22',
    location: 'BRISTOW, VA',
    venue: 'JIGGY LUBE LIVE',
    ticketLink: '#', 
  },
  {
    date: 'JUL 29',
    location: 'PHOENIX, AZ',
    venue: 'AK-CHIN PAVILION',
    ticketLink: '#', 
  },
  {
    date: 'AUG 2',
    location: 'LAS VEGAS, NV',
    venue: 'T-MOBILE ARENA',
    ticketLink: '#', 
  },
  {
    date: 'AUG 7',
    location: 'CONCORD, CA',
    venue: 'CONCORD PAVILION',
    ticketLink: '#', 
  },
  
];

function Home() {
  return (
    <div>
      {/* First Div */}
      <div className="first-div">
        <h1>The Generics</h1>
        <Button style={{fontFamily:'Arial'}}>
          Get our Latest Album
        </Button>
        <br />
        <Button className='play-button' variant="link">&#9654;</Button>
      </div>

      {/* Second Div */}
      <Container className="second-div">
        <h2>Tours</h2>
        <table className="tour-table">
          <tbody>
            {tourData.map((tour, index) => (
              <tr key={index}>
                <td className="tour-date">{tour.date}</td>
                <td className="tour-location">{tour.location}</td>
                <td className="tour-venue">{tour.venue}</td>
                <td>
                  <Button
                    variant="primary"
                    className="tour-button"
                    href={tour.ticketLink}
                    target="_blank"
                  >
                    BUY TICKETS
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>

       <div className="third-div">
        <h1>The Generic</h1>
      </div>

    </div>
  );
}

export default Home;
