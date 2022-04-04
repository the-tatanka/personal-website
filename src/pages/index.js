import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
// import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";

function HomepageHeader() {
  // const { siteConfig } = useDocusaurusContext();

  return (
    <div className={clsx("hero hero--dark", styles.heroBackground)}>
      <div className="container">
        <h1 className="hero__title margin-bottom--md margin-top--xl">
          software
        </h1>
        <p className="hero__subtitle margin-bottom--xl">
          Don't Optimize Something That Shouldn't Exist.
        </p>
        <div>
          <Link
            className="button button--primary button--lg margin-bottom--xl"
            to="/docs/intro"
          >
            Get Started
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
          <p>Parallel to biking</p>
        </div>
      </main>
    </Layout>
  );
}
