import React from "react";
import styles from "./Section.module.css";

export default function Section(props) {
  return (
    <section className={props.border ? styles.slide : ""}>
      <div className="container">
        <div className="margin-top--xl margin-bottom--xl">{props.children}</div>
      </div>
    </section>
  );
}
