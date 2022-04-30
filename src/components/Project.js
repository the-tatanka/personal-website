import React from "react";

import Link from "@docusaurus/Link";

import clsx from "clsx";
import styles from "./Project.module.css";

import Bike2 from "@site/static/img/bike_2.webp";

export default function Project({
  title = "Project title",
  link = "/docs",
  style = {
    background: `url(${Bike2})`,
    /* Center and scale the image nicely */
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  width = "col col--6",
}) {
  return (
    <div className={clsx(width, styles.project)} style={style}>
      <Link to={link}>
        <h1 className={clsx("padding-top--xl padding-left--xl", styles.title)}>
          {title}
        </h1>
      </Link>
    </div>
  );
}
