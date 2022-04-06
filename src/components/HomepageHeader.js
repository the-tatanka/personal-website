import React from "react";
import clsx from "clsx";
import styles from "./HomepageHeader.module.css";

export default function HomepageHeader() {
  return (
    <div className={clsx("hero hero--dark", styles.heroBackground)}>
      <div className="container">
        <h1
          className={clsx(
            "hero__title margin-bottom--md margin-top--xl",
            styles.heroTitle
          )}
        >
          hi.
        </h1>

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
      </div>
    </div>
  );
}
