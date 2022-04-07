import React from "react";
import { Fade } from "react-awesome-reveal";

/**
 * https://www.npmjs.com/package/react-awesome-reveal
 *
 * There are two ways to make elements in a component appear one after the other:
 * "cascade" makes all elements appear one after the other, but can be a bit slow.
 * "delay" determines the delay of the appearance, so the individual can be timed accordingly.
 */
export default function FadeIn({ children, cascade = false, delay = 0 }) {
  return (
    <Fade triggerOnce cascade={cascade} delay={delay}>
      {children}
    </Fade>
  );
}
