import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({
  stylesProject,
  projectTitle,
  projectLink,
}) {
  return (
    <div className="col col--6">
      <div
        className={clsx(
          "card margin-bottom--lg",
          styles.projectCard,
          stylesProject
        )}
      >
        <Link className="margin-bottom--xl" to={projectLink}>
          <h1
            className={clsx(
              "padding-top--xl padding-left--lg",
              styles.cardTitle
            )}
          >
            {projectTitle}
          </h1>
        </Link>
      </div>
    </div>
  );
}
