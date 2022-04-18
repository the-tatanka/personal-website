import React from "react";
import Layout from "@theme/Layout";
import clsx from "clsx";
// import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";

import Section from "../components/Section";
import FadeIn from "../components/FadeIn";
import ProjectHeader from "../components/ProjectHeader";

export default function Home() {
  return (
    <Layout
      title="Home"
      description="Description will go into a meta tag in <head />"
    >
      <div className="home">
        <ProjectHeader />

        <main>
          <FadeIn delay={200}>
            <Section border={false}>
              <p className={clsx(styles.highlight, styles.text)}>
                I'm Sebastian Scherer.
                {/*
                — an ex freelance digital product creator. I'm
                passionate about software, cycling, and sharing what I know.
                Currently employed as security expert at Mercedes Benz Tech
                Innovation based in Ulm, Germany.
                */}
              </p>

              <p className={styles.text}>
                My writing style is concise - no bs. Given that I am an
                enthusiastic cyclist, I add images of my rides.
              </p>

              <p className={styles.text}>Welcome to my home on the internet!</p>
            </Section>
          </FadeIn>

          <FadeIn delay={400}>
            <Section border={true}>
              <div className="row">
                <div className="col col--5">
                  <h1 className={styles.title}>Blog</h1>
                </div>

                <div className="col col--7">
                  <FadeIn delay={500}>
                    <div className={clsx(styles.listingEnd)}>
                      <h3 className={styles.articleTitle}>
                        Why you should have a personal website
                      </h3>

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
                  </FadeIn>

                  <FadeIn delay={550}>
                    <div className={clsx("margin-top--lg", styles.listingEnd)}>
                      <h3 className={styles.articleTitle}>
                        Building a personal website with docusaurus
                      </h3>
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
                  </FadeIn>

                  <FadeIn delay={600}>
                    <div className={clsx("margin-top--lg", styles.listingEnd)}>
                      <h3 className={styles.articleTitle}>
                        Tech Stacks - simple is better
                      </h3>
                      <p>
                        <span
                          className={clsx(
                            "badge badge--secondary",
                            styles.articleStatus
                          )}
                        >
                          New
                        </span>{" "}
                        July 2022 ·{" "}
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
                  </FadeIn>

                  {/*
                  <FadeIn delay={600}>
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
                  </FadeIn>

                  <FadeIn delay={650}>
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
                  </FadeIn>

                  <FadeIn delay={700}>
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
                  </FadeIn>

                  <FadeIn delay={750}>
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
                  </FadeIn>
                  */}
                </div>
              </div>
            </Section>
          </FadeIn>
        </main>
      </div>
    </Layout>
  );
}
