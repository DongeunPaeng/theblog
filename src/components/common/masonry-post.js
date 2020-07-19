import React from "react";
import { TagRow } from "./";

export default function MasonryPost({ post, tagsOnTop }) {
  const windowWidth = window.innerWidth;
  const imageBackground = { backgroundColor: "rgb(242, 242, 247)" };

  const style =
    windowWidth > 900 ? { ...imageBackground, ...post.style } : imageBackground;

  return (
    <a className="masonry-post overlay" style={style} href={post.link}>
      <div
        className="image-text"
        style={{ justifyContent: tagsOnTop ? "space-between" : "flex-end" }}
      >
        <TagRow tags={post.categories} />
        <div>
          <h1 className="image-title">{post.title}</h1>
          <span className="image-date">{post.date}</span>
        </div>
      </div>
    </a>
  );
}
