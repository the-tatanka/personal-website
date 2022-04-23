import React from "react";

import presentationContext from "./PresentationProvider";

import { Fullscreen, FullscreenExit } from "react-bootstrap-icons";

export default function Slide({ children }) {
  const [presentation, setPresentation] = React.useContext(presentationContext);

  return (
    <div
      style={{
        textAlign: "left",
        height: "100vh",
        padding: "75px",

        backgroundColor: "aquamarine",
      }}
    >
      <div className="row" style={{ height: "90%" }}>
        {children}
      </div>

      <div
        className="row"
        style={{ height: "10%", textTransform: "uppercase" }}
      >
        <div className="col col--6" style={{ textAlign: "left" }}>
          Sebastian Scherer
        </div>

        <div
          className="col col--6"
          style={{ textAlign: "right", cursor: "pointer" }}
          onClick={() => setPresentation(!presentation)}
        >
          {presentation ? <FullscreenExit /> : <Fullscreen />}
        </div>
      </div>
    </div>
  );
}
