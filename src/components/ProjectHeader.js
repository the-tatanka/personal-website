import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import FadeIn from "./FadeIn";

import styles from "./ProjectHeader.module.css";

export default function ProjectHeader() {
  return (
    <section>
      <div className="container-fluid">
        <div className="row row--no-gutters">
          <div
            className={clsx("col col--8", styles.project, styles.firstProject)}
          >
            <FadeIn delay={50}>
              <Link to="/docs/security-toolchain/intro">
                <h1
                  className={clsx(
                    "padding-top--xl padding-left--xl",
                    styles.title
                  )}
                >
                  Security Toolchain
                </h1>
              </Link>
            </FadeIn>
          </div>

          <div
            className={clsx("col col--4", styles.project, styles.secondProject)}
          >
            <FadeIn delay={100}>
              <Link to="/docs/low-code/Intro">
                <h1
                  className={clsx(
                    "padding-top--xl padding-left--xl",
                    styles.title
                  )}
                >
                  Low Code
                </h1>
              </Link>
            </FadeIn>
          </div>

          <div
            className={clsx("col col--6", styles.project, styles.thirdProject)}
          >
            <FadeIn delay={150}>
              <Link to="/docs/threat-modeling/Intro">
                <h1
                  className={clsx(
                    "padding-top--xl padding-left--xl",
                    styles.title
                  )}
                >
                  Threat Modeling
                </h1>
              </Link>
            </FadeIn>
          </div>

          <div
            className={clsx("col col--6", styles.project, styles.fourthProject)}
          >
            <FadeIn delay={200}>
              <Link to="/docs/interactive-presentations/Intro">
                <h1
                  className={clsx(
                    "padding-top--xl padding-left--xl",
                    styles.title
                  )}
                >
                  Interactive Presentations
                </h1>
              </Link>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
