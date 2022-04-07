import React from "react";
import Layout from "@theme/Layout";
import clsx from "clsx";
// import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";

import HomepageHeader from "../components/HomepageHeader";
import Slide from "../components/Slide";
import ProjectContainer from "../components/ProjectContainer";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <Layout
      title="Hello"
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />

      <main>
        <Slide>
          <p className={clsx(styles.highlight, styles.text)}>
            I'm Sebastian — an ex freelance digital product creator. I'm
            passionate about software, cycling, and sharing what I know.
            Currently employed as security expert at Mercedes Benz Tech
            Innovation based in Ulm, Germany.
          </p>

          <p className={styles.text}>
            My writing style is concise - no bla. Given that I am an
            enthusiastic cyclist, I add bike pictures of my rides.
          </p>

          <p className={styles.text}>Welcome to my home on the internet!</p>
        </Slide>

        <ProjectContainer>
          <ProjectCard
            stylesProject={styles.firstProject}
            projectTitle="Security Toolchain"
            projectLink="/docs/intro"
          />

          <ProjectCard
            stylesProject={styles.secondProject}
            projectTitle="Interactive Presentations"
            projectLink="/docs/intro"
          />

          <ProjectCard
            stylesProject={styles.thirdProject}
            projectTitle="Low Code"
            projectLink="/docs/intro"
          />
        </ProjectContainer>

        <Slide>
          <div className="row">
            <div className="col col--5">
              <h1 className={styles.title}>Writing</h1>
            </div>

            <div className="col col--7">
              <div className={clsx(styles.listingEnd)}>
                <h3 className={styles.position}>Article Title</h3>

                <p>
                  <span
                    className={clsx(
                      "badge badge--secondary",
                      styles.articleStatus
                    )}
                  >
                    New
                  </span>{" "}
                  July 2021 ·{" "}
                  <a
                    className=""
                    href="https://www.wix.com/blog/2020/03/how-to-make-a-personal-website/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Medium article X
                  </a>
                </p>
              </div>

              <div className={clsx("margin-top--lg", styles.listingEnd)}>
                <h3 className={styles.position}>Article Title</h3>
                <p>
                  <span
                    className={clsx(
                      "badge badge--secondary",
                      styles.articleStatus
                    )}
                  >
                    New
                  </span>{" "}
                  July 2021 ·{" "}
                  <a
                    className=""
                    href="https://www.wix.com/blog/2020/03/how-to-make-a-personal-website/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Medium article X
                  </a>
                </p>
              </div>

              <div className={clsx("margin-top--lg", styles.listingEnd)}>
                <h3 className={styles.position}>Article Title</h3>
                <p>
                  July 2021 ·{" "}
                  <a
                    className=""
                    href="https://www.wix.com/blog/2020/03/how-to-make-a-personal-website/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Medium article X
                  </a>
                </p>
              </div>

              <div className={clsx("margin-top--lg", styles.listingEnd)}>
                <h3 className={styles.position}>Article Title</h3>
                <p>
                  July 2021 ·{" "}
                  <a
                    className=""
                    href="https://www.wix.com/blog/2020/03/how-to-make-a-personal-website/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Medium article X
                  </a>
                </p>
              </div>

              <div className={clsx("margin-top--lg", styles.listingEnd)}>
                <h3 className={styles.position}>Article Title</h3>
                <p>
                  July 2021 ·{" "}
                  <a
                    className=""
                    href="https://www.wix.com/blog/2020/03/how-to-make-a-personal-website/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Medium article X
                  </a>
                </p>
              </div>

              <div className={clsx("margin-top--lg")}>
                <h3 className={styles.position}>Article Title</h3>
                <p>
                  July 2021 ·{" "}
                  <a
                    className=""
                    href="https://www.wix.com/blog/2020/03/how-to-make-a-personal-website/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Medium article X
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Slide>

        {/*
<Slide>
          <div className="row">
            <div className="col col--5">
              <h1 className={styles.title}>Experience</h1>
            </div>

            <div className="col col--7">
              <div className={clsx(styles.listingEnd)}>
                <h3 className={styles.position}>Position</h3>

                <h4 className={styles.company}>Company</h4>

                <p className={styles.date}>October 2020 - July 2021</p>

                <ul className={styles.text}>
                  <li>Coffee</li>
                  <li>Tea</li>
                  <li>Milk</li>
                </ul>
              </div>

              <div className={clsx("margin-top--lg", styles.listingEnd)}>
                <h3 className={styles.position}>Position</h3>

                <h4 className={styles.company}>Company</h4>

                <p className={styles.date}>October 2020 - July 2021</p>

                <ul className={styles.text}>
                  <li>Coffee</li>
                  <li>Tea</li>
                  <li>Milk</li>
                </ul>
              </div>

              <div className={clsx("margin-top--lg")}>
                <h3 className={styles.position}>Position</h3>

                <h4 className={styles.company}>Company</h4>

                <p className={styles.date}>October 2020 - July 2021</p>

                <ul className={styles.text}>
                  <li>Coffee</li>
                  <li>Tea</li>
                  <li>Milk</li>
                </ul>
              </div>
            </div>
          </div>
        </Slide>
          */}
      </main>
    </Layout>
  );
}
