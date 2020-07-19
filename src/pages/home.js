import React from "react";
import { PostMasonry, MasonryPost, PostGrid } from "../components/common";
import trending from "../assets/mocks/trending";
import featured from "../assets/mocks/featured";

const featuredConfig = {
  0: {
    gridArea: "1 / 1 / 2 / 3",
    height: "200px",
  },
  1: {
    height: "200px",
  },
  3: {
    height: "430px",
    marginLeft: "30px",
    width: "630px",
  },
};

const trendingConfig = {
  1: {
    gridArea: "1 / 2 / 3 / 3",
  },
};

const mergeStyles = function (posts, config) {
  posts.forEach((post, index) => {
    post.style = config[index];
    post.author = "Dongeun Paeng";
    post.description =
      "As a consultant, I spent most of my time developing with Microsoft technologies for almost 20 years. I have loved Visual Studio (Interdev at one time) as my coding environment. Lately, I have been using a MacBook Pro to do some cross platform development, but never really found anything that fit well for what I was trying to do. Sure, TextMate was probably my best option…I just didn’t spend enough time in it to care to tweak it to my needs.";
  });
};

const recentPosts = [...trending, ...featured, ...featured];

mergeStyles(trending, trendingConfig);
mergeStyles(featured, featuredConfig);

const lastFeatured = featured.pop();

export default function Home() {
  return (
    <main className="home">
      <section className="container">
        <div className="row">
          <h1>Featured Posts</h1>
          <section className="featured-posts-container">
            <PostMasonry posts={featured} columns={2} tagsOnTop={true} />
            <MasonryPost post={lastFeatured} tagsOnTop={true} />
          </section>
        </div>
      </section>

      <section className="bg-white">
        <section className="container">
          <div className="row">
            <h1>Recent Posts</h1>
            <PostGrid posts={recentPosts} />
          </div>
        </section>
      </section>

      <section className="container">
        <div className="row">
          <h1>Trending Posts</h1>
          <PostMasonry posts={trending} columns={3} />
        </div>
      </section>
    </main>
  );
}
