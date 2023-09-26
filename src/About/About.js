import React from 'react';
import GenericImage from './generic-image.png'; // Import your image
import './About.css';

function About() {
  return (
    <div>
      {/* First Div */}
      <div className="first-div">
        <h1>The Generics</h1>
      </div>

      {/* Second Div */}
      <div className="second-div">
        <h2>About Us</h2>
        <div className="image-text-container">
          <img
            src={GenericImage}
            alt="The Generics Band"
            className="circular-image"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo
            ipsum vel tortor eleifend, a tincidunt neque tempor. Nullam nec libero
            et orci iaculis cursus non a elit. Sed condimentum massa vel mattis.
            In eget interdum est, a ultricies justo. Curabitur sit amet malesuada
            nulla. Nulla venenatis, leo id lacinia lacinia, massa dolor facilisis
            velit, sit amet vehicula justo libero eu metus.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo
            ipsum vel tortor eleifend, a tincidunt neque tempor. Nullam nec libero
            et orci iaculis cursus non a elit. Sed condimentum massa vel mattis.
         
            In eget interdum est, a ultricies justo. Curabitur sit amet malesuada
            nulla. Nulla venenatis, leo id lacinia lacinia, massa dolor facilisis
            velit, sit amet vehicula justo libero eu metus.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo
            ipsum vel tortor eleifend, a tincidunt neque tempor. Nullam nec libero
            et orci iaculis cursus non a elit. Sed condimentum massa vel mattis.
            In eget interdum est, a ultricies justo. Curabitur sit amet malesuada
            nulla. Nulla venenatis, leo id lacinia lacinia, massa dolor facilisis
            velit, sit amet vehicula justo libero eu metus.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo
            ipsum vel tortor eleifend, a tincidunt neque tempor. Nullam nec libero
            et orci iaculis cursus non a elit. Sed condimentum massa vel mattis.
         
            In eget interdum est, a ultricies justo. Curabitur sit amet malesuada
            nulla. Nulla venenatis, leo id lacinia lacinia, massa dolor facilisis
            velit, sit amet vehicula justo libero eu metus.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
