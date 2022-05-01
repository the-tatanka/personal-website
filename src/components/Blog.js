import React from "react";

import clsx from "clsx";
import styles from "./Blog.module.css";

export default function Blog({
  title = "Blog title",
  tags = ["TEST Tag", "New", "Tatanka"],
  date = "July 2022",
  url = "https://www.wix.com/blog/2020/03/how-to-make-a-personal-website/",
  platform = "Life",
}) {
  return (
    <div className={clsx("margin-bottom--md", styles.blog)}>
      {
        // TODO add Link to blog
      }
      <h3 className={styles.title}>{title}</h3>

      <p>
        {tags.map((tag, index) => (
          <span
            key={index}
            className={clsx(
              "badge badge--secondary margin-right--xs",
              styles.tag
            )}
          >
            {tag}
          </span>
        ))}{" "}
        · {date} ·{" "}
        <a
          className="margin-horiz--xs"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {platform}
        </a>
      </p>
    </div>
  );
}
