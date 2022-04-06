import React from "react";
import clsx from "clsx";
import styles from "./ProjectContainer.module.css";

export default function ProjectContainer(props) {
  return (
    <section className={styles.slide}>
      <div className="container">
        <div className="margin-top--xl margin-bottom--xl">
          <h1 className={clsx("margin-bottom--lg", styles.title)}>Projects</h1>
          <div className="row">{props.children}</div>
        </div>
      </div>
    </section>
  );
}
