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
          : {
              width: "100%",
              // height: "75%",
              // border: "1px solid var(--ifm-color-emphasis-300)",
            }
      }
    >
      <Slide {...properties}>
        <div
          className={clsx(
            styles.eachSlide,
            fullScreen ? styles.fullScreenOn : styles.fullScreenOff
          )}
        >
          <div className="row" style={{ height: "100%" }}>
            <div
              className={clsx(
                "col col--6",
                fullScreen ? "padding--xl" : "padding--lg"
              )}
            >
              <h1>Test Slide 1</h1>

              <h2>
                <ul>
                  <li>Coffee</li>
                  <li>Tea</li>
                  <li>Milk</li>
                </ul>
              </h2>
            </div>

            <div className={clsx("col col--6", styles.firstProject)}></div>
          </div>

          <button
            className={clsx(
              "button",
              styles.fullScreenButton,
              fullScreen
                ? styles.fullScreenButtonClose
                : styles.fullScreenButtonOpen
            )}
            onClick={() => setFullScreen(!fullScreen)}
          >
            {fullScreen ? "X" : "Open"}
          </button>
        </div>

        <div
          className={clsx(
            styles.eachSlide,
            fullScreen ? styles.fullScreenOn : styles.fullScreenOff
          )}
        >
          <div className="row" style={{ height: "100%" }}>
            <div
              className={clsx(
                "col col--6",
                fullScreen ? "padding--xl" : "padding--lg"
              )}
            >
              <h1>Test Slide 2</h1>

              <h2>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </h2>

              <h2>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</h2>
            </div>

            <div className={clsx("col col--6", styles.firstProject)}></div>
          </div>

          <button
            className={clsx(
              "button",
              styles.fullScreenButton,
              fullScreen
                ? styles.fullScreenButtonClose
                : styles.fullScreenButtonOpen
            )}
            onClick={() => setFullScreen(!fullScreen)}
          >
            {fullScreen ? "X" : "Open"}
          </button>
        </div>
      </Slide>
    </div>
  );
};

export default Test;
