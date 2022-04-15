import React, { useState } from "react";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import clsx from "clsx";
import styles from "./Test.module.css";

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  },
};

const Test = () => {
  const [fullScreen, setFullScreen] = useState(false);

  /*
  const changeStyle = () => {
    console.log("you just clicked");

    setFullScreen({
      zIndex: "9999999999",
      width: "100vw",
      height: "100vh",
      position: "fixed",
      top: "0",
      left: "0",
    });
  };
  */

  return (
    <div
      style={
        fullScreen
          ? {
              zIndex: "9999999999",
              width: "100vw",
              height: "100vh",
              position: "fixed",
              top: "0",
              left: "0",
            }
          : {}
      }
    >
      <Slide {...properties}>
        <div className={clsx("padding--xl", styles.eachSlide)}>
          <div className="row">
            <div className="col col--6">
              <h1>Test Slide 1</h1>

              <ul>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
              </ul>
            </div>

            <div className={clsx("col col--6", styles.firstProject)}></div>
          </div>
        </div>

        <div className={styles.eachSlide}>
          <h1>Test Slide 2</h1>

          <ol>
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
          </ol>

          <button
            className="button button--primary"
            onClick={() => setFullScreen(!fullScreen)}
          >
            Secondary
          </button>
        </div>

        <div className={styles.eachSlide}>
          <h1>Test Slide 3</h1>

          <ul>
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
          </ul>
        </div>
      </Slide>
    </div>
  );
};

export default Test;
