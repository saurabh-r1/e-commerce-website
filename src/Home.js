import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './Home.css'

// Define your tour data
const tourData = [
  {
    date: 'JUL 16',
    location: 'DETROIT, MI',
    venue: 'DTE ENERGY MUSIC THEATRE',
    ticketLink: '#', // Replace with the actual ticket purchase link
  },
  {
    date: 'JUL 19',
    location: 'TORONTO, ON',
    venue: 'BUDWEISER STAGE',
    ticketLink: '#', // Replace with the actual ticket purchase link
  },
  {
    date: 'JUL 22',
    location: 'BRISTOW, VA',
    venue: 'JIGGY LUBE LIVE',
    ticketLink: '#', // Replace with the actual ticket purchase link
  },
  // Add more tour entries as needed
];

function Home() {
  return (
    <div>
      {/* First Div */}
      <div className="first-div">
        <h1>The Generics</h1>
        <Button variant="outline-primary">Get our latest album</Button>
        <br />
        <Button variant="link">&#9654;</Button>
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
    </div>
  );
}

export default Home;
