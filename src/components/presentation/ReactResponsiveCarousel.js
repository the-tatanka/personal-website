import React, { useState } from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import "./ReactResponsiveCarousel.css";

const ReactResponsiveCarousel = () => {
  const [fullscreen, setFullscreen] = useState(false);

  return (
    <div className={fullscreen ? "presentation-mode" : ""}>
      <Carousel showArrows>
        <div className="my-slide primary">
          <h1
            className="fullscreen-button"
            onClick={() => setFullscreen(!fullscreen)}
          >
            TEST 1
          </h1>

          <p>
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
            amet.
          </p>
        </div>

        <div className="my-slide secondary">
          <div className="row" style={{ height: "100%" }}>
            <div className="col col--6">
              <h1
                className="fullscreen-button"
                onClick={() => setFullscreen(!fullscreen)}
              >
                TEST 2
              </h1>

              <div className="col-demo">
                At vero eos et accusam et justo duo dolores et ea rebum. Stet
                clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                dolor sit amet.
              </div>
            </div>

            <div className="col col--6 image"></div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default ReactResponsiveCarousel;
