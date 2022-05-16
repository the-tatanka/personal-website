import React from "react";
import Layout from "@theme/Layout";
import clsx from "clsx";
// import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";

import Section from "../components/Section";
import FadeIn from "../components/FadeIn";

import Blog from "../components/Blog";

import Project from "../components/Project";
import Bike27 from "@site/static/img/bike_27.webp";
import Bike6 from "@site/static/img/bike_6.webp";
import Bike7 from "@site/static/img/bike_7.webp";
import Bike11 from "@site/static/img/bike_11.webp";

export default function Home() {
  return (
    <Layout
      title="Home"
      description="Description will go into a meta tag in <head />"
    >
      <div className="home">
        <div className="container-fluid">
          <div className="row row--no-gutters">
            <Project
              title="Security Toolchain"
              link="/docs/security-toolchain/intro"
              style={{
                background: `url(${Bike27})`,
                /* Center and scale the image nicely */
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              width="col col--8"
            />

            <Project
              title="Low Code"
              link="/docs/low-code/intro"
              style={{
                background: `url(${Bike6})`,
                /* Center and scale the image nicely */
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              width="col col--4"
            />

            <Project
              title="Threat Modeling"
              link="/docs/threat-modeling/intro"
              style={{
                background: `url(${Bike7})`,
                /* Center and scale the image nicely */
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              width="col col--6"
            />

            <Project
              title="Remote Presentations"
              link="/docs/miscellaneous/remote-presentations"
              style={{
                background: `url(${Bike11})`,
                /* Center and scale the image nicely */
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              width="col col--6"
            />
          </div>
        </div>

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
                My writing style is concise - no blah. Given that I am an
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
                    <Blog
                      title="Why you should have a personal website"
                      tags={["New"]}
                      date="July 2022"
                      url="https://www.wix.com/blog/2020/03/how-to-make-a-personal-website/"
                      platform="Medium"
                    />
                  </FadeIn>

                  <FadeIn delay={550}>
                    <Blog
                      title="Building a personal website with docusaurus"
                      tags={["New"]}
                      date="June 2022"
                      url="https://www.wix.com/blog/2020/03/how-to-make-a-personal-website/"
                      platform="Medium"
                    />
                  </FadeIn>

                  <FadeIn delay={600}>
                    <Blog
                      title="Tech Stacks - simple is better"
                      tags={["New"]}
                      date="July 2022"
                      url="https://www.wix.com/blog/2020/03/how-to-make-a-personal-website/"
                      platform="Medium"
                    />
                  </FadeIn>
                </div>
              </div>
            </Section>
          </FadeIn>
        </main>
      </div>
    </Layout>
  );
}
