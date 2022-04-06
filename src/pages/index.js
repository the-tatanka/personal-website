import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
// import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";

import Image from "../../static/img/bike_1.webp";

function HomepageHeader() {
  // const { siteConfig } = useDocusaurusContext();

  return (
    <div className={clsx("hero hero--dark", styles.heroBackground)}>
      <div className="container">
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
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Layout
      title="Hello"
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <div className="container margin-top--xl margin-bottom--xl">
          <p>I'm passionate about coding, cycling, and sharing what I know.</p>

          <p>Welcome to my home on the internet!</p>
        </div>

        <div className="container">
          <div className="row">
            <div className="col col--6">
              <div
                className={clsx(
                  "card margin-bottom--lg",
                  styles.projectCard,
                  styles.firstProject
                )}
              >
                <Link className="margin-bottom--xl" to="/docs/intro">
                  <h1
                    className={clsx(
                      "padding-top--xl padding-left--xl",
                      styles.cardTitle
                    )}
                  >
                    DevSecOps 1
                  </h1>
                </Link>
              </div>
            </div>

            <div className="col col--6">
              <div
                className={clsx(
                  "card margin-bottom--lg",
                  styles.projectCard,
                  styles.firstProject
                )}
              >
                <Link className="margin-bottom--xl" to="/docs/intro">
                  <h1 className={clsx("padding--xl", styles.cardTitle)}>
                    DevSecOps 2
                  </h1>
                </Link>
              </div>
            </div>

            <div className="col col--6">
              <div
                className={clsx(
                  "card margin-bottom--lg",
                  styles.projectCard,
                  styles.firstProject
                )}
              >
                <Link className="margin-bottom--xl" to="/docs/intro">
                  <h1 className={clsx("padding--xl", styles.cardTitle)}>
                    DevSecOps 3
                  </h1>
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.slides}>
            <section className={styles.slide}>
              <h1>Title 1</h1>
            </section>

            <section className={styles.slide}>
              <h1>Title 2</h1>
            </section>

            <section className={styles.slide}>
              <h1>Title 3</h1>
            </section>

            <section className={styles.slide}>
              <h1>Title 4</h1>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
}
