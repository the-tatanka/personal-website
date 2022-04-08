import React from "react";
import styles from "./HomepageHeader.module.css";
import FadeIn from "./FadeIn";

export default function HomepageHeader() {
  return (
    <div
      className={styles.heroSection}
      onClick={() => window.scrollTo({ top: 800, left: 0, behavior: "smooth" })}
    >
      <div className="container">
        <FadeIn delay={50}>
          <h1 className={styles.heroTitle}>hi.</h1>

          {/*
          <h1 className="hero__title margin-bottom--md margin-top--xl">
            Hi, I'm Sebastian.
          </h1>
          <p className="hero__subtitle margin-bottom--xl">I love software.</p>
          <div>
            <Link
              className="button button--primary button--lg margin-bottom--xl"
              to="/docs/intro"
            >
              Get Started ⇩
            </Link>
          </div>
          */}
        </FadeIn>
      </div>
    </div>
  );
}
